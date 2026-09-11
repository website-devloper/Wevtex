import { NextResponse } from "next/server";
import { WHATSAPP_URL } from "@/lib/site-links";
import { SITE_URL } from "@/lib/seo";
import { leadNotificationEmail, newsletterEmail, autoReplyEmail } from "@/lib/email-templates";

/**
 * Contact / lead Route Handler.
 *
 * Flow: origin check → size and type check → parse → honeypot → rate limit →
 * validate → email the lead to the team inbox (Resend) → auto-reply to the
 * visitor if they gave an email → return JSON.
 *
 * Security layers, in the order a request meets them:
 *  1. Same-site only: a browser on another website cannot post to this form
 *     (Origin must be this site; requests with no Origin must be same-origin).
 *  2. JSON only, 16 KB max, read as text before parsing, so a huge or odd
 *     payload is refused before any work is done.
 *  3. Every field is coerced to a string, stripped of control characters and
 *     capped. Nothing a visitor types can add a header to the email, and the
 *     email templates escape all HTML (lib/email-templates.ts).
 *  4. Honeypot field and a per-IP rate limit against bots.
 *  5. Errors never echo internals to the visitor; details go to the server log.
 *
 * Required env vars (see .env.example):
 *   RESEND_API_KEY     – your Resend API key
 *   LEAD_NOTIFY_EMAIL  – inbox that receives new leads (e.g. leads@wevtex.com)
 *   LEAD_FROM_EMAIL    – verified Resend sender, e.g. "Wevtex <hello@wevtex.com>"
 */

export const runtime = "nodejs";

type Payload = Record<string, unknown>;

const MAX_BODY_BYTES = 16 * 1024;
const EMAIL_RE = /^[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,24}$/;

/* ---------------------------------------------------------------- origin */

const ALLOWED_ORIGINS = (() => {
  const set = new Set<string>();
  const add = (u?: string | null) => { if (u) set.add(u.replace(/\/$/, "")); };
  add(SITE_URL);
  try {
    const u = new URL(SITE_URL);
    add(`${u.protocol}//${u.host.startsWith("www.") ? u.host.slice(4) : `www.${u.host}`}`);
  } catch { /* SITE_URL is validated in lib/seo */ }
  if (process.env.VERCEL_URL) add(`https://${process.env.VERCEL_URL}`);
  if (process.env.VERCEL_BRANCH_URL) add(`https://${process.env.VERCEL_BRANCH_URL}`);
  return set;
})();

/** True when the request comes from a page of this site. */
function isSameSite(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (origin) {
    const o = origin.replace(/\/$/, "");
    if (ALLOWED_ORIGINS.has(o)) return true;
    try {
      return new URL(o).host === req.headers.get("host");
    } catch {
      return false;
    }
  }
  // Browsers always send Origin on a POST from fetch(); without one, accept only
  // an explicit same-origin fetch. Scripts posting from elsewhere are refused.
  return req.headers.get("sec-fetch-site") === "same-origin";
}

/* ---------------------------------------------------------------- fields */

/* Control characters, built from their codes so none sits invisibly in this
   file: CONTROL is every one (CR and LF included, so a value can never add a
   line to an email header); CONTROL_KEEP_LF spares the line feed (code 10)
   for the message body. */
const ch = (n: number) => String.fromCharCode(n);
const CONTROL = new RegExp(`[${ch(0)}-${ch(31)}${ch(127)}]+`, "g");
const CONTROL_KEEP_LF = new RegExp(`[${ch(0)}-${ch(9)}${ch(11)}-${ch(31)}${ch(127)}]+`, "g");

/** A single-line value: string only, no control characters, capped. */
function line(v: unknown, max: number): string {
  return (typeof v === "string" ? v : "").replace(CONTROL, " ").trim().slice(0, max);
}

/** A multi-line value: keeps line breaks, drops every other control character. */
function text(v: unknown, max: number): string {
  return (typeof v === "string" ? v : "")
    .replace(/\r\n?/g, "\n")
    .replace(CONTROL_KEEP_LF, " ")
    .trim()
    .slice(0, max);
}

/* ---------------------------------------------------------------- rate limit */

/**
 * Best-effort in-memory rate limit: max RATE_MAX submissions per IP per window.
 * Serverless instances each have their own memory, so this is a first layer,
 * not a global guarantee. For strict limits use a shared store (Vercel KV /
 * Upstash Redis). Combined with the honeypot it stops most form spam.
 */
const RATE_MAX = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > RATE_MAX;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0].trim() : "") || req.headers.get("x-real-ip") || "unknown";
}

/* ---------------------------------------------------------------- email */

async function sendEmail(opts: { apiKey: string; from: string; to: string; subject: string; html: string; replyTo?: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${opts.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: opts.from,
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 300)}`);
  }
}

const json = (body: object, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

/* ---------------------------------------------------------------- handler */

export async function POST(req: Request) {
  // 1. Same-site only.
  if (!isSameSite(req)) {
    return json({ error: "Forbidden." }, 403);
  }

  // 2. JSON only, bounded size, read before parsing.
  if (!(req.headers.get("content-type") || "").toLowerCase().includes("application/json")) {
    return json({ error: "Unsupported request." }, 415);
  }
  if (Number(req.headers.get("content-length") || 0) > MAX_BODY_BYTES) {
    return json({ error: "That's a bit too long." }, 413);
  }
  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ error: "That's a bit too long." }, 413);
  }
  let body: Payload;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    body = parsed as Payload;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // 3. Honeypot: pretend success so bots don't retry, but leave a trace.
  const trap = line(body.hp_token, 200) || line(body.company_url, 200);
  if (trap !== "") {
    console.warn("Contact form: honeypot triggered, submission dropped.", {
      field: body.hp_token ? "hp_token" : "company_url",
    });
    return json({ ok: true });
  }

  // 4. Rate limit by IP (after the honeypot so bots are cheap to reject).
  if (isRateLimited(clientIp(req))) {
    return json({ error: "Too many attempts. Please wait a few minutes, or message us on WhatsApp." }, 429);
  }

  // 5. Clean and bound every field.
  const name = line(body.name, 120);
  const contact = line(body.contact, 160);
  const business = line(body.business, 120);
  const service = line(body.service, 120);
  const message = text(body.message, 4000);
  const phone = line(body.phone, 60);
  const budget = line(body.budget, 60);
  const timeline = line(body.timeline, 60);
  const source = line(body.source, 60);
  const employees = line(body.employees, 60);
  const topic = line(body.topic, 40);

  if (name.length < 2 || contact.length < 3 || message.length < 5) {
    return json({ error: "Please add your name, a way to reach you, and a short message." }, 422);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !notify || !from) {
    // Don't lose the lead silently: log it server-side so it's recoverable.
    console.error("Contact form: missing email env vars. Lead received:", {
      name, contact, business, service, message, phone, budget, timeline, source, employees, topic,
    });
    return json({ error: "Email isn't configured yet. Please reach us on WhatsApp for now." }, 503);
  }

  const visitorIsEmail = EMAIL_RE.test(contact);

  const adminHtml =
    topic === "newsletter"
      ? newsletterEmail(contact)
      : leadNotificationEmail({ name, contact, business, service, phone, budget, timeline, source, employees, message });

  // Notifying the team is the critical path: if it fails, the lead is lost.
  try {
    await sendEmail({
      apiKey,
      from,
      to: notify,
      subject: `${topic === "newsletter" ? "Inscription newsletter" : "Nouveau prospect"} — ${name}${business ? ` (${business})` : ""}`,
      html: adminHtml,
      replyTo: visitorIsEmail ? contact : undefined,
    });
    console.info("Contact form: lead delivered to team.");
  } catch (err) {
    console.error("Contact form: team notification failed.", err);
    return json({ error: "Something went wrong sending your message. Please try WhatsApp." }, 502);
  }

  // The auto-reply is best-effort: a bounced confirmation must never fail a
  // lead that already reached the team.
  if (visitorIsEmail && topic !== "newsletter") {
    try {
      await sendEmail({
        apiKey,
        from,
        to: contact,
        subject: "Merci, nous avons bien reçu votre message",
        html: autoReplyEmail({
          firstName: name.split(" ")[0] || name,
          whatsappUrl: WHATSAPP_URL,
          hasPhone: phone !== "" || !visitorIsEmail,
        }),
        // hello@wevtex.com has no MX record, so a client who hits Reply on this
        // would be writing into a void. Point them at the inbox we actually read.
        replyTo: notify,
      });
    } catch (err) {
      console.error("Contact form: auto-reply failed (lead still captured).", err);
    }
  }

  return json({ ok: true });
}

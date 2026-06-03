import { NextResponse } from "next/server";

/**
 * Contact / lead Route Handler.
 *
 * Flow: validate → spam check (honeypot) → email the lead to the team inbox
 * (Resend) → auto-reply to the visitor if they gave an email → return JSON.
 *
 * Required env vars (see .env.example):
 *   RESEND_API_KEY     – your Resend API key
 *   LEAD_NOTIFY_EMAIL  – inbox that receives new leads (e.g. leads@wevtex.co)
 *   LEAD_FROM_EMAIL    – verified Resend sender, e.g. "Wevtex <hello@wevtex.co>"
 */

export const runtime = "nodejs";

type Payload = {
  name?: string;
  contact?: string;
  business?: string;
  service?: string;
  message?: string;
  // Honeypot: real users never fill this hidden field.
  company_url?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );

/**
 * Best-effort in-memory rate limit: max RATE_MAX submissions per IP per window.
 * Note: serverless instances each have their own memory, so this is a first
 * layer, not a global guarantee. For strict limits use a shared store (Vercel
 * KV / Upstash Redis). Combined with the honeypot it stops most form spam.
 */
const RATE_MAX = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // Occasional cleanup so the map can't grow unbounded.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
    }
  }
  return recent.length > RATE_MAX;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0].trim() : "") || "unknown";
}

async function sendEmail(opts: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
      "Content-Type": "application/json",
    },
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
    throw new Error(`Resend ${res.status}: ${detail}`);
  }
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — pretend success so bots don't retry.
  if (body.company_url && body.company_url.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Rate limit by IP (after honeypot so bots are cheap to reject).
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many attempts. Please wait a few minutes, or message us on WhatsApp." },
      { status: 429 }
    );
  }

  const name = (body.name || "").trim();
  const contact = (body.contact || "").trim();
  const business = (body.business || "").trim();
  const service = (body.service || "").trim();
  const message = (body.message || "").trim();

  if (name.length < 2 || contact.length < 3 || message.length < 5) {
    return NextResponse.json(
      { error: "Please add your name, a way to reach you, and a short message." },
      { status: 422 }
    );
  }
  if (name.length > 120 || contact.length > 160 || message.length > 4000) {
    return NextResponse.json({ error: "That's a bit too long." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !notify || !from) {
    // Don't lose the lead silently: log it server-side so it's recoverable.
    console.error("Contact form: missing email env vars. Lead received:", {
      name, contact, business, service, message,
    });
    return NextResponse.json(
      { error: "Email isn't configured yet. Please reach us on WhatsApp for now." },
      { status: 503 }
    );
  }

  const visitorIsEmail = EMAIL_RE.test(contact);

  const adminHtml = `
    <h2>New lead from wevtex.co</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:system-ui,sans-serif">
      <tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
      <tr><td><b>Contact</b></td><td>${esc(contact)}</td></tr>
      <tr><td><b>Business</b></td><td>${esc(business) || "—"}</td></tr>
      <tr><td><b>Needs</b></td><td>${esc(service) || "—"}</td></tr>
      <tr><td valign="top"><b>Message</b></td><td>${esc(message).replace(/\n/g, "<br>")}</td></tr>
    </table>`;

  // Notifying the team is the critical path — if this fails, the lead is lost,
  // so surface an error.
  try {
    await sendEmail({
      apiKey,
      from,
      to: notify,
      subject: `New lead — ${name}${business ? ` (${business})` : ""}`,
      html: adminHtml,
      replyTo: visitorIsEmail ? contact : undefined,
    });
  } catch (err) {
    console.error("Contact form: team notification failed.", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try WhatsApp." },
      { status: 502 }
    );
  }

  // The auto-reply is best-effort: a bounced confirmation must never fail a
  // lead that already reached the team. (Also why Resend test mode — which
  // only allows emailing your own address — doesn't break real submissions.)
  if (visitorIsEmail) {
    try {
      await sendEmail({
        apiKey,
        from,
        to: contact,
        subject: "Thanks — we've got your message (Wevtex)",
        html: `
          <p>Hi ${esc(name.split(" ")[0] || name)},</p>
          <p>Thanks for reaching out to Wevtex. We've received your message and will reply
          within a few hours during working hours with honest advice and a clear price.</p>
          <p>Need a faster answer? Message us on WhatsApp.</p>
          <p>— The Wevtex team</p>`,
      });
    } catch (err) {
      console.error("Contact form: auto-reply failed (lead still captured).", err);
    }
  }

  return NextResponse.json({ ok: true });
}

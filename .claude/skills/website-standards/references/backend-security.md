# Strapi Backend & Security Standards

Read this for Strapi content modeling, fetching from Next.js, API tokens, the
form/lead pipeline, deployment, and all security work across both layers.

## Strapi content modeling

- Model **content-types** for each entity (Service, CaseStudy, Testimonial,
  Page, Post, TeamMember). Use **single types** for one-off pages (Homepage,
  Global/site settings).
- Use **components** for repeatable blocks (CTA, SEO block, hero) and **dynamic
  zones** for flexible page builders.
- Use **relations** instead of duplicating data (CaseStudy → Service).
- Add an **SEO component** (metaTitle, metaDescription, ogImage, canonical) to
  every page-like type so editors control metadata. See seo-keywords.md.
- Validate fields in Strapi (required, unique slug, max length) — the CMS is the
  first line of data quality.

## Strapi API access (Next.js side)

- Create a **read-only API token** in Strapi (Settings → API Tokens) scoped to
  only the content-types the site needs. Keep it server-side in `STRAPI_API_TOKEN`
  — never `NEXT_PUBLIC_`.
- Set role permissions to least privilege; public read only where appropriate.
- Strapi v5 returns a flat shape with `documentId` (no more deep `data.attributes`
  nesting from v4). Confirm the running version and match it.

### Server-side Strapi client with ISR

```ts
// lib/strapi.ts  (server only)
const BASE = process.env.STRAPI_URL!;            // e.g. https://cms.example.com
const TOKEN = process.env.STRAPI_API_TOKEN!;      // read-only

async function strapiFetch<T>(path: string, revalidate = 60): Promise<T> {
  const res = await fetch(`${BASE}/api/${path}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    next: { revalidate, tags: ["strapi"] },        // ISR + tag for on-demand
  });
  if (!res.ok) throw new Error(`Strapi ${path} failed: ${res.status}`);
  return res.json();
}

export async function getServices() {
  const json = await strapiFetch<{ data: any[] }>(
    "services?populate=icon&sort=order:asc"
  );
  return json.data;
}
```

- Always `populate` only the fields you need (avoid `populate=*` in production).
- Handle non-200 responses; never let a CMS error crash the whole page silently.

### On-demand revalidation from Strapi

When editors publish, trigger fresh content without a full rebuild:

1. Add a Strapi **webhook** on entry publish/update pointing at a Next Route
   Handler (e.g. `/api/revalidate`) with a shared secret.
2. In the handler, verify the secret, then call `revalidateTag("strapi")` (or
   `revalidatePath`).

## Lead pipeline (the most important backend for an agency site)

Handle form submits in a **Next.js Route Handler** (server-side), not the client:

```ts
// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // 1. Honeypot: bots fill hidden fields
  if (data.company_website) return NextResponse.json({ ok: true });

  // 2. Validate on the server (use zod)
  if (!data.email || !data.message) {
    return NextResponse.json(
      { ok: false, error: "Email and message are required." },
      { status: 400 }
    );
  }

  // 3. Store in Strapi (a "Lead" content-type) with a write-scoped token
  await fetch(`${process.env.STRAPI_URL}/api/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_WRITE_TOKEN}`,
    },
    body: JSON.stringify({ data }),
  });

  // 4. Notify the team + 5. auto-reply to the lead (email service / queue)
  // await sendEmails(data);

  return NextResponse.json({ ok: true });
}
```

Pipeline requirements:
1. Validate client AND server (zod or similar).
2. Spam protection: honeypot field + a CAPTCHA (reCAPTCHA / Cloudflare Turnstile).
3. Store the lead in Strapi (separate **write-scoped** token, kept server-side).
4. Send a team notification email.
5. Send an auto-reply to the lead.
6. Redirect to a real thank-you page (enables conversion tracking).
7. Log failures so no lead is silently lost.

Rate-limit the route (e.g. by IP) to prevent abuse.

## Security — essentials

### Next.js layer
- Set security headers in `next.config.js` `headers()` (baseline below).
- Only `NEXT_PUBLIC_`-prefixed env vars reach the browser — keep all tokens,
  secrets, and the Strapi write token unprefixed and server-only.
- Validate and sanitize every Route Handler input; never trust the client.
- Use `next/link` and framework escaping; avoid `dangerouslySetInnerHTML` (if
  rendering Strapi rich text, sanitize the HTML first).

### Strapi layer
- Run Strapi behind HTTPS; restrict the admin panel; enforce strong admin
  passwords + 2FA.
- Least-privilege API tokens (separate read vs write); rotate them.
- Lock down public role permissions to only what the site needs.
- Use a real database (PostgreSQL) in production, not SQLite; automate backups
  and test restoring them.
- Keep Strapi and plugins updated; subscribe to security advisories.

### Both
- HTTPS everywhere with auto-renewing certs; HTTP→HTTPS redirect; HSTS.
- Protect against the OWASP Top 10 (injection, XSS, CSRF, broken auth, etc.).
- Keep dependencies updated; `npm audit` / Dependabot.
- Store secrets in env vars / the host's secret manager — never commit them.

### Baseline security headers (next.config.js)

```js
async headers() {
  return [{
    source: "/:path*",
    headers: [
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Content-Security-Policy", value: "default-src 'self'; img-src 'self' data: https:;" },
    ],
  }];
}
```

Tune the CSP to allow your Strapi media domain, analytics, and fonts.

## Performance & reliability of the backend

- Cache Strapi responses via ISR `revalidate`; consider a CDN in front of Strapi
  media (or upload media to S3/Cloudinary).
- Use a queue or background job for email sending so form responses stay fast.
- Add uptime monitoring and error tracking (Sentry) on both Next and Strapi.
- CI/CD: run typecheck/lint/tests and deploy on push.

## Privacy & compliance

Add a privacy policy, cookie consent (GDPR/CCPA where relevant), and only collect
data you actually use. Both a legal and a trust requirement.

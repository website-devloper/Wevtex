# Wevtex Website — Master Roadmap

The full plan to take this site from its current state to a launched, fast, secure,
discoverable, converting bilingual (EN + FR) agency website.

**Legend:** `[you]` = only you can do it · `[me]` = I can do it in code · `[both]` = I draft, you supply facts/approval.
**Priority:** 🔴 blocker · 🟠 important · 🟡 growth/after-launch.

## Current state (honest baseline)
- **Stack:** Next.js (App Router) static site. **No Strapi/CMS** — all content is hardcoded in components.
- **Done:** Home funnel (hero→problem→services→industries→process→proof→pricing→FAQ→CTA→contact),
  contact form → `/api/contact` (Resend) → `/thank-you`, GA4 `generate_lead` event (dormant),
  per-page metadata, native `sitemap.ts`/`robots.ts`, Organization + FAQ JSON-LD.
- **Not done:** real content/proof, domain decision, deploy, French build, security headers, legal pages, analytics live.

---

## Phase 0 — Decisions & Blockers 🔴
Nothing downstream is correct until these are settled. **Decisions made 2026-06-03.**

- [x] 🔴 **Canonical domain = `wevtex.com`** (not bought yet). Centralized in `lib/seo.ts` (`SITE_URL`,
  override via `NEXT_PUBLIC_SITE_URL`). `[you]` still need to **buy it** before deploy.
- [x] 🔴 **Content source = add Strapi CMS** (chosen). Not built yet — see new Phase 1b below. Until then content stays hardcoded.
- [x] 🔴 **Phone fixed to `+212 687 633 774`** everywhere (layout JSON-LD + contact page now match the WhatsApp number).
- [ ] 🔴 `[you]` **Brand assets:** final logo (light + dark), `favicon`/app icons, real `1200×630` OG image (`/images/og-image.jpg` — confirm it exists).

---

## Phase 1 — Content & Conversion completeness 🔴
Your launch checklist forbids placeholder content. This is the credibility core.

- [ ] 🔴 `[you]` **Real testimonials** — name + company + photo + real quote (replace the "Sample client" set).
- [ ] 🔴 `[you]` **Real portfolio / case studies** — screenshots + problem→action→**measurable result** (the strongest sales asset).
- [ ] 🔴 `[you]` **Real stats** — replace "200+ / 98% / 4 continents" and review counts (94/128) with verified numbers, or remove.
- [ ] 🟠 `[you]` **Real review-profile links** for the Google/Trustpilot badges (currently placeholder URLs).
- [ ] 🟠 `[both]` **Build out the real pages:** Pricing, Services (real detail), Portfolio/case-study, About — no lorem.
- [ ] 🟠 `[me]` **Value proposition + a CTA on every page** (home is done; verify about/services/portfolio).
- [ ] 🟠 `[both]` **Proofread** every page; remove all "sample"/TODO markers before launch.

---

## Phase 1b — Strapi CMS (you chose to add it) 🟠
Lets you edit content, run a blog, and manage testimonials/case studies without code.
Best done **after** Phase 1 content is final, so we model real fields, not placeholders.

- [ ] 🟠 `[you]` **Host Strapi** (Strapi Cloud or a Node host) with **PostgreSQL** in production (never SQLite) + automated, tested backups.
- [ ] 🟠 `[me]` **Model content-types:** `Service`, `CaseStudy`, `Testimonial`, `Post` (blog), `Page`, and single types `Homepage` + `Global`. Add an **SEO component** (metaTitle, metaDescription, ogImage, canonical) to every page-like type.
- [ ] 🟠 `[me]` **Server-side Strapi client** (`lib/strapi.ts`) with a **read-only token** (`STRAPI_API_TOKEN`, server-only) + ISR `revalidate`.
- [ ] 🟠 `[me]` **Migrate hardcoded content** (services, FAQ, pricing, testimonials) into Strapi; pages fetch in Server Components.
- [ ] 🟠 `[me]` **On-demand revalidation:** Strapi publish webhook → `/api/revalidate` (shared secret) → `revalidateTag`.
- [ ] 🟠 `[me]` **Store leads in Strapi** — `Lead` content-type with a separate **write-scoped** token (`STRAPI_WRITE_TOKEN`).
- [ ] 🟠 `[you]` Lock down Strapi: restrict admin, strong password + 2FA, least-privilege public role, keep it updated.

## Phase 2 — Frontend & Performance 🟠
Targets: Lighthouse 90+, LCP < 2.5s, INP < 200ms, CLS < 0.1, TTFB < 0.8s.

- [ ] 🟠 `[me]` **Server Components by default** — keep `"use client"` at the leaves (carousel, theme, form). The big page is one client island today; acceptable, but new pages should be server-rendered.
- [ ] 🟠 `[me]` **All images via `next/image`** with width/height + correct `priority`/lazy (fixes the hero/logo LCP warning, prevents CLS). Includes portfolio screenshots once real.
- [ ] 🟠 `[me]` **Fonts via `next/font`** (self-hosted) instead of the `<link>` to Google Fonts in `layout.tsx` — removes a render-blocking round-trip; limit to 2 families.
- [ ] 🟠 `[me]` **Responsive QA** at 360 / 768 / 1024 / 1440; no horizontal scroll; tap targets ≥ 44px.
- [ ] 🟠 `[me]` **Add `app/error.tsx`** (you already have `not-found.tsx`).
- [ ] 🟠 `[me]` **Resolve the `framer-motion useScroll` runtime error** in `ScrollRevealText.tsx`.
- [ ] 🟡 `[you+me]` Run **Lighthouse / PageSpeed** on home + a service page after deploy; re-test after big changes.

### Accessibility (WCAG AA) — part of this phase
- [ ] 🟠 `[me]` Labels tied to inputs (done on the home form); real `alt` on every informative image.
- [ ] 🟠 `[me]` Color contrast ≥ 4.5:1; visible focus states; logical one-`<h1>` heading order per page.
- [ ] 🟡 `[you]` Test with a screen reader / axe / WAVE.

---

## Phase 3 — Backend, Lead Pipeline & Security 🔴/🟠
The lead pipeline is an agency's most important backend.

- [ ] 🟠 `[me]` **Harden the form:** add `zod` server validation, a **CAPTCHA** (Cloudflare Turnstile/reCAPTCHA),
  and **rate-limiting by IP**. (Honeypot, notify, auto-reply, thank-you, failure logging are done.)
- [ ] 🟡 `[both]` **Store every lead** (not just email) — Strapi `Lead` type, or a lightweight DB/Google Sheet — so none are lost.
- [ ] 🔴 `[you]` **Verify your domain in Resend** → `[me]` switch the form from test mode to your real sender/inbox.
- [ ] 🟠 `[me]` **Security headers in `next.config`** — HSTS, CSP (allow GA, fonts, your media), X-Content-Type-Options, X-Frame-Options, Referrer-Policy.
- [ ] 🟠 `[you]` `npm audit` — install flagged **5 vulnerabilities (1 critical)**; `[me]` can apply safe fixes.
- [ ] 🟠 `[both]` **Secrets only in host env** (`.env.local` is gitignored ✅); never commit; only `NEXT_PUBLIC_` reaches the browser.
- [ ] 🟡 `[me]` Sanitize any future Strapi rich-text before `dangerouslySetInnerHTML`.

---

## Phase 4 — SEO Technical Foundation 🟠
Three layers: technical (crawl) → on-page (keywords) → authority (links).

- [ ] 🟠 `[me]` **Centralize the domain** into one `SITE_URL` constant used by sitemap, robots, `metadataBase`, JSON-LD, OG.
- [ ] 🟠 `[me]` **Canonical tag on every page** (`alternates.canonical`); home done.
- [ ] 🟠 `[me]` **Align positioning** — about/services/portfolio still say "Global IT agency US/UK"; match the Morocco + worldwide line.
- [ ] 🟠 `[me]` **Harden `robots.ts`** (disallow `/api`, `/thank-you`) and keep `sitemap.ts` as the source of indexable URLs.
- [ ] 🟠 `[me]` **Expand JSON-LD:** WebSite + per-service `Service` + `BreadcrumbList` on inner pages; `AggregateRating` **only** with real reviews.
- [ ] 🟠 `[both]` **Keyword map — one primary keyword per page, no cannibalization.** Start with **long-tail / Easy** terms
  (e.g. "combien coûte un site web au Maroc", "comparatif agences web"), not the **Hard** head terms.
- [ ] 🟡 `[you]` After deploy: validate all structured data in **Google Rich Results Test**.

---

## Phase 5 — Deploy & Measure 🔴
You can't rank or measure what isn't live. This unlocks everything in Phase 7.

- [ ] 🔴 `[you]` **Deploy to Vercel** (CDN, HTTPS, Brotli, ISR handled). Add **all** env vars there
  (`RESEND_*`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_SITE_URL`).
- [ ] 🔴 `[you]` **GA4:** create property → paste Measurement ID → mark `generate_lead` as a **key event** (code is ready).
- [ ] 🔴 `[you]` **Google Search Console:** verify domain + submit `sitemap.xml`.
- [ ] 🟠 `[you]` **Uptime + error monitoring** (e.g. Sentry) on the site.
- [ ] 🟡 `[you]` **Monthly analytics loop:** find the biggest drop-off → change one thing → re-measure.

---

## Phase 6 — French Bilingual Build (EN + FR) 🟡
Your chosen language strategy. Best done **after** the English site is live and final.

- [ ] 🟡 `[me]` **`/fr` route architecture** (simple `/fr` folders — no heavy i18n lib for a small site).
- [ ] 🟡 `[me]` **`hreflang` + `x-default`** reciprocal tags across every EN/FR pair; canonical matches hreflang URL.
- [ ] 🟡 `[me]` **Visible language switcher** linking to the translated equivalent (never auto-redirect by browser lang).
- [ ] 🟡 `[both]` **Translate content to proper French** (Moroccan French terms: "agence web", "création de site", "référencement"); pricing stays DH, optional EUR on intl pages.
- [ ] 🟡 `[me]` Per-locale metadata, OG locale, sitemap entries with language alternates.

---

## Phase 7 — Content Marketing & Authority 🟡 (ongoing, post-launch)
This is what actually moves rankings. Expect **3–6 months** on competitive terms.

- [ ] 🟡 `[both]` **Blog** targeting long-tail/Easy keywords first; then **city pages** (Casablanca, Rabat, Marrakech), then country/nearshore pages.
- [ ] 🟡 `[you]` **Google Business Profile** — the #1 local-ranking lever; keep NAP consistent with the site.
- [ ] 🟡 `[you]` **Directories & backlinks** — Clutch, Sortlist, GoodFirms; partnerships, guest posts, PR.
- [ ] 🟡 `[you]` **Collect real reviews** continuously (boosts both ranking and conversion).
- [ ] 🟡 `[both]` Publish fresh content monthly; run periodic SEO audits; fix broken links/decaying rankings.

---

## If you do only 5 things, in this order
1. **Pick the domain** (Phase 0) — unblocks everything.
2. **Get real testimonials + portfolio + stats** (Phase 1) — replace the fakes.
3. **Deploy to Vercel** (Phase 5) — go live.
4. **Verify Resend + turn on GA4 + Search Console** (Phases 3 & 5) — leads + measurement.
5. **Start content: pricing page + 2 blog posts + Google Business Profile** (Phases 4 & 7).

---

## What I can start right now without waiting on you
- Phase 4 #1–4 (SITE_URL, canonicals, positioning, robots) — pure code, safe.
- Phase 2 (next/font, next/image cleanups, error.tsx, the motion error).
- Phase 3 security headers + zod/rate-limit on the form.
- Drafting Phase 1/7 content (pricing page, first blog posts) for your review.

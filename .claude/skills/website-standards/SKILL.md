---
name: website-standards
description: >-
  Production standards for building and improving websites on a Next.js (App
  Router) frontend with a Strapi headless CMS backend. Covers strategy, Next.js
  frontend patterns, performance/Core Web Vitals, Strapi content modeling and
  API design, security, SEO and keyword strategy, conversion optimization,
  accessibility, analytics, and a pre-launch checklist. Use this skill WHENEVER
  working on the website or web app in any way: creating pages/routes or React
  components, fetching from Strapi, modeling content-types, building forms or the
  lead pipeline, improving page speed, adding or auditing SEO/keywords,
  increasing conversions/leads, hardening security, configuring deployment, or
  reviewing the site before launch. Apply it even if the user does not say "best
  practices" — any task touching this Next.js + Strapi site should consult this
  skill so the result is fast, secure, discoverable, accessible, and built to
  convert visitors into clients.
---

# Website Standards — Next.js + Strapi

This skill encodes the end-to-end standards for this stack: a **Next.js App
Router** frontend and a **Strapi** headless CMS as the content/data backend.
The goal is not a single score — it is getting every layer right: clear
strategy, clean responsive Next.js frontend, fast and secure Strapi backend,
strong keyword-driven SEO, and pages built to convert visitors into clients.

## Stack assumptions

- **Frontend:** Next.js (App Router, React Server Components by default), deployed
  to Vercel or a Node host. TypeScript preferred.
- **Backend/CMS:** Strapi (v5 conventions; flat response shape, `documentId`).
  Content delivered over the REST API (or GraphQL) using a read-only API token.
- **Rendering:** prefer static + ISR (`revalidate`) for content pages; Server
  Components fetch from Strapi at build/revalidate time. Use Route Handlers for
  forms and server-only logic.

If the real setup differs (Pages Router, GraphQL-only, different host), adapt the
patterns but keep the standards.

## How to use this skill

1. Identify which layer the task touches (frontend, performance, backend/Strapi,
   security, SEO, conversion, accessibility, launch).
2. Read the matching reference file before producing code.
3. Apply standards proactively — when you build a component also handle its
   responsive behavior, accessibility, and performance; when you build a form
   also handle validation, the Strapi write, email, and spam protection.
4. Verify against the launch checklist before declaring anything done.

## Reference files — read the relevant one(s)

| Task involves... | Read |
|---|---|
| Pages/routes, React components, `next/image`, fonts, rendering strategy, Core Web Vitals | `references/frontend-performance.md` |
| Strapi content-types, REST/GraphQL fetching, API tokens, the form/lead pipeline, security headers, auth, OWASP | `references/backend-security.md` |
| Keyword research, the Next.js Metadata API, technical SEO, sitemap/robots, JSON-LD, local/off-page | `references/seo-keywords.md` |
| Turning visitors into clients, CTAs, trust signals, landing-page structure, accessibility, analytics | `references/conversion-accessibility.md` |
| Final review, "is it done?", launch readiness, Lighthouse targets, env/deploy, maintenance | `references/launch-checklist.md` |

For a task spanning several layers (e.g. "build the homepage from Strapi content"),
read all relevant references first.

## Core principles (always apply)

- **Clarity over decoration.** Within ~5 seconds a visitor must know what is
  offered, who it is for, and what to do next. One H1 and one primary CTA per page.
- **Server Components by default.** Fetch Strapi data in Server Components; only
  add `"use client"` where interactivity truly needs it. Keep client bundles small.
- **Static + ISR first.** Render content pages statically and revalidate on a
  schedule or on-demand from Strapi webhooks. Reserve SSR for truly dynamic pages.
- **Mobile-first and responsive.** Most traffic and Google indexing are mobile.
- **Fast by default.** Target Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1.
  Use `next/image` and `next/font`; never ship unused JS.
- **Secure by default.** HTTPS, security headers in `next.config`, read-only
  Strapi token kept server-side, validate input in Route Handlers, never expose
  secrets to the client (only `NEXT_PUBLIC_` vars reach the browser).
- **Keyword-driven, crawlable content.** One primary keyword per page; use the
  Next.js Metadata API for unique titles/descriptions; content rendered on the
  server so crawlers see it.
- **Built to convert.** Trust signals (case studies with real numbers,
  testimonials, logos), low-friction forms, CTAs repeated as the user scrolls.
- **Measured.** Analytics + Search Console before launch; track conversions as
  events; fix the biggest drop-off, then re-measure.

## Default working order for a new section or feature

1. Confirm the goal and primary conversion (for agencies: usually qualified leads).
2. Model the content in Strapi (content-types, components, relations) and set a
   read-only API token + permissions.
3. Plan routes / sitemap and map one primary keyword per page.
4. Build mobile-first Server Components that fetch from Strapi; static + ISR.
5. Wire forms via a Route Handler: validate → write to Strapi → notify email →
   auto-reply → spam protection → thank-you page.
6. Optimize performance and Core Web Vitals.
7. Implement the Metadata API, sitemap/robots, and JSON-LD.
8. Add conversion elements and trust signals.
9. Set up analytics, Search Console, and event tracking.
10. Run the launch checklist; aim for Lighthouse 90+ in all four categories.

## Honest framing of "100/100"

No single number means a site is "perfect." Lighthouse 90–100 across Performance,
Accessibility, Best Practices, and SEO is the closest objective target, and the
launch checklist is built around it. Real success is rankings and conversion rate
over time. Build each layer deliberately, measure honestly, keep improving.

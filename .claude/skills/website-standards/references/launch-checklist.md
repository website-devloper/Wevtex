# Pre-Launch Checklist & Maintenance — Next.js + Strapi

Read this for final review, launch readiness, env/deploy, and ongoing health.
Aim for Lighthouse 90+ across all four categories — the closest objective measure
of "100/100."

## Lighthouse targets

| Category | Target | Main levers in this stack |
|---|---|---|
| Performance | 90–100 | `next/image`, static/ISR, `next/font`, minimal client JS, CDN |
| Accessibility | 95–100 | Contrast, labels, alt, visible focus |
| Best Practices | 95–100 | HTTPS, security headers, no console errors |
| SEO | 95–100 | Metadata API, sitemap/robots, crawlable, structured data |

## Environment & secrets

- [ ] `STRAPI_URL`, `STRAPI_API_TOKEN` (read), `STRAPI_WRITE_TOKEN` (leads) set in
      the host's env / secret manager — none committed to git
- [ ] Only browser-safe values use the `NEXT_PUBLIC_` prefix
- [ ] `metadataBase` set in root layout
- [ ] Strapi domain added to `next.config` `images.remotePatterns`
- [ ] Production Strapi uses PostgreSQL (not SQLite) with automated, tested backups

## Technical

- [ ] HTTPS + HTTP→HTTPS redirects on both Next site and Strapi
- [ ] Responsive on all breakpoints (360 / 768 / 1024 / 1440)
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] No console errors; `next build` clean (no type/lint errors)
- [ ] Custom `app/not-found.tsx` (404) and `error.tsx`
- [ ] Contact form: validate → write to Strapi → notify → auto-reply → spam
      protection → `/thank-you`
- [ ] ISR revalidation working; Strapi publish webhook → revalidate route tested
- [ ] Fast Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- [ ] Favicon & app icons (`app/icon`, `app/apple-icon`)

## SEO

- [ ] `generateMetadata` (or static `metadata`) on every route — unique title + desc
- [ ] `app/sitemap.ts` pulls from Strapi; `app/robots.ts` present
- [ ] Structured data validated (Rich Results Test)
- [ ] Open Graph / Twitter tags + default OG image
- [ ] Canonicals set; 301 redirects for any moved URLs
- [ ] Analytics + Search Console live and verified

## Content & Conversion

- [ ] Clear value proposition above the fold (from Strapi Homepage single type)
- [ ] CTA on every page
- [ ] Case studies / testimonials populated in Strapi and rendering
- [ ] Contact info correct everywhere
- [ ] Proofread; no placeholder/lorem content
- [ ] `/thank-you` page fires the conversion event

## Security & Legal

- [ ] Security headers set in `next.config` (HSTS, CSP, X-Content-Type-Options,
      X-Frame-Options, Referrer-Policy)
- [ ] Strapi admin restricted; strong admin auth + 2FA; least-privilege tokens
- [ ] Strapi public role permissions limited to what the site needs
- [ ] Privacy policy + cookie notice
- [ ] Dependencies updated and scanned (`npm audit` / Dependabot) on both apps
- [ ] Error tracking + uptime monitoring on Next and Strapi
- [ ] Rich-text from Strapi sanitized before any `dangerouslySetInnerHTML`

## Maintenance & growth (after launch)

A website is never finished. Launch is the start, not the end.

- Update Next.js, Strapi, and plugins regularly (security + stability); read
  migration notes before major upgrades.
- Monitor uptime, performance, and errors continuously.
- Publish fresh content via Strapi to grow keyword coverage and authority.
- Review analytics monthly; act on the biggest drop-off.
- Run periodic SEO audits; fix broken links and decaying rankings.
- Re-test Core Web Vitals after major changes.
- Keep Strapi database backups tested and recoverable.
- Refresh case studies and testimonials as you win new clients.

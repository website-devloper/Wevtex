# Strapi setup plan — prepared 2026-09-28, to run 2026-09-29

The goal: **edit the blog, the projects, the prices, the reviews and the service
pages from a dashboard**, with every SEO field on the page owned by the editor,
not by the code.

Nothing here has been installed or wired yet. This document is the map, plus
`scripts/export-content.ts`, which turns today's content into import-ready JSON
so nothing is retyped.

---

## 0. Decisions to make first (15 minutes)

| Decision | Recommendation | Why |
|---|---|---|
| Strapi version | **v5** | Flat API responses (`documentId`, no `data.attributes` nesting), current support. |
| Where Strapi runs | **Railway** or **Render** | Vercel cannot host Strapi (it is a long-running Node server). Both give a Node service + Postgres in one project. |
| Database | **Postgres** (managed) | SQLite loses data on redeploy. Never ship SQLite. |
| Media | **Cloudinary** (or S3) | Container filesystems are ephemeral: uploads vanish on redeploy. |
| Admin URL | own subdomain, e.g. `cms.wevtex.com` | Keeps the admin off the public domain, simpler CORS and cookies. |
| Locales | `fr` (default) + `en` | Matches the site exactly. |

Cost check before starting: Railway/Render ≈ $5–10/month, Postgres ≈ $0–5,
Cloudinary free tier is enough for this volume.

---

## 1. What moves, what stays

| Moves to Strapi | Stays in code | Why it stays |
|---|---|---|
| Blog posts | Page furniture (nav labels, buttons, form copy) | Changes once a year, not worth a round trip. |
| Projects / réalisations | Legal pages (`/confidentialite`, `/mentions-legales`) | Legal text should change through review, not a dashboard. |
| Reviews | City and sector pages | Generated from templates; a CMS would add work, not remove it. |
| Prices: packs and add-ons | Routing, redirects, hreflang logic | Code concerns. |
| Service page content | The design itself | Strapi holds content, never layout. |
| Leads (optional, see §6) | | |

**The rule:** if it is text a human wants to change on a Tuesday afternoon, it
belongs in Strapi. If changing it means changing the design or the routing, it
stays in code.

---

## 2. Order of work — blog first

The blog is the SEO engine and the thing that gets edited weekly, so it goes
first and proves the whole pipeline on the lowest-risk surface.

1. **Blog** (posts + SEO block + body blocks) ← the priority
2. **Reviews** (new content-type, nothing to migrate)
3. **Projects**
4. **Pricing** (add-ons + the packs inside Service)
5. **Services** (largest model, most fields, last)

Each one ships end to end — model, import, fetch, parity check, delete the old
file — before the next one starts. No half-migrated surfaces overnight.

---

## 3. Content types, field by field

Mapped from the types that exist today, so the import is mechanical.

### 3.1 Post — from `lib/blog-data.ts` (priority)

| Strapi field | Type | Notes |
|---|---|---|
| `slug` | UID, required, unique | **Localized** — the FR and EN slugs differ on purpose. |
| `title` | Text, required | The H1. |
| `excerpt` | Text (long) | Card text on /blog. |
| `answer` | Text (long) | The answer-first lede. Google quotes this. |
| `category` | Enumeration | Prix & budget, Référencement, Publicité, Stratégie, Technologie, E-commerce, Automatisation, Choisir un prestataire. |
| `publishedAt` | Date | Shown on the page and in Article schema. |
| `updatedAt` | Date, optional | Drives the "newest first" order on /blog. |
| `readingMinutes` | Integer | |
| `relatedService` | Relation → Service (many-to-one) | One internal link per post, minimum. |
| `relatedPosts` | Relation → Post (many-to-many) | |
| `body` | **Dynamic zone** | See below — keeps the exact renderer. |
| `faqs` | Component `shared.qa`, repeatable | Rendered visibly *and* mirrored into FAQPage schema. |
| `seo` | Component `shared.seo`, required | See §4. |

**Body dynamic zone** — one component per block type already rendered by
`components/wevtex/BlogPostView.tsx`, so nothing about the output changes:

`block.paragraph` (text) · `block.heading` (text + level 2/3) · `block.list`
(items, ordered true/false) · `block.note` (text) · `block.table` (head + rows,
JSON) · `block.links` (repeatable `shared.link`)

> Keep the dynamic zone rather than one rich-text field. Rich text would force a
> rewrite of the renderer, and an HTML field from a CMS has to be sanitized
> before it can be rendered.

### 3.2 Review — new

| Field | Type | Notes |
|---|---|---|
| `author` | Text, required | |
| `rating` | Integer 1–5 | |
| `text` | Text (long), required | |
| `source` | Enum: google, whatsapp, email, direct | |
| `sourceUrl` | Text, optional | Link to the Google review. |
| `date` | Date | |
| `project` | Relation → Project, optional | Lets a review show on its case study. |
| `featured` | Boolean | Which ones surface on the homepage. |
| `locale` | **not localized** | A review is quoted as written, never translated. |

Publish only real reviews. The homepage already says "2 avis Google"; that
number should come from counting published entries, not a hardcoded string.

### 3.3 Project — from `lib/projects-data.ts`

`title` · `slug` (localized, UID) · `clientUrl` · `liveUrl` · `category` (enum)
· `year` (integer) · `featured` (boolean) · `order` (integer) · `description`
(long text) · `stack` (JSON or a repeatable text component) · `metricValue` +
`metricLabel` · `screenshot` (**Media**, single) · `seo` (component)

### 3.4 Pricing — single type + service packs

**Single type `pricing`** holds what is not tied to one service:

- `addons`: repeatable component `pricing.addon` — `key`, `price` (decimal),
  `unit` (localized text), `title` (localized), `description` (localized)
- `currency`, `priceNote` (the footnote under every table)

**Packs live on the Service** as a repeatable component `pricing.tier`:
`name` · `price` (decimal) · `note` · `features` (repeatable text) ·
`featured` (boolean) · `showFrom` (boolean, the "à partir de" line) ·
`unit` (optional, e.g. "/ jour")

⚠️ **The `{{prix:…}}` tokens.** About eighty sentences across the copy quote a
price through a token resolved at build from `lib/pricing.ts`. Once prices live
in Strapi, `fillPricesDeep` must run **after the fetch**, in the fetch layer,
against a price map built from the Service packs. Keep the behaviour where an
unknown token throws — a silent `{{prix:…}}` shipped to a page is worse than a
failed build.

### 3.5 Service — from `lib/services-data.ts` (largest, do last)

| Field | Type | Notes |
|---|---|---|
| `serviceId` | UID, **not localized** | `website-creation`. The key every relation and icon map uses. |
| `slug` | UID, **localized** | `creation-site-web-maroc` / `web-design-morocco`. |
| `name`, `eyebrow`, `keyword` | Text | |
| `h1`, `h1Em` | Text + JSON | `h1Em` lists the emphasised words. |
| `intro` | Long text | |
| `includes` | Repeatable text | |
| `outcomes`, `whyUsPoints` | Component `shared.point` (`h`, `p`), repeatable | |
| `tags` | JSON | |
| `faqs` | Component `shared.qa`, repeatable | |
| `pricingTiers` | Component `pricing.tier`, repeatable | §3.4 |
| `featureSections`, `tech`, `process`, `sectors`, `demo` | Components, all optional | The page renders each only when present — that already works. |
| `seo` | Component `shared.seo` | |
| `seoKeywords` | JSON | Secondary terms, currently in `lib/service-seo.ts`. |
| `order`, `featured` | Integer / Boolean | |

The long search sections that used to sit on service pages are now blog posts
(commit `b13f838`), so **`seoSections` does not need modeling** — that content
belongs to Post.

### 3.6 Shared components

`shared.seo` (§4) · `shared.qa` (q, a) · `shared.point` (h, p) ·
`shared.link` (label, href) · `pricing.tier` · `pricing.addon` · the `block.*`
family for the blog body.

---

## 4. SEO: what the editor owns

This is the part that must not be half-done — you asked for control of the
fields, and SEO fields are the ones worth controlling.

**`shared.seo` component, attached to Post, Project and Service:**

| Field | Type | Feeds |
|---|---|---|
| `metaTitle` | Text, max 60 | `<title>` |
| `metaDescription` | Text, max 155 | meta description |
| `keyword` | Text, **unique per locale** | The one term the page targets. |
| `ogTitle`, `ogDescription` | Text, optional | Falls back to meta when empty. |
| `ogImage` | Media, optional | Falls back to `/images/og-image.jpg`. |
| `canonicalOverride` | Text, optional | Only for the rare case. |
| `noindex` | Boolean, default false | For thin or duplicate pages. |

**Stays computed in code, deliberately:**

- **hreflang / alternates** — derived from the FR↔EN pair, so the two can never
  disagree.
- **Canonical** — built from the slug unless `canonicalOverride` is set.
- **Sitemap** — generated from published entries. An unpublished entry must
  leave the sitemap automatically.
- **JSON-LD** (Article, FAQPage, Breadcrumb, Organization) — assembled from the
  fields above. FAQ schema is generated from the FAQs *rendered on the page*, as
  Google requires; an editor adding a FAQ gets the schema for free.

**Guardrails to configure in Strapi itself**, so a mistake is caught while
typing rather than at build: `metaTitle` and `metaDescription` max lengths,
`slug` and `keyword` unique, required fields marked required.

> The keyword-uniqueness rule is currently a build-time throw ("Two blog posts
> target the same keyword"). It must survive as a Strapi unique constraint —
> two posts chasing one term is the most common way a blog quietly loses
> rankings.

---

## 5. Bilingual model

The site puts French at the root and English under `/en`, **with different
slugs in each language**, because the URL is part of what ranks.

- Enable the **i18n plugin**, locales `fr` (default) and `en`.
- Localize: every text field, and the `slug`.
- Do not localize: `serviceId`, `order`, `featured`, prices, media.
- `lib/i18n-paths.ts` — today three hand-maintained maps of FR↔EN slugs —
  becomes **generated from Strapi**: two locales of the same `documentId` are
  the pair. That deletes a file that has to be edited by hand every time a page
  is added, and removes a whole class of "page exists in one language only" bug.
- Keep the invariant as an assertion in the fetch layer: an entry published in
  one locale only should fail the build loudly, exactly as it does today.

---

## 6. Leads (worth 30 minutes while we are in there)

Form submissions are emailed and nowhere else. One `lead` content-type
(name, email, phone, company, employees, service, budget, timeline, message,
locale, source page, createdAt) gives a searchable history, survives a mail
outage, and costs one `fetch` in the existing route handler. It needs a
**separate write-scoped token** — the read token must never be able to write.

---

## 7. Next.js integration

```
STRAPI_URL=https://cms.wevtex.com      # server-side only, never NEXT_PUBLIC_
STRAPI_API_TOKEN=…                     # read-only, scoped to published content
STRAPI_WRITE_TOKEN=…                   # leads only
REVALIDATE_SECRET=…                    # shared with the Strapi webhook
```

- `lib/strapi.ts` — one server-only client: `fetch` with the bearer token,
  `next: { revalidate, tags }`, explicit `populate` (never `populate=*`), and a
  throw on non-200 so a CMS outage is visible, not a blank page.
- **Static + ISR stays.** `generateStaticParams` fetches slugs from Strapi at
  build. Consequence: **the CMS must be reachable at build time** — worth
  knowing before the first deploy fails.
- **On-demand revalidation:** Strapi webhook on publish/update →
  `/api/revalidate` → verify secret → `revalidateTag("strapi")`. Publishing then
  shows up in seconds without a rebuild.
- **Images:** Strapi media needs its host in `next.config.mjs`
  `images.remotePatterns`, or every image 404s silently.
- Keep the typography helpers (`lib/typo.ts`) and `fillPricesDeep` in the fetch
  layer, so CMS text gets the same treatment as today's local text.

---

## 8. Procedure per surface (the thing that keeps this safe)

For each content type, in order:

1. Model it in Strapi.
2. Import the JSON from `scripts/export-content.ts`.
3. Write the fetch function, render from Strapi behind the same component.
4. **Prove parity**: DOM snapshot of the page before and after the swap, diff
   them, and control-test the harness so a false "identical" is impossible.
5. Only then delete the `lib/*.ts` file it replaced.

Never delete the local data before the parity diff is clean. The local file is
the rollback.

---

## 9. Risks and gotchas

| Risk | Handling |
|---|---|
| Build depends on the CMS being up | Accept for now; consider a build-time JSON cache later. |
| `{{prix:…}}` tokens break | Resolve after fetch; keep the throw on unknown tokens. |
| Editor writes a duplicate keyword | Unique constraint in Strapi + assertion in the fetch layer. |
| A page published in one locale only | Assertion in the fetch layer, same as today's build check. |
| Media on an ephemeral disk | Cloudinary/S3 from day one, not "later". |
| Admin exposed | Own subdomain, strong password, 2FA, no public write permissions. |
| Rich text injecting HTML | Dynamic-zone blocks, not raw HTML. Sanitize if that ever changes. |

---

## 10. Checklist for tomorrow

- [ ] Provision Strapi v5 + Postgres + Cloudinary, admin on its own subdomain
- [ ] Enable i18n, add `en` alongside `fr`
- [ ] Build `shared.*` and `block.*` components
- [ ] **Post** content-type with the SEO component, then import the posts
- [ ] Read-only API token, least-privilege public role
- [ ] `lib/strapi.ts` + `/blog` and one post rendered from Strapi
- [ ] Parity diff on `/blog` and one post, then delete `lib/blog/*`
- [ ] Webhook → `/api/revalidate`, verify publishing appears within seconds
- [ ] Review, Project, Pricing, Service — same loop each
- [ ] Security headers, token rotation note, first backup taken **and restored**

---

## Appendix — export script

`scripts/export-content.ts` writes today's content to `exports/*.json` in the
shape each content-type expects:

```
npx tsx scripts/export-content.ts
```

Output: `posts.fr.json`, `posts.en.json`, `projects.fr.json`, `projects.en.json`,
`services.fr.json`, `services.en.json`, `pricing.json`. Blog bodies are already
converted to the dynamic-zone shape described in §3.1, so the import is a loop,
not a retyping job.

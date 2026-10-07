# CMS setup plan — Keystatic

**Status, 2026-09-28.** The dashboard is live at `/keystatic`, and three
surfaces are migrated and proved:

| Surface | State |
|---|---|
| Blog, FR + EN | ✅ in `content/*/posts`, 18 + 18 posts |
| Réalisations, FR + EN | ✅ in `content/*/projects`, 15 + 15 |
| Tarifs (formules, options, abonnements) | ✅ in `content/pricing.yaml` |
| Avis clients | ✅ renders on the homepage; nothing published yet |
| Logos clients | ✅ the six logos, from the dashboard |
| Prestations, FR + EN | ✅ the whole page, prices still from Tarifs |
| FAQ, secteurs, villes, accueil, réglages | still in code |

How it runs: `npm run build` first executes `scripts/sync-pairs.ts`, which
regenerates `lib/post-pairs.json`, `lib/project-pairs.json` and
`lib/pricing.generated.json` from the content files, then builds. Use
`npm run check:content` to read everything back through Keystatic and report
duplicate keywords, unpaired translations or unparseable content.

The goal: **write blog posts and edit the projects, reviews, prices, services
and the rest of the site's text from a dashboard**, with every SEO field owned
by the editor rather than by the code.

Chosen over Strapi on 2026-09-28: no server, no database, nothing to pay for,
and the content is already files in this repo, so this is a smaller move.

Nothing is installed yet. This document plus `scripts/export-content.ts` is the
preparation.

---

## 0. How it works, in one paragraph

Keystatic runs **inside this Next.js app**. You open `wevtex.com/keystatic`,
sign in with GitHub, and edit. Saving commits the entry to this repo as a file;
the site rebuilds and the change is live in a couple of minutes. There is no API
call at runtime: pages read the content files at build time, so the site stays
as fast and as static as it is today, and there is no token, no CMS outage and
no cold start to think about.

**What gets installed:** `@keystatic/core`, `@keystatic/next`, plus
`@markdoc/markdoc` for blog bodies. Three files: `keystatic.config.ts`,
`app/keystatic/[[...params]]/page.tsx` (the dashboard) and
`app/api/keystatic/[...params]/route.ts` (its handler).

---

## 1. Coverage — every piece of content, and where it ends up

Nothing on this list is forgotten; each row is a decision.

| Today | Becomes | Why |
|---|---|---|
| `lib/blog/*` + `lib/en/blog/*` | **posts** collection ×2 | Edited weekly. The priority. |
| `lib/projects-data.ts` | **projects** collection ×2 | New case studies as they ship. |
| `lib/services-data.ts` + `lib/en/…` | **services** collection ×2 | Copy and packs change. |
| `lib/pricing.ts` (ADDONS) | **pricing** singleton | Add-ons and the footnote. |
| pack prices inside services | `pricingTiers` on each service | Price lives next to what it buys. |
| — (nothing today) | **reviews** collection | New: real Google reviews. |
| `lib/faq-data.ts` | **faq** singleton | 18 questions, 5 groups. |
| `lib/contact-content.ts` | inside the **faq** singleton | The contact page's own questions. |
| `lib/industries-data.ts` | **sectors** collection ×2 | 8 sector pages. |
| `lib/cities-data.ts` | **cities** collection ×2 | 6 city pages. |
| `lib/ia-page-data.ts` | **ia-page** singleton | One page, its own content. |
| `components/wevtex/homeContent.ts` | **homepage** singleton ×2 | Hero, service cards, stats. |
| `CLIENT_LOGOS` in `HomeClient.tsx` | **clients** collection | So you can add a logo yourself. |
| `SOCIALS`, phone, e-mail, WhatsApp in `lib/site-links.ts` | **settings** singleton | Change a number in one place. |
| Legal pages (`/confidentialite`, `/mentions-legales`) | **stays in code** | Legal text should change through review, not a dashboard. |
| `lib/email-templates.ts` | **stays in code** | HTML built to survive Outlook; a dashboard would break it. |
| Routing, redirects, hreflang, `lib/typo.ts`, the design | **stays in code** | Not content. |

**The rule:** if it is text you would want to change on a Tuesday afternoon, it
goes in the dashboard. If changing it means changing the layout, it stays in
code.

---

## 2. Where content lives

```
content/
  fr/posts/<slug>.mdoc          blog, French
  en/posts/<slug>.mdoc          blog, English
  fr/projects/<slug>.yaml       réalisations
  en/projects/<slug>.yaml
  fr/services/<service-id>.yaml service pages
  en/services/<service-id>.yaml
  fr/sectors/<slug>.yaml        secteurs
  en/sectors/<slug>.yaml
  fr/cities/<slug>.yaml         villes
  en/cities/<slug>.yaml
  reviews/<id>.yaml             not translated
  clients/<id>.yaml             logo wall
  fr/homepage.yaml  en/homepage.yaml
  fr/faq.yaml       en/faq.yaml
  fr/ia-page.yaml   en/ia-page.yaml
  pricing.yaml      settings.yaml
public/images/uploads/          images added through the dashboard
```

Text that carries formatting (blog bodies) is `.mdoc`; everything else is YAML,
which stays readable in a pull request and diffs cleanly.

---

## 3. Collections, field by field

### 3.1 `posts` — the priority

| Field | Keystatic field | Notes |
|---|---|---|
| `title` | `text`, required | The H1. |
| `slug` | `slug` | Suggested from the title, editable. |
| `excerpt` | `text`, multiline | Card text on /blog. |
| `answer` | `text`, multiline | The answer-first lede Google quotes. |
| `category` | `select` | The eight existing categories. |
| `publishedAt` | `date`, defaults to today | |
| `updatedAt` | `date`, optional | Drives the order on /blog. |
| `readingMinutes` | `integer` | |
| `relatedService` | `relationship` → services | One internal link per post, minimum. |
| `relatedPosts` | `array(relationship)` | |
| `pairKey` | `text`, required | Ties FR and EN together — §5. |
| `content` | `markdoc` | The body. See §6. |
| `faqs` | `array(object{q,a})` | Rendered on the page **and** in FAQPage schema. |
| `seo` | `object` | §4. |

### 3.2 `reviews` — new, nothing to migrate

`author` (required) · `avatar` (**image**, optional — falls back to initials) ·
`rating` (1–5) · `text` (multiline, required) · `source` (google / whatsapp /
email / direct) · `sourceUrl` · `date` · `project` (relationship, optional) ·
`featured` (checkbox)

Not translated: a review is quoted as written. Publish only real ones — the
"2 avis Google" figure then counts published entries instead of being typed
into the copy.

### 3.3 `projects`

`title` · `slug` · `clientUrl` · `liveUrl` · `category` · `year` · `featured` ·
`order` · `description` · `stack` (`array(text)`) · `metricValue` +
`metricLabel` · `screenshot` (image) · `pairKey` · `seo`

### 3.4 `services`

Everything an editor touches:

`serviceId` (the key, identical in both languages) · `slug` · `name` ·
`eyebrow` · `keyword` · `h1` + `h1Em` · `intro` · `includes` (`array(text)`) ·
`outcomes` (`array(object{h,p})`) · `tags` · `faqs` · `whyUs` (title +
`array(object{h,p})`) · `pricingTiers` (§3.5) · `order` · `seo`

And the deeper sections, each an optional object so a service can leave one
out, exactly as today: `featureSections` · `tech` (groups of tools) ·
`process` (numbered steps) · `sectors` (who it is for) · `demo`.

> If the day runs short, ship the first block and leave the deeper sections
> reading from code for one more week. They are the least-edited fields on the
> page. Everything else must land.

### 3.5 Pricing

**Packs** on each service: `name` · `price` · `note` · `features`
(`array(text)`) · `featured` · `showFrom` (the "à partir de" line) · `unit`
(e.g. `/ jour`).

**Add-ons** in the `pricing` singleton: `key` · `price` · `unit` · `title` ·
`description`, each with an FR and an EN value, plus the footnote under every
table.

⚠️ **The `{{prix:…}}` tokens.** About eighty sentences quote a price through a
token resolved at build from `lib/pricing.ts`. Once packs live in content files,
`fillPricesDeep` must run **after reading them**, against a price map built from
the service entries. Keep the behaviour where an unknown token throws: a
`{{prix:…}}` shipped to a page is worse than a failed build.

### 3.6 `faq` singleton

Groups (`array`), each with a title and its questions
(`array(object{q,a})`) — five groups, eighteen questions today. The contact
page's own questions sit in a second group in the same singleton.

### 3.7 `sectors` and `cities`

Both are page-shaped collections: `slug` · `name` · `h1` · `intro` ·
`outcomes` · `faqs` · `pairKey` · `seo`, plus the handful of fields each
template already uses. They exist so a sector or a city page can be reworded
without a deploy.

### 3.8 `homepage`, `ia-page`, `clients`, `settings`

- **homepage** (one per language): hero eyebrow, H1, lede, the CTA labels, the
  service cards (title, one-liner, entry price note, CTA), the stats band, the
  section headings.
- **ia-page**: capabilities, steps, FAQs, meta.
- **clients**: `name` + `logo` (image) + `order` — add a client logo without
  touching code.
- **settings**: phone, e-mail, WhatsApp number, address, opening hours, social
  links, the Google review URL. One place, used everywhere.

---

## 4. SEO: what the editor owns

An `seo` object on posts, projects, services, sectors and cities:

| Field | Feeds |
|---|---|
| `metaTitle` (aim ≤ 60) | `<title>` |
| `metaDescription` (aim ≤ 155) | meta description |
| `keyword` | The one term the page targets. |
| `ogImage` (optional) | Falls back to `/images/og-image.jpg`. |
| `noindex` (checkbox) | For a thin or duplicate page. |

**Stays computed, deliberately:**

- **hreflang** — derived from the FR↔EN pair, so the two can never disagree.
- **Canonical** — built from the slug.
- **Sitemap** — generated from the content files; a removed entry leaves it
  automatically.
- **JSON-LD** (Article, FAQPage, Breadcrumb, Organization) — assembled from the
  fields above. FAQ schema comes from the FAQs actually rendered, as Google
  requires, so adding a FAQ gets the schema for free.

Keystatic has no unique-value validation, so two invariants move into the build
(§7): **no two posts may target the same keyword** — the fastest way for a blog
to lose its own rankings — and **no slug may be used twice**.

---

## 5. Two languages

French at the root, English under `/en`, **with different slugs**, because the
URL is part of what ranks.

- One collection per language: `posts` / `posts-en`, and so on. Keystatic has no
  locale system, and separate collections keep each language's slug free to
  differ, which is what the site needs.
- **`pairKey`** joins them: the same value on both versions.
  `lib/i18n-paths.ts` — three maps maintained by hand today — is then
  **generated** from the content, and the build fails on an unpaired entry, the
  same check that exists today.
- Reviews and client logos are not paired: they show in both languages as they
  are.

---

## 6. Blog body: Markdoc, with three components

The body is a `markdoc` field, so writing a 1,500-word post feels like writing,
not like filling boxes. Headings, lists, bold and links are plain Markdown and
map onto the classes `BlogPostView` already styles.

Three blocks are not Markdown and become Markdoc tags, matching what the
renderer supports today:

```
{% table head=["Formule","Prix","Délai"] rows=[[...]] /%}
{% note %}…{% /note %}
{% links items=[{label:"Agence SEO au Maroc", href:"/referencement-seo-maroc"}] /%}
```

The alternative — an array of typed blocks mirroring the current `PostBlock`
union — is a truer match for the renderer but a worse writing experience, and
this is the surface you use every week. Markdoc is the recommendation; the
export script emits it.

---

## 7. Reading the content in Next.js

```ts
// lib/content.ts (server only)
import { createReader } from "@keystatic/core/reader";
import config from "../keystatic.config";

const reader = createReader(process.cwd(), config);

export async function getPosts(locale: "fr" | "en") {
  const entries = await reader.collections[locale === "fr" ? "posts" : "postsEn"].all();
  return entries.map((e) => ({ slug: e.slug, ...e.entry }));
}
```

- No token, no fetch, no ISR: the files are in the repo, so pages stay static and
  `generateStaticParams` reads them directly.
- Keep `fillPricesDeep` and the typography helpers (`lib/typo.ts`) in this layer,
  so dashboard text gets the same treatment as today's code-held text.
- Put the invariants here too — duplicate keyword, duplicate slug, unpaired
  `pairKey`, unknown price token — so a bad entry fails the build loudly instead
  of shipping.

---

## 8. Making it pleasant to edit

This decides whether the dashboard actually gets used, so it is part of the job,
not a polish pass.

- **French labels and descriptions on every field.** `label: "Titre de la page
  (60 caractères max)"`, `description: "Ce que Google affiche comme titre."` A
  field with no explanation is a field filled in wrong.
- **A grouped sidebar**, not one flat list:
  `Contenu` (Blog, Réalisations, Avis, Clients) · `Pages` (Services, Secteurs,
  Villes, Accueil, FAQ, IA) · `Réglages` (Tarifs, Coordonnées).
- **Sensible defaults** so a new post starts half-filled: today's date, reading
  time 6, category preselected, `noindex` off.
- **Slug suggested from the title**, still editable — and a warning in the field
  description that changing a published slug breaks its links.
- **List views with real columns** (title, category, date) so you can find a post
  without opening five.
- **Required fields marked required**, so a post cannot be saved without a meta
  description.
- **Images:** one upload directory, and a note in the field description to keep
  files under ~300 KB. The repo is not a CDN.
- **Preview link** on each entry, pointing at the live URL.

**The five things you will actually do, and how they should feel:**

| Task | Path |
|---|---|
| Write a post | Blog → Nouveau → title, slug, meta, body → Save |
| Add a réalisation | Réalisations → Nouveau → screenshot + metric → Save |
| Add a Google review | Avis → Nouveau → paste the text, 5 stars, photo → Save |
| Change a price | Tarifs, or the pack on the service → Save (every quoted price in the copy follows) |
| Add a client logo | Clients → Nouveau → upload → Save |

---

## 9. Access and deployment

- **Dev:** `storage: { kind: "local" }` — edits files on disk, no login.
- **Production:** `storage: { kind: "github", repo: "website-devloper/Wevtex" }`.
  Keystatic's setup flow creates a GitHub App and produces four env vars
  (`KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`,
  `KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`) that go into the
  host, never into the repo.
- **Who can edit:** anyone with write access to the repo. That is the whole
  permission model — worth knowing before adding a second editor.
- `/keystatic` is `noindex` and stays out of the sitemap.
- Each save is a commit, so every change has an author, a date and an undo.

---

## 10. Order of work, and the rule that keeps it safe

Blog first: it is the SEO surface and the one edited weekly.

~~1. Blog~~ → ~~2. Projects~~ → ~~3. Pricing~~ → ~~4. Reviews and client logos~~
→ ~~5. Services~~ → 6. **FAQ, homepage, sectors, cities, settings** — what is
left, and the least often edited.

For each, in order:

1. Add the collection to `keystatic.config.ts`.
2. Copy its files from `exports/keystatic/` into `content/`.
3. Point the page at the reader instead of the `lib/` file.
4. **Prove parity:** DOM snapshot of the page before and after, diff them, and
   control-test the harness so a false "identical" is impossible.
5. Only then delete the `lib/` file it replaced.

Never delete the local data before the diff is clean — that file is the rollback.

---

## 11. Risks and gotchas

| Risk | Handling |
|---|---|
| Two posts target one keyword | Build-time assertion (Keystatic cannot enforce it). |
| An entry exists in one language only | `pairKey` check at build. |
| `{{prix:…}}` breaks | Resolve after reading; keep the throw on unknown tokens. |
| Every save rebuilds the site | Expected, ~2 min. Batch edits before publishing. |
| Two people editing at once | The second save hits a git conflict. Coordinate, or move to Strapi later. |
| Images pile up in the repo | Compress before upload. |
| A published slug gets changed | Warned in the field description; add a redirect when it happens. |
| `/keystatic` indexed | `noindex` + out of the sitemap, checked at launch. |

---

## 12. Checklist for tomorrow

- [x] Install `@keystatic/core`, `@keystatic/next`, `@markdoc/markdoc`
- [x] `keystatic.config.ts` + dashboard route + API route, local storage
- [x] Sidebar groups, French labels and descriptions, defaults (§8)
- [x] `posts` collection with the SEO object, content imported
- [x] `lib/content.ts` reader + the invariant assertions
- [x] `/blog` and the posts from `content/`, parity diff, `lib/blog/*` deleted
- [x] Réalisations, same loop, `lib/projects-data.ts` reduced to its type
- [x] Tarifs: formules, options and abonnements, generated into the code path
- [x] Avis clients and logos clients render on the homepage
- [x] Service page wording, both languages, with the URL map generated
- [ ] FAQ, homepage, sectors, cities, settings
- [ ] **GitHub App + env vars on the host** — until then the dashboard only
      works locally (`storage: { kind: "local" }`)
- [ ] `/keystatic` out of the sitemap, and one real edit made end to end in
      production

---

## Appendix — the export script

`scripts/export-content.ts` writes today's content in the exact shape these
collections expect:

```
npx tsx scripts/export-content.ts
```

Output in `exports/keystatic/` (git-ignored), ready to copy into `content/`:
blog bodies already converted from `PostBlock[]` to Markdoc, YAML front matter
with the SEO fields filled and `pairKey` set on both languages — 18 posts per
language, 15 projects, 8 services, the add-ons and the rest.

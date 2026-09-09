# WEVTEX — SEO + GEO Implementation Brief

**For: Claude Code.** Site: wevtex.com — a Casablanca web & IT studio (Next.js
App Router + Tailwind). This brief makes the site rank in Google (SEO) and get
cited by AI answer engines (GEO — ChatGPT, Gemini, Perplexity, Copilot, Google
AI Overviews). Do the steps **in order**. Each step is self-contained: do it,
verify it, move on. Do not skip the technical foundation to jump to content.

Ground rules that apply to everything below:
- One `<h1>` per page, containing that page's target keyword, once, naturally.
- One unique `<title>` and one unique `<meta description>` per page. Never reuse.
- French (Morocco) is the primary language. Write for humans first, keywords second.
- **Never invent stats, reviews, or client names.** Where real data is required,
  the brief marks it ⚠ REAL DATA — leave a clearly-labelled placeholder for the
  owner to fill, never fabricate. AI engines and Google both reward verifiable
  facts and punish invented ones.
- Keep URLs lowercase, hyphenated, no trailing stopwords, stable forever.

---

## PHASE 1 — Technical foundation (do first; fast, high-impact)

### Step 1.1 — Per-page metadata
Use the Next.js App Router `metadata` export (or `generateMetadata`) on every
route. Template for title tags — follow it exactly:

`[Service/Page] à [Ville ou Maroc] | WEVTEX`

- Home: `Agence Web & Création de Sites au Maroc | WEVTEX`
- Meta description, home (≤155 chars): `Studio web à Casablanca : création de sites, e-commerce, applications et SEO. Des sites rapides qui transforment vos visiteurs en clients. Devis gratuit.`

Every page gets its own. No page ships without title + description + canonical.

### Step 1.2 — Canonical, sitemap, robots
- Add a self-referencing `<link rel="canonical">` to every page.
- Generate `app/sitemap.ts` listing every route (home, services, service pages,
  city pages, réalisations + each project detail, blog + posts, FAQ, contact,
  legal). Include `lastModified`.
- Add `app/robots.ts` allowing all, pointing to the sitemap URL.
- Set `metadataBase` in the root layout to `https://wevtex.com`.

### Step 1.3 — Heading & semantic hygiene
- Exactly one `<h1>` per page. Section titles are `<h2>`/`<h3>` in order, no skips.
- Wrap real regions in `<section>`, cards in `<article>` where they're standalone.
- Every image gets descriptive French `alt` text with the subject (e.g.
  `alt="Site e-commerce de caftans réalisé par WEVTEX"`). Never empty, never keyword-stuffed.

### Step 1.4 — Core Web Vitals (you're on Next.js — protect the lead)
- Use `next/image` for every image, with width/height, `sizes`, and lazy-load
  below the fold; mark the hero image `priority`.
- Use `next/font` (Onest already set up) — no render-blocking web fonts.
- No layout shift: reserve space for images and embeds.
- Target LCP < 2.5s, CLS < 0.1, INP < 200ms. Verify in PageSpeed Insights.

### Step 1.5 — hreflang (only once EN/AR exist)
When a second language ships, add `alternates.languages` in metadata for each
locale, and a reciprocal `hreflang` on every translated page (`fr-MA`, `en`,
`ar`, plus `x-default`). Skip this step until translations exist — broken
hreflang hurts more than none.

---

## PHASE 2 — Structured data (schema) — this is half of GEO

AI engines and Google's rich results both read JSON-LD. Add these `<script
type="application/ld+json">` blocks. Build a small `<JsonLd>` component and inject
per page.

### Step 2.1 — Organization + LocalBusiness (site-wide, in root layout)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "WEVTEX",
  "url": "https://wevtex.com",
  "logo": "https://wevtex.com/logo.png",
  "image": "https://wevtex.com/og-default.png",
  "description": "Studio web et IT à Casablanca : création de sites, e-commerce, applications mobiles, SEO et automatisation.",
  "areaServed": ["Casablanca", "Rabat", "Marrakech", "Tanger", "Agadir", "Maroc"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressCountry": "MA"
  },
  "telephone": "+212783180806",
  "email": "hello@wevtex.com",
  "sameAs": [
    "https://www.instagram.com/…",
    "https://www.linkedin.com/company/…"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "⚠ REAL DATA (e.g. 5.0)",
    "reviewCount": "⚠ REAL DATA (e.g. 94)"
  }
}
```
⚠ Only include `aggregateRating` if the Google reviews are real and match the
Google Business Profile. Remove the block entirely rather than guess.

### Step 2.2 — Service schema (on each service page)
`@type: "Service"`, with `serviceType` (e.g. "Création de site web"),
`provider` referencing WEVTEX, `areaServed: "Maroc"`, and an `offers` block with
the starting price if shown on the page.

### Step 2.3 — FAQPage schema (on the FAQ page and any page with a FAQ block)
`@type: "FAQPage"` with each `Question`/`acceptedAnswer`. Answers must match the
visible text on the page verbatim — never schema-only content.

### Step 2.4 — BreadcrumbList (every non-home page)
Reflects the URL path (Accueil › Services › Création de site web).

### Step 2.5 — CreativeWork / case study (each project detail page)
`@type: "CreativeWork"` (or `WebSite`) with `name`, `about`, `url` (the live
demo), and the stack as `keywords`. Ties your réalisations into the graph.

---

## PHASE 3 — Site architecture (the pages that actually rank)

All three top competitors rank because they have **one page per service** and
**one page per city**. Build this tree. Each page = unique copy, never duplicated.

### Step 3.1 — Service pages (exact-match URLs)
Create one page each. Homepage service cards LINK to these; they are not the
whole story.

| URL | H1 | Title |
|---|---|---|
| `/creation-site-web-maroc/` | Création de site web au Maroc | Création de Site Web au Maroc \| WEVTEX |
| `/creation-site-ecommerce-maroc/` | Création de site e-commerce au Maroc | Création de Boutique en Ligne au Maroc \| WEVTEX |
| `/referencement-seo-maroc/` | Référencement naturel (SEO) au Maroc | Agence SEO au Maroc — Référencement Naturel \| WEVTEX |
| `/google-maps-seo-local-maroc/` | SEO local & Google Maps au Maroc | SEO Local & Google Maps au Maroc \| WEVTEX |
| `/developpement-application-mobile-maroc/` | Développement d'applications mobiles au Maroc | Développement d'Applications Mobiles au Maroc \| WEVTEX |
| `/creation-publicite-google-meta-maroc/` | Publicité Google & Meta au Maroc | Gestion de Publicités Google & Meta au Maroc \| WEVTEX |
| `/logiciel-sur-mesure-maroc/` | Logiciels sur mesure au Maroc | Développement de Logiciels sur Mesure au Maroc \| WEVTEX |
| `/solution-digitale-sur-mesure-maroc/` | Solutions digitales sur mesure | Solutions Digitales sur Mesure au Maroc \| WEVTEX |
| `/chatbot-whatsapp-maroc/` | Chatbots WhatsApp automatisés au Maroc | Chatbot WhatsApp pour Entreprise au Maroc \| WEVTEX |

Each service page structure (≈700–1000 words, unique):
1. H1 + one-sentence promise. 2. The problem it solves (2–3 short paras).
3. What's included (list). 4. How it works (3–5 steps). 5. Starting price + what
affects it. 6. 2–3 relevant réalisations. 7. A 3–5 question FAQ (with FAQPage
schema). 8. CTA. Interlink to related services and to relevant city pages.

### Step 3.2 — City pages (biggest ranking lever)
"agence web casablanca" outsearches "agence web maroc" and has weaker
competition. Create one page per city, each with GENUINELY unique copy — never a
find-and-replace of the city name (Google detects and discounts that).

| URL | H1 | Title |
|---|---|---|
| `/agence-web-casablanca/` | Agence web à Casablanca | Agence Web à Casablanca — Création de Sites \| WEVTEX |
| `/agence-web-rabat/` | Agence web à Rabat | Agence Web à Rabat — Création de Sites \| WEVTEX |
| `/agence-web-marrakech/` | Agence web à Marrakech | Agence Web à Marrakech — Création de Sites \| WEVTEX |
| `/agence-web-tanger/` | Agence web à Tanger | Agence Web à Tanger — Création de Sites \| WEVTEX |
| `/agence-web-agadir/` | Agence web à Agadir | Agence Web à Agadir — Création de Sites \| WEVTEX |

Each city page (≈600–900 words, unique): local intro (the city's business
context, neighbourhoods, sectors), services framed for that city, why a local
studio helps, réalisations for clients in/near that city if any (⚠ real only),
a Google Map embed, LocalBusiness + Breadcrumb schema, strong CTA. Start with
Casablanca (your base — strongest relevance) then Marrakech/Rabat.

### Step 3.3 — FAQ page
A standalone `/faq/` page. 10–15 real questions, full-sentence answers, FAQPage
schema. Cover: prix, délais, propriété du site, hébergement, SEO, maintenance,
technologies, secteurs. (Copy already drafted in the content deck — reuse it.)

### Step 3.4 — Réalisations (already built) + blog
Keep the projects section and per-project `/realisations/[slug]` pages from the
projects brief. Add a `/blog/` (see Phase 4).

---

## PHASE 4 — Content that earns rankings (blog) + keyword map

### Step 4.1 — Target keyword map (French, Morocco — durable, not fad terms)
Assign ONE primary keyword per page; don't let two pages target the same term
(keyword cannibalization).

Head terms (hard, long game): `agence web maroc`, `création site web maroc`,
`agence web casablanca`, `agence seo maroc`, `développement web maroc`.

Mid / commercial (rank first, realistic in months): `création site web casablanca`,
`création boutique en ligne maroc`, `développement application mobile maroc`,
`site web sur mesure casablanca`, `agence création site web marrakech`,
`chatbot whatsapp entreprise maroc`, `logiciel sur mesure maroc`.

Long-tail / question (fastest wins + GEO gold): `combien coûte un site web au maroc`,
`prix création site web maroc`, `comment choisir une agence web au maroc`,
`site vitrine ou e-commerce`, `quel cms choisir pour un site au maroc`,
`combien de temps pour créer un site web`.

Forward-looking / GEO opening (competitors mostly absent here):
`agence développement ia maroc`, `automatisation entreprise maroc`,
`agent ia whatsapp maroc`. Owning these now is your differentiator.

### Step 4.2 — Blog engine
Build `/blog/` (list) + `/blog/[slug]` (post) with per-post metadata, Article
schema (`@type: "Article"` with `headline`, `datePublished`, `author`,
`image`), and a visible published date. Posts are MDX or the site's existing
content source — do not hardcode.

### Step 4.3 — First 6 posts (write these, ~1000–1500 words each, real advice)
1. Combien coûte un site web au Maroc en 2026 ? (prix, fourchettes, ce qui fait varier)
2. Comment choisir une agence web au Maroc : le guide complet
3. Site vitrine ou boutique en ligne : lequel choisir pour votre activité ?
4. SEO au Maroc : par où commencer pour être trouvé sur Google
5. Chatbots WhatsApp : comment automatiser la relation client d'une PME marocaine
6. Next.js vs WordPress : quel choix pour un site rapide et durable ?

Each post: answers the query directly in the first paragraph (GEO — see Phase 5),
clear H2 structure, one internal link to the matching service page, one CTA.

---

## PHASE 5 — GEO (getting cited by AI answer engines)

GEO is not separate SEO — it's a content shape. AI engines quote sources that
state verifiable facts plainly and answer the question in a self-contained way.
Apply these rules across the whole site, especially FAQ, service pages, and blog.

### Step 5.1 — Answer-first writing
Every FAQ answer and every blog post opens with a direct, standalone answer in
1–3 sentences, BEFORE any build-up. "Un site vitrine au Maroc coûte généralement
entre X et Y dirhams selon…" — a sentence an AI can lift whole. Detail follows.

### Step 5.2 — Verifiable, scoped facts
State facts with their scope and source, the way a citable source does: "livré
en 2 à 4 semaines", "sur les 94 avis Google de l'agence". ⚠ real numbers only —
invented figures get the page ignored or distrusted by AI ranking systems.

### Step 5.3 — Self-contained sections
Each H2 section should make sense if quoted alone, without the reader having seen
the section above it. Avoid "as mentioned above". This is how a passage survives
being extracted into an AI answer.

### Step 5.4 — Entity clarity
State plainly, in text (not only in schema): who WEVTEX is, where it's based
(Casablanca, Maroc), what it does, and what it costs. AI answer engines build an
entity picture from consistent, repeated, plain statements across the site + the
Organization schema + external mentions.

### Step 5.5 — A dedicated GEO/AI-forward page
Create `/agence-developpement-ia-maroc/` (Service page): AI agents, automatisation,
chatbots. This targets the forward-looking keywords AND positions WEVTEX as an
answer to "agence IA au Maroc" queries in AI engines — a niche the big incumbents
have barely claimed.

---

## PHASE 6 — Off-page (owner tasks, not code — list them clearly)

Code gets the site eligible to rank; these earn the authority that decides it.
Output this as a checklist for the owner:
- Create & fully complete a **Google Business Profile** (Casablanca): category,
  services, hours, photos, and request reviews. This drives the local map pack.
- Keep NAP (name, address, phone) identical across the site, GBP, and any directory.
- List in Moroccan business directories (consistent NAP).
- Earn a few quality backlinks: client sites' "réalisé par WEVTEX" footer link,
  a guest article, a local press mention.
- Publish the blog on a real cadence (start monthly if weekly isn't sustainable —
  consistency beats volume).

---

## Definition of done (Phase 1–5, in-code)
- Every route has unique title, description, canonical, one keyworded H1.
- sitemap.ts + robots.ts live; metadataBase set.
- Organization/LocalBusiness, Service, FAQPage, Breadcrumb, Article schema present
  and validating in Google's Rich Results Test.
- 9 service pages + 5 city pages + FAQ + blog engine + 6 posts + the IA page exist,
  each with unique copy and correct internal links.
- No two pages target the same primary keyword.
- No invented stats or reviews anywhere; every ⚠ placeholder either filled with
  real data or removed.
- PageSpeed: LCP < 2.5s, CLS < 0.1 on mobile.

## Honest expectation to surface to the owner
On-page + GEO here make the site *eligible* and win the long-tail and city terms
first (realistic over the coming months). The head terms ("agence web maroc")
also need domain authority and backlinks built over time — Phase 6 is how that
happens, and it's ongoing, not a one-week task.

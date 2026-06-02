# SEO & Keyword Standards — Next.js + Strapi

Read this for keyword research, the Next.js Metadata API, technical SEO,
sitemap/robots, structured data, and local/off-page authority. SEO has three
layers: technical (can Google crawl it), on-page (keywords + content), and
authority (links + reputation).

## Keyword research — the foundation

1. Brainstorm the problems clients search for, in their own words.
2. Expand with tools (Google Keyword Planner, Ahrefs, Semrush, Search Console,
   "People also ask").
3. Classify by intent: informational ("how to…"), commercial ("best … agency"),
   transactional ("hire …", "… near me").
4. Target long-tail first — lower competition, higher intent, easier to rank.
5. Map one primary keyword per page; never let two pages compete for the same
   term. Store the target keyword/intent in the Strapi SEO component as a note.

| Page | Primary keyword example | Intent |
|---|---|---|
| Service page | "web design agency in [city]" | Transactional |
| Blog post | "how much does a website cost" | Informational |
| Comparison | "best CRM for small agencies" | Commercial |

## On-page SEO with the Metadata API

Drive metadata from the Strapi **SEO component** (metaTitle, metaDescription,
ogImage, canonical) via `generateMetadata`:

```tsx
// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { getService } from "@/lib/strapi";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const s = await getService(params.slug);
  const seo = s.seo ?? {};
  return {
    title: seo.metaTitle ?? s.title,            // 50–60 chars
    description: seo.metaDescription,            // 150–160 chars
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: seo.metaTitle ?? s.title,
      description: seo.metaDescription,
      images: seo.ogImage ? [seo.ogImage.url] : [],
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}
```

- Set a global default in the root `layout.tsx` `metadata` (title template,
  `metadataBase`, default OG image) so nothing is ever missing.
- One H1 per page with the main topic; logical H2/H3 carrying related terms.
- Use keywords naturally in the first 100 words, headings, and image alt text —
  never stuff them.
- Descriptive URL slugs from Strapi (`/services/web-design`, not `/p?id=12`).
- Internal links with descriptive anchor text using `next/link`.

## Technical SEO

- **Sitemap:** add `app/sitemap.ts` that pulls slugs from Strapi so new content
  is included automatically.
- **Robots:** add `app/robots.ts`.
- **Crawlable HTML:** content renders on the server (Server Components + static/
  ISR) so Google sees it without executing JS.
- **Fast Core Web Vitals** — a confirmed ranking signal (see frontend-performance.md).
- **Mobile-friendly** (mobile-first indexing).
- Fix broken links and 404s; use `redirects()` in `next.config.js` (301) for
  moved pages.

```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/strapi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://youragency.com";
  const services = await getAllSlugs("services");
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    ...services.map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
```

```ts
// app/robots.ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://youragency.com/sitemap.xml",
  };
}
```

## Structured data (JSON-LD)

Render JSON-LD in the relevant page/layout via a `<script type="application/ld+json">`.
Choose the type per page: Organization/ProfessionalService (global),
Service, BreadcrumbList, Review/AggregateRating, FAQPage, Article (blog).

```tsx
export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Your Agency",
    url: "https://youragency.com",
    telephone: "+1-555-000-0000",
    address: { "@type": "PostalAddress", addressLocality: "City" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
```

Validate with Google's Rich Results Test.

## Off-page & local authority

- Earn backlinks from relevant, reputable sites (guest posts, partnerships, PR).
- Claim and optimize Google Business Profile; keep NAP (name, address, phone)
  consistent everywhere.
- Collect reviews — they boost local ranking and conversion.
- Publish helpful content consistently (use Strapi as the blog backend) to grow
  keyword coverage and authority.

## SEO checklist for any new page

- [ ] One primary keyword chosen and mapped to intent
- [ ] Strapi SEO component filled (metaTitle, metaDescription, ogImage, canonical)
- [ ] `generateMetadata` wired to that SEO component
- [ ] Single H1; logical heading structure with related terms
- [ ] Descriptive slug
- [ ] Image alt text written (also helps `next/image`)
- [ ] Internal links in and out via `next/link`
- [ ] Relevant JSON-LD added and validated
- [ ] Included in `app/sitemap.ts`; canonical set

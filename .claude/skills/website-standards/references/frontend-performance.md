# Next.js Frontend & Performance Standards

Read this when building pages/routes, React components, fetching content for
display, or working on page speed and Core Web Vitals. Assumes the **App Router**.

## Rendering strategy — choose deliberately

| Page type | Strategy | How |
|---|---|---|
| Marketing, services, blog, case studies | Static + ISR | Server Component fetch with `next: { revalidate: N }` |
| Content that must be instantly fresh | On-demand ISR | `revalidateTag` / `revalidatePath` from a Strapi webhook |
| Per-request dynamic (search, auth dashboards) | SSR | `cache: 'no-store'` or `dynamic = 'force-dynamic'` |

Default to **static + ISR**. Server Components are the default — only add
`"use client"` for components that need state, effects, or browser APIs. Keep
client components small and push them to the leaves of the tree.

## Fetching Strapi data in a Server Component

```tsx
// app/services/page.tsx  (Server Component — no "use client")
import { getServices } from "@/lib/strapi";

export default async function ServicesPage() {
  const services = await getServices(); // runs on the server
  return (
    <main>
      <h1>Our Services</h1>
      <ul>
        {services.map((s) => (
          <li key={s.documentId}>{s.title}</li>
        ))}
      </ul>
    </main>
  );
}
```

The fetch helper lives server-side and uses `revalidate` for ISR (see
backend-security.md for the full Strapi client and token handling).

## Images — always use `next/image`

`next/image` handles responsive sizing, lazy-loading, and modern formats, which
directly improves LCP and CLS.

```tsx
import Image from "next/image";

<Image
  src={heroUrl}              // can be a Strapi media URL
  alt="Team delivering a marketing campaign"
  width={1600}
  height={900}
  sizes="(max-width: 768px) 100vw, 800px"
  priority                   // only for the LCP/above-the-fold image
/>;
```

- Set `priority` on the single above-the-fold hero image; lazy-load the rest.
- Always pass real `width`/`height` (or `fill` with a sized parent) to prevent CLS.
- Allow the Strapi domain in `next.config` `images.remotePatterns`.
- Configure Strapi to output/upload WebP where possible.

## Fonts — use `next/font`

```tsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });
```

This self-hosts the font, avoids a network round-trip, and prevents layout shift.
Limit to two font families.

## Responsive, mobile-first

- Build for small screens first, then enhance. Test 360 / 768 / 1024 / 1440px.
- Use fluid units (`rem`, `%`, `clamp()`) with CSS Grid / Flexbox or Tailwind.
- Tap targets at least 44×44px; never produce horizontal scroll on mobile.
- The viewport meta is handled by Next automatically — don't hand-add it.

## Semantic, accessible markup

- One `<h1>` per page; logical H2/H3 nesting.
- Use `<header>`, `<nav aria-label>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- See conversion-accessibility.md for the full WCAG checklist.

## JavaScript discipline

- Prefer Server Components; minimize `"use client"`.
- `next/dynamic` to lazy-load heavy client-only widgets (maps, carousels, charts).
- Avoid large client libraries for things the server can render.
- Use `next/link` for internal navigation (prefetching + client routing).

## Core Web Vitals targets

| Metric | Target | Main levers in this stack |
|---|---|---|
| LCP | < 2.5 s | `next/image` + `priority`, static/ISR, CDN, hero from edge |
| INP | < 200 ms | Less client JS, fewer/lighter client components |
| CLS | < 0.1 | Sized images/fonts, reserve space for embeds |
| TTFB | < 0.8 s | Static rendering, ISR cache, edge/CDN, fast Strapi host |

## Delivery & caching

- Deploy the frontend to a CDN-backed host (Vercel handles this; otherwise put a
  CDN in front).
- Let ISR cache HTML; cache static assets long-term (Next fingerprints them).
- Enable Brotli/Gzip at the host.

## Measure, don't guess

Run Lighthouse and PageSpeed Insights on key templates; check Chrome field data
(real users). Re-test after major changes. Target Lighthouse Performance 90+.

## Quality gate before shipping a component or page

- Renders on the server where possible; minimal client JS.
- Responsive across all breakpoints; no horizontal scroll.
- Images via `next/image`, sized, correct `priority`/lazy; no layout shift.
- Accessible: contrast, labels, focus, alt text.
- No console errors; Lighthouse Performance 90+ on the template.

/**
 * Exports today's content as Strapi-shaped JSON, so the migration is an import
 * loop rather than a retyping job. See wevtex-strapi-plan.md.
 *
 *   npx tsx scripts/export-content.ts
 *
 * Writes to exports/ (git-ignored). Reads only; nothing in lib/ is touched.
 *
 * Blog bodies are converted here, not at import time, because the mapping from
 * PostBlock to the dynamic zone is the one part a human would get wrong.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { POSTS } from "../lib/blog-data";
import { POSTS_EN } from "../lib/en/blog-data";
import { PROJECTS } from "../lib/projects-data";
import { SERVICES } from "../lib/services-data";
import { SERVICES_EN } from "../lib/en/services-data";
import { ADDONS, PRICES, MONTHLY } from "../lib/pricing";
import { SERVICE_URLS } from "../lib/site-links";
import { SERVICE_URLS_EN, POST_SLUGS_EN, PROJECT_SLUGS_EN } from "../lib/i18n-paths";

const OUT = join(process.cwd(), "exports");

type Block = Record<string, unknown>;

/** PostBlock[] -> the block.* dynamic zone in the plan, §3.1. */
function toDynamicZone(body: any[]): Block[] {
  return body.map((b) => {
    switch (b.type) {
      case "p":
        return { __component: "block.paragraph", text: b.text };
      case "h2":
        return { __component: "block.heading", level: 2, text: b.text };
      case "h3":
        return { __component: "block.heading", level: 3, text: b.text };
      case "ul":
        return { __component: "block.list", ordered: false, items: b.items };
      case "ol":
        return { __component: "block.list", ordered: true, items: b.items };
      case "note":
        return { __component: "block.note", text: b.text };
      case "table":
        return { __component: "block.table", head: b.head, rows: b.rows };
      case "links":
        return { __component: "block.links", items: b.items };
      default:
        throw new Error(`Unknown block type "${b.type}" — add it to the mapping.`);
    }
  });
}

const seo = (o: {
  metaTitle: string;
  metaDescription: string;
  keyword: string;
}) => ({
  metaTitle: o.metaTitle,
  metaDescription: o.metaDescription,
  keyword: o.keyword,
  noindex: false,
});

function posts(list: typeof POSTS, locale: "fr" | "en") {
  return list.map((p) => ({
    locale,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    answer: p.answer,
    category: p.category,
    publishedAt: p.publishedAt,
    updatedAt: p.updatedAt ?? null,
    readingMinutes: p.readingMinutes,
    relatedService: p.relatedService, // serviceId — resolve to a relation on import
    relatedPosts: p.relatedPosts, // slugs — resolve to relations on import
    body: toDynamicZone(p.body as any[]),
    faqs: p.faqs ?? [],
    seo: seo(p),
  }));
}

function services(list: typeof SERVICES, locale: "fr" | "en") {
  const urls = locale === "fr" ? SERVICE_URLS : SERVICE_URLS_EN;
  return list.map((s, i) => ({
    locale,
    serviceId: s.slug,
    slug: urls[s.slug] ?? s.slug,
    name: s.name,
    eyebrow: s.eyebrow,
    keyword: s.keyword,
    h1: s.h1,
    h1Em: s.h1Em,
    intro: s.intro,
    includes: s.includes,
    outcomes: s.outcomes,
    tags: s.tags,
    faqs: s.faqs,
    order: i,
    pricingTiers: (s.pricing?.tiers ?? []).map((t) => ({
      name: t.name,
      price: t.price,
      note: t.note,
      features: t.features,
      featured: t.featured ?? false,
      showFrom: t.from !== false,
      unit: t.unit ?? null,
    })),
    pricingHead: s.pricing
      ? { title: s.pricing.title, subtitle: s.pricing.subtitle ?? null, footnote: s.pricing.footnote ?? null }
      : null,
    whyUs: s.whyUs ?? null,
    featureSections: s.featureSections ?? null,
    tech: s.tech ?? null,
    process: s.process ?? null,
    sectors: s.sectors ?? null,
    demo: s.demo ?? null,
    seo: seo(s),
  }));
}

function projects(locale: "fr" | "en") {
  return PROJECTS.map((p) => ({
    locale,
    slug: locale === "fr" ? p.slug : PROJECT_SLUGS_EN[p.slug] ?? p.slug,
    title: p.title,
    clientUrl: p.clientUrl,
    liveUrl: p.liveUrl,
    category: p.category,
    year: p.year,
    featured: p.featured,
    order: p.order,
    description: p.description,
    stack: p.stack,
    metricValue: p.metricValue,
    metricLabel: p.metricLabel,
    screenshot: p.screenshot, // a path in public/ — upload to media, then relink
    seo: {
      metaTitle: p.title,
      metaDescription: p.metaDescription,
      keyword: p.slug.replace(/-/g, " "),
      noindex: false,
    },
  }));
}

/** The single type: add-ons, plus the price table the {{prix:…}} tokens read. */
function pricing() {
  return {
    addons: ADDONS.map((a) => ({
      key: a.id,
      price: a.price,
      unit: { fr: a.unit.fr, en: a.unit.en },
      title: { fr: a.fr.h, en: a.en.h },
      description: { fr: a.fr.p, en: a.en.p },
    })),
    // Kept for reference: after the move these are derived from the service
    // packs, and this file is what you check the derivation against.
    priceTable: PRICES,
    monthlyTable: MONTHLY,
  };
}

const files: [string, unknown][] = [
  ["posts.fr.json", posts(POSTS, "fr")],
  ["posts.en.json", posts(POSTS_EN, "en")],
  ["post-pairs.json", POST_SLUGS_EN],
  ["projects.fr.json", projects("fr")],
  ["projects.en.json", projects("en")],
  ["services.fr.json", services(SERVICES, "fr")],
  ["services.en.json", services(SERVICES_EN, "en")],
  ["pricing.json", pricing()],
];

mkdirSync(OUT, { recursive: true });
for (const [name, data] of files) {
  writeFileSync(join(OUT, name), JSON.stringify(data, null, 2), "utf8");
  const count = Array.isArray(data) ? `${data.length} entries` : "1 object";
  console.log(`  exports/${name.padEnd(20)} ${count}`);
}
console.log("\nReviews have no local source: they are created in Strapi from the real Google reviews.");

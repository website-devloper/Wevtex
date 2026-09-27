/**
 * Exports today's content as Keystatic-shaped files, so tomorrow's migration is
 * a copy rather than a retyping job. See wevtex-keystatic-plan.md.
 *
 *   npx tsx scripts/export-content.ts
 *
 * Writes to exports/keystatic/ (git-ignored), laid out exactly like the
 * content/ tree in the plan. Reads only; nothing in lib/ is touched.
 *
 * Blog bodies are converted here, from PostBlock[] to Markdoc, because that is
 * the one mapping a human would get wrong by hand.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

import { POSTS } from "../lib/blog-data";
import { POSTS_EN } from "../lib/en/blog-data";
import { PROJECTS } from "../lib/projects-data";
import { SERVICES } from "../lib/services-data";
import { SERVICES_EN } from "../lib/en/services-data";
import { ADDONS } from "../lib/pricing";
import { FAQ_GROUPS } from "../lib/faq-data";
import { FAQ_GROUPS_EN } from "../lib/en/faq-data";
import { CONTACT_FAQS } from "../lib/contact-content";
import { CONTACT_FAQS_EN } from "../lib/en/contact-content";
import { INDUSTRIES } from "../lib/industries-data";
import { INDUSTRIES_EN } from "../lib/en/industries-data";
import { CITIES } from "../lib/cities-data";
import { CITIES_EN } from "../lib/en/cities-data";
import { SERVICE_URLS, PHONE_DISPLAY, PHONE_E164, EMAIL, SOCIALS, GOOGLE_REVIEWS_URL } from "../lib/site-links";
import { SERVICE_URLS_EN, POST_SLUGS_EN, PROJECT_SLUGS_EN } from "../lib/i18n-paths";

const OUT = join(process.cwd(), "exports", "keystatic");

/* ---------------------------------------------------------------- output -- */

function write(relPath: string, body: string) {
  const full = join(OUT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, body, "utf8");
}

/**
 * Minimal YAML writer. Every string is emitted as a double-quoted scalar, which
 * has the same escaping rules as JSON — safe for apostrophes, colons and
 * accents, and readable in a diff.
 */
const isScalar = (v: unknown) =>
  v === null || v === undefined || typeof v === "string" || typeof v === "number" || typeof v === "boolean";

function scalar(v: unknown): string {
  if (v === null || v === undefined) return "null";
  if (typeof v === "string") return JSON.stringify(v);
  return String(v);
}

function dump(value: unknown, indent: number): string {
  const pad = "  ".repeat(indent);
  if (isScalar(value)) return `${pad}${scalar(value)}`;

  if (Array.isArray(value)) {
    if (value.length === 0) return `${pad}[]`;
    return value
      .map((v) => (isScalar(v) ? `${pad}- ${scalar(v)}` : `${pad}-\n${dump(v, indent + 1)}`))
      .join("\n");
  }

  const entries = Object.entries(value as Record<string, unknown>).filter(([, v]) => v !== undefined);
  if (entries.length === 0) return `${pad}{}`;
  return entries
    .map(([k, v]) => {
      if (isScalar(v)) return `${pad}${k}: ${scalar(v)}`;
      if (Array.isArray(v) && v.length === 0) return `${pad}${k}: []`;
      return `${pad}${k}:\n${dump(v, indent + 1)}`;
    })
    .join("\n");
}

/** A whole file of YAML. */
const yamlFile = (o: unknown) => dump(o, 0) + "\n";

/* ------------------------------------------------------------ blog bodies -- */

/** PostBlock[] -> Markdoc, with the three tags the plan defines. */
function toMarkdoc(body: any[]): string {
  const out: string[] = [];
  for (const b of body) {
    switch (b.type) {
      case "p":
        out.push(b.text);
        break;
      case "h2":
        out.push(`## ${b.text}`);
        break;
      case "h3":
        out.push(`### ${b.text}`);
        break;
      case "ul":
        out.push(b.items.map((i: string) => `- ${i}`).join("\n"));
        break;
      case "ol":
        out.push(b.items.map((i: string, n: number) => `${n + 1}. ${i}`).join("\n"));
        break;
      case "note":
        out.push(`{% note %}\n${b.text}\n{% /note %}`);
        break;
      case "table":
        out.push(`{% table head=${JSON.stringify(b.head)} rows=${JSON.stringify(b.rows)} /%}`);
        break;
      case "links":
        out.push(`{% links items=${JSON.stringify(b.items)} /%}`);
        break;
      default:
        throw new Error(`Unknown block type "${b.type}" — add it to the mapping.`);
    }
  }
  return out.join("\n\n") + "\n";
}

const seo = (o: { metaTitle: string; metaDescription: string; keyword: string }) => ({
  metaTitle: o.metaTitle,
  metaDescription: o.metaDescription,
  keyword: o.keyword,
  noindex: false,
});

/* ------------------------------------------------------------- collections -- */

let files = 0;

function exportPosts(list: typeof POSTS, locale: "fr" | "en") {
  // pairKey ties the two languages together; the French slug is the natural key.
  const frByEn = Object.fromEntries(Object.entries(POST_SLUGS_EN).map(([fr, en]) => [en, fr]));
  for (const p of list) {
    const pairKey = locale === "fr" ? p.slug : frByEn[p.slug] ?? p.slug;
    const front = yamlFile({
      title: p.title,
      excerpt: p.excerpt,
      answer: p.answer,
      category: p.category,
      publishedAt: p.publishedAt,
      updatedAt: p.updatedAt ?? null,
      readingMinutes: p.readingMinutes,
      relatedService: p.relatedService,
      relatedPosts: p.relatedPosts,
      pairKey,
      faqs: p.faqs ?? [],
      seo: seo(p),
    });
    write(`${locale}/posts/${p.slug}.mdoc`, `---\n${front}---\n\n${toMarkdoc(p.body as any[])}`);
    files++;
  }
}

function exportProjects(locale: "fr" | "en") {
  for (const p of PROJECTS) {
    const slug = locale === "fr" ? p.slug : PROJECT_SLUGS_EN[p.slug] ?? p.slug;
    write(
      `${locale}/projects/${slug}.yaml`,
      yamlFile({
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
        screenshot: p.screenshot,
        pairKey: p.slug,
        seo: {
          metaTitle: p.title,
          metaDescription: p.metaDescription,
          keyword: p.slug.replace(/-/g, " "),
          noindex: false,
        },
      }),
    );
    files++;
  }
}

function exportServices(list: typeof SERVICES, locale: "fr" | "en") {
  const urls = locale === "fr" ? SERVICE_URLS : SERVICE_URLS_EN;
  list.forEach((s, i) => {
    write(
      `${locale}/services/${s.slug}.yaml`,
      yamlFile({
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
        pricingHead: s.pricing
          ? { title: s.pricing.title, subtitle: s.pricing.subtitle ?? null, footnote: s.pricing.footnote ?? null }
          : null,
        pricingTiers: (s.pricing?.tiers ?? []).map((t) => ({
          name: t.name,
          price: t.price,
          note: t.note,
          features: t.features,
          featured: t.featured ?? false,
          showFrom: t.from !== false,
          unit: t.unit ?? null,
        })),
        whyUs: s.whyUs ?? null,
        // The deeper sections, kept verbatim so the schema can be shaped to them.
        featureSections: s.featureSections ?? null,
        tech: s.tech ?? null,
        process: s.process ?? null,
        sectors: s.sectors ?? null,
        demo: s.demo ?? null,
        pairKey: s.slug,
        seo: seo(s),
      }),
    );
    files++;
  });
}

function exportSingletons() {
  write(
    "pricing.yaml",
    yamlFile({
      addons: ADDONS.map((a) => ({
        key: a.id,
        price: a.price,
        unitFr: a.unit.fr,
        unitEn: a.unit.en,
        titleFr: a.fr.h,
        titleEn: a.en.h,
        descriptionFr: a.fr.p,
        descriptionEn: a.en.p,
      })),
    }),
  );
  files++;

  write(
    "settings.yaml",
    yamlFile({
      phoneDisplay: PHONE_DISPLAY,
      phoneE164: PHONE_E164,
      email: EMAIL,
      googleReviewsUrl: GOOGLE_REVIEWS_URL,
      socials: SOCIALS,
    }),
  );
  files++;

  write("fr/faq.yaml", yamlFile({ groups: FAQ_GROUPS, contact: CONTACT_FAQS }));
  write("en/faq.yaml", yamlFile({ groups: FAQ_GROUPS_EN, contact: CONTACT_FAQS_EN }));
  files += 2;
}

/**
 * Sectors and cities are exported verbatim. Their pages are template-driven, so
 * the schema is written against these files tomorrow rather than guessed today.
 */
function exportPageCollections() {
  for (const [locale, list] of [["fr", INDUSTRIES], ["en", INDUSTRIES_EN]] as const) {
    for (const i of list as any[]) {
      write(`${locale}/sectors/${i.slug}.yaml`, yamlFile({ ...i, pairKey: i.slug }));
      files++;
    }
  }
  for (const [locale, list] of [["fr", CITIES], ["en", CITIES_EN]] as const) {
    for (const c of list as any[]) {
      write(`${locale}/cities/${c.slug}.yaml`, yamlFile({ ...c, pairKey: c.fr ?? c.slug }));
      files++;
    }
  }
}

/* -------------------------------------------------------------------- run -- */

exportPosts(POSTS, "fr");
exportPosts(POSTS_EN, "en");
exportProjects("fr");
exportProjects("en");
exportServices(SERVICES, "fr");
exportServices(SERVICES_EN, "en");
exportSingletons();
exportPageCollections();

console.log(`\n  ${files} files written to exports/keystatic/`);
console.log("  Layout matches the content/ tree in wevtex-keystatic-plan.md §2.\n");
console.log("  Not exported, because there is no source for them yet:");
console.log("    reviews/   — created in Keystatic from the real Google reviews");
console.log("    clients/   — six logos already in public/images/clients/wall/");

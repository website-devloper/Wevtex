/**
 * Exports the content still held in lib/ as Keystatic-shaped files, so each
 * migration is a copy rather than a retyping job. See wevtex-keystatic-plan.md.
 *
 * The blog and the réalisations have already moved: they live under content/
 * and are edited in the dashboard.
 *
 *   npx tsx scripts/export-content.ts
 *
 * Writes to exports/keystatic/ (git-ignored), laid out exactly like the
 * content/ tree in the plan. Reads only; nothing in lib/ is touched.
 *
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

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
import { SERVICE_URLS_EN } from "../lib/i18n-paths";

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

const seo = (o: { metaTitle: string; metaDescription: string; keyword: string }) => ({
  metaTitle: o.metaTitle,
  metaDescription: o.metaDescription,
  keyword: o.keyword,
  noindex: false,
});

/* ------------------------------------------------------------- collections -- */

let files = 0;

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

exportServices(SERVICES, "fr");
exportServices(SERVICES_EN, "en");
exportSingletons();
exportPageCollections();

console.log(`\n  ${files} files written to exports/keystatic/`);
console.log("  Layout matches the content/ tree in wevtex-keystatic-plan.md §2.\n");
console.log("  Not exported, because there is no source for them yet:");
console.log("    reviews/   — created in Keystatic from the real Google reviews");
console.log("    clients/   — six logos already in public/images/clients/wall/");

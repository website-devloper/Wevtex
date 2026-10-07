/**
 * The shape of a service page.
 *
 * The pages themselves live in content/fr/services and content/en/services,
 * written in the dashboard at /keystatic and read by lib/content.ts. Their
 * formules come from the Tarifs page, so a price is written once and the
 * table, the page and every sentence quoting it stay in step.
 *
 * Only the types stay here: the views, the routes and the content layer all
 * type against them.
 */

import type { SeoSection } from "./service-seo";

export type FeatureCard = { title: string; desc: string; checks: string[] };
export type FeatureSection = { eyebrow: string; title: string; titleEm?: string[]; subtitle?: string; cards: FeatureCard[] };
export type TechGroup = { label: string; items: string[]; desc?: string };
export type ProcessStep = { n: string; h: string; checks: string[]; d: string };
export type SectorGroup = { label: string; cases: string[] };
/** Formules tarifaires propres à la prestation. */
export type PriceTier = {
  name: string;
  price: string;
  note: string;
  features: string[];
  featured?: boolean;
  /** false for a fixed price: the card drops its "from" line. */
  from?: boolean;
  /** e.g. "/ jour" — printed after the currency. */
  unit?: string;
};
/** Arguments différenciants, propres à la prestation. */
export type WhyPoint = { h: string; p: string };

export type Service = {
  slug: string;
  /** Short label for cards/nav. */
  name: string;
  /** Primary keyword this page targets. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** H1 — use \n for a line break; words in `h1Em` render emphasized. */
  h1: string;
  h1Em: string[];
  intro: string;
  /** "Ce qui est inclus" — concrete deliverables. */
  includes: string[];
  /** Outcomes/benefits — why it matters to the client. */
  outcomes: { h: string; p: string }[];
  tags: string[];
  faqs: { q: string; a: string }[];
  // Rich detail sections — pages render them only when present.
  demo?: { title: string; subtitle?: string; caption?: string };
  featureSections?: FeatureSection[];
  tech?: { title: string; titleEm?: string[]; subtitle?: string; groups: TechGroup[] };
  process?: { title: string; titleEm?: string[]; subtitle?: string; steps: ProcessStep[] };
  sectors?: { title: string; titleEm?: string[]; subtitle?: string; groups: SectorGroup[] };
  pricing?: { title: string; titleEm?: string[]; subtitle?: string; tiers: PriceTier[]; footnote?: string };
  whyUs?: { title: string; titleEm?: string[]; subtitle?: string; points: WhyPoint[] };
  /** Question-shaped search sections, merged in from lib/service-seo.ts. */
  seoSections?: SeoSection[];
  /** Secondary search terms, merged in from lib/service-seo.ts. */
  seoKeywords?: string[];
  /** Anchor prefix for the city links ("Agence SEO" -> "Agence SEO à Tanger"). */
  seoCityLabel?: string;
};

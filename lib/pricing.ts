/**
 * Every published price, in one place.
 *
 * The numbers are written in the dashboard, on the Tarifs page, and land here
 * through lib/pricing.generated.json, which scripts/sync-pairs.ts writes before
 * every build. Nothing in this file is edited by hand any more.
 *
 * The pricing tables on the service pages read from here, and so does every
 * sentence that quotes a price (service copy, FAQs, blog posts, city pages,
 * meta descriptions) through a {{prix:<service>/<formule>}} token. Change a
 * number below and it changes everywhere it is quoted, in both languages,
 * with nothing left stale in the copy.
 *
 * Amounts are strings in the French display format ("6 000"), in dirhams.
 * English pages show the same amount as "6,000" (formatAmount).
 * Formule names must match the tier names in lib/services-data.ts.
 */

import type { Locale } from "./i18n";

import GENERATED from "./pricing.generated.json";

/** Tier wording, both languages, for the pricing tables. */
export type PackTier = {
  key: string;
  price: string;
  unit?: string;
  showFrom: boolean;
  featured: boolean;
  fr: { name: string; note: string; features: string[] };
  en: { name: string; note: string; features: string[] };
};

export const PRICES: Record<string, Record<string, string>> = GENERATED.prices;

/** Monthly fees quoted alongside a one-off set-up price. */
export const MONTHLY: Record<string, Record<string, string>> = GENERATED.monthly;

/** The formules of each service, in the order the dashboard lists them. */
export const PACKS = GENERATED.packs as unknown as Record<string, PackTier[]>;

/** Options sold on top of a pack, listed on /tarifs. */
export const ADDONS = GENERATED.addons as unknown as {
  id: string;
  price: string;
  unit: { fr: string; en: string };
  fr: { h: string; p: string };
  en: { h: string; p: string };
}[];

type Table = Record<string, Record<string, string>>;

/** "6 000" in French copy, "6,000" in English copy. */
export function formatAmount(value: string | undefined, locale: Locale = "fr"): string {
  if (!value) return "";
  return locale === "en" ? value.replace(/[\s  ]+/g, ",") : value;
}

/**
 * A formule's price, or undefined when that formule is not published.
 *
 * Prefer this to PRICES["service"]["Formule"]: the formule names are edited in
 * the dashboard, so any of them can disappear between two deploys, and an
 * index straight into the table then returns undefined and takes the render
 * down with it.
 */
export function priceOf(service: string, tier: string): string | undefined {
  return PRICES[service]?.[tier];
}

/** The monthly fee of a formule, or undefined when it is not published. */
export function monthlyOf(service: string, tier: string): string | undefined {
  return MONTHLY[service]?.[tier];
}

/** Price references in the copy that no formule answers, seen while rendering. */
export const unresolvedPriceRefs = new Set<string>();

const TOKEN = /\{\{(prix|mensuel):([^}]+)\}\}/g;

/**
 * Resolves {{prix:service/Formule}} and {{mensuel:service/Formule}} in copy.
 *
 * Returns null when the text quotes a formule that no longer exists. The price
 * list is content, edited in a dashboard, so a formule can be renamed or
 * removed at any moment and the sentence quoting it becomes untrue. The caller
 * drops it. Shipping "{{prix:...}}" to a page, or failing the deploy over one
 * sentence, are both worse than one paragraph fewer.
 */
export function fillPrices(text: string, locale: Locale = "fr"): string | null {
  let missing = false;
  const out = text.replace(TOKEN, (token, kind: string, key: string) => {
    const [service, tier] = key.trim().split("/");
    const table = (kind === "prix" ? PRICES : MONTHLY) as unknown as Table;
    const value = table[service]?.[tier];
    if (!value) {
      missing = true;
      unresolvedPriceRefs.add(token);
      return "";
    }
    return formatAmount(value, locale);
  });
  return missing ? null : out;
}

/** Marks a value that quotes a formule which no longer exists. */
const DROP = Symbol("quotes a formule that no longer exists");

function fill(value: unknown, locale: Locale): unknown {
  if (typeof value === "string") {
    if (!value.includes("{{")) return value;
    return fillPrices(value, locale) ?? DROP;
  }
  if (Array.isArray(value)) {
    return value.map((v) => fill(v, locale)).filter((v) => v !== DROP);
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const filled = fill(v, locale);
      // A question whose answer quoted a dead price is not worth half of, so
      // the whole entry goes and the list above it closes the gap.
      if (filled === DROP) return DROP;
      out[k] = filled;
    }
    return out;
  }
  return value;
}

/**
 * fillPrices applied to every string inside a plain data structure, dropping
 * the smallest enclosing item that quotes a formule which no longer exists:
 * one paragraph out of a list of paragraphs, one question out of an FAQ.
 */
export function fillPricesDeep<T>(value: T, locale: Locale = "fr"): T {
  const out = fill(value, locale);
  // Nothing survived: hand back the input rather than a hole, and let the
  // build report name the formule that went missing.
  return (out === DROP ? value : out) as T;
}

const amount = (s: string) => Number(s.replace(/\D/g, ""));
const allPrices = Object.values(PRICES as unknown as Table).flatMap((t) => Object.values(t));
const lowest = allPrices.reduce((a, b) => (amount(b) < amount(a) ? b : a));
const highest = allPrices.reduce((a, b) => (amount(b) > amount(a) ? b : a));

/** Schema.org priceRange, from the lowest to the highest published price. */
export const PRICE_RANGE = `${lowest} DH – ${highest} DH`;
export const PRICE_RANGE_EN = `MAD ${formatAmount(lowest, "en")} – MAD ${formatAmount(highest, "en")}`;

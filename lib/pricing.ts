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
export function formatAmount(value: string, locale: Locale = "fr"): string {
  return locale === "en" ? value.replace(/[\s  ]+/g, ",") : value;
}

function lookup(table: Table, key: string, token: string) {
  const [service, tier] = key.split("/");
  const value = table[service]?.[tier];
  if (!value) {
    throw new Error(`Unknown price token ${token}: no "${tier}" under "${service}" in lib/pricing.ts.`);
  }
  return value;
}

/**
 * Resolves {{prix:service/Formule}} and {{mensuel:service/Formule}} in copy.
 * An unknown token fails the build instead of shipping "{{prix:…}}" to a page.
 */
export function fillPrices(text: string, locale: Locale = "fr"): string {
  return text.replace(/\{\{(prix|mensuel):([^}]+)\}\}/g, (token, kind: string, key: string) =>
    formatAmount(lookup((kind === "prix" ? PRICES : MONTHLY) as unknown as Table, key.trim(), token), locale),
  );
}

/** fillPrices applied to every string inside a plain data structure. */
export function fillPricesDeep<T>(value: T, locale: Locale = "fr"): T {
  if (typeof value === "string") return fillPrices(value, locale) as T;
  if (Array.isArray(value)) return value.map((v) => fillPricesDeep(v, locale)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, fillPricesDeep(v, locale)]),
    ) as T;
  }
  return value;
}

const amount = (s: string) => Number(s.replace(/\D/g, ""));
const allPrices = Object.values(PRICES as unknown as Table).flatMap((t) => Object.values(t));
const lowest = allPrices.reduce((a, b) => (amount(b) < amount(a) ? b : a));
const highest = allPrices.reduce((a, b) => (amount(b) > amount(a) ? b : a));

/** Schema.org priceRange, from the lowest to the highest published price. */
export const PRICE_RANGE = `${lowest} DH – ${highest} DH`;
export const PRICE_RANGE_EN = `MAD ${formatAmount(lowest, "en")} – MAD ${formatAmount(highest, "en")}`;

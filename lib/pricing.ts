/**
 * Every published price, in one place.
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

export const PRICES = {
  // Basic / Standard / Premium on the page.
  "website-creation": { Vitrine: "1 899", Business: "2 999", Boutique: "6 999" },
  // Basic / Intermédiaire / Avancé on the page, per month.
  seo: { Essentiel: "1 000", Croissance: "1 500", Concurrentiel: "2 500" },
  "local-seo": { "Mise en place": "790", Entretien: "490", "Multi-sites": "1 900" },
  // One pack, priced per day of management. The two other keys are kept at
  // the same rate so older copy tokens still resolve to the published price.
  ads: { Lancement: "200", Multicanal: "200", Performance: "200" },
  // One pack each, quoted from the entry price; the other keys follow it so
  // no sentence quotes a tier that is no longer sold.
  "mobile-apps": { Essentielle: "8 000", Complète: "8 000", "Sur mesure": "8 000" },
  "desktop-apps": { "Outil simple": "4 999", "Gestion complète": "4 999", "Système métier": "4 999" },
  "custom-solutions": { Cadrage: "6 000", Plateforme: "18 000", "SaaS complet": "60 000" },
  "whatsapp-bots": { Essentiel: "2 400", Qualification: "5 900", "Sur mesure": "12 000" },
} as const;

/** Monthly fees quoted alongside a one-off set-up price. */
export const MONTHLY = {
  "whatsapp-bots": { Essentiel: "390", Qualification: "690" },
} as const;

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

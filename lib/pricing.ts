/**
 * Every published price, in one place.
 *
 * The pricing tables on the service pages read from here, and so does every
 * sentence that quotes a price (service copy, FAQs, blog posts, city pages,
 * meta descriptions) through a {{prix:<service>/<formule>}} token. Change a
 * number below and it changes everywhere it is quoted, with nothing left stale
 * in the copy.
 *
 * Amounts are strings in the French display format ("6 000"), in dirhams.
 * Formule names must match the tier names in lib/services-data.ts.
 */

export const PRICES = {
  "website-creation": { Vitrine: "990", Business: "6 000", Boutique: "16 000" },
  seo: { Essentiel: "1 500", Croissance: "3 500", Concurrentiel: "6 500" },
  "local-seo": { "Mise en place": "790", Entretien: "490", "Multi-sites": "1 900" },
  ads: { Lancement: "1 200", Multicanal: "2 800", Performance: "5 500" },
  "mobile-apps": { Essentielle: "12 000", Complète: "28 000", "Sur mesure": "50 000" },
  "desktop-apps": { "Outil simple": "14 000", "Gestion complète": "32 000", "Système métier": "60 000" },
  "custom-solutions": { Cadrage: "6 000", Plateforme: "18 000", "SaaS complet": "60 000" },
  "whatsapp-bots": { Essentiel: "2 400", Qualification: "5 900", "Sur mesure": "12 000" },
} as const;

/** Monthly fees quoted alongside a one-off set-up price. */
export const MONTHLY = {
  "whatsapp-bots": { Essentiel: "390", Qualification: "690" },
} as const;

type Table = Record<string, Record<string, string>>;

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
export function fillPrices(text: string): string {
  return text.replace(/\{\{(prix|mensuel):([^}]+)\}\}/g, (token, kind: string, key: string) =>
    lookup((kind === "prix" ? PRICES : MONTHLY) as unknown as Table, key.trim(), token),
  );
}

/** fillPrices applied to every string inside a plain data structure. */
export function fillPricesDeep<T>(value: T): T {
  if (typeof value === "string") return fillPrices(value) as T;
  if (Array.isArray(value)) return value.map((v) => fillPricesDeep(v)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, fillPricesDeep(v)]),
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

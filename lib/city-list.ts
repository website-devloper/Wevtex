/**
 * The six city pages as navigation needs them: slug and name, nothing else.
 *
 * The footer (on every page), the homepage band and the service pages link to
 * the cities. Importing lib/cities-data for that shipped every city's
 * paragraphs and FAQs in the JavaScript of every page, just to print six
 * names. Client components import this list instead; lib/cities-data checks
 * at build time that it matches the pages it defines.
 */
export const CITY_LINKS = [
  { slug: "agence-web-casablanca", name: "Casablanca" },
  { slug: "agence-web-rabat", name: "Rabat" },
  { slug: "agence-web-marrakech", name: "Marrakech" },
  { slug: "agence-web-fes", name: "Fès" },
  { slug: "agence-web-tanger", name: "Tanger" },
  { slug: "agence-web-agadir", name: "Agadir" },
] as const;

/**
 * The same six pages in English, in the same order. The URL is the English
 * search term ("web design casablanca", Google autocomplete, 2026-09-12);
 * `fr` pairs each with its French page and names the shared hero photo.
 */
export const CITY_LINKS_EN = [
  { slug: "web-design-casablanca", name: "Casablanca", fr: "agence-web-casablanca" },
  { slug: "web-design-rabat", name: "Rabat", fr: "agence-web-rabat" },
  { slug: "web-design-marrakech", name: "Marrakech", fr: "agence-web-marrakech" },
  { slug: "web-design-fes", name: "Fez", fr: "agence-web-fes" },
  { slug: "web-design-tangier", name: "Tangier", fr: "agence-web-tanger" },
  { slug: "web-design-agadir", name: "Agadir", fr: "agence-web-agadir" },
] as const;

/** A city's hero photo, named after its French page in both languages. */
export const cityImage = (c: { slug: string; fr?: string }) => `/images/villes/${c.fr ?? c.slug}.webp`;

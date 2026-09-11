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

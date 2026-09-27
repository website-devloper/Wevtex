/**
 * The one map between the French and the English URL of every page.
 *
 * French stays at the root and English lives under /en, each with URLs in its
 * own language, because the URL is part of what ranks: /en/web-design-morocco
 * answers "web design morocco" the way /creation-site-web-maroc answers
 * "création site web maroc". The language switch, the hreflang tags, the
 * sitemap and every internal link on an English page go through this file, so
 * a page can't be linked in one language and missing in the other.
 *
 * Slugs only, no page content, so client components can import it cheaply.
 * The English data files check at build time that they define exactly these
 * pages.
 */
import type { Locale } from "./i18n";
import SERVICE_URLS_FR from "./service-urls.json";
import { CITY_LINKS_EN } from "./city-list";

/** English URL of each service, keyed by the same internal id as the French one. */
export const SERVICE_URLS_EN: Record<string, string> = {
  "website-creation": "web-design-morocco",
  seo: "seo-agency-morocco",
  "local-seo": "local-seo-google-maps-morocco",
  ads: "google-ads-facebook-ads-morocco",
  "mobile-apps": "mobile-app-development-morocco",
  "desktop-apps": "custom-software-development-morocco",
  "custom-solutions": "web-application-development-morocco",
  "whatsapp-bots": "whatsapp-chatbot-morocco",
};

/** Blog posts: French slug -> English slug. */
export const POST_SLUGS_EN: Record<string, string> = {
  "combien-coute-un-site-web-au-maroc": "how-much-does-a-website-cost-in-morocco",
  "comment-choisir-une-agence-web-au-maroc": "how-to-choose-a-web-design-agency-in-morocco",
  "site-vitrine-ou-boutique-en-ligne": "business-website-or-online-store",
  "seo-au-maroc-par-ou-commencer": "seo-in-morocco-where-to-start",
  "chatbot-whatsapp-pme-marocaine": "whatsapp-chatbot-for-moroccan-businesses",
  "nextjs-ou-wordpress-quel-choix": "nextjs-or-wordpress",
  "combien-coute-une-application-mobile-au-maroc": "how-much-does-an-app-cost-in-morocco",
  "google-ads-ou-facebook-ads-maroc": "google-ads-or-facebook-ads-morocco",
  "site-web-ou-page-facebook": "website-or-facebook-page",
  "vendre-en-ligne-au-maroc": "how-to-sell-online-in-morocco",
  "guide-creation-site-web-maroc": "guide-to-building-a-website-in-morocco",
  "guide-referencement-naturel-maroc": "guide-to-seo-in-morocco",
  "guide-seo-local-google-maps-maroc": "guide-to-local-seo-google-maps-morocco",
  "guide-google-ads-meta-ads-maroc": "guide-to-google-ads-meta-ads-morocco",
  "guide-application-mobile-maroc": "guide-to-mobile-app-development-morocco",
  "guide-logiciel-sur-mesure-maroc": "guide-to-custom-software-morocco",
  "guide-developpement-web-sur-mesure-maroc": "guide-to-custom-web-development-morocco",
  "guide-chatbot-whatsapp-maroc": "guide-to-whatsapp-chatbots-morocco",
};

/** Delivered projects: French slug -> English slug. */
export const PROJECT_SLUGS_EN: Record<string, string> = {
  "plateforme-agence-voyage-maroc": "travel-agency-booking-platform-morocco",
  "ecommerce-opticien-en-ligne-maroc": "online-optician-store-morocco",
  "ecommerce-informatique-hightech-maroc": "electronics-online-store-morocco",
  "site-service-nettoyage-maroc": "cleaning-company-website-morocco",
  "ecommerce-electromenager-maroc": "home-appliance-online-store-morocco",
  "rekrify-plateforme-emploi": "rekrify-job-platform",
  "ecommerce-cosmetiques-assistant-ia": "cosmetics-store-ai-assistant",
  "plateforme-immobilier-prestige-maroc": "luxury-real-estate-platform-morocco",
  "boutique-caftan-luxe": "luxury-kaftan-online-store",
  "site-cafe-brunch-casablanca": "cafe-website-casablanca",
  "site-clinique-dentaire": "dental-clinic-website",
  "site-agence-creative-casablanca": "creative-agency-website-casablanca",
  "application-gestion-depenses": "expense-tracking-web-app",
  "landing-page-casque-vr": "vr-headset-landing-page",
  "site-studio-photographie": "photography-studio-website",
};

/** Pages with a fixed address in both languages. */
const STATIC_EN: Record<string, string> = {
  "/": "/en",
  "/services": "/en/services",
  "/tarifs": "/en/pricing",
  "/portfolio": "/en/portfolio",
  "/contact": "/en/contact",
  "/faq": "/en/faq",
  "/blog": "/en/blog",
  "/mentions-legales": "/en/legal-notice",
  "/confidentialite": "/en/privacy-policy",
  "/thank-you": "/en/thank-you",
  "/agence-developpement-ia-maroc": "/en/ai-automation-agency-morocco",
};

const FR_TO_EN = new Map<string, string>(Object.entries(STATIC_EN));
for (const [id, fr] of Object.entries(SERVICE_URLS_FR as Record<string, string>)) {
  FR_TO_EN.set(`/${fr}`, `/en/${SERVICE_URLS_EN[id]}`);
}
for (const c of CITY_LINKS_EN) FR_TO_EN.set(`/${c.fr}`, `/en/${c.slug}`);
for (const [fr, en] of Object.entries(POST_SLUGS_EN)) FR_TO_EN.set(`/blog/${fr}`, `/en/blog/${en}`);
for (const [fr, en] of Object.entries(PROJECT_SLUGS_EN)) FR_TO_EN.set(`/realisations/${fr}`, `/en/portfolio/${en}`);
const EN_TO_FR = new Map<string, string>([...FR_TO_EN].map(([fr, en]) => [en, fr]));

/** Splits "/a/b#c" into ["/a/b", "#c"], so a fragment or query survives the swap. */
function split(path: string): [string, string] {
  const i = path.search(/[?#]/);
  const p = i < 0 ? path : path.slice(0, i);
  const rest = i < 0 ? "" : path.slice(i);
  return [p.length > 1 ? p.replace(/\/$/, "") : p || "/", rest];
}

const internal = (path: string) => path.startsWith("/") && !path.startsWith("//");

/** The English address of a French page, or null when it has none. */
export function enPath(path: string): string | null {
  if (!internal(path)) return path;
  const [p, rest] = split(path);
  if (p === "/en" || p.startsWith("/en/")) return path;
  const en = FR_TO_EN.get(p) ?? (p.startsWith("/industries/") ? `/en${p}` : undefined);
  return en === undefined ? null : en + rest;
}

/** The French address of an English page, or null when it has none. */
export function frPath(path: string): string | null {
  if (!internal(path)) return path;
  const [p, rest] = split(path);
  if (p !== "/en" && !p.startsWith("/en/")) return path;
  const fr = EN_TO_FR.get(p) ?? (p.startsWith("/en/industries/") ? p.slice(3) : undefined);
  return fr === undefined ? null : fr + rest;
}

/**
 * French path -> the same page in `locale`. Throws for a page with no English
 * version, so a link to one fails the build instead of shipping a wrong link.
 * External links, mailto:, tel: and "#anchor" pass through untouched.
 */
export function localize(path: string, locale: Locale): string {
  if (locale === "fr") return path;
  const en = enPath(path);
  if (en === null) throw new Error(`No English page for ${path} (lib/i18n-paths.ts).`);
  return en;
}

/** Where the language switch points from the page at `pathname`. */
export function switchPath(pathname: string, current: Locale): string {
  return current === "fr" ? enPath(pathname) ?? "/en" : frPath(pathname) ?? "/";
}

/** hreflang set for a page, given its French path: fr, en and x-default (French). */
export function languageAlternates(fr: string) {
  return { fr, en: localize(fr, "en"), "x-default": fr };
}

/**
 * The site's two languages. French is the default and stays at the root
 * (/creation-site-web-maroc); English lives under /en with its own keyword
 * URLs (/en/web-design-morocco). See lib/i18n-paths.ts for the URL map.
 */
export type Locale = "fr" | "en";

export const LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

/** Open Graph locale codes. */
export const OG_LOCALE: Record<Locale, string> = { fr: "fr_MA", en: "en_US" };

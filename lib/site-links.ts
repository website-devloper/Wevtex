/**
 * Every outbound and cross-page link the site uses, in one place.
 *
 * Before this file each component declared its own WHATSAPP_URL / mailto /
 * social href, and they drifted apart (two different Instagram URLs, dead "#"
 * socials, contact CTAs split between "/#contact" and "/contact"). Import from
 * here so a number or a profile changes in exactly one spot.
 *
 * Internal routes here are the French ones. English pages pass them through
 * useLp() / localize() (lib/i18n-paths.ts), which returns the /en address.
 */

import type { Locale } from "./i18n";

/* --- Contact channels ---------------------------------------------------- */

/** International format, no "+" — required by wa.me. */
export const PHONE_E164 = "212783180806";
/** Display / tel: format. */
export const PHONE_TEL = "+212783180806";
export const PHONE_DISPLAY = "+212 783 180 806";

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164}`;
export const TEL_URL = `tel:${PHONE_TEL}`;
export const EMAIL = "hello@wevtex.com";
export const EMAIL_URL = `mailto:${EMAIL}`;

/**
 * The one contact destination for the whole site.
 *
 * Every "devis / contact" button points here — header, footer, sticky bar,
 * service cards and CTA bands — so the visitor always lands on the same form.
 */
export const CONTACT_URL = "/contact";

/* --- Internal routes ------------------------------------------------------
 * Every internal destination is built from a slug here rather than typed as a
 * string at the call site, so a link can only ever point at a route that the
 * App Router actually serves. */

export const HOME_URL = "/";
export const SERVICES_URL = "/services";
/** Every published pack, on one page. */
export const PRICING_URL = "/tarifs";
export const PORTFOLIO_URL = "/portfolio";

/**
 * Public URL of each service, keyed by its internal id.
 *
 * The id (`website-creation`) stays the key everywhere in code: icons, sector
 * pages and blog posts reference it. Only the URL is the French exact-match
 * keyword, at the root: /creation-site-web-maroc. The same JSON drives the 301s
 * from the old /services/<id> addresses in next.config.mjs, so a URL can't
 * change here without its redirect following.
 */
import SERVICE_URL_SLUGS from "./service-urls.json";

export const SERVICE_URLS: Record<string, string> = SERVICE_URL_SLUGS;

/** The detail page for a service — see SERVICE_SLUGS in lib/services-data.ts. */
export const servicePath = (slug: string) => `/${SERVICE_URLS[slug] ?? slug}`;

/** The internal service id behind a public URL slug, if there is one. */
export const serviceIdFromUrl = (urlSlug: string) =>
  Object.keys(SERVICE_URLS).find((id) => SERVICE_URLS[id] === urlSlug);
/** The detail page for a sector — see INDUSTRY_SLUGS in lib/industries-data.ts. */
export const industryPath = (slug: string) => `/industries/${slug}`;

/**
 * Pre-writes the WhatsApp message so the enquiry arrives already labelled.
 * On English pages the message is in English, so the team knows at a glance
 * which language to answer in.
 */
export const serviceWhatsAppUrl = (service: string, locale: Locale = "fr") =>
  `${WHATSAPP_URL}?text=` +
  encodeURIComponent(
    locale === "en"
      ? `Hello Wevtex, I'm interested in “${service}”. Could you send me a quote?`
      : `Bonjour Wevtex — je suis intéressé(e) par « ${service} ». Pouvez-vous m'envoyer un devis ?`,
  );

export const auditWhatsAppUrl = (locale: Locale = "fr") =>
  `${WHATSAPP_URL}?text=` +
  encodeURIComponent(
    locale === "en"
      ? "Hello Wevtex, I'd like the free 15-minute audit of my website."
      : "Bonjour Wevtex, je souhaite profiter de l'audit gratuit de 15 minutes pour mon site.",
  );

export const AUDIT_WHATSAPP_URL = auditWhatsAppUrl("fr");

/* --- Social & review profiles ---------------------------------------------
 * Only profiles that exist are listed. The header and footer render this list,
 * so adding one here makes its icon appear on both surfaces at once. */

export const SOCIALS: { label: string; url: string }[] = [
  { label: "Instagram", url: "https://www.instagram.com/wevtex.agency/" },
];

/** Google Business review profile. */
export const GOOGLE_REVIEWS_URL = "https://g.page/r/Cb_3eKvoUpkmEAE/review";

export const socialUrl = (label: string) => SOCIALS.find((s) => s.label === label)?.url ?? "";

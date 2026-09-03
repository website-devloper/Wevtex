/**
 * Every outbound and cross-page link the site uses, in one place.
 *
 * Before this file each component declared its own WHATSAPP_URL / mailto /
 * social href, and they drifted apart (two different Instagram URLs, dead "#"
 * socials, contact CTAs split between "/#contact" and "/contact"). Import from
 * here so a number or a profile changes in exactly one spot.
 */

/* --- Contact channels ---------------------------------------------------- */

/** International format, no "+" — required by wa.me. */
export const PHONE_E164 = "212687633774";
/** Display / tel: format. */
export const PHONE_TEL = "+212687633774";
export const PHONE_DISPLAY = "+212 687 633 774";

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
export const ABOUT_URL = "/about";
export const SERVICES_URL = "/services";
export const PORTFOLIO_URL = "/portfolio";

/** The detail page for a service — see SERVICE_SLUGS in lib/services-data.ts. */
export const servicePath = (slug: string) => `/services/${slug}`;
/** The detail page for a sector — see INDUSTRY_SLUGS in lib/industries-data.ts. */
export const industryPath = (slug: string) => `/industries/${slug}`;

/** Pre-writes the WhatsApp message so the enquiry arrives already labelled. */
export const serviceWhatsAppUrl = (service: string) =>
  `${WHATSAPP_URL}?text=` +
  encodeURIComponent(`Bonjour Wevtex — je suis intéressé(e) par « ${service} ». Pouvez-vous m'envoyer un devis ?`);

export const AUDIT_WHATSAPP_URL =
  `${WHATSAPP_URL}?text=` +
  encodeURIComponent("Bonjour Wevtex, je souhaite profiter de l'audit gratuit de 15 minutes pour mon site.");

/* --- Social & review profiles ---------------------------------------------
 * Only profiles that exist are listed. The header and footer render this list,
 * so adding one here makes its icon appear on both surfaces at once. */

export const SOCIALS: { label: string; url: string }[] = [
  { label: "Instagram", url: "https://www.instagram.com/wevtex.agency/" },
];

/** Google Business review profile. */
export const GOOGLE_REVIEWS_URL = "https://g.page/r/Cb_3eKvoUpkmEAE/review";

export const socialUrl = (label: string) => SOCIALS.find((s) => s.label === label)?.url ?? "";

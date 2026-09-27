"use client";

import Image from "next/image";
import { useHomeContent } from "./useHomeContent";
import { FloatingActions } from "./FloatingActions";
import { useLocale, useLp } from "./locale";
import { CITY_LINKS, CITY_LINKS_EN } from "@/lib/city-list";
import { CONTACT_URL, HOME_URL, SERVICES_URL, PORTFOLIO_URL, servicePath, industryPath, SOCIALS } from "@/lib/site-links";

/** Wevtex site footer — shared across the homepage and all inner pages. */
/* Every entry resolves to a page or to a section id that actually exists:
   #process and #pricing are both rendered on /services.
   Several sector labels share a page on purpose — one sector page covers both
   "Immobilier" and "Finance" under Services professionnels. */
const T = {
  fr: {
    pages: [
      ["Accueil", HOME_URL], ["Services", SERVICES_URL], ["Réalisations", PORTFOLIO_URL],
      ["Notre méthode", `${SERVICES_URL}#process`], ["Tarifs", `${SERVICES_URL}#pricing`], ["FAQ", "/faq"], ["Blog", "/blog"], ["Agence IA", "/agence-developpement-ia-maroc"], ["Contact", CONTACT_URL],
    ],
    sectors: [
      ["Santé & bien-être", "healthcare-wellness"], ["Immobilier", "professional-services"],
      ["Éducation", "education-elearning"], ["E-commerce", "ecommerce-retail"],
      ["Hôtellerie", "tourism-hospitality"], ["Finance", "professional-services"],
      ["Technologie", "creative-media-tech"],
    ],
    homeAria: "Wevtex — accueil",
    about: "Agence marketing digital à Casablanca. Des sites et des campagnes qui ramènent des clients aux entreprises marocaines, avec un prix annoncé et tout à votre nom.",
    navigation: "Navigation",
    services: "Services",
    sectorsTitle: "Secteurs",
    cities: "Villes",
    rights: "© 2026 Wevtex. Tous droits réservés.",
    privacy: "Politique de confidentialité",
    legal: "Mentions légales",
  },
  en: {
    pages: [
      ["Home", HOME_URL], ["Services", SERVICES_URL], ["Portfolio", PORTFOLIO_URL],
      ["Our process", `${SERVICES_URL}#process`], ["Pricing", `${SERVICES_URL}#pricing`], ["FAQ", "/faq"], ["Blog", "/blog"], ["AI agency", "/agence-developpement-ia-maroc"], ["Contact", CONTACT_URL],
    ],
    sectors: [
      ["Health & wellness", "healthcare-wellness"], ["Real estate", "professional-services"],
      ["Education", "education-elearning"], ["E-commerce", "ecommerce-retail"],
      ["Hospitality", "tourism-hospitality"], ["Finance", "professional-services"],
      ["Technology", "creative-media-tech"],
    ],
    homeAria: "Wevtex — home",
    about: "Web design and digital marketing agency in Casablanca. Websites and campaigns that bring customers to businesses in Morocco and abroad, with the price upfront and everything in your name.",
    navigation: "Navigation",
    services: "Services",
    sectorsTitle: "Industries",
    cities: "Cities",
    rights: "© 2026 Wevtex. All rights reserved.",
    privacy: "Privacy policy",
    legal: "Legal notice",
  },
} as const;

/* Icons keyed to SOCIALS in lib/site-links.ts — an entry with an empty url is
   not rendered, so the footer never shows a dead href="#". */
const SOCIAL_ICONS: { label: string; icon: React.ReactNode }[] = [
  { label: "Instagram", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
  { label: "LinkedIn", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.25 8h4.5v12.5H.25V8zm7.5 0h4.3v1.7h.06c.6-1.1 2.06-2.26 4.24-2.26 4.54 0 5.38 2.99 5.38 6.87v7.19h-4.5v-6.37c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.45 1.66-2.45 3.37v6.48h-4.5V8z" /></svg> },
  { label: "GitHub", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.05.78 2.12v3.14c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5z" /></svg> },
];

function FooterCol({ title, items, split }: { title: string; items: [string, string][]; split?: boolean }) {
  return (
    <div className={split ? "footer-col-v2 split" : "footer-col-v2"}>
      <h5>{title}</h5>
      <ul>
        {items.map(([label, href]) => (
          <li key={label}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const locale = useLocale();
  const t = T[locale];
  const lp = useLp();
  const { SERVICES } = useHomeContent();

  const pages = t.pages.map(([label, href]) => [label, lp(href)] as [string, string]);
  const sectors = t.sectors.map(([label, slug]) => [label, lp(industryPath(slug))] as [string, string]);
  const cities: [string, string][] =
    locale === "en"
      ? CITY_LINKS_EN.map((c) => [c.name, `/en/${c.slug}`])
      : CITY_LINKS.map((c) => [c.name, `/${c.slug}`]);

  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-cols">
          <div className="footer-brandcol">
            <a href={lp(HOME_URL)} className="footer-wordmark" aria-label={t.homeAria}>
              <Image className="footer-mark" src="/images/logo/wevtex-mark-light.png" alt="" width={512} height={512} sizes="72px" />
            </a>
            <p className="footer-about">{t.about}</p>
          </div>

          <FooterCol title={t.navigation} items={pages} split />
          <FooterCol title={t.services} items={SERVICES.map((sv) => [sv.name, lp(servicePath(sv.slug))] as [string, string])} />
          <FooterCol title={t.sectorsTitle} items={sectors} split />
          <FooterCol title={t.cities} items={cities} split />
        </div>

        <div className="footer-bottom-v2">
          <span>{t.rights}</span>
          <span className="footer-legal">
            <a href={lp("/confidentialite")}>{t.privacy}</a>
            <a href={lp("/mentions-legales")}>{t.legal}</a>
          </span>
          <div className="footer-social">
            {SOCIAL_ICONS.filter(({ label }) => SOCIALS.some((x) => x.label === label && x.url)).map(({ label, icon }) => (
              <a key={label} href={SOCIALS.find((x) => x.label === label)!.url} aria-label={label} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <FloatingActions />
    </footer>
  );
}

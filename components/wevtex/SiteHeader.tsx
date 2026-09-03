"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { SERVICES } from "./homeContent";
import { WHATSAPP_URL, TEL_URL, PHONE_DISPLAY, EMAIL, EMAIL_URL, CONTACT_URL, servicePath, industryPath, socialUrl, HOME_URL, SERVICES_URL, PORTFOLIO_URL, ABOUT_URL } from "@/lib/site-links";

type Current = "services" | "about" | "work" | "reviews" | "contact";

type NavItem = { href: string; title: string; sub: string; icon: ReactNode };

const ic = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

/* Services — links to the real /services/[slug] detail pages */

/* Mega-menu icons, keyed to the shared SERVICES list by slug. */
const SERVICE_ICONS: Record<string, ReactNode> = {
  "website-creation": ic(<><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M2 9h20M8 21h8M12 17v4" /></>),
  "seo": ic(<><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.6-3.6" /><path d="M8 12.5l2.2-2.4 1.9 1.7 2.4-2.8" /></>),
  "local-seo": ic(<><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  "ads": ic(<><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" /><path d="M16 9.2a4 4 0 0 1 0 5.6" /><path d="M18.8 6.4a8 8 0 0 1 0 11.2" /></>),
  "mobile-apps": ic(<><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10.5 18.5h3" /></>),
  "desktop-apps": ic(<><rect x="2" y="4" width="20" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>),
  "custom-solutions": ic(<><rect x="7" y="7" width="10" height="10" rx="2.5" /><path d="M9.5 3v4M14.5 3v4M9.5 17v4M14.5 17v4M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4" /></>),
  "whatsapp-bots": ic(<><path d="M20.5 11.5a8 8 0 0 1-11.9 7L4 20l1.6-4.4A8 8 0 1 1 20.5 11.5z" /><path d="M9.5 11.5v.8M14.5 11.5v.8" /><path d="M9.8 15c1.4 1 3 1 4.4 0" /></>),
};

/* Two columns, grouped by what the service does rather than by list order. */
const toNav = (slugs: string[]): NavItem[] =>
  slugs.map((slug) => {
    const sv = SERVICES.find((x) => x.slug === slug)!;
    return { href: servicePath(sv.slug), title: sv.name, sub: sv.short, icon: SERVICE_ICONS[slug] };
  });
const SERVICES_DEV = toNav(["website-creation", "mobile-apps", "desktop-apps", "custom-solutions"]);
const SERVICES_SOL = toNav(["seo", "local-seo", "ads", "whatsapp-bots"]);

/* Industries — links to the real /industries/[slug] detail pages */
const INDUSTRIES: NavItem[] = [
  { href: industryPath("ecommerce-retail"), title: "E-commerce & commerce de détail", sub: "Mode, beauté, maison, alimentaire", icon: ic(<><path d="M3 9l1-4h16l1 4" /><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9" /><path d="M9 21V13h6v8" /></>) },
  { href: industryPath("tourism-hospitality"), title: "Tourisme & hôtellerie", sub: "Hôtels, agences de voyage, restaurants", icon: ic(<><path d="M2 4v16" /><path d="M2 8h18a2 2 0 012 2v10" /><path d="M2 17h20" /><path d="M6 8v3" /></>) },
  { href: industryPath("professional-services"), title: "Services professionnels", sub: "Droit, finance, immobilier, conseil", icon: ic(<><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>) },
  { href: industryPath("healthcare-wellness"), title: "Santé & bien-être", sub: "Cliniques, salles de sport, thérapeutes", icon: ic(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />) },
  { href: industryPath("industry-logistics"), title: "Industrie & logistique", sub: "BTP, production, transport", icon: ic(<path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z" />) },
  { href: industryPath("education-elearning"), title: "Éducation & e-learning", sub: "Écoles, EdTech, centres de formation", icon: ic(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>) },
  { href: industryPath("creative-media-tech"), title: "Création, médias & tech", sub: "SaaS, marketing, médias, artisans", icon: ic(<><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></>) },
  { href: industryPath("public-sector-ngos"), title: "Secteur public & associations", sub: "ONG, administrations, fondations", icon: ic(<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />) },
];

function MegaItem({ item }: { item: NavItem }) {
  return (
    <a href={item.href} className="mega-item">
      <div className="mega-icon">{item.icon}</div>
      <div><strong>{item.title}</strong><span>{item.sub}</span></div>
    </a>
  );
}

export function SiteHeader({ current }: { current?: Current }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"} id="siteHeader">
      {/* Tier 1 — utility bar: contact channels and availability. Collapses on scroll. */}
      <div className="header-topbar">
        <div className="header-topbar-inner">
          <div className="ht-group">
            <a href={EMAIL_URL} className="ht-link">
              {ic(<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>)}
              {EMAIL}
            </a>
            <span className="ht-divider" aria-hidden></span>
            <a href={TEL_URL} className="ht-link">
              {ic(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />)}
              {PHONE_DISPLAY}
            </a>
            <span className="ht-divider" aria-hidden></span>
            <span className="ht-link ht-static">
              {ic(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>)}
              Casablanca — nous travaillons partout
            </span>
          </div>
          <div className="ht-group">
            <span className="ht-status"><span className="ht-pulse" aria-hidden></span>Disponibles pour de nouveaux projets</span>
            <span className="ht-divider" aria-hidden></span>
            <a href={WHATSAPP_URL} className="ht-social" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" /></svg>
            </a>
            {socialUrl("LinkedIn") && (
            <a href={socialUrl("LinkedIn")} className="ht-social" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.75-1.95C20.3 8.75 21 11 21 14.1V21h-4v-6c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9z" /></svg>
            </a>
            )}
            {socialUrl("Instagram") && (
            <a href={socialUrl("Instagram")} className="ht-social" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg>
            </a>
            )}
          </div>
        </div>
      </div>

      {/* Tier 2 — main navigation bar */}
      <div className="site-header-inner">
        <a href={HOME_URL} className="brand" aria-label="Wevtex — accueil">
          <Image
            className="brand-mark"
            src="/images/logo/wevtex-mark-ink.png"
            alt=""
            width={1192}
            height={791}
            priority
          />
          <span className="brand-word">wevtex</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li className="has-mega">
              <a href={SERVICES_URL} className={current === "services" ? "nav-label current" : "nav-label"}>
                Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><path d="M6 9l6 6 6-6" /></svg>
              </a>
              <div className="mega-dropdown">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-head">CRÉER</div>
                    {SERVICES_DEV.map((s) => <MegaItem key={s.href} item={s} />)}
                  </div>
                  <div className="mega-col">
                    <div className="mega-head">DÉVELOPPER &amp; AUTOMATISER</div>
                    {SERVICES_SOL.map((s) => <MegaItem key={s.href} item={s} />)}
                  </div>
                </div>
              </div>
            </li>
            <li className="has-mega">
              <a href={`${HOME_URL}#industries`} className="nav-label">
                Secteurs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><path d="M6 9l6 6 6-6" /></svg>
              </a>
              <div className="mega-dropdown secteurs-dropdown">
                <div className="mega-head">LES SECTEURS QUE NOUS SERVONS</div>
                <div className="mega-grid">
                  {INDUSTRIES.map((s) => <MegaItem key={s.href} item={s} />)}
                </div>
              </div>
            </li>
            <li>
              <a href={PORTFOLIO_URL} className={current === "work" ? "nav-label current" : "nav-label"}>Réalisations</a>
            </li>
            <li>
              <a href={ABOUT_URL} className={current === "about" ? "nav-label current" : "nav-label"}>À propos</a>
            </li>
            <li>
              <a href={CONTACT_URL} className={current === "contact" ? "nav-label current" : "nav-label"}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href={CONTACT_URL} className="btn btn-primary">
            Parlons-en
            <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 9L9 3M9 3H4M9 3V8" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { useTheme } from "../../app/ThemeContext";

type Current = "services" | "about" | "work" | "reviews" | "contact";

type NavItem = { href: string; title: string; sub: string; icon: ReactNode };

const ic = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

/* Services — links to the real /services/[slug] detail pages */
const SERVICES_DEV: NavItem[] = [
  { href: "/services/web-development", title: "Web Development", sub: "React, Next.js, TypeScript", icon: ic(<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>) },
  { href: "/services/wordpress", title: "WordPress", sub: "Custom websites", icon: ic(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9s1.3-6.5 3.8-9z" /></>) },
  { href: "/services/ecommerce", title: "E-commerce", sub: "WooCommerce, Stripe", icon: ic(<><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></>) },
  { href: "/services/ux-ui-design", title: "UX/UI Design", sub: "Custom interfaces", icon: ic(<><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></>) },
];
const SERVICES_SOL: NavItem[] = [
  { href: "/services/erp-management", title: "ERP & Management", sub: "Dolibarr, Odoo, custom", icon: ic(<><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>) },
  { href: "/services/automation", title: "Automation", sub: "n8n, workflows, API", icon: ic(<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />) },
  { href: "/services/business-apps", title: "Business Apps", sub: "Custom solutions", icon: ic(<><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>) },
  { href: "/services/ai-chatbots", title: "AI Chatbots", sub: "Smart chatbots", icon: ic(<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />) },
];

/* Industries — links to the real /industries/[slug] detail pages */
const INDUSTRIES: NavItem[] = [
  { href: "/industries/ecommerce-retail", title: "E-Commerce & Retail", sub: "Fashion, Beauty, Home, Groceries", icon: ic(<><path d="M3 9l1-4h16l1 4" /><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9" /><path d="M9 21V13h6v8" /></>) },
  { href: "/industries/tourism-hospitality", title: "Tourism & Hospitality", sub: "Hotels, Travel Agencies, Restaurants", icon: ic(<><path d="M2 4v16" /><path d="M2 8h18a2 2 0 012 2v10" /><path d="M2 17h20" /><path d="M6 8v3" /></>) },
  { href: "/industries/professional-services", title: "Professional Services", sub: "Legal, Finance, Real Estate, Consulting", icon: ic(<><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></>) },
  { href: "/industries/healthcare-wellness", title: "Healthcare & Wellness", sub: "Clinics, Gyms, Mental Health", icon: ic(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />) },
  { href: "/industries/industry-logistics", title: "Industry & Logistics", sub: "Construction, Manufacturing, Transport", icon: ic(<path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z" />) },
  { href: "/industries/education-elearning", title: "Education & E-Learning", sub: "Schools, EdTech, Training Centers", icon: ic(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>) },
  { href: "/industries/creative-media-tech", title: "Creative, Media & Tech", sub: "SaaS, Marketing, Media, Artisans", icon: ic(<><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></>) },
  { href: "/industries/public-sector-ngos", title: "Public Sector & NGOs", sub: "Non-Profits, Government, Charities", icon: ic(<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />) },
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
  const { isDark, toggleTheme } = useTheme();

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
            <a href="mailto:hello@wevtex.com" className="ht-link">
              {ic(<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>)}
              hello@wevtex.com
            </a>
            <span className="ht-divider" aria-hidden></span>
            <a href="tel:+212687633774" className="ht-link">
              {ic(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />)}
              +212 687 633 774
            </a>
            <span className="ht-divider" aria-hidden></span>
            <span className="ht-link ht-static">
              {ic(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>)}
              Morocco — working worldwide
            </span>
          </div>
          <div className="ht-group">
            <span className="ht-status"><span className="ht-pulse" aria-hidden></span>Available for new projects</span>
            <span className="ht-divider" aria-hidden></span>
            <a href="https://wa.me/212687633774" className="ht-social" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden><path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" /></svg>
            </a>
            <a href="https://www.linkedin.com/" className="ht-social" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.75-1.95C20.3 8.75 21 11 21 14.1V21h-4v-6c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9z" /></svg>
            </a>
            <a href="https://www.instagram.com/" className="ht-social" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2 — main navigation bar */}
      <div className="site-header-inner">
        <a href="/" className="brand" aria-label="Wevtex — home">
          <Image
            className="brand-mark"
            src={isDark ? "/images/logo/wevtex-mark-lime.png" : "/images/logo/wevtex-mark-ink.png"}
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
              <a href="/services" className={current === "services" ? "nav-label current" : "nav-label"}>
                Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><path d="M6 9l6 6 6-6" /></svg>
              </a>
              <div className="mega-dropdown">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-head">DEVELOPMENT</div>
                    {SERVICES_DEV.map((s) => <MegaItem key={s.href} item={s} />)}
                  </div>
                  <div className="mega-col">
                    <div className="mega-head">SOLUTIONS</div>
                    {SERVICES_SOL.map((s) => <MegaItem key={s.href} item={s} />)}
                  </div>
                </div>
              </div>
            </li>
            <li className="has-mega">
              <a href="/#industries" className="nav-label">
                Industries
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><path d="M6 9l6 6 6-6" /></svg>
              </a>
              <div className="mega-dropdown secteurs-dropdown">
                <div className="mega-head">INDUSTRIES WE SERVE</div>
                <div className="mega-grid">
                  {INDUSTRIES.map((s) => <MegaItem key={s.href} item={s} />)}
                </div>
              </div>
            </li>
            <li>
              <a href="/portfolio" className={current === "work" ? "nav-label current" : "nav-label"}>Work</a>
            </li>
            <li>
              <a href="/about" className={current === "about" ? "nav-label current" : "nav-label"}>About</a>
            </li>
            <li>
              <a href="/contact" className={current === "contact" ? "nav-label current" : "nav-label"}>Contact</a>
            </li>
          </ul>
        </nav>

        <div className="nav-cta">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode" style={{
            background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--ink-on-dark)', padding: '8px', display: 'flex', alignItems: 'center'
          }}>
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
            )}
          </button>
          <a href="/contact" className="btn btn-primary">
            Let&apos;s Talk
            <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 9L9 3M9 3H4M9 3V8" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

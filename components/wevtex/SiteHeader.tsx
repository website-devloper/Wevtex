"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "../../app/ThemeContext";

type Current = "services" | "about" | "work" | "reviews" | "contact";

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
      <div className="site-header-inner">
        <a href="/" className="brand" aria-label="Wevtex — home">
          <Image
            className="brand-logo"
            src="/images/logo/wevtex-logo.png"
            alt="Wevtex"
            width={1181}
            height={160}
            priority
          />
        </a>

        <nav>
          <ul className="nav-links">
            <li className="has-mega">
              <span className={current === "services" ? "nav-label current" : "nav-label"}>
                Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><path d="M6 9l6 6 6-6" /></svg>
              </span>
              <div className="mega-dropdown">
                <div className="mega-cols">
                  <div className="mega-col">
                    <div className="mega-head">DEVELOPPEMENT</div>
                    <a href="/services" className="mega-item">
                      <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
                      <div><strong>Developpement Web</strong><span>React, Next.js, TypeScript</span></div>
                    </a>
                    <a href="/services" className="mega-item">
                      <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9s1.3-6.5 3.8-9z"></path></svg></div>
                      <div><strong>WordPress</strong><span>Sites web sur mesure</span></div>
                    </a>
                    <a href="/services" className="mega-item">
                      <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path></svg></div>
                      <div><strong>E-commerce</strong><span>WooCommerce, Stripe</span></div>
                    </a>
                    <a href="/services" className="mega-item">
                      <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg></div>
                      <div><strong>UX/UI Design</strong><span>Interfaces sur mesure</span></div>
                    </a>
                  </div>
                  <div className="mega-col">
                    <div className="mega-head">SOLUTIONS</div>
                    <a href="/services" className="mega-item">
                      <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></div>
                      <div><strong>ERP &amp; Gestion</strong><span>Dolibarr, Odoo, sur mesure</span></div>
                    </a>
                    <a href="/services" className="mega-item">
                      <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
                      <div><strong>Automatisation</strong><span>n8n, workflows, API</span></div>
                    </a>
                    <a href="/services" className="mega-item">
                      <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></div>
                      <div><strong>Applications Metier</strong><span>Solutions personnalisees</span></div>
                    </a>
                    <a href="/services" className="mega-item">
                      <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg></div>
                      <div><strong>Chat Bot IA</strong><span>Chatbots intelligents</span></div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="has-mega">
              <span className="nav-label">
                Secteurs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><path d="M6 9l6 6 6-6" /></svg>
              </span>
              <div className="mega-dropdown secteurs-dropdown">
                <div className="mega-head">SECTEURS D'ACTIVITE</div>
                <div className="mega-grid">
                  <a href="#industries" className="mega-item">
                    <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l1-4h16l1 4"></path><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"></path><path d="M9 21V13h6v8"></path></svg></div>
                    <div><strong>E-Commerce &amp; Retail</strong><span>Fashion, Beauty, Home, Groceries</span></div>
                  </a>
                  <a href="#industries" className="mega-item">
                    <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 012 2v10"></path><path d="M2 17h20"></path><path d="M6 8v3"></path></svg></div>
                    <div><strong>Tourism &amp; Hospitality</strong><span>Hotels, Travel Agencies, Restaurants</span></div>
                  </a>
                  <a href="#industries" className="mega-item">
                    <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path></svg></div>
                    <div><strong>Professional Services</strong><span>Legal, Finance, Real Estate, Consulting</span></div>
                  </a>
                  <a href="#industries" className="mega-item">
                    <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"></path></svg></div>
                    <div><strong>Healthcare &amp; Wellness</strong><span>Clinics, Gyms, Mental Health</span></div>
                  </a>
                  <a href="#industries" className="mega-item">
                    <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z"></path></svg></div>
                    <div><strong>Industry &amp; Logistics</strong><span>Construction, Manufacturing, Transport</span></div>
                  </a>
                  <a href="#industries" className="mega-item">
                    <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div>
                    <div><strong>Education &amp; E-Learning</strong><span>Schools, EdTech, Training Centers</span></div>
                  </a>
                  <a href="#industries" className="mega-item">
                    <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg></div>
                    <div><strong>Creative, Media &amp; Tech</strong><span>SaaS, Marketing, Media, Artisans</span></div>
                  </a>
                  <a href="#industries" className="mega-item">
                    <div className="mega-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                    <div><strong>Public Sector &amp; NGOs</strong><span>Non-Profits, Government, Charities</span></div>
                  </a>
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

"use client";

import { useState } from "react";

/** Wevtex site footer — shared across the homepage and all inner pages. */
const PAGES: [string, string][] = [
  ["Home", "/"], ["About us", "/about"], ["Our work", "/portfolio"], ["How it works", "/#process"],
  ["Pricing", "/#pricing"], ["Add-ons", "/#addons"], ["Blog", "/blog"], ["Contact", "/contact"],
];
const SERVICES: [string, string][] = [
  ["Web Design", "/services/ux-ui-design"], ["Web Development", "/services/web-development"],
  ["E-commerce", "/services/ecommerce"], ["SEO & Performance", "/services"],
  ["Maintenance", "/services"], ["Branding", "/services"], ["UI/UX Design", "/services/ux-ui-design"],
];
const SECTEURS: [string, string][] = [
  ["Santé & Bien-être", "/industries/healthcare-wellness"], ["Immobilier", "/industries/professional-services"],
  ["Éducation", "/industries/education-elearning"], ["E-commerce", "/industries/ecommerce-retail"],
  ["Hôtellerie", "/industries/tourism-hospitality"], ["Finance", "/industries/professional-services"],
  ["Technologie", "/industries/creative-media-tech"],
];

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div className="footer-col-v2">
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
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-cols">
          <div className="footer-brandcol">
            <a href="/" className="footer-wordmark" aria-label="Wevtex — home">
              <img className="footer-mark" src="/images/logo/wevtex-mark-ink.png" alt="" width={1192} height={791} />
              WEVT<span>EX</span>
            </a>
            <p className="footer-about">We&apos;re a digital studio crafting elegant websites, smart systems, and unforgettable experiences for ambitious brands.</p>
            <p className="footer-news-sub">Occasional insights to help your business grow. No spam.</p>
            <form className="footer-news-v2" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
              <input type="email" placeholder="Your email address" aria-label="Email address" required />
              <button type="submit">{subscribed ? "Subscribed ✓" : "Subscribe"}</button>
            </form>
          </div>

          <FooterCol title="Pages" items={PAGES} />
          <FooterCol title="Services" items={SERVICES} />
          <FooterCol title="Secteurs" items={SECTEURS} />
        </div>

        <div className="footer-bottom-v2">
          <span>© 2026 Wevtex. All rights reserved.</span>
          <div className="footer-social">
            <a href="https://www.instagram.com/wevtex.agency/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.25 8h4.5v12.5H.25V8zm7.5 0h4.3v1.7h.06c.6-1.1 2.06-2.26 4.24-2.26 4.54 0 5.38 2.99 5.38 6.87v7.19h-4.5v-6.37c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.45 1.66-2.45 3.37v6.48h-4.5V8z" /></svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.05.78 2.12v3.14c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

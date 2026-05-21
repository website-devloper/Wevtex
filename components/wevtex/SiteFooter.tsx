"use client";

import { useState } from "react";

/** Wevtex site footer — shared across the homepage and all inner pages. */
export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="theme-dark footer">
      <div className="container wide">
        <div className="footer-massive">Wev<em>tex.</em></div>

        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <a href="/" className="brand">
              <span className="brand-mark"></span>
              <span>wevtex<sup>™</sup></span>
            </a>
            <p className="lead">World-class web &amp; desktop apps engineered for ambitious operators. Independent studio · 14 humans · 4 continents.</p>
            <form
              className="footer-news"
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
            >
              <input type="email" placeholder="Your email" />
              <button>{subscribed ? "Subscribed ✓" : "Subscribe"}</button>
            </form>
          </div>
          <div className="footer-col">
            <h5>Pages</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">App Development</a></li>
              <li><a href="/services">SEO & GEO Targeting</a></li>
              <li><a href="/services">Hosting Services</a></li>
              <li><a href="/services">IT Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Newsroom</h5>
            <ul>
              <li><a href="#">Latest updates</a></li>
              <li><a href="/portfolio">Case studies</a></li>
              <li><a href="#">Engineering blog</a></li>
              <li><a href="#">Career openings</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Wevtex · All rights reserved · v26.5.18</span>
          <div className="social">
            <a href="https://www.instagram.com/wevtex.agency/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M2.5 1.2C3.3 1.2 4 1.9 4 2.7s-.7 1.5-1.5 1.5S1 3.5 1 2.7s.7-1.5 1.5-1.5zM1.2 5.2h2.6V13H1.2V5.2zm4.3 0h2.5v1.1c.4-.7 1.4-1.4 2.6-1.4 2.6 0 3.1 1.8 3.1 4.1V13h-2.6V9.4c0-.9 0-2-1.3-2s-1.5.9-1.5 2V13H5.5V5.2z" /></svg></a>
            <a href="#" aria-label="GitHub"><svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 0a7 7 0 00-2.2 13.6c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.3-.8-.78-1.02-.78-1.02-.65-.45.05-.45.05-.45.72.05 1.1.75 1.1.75.64 1.1 1.7.78 2.1.6.06-.46.25-.78.45-.96-1.55-.18-3.2-.78-3.2-3.5 0-.78.27-1.4.72-1.9-.08-.18-.32-.9.06-1.88 0 0 .6-.2 1.95.72.56-.16 1.18-.24 1.78-.24s1.22.08 1.78.24c1.35-.92 1.95-.72 1.95-.72.4.98.15 1.7.08 1.88.45.5.72 1.12.72 1.9 0 2.74-1.65 3.32-3.22 3.5.25.22.48.66.48 1.34v1.98c0 .2.12.4.48.34A7 7 0 007 0z" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

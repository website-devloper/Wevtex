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
            <h5>Development</h5>
            <ul>
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">Desktop Software</a></li>
              <li><a href="/services">E-commerce</a></li>
              <li><a href="/services">Booking Systems</a></li>
              <li><a href="/services">SaaS Products</a></li>
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
            <a href="#" aria-label="X / Twitter"><svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M11 1h2l-4.5 5.2L14 13H9.7L6.4 8.7 2.6 13H.6l4.8-5.5L0 1h4.4l3 4 3.6-4z" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M2.5 1.2C3.3 1.2 4 1.9 4 2.7s-.7 1.5-1.5 1.5S1 3.5 1 2.7s.7-1.5 1.5-1.5zM1.2 5.2h2.6V13H1.2V5.2zm4.3 0h2.5v1.1c.4-.7 1.4-1.4 2.6-1.4 2.6 0 3.1 1.8 3.1 4.1V13h-2.6V9.4c0-.9 0-2-1.3-2s-1.5.9-1.5 2V13H5.5V5.2z" /></svg></a>
            <a href="#" aria-label="GitHub"><svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 0a7 7 0 00-2.2 13.6c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.3-.8-.78-1.02-.78-1.02-.65-.45.05-.45.05-.45.72.05 1.1.75 1.1.75.64 1.1 1.7.78 2.1.6.06-.46.25-.78.45-.96-1.55-.18-3.2-.78-3.2-3.5 0-.78.27-1.4.72-1.9-.08-.18-.32-.9.06-1.88 0 0 .6-.2 1.95.72.56-.16 1.18-.24 1.78-.24s1.22.08 1.78.24c1.35-.92 1.95-.72 1.95-.72.4.98.15 1.7.08 1.88.45.5.72 1.12.72 1.9 0 2.74-1.65 3.32-3.22 3.5.25.22.48.66.48 1.34v1.98c0 .2.12.4.48.34A7 7 0 007 0z" /></svg></a>
            <a href="#" aria-label="Dribbble"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="7" cy="7" r="6" /><path d="M1.5 5.5c4 0 7.5 1.5 9.5 4M3 2.5c2.5 1.5 5 5.5 5.5 10M11.5 3c-1 4-4 7-9 9.5" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

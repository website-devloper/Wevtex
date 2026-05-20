"use client";

import "./wevtex-home.css";
import { SiteHeader } from "../components/wevtex/SiteHeader";
import { SiteFooter } from "../components/wevtex/SiteFooter";

export default function NotFound() {
  return (
    <div className="wevtex">
      <SiteHeader />

      <section className="theme-dark page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal in">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.2em", color: "var(--accent)", marginBottom: 24 }}>// 404 ERROR</div>
            <h1 style={{ fontSize: "5rem", marginBottom: 20 }}>Page not <em>found.</em></h1>
            <p className="lead" style={{ maxWidth: 600, margin: "0 auto 40px" }}>
              The instrument or surface you are looking for does not exist or has been moved. Let&apos;s get you back on track.
            </p>
            <div>
              <a href="/" className="btn btn-primary">
                Go Back Home
                <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

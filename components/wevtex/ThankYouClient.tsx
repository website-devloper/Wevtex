"use client";

import { useTheme } from "../../app/ThemeContext";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ConversionTracker } from "./ConversionTracker";

const WHATSAPP_URL = "https://wa.me/212687633774";

export function ThankYouClient() {
  const { isDark } = useTheme();

  return (
    <div className={`wevtex ${isDark ? "mode-dark" : "mode-light"}`}>
      <ConversionTracker />
      <SiteHeader />

      <section className={`${isDark ? "theme-dark" : "theme-cream"} cta`} style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div>
            <span className="eyebrow accent">Message received</span>
            <h2 style={{ marginTop: 28 }}>Thank you — we&apos;ll be in touch shortly.</h2>
            <p className="lead">
              Your message is on its way to our team. We reply within a few hours during working
              hours with honest advice and a clear price. Need a faster answer? Message us on
              WhatsApp.
            </p>
            <div className="cta-ctas">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
              <a href="/portfolio" className="btn btn-outline">See our work</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

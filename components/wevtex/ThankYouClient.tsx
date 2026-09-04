"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ConversionTracker } from "./ConversionTracker";
import { WHATSAPP_URL, PORTFOLIO_URL } from "@/lib/site-links";

/**
 * Post-submit confirmation — one centred message, nothing else.
 *
 * In the homepage's design language: `line-eyebrow-center` (the rule runs both
 * sides when a block is centred, as on the pricing and industries sections) →
 * `h-section` with the `hl-line` lime underline → `ic-sub`.
 *
 * Deliberately carries no `.reveal` class: that starts at opacity:0 and waits
 * for an IntersectionObserver, so the one message this page exists to deliver
 * would depend on JavaScript running. It rendered blank in production that way.
 */

export function ThankYouClient() {
  return (
    <div className="wevtex mode-light">
      <ConversionTracker />
      <SiteHeader />

      <section
        className="theme-cream sec-first"
        style={{ paddingBottom: "clamp(110px, 16vh, 180px)", textAlign: "center" }}
      >
        <div className="container">
          <span className="eyebrow line-eyebrow-center">Message bien reçu</span>

          <h1 className="h-section" style={{ marginTop: 18 }}>
            Merci, votre demande<br />
            nous est bien <em className="hl-line">parvenue.</em>
          </h1>

          <p className="ic-sub" style={{ maxWidth: "54ch", margin: "20px auto 0" }}>
            Un e-mail de confirmation vient de vous être envoyé. Nous revenons vers
            vous pendant les horaires de bureau, du lundi au vendredi de 9h à 18h
            et le samedi de 10h à 14h.
          </p>

          <div
            className="hero-ctas"
            style={{ marginTop: 34, marginBottom: 0, justifyContent: "center" }}
          >
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              Discuter sur WhatsApp
              <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M3 9L9 3M9 3H4M9 3V8" />
              </svg>
            </a>
            <a href={PORTFOLIO_URL} className="btn btn-outline">Voir nos réalisations</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

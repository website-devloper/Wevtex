"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ConversionTracker } from "./ConversionTracker";
import { WHATSAPP_URL, PORTFOLIO_URL } from "@/lib/site-links";

/**
 * Post-submit confirmation. Built on the same `page-hero` block as /about,
 * /portfolio and /contact so it reads as part of the site — it previously used
 * the centred `.cta` band with a 70vh floor, which left most of the screen empty.
 *
 * The meta row answers the question someone actually has here: when do I hear
 * back, and how. Every value is factual — the hours match the ones quoted
 * elsewhere on the site, and the confirmation e-mail really has just been sent.
 */

export function ThankYouClient() {
  return (
    <div className="wevtex mode-light">
      <ConversionTracker />
      <SiteHeader />

      <section className="theme-cream page-hero">
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">Message bien reçu</span>
            <h1 style={{ marginTop: 24 }}>
              Merci — votre demande<br />nous est bien <em>parvenue.</em>
            </h1>
            <p className="lead">
              Nous étudions votre projet et revenons vers vous avec un premier avis
              et une idée claire du budget. Un e-mail de confirmation vient de vous
              être envoyé.
            </p>

            <div className="hero-ctas" style={{ marginTop: 36 }}>
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Discuter sur WhatsApp
              </a>
              <a href={PORTFOLIO_URL} className="btn btn-outline">
                Voir nos réalisations
              </a>
            </div>

            <div className="page-hero-meta">
              <div>
                <span className="label">Délai de réponse</span>
                <div className="val">Quelques heures ouvrées</div>
              </div>
              <div>
                <span className="label">Canal</span>
                <div className="val">WhatsApp ou e-mail</div>
              </div>
              <div>
                <span className="label">Horaires</span>
                <div className="val">Lun&ndash;Ven 9h&ndash;18h · Sam 10h&ndash;14h</div>
              </div>
              <div>
                <span className="label">Confirmation</span>
                <div className="val">E-mail envoyé à l&apos;instant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

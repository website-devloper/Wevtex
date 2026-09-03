"use client";

import { useTheme } from "../../app/ThemeContext";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ConversionTracker } from "./ConversionTracker";
import { WHATSAPP_URL, PORTFOLIO_URL } from "@/lib/site-links";


export function ThankYouClient() {
  const { isDark } = useTheme();

  return (
    <div className={`wevtex ${isDark ? "mode-dark" : "mode-light"}`}>
      <ConversionTracker />
      <SiteHeader />

      <section className={`${isDark ? "theme-dark" : "theme-cream"} cta`} style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div>
            <span className="eyebrow accent">Message bien reçu</span>
            <h2 style={{ marginTop: 28 }}>Merci — nous revenons vers vous très vite.</h2>
            <p className="lead">
              Votre message est bien parti vers notre équipe. Nous répondons en quelques heures
              pendant les horaires de bureau, avec un conseil honnête et un prix clair. Besoin d&apos;une
              réponse plus rapide ? Écrivez-nous sur WhatsApp.
            </p>
            <div className="cta-ctas">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Discuter sur WhatsApp
              </a>
              <a href={PORTFOLIO_URL} className="btn btn-outline">Voir nos réalisations</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

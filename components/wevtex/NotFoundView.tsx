"use client";

import "@/app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { HOME_URL } from "@/lib/site-links";
import { useLocale, useLp } from "./locale";

const T = {
  fr: {
    eyebrow: "// ERREUR 404",
    h1: "Page ",
    h1Em: "introuvable.",
    lead: "La page que vous cherchez n'existe pas ou a été déplacée. Reprenons depuis le début.",
    cta: "Retour à l'accueil",
  },
  en: {
    eyebrow: "// ERROR 404",
    h1: "Page ",
    h1Em: "not found.",
    lead: "The page you are looking for doesn't exist or has moved. Let's start again from the top.",
    cta: "Back to the homepage",
  },
};

export function NotFoundView() {
  const t = T[useLocale()];
  const lp = useLp();

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <section className="theme-cream page-hero" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal in">
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.2em", color: "var(--accent)", marginBottom: 24 }}>{t.eyebrow}</div>
            <h1 style={{ fontSize: "5rem", marginBottom: 20 }}>{t.h1}<em>{t.h1Em}</em></h1>
            <p className="lead" style={{ maxWidth: 600, margin: "0 auto 40px" }}>
              {t.lead}
            </p>
            <div>
              <a href={lp(HOME_URL)} className="btn btn-primary">
                {t.cta}
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

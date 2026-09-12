"use client";

/**
 * Wevtex — Réalisations (/portfolio and /en/portfolio).
 *
 * Rebuilt on the real project data and the homepage's design language:
 * `eyebrow line-eyebrow` → `h-section` with the `hl-line` lime underline →
 * `ic-sub`. The projects arrive as a prop from the server page, in the
 * page's language.
 */

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ProjectShowcase } from "./ProjectShowcase";
import { useReveal } from "./useReveal";
import { useLocale, useLp } from "./locale";
import type { Project } from "@/lib/projects-data";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/site-links";

const T = {
  fr: {
    eyebrow: "Réalisations",
    h1a: "Des projets livrés,",
    h1b: "en ligne et ",
    h1Em: "consultables.",
    lede: " exemples de sites web réalisés par notre agence web pour des entreprises marocaines et internationales : exemples de sites vitrines, de sites e-commerce, de plateformes et d'applications. Chacun est en ligne : ouvrez-les, ce sont de vrais sites, pas des maquettes.",
    next: "Le prochain projet de cette page peut être le vôtre.",
    quote: "Obtenir mon devis gratuit",
    brief: "Envoyer mon brief",
  },
  en: {
    eyebrow: "Portfolio",
    h1a: "Delivered projects,",
    h1b: "live and ",
    h1Em: "clickable.",
    lede: " website examples built by our web design agency for Moroccan and international businesses: business websites, e-commerce stores, platforms and apps. Every one is live: open them, they are real websites, not mockups.",
    next: "The next project on this page could be yours.",
    quote: "Get my free quote",
    brief: "Send my brief",
  },
};

export function PortfolioView({ projects }: { projects: Project[] }) {
  useReveal();
  const t = T[useLocale()];
  const lp = useLp();

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="work" />

      <main id="main">

      {/* ===================== HERO ===================== */}
      <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(30px, 5vh, 54px)" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow line-eyebrow">{t.eyebrow}</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              {t.h1a}<br />
              {t.h1b}<em className="hl-line">{t.h1Em}</em>
            </h1>
            <p className="ic-sub wk-lede">
              {projects.length}{t.lede}
            </p>

          </div>
        </div>
      </section>

      {/* ===================== THE WORK ===================== */}
      <section className="theme-cream" style={{ padding: "clamp(20px, 3vh, 40px) 0 clamp(90px, 13vh, 150px)" }}>
        <div className="container">
          <ProjectShowcase projects={projects} />
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="inline-cta inline-cta-ink" style={{ paddingTop: "clamp(70px, 10vh, 110px)" }}>
        <div className="container">
          <div className="ict-inner reveal">
            <p className="ict-text">{t.next}</p>
            <div className="ict-actions">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                {t.quote}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href={lp(CONTACT_URL)} className="btn btn-outline">
                {t.brief}
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>


      <SiteFooter />
    </div>
  );
}

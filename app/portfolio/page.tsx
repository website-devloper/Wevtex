"use client";

/**
 * Wevtex — Réalisations.
 *
 * Rebuilt on the real project data and the homepage's design language:
 * `eyebrow line-eyebrow` → `h-section` with the `hl-line` lime underline →
 * `ic-sub`. The previous version was the ported template's English placeholder
 * content (Reserve.co, Arc Desktop, Lumen Studio) on the old `page-hero` block.
 */

import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { ProjectShowcase } from "../../components/wevtex/ProjectShowcase";
import { useReveal } from "../../components/wevtex/useReveal";
import { PROJECTS } from "@/lib/projects-data";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/site-links";

export default function PortfolioPage() {
  useReveal();

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="work" />

      {/* ===================== HERO ===================== */}
      <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(30px, 5vh, 54px)" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow line-eyebrow">Réalisations</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              Des projets livrés,<br />
              en ligne et <em className="hl-line">consultables.</em>
            </h1>
            <p className="ic-sub wk-lede">
              {PROJECTS.length} projets réalisés pour des entreprises marocaines et
              internationales : sites vitrines, boutiques en ligne, plateformes et
              applications. Chacun est en ligne — ouvrez-les et jugez par vous-même.
            </p>

          </div>
        </div>
      </section>

      {/* ===================== THE WORK ===================== */}
      <section className="theme-cream" style={{ padding: "clamp(20px, 3vh, 40px) 0 clamp(90px, 13vh, 150px)" }}>
        <div className="container">
          <ProjectShowcase />
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="theme-sand inline-cta" style={{ paddingTop: "clamp(70px, 10vh, 110px)" }}>
        <div className="container">
          <div className="ict-inner reveal">
            <p className="ict-text">Votre projet mérite la même attention.</p>
            <div className="ict-actions">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Demander un devis gratuit
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href={CONTACT_URL} className="btn btn-outline">
                Envoyer un brief
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

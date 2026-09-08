"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import type { Industry } from "../../lib/industries-data";
import { INDUSTRY_SERVICES } from "../../lib/industries-data";
import { SERVICES } from "./homeContent";
import { SERVICE_ICONS } from "./SharedSections";
import { WHATSAPP_URL, PORTFOLIO_URL, CONTACT_URL, servicePath } from "@/lib/site-links";

/**
 * One /industries/[slug] page.
 *
 * Rebuilt in the site's own design language: `eyebrow line-eyebrow` →
 * `h-section` with the `hl-line` lime underline → `ic-sub`, on grounds that
 * step cream → paper → cream → paper → sand. It previously used the ported
 * template's blocks — the centred `hero` with a wave background, `serif-em`
 * emphasis, `svc-outcomes`, the old `faq` list and the centred `cta` band —
 * none of which appear anywhere else on the site any more.
 */

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const WHATSAPP = (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
    <path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" />
  </svg>
);

export function IndustryDetail({ industry }: { industry: Industry }) {
  useReveal();

  /* What each service means for this sector. A service with no sector-specific
     line is dropped rather than described the way it is on every other page. */
  const sectorServices = (INDUSTRY_SERVICES[industry.slug] ?? [])
    .map((s) => ({ ...s, service: SERVICES.find((sv) => sv.slug === s.slug) }))
    .filter((s) => s.service);

  /* The data stores the h1 as two lines with the last words emphasised. */
  const [line1, line2] = industry.h1.split("\n");

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      {/* ===================== HERO ===================== */}
      <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(56px, 8vh, 92px)" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow line-eyebrow">{industry.eyebrow}</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              {line1}
              {line2 && (
                <>
                  <br />
                  <em className="hl-line">{line2}</em>
                </>
              )}
            </h1>
            <p className="ic-sub wk-lede" style={{ maxWidth: "56ch" }}>{industry.intro}</p>

            <div className="hero-ctas" style={{ marginTop: 34, marginBottom: 0 }}>
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Demander un devis gratuit
                {ARROW}
              </a>
              <a href={PORTFOLIO_URL} className="btn btn-outline">Voir nos réalisations</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES FOR THIS SECTOR ===================== */}
      {sectorServices.length > 0 && (
        <section className="theme-paper services-bento">
          <div className="container">
            <div className="bento-head reveal">
              <span className="eyebrow line-eyebrow">Nos services pour ce secteur</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Ce que nous pouvons faire <em className="hl-line">pour vous.</em>
              </h2>
              <p className="ic-sub" style={{ maxWidth: "58ch" }}>
                Chaque prestation, appliquée aux besoins réels de votre secteur.
                Ouvrez-en une pour le détail et les tarifs.
              </p>
            </div>

            <div className="bento-grid">
              {sectorServices.map((s) => (
                <a key={s.slug} href={servicePath(s.slug)} className="bento-card">
                  <span className="bento-top">
                    <span className="bento-icon">{SERVICE_ICONS[s.slug]}</span>
                  </span>
                  <div className="bento-card-body">
                    <h4>{s.service!.name}</h4>
                    <p>{s.line}</p>
                  </div>
                  <span className="bento-arrow" aria-hidden>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== OUTCOMES ===================== */}
      <section className="theme-cream" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow line-eyebrow">Ce que ça change</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Les résultats <em className="hl-line">concrets.</em>
            </h2>
          </div>

          <div className="ind-outcomes reveal">
            {industry.outcomes.map((o, i) => (
              <div className="ind-outcome" key={i}>
                <h3>{o.h}</h3>
                <span className="ind-outcome-rule" aria-hidden></span>
                <p>{o.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      {industry.faqs.length > 0 && (
        <section className="theme-paper faq-split" id="faq">
          <div className="container">
            <div className="faq-grid">
              <div className="faq-left reveal">
                <span className="eyebrow line-eyebrow">FAQ</span>
                <h2 className="h-section" style={{ marginTop: 14 }}>
                  Vos questions, <em className="hl-line">nos réponses</em>
                </h2>
                <div className="faq-list-v2">
                  {industry.faqs.map((f, i) => (
                    <details className="faq-item-v2" key={i}>
                      <summary>
                        <span className="faq-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                        <span className="faq-q">{f.q}</span>
                        <span className="faq-plus" aria-hidden></span>
                      </summary>
                      <div className="faq-body">
                        <p>{f.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              <div className="faq-right reveal">
                <div className="wa-card">
                  <span className="wa-card-motif" aria-hidden></span>
                  <span className="wa-icon">{WHATSAPP}</span>
                  <h3>Une autre question ?<br /><em>Écrivez-nous sur WhatsApp</em></h3>
                  <span className="wa-rule"></span>
                  <p>Nous sommes là pour vous aider. Écrivez-nous quand vous voulez, nous répondons au plus vite.</p>
                  <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                    {WHATSAPP}
                    Discuter sur WhatsApp
                    {ARROW}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== CTA ===================== */}
      <section className="theme-sand inline-cta" style={{ paddingTop: "clamp(70px, 10vh, 110px)" }}>
        <div className="container">
          <div className="ict-inner reveal">
            <p className="ict-text">Un projet dans {industry.name.toLowerCase()} ?</p>
            <div className="ict-actions">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Demander un devis gratuit
                {ARROW}
              </a>
              <a href={CONTACT_URL} className="btn btn-outline">Envoyer un brief</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

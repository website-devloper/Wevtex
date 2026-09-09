"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ServicesBento } from "./SharedSections";
import { useReveal } from "./useReveal";
import type { City } from "@/lib/cities-data";
import { WHATSAPP_URL, CONTACT_URL, PORTFOLIO_URL } from "@/lib/site-links";

/**
 * A city landing page.
 *
 * Same design language as the rest of the site — line-eyebrow → h-section with
 * the lime marker → ic-sub — on grounds that alternate cream → paper → ink so
 * no more than two pale sections run together.
 *
 * The copy is answer-first: the opening paragraph states plainly who we are,
 * where we are and what we do, so it can be quoted whole by an answer engine
 * without the surrounding page.
 */

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function CityView({ city }: { city: City }) {
  useReveal();

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(48px, 7vh, 80px)" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">Agence web · {city.name}</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                {city.h1} <em className="hl-line">{city.h1Em}</em>
              </h1>
              <p className="ic-sub wk-lede" style={{ maxWidth: "60ch" }}>{city.intro}</p>

              <div className="hero-ctas" style={{ marginTop: 32, marginBottom: 0 }}>
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Demander un devis gratuit
                  {ARROW}
                </a>
                <a href={PORTFOLIO_URL} className="btn btn-outline">Voir nos réalisations</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== LOCAL CONTEXT ===================== */}
        <section className="theme-paper" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: "68ch" }}>
              <span className="eyebrow line-eyebrow">Le contexte local</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Ce qui compte <em className="hl-line">{city.inCity}.</em>
              </h2>
              {city.context.map((p, i) => (
                <p key={i} className="ic-sub" style={{ marginTop: i === 0 ? 20 : 16 }}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SECTORS ===================== */}
        <section className="ind-outcomes-ink" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">Les secteurs {city.inCity}</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Pour qui nous <em className="hl-line">travaillons.</em>
              </h2>
            </div>

            <div className="ind-outcomes reveal">
              {city.sectors.map((s) => (
                <div className="ind-outcome" key={s.h}>
                  <h3>{s.h}</h3>
                  <span className="ind-outcome-rule" aria-hidden></span>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SERVICES ===================== */}
        <ServicesBento
          eyebrow="Nos services"
          heading={<>Tout pour lancer, être trouvé et <em className="hl-line">vendre.</em></>}
          intro={`Huit prestations, disponibles pour toute entreprise ${city.inCity} comme partout au Maroc.`}
        />

        {/* ===================== PROXIMITY ===================== */}
        <section className="inline-cta inline-cta-ink">
          <div className="container">
            <div className="ict-inner reveal">
              <p className="ict-text">{city.proximity}</p>
              <div className="ict-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Parler de votre projet
                  {ARROW}
                </a>
                <a href={CONTACT_URL} className="btn btn-outline">Envoyer un brief</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="theme-cream faq-split" id="faq">
          <div className="container">
            <div className="faq-grid">
              <div className="faq-left reveal">
                <span className="eyebrow line-eyebrow">FAQ</span>
                <h2 className="h-section" style={{ marginTop: 14 }}>
                  Questions fréquentes <em className="hl-line">{city.inCity}.</em>
                </h2>
                <div className="faq-list-v2">
                  {city.faqs.map((f, i) => (
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
                  <h3>Une autre question ?<br /><em>Écrivez-nous sur WhatsApp</em></h3>
                  <span className="wa-rule"></span>
                  <p>On répond vite, en français, en darija ou en anglais.</p>
                  <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                    Discuter sur WhatsApp
                    {ARROW}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

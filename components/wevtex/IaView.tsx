"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import {
  IA_META,
  IA_REALITY,
  IA_CAPABILITIES,
  IA_STEPS,
  IA_SECTORS,
  IA_FAQS,
} from "@/lib/ia-page-data";
import { WHATSAPP_URL, CONTACT_URL, servicePath } from "@/lib/site-links";

/**
 * /agence-developpement-ia-maroc — the AI-forward service page.
 *
 * Same design language as the city and sector pages: line-eyebrow → h-section
 * with the lime marker → ic-sub, on grounds that alternate cream → paper → ink.
 *
 * Every section is written to survive being quoted on its own, and every claim
 * maps to work the studio already ships — the WhatsApp chatbot service and the
 * cosmetics assistant are both real, and nothing here invents a figure.
 */

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function IaView() {
  useReveal();

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(48px, 7vh, 80px)" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">Intelligence artificielle · Maroc</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                {IA_META.h1} <em className="hl-line">{IA_META.h1Em}</em>
              </h1>
              <p className="ic-sub wk-lede" style={{ maxWidth: "62ch" }}>{IA_META.lede}</p>

              <div className="hero-ctas" style={{ marginTop: 32, marginBottom: 0 }}>
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Parler de mon cas d&apos;usage
                  {ARROW}
                </a>
                <a href={CONTACT_URL} className="btn btn-outline">Obtenir mon devis</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WHAT AI ACTUALLY CHANGES ===================== */}
        <section className="theme-paper" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: "68ch" }}>
              <span className="eyebrow line-eyebrow">Ce que l&apos;IA change vraiment</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Du temps rendu, <em className="hl-line">pas de la magie.</em>
              </h2>
              {IA_REALITY.map((p, i) => (
                <p key={i} className="ic-sub" style={{ marginTop: i === 0 ? 20 : 16 }}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CAPABILITIES ===================== */}
        <section className="ind-outcomes-ink" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">Ce que nous construisons</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Quatre familles <em className="hl-line">d&apos;agents.</em>
              </h2>
            </div>

            <div className="ind-outcomes reveal">
              {IA_CAPABILITIES.map((c) => (
                <div className="ind-outcome" key={c.h}>
                  <h3>{c.h}</h3>
                  <span className="ind-outcome-rule" aria-hidden></span>
                  <p>{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== METHOD ===================== */}
        <section className="theme-cream" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: "62ch" }}>
              <span className="eyebrow line-eyebrow">Notre méthode</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Quatre étapes, <em className="hl-line">un agent en service.</em>
              </h2>
              <p className="ic-sub" style={{ marginTop: 18 }}>
                Un premier agent utile est en production en 1 à 4 semaines selon le nombre
                d&apos;outils à connecter. Vous validez un prototype avant d&apos;engager
                l&apos;intégration complète.
              </p>
            </div>

            <div className="proc-grid reveal" style={{ marginTop: 44 }}>
              {IA_STEPS.map((s) => (
                <article className="proc-card" key={s.n}>
                  <span className="proc-num">{s.n}</span>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                  <span className="proc-dur">{s.d}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SECTORS ===================== */}
        <section className="theme-paper" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">Pour qui</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Les métiers où ça <em className="hl-line">paie tout de suite.</em>
              </h2>
            </div>

            <div className="ind-outcomes reveal">
              {IA_SECTORS.map((s) => (
                <div className="ind-outcome" key={s.h}>
                  <h3>{s.h}</h3>
                  <span className="ind-outcome-rule" aria-hidden></span>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>

            <p className="ic-sub reveal" style={{ marginTop: 34, maxWidth: "62ch" }}>
              L&apos;automatisation se branche sur ce qui existe déjà : notre{" "}
              <a href={servicePath("whatsapp-bots")}>service de chatbots WhatsApp</a> pour la
              relation client, nos{" "}
              <a href={servicePath("custom-solutions")}>solutions sur mesure</a> pour les
              connexions internes, et le{" "}
              <a href={servicePath("website-creation")}>site</a> ou l&apos;
              <a href={servicePath("mobile-apps")}>application</a> sur lesquels l&apos;agent
              s&apos;appuie.
            </p>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="inline-cta inline-cta-ink">
          <div className="container">
            <div className="ict-inner reveal">
              <p className="ict-text">
                Dites-nous la tâche qui vous coûte le plus de temps. On vous dira honnêtement
                si elle s&apos;automatise.
              </p>
              <div className="ict-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Écrire sur WhatsApp
                  {ARROW}
                </a>
                <a href={CONTACT_URL} className="btn btn-outline">Envoyer mon brief</a>
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
                  Questions sur <em className="hl-line">l&apos;IA en entreprise.</em>
                </h2>
                <div className="faq-list-v2">
                  {IA_FAQS.map((f, i) => (
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
                  <h3>Un cas d&apos;usage en tête ?<br /><em>Écrivez-nous sur WhatsApp</em></h3>
                  <span className="wa-rule"></span>
                  <p>On répond vite, en français, en darija ou en anglais.</p>
                  <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                    Écrire sur WhatsApp
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

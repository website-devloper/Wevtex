"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { useLocale, useLp } from "./locale";
import { WHATSAPP_URL, CONTACT_URL, servicePath } from "@/lib/site-links";

/**
 * /agence-developpement-ia-maroc — the AI-forward service page, and its
 * English twin /en/ai-automation-agency-morocco.
 *
 * Same design language as the city and sector pages: line-eyebrow → h-section
 * with the lime marker → ic-sub, on grounds that alternate cream → paper → ink.
 *
 * Every section is written to survive being quoted on its own, and every claim
 * maps to work the studio already ships — the WhatsApp chatbot service and the
 * cosmetics assistant are both real, and nothing here invents a figure.
 * The copy arrives as a prop (lib/ia-page-data.ts, lib/en/ia-page-data.ts).
 */

export type IaData = {
  meta: { h1: string; h1Em: string; lede: string };
  reality: readonly string[];
  capabilities: readonly { h: string; p: string }[];
  steps: readonly { n: string; h: string; p: string; d: string }[];
  sectors: readonly { h: string; p: string }[];
  faqs: readonly { q: string; a: string }[];
};

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const T = {
  fr: {
    eyebrow: "Intelligence artificielle · Maroc",
    useCase: "Parler de mon cas d'usage",
    quote: "Obtenir mon devis",
    realityEyebrow: "Ce que l'IA change vraiment",
    realityA: "Du temps rendu, ",
    realityEm: "pas de la magie.",
    buildEyebrow: "Ce que nous construisons",
    buildA: "Quatre familles ",
    buildEm: "d'agents.",
    methodEyebrow: "Notre méthode",
    methodA: "Quatre étapes, ",
    methodEm: "un agent en service.",
    methodP: "Un premier agent utile est en production en 1 à 4 semaines selon le nombre d'outils à connecter. Vous validez un prototype avant d'engager l'intégration complète.",
    whoEyebrow: "Pour qui",
    whoA: "Les métiers où ça ",
    whoEm: "paie tout de suite.",
    links: (lp: (p: string) => string) => (
      <>
        L&apos;automatisation se branche sur ce qui existe déjà : notre{" "}
        <a href={lp(servicePath("whatsapp-bots"))}>service de chatbots WhatsApp</a> pour la
        relation client, nos{" "}
        <a href={lp(servicePath("custom-solutions"))}>solutions sur mesure</a> pour les
        connexions internes, et le{" "}
        <a href={lp(servicePath("website-creation"))}>site</a> ou l&apos;
        <a href={lp(servicePath("mobile-apps"))}>application</a> sur lesquels l&apos;agent
        s&apos;appuie.
      </>
    ),
    ctaText: "Dites-nous la tâche qui vous coûte le plus de temps. On vous dira honnêtement si elle s'automatise.",
    wa: "Écrire sur WhatsApp",
    brief: "Envoyer mon brief",
    faqA: "Questions sur ",
    faqEm: "l'IA en entreprise.",
    waH3: "Un cas d'usage en tête ?",
    waEm: "Écrivez-nous sur WhatsApp",
    waP: "On répond vite, en français, en darija ou en anglais.",
  },
  en: {
    eyebrow: "Artificial intelligence · Morocco",
    useCase: "Discuss my use case",
    quote: "Get my quote",
    realityEyebrow: "What AI really changes",
    realityA: "Time given back, ",
    realityEm: "not magic.",
    buildEyebrow: "What we build",
    buildA: "Four kinds ",
    buildEm: "of agents.",
    methodEyebrow: "Our process",
    methodA: "Four steps, ",
    methodEm: "one agent in production.",
    methodP: "A first useful agent is in production within 1 to 4 weeks, depending on how many tools it connects to. You approve a prototype before committing to the full integration.",
    whoEyebrow: "Who it's for",
    whoA: "The trades where it ",
    whoEm: "pays off right away.",
    links: (lp: (p: string) => string) => (
      <>
        Automation plugs into what you already have: our{" "}
        <a href={lp(servicePath("whatsapp-bots"))}>WhatsApp chatbot service</a> for customer
        relations, our{" "}
        <a href={lp(servicePath("custom-solutions"))}>custom web applications</a> for internal
        connections, and the{" "}
        <a href={lp(servicePath("website-creation"))}>website</a> or{" "}
        <a href={lp(servicePath("mobile-apps"))}>mobile app</a> the agent relies on.
      </>
    ),
    ctaText: "Tell us the task that costs you the most time. We'll tell you honestly whether it can be automated.",
    wa: "Message us on WhatsApp",
    brief: "Send my brief",
    faqA: "Questions about ",
    faqEm: "AI in business.",
    waH3: "Got a use case in mind?",
    waEm: "Message us on WhatsApp",
    waP: "We reply fast, in English, French or Darija.",
  },
};

export function IaView({ data }: { data: IaData }) {
  useReveal();
  const t = T[useLocale()];
  const lp = useLp();

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(48px, 7vh, 80px)" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">{t.eyebrow}</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                {data.meta.h1} <em className="hl-line">{data.meta.h1Em}</em>
              </h1>
              <p className="ic-sub wk-lede" style={{ maxWidth: "62ch" }}>{data.meta.lede}</p>

              <div className="hero-ctas" style={{ marginTop: 32, marginBottom: 0 }}>
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.useCase}
                  {ARROW}
                </a>
                <a href={lp(CONTACT_URL)} className="btn btn-outline">{t.quote}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WHAT AI ACTUALLY CHANGES ===================== */}
        <section className="theme-paper" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: "68ch" }}>
              <span className="eyebrow line-eyebrow">{t.realityEyebrow}</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                {t.realityA}<em className="hl-line">{t.realityEm}</em>
              </h2>
              {data.reality.map((p, i) => (
                <p key={i} className="ic-sub" style={{ marginTop: i === 0 ? 20 : 16 }}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CAPABILITIES ===================== */}
        <section className="ind-outcomes-ink" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">{t.buildEyebrow}</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                {t.buildA}<em className="hl-line">{t.buildEm}</em>
              </h2>
            </div>

            <div className="ind-outcomes reveal">
              {data.capabilities.map((c) => (
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
              <span className="eyebrow line-eyebrow">{t.methodEyebrow}</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                {t.methodA}<em className="hl-line">{t.methodEm}</em>
              </h2>
              <p className="ic-sub" style={{ marginTop: 18 }}>
                {t.methodP}
              </p>
            </div>

            <div className="proc-grid reveal" style={{ marginTop: 44 }}>
              {data.steps.map((s) => (
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
              <span className="eyebrow line-eyebrow">{t.whoEyebrow}</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                {t.whoA}<em className="hl-line">{t.whoEm}</em>
              </h2>
            </div>

            <div className="ind-outcomes reveal">
              {data.sectors.map((s) => (
                <div className="ind-outcome" key={s.h}>
                  <h3>{s.h}</h3>
                  <span className="ind-outcome-rule" aria-hidden></span>
                  <p>{s.p}</p>
                </div>
              ))}
            </div>

            <p className="ic-sub reveal" style={{ marginTop: 34, maxWidth: "62ch" }}>
              {t.links(lp)}
            </p>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="inline-cta inline-cta-ink">
          <div className="container">
            <div className="ict-inner reveal">
              <p className="ict-text">
                {t.ctaText}
              </p>
              <div className="ict-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.wa}
                  {ARROW}
                </a>
                <a href={lp(CONTACT_URL)} className="btn btn-outline">{t.brief}</a>
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
                  {t.faqA}<em className="hl-line">{t.faqEm}</em>
                </h2>
                <div className="faq-list-v2">
                  {data.faqs.map((f, i) => (
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
                  <h3>{t.waH3}<br /><em>{t.waEm}</em></h3>
                  <span className="wa-rule"></span>
                  <p>{t.waP}</p>
                  <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                    {t.wa}
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

"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ServicesBento } from "./SharedSections";
import { useReveal } from "./useReveal";
import { useLocale, useLp } from "./locale";
import type { City } from "@/lib/cities-data";
import { cityImage } from "@/lib/city-list";
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

const T = {
  fr: {
    eyebrow: "Agence web · ",
    quote: "Obtenir mon devis gratuit",
    work: "Voir les sites livrés",
    marketEyebrow: "Votre marché local",
    sells: "Ce qui fait vendre ",
    sectorsEyebrow: "Les secteurs ",
    trades: "Les métiers qu'on ",
    tradesEm: "connaît ici.",
    bentoEyebrow: "Ce qu'on peut faire pour vous",
    foundA: "Être trouvé ",
    foundB: ", ",
    foundEm: "puis choisi.",
    intro: (inCity: string) => `Huit prestations pour les entreprises ${inCity}, chacune avec son prix affiché.`,
    talk: "Parler de mon projet",
    brief: "Envoyer mon brief",
    faqH2: "Ce qu'on nous demande ",
    waA: "Votre projet est ",
    waB: " ?",
    waEm: "Parlons-en sur WhatsApp",
    waP: "On répond vite, en français, en darija ou en anglais.",
    waBtn: "Écrire sur WhatsApp",
  },
  en: {
    eyebrow: "Web design · ",
    quote: "Get my free quote",
    work: "See delivered websites",
    marketEyebrow: "Your local market",
    sells: "What sells ",
    sectorsEyebrow: "Industries ",
    trades: "The trades we ",
    tradesEm: "know here.",
    bentoEyebrow: "What we can do for you",
    foundA: "Get found ",
    foundB: ", ",
    foundEm: "then chosen.",
    intro: (inCity: string) => `Eight services for businesses ${inCity}, each with its price shown upfront.`,
    talk: "Talk about my project",
    brief: "Send my brief",
    faqH2: "What clients ask us ",
    waA: "Is your project ",
    waB: "?",
    waEm: "Let's talk on WhatsApp",
    waP: "We reply fast, in English, French or Darija.",
    waBtn: "Message us on WhatsApp",
  },
};

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function CityView({ city }: { city: City & { fr?: string } }) {
  useReveal();
  const t = T[useLocale()];
  const lp = useLp();

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        {/* ===================== HERO ===================== */}
        {/* The city photo fades in from the right, as on the sector pages: the
            headline keeps a clean cream ground and its full contrast. */}
        <section
          className="theme-cream sec-first ind-hero"
          style={{
            paddingBottom: "clamp(48px, 7vh, 80px)",
            ["--ind-hero-img" as string]: `url(${cityImage(city)})`,
          }}
        >
          <span className="ind-hero-bg" aria-hidden></span>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">{t.eyebrow}{city.name}</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                {city.h1} <em className="hl-line">{city.h1Em}</em>
              </h1>
              <p className="ic-sub wk-lede" style={{ maxWidth: "60ch" }}>{city.intro}</p>

              <div className="hero-ctas" style={{ marginTop: 32, marginBottom: 0 }}>
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.quote}
                  {ARROW}
                </a>
                <a href={lp(PORTFOLIO_URL)} className="btn btn-outline">{t.work}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== LOCAL CONTEXT ===================== */}
        <section className="theme-paper" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: "68ch" }}>
              <span className="eyebrow line-eyebrow">{t.marketEyebrow}</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                {t.sells}<em className="hl-line">{city.inCity}.</em>
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
              <span className="eyebrow line-eyebrow">{t.sectorsEyebrow}{city.inCity}</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                {t.trades}<em className="hl-line">{t.tradesEm}</em>
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
          eyebrow={t.bentoEyebrow}
          heading={<>{t.foundA}{city.inCity}{t.foundB}<em className="hl-line">{t.foundEm}</em></>}
          intro={t.intro(city.inCity)}
        />

        {/* ===================== PROXIMITY ===================== */}
        <section className="inline-cta inline-cta-ink">
          <div className="container">
            <div className="ict-inner reveal">
              <p className="ict-text">{city.proximity}</p>
              <div className="ict-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.talk}
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
                  {t.faqH2}<em className="hl-line">{city.inCity}.</em>
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
                  <h3>{t.waA}{city.inCity}{t.waB}<br /><em>{t.waEm}</em></h3>
                  <span className="wa-rule"></span>
                  <p>{t.waP}</p>
                  <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                    {t.waBtn}
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

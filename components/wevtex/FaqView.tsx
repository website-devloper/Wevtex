"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { useLocale, useLp } from "./locale";
import type { FaqGroup } from "@/lib/faq-data";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/site-links";

/**
 * The standalone FAQ.
 *
 * Grouped by subject with a jump list, because eighteen questions in one column
 * is a wall. Answers are open by default rather than behind an accordion: a
 * collapsed answer is invisible to a reader skimming for one fact, and this
 * page exists to be skimmed. The groups arrive as a prop from the server page,
 * in the page's language.
 */

const T = {
  fr: {
    h1a: "Les réponses franches, ",
    h1Em: "avant de signer.",
    ledeA: "Prix, délais, propriété du site, hébergement, référencement et maintenance :",
    ledeB: " réponses claires, les mêmes que celles que nous donnons au téléphone.",
    ctaText: "Votre question n'est pas là ? Posez-la, on répond vite.",
    ask: "Poser ma question",
    brief: "Envoyer mon brief",
  },
  en: {
    h1a: "Straight answers, ",
    h1Em: "before you sign.",
    ledeA: "Prices, timelines, site ownership, hosting, SEO and maintenance:",
    ledeB: " clear answers, the same ones we give on the phone.",
    ctaText: "Your question isn't here? Ask it, we reply fast.",
    ask: "Ask my question",
    brief: "Send my brief",
  },
};

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function FaqView({ groups }: { groups: FaqGroup[] }) {
  useReveal();
  const t = T[useLocale()];
  const lp = useLp();
  const count = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(40px, 6vh, 66px)" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">FAQ</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                {t.h1a}<em className="hl-line">{t.h1Em}</em>
              </h1>
              <p className="ic-sub wk-lede" style={{ maxWidth: "60ch" }}>
                {t.ledeA}
                {" "}{count}{t.ledeB}
              </p>

              <nav className="faq-jump" aria-label="Sections">
                {groups.map((g) => (
                  <a key={g.id} href={`#${g.id}`} className="faq-jump-link">{g.title}</a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* ===================== THE ANSWERS ===================== */}
        <section className="theme-paper" style={{ padding: "clamp(56px, 9vh, 96px) 0 clamp(72px, 11vh, 120px)" }}>
          <div className="container">
            <div className="faq-page-list">
              {groups.map((g) => (
                <section className="faq-group reveal" id={g.id} key={g.id}>
                  <h2 className="faq-group-h">{g.title}</h2>
                  <div className="faq-group-items">
                    {g.items.map((f) => (
                      <article className="faq-qa" key={f.q}>
                        <h3 className="faq-qa-q">{f.q}</h3>
                        <p className="faq-qa-a">{f.a}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="inline-cta inline-cta-ink">
          <div className="container">
            <div className="ict-inner reveal">
              <p className="ict-text">{t.ctaText}</p>
              <div className="ict-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.ask}
                  {ARROW}
                </a>
                <a href={lp(CONTACT_URL)} className="btn btn-outline">{t.brief}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

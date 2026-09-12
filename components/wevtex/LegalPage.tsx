"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { useLocale } from "./locale";

/**
 * Shared shell for the legal pages (FR and EN).
 *
 * Hero: the site's deep-green .sec-first band with its square grid.
 * Body: a white document with numbered sections — legal texts are cited by
 * article ("section 3"), so the numbers carry meaning. Set to ~88ch.
 *
 * The hero CTA is optional: a page passes it in its own language, so the
 * English pages are unaffected until they choose to add one.
 */

export type LegalSection = { h: string; body: React.ReactNode };

/* French sets a no-break space before the colon. */
const T = { fr: { updated: "Mise à jour : " }, en: { updated: "Last updated: " } };

export function LegalPage({
  eyebrow,
  title,
  accent,
  lede,
  updated,
  sections,
  cta,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  lede: string;
  updated: string;
  sections: LegalSection[];
  cta?: { label: string; href: string };
}) {
  useReveal();
  const t = T[useLocale()];

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">

      <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(52px, 8vh, 84px)" }}>
        <div className="container">
          <span className="eyebrow line-eyebrow">{eyebrow}</span>
          <h1 className="h-section" style={{ marginTop: 14 }}>
            {title} <em className="hl-line">{accent}</em>
          </h1>
          <p className="ic-sub wk-lede">{lede}</p>
          <p
            className="eyebrow"
            style={{ marginTop: 22, fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}
          >
            {t.updated}{updated}
          </p>
          {cta && (
            <div className="hero-ctas" style={{ marginTop: 28, marginBottom: 0 }}>
              <a href={cta.href} className="btn btn-primary">
                {cta.label}
                <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="legal-doc">
        <div className="container">
          <div className="legal-col">
            {sections.map((s, i) => (
              <div key={s.h} className="legal-sec">
                <h2 className="legal-sec-h">{i + 1}. {s.h}</h2>
                <div className="legal-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>


      <SiteFooter />
    </div>
  );
}

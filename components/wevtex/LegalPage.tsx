"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";

/**
 * Shared shell for the legal pages. Same design language as the rest of the
 * site — `line-eyebrow` → `h-section` with the `hl-line` lime underline →
 * `ic-sub` — so /confidentialite and /mentions-legales do not read as
 * bolted-on boilerplate.
 *
 * Body copy is set narrow (68ch) because these are the only pages on the site
 * anyone actually reads top to bottom.
 */

export type LegalSection = { h: string; body: React.ReactNode };

export function LegalPage({
  eyebrow,
  title,
  accent,
  lede,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  lede: string;
  updated: string;
  sections: LegalSection[];
}) {
  useReveal();

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(48px, 7vh, 76px)" }}>
        <div className="container">
          <span className="eyebrow line-eyebrow">{eyebrow}</span>
          <h1 className="h-section" style={{ marginTop: 14 }}>
            {title} <em className="hl-line">{accent}</em>
          </h1>
          <p className="ic-sub wk-lede">{lede}</p>
          <p
            className="eyebrow"
            style={{ marginTop: 26, fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}
          >
            Mise à jour&nbsp;: {updated}
          </p>
        </div>
      </section>

      <section className="theme-paper" style={{ padding: "clamp(56px, 9vh, 96px) 0 clamp(80px, 12vh, 130px)" }}>
        <div className="container">
          <div style={{ maxWidth: "68ch" }}>
            {sections.map((s, i) => (
              <div
                key={s.h}
                style={{
                  paddingTop: i === 0 ? 0 : "clamp(30px, 4vh, 42px)",
                  marginTop: i === 0 ? 0 : "clamp(30px, 4vh, 42px)",
                  borderTop: i === 0 ? "none" : "1px solid var(--hairline-c)",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(19px, 2vw, 23px)",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    margin: "0 0 12px",
                  }}
                >
                  {s.h}
                </h2>
                <div className="legal-body">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ConversionTracker } from "./ConversionTracker";
import { WHATSAPP_URL, PORTFOLIO_URL } from "@/lib/site-links";

/**
 * Post-submit confirmation, in the homepage's design language:
 * `eyebrow line-eyebrow` → `h-section` with the `hl-line` lime underline →
 * `ic-sub`. Cream ground, then the paper band, the same step the homepage uses
 * between sections. The older `page-hero` / `crumb` / `serif` pattern belongs
 * to the ported template and is why this page looked foreign.
 *
 * Deliberately carries no `.reveal` class: that starts at opacity:0 and waits
 * for an IntersectionObserver, so the one message this page exists to deliver
 * would depend on JavaScript running. It rendered blank in production that way.
 */

const NEXT = [
  {
    n: "01",
    h: "Nous lisons votre brief",
    p: "Une lecture attentive, pas un accusé de réception automatique. S'il nous manque quelque chose, nous vous posons la question.",
  },
  {
    n: "02",
    h: "Vous recevez un premier avis",
    p: "Ce que nous ferions à votre place, une idée claire du budget et un délai réaliste — sur WhatsApp ou par e-mail.",
  },
  {
    n: "03",
    h: "Vous décidez",
    p: "Sans engagement de votre part. Et si nous ne sommes pas les bons pour ce projet, nous vous le disons franchement.",
  },
];

export function ThankYouClient() {
  return (
    <div className="wevtex mode-light">
      <ConversionTracker />
      <SiteHeader />

      {/* ===================== CONFIRMATION ===================== */}
      <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(60px, 9vh, 100px)" }}>
        <div className="container">
          <div>
            <span className="eyebrow line-eyebrow">Message bien reçu</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              Merci — votre demande<br />
              nous est bien <em className="hl-line">parvenue.</em>
            </h1>
            <p className="ic-sub wk-lede">
              Un e-mail de confirmation vient de vous être envoyé. Nous revenons vers
              vous pendant les horaires de bureau, du lundi au vendredi de 9h à 18h
              et le samedi de 10h à 14h.
            </p>

            <div className="hero-ctas" style={{ marginTop: 34, marginBottom: 0 }}>
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Discuter sur WhatsApp
                <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </a>
              <a href={PORTFOLIO_URL} className="btn btn-outline">Voir nos réalisations</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT HAPPENS NEXT =====================
          Numbered because these genuinely happen in this order — the markers
          carry information rather than decorating the layout. */}
      <section className="theme-paper" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
        <div className="container">
          <span className="eyebrow line-eyebrow">La suite</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            Ce qui se passe <em className="hl-line">maintenant.</em>
          </h2>

          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: "clamp(38px, 6vh, 58px) 0 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              borderTop: "1px solid var(--hairline-c)",
            }}
          >
            {NEXT.map((s) => (
              <li
                key={s.n}
                style={{
                  padding: "26px 30px 30px 0",
                  borderBottom: "1px solid var(--hairline-c)",
                }}
              >
                <span
                  className="eyebrow"
                  style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.12em" }}
                >
                  {s.n}
                </span>
                <h3 style={{ margin: "14px 0 8px", fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em" }}>
                  {s.h}
                </h3>
                <p className="ic-sub" style={{ margin: 0, maxWidth: "34ch" }}>{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

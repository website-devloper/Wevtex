"use client";

import { useTheme } from "../../app/ThemeContext";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollRevealText } from "./ScrollRevealText";
import { useReveal } from "./useReveal";
import type { Industry } from "../../lib/industries-data";

const WHATSAPP_URL = "https://wa.me/212687633774";

export function IndustryDetail({ industry }: { industry: Industry }) {
  const { isDark } = useTheme();
  useReveal();
  const theme = isDark ? "theme-dark" : "theme-cream";

  return (
    <div className={`wevtex ${isDark ? "mode-dark" : "mode-light"}`}>
      <SiteHeader />

      {/* HERO */}
      <section className={`${theme} page-hero`}>
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb">
              <a href="/" style={{ color: "inherit" }}>Home</a> &nbsp;/&nbsp;{" "}
              <a href="/#industries" style={{ color: "inherit" }}>Industries</a> &nbsp;/&nbsp; {industry.name}
            </div>
            <ScrollRevealText
              as="h1"
              mode="load"
              text={industry.h1}
              em={industry.h1Em}
              emClassName="serif"
              emStyle={{ color: "var(--accent)" }}
            />
            <p className="lead">{industry.intro}</p>
            <div className="hero-ctas">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Get a free quote
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="/portfolio" className="btn btn-outline">See our work</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className={`${theme} service-block`}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">What we build</span>
            <h2 className="h-section" style={{ marginTop: 24, marginBottom: 32 }}>
              Tailored to {industry.name.toLowerCase()}.
            </h2>
            <ul className="service-checks">
              {industry.includes.map((c, i) => (
                <li key={i} data-num={String(i + 1).padStart(2, "0")}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className={`${theme} industries`}>
        <div className="container">
          <div className="industries-head reveal">
            <div>
              <span className="eyebrow">Why it matters</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>The outcomes you get.</h2>
            </div>
          </div>
          <div className="industries-grid reveal">
            {industry.outcomes.map((o, i) => (
              <div className="ind-card" key={i}>
                <h4>{o.h}</h4>
                <p>{o.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {industry.faqs.length > 0 && (
        <section className={`${theme} faq`}>
          <div className="container">
            <div className="faq-head reveal">
              <span className="eyebrow">FAQ</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Questions, answered.</h2>
            </div>
            <div className="faq-list reveal">
              {industry.faqs.map((f, i) => (
                <details className="faq-item" key={i}>
                  <summary>
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden></span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`${theme} cta`}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">Let&apos;s talk</span>
            <h2 style={{ marginTop: 28 }}>Build a site for your <em>{industry.name.toLowerCase()}</em> business.</h2>
            <p className="lead">
              Tell us what you need on WhatsApp or by email. We reply within a few hours — with honest
              advice and a clear price, no obligation.
            </p>
            <div className="cta-ctas">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">Get a free quote</a>
              <a href="/#industries" className="btn btn-outline">All industries</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

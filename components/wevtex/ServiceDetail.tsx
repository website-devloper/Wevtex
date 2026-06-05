"use client";

import { useTheme } from "../../app/ThemeContext";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollRevealText } from "./ScrollRevealText";
import { WaveBackground } from "./WaveBackground";
import { useReveal } from "./useReveal";
import type { Service } from "../../lib/services-data";

const WHATSAPP_URL = "https://wa.me/212687633774";

const Check = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export function ServiceDetail({ service }: { service: Service }) {
  const { isDark } = useTheme();
  useReveal();
  const theme = isDark ? "theme-dark" : "theme-cream";

  return (
    <div className={`wevtex ${isDark ? "mode-dark" : "mode-light"}`}>
      <SiteHeader current="services" />

      {/* HERO — matches the home hero */}
      <section className={`${theme} hero`} style={{ position: "relative" }}>
        <WaveBackground />
        <div className="hero-wash"></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-centered">
            <div className="hero-content" style={{ width: "100%" }}>
              <span className="status-pill" style={{ marginBottom: 24 }}>{service.eyebrow}</span>
              <ScrollRevealText
                as="h1"
                mode="load"
                text={service.h1}
                em={service.h1Em}
                emClassName="serif-em"
              />
              <p className="hero-sub" style={{ margin: "0 auto 36px auto" }}>{service.intro}</p>
              <div className="hero-ctas">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Get a free quote
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="/portfolio" className="btn btn-outline">See our work</a>
              </div>
              <div className="service-tags" style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                {service.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO / IN ACTION */}
      {service.demo && (
        <section className={`${theme} svc-demo`}>
          <div className="container">
            <div className="svc-section-head center reveal">
              <span className="eyebrow">Demo</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>{service.demo.title}</h2>
              {service.demo.subtitle && <p className="lead" style={{ margin: "14px auto 0" }}>{service.demo.subtitle}</p>}
            </div>
            <div className="svc-demo-frame reveal">
              <div className="svc-demo-bar"><i></i><i></i><i></i></div>
              <div className="svc-demo-screen">
                <div className="l w2"></div>
                <div className="l w1"></div>
                <div className="l w3"></div>
                <div className="svc-demo-tiles"><span></span><span></span><span></span></div>
              </div>
            </div>
            {service.demo.caption && <p className="svc-demo-caption reveal">{service.demo.caption}</p>}
          </div>
        </section>
      )}

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
            {service.outcomes.map((o, i) => (
              <div className="ind-card" key={i}>
                <h4>{o.h}</h4>
                <p>{o.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTIONS (rich) — or fallback to a simple "what's included" list */}
      {service.featureSections ? (
        service.featureSections.map((fs, si) => (
          <section className={`${theme} svc-features-block`} key={si}>
            <div className="container">
              <div className="svc-section-head reveal">
                <span className="eyebrow">{fs.eyebrow}</span>
                <ScrollRevealText
                  as="h2"
                  className="h-section"
                  style={{ marginTop: 18 }}
                  text={fs.title}
                  em={fs.titleEm || []}
                  emClassName="serif"
                  emStyle={{ color: "var(--accent)" }}
                />
                {fs.subtitle && <p className="lead" style={{ marginTop: 14 }}>{fs.subtitle}</p>}
              </div>
              <div className="svc-features reveal">
                {fs.cards.map((c, ci) => (
                  <div className="svc-feature-card" key={ci}>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                    <ul className="svc-checklist">
                      {c.checks.map((ch, chi) => (
                        <li key={chi}><Check />{ch}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className={`${theme} service-block`}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow">What&apos;s included</span>
              <h2 className="h-section" style={{ marginTop: 24, marginBottom: 32 }}>Everything in {service.name}.</h2>
              <ul className="service-checks">
                {service.includes.map((c, i) => (
                  <li key={i} data-num={String(i + 1).padStart(2, "0")}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* TECH STACK */}
      {service.tech && (
        <section className={`${theme} svc-tech`}>
          <div className="container">
            <div className="svc-section-head reveal">
              <span className="eyebrow">Technology</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 18 }}
                text={service.tech.title}
                em={service.tech.titleEm || []}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
              {service.tech.subtitle && <p className="lead" style={{ marginTop: 14 }}>{service.tech.subtitle}</p>}
            </div>
            <div className="tech-wrap reveal">
              {service.tech.groups.map((g, i) => (
                <div className="tech-group" key={i}>
                  <span className="tech-group-label">{g.label}</span>
                  <div className="tech-tags">
                    {g.items.map((it) => (
                      <span className="tag" key={it}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS / METHODOLOGY */}
      {service.process && (
        <section className={`${theme} process`}>
          <div className="container">
            <div className="svc-section-head reveal">
              <span className="eyebrow">How it works</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 18 }}
                text={service.process.title}
                em={service.process.titleEm || []}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
              {service.process.subtitle && <p className="lead" style={{ marginTop: 14 }}>{service.process.subtitle}</p>}
            </div>
            <div className="proc-grid reveal">
              {service.process.steps.map((s, i) => (
                <div className="proc-card" key={i}>
                  <div className="proc-num">{s.n}</div>
                  <h4>{s.h}</h4>
                  <ul className="proc-checks">
                    {s.checks.map((ch, ci) => (
                      <li key={ci}><Check />{ch}</li>
                    ))}
                  </ul>
                  <span className="proc-dur">{s.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTORS / USE CASES */}
      {service.sectors && (
        <section className={`${theme} svc-sectors`}>
          <div className="container">
            <div className="svc-section-head reveal">
              <span className="eyebrow">By sector</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 18 }}
                text={service.sectors.title}
                em={service.sectors.titleEm || []}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
              {service.sectors.subtitle && <p className="lead" style={{ marginTop: 14 }}>{service.sectors.subtitle}</p>}
            </div>
            <div className="sector-wrap reveal">
              {service.sectors.groups.map((g, i) => (
                <div className="sector-group" key={i}>
                  <span className="sector-label">{g.label}</span>
                  <ul className="sector-cases">
                    {g.cases.map((c, ci) => (
                      <li key={ci}><Check />{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className={`${theme} faq`}>
          <div className="container">
            <div className="faq-head reveal">
              <span className="eyebrow">FAQ</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Questions, answered.</h2>
            </div>
            <div className="faq-list reveal">
              {service.faqs.map((f, i) => (
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
            <h2 style={{ marginTop: 28 }}>Ready to start your <em>{service.name.toLowerCase()}</em> project?</h2>
            <p className="lead">
              Tell us what you need on WhatsApp or by email. We reply within a few hours — with honest
              advice and a clear price, no obligation.
            </p>
            <div className="cta-ctas">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">Get a free quote</a>
              <a href="/services" className="btn btn-outline">All services</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

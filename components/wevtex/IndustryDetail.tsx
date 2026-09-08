"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollRevealText } from "./ScrollRevealText";
import { WaveBackground } from "./WaveBackground";
import { useReveal } from "./useReveal";
import type { Industry } from "../../lib/industries-data";
import { INDUSTRY_SERVICES } from "../../lib/industries-data";
import { SERVICES } from "./homeContent";
import { SERVICE_ICONS } from "./SharedSections";
import { WHATSAPP_URL, PORTFOLIO_URL, HOME_URL, CONTACT_URL, servicePath } from "@/lib/site-links";


export function IndustryDetail({ industry }: { industry: Industry }) {
  useReveal();
  const theme = "theme-cream";

  /* What each service means for this sector. Falls back to nothing rather than
     to generic copy — a service with no sector-specific line is better left out
     than described the same way it is on every other page. */
  const sectorServices = (INDUSTRY_SERVICES[industry.slug] ?? [])
    .map((s) => ({ ...s, service: SERVICES.find((sv) => sv.slug === s.slug) }))
    .filter((s) => s.service);

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      {/* HERO — matches the home hero */}
      <section className={`${theme} hero`} style={{ position: "relative" }}>
        <WaveBackground />
        <div className="hero-wash"></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-centered">
            <div className="hero-content" style={{ width: "100%" }}>
              <span className="status-pill" style={{ marginBottom: 24 }}>{industry.eyebrow}</span>
              <ScrollRevealText
                as="h1"
                mode="load"
                text={industry.h1}
                em={industry.h1Em}
                emClassName="serif-em"
              />
              <p className="hero-sub" style={{ margin: "0 auto 36px auto" }}>{industry.intro}</p>
              <div className="hero-ctas">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Get a free quote
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href={PORTFOLIO_URL} className="btn btn-outline">See our work</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className={`${theme} service-block`}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow line-eyebrow">Ce que nous construisons</span>
            <h2 className="h-section" style={{ marginTop: 24, marginBottom: 32 }}>
              Pensé pour {industry.name.toLowerCase()}.
            </h2>
            <ul className="service-checks">
              {industry.includes.map((c, i) => (
                <li key={i} data-num={String(i + 1).padStart(2, "0")}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES FOR THIS SECTOR */}
      {sectorServices.length > 0 && (
        <section className="theme-paper services-bento">
          <div className="container">
            <div className="bento-head reveal">
              <span className="eyebrow line-eyebrow">Nos services pour ce secteur</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Ce que nous pouvons faire <em className="hl-line">pour vous.</em>
              </h2>
              <p className="ic-sub" style={{ maxWidth: "58ch" }}>
                Chaque prestation, appliquée aux besoins réels de votre secteur.
                Ouvrez-en une pour le détail et les tarifs.
              </p>
            </div>

            <div className="bento-grid bento-grid-3">
              {sectorServices.map((s) => (
                <a key={s.slug} href={servicePath(s.slug)} className="bento-card">
                  <span className="bento-top">
                    <span className="bento-icon">{SERVICE_ICONS[s.slug]}</span>
                  </span>
                  <div className="bento-card-body">
                    <h4>{s.service!.name}</h4>
                    <p>{s.line}</p>
                  </div>
                  <span className="bento-arrow" aria-hidden>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OUTCOMES */}
      <section className={`${theme} industries svc-outcomes`}>
        <div className="container">
          <div className="industries-head reveal">
            <div>
              <span className="eyebrow line-eyebrow">Ce que ça change</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Les résultats <em className="hl-line">concrets.</em></h2>
            </div>
          </div>
          <div className="industries-grid reveal">
            {industry.outcomes.map((o, i) => (
              <div className="ind-card" key={i}>
                <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
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
              <span className="eyebrow line-eyebrow">FAQ</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Vos questions, <em className="hl-line">nos réponses.</em></h2>
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
            <span className="eyebrow accent">Parlons-en</span>
            <h2 style={{ marginTop: 28 }}>
              Un projet dans <em>{industry.name.toLowerCase()}</em> ?
            </h2>
            <p className="lead">
              Dites-nous ce dont vous avez besoin sur WhatsApp ou par e-mail. Nous revenons vers
              vous dans les heures ouvrées, avec un avis clair et un prix précis, sans engagement.
            </p>
            <div className="cta-ctas">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Demander un devis gratuit
              </a>
              <a href={CONTACT_URL} className="btn btn-outline">Envoyer un brief</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

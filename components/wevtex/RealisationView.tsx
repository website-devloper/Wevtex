"use client";

import Image from "next/image";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { SERVICES } from "./homeContent";
import type { Project } from "@/lib/projects-data";
import { PROJECTS_ORDERED, projectPath } from "@/lib/projects-data";
import { WHATSAPP_URL, CONTACT_URL, PORTFOLIO_URL, servicePath } from "@/lib/site-links";

/**
 * /realisations/[slug] — one delivered project, in the portfolio's language.
 *
 * Everything shown comes from projects-data. The page adds structure (a real
 * H1, facts, a link to the matching service, neighbours) so each project can
 * rank and be cited on its own, without adding claims nobody signed off on.
 */

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* Which service page a project type belongs to. Anything unlisted is a site. */
const SERVICE_FOR_CATEGORY: Record<string, string> = {
  Plateforme: "custom-solutions",
  Application: "mobile-apps",
  "Application web": "custom-solutions",
  SaaS: "custom-solutions",
};

export function RealisationView({ project: p }: { project: Project }) {
  useReveal();

  const service = SERVICES.find((s) => s.slug === (SERVICE_FOR_CATEGORY[p.category] ?? "website-creation"));
  const idx = PROJECTS_ORDERED.findIndex((x) => x.slug === p.slug);
  const neighbours = [1, 2, 3]
    .map((n) => PROJECTS_ORDERED[(idx + n) % PROJECTS_ORDERED.length])
    .filter((x) => x.slug !== p.slug);

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="work" />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(48px, 7vh, 80px)" }}>
          <div className="container">
            <nav className="post-crumbs reveal" aria-label="Fil d'Ariane">
              <a href="/">Accueil</a>
              <span aria-hidden>›</span>
              <a href={PORTFOLIO_URL}>Réalisations</a>
            </nav>

            <div className="reveal">
              <span className="eyebrow line-eyebrow">{p.category} · {p.year}</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                {p.title}, <em className="hl-line">{p.category.toLowerCase()}</em> réalisé par Wevtex
              </h1>
              <p className="ic-sub wk-lede" style={{ maxWidth: "68ch" }}>{p.description}</p>

              <div className="hero-ctas" style={{ marginTop: 32, marginBottom: 0 }}>
                <a href={p.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Voir {p.clientUrl}
                  {ARROW}
                </a>
                <a href={CONTACT_URL} className="btn btn-outline">Un projet similaire ?</a>
              </div>
            </div>

            <a className="rz-shot reveal" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ouvrir le site ${p.title}`}>
              <Image
                src={p.screenshot}
                alt={`Capture du site ${p.title}, ${p.category.toLowerCase()} réalisé par Wevtex`}
                width={1600}
                height={1000}
                sizes="(max-width: 1320px) 100vw, 1280px"
                priority
              />
            </a>

            <dl className="rz-facts reveal">
              <div className="rz-fact">
                <dt>Résultat</dt>
                <dd>{p.metricValue} {p.metricLabel}</dd>
              </div>
              <div className="rz-fact">
                <dt>Ce que nous avons livré</dt>
                <dd>{p.stack.join(" · ")}</dd>
              </div>
              <div className="rz-fact">
                <dt>En ligne</dt>
                <dd>{p.clientUrl} · {p.year}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ===================== SERVICE ===================== */}
        {service && (
          <section className="inline-cta inline-cta-ink" style={{ paddingTop: "clamp(70px, 10vh, 110px)" }}>
            <div className="container">
              <div className="ict-inner reveal">
                <p className="ict-text">
                  {service.name} : {service.desc}
                </p>
                <div className="ict-actions">
                  <a href={servicePath(service.slug)} className="btn btn-primary">
                    Voir le service
                    {ARROW}
                  </a>
                  <a href={WHATSAPP_URL} className="btn btn-outline" target="_blank" rel="noopener">
                    Parler de votre projet
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================== MORE WORK ===================== */}
        <section className="theme-cream" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">Autres réalisations</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                D&apos;autres projets <em className="hl-line">en ligne.</em>
              </h2>
            </div>
            <div className="blog-grid reveal" style={{ marginTop: 36 }}>
              {neighbours.map((x) => (
                <article className="blog-card" key={x.slug}>
                  <a href={projectPath(x.slug)} className="blog-card-link">
                    <span className="blog-meta">
                      <span className="blog-cat">{x.category}</span>
                      <span>{x.year}</span>
                    </span>
                    <h3>{x.title}</h3>
                    <p>{x.metaDescription}</p>
                    <span className="blog-card-foot">
                      <span>{x.clientUrl}</span>
                      <span className="blog-card-arrow" aria-hidden>{ARROW}</span>
                    </span>
                  </a>
                </article>
              ))}
            </div>
            <p className="reveal" style={{ marginTop: 32 }}>
              <a href={PORTFOLIO_URL} className="btn btn-outline">Toutes les réalisations</a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

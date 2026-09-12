"use client";

import Image from "next/image";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { useHomeContent } from "./useHomeContent";
import { useLocale, useLp } from "./locale";
import type { Project } from "@/lib/projects-data";
import { WHATSAPP_URL, CONTACT_URL, PORTFOLIO_URL, servicePath } from "@/lib/site-links";

/**
 * /realisations/[slug] — one delivered project, in the portfolio's language.
 *
 * Everything shown comes from projects-data. The page adds structure (a real
 * H1, facts, a link to the matching service, neighbours) so each project can
 * rank and be cited on its own, without adding claims nobody signed off on.
 * The neighbours are chosen by the server page and passed in, so the whole
 * project list is not shipped to the browser for three cards.
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
  Platform: "custom-solutions",
  "Web app": "custom-solutions",
};

const T = {
  fr: {
    home: "Accueil",
    crumbs: "Fil d'Ariane",
    work: "Réalisations",
    built: " réalisé par Wevtex",
    visit: "Voir ",
    similar: "Un projet similaire ?",
    open: "Ouvrir le site ",
    shot: (title: string, cat: string) => `Capture du site ${title}, ${cat} réalisé par Wevtex`,
    result: "Résultat",
    delivered: "Ce que nous avons livré",
    live: "En ligne",
    sep: " : ",
    seeService: "Voir ce service",
    talk: "Parler de mon projet",
    moreEyebrow: "Autres réalisations",
    moreA: "D'autres projets ",
    moreEm: "en ligne.",
    all: "Toutes les réalisations",
  },
  en: {
    home: "Home",
    crumbs: "Breadcrumb",
    work: "Portfolio",
    built: " built by Wevtex",
    visit: "Visit ",
    similar: "A similar project?",
    open: "Open the website of ",
    shot: (title: string, cat: string) => `Screenshot of the ${title} website, ${cat} built by Wevtex`,
    result: "Result",
    delivered: "What we delivered",
    live: "Live",
    sep: ": ",
    seeService: "See this service",
    talk: "Talk about my project",
    moreEyebrow: "More work",
    moreA: "More projects, ",
    moreEm: "live online.",
    all: "All our work",
  },
};

export function RealisationView({ project: p, neighbours }: { project: Project; neighbours: Project[] }) {
  useReveal();
  const locale = useLocale();
  const t = T[locale];
  const lp = useLp();
  const { SERVICES } = useHomeContent();
  const projectHref = (slug: string) => (locale === "en" ? `/en/portfolio/${slug}` : `/realisations/${slug}`);

  const service = SERVICES.find((s) => s.slug === (SERVICE_FOR_CATEGORY[p.category] ?? "website-creation"));

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="work" />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(48px, 7vh, 80px)" }}>
          <div className="container">
            <nav className="post-crumbs reveal" aria-label={t.crumbs}>
              <a href={lp("/")}>{t.home}</a>
              <span aria-hidden>›</span>
              <a href={lp(PORTFOLIO_URL)}>{t.work}</a>
            </nav>

            <div className="reveal">
              <span className="eyebrow line-eyebrow">{p.category} · {p.year}</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                {p.title}, <em className="hl-line">{p.category.toLowerCase()}</em>{t.built}
              </h1>
              <p className="ic-sub wk-lede" style={{ maxWidth: "68ch" }}>{p.description}</p>

              <div className="hero-ctas" style={{ marginTop: 32, marginBottom: 0 }}>
                <a href={p.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  {t.visit}{p.clientUrl}
                  {ARROW}
                </a>
                <a href={lp(CONTACT_URL)} className="btn btn-outline">{t.similar}</a>
              </div>
            </div>

            <a className="rz-shot reveal" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.open}${p.title}`}>
              <Image
                src={p.screenshot}
                alt={t.shot(p.title, p.category.toLowerCase())}
                width={1600}
                height={1000}
                sizes="(max-width: 1320px) 100vw, 1280px"
                priority
              />
            </a>

            <dl className="rz-facts reveal">
              <div className="rz-fact">
                <dt>{t.result}</dt>
                <dd>{p.metricValue} {p.metricLabel}</dd>
              </div>
              <div className="rz-fact">
                <dt>{t.delivered}</dt>
                <dd>{p.stack.join(" · ")}</dd>
              </div>
              <div className="rz-fact">
                <dt>{t.live}</dt>
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
                  {service.name}{t.sep}{service.desc}
                </p>
                <div className="ict-actions">
                  <a href={lp(servicePath(service.slug))} className="btn btn-primary">
                    {t.seeService}
                    {ARROW}
                  </a>
                  <a href={WHATSAPP_URL} className="btn btn-outline" target="_blank" rel="noopener">
                    {t.talk}
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
              <span className="eyebrow line-eyebrow">{t.moreEyebrow}</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                {t.moreA}<em className="hl-line">{t.moreEm}</em>
              </h2>
            </div>
            <div className="blog-grid reveal" style={{ marginTop: 36 }}>
              {neighbours.map((x) => (
                <article className="blog-card" key={x.slug}>
                  <a href={projectHref(x.slug)} className="blog-card-link">
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
              <a href={lp(PORTFOLIO_URL)} className="btn btn-outline">{t.all}</a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { postPath, formatPostDate, type PostCard } from "@/lib/blog-utils";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/site-links";
import { frenchSpacing } from "@/lib/typo";

/**
 * /blog — the index.
 *
 * The first post is featured full-width, the rest run in the same card grid
 * language as the rest of the site (hairline border, lime arrow on hover).
 */

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function BlogIndexView({ posts }: { posts: PostCard[] }) {
  useReveal();
  const [lead, ...rest] = posts;

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(30px, 5vh, 54px)" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">Le blog</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                Prix, délais, méthodes&nbsp;:<br />
                les réponses <em className="hl-line">sans détour.</em>
              </h1>
              <p className="ic-sub wk-lede">
                Le blog marketing digital de Wevtex : conseils site web, conseils SEO et publicité, écrits comme nous répondons au téléphone. Chaque article
                traite une question que des entreprises marocaines nous posent réellement,
                avec des chiffres que nous publions déjà sur nos pages de prix.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== POSTS ===================== */}
        <section className="theme-cream" style={{ padding: "clamp(20px, 3vh, 40px) 0 clamp(90px, 13vh, 150px)" }}>
          <div className="container">
            {lead && (
              <a href={postPath(lead.slug)} className="blog-lead reveal">
                <div className="blog-lead-body">
                  <span className="blog-meta">
                    <span className="blog-cat">{lead.category}</span>
                    <time dateTime={lead.publishedAt}>{formatPostDate(lead.publishedAt)}</time>
                    <span>{lead.readingMinutes} min de lecture</span>
                  </span>
                  <h2>{frenchSpacing(lead.title)}</h2>
                  <p>{lead.answer}</p>
                  <span className="blog-more">
                    Lire l&apos;article
                    {ARROW}
                  </span>
                </div>
              </a>
            )}

            <div className="blog-grid reveal">
              {rest.map((p) => (
                <article className="blog-card" key={p.slug}>
                  <a href={postPath(p.slug)} className="blog-card-link">
                    <span className="blog-meta">
                      <span className="blog-cat">{p.category}</span>
                      <span>{p.readingMinutes} min</span>
                    </span>
                    <h2>{frenchSpacing(p.title)}</h2>
                    <p>{p.excerpt}</p>
                    <span className="blog-card-foot">
                      <time dateTime={p.publishedAt}>{formatPostDate(p.publishedAt)}</time>
                      <span className="blog-card-arrow" aria-hidden>{ARROW}</span>
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="inline-cta inline-cta-ink">
          <div className="container">
            <div className="ict-inner reveal">
              <p className="ict-text">Une question qui n&apos;a pas encore son article ? Posez-la.</p>
              <div className="ict-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Poser ma question
                  {ARROW}
                </a>
                <a href={CONTACT_URL} className="btn btn-outline">Nous écrire</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

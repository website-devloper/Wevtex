"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { useLocale, useLp } from "./locale";
import { postPath, formatPostDate, type PostCard } from "@/lib/blog-utils";
import { WHATSAPP_URL, CONTACT_URL } from "@/lib/site-links";
import { frenchSpacing } from "@/lib/typo";

/**
 * /blog — the index.
 *
 * The first post is featured full-width, the rest run in the same card grid
 * language as the rest of the site (hairline border, lime arrow on hover).
 */

const T = {
  fr: {
    eyebrow: "Le blog",
    /* French sets a no-break space before the colon. */
    h1a: "Prix, délais, méthodes\u00a0:",
    h1b: "les réponses ",
    h1Em: "sans détour.",
    lede: "Le blog marketing digital de Wevtex : conseils site web, conseils SEO et publicité, écrits comme nous répondons au téléphone. Chaque article traite une question que des entreprises marocaines nous posent réellement, avec des chiffres que nous publions déjà sur nos pages de prix.",
    minRead: " min de lecture",
    min: " min",
    read: "Lire l'article",
    ctaText: "Une question qui n'a pas encore son article ? Posez-la.",
    ask: "Poser ma question",
    write: "Nous écrire",
  },
  en: {
    eyebrow: "The blog",
    h1a: "Prices, timelines, methods:",
    h1b: "answers ",
    h1Em: "without the fluff.",
    lede: "The Wevtex digital marketing blog: website advice, SEO and advertising tips, written the way we answer the phone. Every article tackles a question businesses in Morocco actually ask us, with the figures we already publish on our pricing pages.",
    minRead: " min read",
    min: " min",
    read: "Read the article",
    ctaText: "A question that doesn't have its article yet? Ask it.",
    ask: "Ask my question",
    write: "Write to us",
  },
};

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function BlogIndexView({ posts }: { posts: PostCard[] }) {
  useReveal();
  const locale = useLocale();
  const t = T[locale];
  const lp = useLp();
  const spacing = locale === "fr" ? frenchSpacing : (s: string) => s;
  const [lead, ...rest] = posts;

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        {/* ===================== HERO ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(30px, 5vh, 54px)" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">{t.eyebrow}</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                {t.h1a}<br />
                {t.h1b}<em className="hl-line">{t.h1Em}</em>
              </h1>
              <p className="ic-sub wk-lede">
                {t.lede}
              </p>
            </div>
          </div>
        </section>

        {/* ===================== POSTS ===================== */}
        <section className="theme-cream" style={{ padding: "clamp(20px, 3vh, 40px) 0 clamp(90px, 13vh, 150px)" }}>
          <div className="container">
            {lead && (
              <a href={postPath(lead.slug, locale)} className="blog-lead reveal">
                <div className="blog-lead-body">
                  <span className="blog-meta">
                    <span className="blog-cat">{lead.category}</span>
                    <time dateTime={lead.publishedAt}>{formatPostDate(lead.publishedAt, locale)}</time>
                    <span>{lead.readingMinutes}{t.minRead}</span>
                  </span>
                  <h2>{spacing(lead.title)}</h2>
                  <p>{lead.answer}</p>
                  <span className="blog-more">
                    {t.read}
                    {ARROW}
                  </span>
                </div>
              </a>
            )}

            <div className="blog-grid reveal">
              {rest.map((p) => (
                <article className="blog-card" key={p.slug}>
                  <a href={postPath(p.slug, locale)} className="blog-card-link">
                    <span className="blog-meta">
                      <span className="blog-cat">{p.category}</span>
                      <span>{p.readingMinutes}{t.min}</span>
                    </span>
                    <h2>{spacing(p.title)}</h2>
                    <p>{p.excerpt}</p>
                    <span className="blog-card-foot">
                      <time dateTime={p.publishedAt}>{formatPostDate(p.publishedAt, locale)}</time>
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
              <p className="ict-text">{t.ctaText}</p>
              <div className="ict-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.ask}
                  {ARROW}
                </a>
                <a href={lp(CONTACT_URL)} className="btn btn-outline">{t.write}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

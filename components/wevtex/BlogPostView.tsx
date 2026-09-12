"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { useLocale, useLp } from "./locale";
import type { Post, PostBlock } from "@/lib/blog-data";
import { postPath, formatPostDate, type PostCard } from "@/lib/blog-utils";
import { useHomeContent } from "./useHomeContent";
import { WHATSAPP_URL, CONTACT_URL, servicePath } from "@/lib/site-links";
import { frenchSpacing } from "@/lib/typo";

/**
 * /blog/[slug] — one post.
 *
 * The body is rendered from typed blocks rather than raw HTML, so every post
 * shares one typographic scale and no post can ship markup that breaks the
 * design. The lede (`answer`) is set apart because it is the passage an answer
 * engine is most likely to lift.
 */

const T = {
  fr: {
    home: "Accueil",
    crumbs: "Fil d'Ariane",
    minRead: " min de lecture",
    min: " min",
    serviceEyebrow: "Le service lié",
    seePage: "Voir la page ",
    faqA: "Ce qu'on nous demande ",
    faqEm: "ensuite.",
    ctaText: "Votre cas est particulier ? Quinze minutes suffisent pour le chiffrer.",
    quote: "Obtenir mon devis gratuit",
    brief: "Envoyer mon brief",
    nextEyebrow: "À lire ensuite",
    nextA: "Sur le même ",
    nextEm: "sujet.",
  },
  en: {
    home: "Home",
    crumbs: "Breadcrumb",
    minRead: " min read",
    min: " min",
    serviceEyebrow: "Related service",
    seePage: "Read about our ",
    faqA: "What people ask ",
    faqEm: "next.",
    ctaText: "Is your case a bit different? Fifteen minutes is enough to price it.",
    quote: "Get my free quote",
    brief: "Send my brief",
    nextEyebrow: "Read next",
    nextA: "On the same ",
    nextEm: "topic.",
  },
};

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      );
    case "note":
      return <aside className="post-note">{block.text}</aside>;
    case "table":
      return (
        <div className="post-table-wrap">
          <table className="post-table">
            <thead>
              <tr>{block.head.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>{row.map((c, j) => (j === 0 ? <th scope="row" key={j}>{c}</th> : <td key={j}>{c}</td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export function BlogPostView({ post, related }: { post: Post; related: PostCard[] }) {
  useReveal();
  const locale = useLocale();
  const t = T[locale];
  const lp = useLp();
  const spacing = locale === "fr" ? frenchSpacing : (s: string) => s;
  const { SERVICES } = useHomeContent();

  const service = SERVICES.find((s) => s.slug === post.relatedService);

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        {/* ===================== HEADER ===================== */}
        <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(24px, 4vh, 40px)" }}>
          <div className="container">
            <nav className="post-crumbs reveal" aria-label={t.crumbs}>
              <a href={lp("/")}>{t.home}</a>
              <span aria-hidden>›</span>
              <a href={lp("/blog")}>Blog</a>
            </nav>

            <div className="post-head reveal">
              <span className="blog-meta">
                <span className="blog-cat">{post.category}</span>
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, locale)}</time>
                <span>{post.readingMinutes}{t.minRead}</span>
              </span>
              <h1 className="h-section" style={{ marginTop: 16 }}>{spacing(post.title)}</h1>
              {/* The answer-first paragraph: a self-contained reply, before any
                  build-up, so it survives being quoted on its own. */}
              <p className="post-answer">{post.answer}</p>
            </div>
          </div>
        </section>

        {/* ===================== BODY ===================== */}
        <section className="theme-cream" style={{ padding: "clamp(16px, 3vh, 32px) 0 clamp(70px, 10vh, 110px)" }}>
          <div className="container">
            <article className="post-body reveal">
              {post.body.map((b, i) => <Block key={i} block={b} />)}

              {service && (
                <aside className="post-service">
                  <span className="eyebrow line-eyebrow">{t.serviceEyebrow}</span>
                  <h2>{service.name}</h2>
                  <p>{service.desc}</p>
                  <a href={lp(servicePath(service.slug))} className="btn btn-outline">
                    {t.seePage}{service.name.toLowerCase()}
                    {ARROW}
                  </a>
                </aside>
              )}
            </article>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="theme-paper" style={{ padding: "clamp(64px, 9vh, 100px) 0" }}>
            <div className="container">
              <div className="post-faq reveal">
                <span className="eyebrow line-eyebrow">FAQ</span>
                <h2 className="h-section" style={{ marginTop: 14 }}>
                  {t.faqA}<em className="hl-line">{t.faqEm}</em>
                </h2>
                <div className="faq-list-v2" style={{ marginTop: 28 }}>
                  {post.faqs.map((f, i) => (
                    <details className="faq-item-v2" key={i}>
                      <summary>
                        <span className="faq-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                        <span className="faq-q">{f.q}</span>
                        <span className="faq-plus" aria-hidden></span>
                      </summary>
                      <div className="faq-body">
                        <p>{f.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===================== CTA ===================== */}
        <section className="inline-cta inline-cta-ink">
          <div className="container">
            <div className="ict-inner reveal">
              <p className="ict-text">{t.ctaText}</p>
              <div className="ict-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.quote}
                  {ARROW}
                </a>
                <a href={lp(CONTACT_URL)} className="btn btn-outline">{t.brief}</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== RELATED ===================== */}
        {related.length > 0 && (
          <section className="theme-cream" style={{ padding: "clamp(64px, 9vh, 100px) 0 clamp(80px, 12vh, 130px)" }}>
            <div className="container">
              <div className="reveal">
                <span className="eyebrow line-eyebrow">{t.nextEyebrow}</span>
                <h2 className="h-section" style={{ marginTop: 14 }}>
                  {t.nextA}<em className="hl-line">{t.nextEm}</em>
                </h2>
              </div>
              <div className="blog-grid reveal" style={{ marginTop: 36 }}>
                {related.map((p) => (
                  <article className="blog-card" key={p.slug}>
                    <a href={postPath(p.slug, locale)} className="blog-card-link">
                      <span className="blog-meta">
                        <span className="blog-cat">{p.category}</span>
                        <span>{p.readingMinutes}{t.min}</span>
                      </span>
                      <h3>{spacing(p.title)}</h3>
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
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

"use client";

/**
 * Vue détaillée d'une prestation.
 *
 * Elle n'utilise que le système de la page d'accueil et de /services :
 * mêmes classes (`bento-*`, `wk-*`, `pr-*`, `faq-*`), mêmes polices, mêmes
 * couleurs, mêmes survols. Rien du thème `sd-*` séparé.
 *
 * Tout le contenu vient de lib/services-data.ts : cette vue ne connaît aucune
 * prestation en particulier, elle sait seulement les afficher.
 */

import Image from "next/image";
import "../../../app/wevtex-home.css";
import { SiteHeader } from "../SiteHeader";
import { SiteFooter } from "../SiteFooter";
import { StickyCta } from "../StickyCta";
import { useReveal } from "../useReveal";
import { SERVICE_ICONS, CtaBand } from "../SharedSections";
import { SERVICES as MARKETED } from "../homeContent";
import { WHATSAPP_URL, servicePath } from "@/lib/site-links";
import { ProcessSection } from "../ProcessSection";
import type { Service } from "@/lib/services-data";
import { CITIES } from "@/lib/cities-data";

/* Internal links (content brief, SEO rule 5): each service page points to two
   neighbouring services and the Casablanca page, with the keyword as anchor. */
const RELATED: Record<string, string[]> = {
  "website-creation": ["seo", "local-seo"],
  seo: ["local-seo", "website-creation"],
  "local-seo": ["seo", "website-creation"],
  ads: ["seo", "website-creation"],
  "mobile-apps": ["custom-solutions", "desktop-apps"],
  "desktop-apps": ["custom-solutions", "mobile-apps"],
  "custom-solutions": ["desktop-apps", "whatsapp-bots"],
  "whatsapp-bots": ["custom-solutions", "ads"],
};

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CHECK = (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/** "Titre sur\ndeux lignes" + mots à surligner → JSX avec le marqueur lime. */
function Title({ text, em = [], as = "h2" }: { text: string; em?: string[]; as?: "h1" | "h2" }) {
  const Tag = as;
  const lines = text.split("\n");
  return (
    <Tag className="h-section">
      {lines.map((line, li) => (
        <span key={li}>
          {line.split(" ").map((w, wi) => {
            const clean = w.replace(/[,.]$/, "");
            const marked = em.includes(w) || em.includes(clean);
            return (
              <span key={wi}>
                {marked ? <em className="hl-line">{w}</em> : w}
                {wi < line.split(" ").length - 1 ? " " : ""}
              </span>
            );
          })}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
    </Tag>
  );
}

const askUrl = (service: string, extra = "") =>
  `${WHATSAPP_URL}?text=` +
  encodeURIComponent(`Bonjour Wevtex, je suis intéressé(e) par « ${service} »${extra}. Pouvez-vous m'envoyer un devis ?`);

export function ServiceDetailView({ service }: { service: Service }) {
  useReveal();

  const features = service.featureSections?.[0];
  /* L'illustration de la prestation, la même que sur /services : les deux
     listes partagent le slug, c'est le contrat posé dans services-data.ts. */
  const art = MARKETED.find((m) => m.slug === service.slug)?.image;

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="services" />

      <main id="main">

      {/* ===================== HERO ===================== */}
      <section className="theme-cream srv-d-hero">
        <div className="hero-motif" aria-hidden></div>
        <div className="container">
          <div className="srv-d-hero-grid">
            <div className="srv-d-hero-body reveal">
              <div className="crumb">
                <a href="/" style={{ color: "inherit" }}>Accueil</a> &nbsp;/&nbsp;{" "}
                <a href="/services" style={{ color: "inherit" }}>Services</a> &nbsp;/&nbsp; {service.name}
              </div>
              <Title as="h1" text={service.h1} em={service.h1Em} />
              <p className="ic-sub srv-d-lede">{service.intro}</p>

              <ul className="wk-stack srv-d-tags">
                {service.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>

              <div className="srv-d-cta">
                <a href={askUrl(service.name)} className="btn btn-primary" target="_blank" rel="noopener">
                  Obtenir mon devis gratuit {ARROW}
                </a>
                <a href="#tarifs" className="btn btn-outline">
                  Voir les prix {ARROW}
                </a>
              </div>
            </div>

            <div className="srv-d-hero-side reveal">
              {art ? (
                <div className="srv-d-hero-art">
                  <Image
                    src={art}
                    alt={`${service.name} au Maroc, illustration Wevtex`}
                    width={900}
                    height={860}
                    quality={90}
                    sizes="(max-width: 900px) 92vw, 40vw"
                    priority
                  />
                </div>
              ) : (
                <span className="srv-d-icon">{SERVICE_ICONS[service.slug]}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SPÉCIALITÉS (grille bento) ===================== */}
      {features && (
        <section className="theme-paper services-bento srv-d-sec">
          <div className="container">
            <div className="bento-head reveal">
              <div className="bento-head-left">
                <span className="eyebrow line-eyebrow">{features.eyebrow}</span>
                <div style={{ marginTop: 16 }}>
                  <Title text={features.title} em={features.titleEm || []} />
                </div>
              </div>
              {features.subtitle && <p className="bento-head-right">{features.subtitle}</p>}
            </div>

            <div className="bento-grid srv-d-bento reveal">
              {features.cards.map((c, i) => (
                <div className="bento-card" key={c.title}>
                  <span className="bento-top">
                    <span className="bento-n">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <div className="bento-card-body">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <ul className="srv-d-checks">
                      {c.checks.map((ch) => <li key={ch}>{CHECK}{ch}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== MÉTHODE =====================
          The shared ProcessSection: a sticky panel tracking the active step.
          Service steps carry `checks` rather than prose, which the component
          falls back to for the panel copy. */}
      {service.process && (
        <ProcessSection
          eyebrow="Notre méthode"
          title={service.process.title}
          titleEm={service.process.titleEm || []}
          subtitle={service.process.subtitle}
          steps={service.process.steps}
          tone="ink"
        />
      )}

      {/* ===================== CTA — MI-PARCOURS =====================
          A decision point halfway down: someone convinced by the method should
          not have to scroll past pricing, sectors and the FAQ to act. */}
      <section className="inline-cta inline-cta-ink">
        <div className="container">
          <div className="ict-inner reveal">
            <p className="ict-text">Vous savez ce qu&apos;il vous faut ? Recevez le prix exact.</p>
            <div className="ict-actions">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Obtenir mon devis gratuit
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="#tarifs" className="btn btn-outline">Voir les prix</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PAR SECTEUR ===================== */}
      {service.sectors && (
        <section className="theme-paper srv-d-sec">
          <div className="container">
            <div className="cmp-head reveal">
              <span className="eyebrow line-eyebrow">Par secteur</span>
              <Title text={service.sectors.title} em={service.sectors.titleEm || []} />
              {service.sectors.subtitle && <p className="ic-sub srv-d-sub">{service.sectors.subtitle}</p>}
            </div>

            <div className="srv-d-sectors reveal">
              {service.sectors.groups.map((g) => (
                <div className="srv-d-sector" key={g.label}>
                  <h3>{g.label}</h3>
                  <ul className="srv-d-checks">
                    {g.cases.map((c) => <li key={c}>{CHECK}{c}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== RECHERCHE =====================
          The questions buyers type, answered on the page (lib/service-seo.ts):
          the exact term in an H2, the answer first, real published prices.
          Ends with the cities served, linked to their pages. */}
      {service.seoSections && service.seoSections.length > 0 && (
        <section className="theme-cream srv-d-sec">
          <div className="container">
            <div className="reveal" style={{ maxWidth: "74ch" }}>
              {service.seoSections.map((sec, i) => (
                <div key={sec.h2} style={{ marginTop: i === 0 ? 0 : 64 }}>
                  <h2 className="h-section" style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}>{sec.h2}</h2>
                  {sec.paras.map((p) => (
                    <p key={p} className="ic-sub" style={{ marginTop: 16, textAlign: "left", maxWidth: "none" }}>{p}</p>
                  ))}
                  {sec.bullets && (
                    <ul className="srv-d-checks" style={{ marginTop: 20 }}>
                      {sec.bullets.map((b) => <li key={b}>{CHECK}{b}</li>)}
                    </ul>
                  )}
                  {sec.links && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
                      {sec.links.map((l) => (
                        <a key={l.href} href={l.href} className="btn btn-outline">{l.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div style={{ marginTop: 64 }}>
                <h2 className="h-section" style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}>
                  {service.seoCityLabel ?? service.name} à Casablanca, Rabat, Marrakech et partout au Maroc
                </h2>
                <p className="ic-sub" style={{ marginTop: 16, textAlign: "left", maxWidth: "none" }}>
                  Wevtex est basé à Casablanca et intervient dans tout le Maroc : Rabat, Marrakech,
                  Tanger, Agadir, Fès, Kénitra, Meknès, Oujda et Tétouan, en visio et sur WhatsApp,
                  ainsi qu&apos;en France, en Belgique et au Canada.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
                  {CITIES.map((c) => (
                    <a key={c.slug} href={`/${c.slug}`} className="btn btn-outline">{service.seoCityLabel ?? "Agence web"} à {c.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== TARIFS ===================== */}
      {service.pricing && (
        <section className="pricing-v2 pricing-ink srv-d-pricing" id="tarifs">
          <div className="container">
            <div className="ic-head reveal">
              <span className="eyebrow line-eyebrow-center">Tarifs</span>
              <div style={{ marginTop: 16 }}>
                <Title text={service.pricing.title} em={service.pricing.titleEm || []} />
              </div>
              {service.pricing.subtitle && <p className="ic-sub">{service.pricing.subtitle}</p>}
            </div>

            <div className="pr-grid pr-grid-3 reveal">
              {service.pricing.tiers.map((t) => (
                <div className={t.featured ? "pr-card featured" : "pr-card"} key={t.name}>
                  {t.featured && (
                    <span className="pr-badge">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" /></svg>
                      Le plus demandé
                    </span>
                  )}
                  <div className="pr-name">{t.name}</div>
                  <div className="pr-divider"></div>
                  <span className="pr-from">À partir de</span>
                  <div className="pr-price">{t.price}<span className="cur">DH</span></div>
                  <div className="pr-note">{t.note}</div>
                  <ul className="pr-feats">
                    {t.features.map((f) => (
                      <li key={f}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={askUrl(service.name, ` — formule ${t.name}`)}
                    className={`pr-btn${t.featured ? " solid" : ""}`}
                    target="_blank"
                    rel="noopener"
                  >
                    Choisir cette formule
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 4 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </a>
                </div>
              ))}
            </div>

            {service.pricing.footnote && <p className="srv-d-price-foot reveal">{service.pricing.footnote}</p>}
          </div>
        </section>
      )}

      {/* ===================== FAQ ===================== */}
      {service.faqs?.length > 0 && (
        <section className="theme-cream faq-split srv-d-sec" id="faq">
          <div className="container">
            <div className="faq-grid">
              <div className="faq-left reveal">
                <span className="eyebrow line-eyebrow">FAQ</span>
                <div style={{ marginTop: 14 }}>
                  <Title text={"Ce qu'on nous demande\navant de signer"} em={["avant", "de", "signer"]} />
                </div>
                <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
                  Les doutes qu&apos;on entend le plus souvent sur ce service, et nos réponses franches.
                </p>
                <div className="faq-list-v2">
                  {service.faqs.map((f, i) => (
                    <details className="faq-item-v2" key={f.q}>
                      <summary>
                        <span className="faq-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                        <span className="faq-q">{f.q}</span>
                        <span className="faq-plus" aria-hidden></span>
                      </summary>
                      <div className="faq-body"><p>{f.a}</p></div>
                    </details>
                  ))}
                </div>
              </div>

              <div className="faq-right reveal">
                <div className="wa-card">
                  <span className="wa-card-motif" aria-hidden></span>
                  <h3>Une question sur ce service ?<br /><em>Posez-la sur WhatsApp</em></h3>
                  <span className="wa-rule"></span>
                  <p>Nous répondons sous quelques heures, avec un conseil honnête et un prix clair.</p>
                  <a href={askUrl(service.name)} className="wa-btn" target="_blank" rel="noopener">
                    Poser ma question {ARROW}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== SERVICES LIÉS ===================== */}
      <section className="theme-paper srv-d-sec">
        <div className="container">
          <span className="eyebrow line-eyebrow">Souvent pris ensemble</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            Ce qui marche encore mieux <em className="hl-line">avec ce service</em>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
            {(RELATED[service.slug] ?? []).map((slug) => {
              const s = MARKETED.find((m) => m.slug === slug);
              return s ? (
                <a key={slug} href={servicePath(slug)} className="btn btn-outline">{s.name}</a>
              ) : null;
            })}
            <a href="/agence-web-casablanca" className="btn btn-outline">Agence web à Casablanca</a>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CtaBand
        heading={<>{service.name}<br /><em className="hl-line">chiffré en quinze minutes.</em></>}
        text="Deux lignes sur WhatsApp suffisent pour démarrer. Après un échange de quinze minutes, vous recevez un devis ferme, sans engagement."
        secondaryHref="/services"
        secondaryLabel="Comparer les prestations"
      />
      </main>


      <SiteFooter />
      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

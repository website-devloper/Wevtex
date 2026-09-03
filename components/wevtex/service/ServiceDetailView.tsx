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

import { useTheme } from "../../../app/ThemeContext";
import "../../../app/wevtex-home.css";
import { SiteHeader } from "../SiteHeader";
import { SiteFooter } from "../SiteFooter";
import { StickyCta } from "../StickyCta";
import { useReveal } from "../useReveal";
import { SERVICE_ICONS, CtaBand } from "../SharedSections";
import { WHATSAPP_URL } from "@/lib/site-links";
import type { Service } from "@/lib/services-data";

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
  const { isDark } = useTheme();
  useReveal();

  const features = service.featureSections?.[0];

  return (
    <div className={`wevtex ${isDark ? "mode-dark" : "mode-light"}`}>
      <SiteHeader current="services" />

      {/* ===================== HERO ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} srv-d-hero`}>
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
                  Demander un devis gratuit {ARROW}
                </a>
                <a href="#tarifs" className="btn btn-outline">
                  Voir les tarifs {ARROW}
                </a>
              </div>
            </div>

            <div className="srv-d-hero-side reveal">
              <span className="srv-d-icon">{SERVICE_ICONS[service.slug]}</span>
              <ul className="srv-d-includes">
                {service.includes.map((inc) => (
                  <li key={inc}>{CHECK}{inc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CE QUE ÇA CHANGE ===================== */}
      {service.outcomes?.length > 0 && (
        <section className={`${isDark ? "theme-dark" : "theme-paper"} srv-d-sec`}>
          <div className="container">
            <div className="cmp-head reveal">
              <span className="eyebrow line-eyebrow">Ce que ça change</span>
              <Title text={"Des résultats concrets,\npas seulement un beau site."} em={["concrets,"]} />
            </div>
            <div className="srv-d-outcomes reveal">
              {service.outcomes.map((o, i) => (
                <div className="srv-d-outcome" key={o.h}>
                  <span className="srv-d-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{o.h}</h3>
                  <p>{o.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== SPÉCIALITÉS (grille bento) ===================== */}
      {features && (
        <section className={`${isDark ? "theme-dark" : "theme-cream"} services-bento srv-d-sec`}>
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
                    <h4>{c.title}</h4>
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

      {/* ===================== TECHNOLOGIES ===================== */}
      {service.tech && (
        <section className="srv-d-tech">
          <span className="audit-motif" aria-hidden></span>
          <div className="container">
            <div className="cmp-head reveal">
              <span className="eyebrow line-eyebrow">Technologies</span>
              <Title text={service.tech.title} em={service.tech.titleEm || []} />
              {service.tech.subtitle && <p className="ic-sub srv-d-sub">{service.tech.subtitle}</p>}
            </div>

            <div className="srv-d-tech-grid reveal">
              {service.tech.groups.map((g, i) => (
                <div className="srv-d-tech-card" key={g.label}>
                  <span className="srv-d-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{g.label}</h3>
                  {g.desc && <p>{g.desc}</p>}
                  <ul className="srv-d-chips">
                    {g.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== MÉTHODE ===================== */}
      {service.process && (
        <section className={`${isDark ? "theme-dark" : "theme-cream"} srv-d-sec`}>
          <div className="container">
            <div className="cmp-head reveal">
              <span className="eyebrow line-eyebrow">Notre méthode</span>
              <Title text={service.process.title} em={service.process.titleEm || []} />
              {service.process.subtitle && <p className="ic-sub srv-d-sub">{service.process.subtitle}</p>}
            </div>

            <ol className="srv-d-steps reveal">
              {service.process.steps.map((st) => (
                <li className="srv-d-step" key={st.n}>
                  <span className="srv-d-step-n">{st.n}</span>
                  <div className="srv-d-step-body">
                    <h3>{st.h}</h3>
                    <ul className="srv-d-checks">
                      {st.checks.map((c) => <li key={c}>{CHECK}{c}</li>)}
                    </ul>
                  </div>
                  <span className="srv-d-step-d">{st.d}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ===================== PAR SECTEUR ===================== */}
      {service.sectors && (
        <section className={`${isDark ? "theme-dark" : "theme-paper"} srv-d-sec`}>
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

      {/* ===================== POURQUOI NOUS ===================== */}
      {service.whyUs && (
        <section className={`${isDark ? "theme-dark" : "theme-cream"} srv-d-sec`}>
          <div className="container">
            <div className="cmp-head reveal">
              <span className="eyebrow line-eyebrow">Pourquoi Wevtex</span>
              <Title text={service.whyUs.title} em={service.whyUs.titleEm || []} />
              {service.whyUs.subtitle && <p className="ic-sub srv-d-sub">{service.whyUs.subtitle}</p>}
            </div>

            <div className="srv-d-why reveal">
              {service.whyUs.points.map((pt, i) => (
                <div className="srv-d-why-card" key={pt.h}>
                  <span className="srv-d-n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{pt.h}</h3>
                  <p>{pt.p}</p>
                </div>
              ))}
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
                    Demander un devis
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
        <section className={`${isDark ? "theme-dark" : "theme-paper"} faq-split srv-d-sec`} id="faq">
          <div className="container">
            <div className="faq-grid">
              <div className="faq-left reveal">
                <span className="eyebrow line-eyebrow">FAQ</span>
                <div style={{ marginTop: 14 }}>
                  <Title text={"Vos questions,\nnos réponses"} em={["nos", "réponses"]} />
                </div>
                <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
                  Les questions qu&apos;on nous pose le plus souvent sur cette prestation.
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
                  <h3>Une autre question ?<br /><em>Écrivez-nous sur WhatsApp</em></h3>
                  <span className="wa-rule"></span>
                  <p>Nous répondons sous quelques heures, avec un conseil honnête et un prix clair.</p>
                  <a href={askUrl(service.name)} className="wa-btn" target="_blank" rel="noopener">
                    Discuter sur WhatsApp {ARROW}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== CTA ===================== */}
      <CtaBand
        heading={<>Parlons de votre projet<br /><em className="hl-line">{service.name.toLowerCase()}.</em></>}
        text="Envoyez-nous votre projet en deux lignes sur WhatsApp. Nous répondons sous quelques heures, avec un conseil honnête et un prix clair."
        secondaryHref="/services"
        secondaryLabel="Toutes nos prestations"
      />

      <SiteFooter />
      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

"use client";

/**
 * Vue détaillée d'une prestation (and its English twin).
 *
 * Elle n'utilise que le système de la page d'accueil et de /services :
 * mêmes classes (`bento-*`, `wk-*`, `pr-*`, `faq-*`), mêmes polices, mêmes
 * couleurs, mêmes survols. Rien du thème `sd-*` séparé.
 *
 * Tout le contenu vient de lib/services-data.ts (lib/en/services-data.ts en
 * anglais) : cette vue ne connaît aucune prestation en particulier, elle sait
 * seulement les afficher.
 */

import Image from "next/image";
import "../../../app/wevtex-home.css";
import { SiteHeader } from "../SiteHeader";
import { SiteFooter } from "../SiteFooter";
import { StickyCta } from "../StickyCta";
import { useReveal } from "../useReveal";
import { SERVICE_ICONS, CtaBand } from "../SharedSections";
import { useHomeContent } from "../useHomeContent";
import { useLocale, useLp } from "../locale";
import { WHATSAPP_URL, servicePath } from "@/lib/site-links";
import { ProcessSection } from "../ProcessSection";
import type { Service } from "@/lib/services-data";
import { CITY_LINKS, CITY_LINKS_EN } from "@/lib/city-list";

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

const T = {
  fr: {
    home: "Accueil",
    quote: "Obtenir mon devis gratuit",
    prices: "Voir les prix",
    art: (name: string) => `${name} au Maroc, illustration Wevtex`,
    method: "Notre méthode",
    midText: "Vous savez ce qu'il vous faut ? Recevez le prix exact.",
    bySector: "Par secteur",
    whyUs: "Pourquoi nous",
    citiesH2: " à Casablanca, Rabat, Marrakech et partout au Maroc",
    citiesP: "Wevtex est basé à Casablanca et intervient dans tout le Maroc : Rabat, Marrakech, Tanger, Agadir, Fès, Kénitra, Meknès, Oujda et Tétouan, en visio et sur WhatsApp, ainsi qu'en France, en Belgique et au Canada.",
    cityFallback: "Agence web",
    inCity: " à ",
    pricing: "Tarifs",
    popular: "Le plus demandé",
    from: "À partir de",
    cur: "DH",
    tierNote: (tier: string) => ` — formule ${tier}`,
    choose: "Choisir cette formule",
    faqTitle: "Ce qu'on nous demande\navant de signer",
    faqEm: ["avant", "de", "signer"],
    faqSub: "Les doutes qu'on entend le plus souvent sur ce service, et nos réponses franches.",
    waH3: "Une question sur ce service ?",
    waEm: "Posez-la sur WhatsApp",
    waP: "Nous répondons sous quelques heures, avec un conseil honnête et un prix clair.",
    ask: "Poser ma question",
    relatedEyebrow: "Souvent pris ensemble",
    relatedA: "Ce qui marche encore mieux ",
    relatedEm: "avec ce service",
    casablanca: "Agence web à Casablanca",
    ctaEm: "chiffré en quinze minutes.",
    ctaText: "Deux lignes sur WhatsApp suffisent pour démarrer. Après un échange de quinze minutes, vous recevez un devis ferme, sans engagement.",
    compare: "Comparer les prestations",
    ask_url: (service: string, extra: string) => `Bonjour Wevtex, je suis intéressé(e) par « ${service} »${extra}. Pouvez-vous m'envoyer un devis ?`,
  },
  en: {
    home: "Home",
    quote: "Get my free quote",
    prices: "See prices",
    art: (name: string) => `${name} in Morocco, Wevtex illustration`,
    method: "Our process",
    midText: "Know what you need? Get the exact price.",
    bySector: "By industry",
    whyUs: "Why us",
    citiesH2: " in Casablanca, Rabat, Marrakech and across Morocco",
    citiesP: "Wevtex is based in Casablanca and works across Morocco: Rabat, Marrakech, Tangier, Agadir, Fez, Kenitra, Meknes, Oujda and Tetouan, by video call and on WhatsApp, as well as with clients in France, Belgium and Canada.",
    cityFallback: "Web design",
    inCity: " in ",
    pricing: "Pricing",
    popular: "Most popular",
    from: "From",
    cur: "MAD",
    tierNote: (tier: string) => ` (${tier} package)`,
    choose: "Choose this package",
    faqTitle: "What clients ask us\nbefore signing",
    faqEm: ["before", "signing"],
    faqSub: "The doubts we hear most often about this service, and our straight answers.",
    waH3: "A question about this service?",
    waEm: "Ask it on WhatsApp",
    waP: "We reply within a few hours, with honest advice and a clear price.",
    ask: "Ask my question",
    relatedEyebrow: "Often taken together",
    relatedA: "What works even better ",
    relatedEm: "with this service",
    casablanca: "Web design agency in Casablanca",
    ctaEm: "priced in fifteen minutes.",
    ctaText: "Two lines on WhatsApp are enough to start. After a fifteen-minute call, you get a firm quote, with no commitment.",
    compare: "Compare services",
    ask_url: (service: string, extra: string) => `Hello Wevtex, I'm interested in “${service}”${extra}. Could you send me a quote?`,
  },
};

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

export function ServiceDetailView({ service }: { service: Service }) {
  useReveal();
  const locale = useLocale();
  const t = T[locale];
  const lp = useLp();
  const { SERVICES: MARKETED } = useHomeContent();
  const askUrl = (name: string, extra = "") => `${WHATSAPP_URL}?text=` + encodeURIComponent(t.ask_url(name, extra));
  const cities =
    locale === "en"
      ? CITY_LINKS_EN.map((c) => ({ slug: c.slug, name: c.name, href: `/en/${c.slug}` }))
      : CITY_LINKS.map((c) => ({ slug: c.slug, name: c.name, href: `/${c.slug}` }));

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
                <a href={lp("/")} style={{ color: "inherit" }}>{t.home}</a> &nbsp;/&nbsp;{" "}
                <a href={lp("/services")} style={{ color: "inherit" }}>Services</a> &nbsp;/&nbsp; {service.name}
              </div>
              <Title as="h1" text={service.h1} em={service.h1Em} />
              <p className="ic-sub srv-d-lede">{service.intro}</p>

              <ul className="wk-stack srv-d-tags">
                {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>

              <div className="srv-d-cta">
                <a href={askUrl(service.name)} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.quote} {ARROW}
                </a>
                <a href="#tarifs" className="btn btn-outline">
                  {t.prices} {ARROW}
                </a>
              </div>
            </div>

            <div className="srv-d-hero-side reveal">
              {art ? (
                <div className="srv-d-hero-art">
                  <Image
                    src={art}
                    alt={t.art(service.name)}
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
          eyebrow={t.method}
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
            <p className="ict-text">{t.midText}</p>
            <div className="ict-actions">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                {t.quote}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="#tarifs" className="btn btn-outline">{t.prices}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PAR SECTEUR ===================== */}
      {service.sectors && (
        <section className="theme-paper srv-d-sec">
          <div className="container">
            <div className="cmp-head reveal">
              <span className="eyebrow line-eyebrow">{t.bySector}</span>
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

      {/* ===================== POURQUOI NOUS =====================
          Each service states four answers to its own objections (whyUs in
          services-data). Same ink band and cards as the sector pages' outcomes,
          placed between two light sections to keep the page's rhythm. */}
      {service.whyUs && (
        <section className="ind-outcomes-ink" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
          <div className="container">
            <div className="reveal">
              <span className="eyebrow line-eyebrow">{t.whyUs}</span>
              <div style={{ marginTop: 14 }}>
                <Title text={service.whyUs.title} em={service.whyUs.titleEm || []} />
              </div>
              {service.whyUs.subtitle && (
                <p className="ic-sub" style={{ marginTop: 16, textAlign: "left", maxWidth: "58ch", color: "rgba(244, 245, 242, 0.72)" }}>
                  {service.whyUs.subtitle}
                </p>
              )}
            </div>
            <div className="ind-outcomes reveal">
              {service.whyUs.points.map((w) => (
                <div className="ind-outcome" key={w.h}>
                  <h3>{w.h}</h3>
                  <span className="ind-outcome-rule" aria-hidden></span>
                  <p>{w.p}</p>
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
                        <a key={l.href} href={lp(l.href)} className="btn btn-outline">{l.label}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div style={{ marginTop: 64 }}>
                <h2 className="h-section" style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}>
                  {service.seoCityLabel ?? service.name}{t.citiesH2}
                </h2>
                <p className="ic-sub" style={{ marginTop: 16, textAlign: "left", maxWidth: "none" }}>
                  {t.citiesP}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
                  {cities.map((c) => (
                    <a key={c.slug} href={c.href} className="btn btn-outline">{service.seoCityLabel ?? t.cityFallback}{t.inCity}{c.name}</a>
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
              <span className="eyebrow line-eyebrow-center">{t.pricing}</span>
              <div style={{ marginTop: 16 }}>
                <Title text={service.pricing.title} em={service.pricing.titleEm || []} />
              </div>
              {service.pricing.subtitle && <p className="ic-sub">{service.pricing.subtitle}</p>}
            </div>

            <div className="pr-grid pr-grid-3 reveal">
              {service.pricing.tiers.map((tier) => (
                <div className={tier.featured ? "pr-card featured" : "pr-card"} key={tier.name}>
                  {tier.featured && (
                    <span className="pr-badge">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" /></svg>
                      {t.popular}
                    </span>
                  )}
                  <div className="pr-name">{tier.name}</div>
                  <div className="pr-divider"></div>
                  <span className="pr-from">{t.from}</span>
                  <div className="pr-price">{tier.price}<span className="cur">{t.cur}</span></div>
                  <div className="pr-note">{tier.note}</div>
                  <ul className="pr-feats">
                    {tier.features.map((f) => (
                      <li key={f}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={askUrl(service.name, t.tierNote(tier.name))}
                    className={`pr-btn${tier.featured ? " solid" : ""}`}
                    target="_blank"
                    rel="noopener"
                  >
                    {t.choose}
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
                  <Title text={t.faqTitle} em={t.faqEm} />
                </div>
                <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
                  {t.faqSub}
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
                  <h3>{t.waH3}<br /><em>{t.waEm}</em></h3>
                  <span className="wa-rule"></span>
                  <p>{t.waP}</p>
                  <a href={askUrl(service.name)} className="wa-btn" target="_blank" rel="noopener">
                    {t.ask} {ARROW}
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
          <span className="eyebrow line-eyebrow">{t.relatedEyebrow}</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            {t.relatedA}<em className="hl-line">{t.relatedEm}</em>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
            {(RELATED[service.slug] ?? []).map((slug) => {
              const s = MARKETED.find((m) => m.slug === slug);
              return s ? (
                <a key={slug} href={lp(servicePath(slug))} className="btn btn-outline">{s.name}</a>
              ) : null;
            })}
            <a href={lp("/agence-web-casablanca")} className="btn btn-outline">{t.casablanca}</a>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <CtaBand
        heading={<>{service.name}<br /><em className="hl-line">{t.ctaEm}</em></>}
        text={t.ctaText}
        secondaryHref="/services"
        secondaryLabel={t.compare}
      />
      </main>


      <SiteFooter />
      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

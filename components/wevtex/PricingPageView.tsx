"use client";

import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useReveal } from "./useReveal";
import { useLocale, useLp } from "./locale";
import { ADDONS } from "@/lib/pricing";
import { CONTACT_URL, WHATSAPP_URL, servicePath } from "@/lib/site-links";
import type { Service } from "@/lib/services-data";

/**
 * /tarifs — every published pack on one page.
 *
 * The service pages sell one service each; this page is for the visitor who
 * wants to compare before choosing, and for the search "tarifs agence web
 * Maroc". Packs are read from the same service data the service pages render,
 * so a price can never be right on one page and stale here.
 *
 * Add-ons close the page because they answer the question the packs raise:
 * "and if I need one more page?".
 */

const T = {
  fr: {
    eyebrow: "Tarifs",
    h1: "Nos prix,",
    h1Em: "affichés.",
    lede:
      "Chaque formule est annoncée avec ce qu'elle contient. Le devis confirme le prix, il ne le gonfle pas, et vous ne payez qu'une fois satisfait.",
    cta: "Demander mon devis gratuit",
    ask: "Poser une question sur WhatsApp",
    popular: "Le plus demandé",
    from: "À partir de",
    cur: "DH",
    choose: "Choisir cette formule",
    seeService: "Voir la prestation",
    addonsEyebrow: "Options",
    addonsH: "Les extras,",
    addonsEm: "au même tarif pour tous.",
    addonsLede:
      "À ajouter à n'importe quelle formule, avant ou après la mise en ligne. Chaque option est chiffrée au moment du devis.",
    footA: "Une question sur une formule ou une option ?",
    footB: "Écrivez-nous, la réponse arrive le jour même en heures ouvrées.",
    askText: "Bonjour Wevtex, j'ai une question sur vos tarifs.",
  },
  en: {
    eyebrow: "Pricing",
    h1: "Our prices,",
    h1Em: "in the open.",
    lede:
      "Every package is published with what it contains. The quote confirms the price, it does not inflate it, and you only pay once you are satisfied.",
    cta: "Get my free quote",
    ask: "Ask a question on WhatsApp",
    popular: "Most requested",
    from: "From",
    cur: "MAD",
    choose: "Choose this package",
    seeService: "See the service",
    addonsEyebrow: "Add-ons",
    addonsH: "The extras,",
    addonsEm: "same rate for everyone.",
    addonsLede:
      "Add them to any package, before or after launch. Each one is quoted at the same time as the rest.",
    footA: "A question about a package or an add-on?",
    footB: "Write to us, the answer comes the same working day.",
    askText: "Hello Wevtex, I have a question about your pricing.",
  },
};

const CHECK = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function PricingPageView({ services }: { services: Service[] }) {
  useReveal();
  const locale = useLocale();
  const lp = useLp();
  const t = T[locale];
  const priced = services.filter((s) => s.pricing && s.pricing.tiers.length > 0);

  return (
    <div className="wevtex mode-light">
      <SiteHeader />

      <main id="main">
        <section className="theme-cream sec-first">
          <div className="container">
            <span className="eyebrow line-eyebrow">{t.eyebrow}</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              {t.h1} <em className="hl-line">{t.h1Em}</em>
            </h1>
            <p className="ic-sub wk-lede">{t.lede}</p>
            <div className="hero-ctas" style={{ marginTop: 28, marginBottom: 0 }}>
              <a href={lp(CONTACT_URL)} className="btn btn-primary">
                {t.cta}
                <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </a>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(t.askText)}`}
                className="btn btn-outline"
                target="_blank"
                rel="noopener"
              >
                {t.ask}
              </a>
            </div>
          </div>
        </section>

        {/* One block per service, in the order of the services list. */}
        {priced.map((service, i) => (
          <section
            key={service.slug}
            className={i % 2 === 0 ? "pricing-v2 tp-block" : "pricing-v2 tp-block tp-alt"}
            id={service.slug}
          >
            <div className="container">
              <div className="tp-head reveal">
                <div>
                  <span className="eyebrow">{service.eyebrow}</span>
                  <h2 className="h-section tp-h">{service.name}</h2>
                </div>
                <a href={lp(servicePath(service.slug))} className="tp-see">
                  {t.seeService} {ARROW}
                </a>
              </div>

              <div className={`pr-grid pr-grid-${service.pricing!.tiers.length} reveal`}>
                {service.pricing!.tiers.map((tier) => (
                  <div className={tier.featured ? "pr-card featured" : "pr-card"} key={tier.name}>
                    {tier.featured && (
                      <span className="pr-badge">
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.5 6.8L12 16.9 5.9 20.3l1.5-6.8-5.2-4.6 6.9-.6L12 2z" /></svg>
                        {t.popular}
                      </span>
                    )}
                    <div className="pr-name">{tier.name}</div>
                    <div className="pr-divider"></div>
                    {tier.from !== false && <span className="pr-from">{t.from}</span>}
                    <div className="pr-price">
                      {tier.price}
                      <span className="cur">{t.cur}</span>
                      {tier.unit && <span className="pr-unit">{tier.unit}</span>}
                    </div>
                    <div className="pr-note">{tier.note}</div>
                    <ul className="pr-feats">
                      {tier.features.map((f) => (
                        <li key={f}>{CHECK}{f}</li>
                      ))}
                    </ul>
                    <a href={lp(CONTACT_URL)} className={`pr-btn${tier.featured ? " solid" : ""}`}>
                      {t.choose} {ARROW}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Add-ons: the answer to "and if I need one more page?". */}
        <section className="pricing-v2 pricing-ink tp-addons" id="options">
          <div className="container">
            <div className="ic-head reveal">
              <span className="eyebrow line-eyebrow-center">{t.addonsEyebrow}</span>
              <h2 className="h-section" style={{ marginTop: 16, justifyContent: "center" }}>
                {t.addonsH} <em className="hl-line">{t.addonsEm}</em>
              </h2>
              <p className="ic-sub">{t.addonsLede}</p>
            </div>

            <ul className="addon-grid reveal">
              {ADDONS.map((a) => (
                <li key={a.id} className="addon-card">
                  <div className="addon-top">
                    <h3 className="addon-h">{a[locale].h}</h3>
                    <span className="addon-price">
                      {a.price}<span className="cur">{t.cur}</span>
                      <span className="addon-unit">{a.unit[locale]}</span>
                    </span>
                  </div>
                  <p className="addon-p">{a[locale].p}</p>
                </li>
              ))}
            </ul>

            <div className="tp-foot reveal">
              <p>{t.footA}<br />{t.footB}</p>
              <a href={lp(CONTACT_URL)} className="btn btn-primary">
                {t.cta}
                <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M3 9L9 3M9 3H4M9 3V8" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

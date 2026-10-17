"use client";

/**
 * Sections shared between the homepage and /services.
 *
 * The markup and class names are the homepage's, so both pages render the same
 * components with the same fonts, colours and hover behaviour. Content comes
 * from the shared SERVICES / FAQS lists in homeContent.ts (homeContent.en.ts
 * on English pages), so a service added there appears on every surface at once.
 */

import type { ReactNode } from "react";
import { useHomeContent } from "./useHomeContent";
import { useLocale, useLp } from "./locale";
import { WHATSAPP_URL, PRICING_URL, serviceWhatsAppUrl, servicePath } from "@/lib/site-links";

const T = {
  fr: {
    bentoEyebrow: "Services",
    compare: "Comparer les 8 prestations",
    pricingEyebrow: "Tarifs",
    popular: "Le plus demandé",
    from: "À partir de",
    cur: "DH",
    noHidden: "Aucun frais caché",
    paySatisfied: "Vous ne payez qu'une fois satisfait",
    special: "Un besoin particulier ? Parlons-en",
    faqH2: "Vos questions, ",
    faqEm: "nos réponses",
    faqSub: "Les questions qu'on nous pose le plus souvent sur notre méthode, nos services et notre façon de travailler.",
    waH3: "Une autre question ?",
    waEm: "Écrivez-nous sur WhatsApp",
    waP: "Nous sommes là pour vous aider. Écrivez-nous quand vous voulez, nous répondons au plus vite.",
    waBtn: "Discuter sur WhatsApp",
    privacy: "Vos informations restent confidentielles. Nous respectons votre vie privée.",
    ctaEyebrow: "Prochaine étape",
    ctaPrimary: "Obtenir mon devis gratuit",
    ctaSecondary: "Voir les sites livrés",
  },
  en: {
    bentoEyebrow: "Services",
    compare: "Compare all 8 services",
    pricingEyebrow: "Pricing",
    popular: "Most popular",
    from: "From",
    cur: "MAD",
    noHidden: "No hidden fees",
    paySatisfied: "You only pay once you're satisfied",
    special: "Something specific in mind? Let's talk",
    faqH2: "Your questions, ",
    faqEm: "our answers",
    faqSub: "The questions we hear most often about our method, our services and the way we work.",
    waH3: "Another question?",
    waEm: "Message us on WhatsApp",
    waP: "We're here to help. Write whenever you like and we'll answer as fast as we can.",
    waBtn: "Chat on WhatsApp",
    privacy: "Your details stay confidential. We respect your privacy.",
    ctaEyebrow: "Next step",
    ctaPrimary: "Get my free quote",
    ctaSecondary: "See delivered websites",
  },
};

export const WHATSAPP_MARK = (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden style={{ marginRight: 2 }}>
    <path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" />
  </svg>
);

const ARROW = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const svg = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

/** One icon per service, keyed to the shared SERVICES list by slug. */
export const SERVICE_ICONS: Record<string, ReactNode> = {
  "website-creation": svg(<><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M2 9h20M8 21h8M12 17v4" /></>),
  "seo": svg(<><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.6-3.6" /><path d="M8 12.5l2.2-2.4 1.9 1.7 2.4-2.8" /></>),
  "local-seo": svg(<><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
  "ads": svg(<><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" /><path d="M16 9.2a4 4 0 0 1 0 5.6" /><path d="M18.8 6.4a8 8 0 0 1 0 11.2" /></>),
  "mobile-apps": svg(<><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10.5 18.5h3" /></>),
  "desktop-apps": svg(<><rect x="2" y="4" width="20" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>),
  "custom-solutions": svg(<><rect x="7" y="7" width="10" height="10" rx="2.5" /><path d="M9.5 3v4M14.5 3v4M9.5 17v4M14.5 17v4M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4" /></>),
  "whatsapp-bots": svg(<><path d="M20.5 11.5a8 8 0 0 1-11.9 7L4 20l1.6-4.4A8 8 0 1 1 20.5 11.5z" /><path d="M9.5 11.5v.8M14.5 11.5v.8" /><path d="M9.8 15c1.4 1 3 1 4.4 0" /></>),
};

export { serviceWhatsAppUrl };

/* ------------------------------------------------------------------ */

export function ServicesBento({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow?: string;
  heading: ReactNode;
  intro: string;
}) {
  const t = T[useLocale()];
  const lp = useLp();
  const { SERVICES } = useHomeContent();

  return (
    <section className="theme-cream services-bento" id="services">
      <div className="container">
        <div className="bento-head reveal">
          <div className="bento-head-left">
            <span className="eyebrow line-eyebrow">{eyebrow ?? t.bentoEyebrow}</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>{heading}</h2>
          </div>
          <p className="bento-head-right">{intro}</p>
        </div>

        <div className="bento-grid reveal">
          {SERVICES.map((sv, i) => (
            <a key={sv.slug} href={lp(servicePath(sv.slug))} className="bento-card">
              <span className="bento-top">
                <span className="bento-icon">{SERVICE_ICONS[sv.slug]}</span>
              </span>
              <div className="bento-card-body">
                <h3>{sv.name}</h3>
                <p>{sv.desc}</p>
              </div>
              <span className="bento-arrow" aria-hidden>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          ))}
        </div>

        <div className="wk-all reveal">
          <a href={lp(PRICING_URL)} className="btn btn-outline">
            {t.compare}
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function PricingGrid({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow?: string;
  heading: ReactNode;
  intro: ReactNode;
}) {
  const locale = useLocale();
  const t = T[locale];
  const { SERVICES } = useHomeContent();

  return (
    <section className="pricing-v2 pricing-ink" id="pricing">
      <div className="container">
        <div className="ic-head reveal">
          <span className="eyebrow line-eyebrow-center">{eyebrow ?? t.pricingEyebrow}</span>
          <h2 className="h-section" style={{ marginTop: 16, justifyContent: "center" }}>{heading}</h2>
          <p className="ic-sub">{intro}</p>
        </div>

        <div className="pr-grid pr-grid-8 reveal">
          {SERVICES.map((sv) => (
            <div className={sv.featured ? "pr-card featured" : "pr-card"} key={sv.slug}>
              {sv.featured && (
                <span className="pr-badge">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" /></svg>
                  {t.popular}
                </span>
              )}
              <div className="pr-top">
                <span className="pr-icon">{SERVICE_ICONS[sv.slug]}</span>
                <div>
                  <div className="pr-name">{sv.name}</div>
                  <div className="pr-sub">{sv.short}</div>
                </div>
              </div>
              <div className="pr-divider"></div>
              {/* A formule can be unpublished from the dashboard; the card
                  then shows no price rather than "à partir de  DH". */}
              {sv.price && (
                <>
                  <span className="pr-from">{t.from}</span>
                  <div className="pr-price">{sv.price}<span className="cur">{t.cur}</span></div>
                </>
              )}
              {sv.note && <div className="pr-note">{sv.note}</div>}
              <ul className="pr-feats">
                {sv.features.map((f) => (
                  <li key={f}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={serviceWhatsAppUrl(sv.name, locale)} className={`pr-btn${sv.featured ? " solid" : ""}`} target="_blank" rel="noopener">
                {sv.cta}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 4 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          ))}
        </div>

        <div className="pr-foot reveal">
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>{t.noHidden}</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>{t.paySatisfied}</span>
          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>{t.special}</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function FaqSection() {
  const t = T[useLocale()];
  const { FAQS } = useHomeContent();

  return (
    <section className="theme-paper faq-split" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left reveal">
            <span className="eyebrow line-eyebrow">FAQ</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>{t.faqH2}<em className="hl-line">{t.faqEm}</em></h2>
            <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
              {t.faqSub}
            </p>
            <div className="faq-list-v2">
              {FAQS.map((f, i) => (
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

          <div className="faq-right reveal">
            <div className="wa-card">
              <span className="wa-card-motif" aria-hidden></span>
              <span className="wa-icon">{WHATSAPP_MARK}</span>
              <h3>{t.waH3}<br /><em>{t.waEm}</em></h3>
              <span className="wa-rule"></span>
              <p>{t.waP}</p>
              <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                {WHATSAPP_MARK}
                {t.waBtn}
                {ARROW}
              </a>
            </div>
            <div className="wa-privacy">
              <span className="wa-lock">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              </span>
              {t.privacy}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

/** Closing call to action — the dark band used at the foot of a page. */
export function CtaBand({
  eyebrow,
  heading,
  text,
  primaryLabel,
  secondaryHref = "/portfolio",
  secondaryLabel,
}: {
  eyebrow?: string;
  heading: ReactNode;
  text: ReactNode;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const t = T[useLocale()];
  const lp = useLp();

  return (
    /* Split, not centred: the problem band is already a centred statement on
       ink, and two sections sharing a container pattern is what makes a page
       read as generated. Copy holds the left, the decision sits on the right. */
    <section className="audit-band cta-band cta-band-split">
      <span className="ink-grain" aria-hidden></span>
      <div className="container">
        <div className="ctab-inner reveal">
          <div className="ctab-copy">
            <span className="eyebrow line-eyebrow">{eyebrow ?? t.ctaEyebrow}</span>
            <h2 className="audit-h" style={{ marginTop: 16 }}>{heading}</h2>
            <p className="audit-p">{text}</p>
          </div>
          <div className="ctab-btns">
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              {primaryLabel ?? t.ctaPrimary}
              {ARROW}
            </a>
            <a href={lp(secondaryHref)} className="btn btn-outline">
              {secondaryLabel ?? t.ctaSecondary}
              {ARROW}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

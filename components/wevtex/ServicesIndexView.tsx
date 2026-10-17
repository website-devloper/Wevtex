"use client";

/**
 * Wevtex — page Services (/services and /en/services).
 *
 * Elle hérite de la page d'accueil : mêmes composants (grille de services,
 * tarifs, FAQ, CTA), mêmes polices et mêmes couleurs, via SharedSections.
 * Le contenu propre à cette page — types de sites, options — reste ici.
 */

import Image from "next/image";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { StickyCta } from "./StickyCta";
import { useReveal } from "./useReveal";
import { useHomeContent } from "./useHomeContent";
import { SERVICE_ICONS, CtaBand } from "./SharedSections";
import { useLocale, useLp } from "./locale";
import { WHATSAPP_URL, servicePath } from "@/lib/site-links";

const T = {
  fr: {
    eyebrow: "Nos prestations",
    h1a: "Choisissez le résultat,",
    h1Em: "on s'occupe du reste.",
    lede: "Services d'agence web et de marketing digital au Maroc, du site vitrine à l'automatisation. Pour chaque prestation d'agence digitale : ce qu'elle vous rapporte, comment elle se déroule et son prix, affiché.",
    alt: (name: string) => `${name}, illustration Wevtex`,
    price: (p: string) => `${p} DH`,
    fromNote: "à partir de · ",
    included: "Voir ce qui est inclus",
    ctaA: "Pas sûr de ce qu'il",
    ctaB: "vous ",
    ctaEm: "faut vraiment ?",
    ctaText: "Décrivez votre activité en deux lignes sur WhatsApp. Nous vous disons quelle prestation a du sens pour vous, et laquelle ne vous servirait à rien.",
  },
  en: {
    eyebrow: "Our services",
    h1a: "Choose the result,",
    h1Em: "we handle the rest.",
    lede: "Web design and digital marketing services in Morocco, from business websites to automation. For every service: what it brings you, how it runs and its price, shown upfront.",
    alt: (name: string) => `${name}, Wevtex illustration`,
    price: (p: string) => `MAD ${p}`,
    fromNote: "from · ",
    included: "See what's included",
    ctaA: "Not sure what you",
    ctaB: "",
    ctaEm: "really need?",
    ctaText: "Describe your business in two lines on WhatsApp. We'll tell you which service makes sense for you, and which one would be of no use.",
  },
};

export function ServicesIndexView() {
  useReveal();
  const t = T[useLocale()];
  const lp = useLp();
  const { SERVICES } = useHomeContent();

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="services" />

      <main id="main">

      {/* ===================== HERO =====================
          The page opened straight onto the list, so its h1 was doing double
          duty as a section head. A hero gives the list room to be a list. */}
      <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(30px, 5vh, 56px)" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow line-eyebrow">{t.eyebrow}</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              {t.h1a}<br />
              <em className="hl-line">{t.h1Em}</em>
            </h1>
            <p className="ic-sub wk-lede" style={{ maxWidth: "58ch" }}>
              {t.lede}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES — liste détaillée =====================
          Reprend la mise en page des projets de la page d'accueil (aperçu à
          gauche, contenu à droite) mais sans accordéon : chaque prestation
          est visible d'un coup, sans clic. */}
      <section className="theme-paper work srv-list-sec" id="services">
        <div className="container">
          {/* Reveal per item, not on the <ol>: as one element the list is
              taller than any viewport, so it could never satisfy the
              observer's area threshold. Per item it also staggers in. */}
          <ol className="srv-list">
            {SERVICES.map((sv, i) => (
              <li className="srv-list-item reveal" key={sv.slug}>
                <div className="wk-panel-grid srv-list-grid">
                  {/* No browser chrome here: these are transparent
                      illustrations, not site captures, so the frame and its
                      fake URL bar are dropped — just the artwork. */}
                  <div className="wk-frame srv-frame">
                    <div className="wk-shot srv-shot">
                      <Image
                        src={sv.image}
                        alt={t.alt(sv.name)}
                        width={900}
                        height={860}
                        quality={90}
                        sizes="(max-width: 860px) 92vw, 46vw"
                        priority={i === 0}
                      />
                    </div>
                  </div>

                  <div className="wk-body">
                    <span className="srv-list-top">
                      <span className="srv-list-n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="srv-list-icon">{SERVICE_ICONS[sv.slug]}</span>
                    </span>
                    <h2 className="srv-list-h">{sv.name}</h2>
                    <p className="wk-outcome">{sv.desc}</p>

                    <ul className="wk-stack">
                      {sv.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}
                    </ul>

                    {/* A formule can be unpublished from the dashboard; the
                        card then carries no price rather than an empty one. */}
                    {sv.price && (
                    <div className="wk-metric">
                      <span className="wk-metric-n">{t.price(sv.price)}</span>
                      {sv.note && <span className="wk-metric-l">{t.fromNote}{sv.note.toLowerCase()}</span>}
                    </div>
                    )}

                    <a href={lp(servicePath(sv.slug))} className="wk-view">
                      {t.included}
                      <span className="wk-view-arrow" aria-hidden>
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== CTA (composant partagé) ===================== */}
      <CtaBand
        heading={<>{t.ctaA}<br />{t.ctaB}<em className="hl-line">{t.ctaEm}</em></>}
        text={t.ctaText}
      />
      </main>


      <SiteFooter />
      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

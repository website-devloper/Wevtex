"use client";

/**
 * Wevtex — page Services.
 *
 * Elle hérite de la page d'accueil : mêmes composants (grille de services,
 * tarifs, FAQ, CTA), mêmes polices et mêmes couleurs, via SharedSections.
 * Le contenu propre à cette page — types de sites, options — reste ici.
 */

import Image from "next/image";
import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { StickyCta } from "../../components/wevtex/StickyCta";
import { useReveal } from "../../components/wevtex/useReveal";
import { SERVICES } from "../../components/wevtex/homeContent";
import { SERVICE_ICONS, CtaBand } from "../../components/wevtex/SharedSections";
import { WHATSAPP_URL, servicePath } from "@/lib/site-links";

export default function ServicesPage() {
  useReveal();

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
            <span className="eyebrow line-eyebrow">Nos prestations</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              Choisissez le résultat,<br />
              <em className="hl-line">on s&apos;occupe du reste.</em>
            </h1>
            <p className="ic-sub wk-lede" style={{ maxWidth: "58ch" }}>
              Services d&apos;agence web et de marketing digital au Maroc, du site
              vitrine à l&apos;automatisation. Pour chaque prestation d&apos;agence digitale :
              ce qu&apos;elle vous rapporte, comment elle se déroule et son prix, affiché.
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
                        alt={`${sv.name}, illustration Wevtex`}
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

                    <div className="wk-metric">
                      <span className="wk-metric-n">{sv.price} DH</span>
                      <span className="wk-metric-l">à partir de · {sv.note.toLowerCase()}</span>
                    </div>

                    <a href={servicePath(sv.slug)} className="wk-view">
                      Voir ce qui est inclus
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

      {/* ===================== NOTRE MÉTHODE =====================
          Rendu ici parce que le pied de page pointe vers /services#process. */}

      {/* ===================== CTA (composant partagé) ===================== */}
      <CtaBand
        heading={<>Pas sûr de ce qu&apos;il<br />vous <em className="hl-line">faut vraiment ?</em></>}
        text="Décrivez votre activité en deux lignes sur WhatsApp. Nous vous disons quelle prestation a du sens pour vous, et laquelle ne vous servirait à rien."
      />
      </main>


      <SiteFooter />
      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

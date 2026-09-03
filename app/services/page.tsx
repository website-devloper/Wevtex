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
import { ProcessSection } from "../../components/wevtex/ProcessSection";
import { WHATSAPP_URL, servicePath } from "@/lib/site-links";

export default function ServicesPage() {
  useReveal();

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="services" />

      {/* ===================== SERVICES — liste détaillée =====================
          Reprend la mise en page des projets de la page d'accueil (aperçu à
          gauche, contenu à droite) mais sans accordéon : chaque prestation
          est visible d'un coup, sans clic. */}
      <section className="theme-cream work srv-list-sec" id="services">
        <div className="container">
          <div className="wk-head reveal">
            <span className="eyebrow line-eyebrow">Nos prestations</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              Tout ce qu&apos;il faut pour<br />
              <em className="hl-line">développer</em> &amp; <em className="hl-line">automatiser</em>
            </h1>
            <p className="ic-sub wk-lede">
              Du site performant à l&apos;automatisation intelligente, huit prestations
              qui font grandir votre activité et vous simplifient le quotidien.
            </p>
          </div>

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
                        alt={`Aperçu — ${sv.name}`}
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
                    <h3 className="srv-list-h">{sv.name}</h3>
                    <p className="wk-outcome">{sv.desc}</p>

                    <ul className="wk-stack">
                      {sv.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}
                    </ul>

                    <div className="wk-metric">
                      <span className="wk-metric-n">{sv.price} DH</span>
                      <span className="wk-metric-l">à partir de · {sv.note.toLowerCase()}</span>
                    </div>

                    <a href={servicePath(sv.slug)} className="wk-view">
                      Voir les détails
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
      <ProcessSection />

      {/* ===================== CTA (composant partagé) ===================== */}
      <CtaBand
        heading={<>Dites-nous ce que<br />vous voulez <em className="hl-line">construire.</em></>}
        text="Envoyez-nous votre projet en deux lignes sur WhatsApp. Nous répondons sous quelques heures, avec un conseil honnête et un prix clair."
      />

      <SiteFooter />
      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

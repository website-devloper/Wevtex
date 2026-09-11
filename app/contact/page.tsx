"use client";

/**
 * Wevtex — Contact. Three sections: hero, contact, FAQ.
 *
 * Built in the homepage's design language, not the ported template's:
 * `eyebrow line-eyebrow` → `h-section` with `hl-line` (the lime underline
 * highlight) → `ic-sub`. Grounds alternate cream → ink → paper, the same
 * rhythm the homepage uses to mark the points where a visitor decides
 * something. No `page-hero`, no breadcrumb, no coloured serif accents —
 * those belong to the older pages and are what made this one look foreign.
 */

import { useState } from "react";
import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { ProjectBriefForm } from "../../components/wevtex/ProjectBriefForm";
import { useReveal } from "../../components/wevtex/useReveal";
import { EMAIL_URL, WHATSAPP_URL, AUDIT_WHATSAPP_URL } from "@/lib/site-links";
import { CONTACT_FAQS as FAQS } from "@/lib/contact-content";

const WHATSAPP = (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
    <path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" />
  </svg>
);


export default function ContactPage() {
  useReveal();

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="contact" />

      <main id="main">

      {/* ===================== HERO ===================== */}
      <section className="theme-cream sec-first" style={{ paddingBottom: "clamp(60px, 9vh, 100px)" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow line-eyebrow">Contact</span>
            <h1 className="h-section" style={{ marginTop: 14 }}>
              Dites-nous ce que vous<br />
              construisez. <em className="hl-line">On le chiffre.</em>
            </h1>
            <p className="ic-sub wk-lede">
              Votre demande de devis de site internet, d&apos;application ou de campagne,
              en trois étapes et deux minutes. Vous recevez un premier avis, une idée
              claire du budget et un délai réaliste, sans engagement : le devis de
              création de site web est gratuit, partout au Maroc.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT =====================
          Ink ground with one white slab, the same pairing the homepage uses at
          pricing — the point on the page where a visitor decides something. */}
      <section className="contact-split" id="contact">
        <span className="cs-motif" aria-hidden></span>
        <div className="container">
          <div className="cs-grid">

            <div className="cs-left reveal">
              <span className="eyebrow line-eyebrow">Nous joindre</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>
                Trois façons de<br />nous <em className="hl-em">joindre.</em>
              </h2>
              <p className="cs-sub">
                Le formulaire est le plus rapide : il nous donne tout ce qu&apos;il faut
                pour vous répondre utilement dès le premier message.
              </p>

              <div className="cs-channels">
                <a className="cs-chan" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <span className="cs-chan-ic">{WHATSAPP}</span>
                  <span className="cs-chan-tx"><b>WhatsApp</b></span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="cs-chan" href={EMAIL_URL}>
                  <span className="cs-chan-ic">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                  </span>
                  <span className="cs-chan-tx"><b>hello@wevtex.com</b></span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="cs-chan" href="tel:+212687633774">
                  <span className="cs-chan-ic">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1.1 1A16 16 0 014 5.1 1 1 0 015 4z" /></svg>
                  </span>
                  <span className="cs-chan-tx"><b>+212 687 633 774</b></span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>

              <p className="cs-hours">
                <span className="cs-dot" aria-hidden></span>
                Lun &ndash; Ven 09h00&ndash;18h00 &middot; Sam 10h00&ndash;14h00
              </p>
            </div>

            <div className="cs-right reveal">
              <div className="cs-form-card">
                <ProjectBriefForm />
              </div>
              <p className="cs-audit">
                <a href={AUDIT_WHATSAPP_URL} target="_blank" rel="noopener">
                  Audit téléphonique gratuit de 15 min
                </a>{" "}
                si vous n&apos;êtes pas encore prêt pour un devis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="theme-paper faq-split" id="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-left reveal">
              <span className="eyebrow line-eyebrow">FAQ</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Avant de nous écrire, <em className="hl-line">les réponses</em>
              </h2>
              <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
                Les réponses courtes aux questions qu&apos;on nous pose avant le premier échange.
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
                <span className="wa-icon">{WHATSAPP}</span>
                <h3>Pas le temps du formulaire ?<br /><em>Écrivez-nous sur WhatsApp</em></h3>
                <span className="wa-rule"></span>
                <p>Une vraie personne vous répond, en français ou en darija, pendant les horaires de bureau.</p>
                <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                  {WHATSAPP}
                  Écrire sur WhatsApp
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
              <div className="wa-privacy">
                <span className="wa-lock">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                </span>
                Vos informations restent confidentielles. Nous ne les partageons avec personne.
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>


      <SiteFooter />
    </div>
  );
}

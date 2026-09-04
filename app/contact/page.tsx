"use client";

/** Wevtex — Contact. Hero, then contact details beside the brief, then FAQ. */

import { useState } from "react";
import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { ProjectBriefForm } from "../../components/wevtex/ProjectBriefForm";
import { useReveal } from "../../components/wevtex/useReveal";
import { EMAIL_URL, HOME_URL, WHATSAPP_URL } from "@/lib/site-links";

/* REVIEW BEFORE LAUNCH — these are commitments to clients, not marketing copy.
   Written from what the site already states; confirm each one is true for you. */
const FAQS = [
  {
    q: "Combien de temps faut-il pour créer un site ?",
    a: "Cela dépend de la taille du projet. Un site vitrine est généralement plus rapide qu'une boutique en ligne ou une application. Vous recevez une date de livraison ferme dans le devis, avant que le travail ne commence.",
  },
  {
    q: "Combien coûte un site web ?",
    a: "Nos formules démarrent à 990 DH. Le prix final dépend du nombre de pages, des fonctionnalités et du contenu à produire. Vous recevez un devis détaillé avant tout engagement, sans frais de votre côté.",
  },
  {
    q: "Travaillez-vous avec des clients en dehors du Maroc ?",
    a: "Oui. Nous sommes basés à Casablanca et travaillons à distance avec des clients au Maroc comme à l'étranger. Les échanges se font en français, en anglais ou en arabe.",
  },
  {
    q: "À qui appartient le site à la fin du projet ?",
    a: "À vous. Le site, le nom de domaine et l'hébergement sont mis à votre nom. Vous restez propriétaire de tout, et libre de travailler avec qui vous voulez ensuite.",
  },
  {
    q: "Puis-je modifier le contenu moi-même ?",
    a: "Oui. Nous mettons en place une interface simple pour modifier vos textes et vos images, et nous vous montrons comment l'utiliser avant la mise en ligne.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Nous restons joignables. Les corrections liées à notre travail sont prises en charge, et vous pouvez ajouter un suivi mensuel si vous souhaitez que nous continuions à faire évoluer le site.",
  },
  {
    q: "Comment démarrer ?",
    a: "Remplissez le formulaire ci-dessus, ou écrivez-nous directement sur WhatsApp. Nous revenons vers vous avec un premier avis et une idée claire du budget.",
  },
];

export default function ContactPage() {
  useReveal();
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const toggle = (i: number) => setOpen((o) => ({ ...o, [i]: !o[i] }));

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="contact" />

      {/* HERO */}
      <section className="theme-cream page-hero">
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb">
              <a href={HOME_URL} style={{ color: "inherit" }}>Accueil</a> &nbsp;/&nbsp; Contact
            </div>
            <h1>Construisons votre<br />prochain <em>projet.</em></h1>
            <p className="lead">
              Décrivez-nous ce que vous voulez créer. Nous revenons vers vous avec un
              premier avis, une idée claire du budget et un délai réaliste — sans
              engagement de votre part.
            </p>
            <div className="page-hero-meta">
              <div><span className="label">Réponse</span><div className="val">Quelques heures ouvrées</div></div>
              <div><span className="label">Basés à</span><div className="val">Casablanca, Maroc</div></div>
              <div><span className="label">Nous servons</span><div className="val">Maroc &amp; international</div></div>
              <div><span className="label">Domaines</span><div className="val">Web, apps, SEO, automatisation</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — details beside the brief */}
      <section className="theme-cream contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="eyebrow">Nous contacter</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>
                Casablanca,<br />et à <span className="serif" style={{ color: "var(--accent)" }}>distance.</span>
              </h2>
              <p className="lead">
                Le formulaire est le plus rapide : il nous donne tout ce qu&apos;il faut pour
                vous répondre utilement dès le premier message. Mais WhatsApp et e-mail
                fonctionnent tout aussi bien.
              </p>
              <div className="contact-row">
                <div className="contact-line">
                  <span className="label">E-mail</span>
                  <a className="val" href={EMAIL_URL} style={{ color: "inherit" }}>hello@wevtex.com</a>
                </div>
                <div className="contact-line">
                  <span className="label">Téléphone</span>
                  <a className="val" href="tel:+212687633774" style={{ color: "inherit" }}>+212 687 633 774</a>
                </div>
                <div className="contact-line">
                  <span className="label">WhatsApp</span>
                  <a className="val" href={WHATSAPP_URL} target="_blank" rel="noopener" style={{ color: "inherit" }}>
                    Discuter maintenant
                  </a>
                </div>
                <div className="contact-line">
                  <span className="label">Horaires</span>
                  <span className="val">Lun&ndash;Ven 9h&ndash;18h · Sam 10h&ndash;14h</span>
                </div>
              </div>
            </div>

            <ProjectBriefForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>
                Les questions<br /><span className="serif" style={{ color: "var(--accent)" }}>fréquentes.</span>
              </h2>
            </div>
            <p className="lead">
              Ce qu&apos;on nous demande le plus souvent avant de démarrer. Votre question
              n&apos;y est pas ? Écrivez-nous, nous répondons directement.
            </p>
          </div>
          <div className="faq-list reveal">
            {FAQS.map((f, i) => (
              <div className={open[i] ? "faq-item open" : "faq-item"} key={i}>
                <button className="faq-q" onClick={() => toggle(i)} aria-expanded={!!open[i]}>
                  <span>{f.q}</span>
                  <span className="icon">+</span>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

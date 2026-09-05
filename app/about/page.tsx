"use client";

/**
 * Wevtex — À propos.
 *
 * Quatre sections seulement, dans les composants de la page d'accueil et de
 * la page prestations (ic-head / line-eyebrow / h-section / hl-line / CtaBand) :
 *   le studio (présentation de la marque, en photos) → l'équipe →
 *   pourquoi nous → la bande de contact.
 *
 * La page ouvrait auparavant sur un « page-hero » avec fil d'Ariane et
 * bandeau de chiffres, un gabarit qui ne sert plus qu'à /portfolio ; elle
 * enchaînait ensuite manifeste, principes, comparatif et frise. Tout cela a
 * été retiré pour que le parcours reste : qui nous sommes, qui vous suit,
 * pourquoi nous, on en parle.
 */

import Image from "next/image";
import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { StickyCta } from "../../components/wevtex/StickyCta";
import { CtaBand } from "../../components/wevtex/SharedSections";
import { useReveal } from "../../components/wevtex/useReveal";
import { WHATSAPP_URL, SERVICES_URL } from "@/lib/site-links";

type Member = {
  /** Initiales affichées tant qu'il n'y a pas de portrait. */
  i: string;
  n: string;
  r: string;
  /** Discipline, en bas de la vignette sans photo. */
  tag: string;
  d: number;
  dark?: boolean;
  /* Déposez le portrait dans /public/images/team/ et renseignez-le ici ;
     sans photo, la vignette retombe sur les initiales. */
  img?: string;
};

const TEAM: Member[] = [
  { i: "YB", n: "Yassine Benali", r: "Fondateur · Stratégie", tag: "// Stratégie", d: 1, img: "/images/team/founder.png" },
  { i: "RM", n: "Rania M'rabet", r: "Cofondatrice · Design", tag: "// Design", d: 2 },
  { i: "OS", n: "Omar Saidi", r: "Cofondateur · Ingénierie", tag: "// Ingénierie", d: 3, dark: true },
  { i: "LF", n: "Lina Farah", r: "Lead technique · Web", tag: "// Web", d: 4 },
  { i: "TS", n: "Tomás Silva", r: "Lead technique · Applications", tag: "// Applications", d: 1 },
  { i: "AK", n: "Aïcha Khattabi", r: "Direction artistique", tag: "// Direction artistique", d: 2, dark: true },
  { i: "NV", n: "Nadia Vela", r: "SEO & conversion", tag: "// SEO", d: 3 },
  { i: "+7", n: "et 7 autres", r: "Développeurs · designers · support", tag: "// L'équipe", d: 4 },
];

/* Les objections qui restent une fois la présentation faite. */
const WHY = [
  {
    t: "Un prix fixe, annoncé avant de commencer",
    p: "Un périmètre fixe, un montant ferme, réparti en étapes que vous validez une par une. Pas de rallonge en cours de route.",
    d: <><path d="M20.6 13.4L12 22l-9-9V4a1 1 0 0 1 1-1h9z" /><circle cx="7.5" cy="7.5" r="1.3" /></>,
  },
  {
    t: "En ligne en 2 à 4 semaines",
    p: "Un site vitrine part en 2 à 4 semaines, une boutique en 4 à 8. Le délai est ferme et il figure sur votre devis.",
    d: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  },
  {
    t: "Vous parlez à ceux qui construisent",
    p: "Pas de chef de projet intermédiaire, pas de relais vers une équipe que vous n'avez jamais vue. Vous briefez directement les personnes qui écrivent le code.",
    d: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>,
  },
  {
    t: "Vitesse et référencement dès le départ",
    p: "Performance, structure technique et bases du SEO sont intégrées à la construction, pas vendues en option une fois le site livré.",
    d: <><path d="M12 20a8 8 0 1 1 8-8" /><path d="M12 12l4.5-3.5" /><circle cx="12" cy="12" r="1.4" /></>,
  },
  {
    t: "Le code et les accès vous appartiennent",
    p: "Domaine, hébergement, code source et comptes sont à votre nom et vous sont remis. Vous pouvez partir quand vous voulez, rien ne vous retient.",
    d: <><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  },
  {
    t: "Un accompagnement après la mise en ligne",
    p: "Chaque projet inclut un suivi après le lancement, puis une maintenance optionnelle : surveillance, mises à jour et sauvegardes.",
    d: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.6" /><path d="M14.5 9.5L18 6M9.5 14.5L6 18M14.5 14.5L18 18M9.5 9.5L6 6" /></>,
  },
];

export default function AboutPage() {
  useReveal();

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="about" />

      {/* ===================== LE STUDIO =====================
          Ouverture de la page : le texte porte le h1, la mosaïque donne un
          visage au studio avant la moindre demande. */}
      <section className="theme-cream brand-v2" id="studio">
        <div className="container">
          <div className="bv-inner reveal">
            <div className="bv-mosaic">
              <figure className="bv-shot tall">
                <Image
                  src="/images/manifesto-studio.jpg"
                  alt="L'atelier Wevtex à Casablanca, un poste de travail en cours de projet"
                  fill
                  sizes="(max-width: 960px) 45vw, 24vw"
                  priority
                />
                <figcaption className="bv-tag">L&apos;atelier · Casablanca</figcaption>
              </figure>
              <figure className="bv-shot">
                <Image
                  src="/images/feature/hero-shot.webp"
                  alt="Une boutique en ligne livrée par Wevtex, affichée sur un ordinateur portable et un téléphone"
                  fill
                  sizes="(max-width: 960px) 45vw, 24vw"
                />
                <figcaption className="bv-tag">Un projet livré</figcaption>
              </figure>
              <div className="bv-stat">
                <strong>200+</strong>
                <span>Projets livrés</span>
              </div>
            </div>

            <div className="bv-body">
              <span className="eyebrow line-eyebrow">Le studio</span>
              <h1 className="h-section" style={{ marginTop: 14 }}>
                Une agence web,<br />pas une <em className="hl-line">usine à sites</em>
              </h1>
              <p className="bv-p">
                Wevtex est une agence basée à Casablanca. Nous concevons des sites rapides, des boutiques
                en ligne et des applications sur mesure, puis nous les rendons visibles avec le
                référencement et la publicité, pour des entreprises au Maroc et à l&apos;international.
              </p>
              <p className="bv-p">
                Stratégie, design, développement et SEO sont dans la même équipe. Personne ne repasse votre
                projet à un service voisin, et vous repartez avec un site dont vous possédez le code, les
                accès et le nom de domaine.
              </p>
              <ul className="bv-facts">
                <li>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="2.6" /></svg>
                  Basés à Casablanca
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="3" width="7" height="7" rx="1.6" /><rect x="14" y="3" width="7" height="7" rx="1.6" /><rect x="3" y="14" width="7" height="7" rx="1.6" /><rect x="14" y="14" width="7" height="7" rx="1.6" /></svg>
                  Huit prestations
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" /></svg>
                  Maroc &amp; international
                </li>
              </ul>
              <a href={SERVICES_URL} className="btn btn-outline bv-cta">
                Voir nos prestations
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== L'ÉQUIPE ===================== */}
      <section className="theme-paper team-sec" id="equipe">
        <div className="container">
          <div className="ic-head reveal">
            <span className="eyebrow line-eyebrow-center">L&apos;équipe</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Quatorze personnes, <em className="hl-line">aucun relais</em>
            </h2>
            <p className="ic-sub">
              Les mêmes interlocuteurs du premier échange à la mise en ligne, puis après.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => (
              <div className={m.dark ? "team-card dark reveal" : "team-card reveal"} data-delay={m.d} key={m.n}>
                <div className="team-photo">
                  {m.img ? (
                    <Image src={m.img} alt={`${m.n}, ${m.r}`} width={640} height={800} sizes="(max-width: 980px) 45vw, 23vw" />
                  ) : (
                    <>
                      <div className="initials">{m.i}</div>
                      <div className="placeholder">{m.tag}</div>
                    </>
                  )}
                </div>
                <div className="team-info">
                  <div className="name">{m.n}</div>
                  <div className="role">{m.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== POURQUOI NOUS ===================== */}
      <section className="theme-cream whyus" id="pourquoi-nous">
        <div className="container">
          <div className="ic-head reveal">
            <span className="eyebrow line-eyebrow-center">Pourquoi nous</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Six raisons de nous confier <em className="hl-line">votre projet</em>
            </h2>
            <p className="ic-sub">
              Ce qui change concrètement, du devis jusqu&apos;au suivi après le lancement.
            </p>
          </div>
          <div className="why-grid">
            {WHY.map((w, i) => (
              <div className="why-card reveal" data-delay={(i % 3) + 1} key={w.t}>
                <div className="why-ico">
                  <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{w.d}</svg>
                </div>
                <h3>{w.t}</h3>
                <p>{w.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ON EN PARLE ===================== */}
      <CtaBand
        heading={<>Parlons de <em className="hl-em">votre projet</em></>}
        text={
          <>
            Décrivez-nous ce que vous voulez lancer, nous revenons vers vous sous 24 heures avec un
            périmètre, un délai et un prix fixe. L&apos;échange est gratuit et sans engagement.
          </>
        }
      />

      <SiteFooter />

      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

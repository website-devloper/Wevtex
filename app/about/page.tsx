"use client";

/**
 * Wevtex — À propos.
 *
 * Structure de la page, dans l'ordre où un visiteur se décide :
 *   hero → le studio (photos) → manifeste → principes → l'équipe →
 *   qui vous accompagne → pourquoi nous → comparatif → parcours → CTA.
 *
 * Tout le style vient de wevtex-home.css ; les seules classes propres à
 * cette page sont dans le bloc « ABOUT » ajouté en fin de feuille.
 */

import Image from "next/image";
import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { useReveal } from "../../components/wevtex/useReveal";
import { HOME_URL, CONTACT_URL, PORTFOLIO_URL, WHATSAPP_URL } from "@/lib/site-links";

const VALUES = [
  {
    n: "i",
    h: <>On mesure en <em>chiffre d&apos;affaires</em>,<br />pas en pixels.</>,
    p: "Chaque projet commence par la même question : quel résultat business cela doit-il déplacer ? Si le travail ne se rattache pas à un chiffre qui compte pour vous, nous vous le disons, et nous ne prenons pas la mission.",
  },
  {
    n: "ii",
    h: <>Des profils <em>seniors</em>,<br />uniquement.</>,
    p: "Aucun junior à qui confier votre compte. L'équipe qui vous reçoit est celle qui livre. C'est cette expérience qui fait la qualité du résultat, pas la taille de l'agence.",
  },
  {
    n: "iii",
    h: <>Un nombre de projets<br />limité. <em>Volontairement.</em></>,
    p: "Nous plafonnons les missions en cours. C'est la seule façon de garder des réponses en moins de quatre heures, des démos chaque semaine et une équipe assez disponible pour bien faire.",
  },
  {
    n: "iv",
    h: <>Indépendants.<br />Et <em>joignables.</em></>,
    p: "Pas d'investisseurs, pas de pression de sortie. Nous répondons à deux interlocuteurs : nos clients et notre équipe. Cette structure nous permet de refuser les projets mal engagés et d'accepter les bons.",
  },
];

/* Ce que le visiteur se demande juste avant le comparatif : pourquoi nous. */
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

/* Le comparatif répond à « pourquoi pas moins cher » avant la page tarifs. */
const COMPARISON_ROWS = [
  { label: "Délai", us: "2 à 4 semaines, ferme", agency: "2 à 4 mois", free: "Sans date d'engagement" },
  { label: "Prix", us: "Fixe, annoncé", agency: "Devis sur demande", free: "À l'heure, variable" },
  { label: "Qui réalise", us: "L'équipe rencontrée", agency: "Juniors ou sous-traitance", free: "Une seule personne" },
  { label: "Après le lancement", us: "Suivi inclus", agency: "Forfait obligatoire", free: "Souvent injoignable" },
  { label: "Vitesse et SEO", us: "Intégrés dès le départ", agency: "Option payante", free: "Rarement traités" },
  { label: "Propriété du code", us: "La vôtre, entièrement", agency: "Liée à leur CMS", free: "Non documentée" },
];

type Member = {
  i: string;
  n: string;
  r: string;
  tag: string;
  d: number;
  dark?: boolean;
  /* Déposez le portrait dans /public/images/team/ et renseignez-le ici ;
     sans photo, la carte retombe sur les initiales. */
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

const TIMELINE = [
  { y: "2019", h: "Création", p: "Trois opérationnels, la même lassitude face aux agences qui livrent des gabarits. Trois missions la première année." },
  { y: "2021", h: "Au-delà du Maroc", p: "Premiers clients à l'international, avec des projets suivis à distance de bout en bout." },
  { y: "2023", h: "Une offre complète", p: "Le SEO, la publicité et l'automatisation rejoignent la création de sites et d'applications." },
  { y: "2025", h: "Une équipe de 14", p: "L'équipe s'étoffe et s'organise en distanciel, avec des livraisons cadencées chaque semaine." },
  { y: "2026", h: "Aujourd'hui", p: "Plus de 200 projets livrés, une quarantaine de secteurs, et toujours la même façon de travailler." },
];

export default function AboutPage() {
  useReveal();

  return (
    <div className="wevtex mode-light">
      <SiteHeader current="about" />

      {/* HERO */}
      <section className="theme-cream page-hero">
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb"><a href={HOME_URL} style={{ color: "inherit" }}>Accueil</a> &nbsp;/&nbsp; À propos</div>
            <h1>Un atelier,<br />pas une <em>usine.</em></h1>
            <p className="lead">
              Wevtex est une agence web basée à Casablanca. Nous concevons des sites rapides, des boutiques
              en ligne et des applications sur mesure, puis nous les rendons visibles avec le référencement
              et la publicité, pour des entreprises au Maroc et à l&apos;international.
            </p>
            <div className="page-hero-meta">
              <div><span className="label">Création</span><div className="val">2019 · Casablanca</div></div>
              <div><span className="label">Équipe</span><div className="val">14 personnes</div></div>
              <div><span className="label">Expertises</span><div className="val">Web, applications, SEO</div></div>
              <div><span className="label">Clients</span><div className="val">Maroc &amp; international</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* LE STUDIO — présentation de la marque, en images.
          La page enchaînait quatre sections de texte avant le moindre visuel ;
          ce bloc donne un visage au studio avant de demander quoi que ce soit. */}
      <section className="theme-cream brand-v2">
        <div className="container">
          <div className="bv-inner reveal">
            <div className="bv-mosaic">
              <figure className="bv-shot tall">
                <Image
                  src="/images/manifesto-studio.jpg"
                  alt="L'atelier Wevtex à Casablanca, un poste de travail en cours de projet"
                  fill
                  sizes="(max-width: 960px) 45vw, 24vw"
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

            <div>
              <span className="eyebrow line-eyebrow">Le studio</span>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                Une équipe réduite,<br />des projets <em className="hl-line">suivis de près</em>
              </h2>
              <p className="bv-p">
                Nous sommes quatorze : stratégie, design, développement et référencement, sous le même toit
                et sur le même canal de discussion. Personne ne repasse votre projet à un service voisin,
                ce qui explique la plupart de nos délais.
              </p>
              <p className="bv-p">
                Concrètement, vous repartez avec un site rapide, structuré pour Google, dont vous possédez
                le code, les accès et le nom de domaine, et avec des interlocuteurs qui restent joignables
                une fois le site en ligne.
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
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTE */}
      <section className="theme-cream manifesto">
        <div className="container">
          <div className="manifesto-grid reveal">
            <div className="manifesto-meta">
              <span className="eyebrow">// 01 — Origine</span>
              <div className="num">2019</div>
              <span className="caption">Fondée à Casablanca<br />par trois anciens opérationnels</span>
            </div>
            <h2>
              Nous avons lancé Wevtex parce que<br />
              nous en avions assez des agences<br />
              qui traitent le <em>métier</em> comme un coût<br />
              et les clients comme une file d&apos;attente.
            </h2>
          </div>
        </div>
      </section>

      {/* PRINCIPES */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 02 — Principes</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Ce que nous<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>défendons.</span></h2>
            </div>
            <p className="lead">
              Quatre convictions qui se retrouvent dans chaque brief, chaque ligne de code et chaque message
              que nous envoyons à un client.
            </p>
          </div>
          <div className="values-list reveal">
            {VALUES.map((v, i) => (
              <div className="value-row" key={i}>
                <div className="num">{v.n}</div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'ÉQUIPE */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 03 — L&apos;équipe</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Quatorze personnes.<br /><span className="serif" style={{ color: "var(--accent)" }}>Aucun relais.</span></h2>
            </div>
            <p className="lead">
              Stratégie, design et développement dans la même équipe, avec les mêmes interlocuteurs du
              premier échange à la mise en ligne.
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

      {/* QUI VOUS ACCOMPAGNE — un visage et un nom avant la demande finale. */}
      <section className="theme-paper founder-v2">
        <div className="container">
          <div className="fd-inner reveal">
            <div className="fd-photo">
              <Image src="/images/team/founder.png" alt="Le fondateur de Wevtex" width={640} height={800} sizes="(max-width: 820px) 60vw, 320px" />
            </div>
            <div className="fd-body">
              <span className="eyebrow line-eyebrow">Qui vous accompagne</span>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                Vous parlerez aux personnes<br />qui <em className="hl-em">réalisent le projet</em>
              </h2>
              <p className="fd-p">
                Pas de chef de projet intermédiaire, pas de relais vers une équipe que vous n&apos;avez jamais
                rencontrée. Vous nous briefez directement, et ce sont les mêmes personnes qui écrivent le
                code et restent joignables après la mise en ligne.
              </p>
              <p className="fd-sign">Wevtex — Casablanca, Maroc</p>
              <a href={CONTACT_URL} className="btn btn-outline">
                Nous écrire directement
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="theme-cream whyus" id="pourquoi-nous">
        <div className="container">
          <div className="cmp-head reveal">
            <span className="eyebrow line-eyebrow">Pourquoi nous</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Six raisons de nous<br />confier <em className="hl-line">votre projet</em>
            </h2>
          </div>
          <div className="why-grid reveal">
            {WHY.map((w) => (
              <div className="why-card" key={w.t}>
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

      {/* COMPARATIF */}
      <section className="theme-paper compare-v2" id="comparatif">
        <div className="container">
          <div className="cmp-head reveal">
            <span className="eyebrow line-eyebrow">Le comparatif</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Ce qui nous distingue<br />des <em className="hl-em">autres options</em>
            </h2>
          </div>
          <div className="cmp-scroll reveal">
            <table className="cmp-table">
              <caption>Wevtex comparé à une agence classique et à un freelance</caption>
              <thead>
                <tr>
                  <th scope="col"><span className="cmp-hidden">Critère</span></th>
                  <th scope="col" className="cmp-us">Wevtex</th>
                  <th scope="col">Agence classique</th>
                  <th scope="col">Freelance</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td className="cmp-us">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                      {r.us}
                    </td>
                    <td>{r.agency}</td>
                    <td>{r.free}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 04 — Parcours</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Depuis 2019.<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>200 projets.</span></h2>
            </div>
            <p className="lead">Une courte histoire de ce que nous avons construit, et de ce que nous en avons appris.</p>
          </div>
          <div className="timeline reveal">
            {TIMELINE.map((t) => (
              <div className="timeline-item" style={{ background: "var(--bg-1)", borderColor: "var(--hairline-d)" }} key={t.y}>
                <div className="year">{t.y}</div>
                <h5 style={{ color: "var(--ink-on-dark)" }}>{t.h}</h5>
                <p style={{ color: "var(--ink-on-dark-2)" }}>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-cream cta" style={{ color: "var(--ink-on-cream)" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent" style={{ color: "var(--accent)" }}>// 05 — Travaillons ensemble</span>
            <h2 style={{ marginTop: 28, color: "var(--ink-on-cream)" }}>Parlons de<br />votre <em>projet.</em></h2>
            <p className="lead" style={{ color: "var(--ink-on-cream-2)" }}>
              Décrivez-nous ce que vous voulez lancer, et nous revenons vers vous sous 24 heures avec un
              périmètre, un délai et un prix fixe. L&apos;échange est gratuit et sans engagement.
            </p>
            <div className="cta-ctas">
              <a href={CONTACT_URL} className="btn btn-primary">
                Demander un devis gratuit
                <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
              </a>
              <a href={WHATSAPP_URL} className="btn btn-outline" target="_blank" rel="noopener">Écrire sur WhatsApp</a>
              <a href={PORTFOLIO_URL} className="btn btn-outline">Voir nos réalisations</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

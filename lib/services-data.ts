/**
 * Service detail content. Plain data (no JSX) so it can be imported by both the
 * server route (metadata + JSON-LD + generateStaticParams) and the client view.
 * One entry per service = one SEO-targeted page (/services/[slug]).
 *
 * The slugs here MUST match `SERVICES` in components/wevtex/homeContent.ts —
 * that list drives the home bento, the header mega menu, the footer column and
 * the /services list, and every one of those links here.
 *
 * Each service owns all of its sections: its own technologies, its own features
 * and specialities, its own process, its own sector headings, its own reasons to
 * choose us and its own price tiers. Nothing is shared boilerplate.
 */

import { SERVICES as MARKETED } from "@/components/wevtex/homeContent";

export type FeatureCard = { title: string; desc: string; checks: string[] };
export type FeatureSection = { eyebrow: string; title: string; titleEm?: string[]; subtitle?: string; cards: FeatureCard[] };
export type TechGroup = { label: string; items: string[]; desc?: string };
export type ProcessStep = { n: string; h: string; checks: string[]; d: string };
export type SectorGroup = { label: string; cases: string[] };
/** Formules tarifaires propres à la prestation. */
export type PriceTier = { name: string; price: string; note: string; features: string[]; featured?: boolean };
/** Arguments différenciants, propres à la prestation. */
export type WhyPoint = { h: string; p: string };

export type Service = {
  slug: string;
  /** Short label for cards/nav. */
  name: string;
  /** Primary keyword this page targets. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** H1 — use \n for a line break; words in `h1Em` render emphasized. */
  h1: string;
  h1Em: string[];
  intro: string;
  /** "Ce qui est inclus" — concrete deliverables. */
  includes: string[];
  /** Outcomes/benefits — why it matters to the client. */
  outcomes: { h: string; p: string }[];
  tags: string[];
  faqs: { q: string; a: string }[];
  // Rich detail sections — pages render them only when present.
  demo?: { title: string; subtitle?: string; caption?: string };
  featureSections?: FeatureSection[];
  tech?: { title: string; titleEm?: string[]; subtitle?: string; groups: TechGroup[] };
  process?: { title: string; titleEm?: string[]; subtitle?: string; steps: ProcessStep[] };
  sectors?: { title: string; titleEm?: string[]; subtitle?: string; groups: SectorGroup[] };
  pricing?: { title: string; titleEm?: string[]; subtitle?: string; tiers: PriceTier[]; footnote?: string };
  whyUs?: { title: string; titleEm?: string[]; subtitle?: string; points: WhyPoint[] };
};

const PRICE_FOOTNOTE =
  "Prix indicatifs de départ, en dirhams. Chaque projet reçoit un devis ferme après un échange de quinze minutes — sans engagement.";

export const SERVICES: Service[] = [
  /* ================================================================== */
  {
    slug: "website-creation",
    name: "Création de sites web",
    keyword: "création site web Maroc",
    metaTitle: "Création de sites web au Maroc | Wevtex",
    metaDescription:
      "Sites vitrines, boutiques en ligne et portails sur mesure en Next.js : rapides, sécurisés et prêts pour le référencement. Livraison en 2 à 4 semaines.",
    eyebrow: "Création de sites web",
    h1: "Des sites qui chargent vite\net transforment vos visiteurs.",
    h1Em: ["transforment", "vos", "visiteurs."],
    intro:
      "Nous concevons et développons des sites vitrines, des boutiques en ligne et des portails sur mesure. Modernes, ultra-rapides et pensés pour le référencement dès la première ligne de code — pas seulement jolis, mais construits pour vous apporter des clients.",
    includes: [
      "Un design sur mesure, pensé mobile d'abord, jamais un thème acheté.",
      "Une structure prête pour le référencement : balises, plan de site, données structurées.",
      "Un formulaire de contact relié à WhatsApp et à votre boîte mail.",
      "La remise complète : code, domaine et accès à votre nom.",
    ],
    outcomes: [
      { h: "Rapide par défaut", p: "Des Core Web Vitals au vert : vos pages s'affichent vite, Google le remarque, vos visiteurs restent." },
      { h: "Conçu pour convertir", p: "Une hiérarchie claire et des appels à l'action placés là où la décision se prend." },
      { h: "Facile à faire vivre", p: "Vous modifiez vos textes et vos images sans nous appeler, ni casser quoi que ce soit." },
    ],
    tags: ["Next.js", "React", "WordPress", "TypeScript", "SEO"],
    faqs: [
      { q: "Combien de temps prend la création du site ?", a: "Deux à quatre semaines pour un site vitrine, quatre à huit pour une boutique en ligne. Le délai est ferme et figuré sur le devis." },
      { q: "Puis-je modifier le contenu moi-même ?", a: "Oui. Vous recevez une interface simple pour vos textes, vos images et vos pages, avec une prise en main d'une heure." },
      { q: "Le site m'appartient-il vraiment ?", a: "Entièrement. Code, contenu, domaine et hébergement sont mis à votre nom et vous sont remis à la livraison." },
      { q: "Next.js ou WordPress ?", a: "Next.js pour la vitesse maximale et le sur-mesure ; WordPress quand vous voulez une administration familière et publier sans nous. Nous vous conseillons selon votre équipe et votre budget, pas selon nos préférences." },
    ],
    demo: {
      title: "La création de sites en action",
      subtitle: "Du site vitrine à la boutique complète, la même exigence de vitesse.",
      caption: "Un projet Next.js : rapide, accessible et prêt pour le référencement.",
    },
    featureSections: [
      {
        eyebrow: "Nos spécialités",
        title: "Ce que nous savons\nfaire de mieux.",
        titleEm: ["faire", "de mieux."],
        subtitle: "Quatre savoir-faire que nous appliquons à chaque site que nous livrons.",
        cards: [
          { title: "Sites vitrines", desc: "Votre activité présentée clairement, avec les preuves au bon endroit.", checks: ["Design sur mesure", "Mobile d'abord", "Textes structurés", "Contact en un clic"] },
          { title: "Boutiques en ligne", desc: "Catalogue, paiement sécurisé et gestion des stocks, sans friction.", checks: ["Paiement CMI & Stripe", "Gestion des stocks", "Tunnel d'achat court", "Suivi des commandes"] },
          { title: "Performance", desc: "La vitesse est une fonctionnalité, pas une option de fin de projet.", checks: ["Images optimisées", "Rendu statique", "Cache CDN", "Score Lighthouse 90+"] },
          { title: "Référencement technique", desc: "Google doit comprendre votre site avant de pouvoir le classer.", checks: ["Balises et titres", "Données structurées", "Plan de site & robots", "Analytics branché"] },
        ],
      },
    ],
    tech: {
      title: "Les technologies\nque nous utilisons.",
      titleEm: ["que", "nous utilisons."],
      subtitle: "Des outils modernes et durables, choisis pour la vitesse et pour ne pas vous enfermer.",
      groups: [
        { label: "Next.js & React", desc: "Notre socle par défaut : rendu statique, images optimisées et navigation instantanée entre les pages.", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
        { label: "WordPress", desc: "Quand vous voulez tout gérer vous-même, avec une administration que vos équipes connaissent déjà.", items: ["WordPress", "ACF", "WooCommerce", "Elementor"] },
        { label: "Contenu & e-commerce", desc: "Vos textes, vos produits et vos paiements, en dirhams comme à l'international.", items: ["Strapi", "Sanity", "Stripe", "CMI"] },
        { label: "Hébergement & mesure", desc: "Un site rapide partout, sauvegardé, surveillé et mesuré dès le premier jour.", items: ["Vercel", "CDN", "SSL", "Analytics"] },
      ],
    },
    process: {
      title: "Comment se déroule\nla création.",
      titleEm: ["la", "création."],
      subtitle: "Cinq étapes, des points réguliers, et vous validez avant chaque passage à la suite.",
      steps: [
        { n: "01", h: "Cadrage", d: "1–2 jours", checks: ["Vos objectifs", "Vos concurrents", "Périmètre et devis ferme"] },
        { n: "02", h: "Arborescence & textes", d: "2–4 jours", checks: ["Plan des pages", "Trame de contenu", "Mots-clés visés"] },
        { n: "03", h: "Design", d: "3–5 jours", checks: ["Maquettes réelles", "Vos retours", "Validation avant code"] },
        { n: "04", h: "Développement", d: "1–2 semaines", checks: ["Intégration responsive", "Optimisation vitesse", "Formulaires et suivi"] },
        { n: "05", h: "Mise en ligne", d: "1–2 jours", checks: ["Tests sur mobile", "Référencement vérifié", "Formation d'une heure"] },
      ],
    },
    sectors: {
      title: "La création de sites,\nsecteur par secteur.",
      titleEm: ["secteur", "par secteur."],
      subtitle: "Le même savoir-faire, adapté à la façon dont vos clients décident vraiment.",
      groups: [
        { label: "E-commerce & commerce de détail", cases: ["Catalogue et fiches produits", "Paiement CMI et Stripe", "Retrait en boutique"] },
        { label: "Tourisme & hôtellerie", cases: ["Réservation directe", "Site multilingue", "Galeries et visites"] },
        { label: "Services professionnels", cases: ["Prise de rendez-vous", "Références et preuves", "Formulaire qualifié"] },
        { label: "Santé & bien-être", cases: ["Présentation des soins", "Fiches praticiens", "Prise de rendez-vous"] },
        { label: "Industrie & logistique", cases: ["Catalogue technique", "Demande de devis B2B", "Espace documents"] },
        { label: "Éducation & e-learning", cases: ["Présentation des formations", "Inscription en ligne", "Espace élèves"] },
        { label: "Création, médias & tech", cases: ["Portfolio soigné", "Pages produit SaaS", "Blog et actualités"] },
        { label: "Secteur public & associations", cases: ["Site accessible RGAA", "Dons en ligne", "Actualités et appels"] },
      ],
    },
    whyUs: {
      title: "Pourquoi nous confier\nvotre site.",
      titleEm: ["votre", "site."],
      subtitle: "Ce qui change concrètement par rapport à un thème acheté ou à un prestataire injoignable.",
      points: [
        { h: "Un prix fixe, annoncé", p: "Le devis est ferme avant de commencer. Pas de rallonge en cours de route, pas de surprise à la livraison." },
        { h: "Livré en semaines, pas en mois", p: "Deux à quatre semaines pour un site vitrine, avec une date d'ouverture engagée dès le devis." },
        { h: "Vous parlez à ceux qui codent", p: "Pas de chef de projet intermédiaire : vous briefez directement les personnes qui construisent votre site." },
        { h: "Rien ne vous enferme", p: "Code, domaine, hébergement et accès sont à vous. Vous pouvez partir demain sans rien perdre." },
      ],
    },
    pricing: {
      title: "Des prix clairs\npour votre site.",
      titleEm: ["pour", "votre site."],
      subtitle: "Trois formules, un prix ferme, aucune ligne cachée.",
      tiers: [
        { name: "Vitrine", price: "990", note: "Jusqu'à 5 pages · livré en 7 à 14 jours", features: ["Design sur mesure", "Jusqu'à 5 pages responsives", "Référencement de base", "Formulaire et WhatsApp", "1 mois d'accompagnement"] },
        { name: "Business", price: "6 000", note: "Jusqu'à 15 pages · livré en 3 à 4 semaines", featured: true, features: ["Tout de la formule Vitrine", "Jusqu'à 15 pages", "Rédaction des contenus", "Blog et actualités", "Référencement avancé", "3 mois d'accompagnement"] },
        { name: "Boutique", price: "16 000", note: "E-commerce · livré en 4 à 8 semaines", features: ["Catalogue et fiches produits", "Paiement CMI et Stripe", "Gestion des stocks", "Tunnel d'achat optimisé", "Formation à la gestion", "6 mois d'accompagnement"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "seo",
    name: "Référencement naturel (SEO)",
    keyword: "agence SEO Maroc référencement naturel",
    metaTitle: "Référencement naturel (SEO) au Maroc | Wevtex",
    metaDescription:
      "Audit technique, stratégie de mots-clés et netlinking pour faire remonter votre site sur Google et attirer un trafic qui achète, mois après mois.",
    eyebrow: "Référencement naturel",
    h1: "Être trouvé par ceux\nqui cherchent déjà.",
    h1Em: ["qui", "cherchent déjà."],
    intro:
      "Le référencement naturel est le seul canal qui continue de travailler quand vous arrêtez de payer. Nous corrigeons ce qui bloque techniquement, écrivons ce que vos clients cherchent vraiment, et construisons l'autorité qui vous fait passer devant.",
    includes: [
      "Un audit technique complet, avec les correctifs appliqués et non seulement listés.",
      "Une stratégie de mots-clés fondée sur l'intention d'achat, pas sur le volume brut.",
      "L'optimisation de vos pages existantes et la création de celles qui manquent.",
      "Un rapport mensuel lisible : positions, trafic, contacts générés.",
    ],
    outcomes: [
      { h: "Un trafic qui dure", p: "Une position gagnée continue d'apporter des visiteurs des mois après, sans budget publicitaire." },
      { h: "Des visiteurs qualifiés", p: "Nous visons les requêtes proches de l'achat, pas celles qui gonflent les statistiques." },
      { h: "Des progrès mesurés", p: "Vous voyez chaque mois ce qui a bougé, ce qui a été fait et ce qui vient ensuite." },
    ],
    tags: ["Audit technique", "Mots-clés", "Contenu", "Netlinking"],
    faqs: [
      { q: "En combien de temps voit-on des résultats ?", a: "Les premiers mouvements apparaissent vers le troisième mois, les gains significatifs entre le sixième et le neuvième. Le référencement se construit, il ne s'achète pas." },
      { q: "Garantissez-vous la première place ?", a: "Non, et personne ne le peut sérieusement. Nous nous engageons sur le travail effectué et sur sa transparence, pas sur une position que seul Google décide." },
      { q: "Faut-il refaire mon site ?", a: "Pas forcément. L'audit dit si votre site actuel peut être corrigé ou s'il vaut mieux le reconstruire — et nous le disons franchement." },
    ],
    demo: {
      title: "Le référencement en action",
      subtitle: "Ce que nous regardons, corrigeons et suivons chaque mois.",
      caption: "Progression des positions sur les requêtes visées.",
    },
    featureSections: [
      {
        eyebrow: "Nos spécialités",
        title: "Les quatre leviers\ndu référencement.",
        titleEm: ["du", "référencement."],
        subtitle: "Aucun ne suffit seul. Nous les travaillons ensemble, dans cet ordre.",
        cards: [
          { title: "Technique", desc: "Ce qui empêche Google de lire et d'aimer votre site.", checks: ["Vitesse et Core Web Vitals", "Indexation et exploration", "Données structurées", "Version mobile"] },
          { title: "Mots-clés", desc: "Ce que vos clients tapent réellement avant d'acheter.", checks: ["Analyse d'intention", "Étude de la concurrence", "Requêtes longue traîne", "Plan de contenu"] },
          { title: "Contenu", desc: "Des pages qui répondent mieux que celles déjà classées.", checks: ["Optimisation des pages", "Pages manquantes créées", "Maillage interne", "Contenu rédigé en français"] },
          { title: "Autorité", desc: "Les liens et les signaux qui vous font passer devant.", checks: ["Netlinking qualitatif", "Annuaires pertinents", "Relations presse", "Suivi des liens"] },
        ],
      },
    ],
    tech: {
      title: "Les outils\nqui nous servent.",
      titleEm: ["qui", "nous servent."],
      subtitle: "Des données, pas des intuitions : chaque décision s'appuie sur un chiffre.",
      groups: [
        { label: "Analyse", desc: "Comprendre d'où vient le trafic et ce qu'il fait.", items: ["Search Console", "GA4", "Looker Studio"] },
        { label: "Recherche", desc: "Trouver les requêtes qui valent le travail.", items: ["Ahrefs", "Semrush", "Google Trends"] },
        { label: "Technique", desc: "Détecter ce qui bloque l'exploration et la vitesse.", items: ["Screaming Frog", "PageSpeed", "Schema.org"] },
        { label: "Suivi", desc: "Mesurer les positions et prouver la progression.", items: ["Rank tracking", "Logs serveur", "Rapports mensuels"] },
      ],
    },
    process: {
      title: "Comment se déroule\nune mission SEO.",
      titleEm: ["une", "mission SEO."],
      subtitle: "Un premier mois de remise à plat, puis un rythme mensuel régulier.",
      steps: [
        { n: "01", h: "Audit", d: "1 semaine", checks: ["Analyse technique", "État des positions", "Analyse concurrentielle"] },
        { n: "02", h: "Stratégie", d: "3–5 jours", checks: ["Mots-clés prioritaires", "Plan de contenu", "Objectifs chiffrés"] },
        { n: "03", h: "Corrections", d: "2–3 semaines", checks: ["Correctifs techniques", "Optimisation des pages", "Maillage interne"] },
        { n: "04", h: "Contenu & liens", d: "en continu", checks: ["Nouvelles pages", "Netlinking", "Mises à jour"] },
        { n: "05", h: "Rapport", d: "chaque mois", checks: ["Positions et trafic", "Actions réalisées", "Priorités du mois suivant"] },
      ],
    },
    sectors: {
      title: "Le référencement,\nsecteur par secteur.",
      titleEm: ["secteur", "par secteur."],
      subtitle: "Les requêtes, la concurrence et le cycle d'achat changent d'un métier à l'autre.",
      groups: [
        { label: "E-commerce & commerce de détail", cases: ["Pages catégories", "Fiches produits", "Requêtes marque"] },
        { label: "Tourisme & hôtellerie", cases: ["Requêtes saisonnières", "Pages destinations", "Référencement multilingue"] },
        { label: "Services professionnels", cases: ["Requêtes métier", "Contenu d'expertise", "Pages par ville"] },
        { label: "Santé & bien-être", cases: ["Requêtes symptômes", "Pages spécialités", "Sources et confiance"] },
        { label: "Industrie & logistique", cases: ["Requêtes techniques", "Pages solutions", "Longue traîne B2B"] },
        { label: "Éducation & e-learning", cases: ["Requêtes formations", "Contenu pédagogique", "Pages diplômes"] },
        { label: "Création, médias & tech", cases: ["Requêtes produit", "Contenu de fond", "Autorité thématique"] },
        { label: "Secteur public & associations", cases: ["Requêtes d'information", "Accessibilité technique", "Contenu institutionnel"] },
      ],
    },
    whyUs: {
      title: "Pourquoi nous confier\nvotre référencement.",
      titleEm: ["votre", "référencement."],
      subtitle: "Le SEO attire les promesses faciles. Voici ce que nous faisons différemment.",
      points: [
        { h: "Nous corrigeons, pas seulement conseillons", p: "L'audit ne vous laisse pas une liste de tâches à faire faire ailleurs : nous appliquons les correctifs nous-mêmes." },
        { h: "Aucune promesse de position", p: "Nous nous engageons sur un volume de travail précis et transparent, jamais sur une place que Google seul décide." },
        { h: "Des rapports qu'on comprend", p: "Pas de tableau de bord illisible : ce qui a été fait, ce que ça a donné, ce qui suit. En une page." },
        { h: "Sans engagement long", p: "Trois mois minimum le temps que le travail porte, puis mois par mois. Vous partez quand vous voulez, avec tout." },
      ],
    },
    pricing: {
      title: "Des forfaits SEO\nsans engagement long.",
      titleEm: ["sans", "engagement long."],
      subtitle: "Trois rythmes selon la concurrence de votre marché.",
      tiers: [
        { name: "Essentiel", price: "1 500", note: "Par mois · 3 mois minimum", features: ["Audit technique initial", "10 mots-clés suivis", "Optimisation des pages", "2 contenus par mois", "Rapport mensuel"] },
        { name: "Croissance", price: "3 500", note: "Par mois · 3 mois minimum", featured: true, features: ["Tout de la formule Essentiel", "30 mots-clés suivis", "4 contenus par mois", "Netlinking actif", "Suivi de la concurrence", "Point mensuel en visio"] },
        { name: "Concurrentiel", price: "6 500", note: "Par mois · marchés disputés", features: ["Tout de la formule Croissance", "Mots-clés illimités", "8 contenus par mois", "Relations presse", "SEO technique avancé", "Accompagnement dédié"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "local-seo",
    name: "Google Maps & SEO local",
    keyword: "référencement Google Maps Maroc",
    metaTitle: "Google Maps & référencement local | Wevtex",
    metaDescription:
      "Fiche Google Business optimisée, position renforcée sur Maps et avis clients : captez les recherches qui se font autour de vous.",
    eyebrow: "Google Maps & SEO local",
    h1: "Apparaître quand on\ncherche près de chez vous.",
    h1Em: ["cherche", "près de chez vous."],
    intro:
      "Quatre recherches locales sur cinq débouchent sur une visite ou un appel. Nous optimisons votre fiche Google Business, renforçons votre position sur Maps et organisons vos avis, pour que ce soit vous qu'on trouve — pas le concurrent d'à côté.",
    includes: [
      "La création ou la reprise complète de votre fiche Google Business.",
      "L'optimisation de votre position sur Maps dans votre zone de chalandise.",
      "L'inscription cohérente dans les annuaires qui comptent au Maroc.",
      "Une méthode simple pour collecter des avis clients en continu.",
    ],
    outcomes: [
      { h: "Des appels directs", p: "Une fiche bien classée génère des appels et des itinéraires sans passer par votre site." },
      { h: "Visible dans votre zone", p: "Vous remontez sur les recherches qui se font à quelques kilomètres de votre porte." },
      { h: "Une réputation tenue", p: "Des avis réguliers et des réponses soignées : la première chose que voit un client hésitant." },
    ],
    tags: ["Google Business", "Maps", "Avis clients", "Annuaires"],
    faqs: [
      { q: "Fonctionne-t-il si je n'ai pas de boutique ?", a: "Oui. Une zone d'intervention peut être déclarée sans adresse affichée : c'est le cas des artisans, plombiers ou consultants qui se déplacent." },
      { q: "Combien de temps avant de remonter sur Maps ?", a: "Les premiers effets se voient souvent en quatre à six semaines. La position se consolide ensuite avec les avis et la régularité des publications." },
      { q: "Gérez-vous les avis négatifs ?", a: "Nous préparons des réponses et une méthode pour en réduire l'impact. Un avis négatif bien traité rassure souvent plus qu'une note parfaite." },
    ],
    demo: {
      title: "Le référencement local en action",
      subtitle: "Ce que voit un client qui vous cherche depuis son téléphone.",
      caption: "Fiche Google Business optimisée et position sur Maps.",
    },
    featureSections: [
      {
        eyebrow: "Nos spécialités",
        title: "Ce qui fait remonter\nune fiche locale.",
        titleEm: ["une", "fiche locale."],
        subtitle: "Quatre chantiers qui pèsent réellement dans le classement local de Google.",
        cards: [
          { title: "Fiche Google Business", desc: "La vitrine que 80 % de vos prospects verront en premier.", checks: ["Catégories exactes", "Horaires et zone", "Photos et produits", "Publications régulières"] },
          { title: "Position sur Maps", desc: "Remonter dans le trio affiché en haut des résultats.", checks: ["Zone de chalandise", "Pages locales", "Signaux de proximité", "Suivi par quartier"] },
          { title: "Citations & annuaires", desc: "Vos coordonnées identiques partout, sinon Google doute.", checks: ["Annuaires marocains", "Cohérence nom et adresse", "Nettoyage des doublons", "Réseaux sociaux"] },
          { title: "Avis clients", desc: "La preuve sociale qui déclenche l'appel ou la visite.", checks: ["Collecte automatisée", "Réponses rédigées", "Alertes en temps réel", "Gestion des litiges"] },
        ],
      },
    ],
    tech: {
      title: "Les outils\ndu référencement local.",
      titleEm: ["du", "référencement local."],
      subtitle: "Mesurer la visibilité rue par rue, pas seulement à l'échelle du pays.",
      groups: [
        { label: "Google", desc: "La source de vérité pour tout ce qui est local.", items: ["Google Business", "Maps", "Search Console"] },
        { label: "Suivi local", desc: "Voir votre position selon l'endroit d'où l'on cherche.", items: ["Local Falcon", "BrightLocal", "Geo-grid"] },
        { label: "Avis", desc: "Collecter et répondre sans y passer vos journées.", items: ["Avis Google", "QR codes", "Relances SMS"] },
        { label: "Données", desc: "Aider Google à relier votre site à votre établissement.", items: ["Schema LocalBusiness", "NAP", "Pages locales"] },
      ],
    },
    process: {
      title: "Comment nous\nvous rendons visible.",
      titleEm: ["vous", "rendons visible."],
      subtitle: "Une mise en place en quelques semaines, puis un entretien mensuel léger.",
      steps: [
        { n: "01", h: "État des lieux", d: "2–3 jours", checks: ["Position actuelle sur Maps", "Fiches concurrentes", "Doublons et erreurs"] },
        { n: "02", h: "Optimisation", d: "1 semaine", checks: ["Fiche complétée", "Catégories et zone", "Photos et services"] },
        { n: "03", h: "Citations", d: "1–2 semaines", checks: ["Annuaires locaux", "Coordonnées uniformisées", "Liens vers le site"] },
        { n: "04", h: "Avis", d: "en continu", checks: ["Méthode de collecte", "Réponses rédigées", "Suivi de la note"] },
        { n: "05", h: "Entretien", d: "chaque mois", checks: ["Publications", "Suivi de position", "Rapport local"] },
      ],
    },
    sectors: {
      title: "Le SEO local,\nsecteur par secteur.",
      titleEm: ["secteur", "par secteur."],
      subtitle: "Une recherche locale ne se joue pas de la même façon selon le métier.",
      groups: [
        { label: "E-commerce & commerce de détail", cases: ["Produits sur la fiche", "Itinéraires", "Promotions locales"] },
        { label: "Tourisme & hôtellerie", cases: ["Photos et équipements", "Avis voyageurs", "Réservation depuis Maps"] },
        { label: "Services professionnels", cases: ["Horaires et contact", "Zone d'intervention", "Avis clients"] },
        { label: "Santé & bien-être", cases: ["Prise de rendez-vous", "Horaires de garde", "Avis patients"] },
        { label: "Industrie & logistique", cases: ["Sites et dépôts", "Horaires de livraison", "Contact commercial"] },
        { label: "Éducation & e-learning", cases: ["Portes ouvertes", "Localisation du campus", "Avis parents"] },
        { label: "Création, médias & tech", cases: ["Bureau et équipe", "Réalisations en photo", "Avis clients"] },
        { label: "Secteur public & associations", cases: ["Horaires d'accueil", "Points de collecte", "Événements locaux"] },
      ],
    },
    whyUs: {
      title: "Pourquoi nous confier\nvotre visibilité locale.",
      titleEm: ["votre", "visibilité locale."],
      subtitle: "Un domaine où beaucoup vendent une inscription et s'arrêtent là.",
      points: [
        { h: "Nous connaissons le terrain marocain", p: "Les annuaires qui comptent ici ne sont pas ceux des guides internationaux. Nous travaillons ceux qui pèsent vraiment." },
        { h: "Mesuré rue par rue", p: "Nous suivons votre position depuis plusieurs points de votre ville, pas depuis un serveur lointain qui dit toujours oui." },
        { h: "Les avis sans les faux", p: "Nous mettons en place une collecte auprès de vos vrais clients. Acheter des avis se voit, se sanctionne, et se retourne contre vous." },
        { h: "Un entretien léger", p: "Après la mise en place, quelques centaines de dirhams par mois suffisent à tenir la position." },
      ],
    },
    pricing: {
      title: "Des tarifs simples\npour être trouvé.",
      titleEm: ["pour", "être trouvé."],
      subtitle: "Une mise en place unique, puis un entretien mensuel léger.",
      tiers: [
        { name: "Mise en place", price: "790", note: "Une fois · sous 2 semaines", features: ["Création ou reprise de la fiche", "Catégories et zone optimisées", "Photos et services", "10 annuaires locaux", "Méthode de collecte d'avis"] },
        { name: "Entretien", price: "490", note: "Par mois · sans engagement", featured: true, features: ["Publications mensuelles", "Réponses aux avis", "Suivi de position", "Mise à jour des horaires", "Rapport mensuel"] },
        { name: "Multi-sites", price: "1 900", note: "Par mois · à partir de 3 établissements", features: ["Toutes les fiches gérées", "Cohérence entre points de vente", "Suivi par établissement", "Avis centralisés", "Rapport consolidé"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "ads",
    name: "Création & gestion de publicités",
    keyword: "agence Google Ads Facebook Maroc",
    metaTitle: "Google Ads & publicité Facebook au Maroc | Wevtex",
    metaDescription:
      "Campagnes Google, Facebook et Instagram conçues pour un retour mesurable : ciblage, création, page d'atterrissage et suivi des conversions.",
    eyebrow: "Publicité en ligne",
    h1: "De la publicité qui\nse rembourse.",
    h1Em: ["se", "rembourse."],
    intro:
      "La publicité en ligne donne des résultats dès le premier jour — à condition de viser juste. Nous construisons vos campagnes Google, Facebook et Instagram, la page qui reçoit le clic, et le suivi qui dit exactement combien chaque dirham a rapporté.",
    includes: [
      "La création complète des campagnes, du ciblage aux visuels.",
      "Une page d'atterrissage dédiée, conçue pour transformer le clic payé.",
      "Le suivi des conversions installé et vérifié, jusqu'à l'appel ou l'achat.",
      "Un rapport mensuel qui rapporte le coût par contact obtenu.",
    ],
    outcomes: [
      { h: "Des résultats immédiats", p: "Contrairement au référencement, une campagne bien réglée apporte des demandes dès la première semaine." },
      { h: "Un budget maîtrisé", p: "Vous fixez l'enveloppe, nous optimisons ce qu'elle rapporte. Rien ne part sans être mesuré." },
      { h: "Un coût par client connu", p: "Vous savez ce que coûte un contact, et donc si l'opération vaut d'être amplifiée." },
    ],
    tags: ["Google Ads", "Meta Ads", "Landing page", "Tracking"],
    faqs: [
      { q: "Quel budget publicitaire prévoir ?", a: "Comptez au minimum 2 000 à 3 000 DH de budget média par mois pour obtenir des données exploitables. En dessous, les campagnes n'ont pas de quoi apprendre." },
      { q: "Le budget publicitaire est-il inclus ?", a: "Non. Nos honoraires couvrent la conception et la gestion ; le budget média est payé directement à Google ou Meta, à votre nom et sur votre carte." },
      { q: "Faut-il refaire ma page d'accueil ?", a: "Nous créons plutôt une page dédiée à la campagne. Envoyer du trafic payant vers une page d'accueil généraliste divise les conversions." },
    ],
    demo: {
      title: "La publicité en action",
      subtitle: "Du ciblage au contact reçu, la chaîne complète.",
      caption: "Tableau de suivi d'une campagne : coût par contact et volume.",
    },
    featureSections: [
      {
        eyebrow: "Nos spécialités",
        title: "Ce qui fait la différence\nentre dépenser et investir.",
        titleEm: ["entre", "dépenser", "et investir."],
        subtitle: "Quatre pièces indispensables. Il en manque une, et le budget se dissipe.",
        cards: [
          { title: "Ciblage", desc: "Parler aux gens qui peuvent réellement acheter chez vous.", checks: ["Intention de recherche", "Audiences similaires", "Zones géographiques", "Exclusions coûteuses"] },
          { title: "Création", desc: "Des visuels et des textes qui arrêtent le pouce.", checks: ["Visuels adaptés au format", "Accroches testées", "Variantes A/B", "Adaptation mobile"] },
          { title: "Page d'atterrissage", desc: "Le clic est payé : la page n'a pas droit à l'erreur.", checks: ["Page dédiée à la campagne", "Chargement instantané", "Formulaire court", "Preuves et garanties"] },
          { title: "Mesure", desc: "Sans suivi fiable, l'optimisation n'est que du ressenti.", checks: ["Conversions vérifiées", "Appels tracés", "Coût par contact", "Retour sur dépense"] },
        ],
      },
    ],
    tech: {
      title: "Les plateformes\nque nous pilotons.",
      titleEm: ["que", "nous pilotons."],
      subtitle: "Là où se trouve votre audience, avec la mesure qui va avec.",
      groups: [
        { label: "Recherche", desc: "Capter une intention déjà formulée.", items: ["Google Ads", "Bing Ads", "Google Shopping"] },
        { label: "Réseaux sociaux", desc: "Créer l'envie chez ceux qui ne vous cherchaient pas.", items: ["Facebook", "Instagram", "TikTok", "LinkedIn"] },
        { label: "Mesure", desc: "Relier chaque dirham dépensé à un résultat.", items: ["GA4", "Meta Pixel", "GTM", "Appels tracés"] },
        { label: "Conversion", desc: "Transformer le clic payé en contact réel.", items: ["Landing pages", "Tests A/B", "Formulaires", "WhatsApp"] },
      ],
    },
    process: {
      title: "Comment nous lançons\nvos campagnes.",
      titleEm: ["vos", "campagnes."],
      subtitle: "Deux semaines de préparation, puis une optimisation continue.",
      steps: [
        { n: "01", h: "Stratégie", d: "2–3 jours", checks: ["Objectif chiffré", "Audiences visées", "Budget et canaux"] },
        { n: "02", h: "Création", d: "3–5 jours", checks: ["Visuels et textes", "Page d'atterrissage", "Variantes à tester"] },
        { n: "03", h: "Installation", d: "2 jours", checks: ["Comptes et accès", "Suivi des conversions", "Vérification bout en bout"] },
        { n: "04", h: "Lancement", d: "1 semaine", checks: ["Diffusion progressive", "Surveillance quotidienne", "Premiers arbitrages"] },
        { n: "05", h: "Optimisation", d: "en continu", checks: ["Tests permanents", "Coupe des annonces faibles", "Rapport mensuel"] },
      ],
    },
    sectors: {
      title: "La publicité,\nsecteur par secteur.",
      titleEm: ["secteur", "par secteur."],
      subtitle: "Le canal, le message et le coût d'acquisition changent selon ce que vous vendez.",
      groups: [
        { label: "E-commerce & commerce de détail", cases: ["Google Shopping", "Panier abandonné", "Audiences similaires"] },
        { label: "Tourisme & hôtellerie", cases: ["Campagnes saisonnières", "Ciblage par pays", "Relance des visiteurs"] },
        { label: "Services professionnels", cases: ["Recherche à forte intention", "LinkedIn ciblé", "Formulaires qualifiés"] },
        { label: "Santé & bien-être", cases: ["Ciblage local strict", "Conformité des annonces", "Prise de rendez-vous"] },
        { label: "Industrie & logistique", cases: ["Requêtes techniques", "Demandes de devis", "Ciblage B2B"] },
        { label: "Éducation & e-learning", cases: ["Campagnes de rentrée", "Ciblage parents", "Inscriptions suivies"] },
        { label: "Création, médias & tech", cases: ["Essais gratuits", "Ciblage par centres d'intérêt", "Tests créatifs"] },
        { label: "Secteur public & associations", cases: ["Campagnes de dons", "Sensibilisation", "Recrutement de bénévoles"] },
      ],
    },
    whyUs: {
      title: "Pourquoi nous confier\nvos campagnes.",
      titleEm: ["vos", "campagnes."],
      subtitle: "Un métier où l'opacité est fréquente et coûte cher.",
      points: [
        { h: "Vos comptes vous appartiennent", p: "Les campagnes sont créées sur vos propres comptes Google et Meta. Si nous nous quittons, vous gardez tout : historique, audiences, apprentissage." },
        { h: "La page d'atterrissage est incluse", p: "Nous ne renvoyons pas le trafic payant vers une page inadaptée. Une page dédiée est créée avec la campagne." },
        { h: "Nous mesurons jusqu'au contact", p: "Pas seulement les clics : les appels, les formulaires et les messages WhatsApp sont tracés et attribués." },
        { h: "Honoraires fixes", p: "Un montant mensuel connu, pas un pourcentage du budget média qui nous pousserait à vous faire dépenser plus." },
      ],
    },
    pricing: {
      title: "Des honoraires fixes,\nbudget média à part.",
      titleEm: ["budget", "média à part."],
      subtitle: "Vous payez la plateforme directement. Nous facturons uniquement le pilotage.",
      tiers: [
        { name: "Lancement", price: "1 200", note: "Par mois · 1 canal", features: ["1 plateforme au choix", "Création des campagnes", "Page d'atterrissage incluse", "Suivi des conversions", "Rapport mensuel"] },
        { name: "Multicanal", price: "2 800", note: "Par mois · 2 à 3 canaux", featured: true, features: ["Google et Meta", "Visuels et textes renouvelés", "Tests A/B continus", "Relance des visiteurs", "Point mensuel en visio"] },
        { name: "Performance", price: "5 500", note: "Par mois · budgets importants", features: ["Tous canaux pertinents", "Stratégie d'acquisition complète", "Pages dédiées multiples", "Analyse du parcours d'achat", "Accompagnement dédié"] },
      ],
      footnote:
        "Honoraires de gestion uniquement. Le budget publicitaire est réglé directement à Google ou Meta, sur vos comptes et à votre nom.",
    },
  },

  /* ================================================================== */
  {
    slug: "mobile-apps",
    name: "Applications mobiles",
    keyword: "développement application mobile Maroc",
    metaTitle: "Développement d'applications mobiles | Wevtex",
    metaDescription:
      "Applications iOS et Android performantes développées avec Flutter : un seul code, deux plateformes, publication sur les stores prise en charge.",
    eyebrow: "Applications mobiles",
    h1: "Une application,\ndeux plateformes.",
    h1Em: ["deux", "plateformes."],
    intro:
      "Développer deux fois la même application coûte deux fois plus cher. Avec Flutter, nous écrivons un seul code qui tourne nativement sur iOS et Android, avec la même fluidité — et nous nous occupons de la publication sur les stores.",
    includes: [
      "Le design des écrans avant le développement, validé par vous.",
      "Une application native iOS et Android issue d'un seul code.",
      "La connexion à votre système existant : site, stock, paiement.",
      "La publication sur l'App Store et Google Play, comptes compris.",
    ],
    outcomes: [
      { h: "Un budget divisé", p: "Un seul développement au lieu de deux, pour un rendu natif sur les deux plateformes." },
      { h: "Présent sur l'écran d'accueil", p: "Une icône sur le téléphone de vos clients vaut mieux qu'un favori oublié." },
      { h: "Notifications directes", p: "Vous touchez vos utilisateurs sans passer par un algorithme ni acheter de la portée." },
    ],
    tags: ["Flutter", "iOS", "Android", "API"],
    faqs: [
      { q: "Pourquoi Flutter plutôt que du natif ?", a: "Un seul code pour les deux plateformes, pour un rendu et des performances équivalents au natif dans la grande majorité des cas. Le budget et les délais sont réduits de moitié." },
      { q: "Gérez-vous la publication sur les stores ?", a: "Oui, de bout en bout : création des comptes développeur, fiches, captures, conformité et soumission. Comptez une à deux semaines de validation côté Apple et Google." },
      { q: "Que se passe-t-il après la mise en ligne ?", a: "Trois mois d'accompagnement sont inclus. Ensuite, un forfait de maintenance couvre les mises à jour imposées par iOS et Android, qui sortent chaque année." },
    ],
    demo: {
      title: "L'application en action",
      subtitle: "Le même code, le même rendu, sur les deux plateformes.",
      caption: "Application Flutter : navigation fluide et interface native.",
    },
    featureSections: [
      {
        eyebrow: "Nos spécialités",
        title: "Ce que nous savons\nmettre dans une app.",
        titleEm: ["mettre", "dans une app."],
        subtitle: "Les fonctions que demandent la plupart des projets, éprouvées et prêtes.",
        cards: [
          { title: "Comptes & profils", desc: "Inscription, connexion et gestion des utilisateurs.", checks: ["Email et téléphone", "Connexion Google et Apple", "Profils et préférences", "Mot de passe oublié"] },
          { title: "Paiement", desc: "Encaisser dans l'application, en toute conformité.", checks: ["Cartes bancaires", "Abonnements", "Achats intégrés", "Historique des paiements"] },
          { title: "Notifications", desc: "Revenir vers l'utilisateur au bon moment.", checks: ["Notifications push", "Messages ciblés", "Programmation", "Statistiques d'ouverture"] },
          { title: "Hors ligne & données", desc: "Une application qui reste utile sans réseau.", checks: ["Mode hors ligne", "Synchronisation", "Cache local", "Géolocalisation"] },
        ],
      },
    ],
    tech: {
      title: "Les technologies\nde vos applications.",
      titleEm: ["de", "vos applications."],
      subtitle: "Un socle unique côté mobile, des services éprouvés côté serveur.",
      groups: [
        { label: "Mobile", desc: "Un code, deux plateformes, un rendu natif.", items: ["Flutter", "Dart", "iOS", "Android"] },
        { label: "Serveur", desc: "Les données, les comptes et la logique métier.", items: ["Firebase", "Supabase", "Node.js", "REST"] },
        { label: "Services", desc: "Ce qui rend l'application vivante au quotidien.", items: ["Push", "Stripe", "Maps", "Analytics"] },
        { label: "Publication", desc: "Passer la validation des stores sans allers-retours.", items: ["App Store", "Google Play", "TestFlight", "CI/CD"] },
      ],
    },
    process: {
      title: "Comment naît\nvotre application.",
      titleEm: ["votre", "application."],
      subtitle: "Du cadrage à la publication, avec une version testable à mi-parcours.",
      steps: [
        { n: "01", h: "Cadrage", d: "1 semaine", checks: ["Parcours utilisateur", "Fonctions prioritaires", "Devis ferme"] },
        { n: "02", h: "Design", d: "1–2 semaines", checks: ["Tous les écrans", "Prototype cliquable", "Validation avant code"] },
        { n: "03", h: "Développement", d: "4–8 semaines", checks: ["Version testable", "Points hebdomadaires", "Connexion aux services"] },
        { n: "04", h: "Tests", d: "1–2 semaines", checks: ["Test sur appareils réels", "Bêta TestFlight", "Corrections"] },
        { n: "05", h: "Publication", d: "1–2 semaines", checks: ["Fiches des stores", "Soumission", "Suivi de validation"] },
      ],
    },
    sectors: {
      title: "Les applications,\nsecteur par secteur.",
      titleEm: ["secteur", "par secteur."],
      subtitle: "Ce que l'application doit faire dépend entièrement de votre métier.",
      groups: [
        { label: "E-commerce & commerce de détail", cases: ["Commande en ligne", "Fidélité et points", "Suivi de livraison"] },
        { label: "Tourisme & hôtellerie", cases: ["Réservation et séjour", "Guide de destination", "Clé de chambre"] },
        { label: "Services professionnels", cases: ["Espace client", "Documents partagés", "Prise de rendez-vous"] },
        { label: "Santé & bien-être", cases: ["Rendez-vous et rappels", "Suivi patient", "Programmes de séances"] },
        { label: "Industrie & logistique", cases: ["Suivi de flotte", "Preuve de livraison", "Feuilles de route"] },
        { label: "Éducation & e-learning", cases: ["Cours et vidéos", "Quiz et progression", "Espace parents"] },
        { label: "Création, médias & tech", cases: ["Application produit", "Communauté", "Notifications ciblées"] },
        { label: "Secteur public & associations", cases: ["Signalements citoyens", "Dons mobiles", "Agenda des actions"] },
      ],
    },
    whyUs: {
      title: "Pourquoi nous confier\nvotre application.",
      titleEm: ["votre", "application."],
      subtitle: "Le mobile est le poste où les projets dérapent le plus souvent.",
      points: [
        { h: "Un devis ferme avant de coder", p: "Le périmètre est écrit et chiffré. Les évolutions en cours de route sont chiffrées à part, jamais imposées." },
        { h: "Une version testable à mi-parcours", p: "Vous manipulez l'application avant qu'elle ne soit finie. Les corrections coûtent bien moins cher à ce moment-là." },
        { h: "La publication comprise", p: "Les refus de l'App Store sont fréquents et déroutants. Nous gérons la soumission et les allers-retours jusqu'à la validation." },
        { h: "Le code source est à vous", p: "Livré, documenté et transférable. Un autre prestataire peut reprendre le projet sans repartir de zéro." },
      ],
    },
    pricing: {
      title: "Le budget\nd'une application.",
      titleEm: ["d'une", "application."],
      subtitle: "Trois niveaux d'ambition, chiffrés fermement après le cadrage.",
      tiers: [
        { name: "Essentielle", price: "12 000", note: "À partir de · 4 à 6 semaines", features: ["Jusqu'à 8 écrans", "iOS et Android", "Design inclus", "Publication sur les stores", "3 mois d'accompagnement"] },
        { name: "Complète", price: "28 000", note: "À partir de · 8 à 12 semaines", featured: true, features: ["Écrans illimités", "Comptes et profils", "Paiement intégré", "Notifications push", "Espace d'administration", "6 mois d'accompagnement"] },
        { name: "Sur mesure", price: "50 000", note: "À partir de · périmètre défini ensemble", features: ["Logique métier complexe", "Mode hors ligne complet", "Intégrations tierces", "Tableau de bord dédié", "Accompagnement prioritaire"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "desktop-apps",
    name: "Logiciels bureau",
    keyword: "développement logiciel sur mesure Maroc",
    metaTitle: "Logiciels Windows et macOS sur mesure | Wevtex",
    metaDescription:
      "Logiciels métier pour Windows et macOS : gestion, facturation, stock et reporting, adaptés à votre organisation et utilisables hors connexion.",
    eyebrow: "Logiciels bureau",
    h1: "Le logiciel qui suit\nvotre organisation.",
    h1Em: ["votre", "organisation."],
    intro:
      "Quand aucun logiciel du marché ne correspond à votre façon de travailler, la solution n'est pas de changer votre façon de travailler. Nous développons des applications Windows et macOS taillées pour vos processus, rapides, et qui fonctionnent même sans connexion.",
    includes: [
      "L'analyse de vos processus actuels avant toute ligne de code.",
      "Une application Windows et macOS avec installateur et mises à jour automatiques.",
      "La reprise de vos données existantes, Excel compris.",
      "La formation de vos équipes et la documentation d'utilisation.",
    ],
    outcomes: [
      { h: "Zéro abonnement par poste", p: "Vous payez le développement une fois, pas une licence mensuelle multipliée par vos salariés." },
      { h: "Fonctionne sans internet", p: "Vos équipes continuent de travailler quand la connexion tombe, la synchronisation se fait au retour." },
      { h: "Exactement vos processus", p: "Le logiciel épouse votre organisation, au lieu de vous forcer à entrer dans un moule générique." },
    ],
    tags: ["Windows", "macOS", "Hors ligne", "Reporting"],
    faqs: [
      { q: "Pourquoi pas un simple logiciel du marché ?", a: "Si un logiciel existant convient, nous vous le dirons — c'est moins cher pour vous. Le sur-mesure se justifie quand vos processus sont spécifiques ou quand les licences par poste deviennent plus coûteuses que le développement." },
      { q: "Peut-on récupérer nos données Excel ?", a: "Oui. La reprise des fichiers existants fait partie du projet : nous importons l'historique et vérifions la cohérence avant la mise en service." },
      { q: "Que se passe-t-il si vous n'êtes plus là ?", a: "Le code source vous est livré et documenté. N'importe quel développeur peut reprendre le projet, c'est précisément l'intérêt de ne pas dépendre d'un éditeur." },
    ],
    demo: {
      title: "Le logiciel en action",
      subtitle: "Une interface pensée pour la saisie rapide et l'usage quotidien.",
      caption: "Application de gestion : tableau de bord, saisie et exports.",
    },
    featureSections: [
      {
        eyebrow: "Nos spécialités",
        title: "Ce que fait\nun logiciel métier.",
        titleEm: ["un", "logiciel métier."],
        subtitle: "Les fonctions que réclament la plupart des entreprises que nous accompagnons.",
        cards: [
          { title: "Gestion & facturation", desc: "Le cœur administratif de votre activité, au même endroit.", checks: ["Devis et factures", "Clients et fournisseurs", "Règlements et relances", "Export comptable"] },
          { title: "Stock & production", desc: "Savoir ce que vous avez, où, et ce qu'il faut commander.", checks: ["Entrées et sorties", "Inventaires", "Alertes de seuil", "Codes-barres"] },
          { title: "Reporting", desc: "Les chiffres qui servent à décider, pas à remplir un classeur.", checks: ["Tableaux de bord", "Exports Excel et PDF", "Rapports planifiés", "Historique complet"] },
          { title: "Accès & traçabilité", desc: "Qui a le droit de faire quoi, et qui a fait quoi.", checks: ["Comptes et rôles", "Journal des actions", "Sauvegardes automatiques", "Restauration"] },
        ],
      },
    ],
    tech: {
      title: "Les technologies\nde vos logiciels.",
      titleEm: ["de", "vos logiciels."],
      subtitle: "Des applications légères et rapides, sans les lourdeurs habituelles.",
      groups: [
        { label: "Application", desc: "Un exécutable léger, pas un navigateur déguisé.", items: ["Tauri", "Rust", "React", "TypeScript"] },
        { label: "Données", desc: "Vos données restent chez vous, et restent lisibles.", items: ["SQLite", "PostgreSQL", "Sauvegardes"] },
        { label: "Synchronisation", desc: "Travailler hors ligne, se resynchroniser ensuite.", items: ["Mode hors ligne", "Sync différée", "Multi-postes"] },
        { label: "Déploiement", desc: "Installer et mettre à jour sans mobiliser un informaticien.", items: ["Installateur", "Mise à jour auto", "Windows", "macOS"] },
      ],
    },
    process: {
      title: "Comment se construit\nvotre logiciel.",
      titleEm: ["votre", "logiciel."],
      subtitle: "L'analyse pèse plus lourd que le code : c'est là que le projet se gagne.",
      steps: [
        { n: "01", h: "Analyse", d: "1–2 semaines", checks: ["Observation sur site", "Processus actuels", "Cahier des charges"] },
        { n: "02", h: "Maquettes", d: "1 semaine", checks: ["Écrans principaux", "Validation avec les équipes", "Ajustements"] },
        { n: "03", h: "Développement", d: "6–10 semaines", checks: ["Livraisons par lots", "Tests avec vos données", "Points hebdomadaires"] },
        { n: "04", h: "Reprise des données", d: "1 semaine", checks: ["Import de l'existant", "Contrôle de cohérence", "Double saisie temporaire"] },
        { n: "05", h: "Déploiement", d: "1 semaine", checks: ["Installation des postes", "Formation des équipes", "Documentation"] },
      ],
    },
    sectors: {
      title: "Les logiciels métier,\nsecteur par secteur.",
      titleEm: ["secteur", "par secteur."],
      subtitle: "Chaque métier a ses règles, ses documents et ses habitudes de saisie.",
      groups: [
        { label: "E-commerce & commerce de détail", cases: ["Caisse et encaissement", "Stock multi-boutiques", "Étiquettes et codes-barres"] },
        { label: "Tourisme & hôtellerie", cases: ["Planning des chambres", "Facturation séjour", "États de nuitées"] },
        { label: "Services professionnels", cases: ["Dossiers clients", "Devis et facturation", "Temps passé"] },
        { label: "Santé & bien-être", cases: ["Dossiers patients", "Planning praticiens", "Facturation et mutuelles"] },
        { label: "Industrie & logistique", cases: ["Ordres de fabrication", "Traçabilité", "Contrôle qualité"] },
        { label: "Éducation & e-learning", cases: ["Inscriptions et notes", "Emplois du temps", "Bulletins"] },
        { label: "Création, médias & tech", cases: ["Gestion de projets", "Suivi budgétaire", "Bibliothèque de médias"] },
        { label: "Secteur public & associations", cases: ["Suivi des adhérents", "Reçus fiscaux", "Rapports d'activité"] },
      ],
    },
    whyUs: {
      title: "Pourquoi nous confier\nvotre logiciel.",
      titleEm: ["votre", "logiciel."],
      subtitle: "Le sur-mesure a mauvaise réputation. Souvent pour de bonnes raisons.",
      points: [
        { h: "Nous vous dirons si c'est inutile", p: "Si un logiciel du marché couvre 90 % de votre besoin, nous vous le dirons plutôt que de vendre un développement." },
        { h: "L'analyse avant le code", p: "Nous passons du temps dans vos bureaux à regarder comment vous travaillez. C'est ce qui évite de livrer un outil que personne n'ouvre." },
        { h: "Livré par lots", p: "Vous utilisez les premières fonctions au bout de quelques semaines, sans attendre la fin du projet pour découvrir le résultat." },
        { h: "Aucune licence par poste", p: "Vous installez le logiciel sur autant de postes que nécessaire. Le prix ne dépend pas de votre effectif." },
      ],
    },
    pricing: {
      title: "Le budget\nd'un logiciel métier.",
      titleEm: ["d'un", "logiciel métier."],
      subtitle: "Chiffré fermement après la phase d'analyse, jamais avant.",
      tiers: [
        { name: "Outil simple", price: "14 000", note: "À partir de · 4 à 6 semaines", features: ["Un domaine fonctionnel", "Windows ou macOS", "Base de données locale", "Exports Excel et PDF", "Formation incluse"] },
        { name: "Gestion complète", price: "32 000", note: "À partir de · 8 à 12 semaines", featured: true, features: ["Plusieurs modules", "Windows et macOS", "Multi-postes synchronisé", "Comptes et permissions", "Reprise des données", "6 mois d'accompagnement"] },
        { name: "Système métier", price: "60 000", note: "À partir de · périmètre défini ensemble", features: ["Logique métier avancée", "Intégrations tierces", "Tableaux de bord dédiés", "Mode hors ligne complet", "Accompagnement prioritaire"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "custom-solutions",
    name: "Solutions digitales sur mesure",
    keyword: "développement sur mesure SaaS Maroc",
    metaTitle: "Solutions digitales sur mesure & SaaS | Wevtex",
    metaDescription:
      "Outils métier, portails SaaS, extranets et architectures d'API conçus autour du fonctionnement réel de votre entreprise.",
    eyebrow: "Solutions sur mesure",
    h1: "Quand rien d'existant\nne fait l'affaire.",
    h1Em: ["ne", "fait l'affaire."],
    intro:
      "Certaines entreprises fonctionnent avec des règles que personne n'a prévues. Nous concevons des plateformes SaaS, des extranets, des portails clients et des architectures d'API qui épousent exactement votre organisation — et qui tiennent la charge quand elle grandit.",
    includes: [
      "Un cadrage sérieux : processus, règles métier, cas particuliers.",
      "Une plateforme web sur mesure, avec rôles, permissions et traçabilité.",
      "L'intégration à vos outils existants par API.",
      "Une documentation technique et fonctionnelle complète.",
    ],
    outcomes: [
      { h: "Vos règles, respectées", p: "Les cas particuliers qui font la valeur de votre métier sont codés, pas contournés." },
      { h: "Tout relié", p: "Vos outils se parlent enfin : plus de double saisie ni de fichiers échangés par mail." },
      { h: "Prêt à grandir", p: "Une architecture qui accepte dix fois plus d'utilisateurs sans être réécrite." },
    ],
    tags: ["SaaS", "API", "Extranet", "Intégrations"],
    faqs: [
      { q: "Comment évaluez-vous un projet complexe ?", a: "Par une phase de cadrage facturée à part, courte et concrète : processus, règles, priorités. Elle débouche sur un périmètre chiffré fermement — et elle vous appartient même si vous ne poursuivez pas avec nous." },
      { q: "Pouvez-vous vous connecter à notre ERP ?", a: "Oui, dès lors qu'il expose une API ou une base accessible. Nous avons connecté des outils de facturation, de stock et de paie à des plateformes sur mesure." },
      { q: "Qui héberge la plateforme ?", a: "Au choix : chez vous, ou sur une infrastructure que nous administrons. Dans les deux cas, les accès et le code restent à votre nom." },
    ],
    demo: {
      title: "La plateforme en action",
      subtitle: "Rôles, tableaux de bord et flux métier réunis au même endroit.",
      caption: "Portail sur mesure : permissions, données et intégrations.",
    },
    featureSections: [
      {
        eyebrow: "Nos spécialités",
        title: "Ce que nous\nconstruisons.",
        titleEm: ["construisons."],
        subtitle: "Quatre familles de projets qui reviennent le plus souvent.",
        cards: [
          { title: "Portails clients", desc: "Donner à vos clients un espace pour suivre ce qui les concerne.", checks: ["Espace sécurisé", "Documents et factures", "Suivi des demandes", "Messagerie intégrée"] },
          { title: "Plateformes SaaS", desc: "Un produit que vous vendez par abonnement.", checks: ["Multi-entreprises", "Abonnements et facturation", "Onboarding", "Tableau de bord"] },
          { title: "Extranets & outils métier", desc: "Ce que vos équipes utilisent tous les jours.", checks: ["Flux de validation", "Rôles et permissions", "Journal des actions", "Rapports"] },
          { title: "Architectures d'API", desc: "Faire dialoguer des systèmes qui s'ignoraient.", checks: ["API REST documentée", "Synchronisation", "Webhooks", "Gestion des erreurs"] },
        ],
      },
    ],
    tech: {
      title: "Les technologies\nde nos plateformes.",
      titleEm: ["de", "nos plateformes."],
      subtitle: "Des choix conservateurs et documentés : ce code vivra plusieurs années.",
      groups: [
        { label: "Application", desc: "Une interface qui reste rapide même chargée de données.", items: ["Next.js", "React", "TypeScript"] },
        { label: "Serveur & données", desc: "La logique métier et les données, solidement tenues.", items: ["Node.js", "PostgreSQL", "Prisma", "Redis"] },
        { label: "Intégrations", desc: "Se brancher sur ce que vous utilisez déjà.", items: ["API REST", "Webhooks", "Stripe", "ERP"] },
        { label: "Exploitation", desc: "Déployer, surveiller et restaurer sans stress.", items: ["Docker", "CI/CD", "Monitoring", "Sauvegardes"] },
      ],
    },
    process: {
      title: "Comment se conçoit\nune plateforme.",
      titleEm: ["une", "plateforme."],
      subtitle: "Un cadrage payant et sérieux, puis des livraisons par lots utilisables.",
      steps: [
        { n: "01", h: "Cadrage", d: "2–3 semaines", checks: ["Ateliers métier", "Règles et cas limites", "Périmètre chiffré"] },
        { n: "02", h: "Architecture", d: "1 semaine", checks: ["Modèle de données", "Choix techniques", "Plan d'intégration"] },
        { n: "03", h: "Développement", d: "8–16 semaines", checks: ["Livraisons par lots", "Recette à chaque lot", "Points hebdomadaires"] },
        { n: "04", h: "Intégrations", d: "2–3 semaines", checks: ["Connexion aux outils", "Reprise des données", "Tests de charge"] },
        { n: "05", h: "Mise en service", d: "1–2 semaines", checks: ["Bascule progressive", "Formation", "Documentation"] },
      ],
    },
    sectors: {
      title: "Les solutions sur mesure,\nsecteur par secteur.",
      titleEm: ["secteur", "par secteur."],
      subtitle: "Plus le métier est spécifique, plus le sur-mesure se justifie.",
      groups: [
        { label: "E-commerce & commerce de détail", cases: ["Portail fournisseurs", "Synchronisation des stocks", "Tarifs par client"] },
        { label: "Tourisme & hôtellerie", cases: ["Channel manager", "Portail agences", "Tableau de bord multi-sites"] },
        { label: "Services professionnels", cases: ["Portail client", "Suivi des prestations", "Facturation récurrente"] },
        { label: "Santé & bien-être", cases: ["Dossiers partagés", "Planning multi-sites", "Traçabilité et conformité"] },
        { label: "Industrie & logistique", cases: ["Suivi des expéditions", "Portail transporteurs", "Preuves de livraison"] },
        { label: "Éducation & e-learning", cases: ["Plateforme de cours", "Scolarité en ligne", "Suivi des acquis"] },
        { label: "Création, médias & tech", cases: ["Produit SaaS", "Abonnements", "API publique"] },
        { label: "Secteur public & associations", cases: ["Guichet en ligne", "Gestion des demandes", "Rapports réglementaires"] },
      ],
    },
    whyUs: {
      title: "Pourquoi nous confier\nvotre plateforme.",
      titleEm: ["votre", "plateforme."],
      subtitle: "Les projets sur mesure échouent rarement pour des raisons techniques.",
      points: [
        { h: "Le cadrage est un livrable", p: "Il est facturé, court, et vous repartez avec : processus documentés, règles écrites, périmètre chiffré. Même si vous ne poursuivez pas avec nous." },
        { h: "Livré par lots utilisables", p: "Chaque lot est mis en service et utilisé. Vous ne découvrez pas la plateforme entière le dernier jour." },
        { h: "Une équipe qui reste", p: "Les mêmes personnes du cadrage à la mise en service. Aucune passation interne, aucune reprise en cours de route." },
        { h: "Code et données à vous", p: "Dépôt de code, documentation, accès à l'infrastructure. Vous n'êtes jamais captif d'un prestataire, nous compris." },
      ],
    },
    pricing: {
      title: "Le budget\nd'une plateforme.",
      titleEm: ["d'une", "plateforme."],
      subtitle: "Le cadrage précède toujours le chiffrage définitif.",
      tiers: [
        { name: "Cadrage", price: "6 000", note: "2 à 3 semaines · livrable à vous", features: ["Ateliers avec vos équipes", "Processus documentés", "Modèle de données", "Périmètre chiffré", "Déduit du projet si vous poursuivez"] },
        { name: "Plateforme", price: "18 000", note: "À partir de · 8 à 12 semaines", featured: true, features: ["Portail ou outil métier", "Comptes, rôles et permissions", "Tableaux de bord", "Une intégration incluse", "6 mois d'accompagnement"] },
        { name: "SaaS complet", price: "60 000", note: "À partir de · périmètre défini ensemble", features: ["Architecture multi-entreprises", "Abonnements et facturation", "Intégrations multiples", "Tests de charge", "Accompagnement prioritaire"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "whatsapp-bots",
    name: "Chatbots WhatsApp automatisés",
    keyword: "chatbot WhatsApp entreprise Maroc",
    metaTitle: "Chatbots WhatsApp automatisés | Wevtex",
    metaDescription:
      "Des bots WhatsApp qui répondent instantanément, qualifient vos prospects et assurent le support 24h/24, reliés à vos outils.",
    eyebrow: "Chatbots WhatsApp",
    h1: "Répondre en trois secondes,\nmême à minuit.",
    h1Em: ["même", "à minuit."],
    intro:
      "Au Maroc, vos clients écrivent sur WhatsApp — et attendent une réponse immédiate. Nous mettons en place des bots qui répondent aux questions courantes, qualifient les demandes sérieuses et passent la main à un humain au bon moment.",
    includes: [
      "L'ouverture et la configuration de votre compte WhatsApp Business API.",
      "Des scénarios de conversation écrits pour votre activité, en français et en darija.",
      "La qualification des prospects et leur transmission à votre équipe.",
      "La connexion à votre CRM, votre tableur ou votre boîte mail.",
    ],
    outcomes: [
      { h: "Aucune demande perdue", p: "Les messages du soir et du week-end reçoivent une réponse au lieu d'attendre lundi." },
      { h: "Des prospects triés", p: "Votre équipe ne traite que les demandes sérieuses, déjà qualifiées par le bot." },
      { h: "Du temps rendu", p: "Les questions répétitives — horaires, prix, disponibilité — ne mobilisent plus personne." },
    ],
    tags: ["WhatsApp API", "Automatisation", "CRM", "Support"],
    faqs: [
      { q: "Est-ce le WhatsApp officiel ?", a: "Oui. Nous utilisons l'API WhatsApp Business officielle de Meta, avec votre numéro vérifié. Aucun outil non officiel : ceux-là finissent bloqués." },
      { q: "Le bot remplace-t-il mon équipe ?", a: "Non, il la protège. Il traite les questions répétitives et passe la main dès qu'une demande sort du cadre prévu, avec tout l'historique." },
      { q: "Parle-t-il darija ?", a: "Oui. Les scénarios sont écrits en français et en darija, en tenant compte de la façon dont vos clients écrivent réellement." },
    ],
    demo: {
      title: "Le bot en action",
      subtitle: "Une conversation type, de la question au rendez-vous pris.",
      caption: "Scénario WhatsApp : qualification puis transmission à un conseiller.",
    },
    featureSections: [
      {
        eyebrow: "Nos spécialités",
        title: "Ce que sait faire\nun bot bien réglé.",
        titleEm: ["un", "bot bien réglé."],
        subtitle: "Quatre usages qui couvrent la grande majorité des demandes reçues.",
        cards: [
          { title: "Réponses instantanées", desc: "Les questions posées vingt fois par jour, traitées seules.", checks: ["Horaires et adresse", "Tarifs et prestations", "Disponibilités", "Questions fréquentes"] },
          { title: "Qualification", desc: "Trier les curieux des clients avant d'y passer du temps.", checks: ["Questions de cadrage", "Budget et délai", "Notation du prospect", "Transmission ciblée"] },
          { title: "Prise de rendez-vous", desc: "Remplir l'agenda sans échanger dix messages.", checks: ["Créneaux proposés", "Confirmation automatique", "Rappels la veille", "Report et annulation"] },
          { title: "Suivi & relance", desc: "Reprendre contact au bon moment, sans y penser.", checks: ["Suivi de commande", "Relance des devis", "Enquêtes de satisfaction", "Campagnes ciblées"] },
        ],
      },
    ],
    tech: {
      title: "Les technologies\nde vos bots.",
      titleEm: ["de", "vos bots."],
      subtitle: "L'API officielle, une automatisation robuste et une reprise humaine fluide.",
      groups: [
        { label: "Messagerie", desc: "Le canal officiel, avec votre numéro vérifié.", items: ["WhatsApp Business API", "Meta Cloud API", "Templates validés"] },
        { label: "Automatisation", desc: "Les scénarios et les règles qui pilotent la conversation.", items: ["n8n", "Node.js", "Webhooks"] },
        { label: "Intelligence", desc: "Comprendre une question formulée librement.", items: ["Claude", "Recherche documentaire", "Darija & français"] },
        { label: "Connexion", desc: "Faire arriver le prospect là où votre équipe travaille.", items: ["CRM", "Google Sheets", "Email", "Agenda"] },
      ],
    },
    process: {
      title: "Comment se met\nen place un bot.",
      titleEm: ["en", "place un bot."],
      subtitle: "Trois à quatre semaines, dont l'essentiel passe à écrire les bonnes réponses.",
      steps: [
        { n: "01", h: "Analyse", d: "3–5 jours", checks: ["Vos messages réels", "Questions récurrentes", "Cas à transmettre"] },
        { n: "02", h: "Scénarios", d: "1 semaine", checks: ["Arbre de conversation", "Rédaction FR et darija", "Règles de transmission"] },
        { n: "03", h: "Configuration", d: "3–5 jours", checks: ["Compte WhatsApp API", "Numéro vérifié", "Templates validés par Meta"] },
        { n: "04", h: "Connexion", d: "3–5 jours", checks: ["CRM ou tableur", "Notifications à l'équipe", "Tests bout en bout"] },
        { n: "05", h: "Réglage", d: "chaque mois", checks: ["Lecture des conversations", "Réponses affinées", "Nouveaux scénarios"] },
      ],
    },
    sectors: {
      title: "Les bots WhatsApp,\nsecteur par secteur.",
      titleEm: ["secteur", "par secteur."],
      subtitle: "Les questions que reçoit un restaurant n'ont rien à voir avec celles d'une clinique.",
      groups: [
        { label: "E-commerce & commerce de détail", cases: ["Suivi de commande", "Disponibilité produit", "Retours et échanges"] },
        { label: "Tourisme & hôtellerie", cases: ["Réservations", "Informations séjour", "Demandes spéciales"] },
        { label: "Services professionnels", cases: ["Qualification des demandes", "Prise de rendez-vous", "Envoi de documents"] },
        { label: "Santé & bien-être", cases: ["Rendez-vous et rappels", "Documents à apporter", "Horaires de garde"] },
        { label: "Industrie & logistique", cases: ["Suivi d'expédition", "Demandes de devis", "Contact commercial"] },
        { label: "Éducation & e-learning", cases: ["Informations inscriptions", "Rappels de cours", "Réponses aux parents"] },
        { label: "Création, médias & tech", cases: ["Support de premier niveau", "Essais et démos", "Collecte de retours"] },
        { label: "Secteur public & associations", cases: ["Informations pratiques", "Orientation des demandes", "Inscriptions aux actions"] },
      ],
    },
    whyUs: {
      title: "Pourquoi nous confier\nvotre automatisation.",
      titleEm: ["votre", "automatisation."],
      subtitle: "Beaucoup de bots agacent plus qu'ils n'aident. Voici comment nous l'évitons.",
      points: [
        { h: "L'API officielle, jamais autre chose", p: "Les solutions non officielles font bloquer votre numéro tôt ou tard — souvent au pire moment. Nous passons par Meta, avec votre numéro vérifié." },
        { h: "Écrit à partir de vos vrais messages", p: "Nous lisons vos conversations passées avant d'écrire quoi que ce soit. Les scénarios répondent aux questions réellement posées." },
        { h: "La main passée au bon moment", p: "Le bot sait reconnaître ce qu'il ne sait pas traiter et transmet à un humain avec tout l'historique, sans faire répéter le client." },
        { h: "Réglé chaque mois", p: "Nous relisons les conversations et corrigeons ce qui coince. Un bot qu'on n'entretient pas se dégrade en quelques semaines." },
      ],
    },
    pricing: {
      title: "Le budget\nd'un bot WhatsApp.",
      titleEm: ["d'un", "bot WhatsApp."],
      subtitle: "Une mise en place unique, puis un abonnement pour l'entretien.",
      tiers: [
        { name: "Essentiel", price: "2 400", note: "Mise en place · puis 390 DH par mois", features: ["Compte WhatsApp API", "Jusqu'à 10 scénarios", "Réponses aux questions courantes", "Transmission à votre équipe", "Réglage mensuel"] },
        { name: "Qualification", price: "5 900", note: "Mise en place · puis 690 DH par mois", featured: true, features: ["Tout de la formule Essentiel", "Scénarios illimités", "Qualification des prospects", "Prise de rendez-vous", "Connexion CRM", "Rapports mensuels"] },
        { name: "Sur mesure", price: "12 000", note: "À partir de · périmètre défini ensemble", features: ["Compréhension libre par IA", "Plusieurs langues", "Intégrations multiples", "Campagnes sortantes", "Accompagnement prioritaire"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

/**
 * The slugs here and in homeContent.ts are the same set, by contract: the home
 * bento, the header mega menu, the footer column and /services all build their
 * links as `/services/<slug>` from that list, and this file supplies the page
 * each one lands on. Checked at module load so a rename or a new service fails
 * the build rather than shipping a link to a 404.
 */
const missing = MARKETED.filter((m) => !SERVICE_SLUGS.includes(m.slug)).map((m) => m.slug);
const unlisted = SERVICE_SLUGS.filter((slug) => !MARKETED.some((m) => m.slug === slug));
if (missing.length || unlisted.length) {
  throw new Error(
    [
      "Service slugs are out of sync between homeContent.ts and services-data.ts.",
      missing.length ? `  Marketed with no detail page: ${missing.join(", ")}` : "",
      unlisted.length ? `  Detail page nothing links to: ${unlisted.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join(" ")
  );
}

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

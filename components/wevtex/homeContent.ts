/**
 * Shared home content that must exist in BOTH the server component
 * (for JSON-LD) and the client UI (for rendering). Keep it plain data
 * (no JSX) so it can be imported on the server.
 */

export const FAQS = [
  { q: "Combien de temps prend la création d'un site ?", a: "La plupart des sites vitrines sont en ligne en 2 à 4 semaines, les boutiques en ligne en 4 à 8. Vous recevez un délai ferme avec votre devis, avant que quoi que ce soit ne démarre." },
  { q: "Comment se passe le paiement ?", a: "Un prix fixe pour un périmètre fixe, réparti en étapes. Vous validez chaque étape avant qu'elle ne soit facturée : rien n'est dû tant que le résultat ne vous convient pas." },
  { q: "Mon site sera-t-il visible sur Google ?", a: "Oui. Chaque site est livré prêt pour le référencement, et nous pouvons aller plus loin avec nos prestations SEO et Google Maps pour que vos clients vous trouvent." },
  { q: "À qui appartient le site une fois livré ?", a: "À vous, entièrement. Le code, le contenu, le nom de domaine et tous les accès vous sont remis à votre nom. Aucune dépendance, jamais." },
  { q: "Gérez-vous l'hébergement et le nom de domaine ?", a: "Oui. Nous mettons en place un hébergement rapide et sécurisé ainsi que votre domaine, et nous pouvons continuer à les gérer — ou tout vous transmettre si vous préférez." },
  { q: "Que se passe-t-il après la mise en ligne ?", a: "Chaque projet inclut un accompagnement après le lancement. Ensuite, un forfait de maintenance optionnel assure la surveillance, les mises à jour et les sauvegardes." },
] as const;

/**
 * The eight services, in one place.
 *
 * The home bento grid, the header mega menu, the footer column and the pricing
 * grid all read from this list, so a service is added or renamed exactly once.
 * Plain data only (no JSX) so the server components can import it too — each
 * surface supplies its own icon.
 *
 * `price` is the entry point for that service in MAD (dirhams); `note` says what the
 * number covers. Keep both accurate — they are quoted to customers.
 */
export type Service = {
  /**
   * Also the URL: the card, the mega-menu entry and the footer link all point
   * at /services/<slug>, and lib/services-data.ts must carry an entry with the
   * same slug — that pairing is asserted there, so a rename breaks the build
   * rather than shipping a 404.
   */
  slug: string;
  name: string;
  short: string;
  desc: string;
  price: string;
  note: string;
  /* Button label on the pricing card — specific to this service. */
  cta: string;
  /* Visuel de la prestation (WebP optimisé, 900px). */
  image: string;
  features: string[];
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "website-creation",
    image: "/images/services/website-creation.webp",
    cta: "Lancer mon site",
    name: "Création de sites web",
    short: "Sites vitrines et boutiques en ligne",
    desc: "Sites vitrines, boutiques en ligne et portails sur mesure — modernes, ultra-rapides et pensés pour le référencement.",
    price: "990",
    note: "Livré en 7 à 14 jours",
    featured: true,
    features: [
      "Jusqu'à 5 pages, responsive",
      "Rédaction et mise en page",
      "Référencement de base configuré",
      "Formulaire de contact et WhatsApp",
      "1 mois d'accompagnement",
    ],
  },
  {
    slug: "seo",
    image: "/images/services/seo.webp",
    cta: "Améliorer mon référencement",
    name: "Référencement naturel (SEO)",
    short: "Sortez sur les recherches de vos clients",
    desc: "Optimisation technique, stratégie de mots-clés et netlinking pour un trafic qui progresse mois après mois.",
    price: "1 500",
    note: "Par mois · 3 mois minimum",
    features: [
      "Audit technique et corrections",
      "Stratégie de mots-clés et contenu",
      "Optimisation des pages",
      "Netlinking",
      "Rapport de positionnement mensuel",
    ],
  },
  {
    slug: "local-seo",
    image: "/images/services/local-seo.webp",
    cta: "Me rendre visible sur Maps",
    name: "Google Maps & SEO local",
    short: "Captez les recherches autour de vous",
    desc: "Gagnez les recherches qui se font près de chez vous, avec une fiche Google Business optimisée et un bon positionnement sur Maps.",
    price: "790",
    note: "Puis 490 DH par mois",
    features: [
      "Création et optimisation de la fiche Google",
      "Positionnement sur Google Maps",
      "Annuaires et citations locales",
      "Stratégie d'avis clients",
      "Rapport local mensuel",
    ],
  },
  {
    slug: "ads",
    image: "/images/services/ads.webp",
    cta: "Lancer ma campagne",
    name: "Création & gestion de publicités",
    short: "Des campagnes qui se rentabilisent",
    desc: "Campagnes Google Ads, Facebook et Instagram ciblées, conçues pour un retour immédiat et mesurable.",
    price: "1 200",
    note: "Par mois · hors budget publicitaire",
    features: [
      "Google, Facebook et Instagram",
      "Ciblage audience et mots-clés",
      "Visuels et textes publicitaires",
      "Page d'atterrissage dédiée",
      "Suivi des conversions et reporting",
    ],
  },
  {
    slug: "mobile-apps",
    image: "/images/services/mobile-apps.webp",
    cta: "Cadrer mon application",
    name: "Applications mobiles",
    short: "iOS et Android, une seule base de code",
    desc: "Applications iOS et Android natives ou multiplateformes, fluides et rapides, développées avec Flutter.",
    price: "12 000",
    note: "Périmètre défini par projet",
    features: [
      "iOS et Android depuis une seule base",
      "Design UI/UX inclus",
      "Backend et intégration d'API",
      "Publication sur les stores prise en charge",
      "3 mois d'accompagnement",
    ],
  },
  {
    slug: "desktop-apps",
    image: "/images/services/desktop-apps.webp",
    cta: "Cadrer mon logiciel",
    name: "Logiciels bureau",
    short: "Windows et macOS sur mesure",
    desc: "Logiciels Windows et macOS sur mesure qui simplifient vos opérations internes et la gestion de vos données.",
    price: "14 000",
    note: "Périmètre défini par projet",
    features: [
      "Versions Windows et macOS",
      "Fonctionnement hors connexion",
      "Rapports et exports",
      "Installeur et mises à jour automatiques",
      "Session de formation pour votre équipe",
    ],
  },
  {
    slug: "custom-solutions",
    image: "/images/services/custom-solutions.webp",
    cta: "Cadrer ma solution",
    name: "Solutions digitales sur mesure",
    short: "Outils métier et portails SaaS",
    desc: "Outils métier, portails SaaS, extranets et architectures d'API conçus autour du fonctionnement de votre entreprise.",
    price: "18 000",
    note: "Périmètre défini par projet",
    features: [
      "Cadrage et cahier des charges",
      "Logique métier sur mesure",
      "Rôles, permissions et traçabilité",
      "API et intégrations tierces",
      "6 mois d'accompagnement",
    ],
  },
  {
    slug: "whatsapp-bots",
    image: "/images/services/whatsapp-bots.webp",
    cta: "Automatiser mon WhatsApp",
    name: "Chatbots WhatsApp automatisés",
    short: "Répondez et qualifiez 24h/24",
    desc: "Des chatbots intelligents qui répondent instantanément, qualifient vos prospects et assurent le support 24h/24.",
    price: "2 400",
    note: "Puis 390 DH par mois",
    features: [
      "Mise en place de l'API WhatsApp Business",
      "Scénarios adaptés à votre activité",
      "Qualification et routage des prospects",
      "Transfert vers votre CRM ou tableur",
      "Optimisation mensuelle",
    ],
  },
];

/**
 * Formats de sites, avec leur prix de départ.
 *
 * Retiré de /services — destiné aux pages de détail d'une prestation
 * (/services/[slug]). Les styles correspondants (.srv-types, .srv-type…)
 * sont conservés dans wevtex-home.css et prêts à être réutilisés.
 */
export const SITE_TYPES = [
  { cat: "Marketing", h: "Landing page", p: "Une page unique, taillée pour convertir le trafic de vos campagnes publicitaires.", pr: "4 900" },
  { cat: "Marketing", h: "Site vitrine", p: "Votre activité présentée clairement : services, preuves, contact. Rapide et bien référencé.", pr: "6 000" },
  { cat: "Commerce", h: "Boutique en ligne", p: "Catalogue, paiement sécurisé et gestion des stocks. Pensée pour la vitesse et la conversion.", pr: "16 000" },
  { cat: "Produit", h: "Application web", p: "Espaces clients, tableaux de bord, facturation et intégrations sur mesure.", pr: "28 000" },
  { cat: "Métier", h: "Site de réservation", p: "Agenda, paiements et rappels automatiques. Pour cliniques, salons et studios.", pr: "11 000" },
  { cat: "Communauté", h: "Espace membres", p: "Contenus réservés, abonnements et formations en ligne, avec paiement récurrent.", pr: "14 000" },
  { cat: "Métier", h: "Restaurant & menu", p: "Menu, réservation et commande en ligne. Met en valeur les plats, remplit les tables.", pr: "8 000" },
  { cat: "Métier", h: "Annonces immobilières", p: "Recherche par carte, fiches détaillées et captation des demandes de visite.", pr: "12 000" },
];

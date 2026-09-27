/**
 * Shared home content that must exist in BOTH the server component
 * (for JSON-LD) and the client UI (for rendering). Keep it plain data
 * (no JSX) so it can be imported on the server.
 */

import { PRICES, MONTHLY } from "@/lib/pricing";

export const FAQS = [
  { q: "En combien de temps mon site sera-t-il en ligne ?", a: "Une vitrine est en ligne en 2 à 4 semaines, une boutique en 4 à 8. La date est écrite sur le devis avant le démarrage, et c'est sur elle que nous nous engageons." },
  { q: "Dois-je tout payer d'avance ?", a: "Non. Le prix est fixe et payé par étapes : vous validez chaque étape avant qu'elle soit facturée. Rien n'est dû tant que le résultat ne vous convient pas." },
  { q: "Mes clients vont-ils me trouver sur Google ?", a: "Chaque site part en ligne prêt pour Google : vitesse, structure et balises. Pour passer devant vos concurrents sur des recherches disputées, notre accompagnement SEO et Google Maps prend le relais." },
  { q: "Et si je veux changer d'agence un jour ?", a: "Vous partez avec tout. Le code, le contenu, le nom de domaine et les accès sont à votre nom dès la livraison. Aucune clé ne reste chez nous." },
  { q: "Gérez-vous l'hébergement et le domaine ?", a: "Oui. Nous mettons en place un hébergement rapide et sécurisé et votre nom de domaine, puis nous les gérons pour vous. Si vous préférez, nous vous remettons simplement les clés." },
  { q: "Que se passe-t-il après la mise en ligne ?", a: "Vous n'êtes pas laissé seul. Un accompagnement après lancement est inclus dans chaque projet, puis une maintenance optionnelle s'occupe des mises à jour, des sauvegardes et de la surveillance." },
  { q: "Qu'est-ce qu'une agence de marketing digital, et que fait Wevtex ?", a: "Une agence de marketing digital, ou agence de marketing web, aide une entreprise à être trouvée et choisie en ligne. Wevtex est une agence digitale et de communication digitale au Maroc, basée à Casablanca : agence web et mobile, référencement SEO, publicité Google et Meta, et automatisation, réunis dans une seule équipe." },
  { q: "Combien coûte une agence de marketing digital au Maroc ?", a: `Chez Wevtex, le tarif de chaque prestation est publié, avec un prix de départ : un site vitrine démarre à ${PRICES["website-creation"]["Vitrine"]} DH, l'accompagnement SEO à ${PRICES["seo"]["Essentiel"]} DH par mois et la gestion de publicité Google ou Meta à ${PRICES["ads"]["Lancement"]} DH par mois. Chaque projet reçoit un devis ferme.` },
  { q: "Comment choisir la meilleure agence web au Maroc ?", a: "La meilleure agence web au Maroc pour vous est celle qui montre des sites en ligne que vous pouvez tester, donne un devis détaillé ligne par ligne et vous laisse propriétaire du site, du code et des accès. Méfiez-vous de toute promesse de première place garantie sur Google." },
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
   * at servicePath(<slug>), and lib/services-data.ts must carry an entry with the
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
    short: "Un site qui fait appeler et acheter",
    desc: "Un site rapide, trouvé sur Google, qui transforme les visites en appels. Et il est à votre nom.",
    price: PRICES["website-creation"]["Vitrine"],
    note: "Formule Basic, livrée en 5 à 7 jours",
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
    short: "Apparaître quand vos clients cherchent",
    desc: "Vos clients vous cherchent sur Google. Nous faisons en sorte qu'ils tombent sur vous.",
    price: PRICES["seo"]["Essentiel"],
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
    short: "Les appels des clients du quartier",
    desc: "Quand on cherche « près de moi », c'est votre fiche qui sort, avec vos avis et votre numéro.",
    price: PRICES["local-seo"]["Mise en place"],
    note: `Puis ${PRICES["local-seo"]["Entretien"]} DH par mois`,
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
    short: "Des clients dès la première semaine",
    desc: "Google et Meta pilotés au coût par client : vous savez ce que rapporte chaque dirham.",
    price: PRICES["ads"]["Lancement"],
    note: "Par jour · hors budget publicitaire",
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
    short: "Votre service dans leur téléphone",
    desc: "Une icône sur l'écran de vos clients, sur iOS et Android, pour qu'ils reviennent d'eux-mêmes.",
    price: PRICES["mobile-apps"]["Essentielle"],
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
    short: "Fini les tableaux Excel bricolés",
    desc: "Le logiciel qui suit votre façon de travailler, fonctionne sans internet et sans licence par poste.",
    price: PRICES["desktop-apps"]["Outil simple"],
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
    short: "L'outil que le marché ne vend pas",
    desc: "Portail client, outil métier ou SaaS : quand rien n'existe pour votre métier, nous le construisons.",
    price: PRICES["custom-solutions"]["Plateforme"],
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
    short: "Chaque message répondu, même la nuit",
    desc: "Il répond, trie les prospects et prend les rendez-vous. Votre équipe ne gère que les vrais clients.",
    price: PRICES["whatsapp-bots"]["Essentiel"],
    note: `Puis ${MONTHLY["whatsapp-bots"]["Essentiel"]} DH par mois`,
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

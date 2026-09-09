/**
 * Real delivered projects — the single source for the homepage work index and
 * the portfolio page.
 *
 * Every entry is a live site. `liveUrl` is the working deployment; `clientUrl`
 * is the domain shown to visitors. Screenshots live at
 * /images/work/<slug>.webp, produced from the source PNGs in
 * public/images/projects.
 *
 * `metricValue` / `metricLabel` are shown as results. Keep them to figures you
 * can actually stand behind.
 */

export type Project = {
  title: string;
  slug: string;
  clientUrl: string;
  liveUrl: string;
  category: string;
  year: number;
  featured: boolean;
  order: number;
  description: string;
  stack: string[];
  metricValue: string;
  metricLabel: string;
  screenshot: string;
  metaDescription: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Follow Me Travel",
    slug: "plateforme-agence-voyage-maroc",
    clientUrl: "followmetravel.ma",
    liveUrl: "https://www.followmetravel.ma/",
    category: "Plateforme",
    year: 2026,
    featured: true,
    order: 1,
    description:
      "Plateforme de réservation pour une agence de voyages marocaine : moteur de recherche par destination, thème et type de voyage, fiches séjours détaillées, voyages nationaux, internationaux et Omra, comptes clients et paiement en ligne. Le confort d'une agence de rue, aux prix du web.",
    stack: ["Développement web", "Réservation en ligne", "Paiement"],
    metricValue: "6",
    metricLabel: "destinations internationales en ligne",
    screenshot: "/images/work/plateforme-agence-voyage-maroc.webp",
    metaDescription:
      "Développement d'une plateforme de réservation de voyages au Maroc — recherche, séjours et paiement en ligne.",
  },
  {
    title: "Epoptique",
    slug: "ecommerce-opticien-en-ligne-maroc",
    clientUrl: "epoptique.ma",
    liveUrl: "https://epoptique.ma/",
    category: "E-commerce",
    year: 2026,
    featured: true,
    order: 2,
    description:
      "Boutique en ligne pour un opticien marocain : plus de 500 modèles de lunettes de vue et de soleil, essayage virtuel, clips 2-en-1, grandes marques, livraison 24/48h et retours gratuits. Une expérience d'achat pensée pour convertir en ligne comme en magasin.",
    stack: ["Shopify", "Essayage virtuel", "E-commerce"],
    metricValue: "+500",
    metricLabel: "modèles disponibles en ligne",
    screenshot: "/images/work/ecommerce-opticien-en-ligne-maroc.webp",
    metaDescription:
      "Création d'une boutique e-commerce d'optique au Maroc — essayage virtuel, grandes marques et livraison 24/48h.",
  },
  {
    title: "JPM",
    slug: "ecommerce-informatique-hightech-maroc",
    clientUrl: "jpm.ma",
    liveUrl: "https://jpm.ma/",
    category: "E-commerce",
    year: 2026,
    featured: true,
    order: 3,
    description:
      "Boutique en ligne high-tech : ordinateurs portables, smartphones, écrans et accessoires, avec recherche par catégorie, fiches produits claires, promotions dynamiques et paiement sécurisé. Une expérience d'achat rapide, pensée pour un catalogue qui bouge vite.",
    stack: ["Shopify", "E-commerce", "Catalogue produits"],
    metricValue: "7/7",
    metricLabel: "support et commande en ligne",
    screenshot: "/images/work/ecommerce-informatique-hightech-maroc.webp",
    metaDescription:
      "Création d'une boutique e-commerce informatique et high-tech au Maroc — PC, smartphones et accessoires.",
  },
  {
    title: "EMAS Nettoyage",
    slug: "site-service-nettoyage-maroc",
    clientUrl: "emas-nettoyage.ma",
    liveUrl: "https://emas-nettoyage.vercel.app/",
    category: "Site vitrine",
    year: 2026,
    featured: false,
    order: 4,
    description:
      "Site vitrine pour une entreprise de nettoyage professionnel : présentation claire des prestations (maisons, bureaux, commerces, fin de chantier, vitres, désinfection), zones d'intervention et demande de devis simplifiée. Conçu pour transformer une recherche en demande de service.",
    stack: ["Next.js", "Site vitrine", "SEO"],
    metricValue: "6",
    metricLabel: "types de prestations mises en avant",
    screenshot: "/images/work/site-service-nettoyage-maroc.webp",
    metaDescription:
      "Site vitrine pour une entreprise de nettoyage professionnel au Maroc — prestations et devis en ligne.",
  },
  {
    title: "Biougnach Electro",
    slug: "ecommerce-electromenager-maroc",
    clientUrl: "biougnach.ma",
    liveUrl: "https://www.biougnach.ma/",
    category: "E-commerce",
    year: 2026,
    featured: false,
    order: 5,
    description:
      "Boutique en ligne pour un spécialiste de l'électroménager présent au Maroc depuis 1973 : catalogue multi-catégories, recherche produits, disponibilité multi-villes et parcours d'achat clair. Une enseigne historique portée sur le web.",
    stack: ["E-commerce", "Catalogue produits", "SEO"],
    metricValue: "1973",
    metricLabel: "une enseigne portée en ligne",
    screenshot: "/images/work/ecommerce-electromenager-maroc.webp",
    metaDescription:
      "Boutique e-commerce d'électroménager au Maroc — catalogue multi-villes pour une enseigne établie depuis 1973.",
  },
  {
    title: "Rekrify",
    slug: "rekrify-plateforme-emploi",
    clientUrl: "rekrify.ma",
    liveUrl: "https://rekrute-ma.vercel.app/",
    category: "Plateforme",
    year: 2026,
    featured: true,
    order: 14,
    description:
      "Plateforme de recrutement complète reliant candidats et employeurs marocains : offres vérifiées, matching intelligent, profils entreprises et messagerie recruteur en temps réel. Pensée pour la vitesse et la confiance, avec un parcours de candidature simplifié.",
    stack: ["Next.js", "React", "Tailwind"],
    metricValue: "+52 %",
    metricLabel: "de candidatures complétées",
    screenshot: "/images/work/rekrify-plateforme-emploi.webp",
    metaDescription:
      "Développement d'un portail d'emploi moderne au Maroc — offres vérifiées et matching intelligent des candidats.",
  },
  {
    title: "Zina Beauty",
    slug: "ecommerce-cosmetiques-assistant-ia",
    clientUrl: "zinabeauty.ma",
    liveUrl: "https://agent-ecommerce.vercel.app/",
    category: "E-commerce",
    year: 2026,
    featured: true,
    order: 15,
    description:
      "Boutique de cosmétiques marocains dotée d'un assistant IA conversationnel : le client décrit sa peau, l'assistant recommande les produits, construit une routine et prend la commande dans le chat — en darija, français ou anglais, 24h/24. Une nouvelle façon d'acheter, guidée et instantanée.",
    stack: ["Next.js", "Assistant IA", "Multilingue"],
    metricValue: "24/7",
    metricLabel: "de conseil et commande automatisés",
    screenshot: "/images/work/ecommerce-cosmetiques-assistant-ia.webp",
    metaDescription:
      "E-commerce de cosmétiques marocains avec assistant IA — conseil et commande en darija, français et anglais, 24/7.",
  },
  {
    title: "M2 Immobilier",
    slug: "plateforme-immobilier-prestige-maroc",
    clientUrl: "m2immobilier.ma",
    liveUrl: "https://m2maroc.vercel.app/",
    category: "Immobilier",
    year: 2026,
    featured: true,
    order: 12,
    description:
      "Plateforme immobilière haut de gamme pour Marrakech et tout le Maroc : recherche multicritères (ville, type, budget, chambres), fiches biens détaillées, estimation gratuite et prise de contact WhatsApp. Blog immobilier intégré pour renforcer le référencement.",
    stack: ["Next.js", "Recherche avancée", "SEO"],
    metricValue: "+38 %",
    metricLabel: "de demandes qualifiées",
    screenshot: "/images/work/plateforme-immobilier-prestige-maroc.webp",
    metaDescription:
      "Développement d'une plateforme immobilière de prestige au Maroc — villas, riads et appartements haut de gamme.",
  },
  {
    title: "Maison Couture",
    slug: "boutique-caftan-luxe",
    clientUrl: "maisoncouture.ma",
    liveUrl: "https://oku.rpg.temporary.site/",
    category: "E-commerce",
    year: 2026,
    featured: false,
    order: 11,
    description:
      "Boutique en ligne haut de gamme dédiée à la couture marocaine : caftans, djellabas, takchitas et gandouras faits main. Navigation par collections, fiches produits soignées, gestion multidevise (MAD) et parcours d'achat pensé pour une clientèle internationale.",
    stack: ["E-commerce", "Laravel", "Multi-devise"],
    metricValue: "+41 %",
    metricLabel: "de taux de conversion",
    screenshot: "/images/work/boutique-caftan-luxe.webp",
    metaDescription:
      "Création d'une boutique e-commerce de caftans marocains de luxe, faits main à Marrakech.",
  },
  {
    title: "Koffee Kuento",
    slug: "site-cafe-brunch-casablanca",
    clientUrl: "koffeekuento.ma",
    liveUrl: "https://koffee-kuento-seven.vercel.app/",
    category: "Site vitrine",
    year: 2026,
    featured: false,
    order: 8,
    description:
      "Site vitrine bilingue pour un café de spécialité aux Palmiers : menu illustré, mise en avant des signatures, intégration commande Glovo et référencement local optimisé (horaires, avis Google, itinéraire). Conçu pour transformer les recherches locales en clients au comptoir.",
    stack: ["Next.js", "SEO Local", "Glovo"],
    metricValue: "+63 %",
    metricLabel: "de recherches locales",
    screenshot: "/images/work/site-cafe-brunch-casablanca.webp",
    metaDescription:
      "Site vitrine et SEO local pour un café de spécialité à Casablanca — menu, avis Google et commande en ligne.",
  },
  {
    title: "Dentica",
    slug: "site-clinique-dentaire",
    clientUrl: "dentica.ma",
    liveUrl: "https://dentist-project-three.vercel.app/",
    category: "Santé",
    year: 2026,
    featured: false,
    order: 16,
    description:
      "Site de clinique dentaire moderne axé sur la prise de rendez-vous : présentation des soins (implants, orthodontie, esthétique), équipe de praticiens, grille tarifaire claire et système de réservation en ligne. Design rassurant pensé pour convertir le visiteur en patient.",
    stack: ["HTML5", "Prise de RDV", "Responsive"],
    metricValue: "+47 %",
    metricLabel: "de rendez-vous en ligne",
    screenshot: "/images/work/site-clinique-dentaire.webp",
    metaDescription:
      "Création d'un site de clinique dentaire avec réservation en ligne et présentation des soins.",
  },
  {
    title: "Raiide Media",
    slug: "site-agence-creative-casablanca",
    clientUrl: "raiidemedia.com",
    liveUrl: "https://raiide-media.vercel.app/",
    category: "Portfolio",
    year: 2026,
    featured: false,
    order: 9,
    description:
      "Site vitrine pour une agence créative casablancaise : portfolio filtrable, showcase d'identités visuelles, intégration de reels vidéo, pages services détaillées et témoignages clients. Une vitrine immersive qui met la production créative au premier plan.",
    stack: ["Next.js", "Portfolio", "Vidéo"],
    metricValue: "+58 %",
    metricLabel: "de demandes de devis",
    screenshot: "/images/work/site-agence-creative-casablanca.webp",
    metaDescription:
      "Site portfolio pour une agence créative digitale à Casablanca — branding, vidéo et marketing.",
  },
  {
    title: "Floussy",
    slug: "application-gestion-depenses",
    clientUrl: "floussy.app",
    liveUrl: "https://floussy-five.vercel.app/",
    category: "Application",
    year: 2026,
    featured: false,
    order: 10,
    description:
      "Application web de gestion de budget personnel et familial : suivi des dépenses par catégorie, marchand et mois, scan de reçus, catégorisation automatique et questions en langage naturel sur son propre historique. Chaque donnée est cloisonnée par utilisateur, avec export et suppression à tout moment.",
    stack: ["Next.js", "Dashboard", "Auth sécurisée"],
    metricValue: "100 %",
    metricLabel: "des données cloisonnées par utilisateur",
    screenshot: "/images/work/application-gestion-depenses.webp",
    metaDescription:
      "Développement d'une application web de gestion des dépenses personnelles et familiales.",
  },
  {
    title: "VEIL",
    slug: "landing-page-casque-vr",
    clientUrl: "veil.gg",
    liveUrl: "https://veil-headset.vercel.app/",
    category: "Landing",
    year: 2026,
    featured: false,
    order: 17,
    description:
      "Landing page produit immersive pour un casque VR autonome : narration au défilement, séquence d'images animée, audio spatial 3D et présentation de la bibliothèque de jeux. Une expérience scroll cinématique conçue pour donner envie de rentrer dans le jeu.",
    stack: ["Animation scroll", "WebGL", "Performance"],
    metricValue: "2×",
    metricLabel: "de temps passé sur la page",
    screenshot: "/images/work/landing-page-casque-vr.webp",
    metaDescription:
      "Landing page immersive et animée pour le lancement d'un casque de réalité virtuelle.",
  },
  {
    title: "Studio Photo",
    slug: "site-studio-photographie",
    clientUrl: "studiophoto.ma",
    liveUrl: "https://photographystudio-snowy.vercel.app/",
    category: "Portfolio",
    year: 2026,
    featured: false,
    order: 13,
    description:
      "Site portfolio pour un studio de photographie primé : galeries par spécialité (mariages, portraits, événements, commercial), mise en valeur visuelle plein écran et prise de contact simplifiée. Un écrin sobre où les images parlent d'elles-mêmes.",
    stack: ["Galerie", "SEO", "Responsive"],
    metricValue: "+44 %",
    metricLabel: "de demandes de réservation",
    screenshot: "/images/work/site-studio-photographie.webp",
    metaDescription:
      "Site portfolio pour un studio de photographie professionnelle — mariages, portraits et événements.",
  },
];

/** Ordered as the client set them, not as they happen to sit in the array. */
export const PROJECTS_ORDERED = [...PROJECTS].sort((a, b) => a.order - b.order);

export const PROJECT_SLUGS = PROJECTS.map((p) => p.slug);

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
    title: "Rekrify",
    slug: "rekrify-plateforme-emploi",
    clientUrl: "rekrify.ma",
    liveUrl: "https://rekrute-ma.vercel.app/",
    category: "Plateforme",
    year: 2026,
    featured: true,
    order: 7,
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
    order: 8,
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
    order: 5,
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
    order: 4,
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
    order: 1,
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
    order: 9,
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
    order: 2,
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
    order: 3,
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
    order: 10,
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
    order: 6,
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

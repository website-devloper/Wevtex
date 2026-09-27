/**
 * The search sections, as blog posts.
 *
 * These answers used to sit at the bottom of each service page (the .seo-grid
 * cards). The owner moved them to the blog on 2026-09-27: the service page now
 * sells, the post answers. The prose is not duplicated — it lives here only.
 *
 * Bodies are assembled from lib/service-seo.ts so there is still one source of
 * truth for the text; only the post's own framing (title, meta, excerpt) is
 * written here. Each post targets a long-tail phrase, never the keyword its
 * service page targets, so the two never bid against each other.
 */

import type { Post, PostBlock } from "../blog-data";
import { SERVICE_SEO } from "../service-seo";
import { CITY_LINKS } from "../city-list";

/** The six cities linked at the foot of every one of these posts. */
const cityLinks = (label: string) =>
  CITY_LINKS.slice(0, 6).map((c) => ({ label: `${label} à ${c.name}`, href: `/${c.slug}` }));

/** Sections → blocks, with the service's city links closing the post. */
function body(slug: keyof typeof SERVICE_SEO): PostBlock[] {
  const seo = SERVICE_SEO[slug];
  const blocks: PostBlock[] = [];
  for (const sec of seo.sections) {
    blocks.push({ type: "h2", text: sec.h2 });
    for (const text of sec.paras) blocks.push({ type: "p", text });
    if (sec.bullets) blocks.push({ type: "ul", items: sec.bullets });
    if (sec.links) blocks.push({ type: "links", items: sec.links });
  }
  blocks.push({ type: "h2", text: `${seo.cityLabel} : où nous intervenons` });
  blocks.push({
    type: "p",
    text:
      "Nous sommes basés à Casablanca et travaillons dans tout le Maroc, en visio et sur WhatsApp. " +
      "Chaque ville a sa page, avec les mêmes prix affichés.",
  });
  blocks.push({ type: "links", items: cityLinks(seo.cityLabel) });
  return blocks;
}

const DATE = "2026-09-27";

type Meta = {
  slug: string;
  service: keyof typeof SERVICE_SEO;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  excerpt: string;
  answer: string;
  category: string;
  readingMinutes: number;
  relatedPosts: string[];
};

const META: Meta[] = [
  {
    slug: "guide-creation-site-web-maroc",
    service: "website-creation",
    title: "Créer un site web au Maroc : le guide complet",
    metaTitle: "Créer un Site Web au Maroc : Guide Complet 2026 | WEVTEX",
    metaDescription:
      "Types de sites, délais, prix affichés, référencement, hébergement et propriété du code : tout ce qu'il faut savoir avant de créer un site web au Maroc.",
    keyword: "créer un site web au maroc guide",
    excerpt:
      "Ce que contient un site professionnel, combien de temps il prend, ce qu'il coûte réellement et ce qui reste à vous une fois livré.",
    answer:
      "Créer un site web au Maroc demande trois décisions : le type de site, qui le construit, et ce que vous possédez à la fin. Ce guide répond aux trois, avec les prix affichés.",
    category: "Stratégie",
    readingMinutes: 8,
    relatedPosts: ["combien-coute-un-site-web-au-maroc", "site-vitrine-ou-boutique-en-ligne"],
  },
  {
    slug: "guide-referencement-naturel-maroc",
    service: "seo",
    title: "Le référencement naturel au Maroc, expliqué simplement",
    metaTitle: "Référencement Naturel au Maroc : Le Guide | WEVTEX",
    metaDescription:
      "Comment fonctionne le SEO au Maroc : mots-clés, contenu, technique et délais réels, avec ce qu'une agence fait concrètement chaque mois.",
    keyword: "référencement naturel maroc guide",
    excerpt:
      "Ce que fait réellement une agence SEO chaque mois, ce qui bouge en premier, et en combien de temps le travail se voit sur Google.",
    answer:
      "Le référencement naturel consiste à rendre vos pages compréhensibles par Google et utiles à ceux qui cherchent votre métier. Les premiers mouvements apparaissent vers le troisième mois.",
    category: "Référencement",
    readingMinutes: 7,
    relatedPosts: ["seo-au-maroc-par-ou-commencer", "combien-coute-un-site-web-au-maroc"],
  },
  {
    slug: "guide-seo-local-google-maps-maroc",
    service: "local-seo",
    title: "SEO local et Google Maps au Maroc : être trouvé dans son quartier",
    metaTitle: "SEO Local et Google Maps au Maroc : Le Guide | WEVTEX",
    metaDescription:
      "Fiche Google Business Profile, avis, photos, citations et pages villes : comment apparaître dans le pack local de Google au Maroc.",
    keyword: "seo local google maps maroc guide",
    excerpt:
      "Comment une fiche Google bien tenue fait sonner le téléphone, et ce qu'il faut publier pour rester devant les concurrents du quartier.",
    answer:
      "Le SEO local joue sur trois leviers : une fiche Google complète, des avis réguliers et des citations cohérentes dans les annuaires marocains. C'est le canal le plus rapide pour une activité de proximité.",
    category: "Référencement",
    readingMinutes: 6,
    relatedPosts: ["seo-au-maroc-par-ou-commencer", "comment-choisir-une-agence-web-au-maroc"],
  },
  {
    slug: "guide-google-ads-meta-ads-maroc",
    service: "ads",
    title: "Google Ads et Meta Ads au Maroc : comment ça marche vraiment",
    metaTitle: "Google Ads et Meta Ads au Maroc : Le Guide | WEVTEX",
    metaDescription:
      "Ciblage, annonces, page d'atterrissage, suivi des conversions et budget : ce que recouvre une campagne Google Ads ou Facebook Ads au Maroc.",
    keyword: "campagne google ads meta ads maroc",
    excerpt:
      "Ce que couvre une campagne, ce que coûte la gestion, ce que coûte le budget média, et comment savoir si elle rapporte.",
    answer:
      "Une campagne a deux coûts : le budget versé à Google ou à Meta, et les frais de gestion. Chez Wevtex, la gestion est à 200 DH par jour et le budget reste sous votre contrôle.",
    category: "Publicité",
    readingMinutes: 7,
    relatedPosts: ["google-ads-ou-facebook-ads-maroc", "site-web-ou-page-facebook"],
  },
  {
    slug: "guide-application-mobile-maroc",
    service: "mobile-apps",
    title: "Faire développer une application mobile au Maroc",
    metaTitle: "Développer une Application Mobile au Maroc : Guide | WEVTEX",
    metaDescription:
      "iOS et Android, Flutter, publication sur les stores, délais et périmètre : ce qu'il faut décider avant de faire développer une application au Maroc.",
    keyword: "faire développer une application mobile maroc",
    excerpt:
      "Ce qui fait vraiment varier le prix d'une application, ce que la publication sur les stores implique, et ce qu'il faut préparer avant de commencer.",
    answer:
      "Une application iOS et Android démarre à 8 000 DH chez Wevtex, publication comprise. Le périmètre, écran par écran, est chiffré avant le premier jour de développement.",
    category: "Technologie",
    readingMinutes: 7,
    relatedPosts: ["combien-coute-une-application-mobile-au-maroc", "nextjs-ou-wordpress-quel-choix"],
  },
  {
    slug: "guide-logiciel-sur-mesure-maroc",
    service: "desktop-apps",
    title: "Logiciel sur mesure au Maroc : quand quitter Excel",
    metaTitle: "Logiciel de Gestion sur Mesure au Maroc : Guide | WEVTEX",
    metaDescription:
      "Gestion, facturation, stock : quand un logiciel sur mesure remplace les fichiers Excel, ce qu'il coûte au Maroc et ce qu'il faut prévoir.",
    keyword: "logiciel de gestion sur mesure maroc",
    excerpt:
      "Les signes qu'un tableur a fait son temps, ce qu'un logiciel sur mesure change au quotidien, et ce que vous possédez à la fin.",
    answer:
      "Un logiciel sur mesure démarre à 4 999 DH chez Wevtex, sans licence mensuelle. Il vaut le coup dès que vos fichiers Excel sont partagés, corrigés à la main et recopiés d'un poste à l'autre.",
    category: "Technologie",
    readingMinutes: 6,
    relatedPosts: ["nextjs-ou-wordpress-quel-choix", "comment-choisir-une-agence-web-au-maroc"],
  },
  {
    slug: "guide-developpement-web-sur-mesure-maroc",
    service: "custom-solutions",
    title: "Développement web sur mesure : quand le logiciel du marché ne suffit plus",
    metaTitle: "Développement Web sur Mesure au Maroc : Guide | WEVTEX",
    metaDescription:
      "Plateformes métier, portails clients, outils internes : comment cadrer un développement web sur mesure au Maroc et à quel prix.",
    keyword: "développement web sur mesure maroc",
    excerpt:
      "Comment reconnaître un projet qui mérite du sur-mesure, comment le cadrer, et comment éviter le devis qui double en cours de route.",
    answer:
      "Le sur-mesure se justifie quand votre façon de travailler est un avantage que le marché ne vend pas. Le cadrage vient toujours avant le prix, jamais l'inverse.",
    category: "Stratégie",
    readingMinutes: 6,
    relatedPosts: ["comment-choisir-une-agence-web-au-maroc", "nextjs-ou-wordpress-quel-choix"],
  },
  {
    slug: "guide-chatbot-whatsapp-maroc",
    service: "whatsapp-bots",
    title: "Chatbot WhatsApp au Maroc : répondre sans y passer la journée",
    metaTitle: "Chatbot WhatsApp au Maroc : Le Guide | WEVTEX",
    metaDescription:
      "API WhatsApp Business, scénarios, qualification des demandes et prix : comment automatiser vos réponses WhatsApp au Maroc.",
    keyword: "automatiser whatsapp business maroc",
    excerpt:
      "Ce qu'un chatbot WhatsApp peut répondre à votre place, ce qu'il doit passer à un humain, et ce que l'API officielle change.",
    answer:
      "Un chatbot WhatsApp répond aux questions qui reviennent, qualifie la demande et vous passe la main au bon moment. Il travaille la nuit, le dimanche et pendant vos rendez-vous.",
    category: "Automatisation",
    readingMinutes: 6,
    relatedPosts: ["chatbot-whatsapp-pme-marocaine", "vendre-en-ligne-au-maroc"],
  },
];

export const POSTS_SEO: Post[] = META.map((m) => ({
  slug: m.slug,
  title: m.title,
  metaTitle: m.metaTitle,
  metaDescription: m.metaDescription,
  keyword: m.keyword,
  excerpt: m.excerpt,
  answer: m.answer,
  category: m.category,
  publishedAt: DATE,
  readingMinutes: m.readingMinutes,
  relatedService: m.service,
  relatedPosts: m.relatedPosts,
  body: body(m.service),
}));

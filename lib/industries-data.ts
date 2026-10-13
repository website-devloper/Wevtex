/**
 * Industry detail content. Plain data (no JSX) — imported by the server route
 * (metadata + JSON-LD) and the client view. One entry = one /industries/[slug] page.
 * Copy is French: the site is served in French only.
 */

import { fillPricesDeep } from "./pricing";

export type Industry = {
  slug: string;
  name: string;
  keyword: string;
  /** Other phrases people type for this sector (Google autocomplete, Morocco). */
  seoKeywords?: string[];
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Em: string[];
  intro: string;
  includes: string[];
  outcomes: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = fillPricesDeep([
  {
    slug: "ecommerce-retail",
    name: "E-commerce & commerce de détail",
    keyword: "site e-commerce Maroc",
    seoKeywords: ["boutique en ligne maroc", "site e-commerce cosmétiques maroc", "site e-commerce vêtements maroc", "boutique en ligne vêtements"],
    metaTitle: "Sites e-commerce & commerce de détail | Wevtex",
    metaDescription:
      "Boutiques en ligne pour la mode, la beauté, la maison et l'alimentaire : paiement sécurisé, stocks et commandes gérés. Devis gratuit.",
    eyebrow: "E-commerce & commerce de détail",
    h1: "Des boutiques en ligne\nqui vendent vraiment.",
    h1Em: ["vendent", "vraiment."],
    intro:
      "Vous vendez déjà sur Instagram ou en boutique, et vous répondez cent fois au même prix sur WhatsApp. Nous créons la boutique en ligne qui vend à votre place : catalogue clair, paiement à la livraison ou par carte, stocks à jour et commandes suivies.",
    includes: [
      "Panier et paiement sécurisé avec les moyens de paiement locaux.",
      "Gestion du catalogue, des stocks et des déclinaisons produits.",
      "Suivi des commandes, pour vous comme pour vos clients.",
      "Design mobile-first, orienté conversion.",
    ],
    outcomes: [
      { h: "Moins de paniers abandonnés", p: "Un tunnel de commande en trois étapes, les moyens de paiement locaux acceptés, et des pages qui s'ouvrent en moins d'une seconde sur mobile." },
      { h: "Des stocks toujours justes", p: "Catalogue, déclinaisons et quantités pilotés depuis un seul écran, sans double saisie entre la boutique et le point de vente." },
      { h: "Trouvé au moment de l'achat", p: "Vos fiches produits écrites pour les recherches qui précèdent une commande, pas seulement pour votre nom de marque." },
    ],
    faqs: [
      { q: "Pouvez-vous migrer ma boutique actuelle ?", a: "Oui. Nous migrons produits, clients et commandes depuis la plupart des plateformes, avec une interruption minimale." },
      { q: "Gérez-vous les paiements ?", a: "Oui. Nous mettons en place Stripe ainsi que les moyens de paiement locaux adaptés à votre marché." },
      { q: "Créez-vous des sites e-commerce de cosmétiques et de vêtements au Maroc ?", a: "Oui. Un site e-commerce de cosmétiques ou de vêtements au Maroc demande des fiches produits soignées, des déclinaisons (tailles, teintes), le paiement à la livraison et une confirmation de commande par WhatsApp. Nous avons livré une boutique de cosmétiques marocains avec un assistant de conseil et une boutique de caftans de luxe, visibles dans nos réalisations." },
      { q: "Combien coûte un site e-commerce au Maroc ?", a: "Chez Wevtex, une boutique en ligne complète démarre à {{prix:website-creation/Boutique}} DH, livrée en 4 à 8 semaines, avec paiement, gestion des stocks et formation. Une boutique en ligne de vêtements avec beaucoup de déclinaisons se chiffre selon le catalogue." },
    ],
  },
  {
    slug: "tourism-hospitality",
    name: "Tourisme & hôtellerie",
    keyword: "site de réservation hôtel Maroc",
    seoKeywords: ["site web hôtel maroc", "site réservation hôtel maroc", "site web riad", "site web restaurant maroc", "site web agence de voyage", "création site web hôtel"],
    metaTitle: "Sites pour le tourisme & l'hôtellerie | Wevtex",
    metaDescription:
      "Sites de réservation directe pour hôtels, riads et agences de voyage : disponibilités, paiement en ligne et visites virtuelles.",
    eyebrow: "Tourisme & hôtellerie",
    h1: "Des réservations directes,\nmoins de commissions.",
    h1Em: ["moins", "de", "commissions."],
    intro:
      "Chaque nuitée réservée sur une plateforme vous coûte une commission. Nous créons le site de votre hôtel, riad ou agence de voyage qui prend la réservation en direct : disponibilités en temps réel, paiement sécurisé et pages dans la langue de vos clients.",
    includes: [
      "Moteur de réservation directe avec disponibilités en temps réel.",
      "Paiements et acomptes en ligne sécurisés.",
      "Visites virtuelles et galeries qui donnent envie de réserver.",
      "Pages multilingues pour votre clientèle internationale.",
    ],
    outcomes: [
      { h: "Des réservations en direct", p: "Un moteur sur votre propre site : chaque réservation prise chez vous est une commission que vous ne versez pas aux plateformes." },
      { h: "Des demandes traitées la nuit", p: "Disponibilités, tarifs et transferts répondus automatiquement sur WhatsApp, y compris en dehors de vos horaires." },
      { h: "Visible avant la réservation", p: "Vos pages positionnées sur les recherches de séjour, des semaines avant que la date du voyage soit fixée." },
    ],
    faqs: [
      { q: "Est-ce compatible avec mon channel manager ?", a: "Oui. Nous pouvons synchroniser les disponibilités avec les principaux outils de réservation et de channel management." },
      { q: "Les clients peuvent-ils ne payer qu'un acompte ?", a: "Oui. Nous configurons l'acompte, le paiement intégral ou le paiement sur place, selon votre politique." },
      { q: "Créez-vous des sites de réservation pour hôtels et riads au Maroc ?", a: "Oui. La création d'un site web d'hôtel ou de riad au Maroc vise la réservation directe : disponibilités, paiement et plusieurs langues, pour réduire la part laissée aux plateformes de réservation." },
      { q: "Faites-vous des sites pour restaurants et agences de voyage ?", a: "Oui. Pour un restaurant au Maroc, le site web présente la carte, l'accès et la réservation ; pour une agence de voyage, le site web devient une plateforme avec recherche de séjours et paiement. Nous avons réalisé la plateforme d'une agence de voyages marocaine et le site d'un café-brunch à Casablanca, visibles dans nos réalisations." },
    ],
  },
  {
    slug: "professional-services",
    name: "Services professionnels",
    keyword: "site internet avocat Maroc",
    seoKeywords: ["site internet cabinet d'avocat", "site internet cabinet comptable", "site internet cabinet d'expertise comptable", "site web immobilier maroc", "site agence immobilière maroc", "site internet cabinet d'architecture"],
    metaTitle: "Sites pour les services professionnels | Wevtex",
    metaDescription:
      "Des sites qui inspirent confiance aux avocats, experts-comptables, agences immobilières et consultants, conçus pour capter des contacts qualifiés.",
    eyebrow: "Services professionnels",
    h1: "La confiance d'abord,\nles contacts ensuite.",
    h1Em: ["les", "contacts", "ensuite."],
    intro:
      "Dans votre métier, un client choisit à qui confier son dossier avant même d'appeler. Pour les cabinets d'avocats, experts-comptables, agences immobilières et consultants, nous créons un site qui rassure, montre vos preuves et transforme une visite en rendez-vous qualifié.",
    includes: [
      "Un design qui met en avant votre expertise et vos preuves.",
      "Formulaires de contact et prise de rendez-vous en ligne.",
      "Pages métiers et équipe qui installent la confiance.",
      "Contenu optimisé pour les recherches locales.",
    ],
    outcomes: [
      { h: "Des demandes déjà qualifiées", p: "Un formulaire qui recueille le contexte du dossier, pour que le premier échange commence informé plutôt qu'à zéro." },
      { h: "Une crédibilité immédiate", p: "Références, méthode et tarifs présentés clairement : le doute se lève avant l'appel, pas pendant." },
      { h: "Moins d'allers-retours", p: "Portail client, documents et suivi de dossier consultables en ligne, sans passer par votre secrétariat." },
    ],
    faqs: [
      { q: "Mes clients peuvent-ils prendre rendez-vous en ligne ?", a: "Oui. Nous intégrons un système de prise de rendez-vous directement depuis votre site." },
      { q: "Le site sortira-t-il sur ma ville ?", a: "Chaque site est livré prêt pour le référencement et nous ciblons votre ville ainsi que vos domaines d'intervention." },
      { q: "Un site internet de cabinet d'avocat doit-il respecter des règles ?", a: "Oui. La communication des avocats est encadrée par les règles de la profession : au Maroc, nous rédigeons un site internet de cabinet d'avocat informatif, sans promesse de résultat ni sollicitation, que vous validez avant publication. Le même soin vaut pour le site internet d'un cabinet comptable, d'expertise comptable ou d'architecture." },
      { q: "Créez-vous des sites web pour l'immobilier au Maroc ?", a: "Oui. Un site web immobilier au Maroc, ou le site d'une agence immobilière au Maroc, permet la recherche de biens par ville, budget et type, avec des fiches soignées et un contact direct. Nous avons réalisé une plateforme immobilière de prestige, visible dans nos réalisations." },
    ],
  },
  {
    slug: "healthcare-wellness",
    name: "Santé & bien-être",
    keyword: "site web clinique Maroc",
    seoKeywords: ["site web médecin", "site web clinique médicale", "site web dentiste", "site internet cabinet dentaire", "site internet cabinet médical", "site web clinique dentaire"],
    metaTitle: "Sites pour la santé & le bien-être | Wevtex",
    metaDescription:
      "Sites pour cliniques, salles de sport et thérapeutes : formulaires patients sécurisés et réservation de séances en ligne.",
    eyebrow: "Santé & bien-être",
    h1: "Des soins simples\nà réserver en ligne.",
    h1Em: ["simples", "à", "réserver"],
    intro:
      "Vos patients cherchent le soir, quand le cabinet est fermé. Pour les cliniques, cabinets, studios de sport et thérapeutes, nous créons un site qui explique vos soins simplement, présente l'équipe et prend les rendez-vous en ligne, à toute heure.",
    includes: [
      "Formulaires patients et de contact sécurisés.",
      "Réservation de séances et de rendez-vous.",
      "Présentation claire des prestations et des praticiens.",
      "Design mobile-first et accessible.",
    ],
    outcomes: [
      { h: "Un agenda qui se remplit seul", p: "La prise de rendez-vous en ligne fonctionne le soir et le week-end, précisément quand vos patients cherchent." },
      { h: "Moins de rendez-vous manqués", p: "Confirmation et rappel automatiques sur WhatsApp, avec la possibilité de déplacer le créneau en un message." },
      { h: "Un patient rassuré avant d'entrer", p: "Soins expliqués simplement, équipe présentée, tarifs annoncés : les questions gênantes ont déjà leur réponse." },
    ],
    faqs: [
      { q: "Les formulaires patients sont-ils sécurisés ?", a: "Oui. Les données transitent en HTTPS et nous appliquons les bonnes pratiques en matière de confidentialité." },
      { q: "Les adhérents peuvent-ils réserver un cours ?", a: "Oui. Nous pouvons ajouter le planning et la réservation adaptés à votre studio ou votre cabinet." },
      { q: "Créez-vous des sites pour cabinets dentaires, médecins et cliniques ?", a: "Oui. Un site web de dentiste, de médecin ou de clinique médicale au Maroc présente les soins, les praticiens, l'accès et la prise de rendez-vous, sur un ton informatif. Le site internet d'un cabinet dentaire ou d'un cabinet médical reste sobre et clair. Nous avons réalisé le site web d'une clinique dentaire, visible dans nos réalisations." },
      { q: "La prise de rendez-vous en ligne est-elle possible ?", a: "Oui. Le site peut proposer des créneaux réels, un formulaire de demande ou un lien WhatsApp, selon la façon dont votre secrétariat travaille." },
    ],
  },
  {
    slug: "industry-logistics",
    name: "Industrie & logistique",
    keyword: "site web BTP Maroc",
    seoKeywords: ["site web entreprise btp maroc", "site web entreprise btp casablanca", "site web industriel", "site web logistique et transport"],
    metaTitle: "Sites pour l'industrie & la logistique | Wevtex",
    metaDescription:
      "Sites pour le BTP, l'industrie et le transport : valorisez votre flotte et vos chantiers, et recevez facilement des demandes de devis B2B.",
    eyebrow: "Industrie & logistique",
    h1: "Montrez vos chantiers,\ngagnez vos appels d'offres.",
    h1Em: ["gagnez", "vos", "appels", "d'offres."],
    intro:
      "Un acheteur compare trois fournisseurs en dix minutes, et il appelle celui dont le site montre des chantiers, des certifications et un formulaire de devis clair. Nous créons ce site pour les entreprises du BTP, de l'industrie et du transport.",
    includes: [
      "Portfolio de chantiers et présentation de votre flotte.",
      "Formulaires de demande de devis adaptés à vos prestations.",
      "Pages savoir-faire et certifications qui rassurent.",
      "Un site rapide et professionnel sur tous les écrans.",
    ],
    outcomes: [
      { h: "Des devis partis plus vite", p: "Fiches techniques et références disponibles en ligne : l'acheteur trouve ce qu'il cherche sans mobiliser vos équipes." },
      { h: "Moins de saisie manuelle", p: "Vos outils métier communiquent entre eux, les données ne sont plus recopiées d'un fichier à l'autre." },
      { h: "Un suivi que le client consulte seul", p: "État de commande et d'expédition en libre-service, ce qui allège d'autant votre standard téléphonique." },
    ],
    faqs: [
      { q: "Pouvez-vous présenter nos réalisations passées ?", a: "Oui. Nous créons des sections portfolio et études de cas pour valoriser vos chantiers." },
      { q: "Peut-on demander un devis en ligne ?", a: "Oui. Nous construisons des formulaires de devis calibrés sur vos prestations." },
      { q: "Que doit contenir le site web d'une entreprise BTP au Maroc ?", a: "Le site web d'une entreprise BTP au Maroc montre les chantiers réalisés, les corps de métier, les certifications et une demande de devis structurée. Pour le site web d'une entreprise BTP de Casablanca ou d'ailleurs, c'est ce qui rassure un maître d'ouvrage avant l'appel." },
      { q: "Un site web industriel ou de logistique peut-il présenter un catalogue technique ?", a: "Oui. Un site web industriel, ou un site web de logistique et de transport, peut présenter un catalogue technique, des fiches téléchargeables, un espace documents et une demande de devis B2B." },
    ],
  },
  {
    slug: "education-elearning",
    name: "Éducation & e-learning",
    keyword: "plateforme e-learning Maroc",
    seoKeywords: ["site web école privée", "site web école de formation", "plateforme e-learning maroc", "site web éducatif"],
    metaTitle: "Sites pour l'éducation & le e-learning | Wevtex",
    metaDescription:
      "Sites et plateformes pour écoles, cours en ligne et centres de formation : espaces élèves, hébergement vidéo et modules de certification.",
    eyebrow: "Éducation & e-learning",
    h1: "Apprendre partout,\nsur tous les écrans.",
    h1Em: ["sur", "tous", "les", "écrans."],
    intro:
      "Une famille ou un futur stagiaire se décide souvent sur votre site. Pour les écoles, centres de formation et cours en ligne, nous créons des sites et des plateformes qui présentent vos programmes, prennent les inscriptions et suivent la progression des élèves.",
    includes: [
      "Espaces élèves avec suivi de progression.",
      "Hébergement vidéo et parcours de formation structurés.",
      "Modules d'évaluation et de certification.",
      "Inscription et paiement pour les formations payantes.",
    ],
    outcomes: [
      { h: "Des sessions qui se remplissent", p: "Programmes, dates et conditions clairs, avec une inscription qui aboutit en ligne au lieu de s'arrêter à un e-mail." },
      { h: "Moins de dossiers incomplets", p: "Relance automatique des pièces manquantes, sans mobiliser votre équipe administrative." },
      { h: "Des apprenants qui reviennent", p: "Cours, devoirs et progression accessibles depuis un téléphone, entre deux séances." },
    ],
    faqs: [
      { q: "Peut-on vendre des formations en ligne ?", a: "Oui. Nous ajoutons l'inscription et le paiement pour vendre vos formations directement." },
      { q: "Les élèves reçoivent-ils un certificat ?", a: "Oui. Nous pouvons intégrer des modules d'évaluation et de certification à la plateforme." },
      { q: "Créez-vous des sites pour écoles privées et centres de formation ?", a: "Oui. Le site web d'une école privée ou d'une école de formation présente l'établissement, les programmes, les inscriptions en ligne et un espace parents ou élèves. C'est souvent le premier contact des familles." },
      { q: "Combien coûte une plateforme e-learning au Maroc ?", a: "Une plateforme e-learning sur mesure au Maroc, avec comptes, cours, suivi et paiement, relève de nos solutions sur mesure : le cadrage démarre à {{prix:custom-solutions/Entreprises}} DH et le développement est chiffré sur le périmètre qui en sort. Un site web éducatif plus simple suit le prix d'un site vitrine." },
    ],
  },
  {
    slug: "creative-media-tech",
    name: "Création, médias & tech",
    keyword: "site vitrine startup Maroc",
    seoKeywords: ["site portfolio", "site portfolio graphiste", "site web photographe professionnel"],
    metaTitle: "Sites pour la création, les médias & la tech | Wevtex",
    metaDescription:
      "Pages d'atterrissage et sites animés rapides pour startups SaaS, agences et créateurs, conçus pour convertir vos premiers utilisateurs.",
    eyebrow: "Création, médias & tech",
    h1: "Des sites qui sortent\ndu lot, comme vous.",
    h1Em: ["comme", "vous."],
    intro:
      "Vos clients achètent votre goût, et un site lent ou banal le contredit. Pour les startups, agences, médias et créateurs, nous concevons des sites et des pages d'atterrissage à la hauteur de votre travail, qui transforment les curieux en clients.",
    includes: [
      "Pages d'atterrissage animées et ultra-performantes.",
      "Pages produit et fonctionnalités qui expliquent vite la valeur.",
      "Captation de contacts, liste d'attente et inscription.",
      "Un design qui vous distingue de la concurrence.",
    ],
    outcomes: [
      { h: "Votre travail vu en premier", p: "Un portfolio qui charge vite et met les images et les vidéos au premier plan, sans habillage qui les retarde." },
      { h: "Des briefs mieux cadrés", p: "Un formulaire qui pose les bonnes questions, budget, délai, périmètre, avant le premier rendez-vous." },
      { h: "Un site à votre niveau", p: "Une identité tenue jusque dans le détail des interactions, parce que c'est précisément ce que vos clients achètent." },
    ],
    faqs: [
      { q: "Pouvez-vous faire le site vitrine et le produit ?", a: "Oui. Du site marketing jusqu'au produit lui-même, nous pouvons construire les deux." },
      { q: "En combien de temps peut-on lancer ?", a: "Une page d'atterrissage peut être en ligne en quelques jours ; un produit complet demande plus de temps. Nous vous donnons un délai ferme." },
      { q: "Créez-vous des sites portfolio pour photographes et graphistes ?", a: "Oui. Un site web de photographe professionnel ou un site portfolio de graphiste met les images en valeur sans les ralentir : galeries optimisées, pages projet et contact direct. Nous avons réalisé le site d'un studio de photographie et celui d'une agence créative à Casablanca, visibles dans nos réalisations." },
      { q: "Faites-vous le site vitrine d'une startup ?", a: "Oui. Au Maroc comme ailleurs, le site vitrine d'une startup explique le produit en une phrase, montre l'interface et mène à l'essai ou à la démo. Nous le construisons en Next.js pour qu'il évolue avec le produit." },
    ],
  },
  {
    slug: "public-sector-ngos",
    name: "Secteur public & associations",
    keyword: "site web association Maroc",
    seoKeywords: ["site web association", "site web ong humanitaire", "site web association sportive", "site web association culturelle"],
    metaTitle: "Sites pour le secteur public & les associations | Wevtex",
    metaDescription:
      "Sites accessibles pour associations, fondations et institutions publiques : collecte de dons, animation de communauté et design inclusif.",
    eyebrow: "Secteur public & associations",
    h1: "Informer, et donner\nenvie d'agir.",
    h1Em: ["donner", "envie", "d'agir."],
    intro:
      "Une association vit de la confiance qu'elle inspire. Pour les associations, fondations et institutions, nous créons des sites accessibles à tous, qui expliquent votre mission, recrutent des bénévoles et recueillent les dons en quelques clics.",
    includes: [
      "Un design accessible, conforme aux recommandations WCAG.",
      "Collecte de dons sécurisée.",
      "Animation de communauté et inscription des bénévoles.",
      "Une information claire et multilingue, pour tous.",
    ],
    outcomes: [
      { h: "Une information accessible à tous", p: "Contrastes, navigation au clavier et lecture d'écran pris en compte, pour que personne ne soit laissé de côté." },
      { h: "Des dons et adhésions simplifiés", p: "Un parcours court et sécurisé, qui fonctionne aussi bien sur un téléphone d'entrée de gamme." },
      { h: "Moins de sollicitations répétitives", p: "Les questions fréquentes traitées en ligne et sur WhatsApp : votre équipe se concentre sur le terrain." },
    ],
    faqs: [
      { q: "Peut-on faire un don en ligne ?", a: "Oui. Nous mettons en place une collecte de dons sécurisée avec les options dont vous avez besoin." },
      { q: "Le site est-il accessible ?", a: "Oui. Nous construisons selon les standards d'accessibilité WCAG, pour que tout le monde puisse l'utiliser." },
      { q: "Créez-vous des sites pour associations et ONG au Maroc ?", a: "Oui. Le site web d'une association culturelle ou sportive présente la mission, les actions et les appels à bénévoles ; le site web d'une ONG humanitaire met en avant les campagnes et les dons, avec un contenu accessible à tous." },
      { q: "Un site d'association peut-il recevoir des dons en ligne ?", a: "Oui. Le site internet d'une association peut intégrer le don en ligne par carte, avec une confirmation automatique au donateur et une page de campagne pour chaque appel." },
    ],
  },
]);

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug);
export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);

/* ---------------------------------------------------------------------------
 * What each service means for a given sector.
 *
 * Kept as a separate map rather than a field on Industry so the sector copy
 * above stays readable, and so a service can be added or reworded for every
 * sector in one place.
 *
 * The line is written for the sector, not copied from the service page: a
 * hotelier and a dentist both need "un site", but they are not buying the same
 * thing, and a page that says the same sentence to both ranks for neither.
 * Keys are service slugs from homeContent.ts.
 * ------------------------------------------------------------------------- */
export type IndustryService = { slug: string; line: string };

export const INDUSTRY_SERVICES: Record<string, IndustryService[]> = {
  "ecommerce-retail": [
    { slug: "website-creation", line: "Votre boutique en ligne, du catalogue au paiement, pensée pour l'achat sur mobile." },
    { slug: "seo", line: "Vos fiches produits positionnées sur les recherches d'achat, pas seulement sur votre nom de marque." },
    { slug: "ads", line: "Des campagnes Google Shopping et Meta qui ramènent des acheteurs, avec un coût par vente suivi." },
    { slug: "whatsapp-bots", line: "Un assistant qui répond aux questions produit, suit les commandes et relance les paniers abandonnés." },
    { slug: "custom-solutions", line: "Synchronisation des stocks entre votre boutique, votre point de vente et vos marketplaces." },
    { slug: "local-seo", line: "Votre magasin visible sur Maps quand on cherche votre produit à proximité." },
    { slug: "mobile-apps", line: "Une application boutique pour vos clients fidèles : commande en deux gestes et notifications." },
    { slug: "desktop-apps", line: "Un logiciel de caisse et de gestion des stocks pour votre point de vente." },
  ],
  "tourism-hospitality": [
    { slug: "website-creation", line: "Un site avec moteur de réservation en direct, pour cesser de tout laisser aux plateformes." },
    { slug: "local-seo", line: "Votre établissement en tête sur Maps et sur les recherches « hôtel » ou « riad » dans votre ville." },
    { slug: "seo", line: "Des pages qui captent les recherches de séjour bien avant la date d'arrivée." },
    { slug: "ads", line: "Des campagnes ciblées sur vos marchés émetteurs, en basse comme en haute saison." },
    { slug: "whatsapp-bots", line: "Réponses instantanées sur les disponibilités, les tarifs et les transferts, 24h/24." },
    { slug: "mobile-apps", line: "Une application pour le check-in, les services sur place et la fidélisation." },
    { slug: "custom-solutions", line: "Gestion des réservations, des chambres et des tarifs, connectée à vos canaux." },
    { slug: "desktop-apps", line: "Un logiciel de réception qui continue de fonctionner quand la connexion tombe." },
  ],
  "professional-services": [
    { slug: "website-creation", line: "Un site qui inspire confiance et transforme les visiteurs en rendez-vous." },
    { slug: "local-seo", line: "Votre cabinet trouvé sur Maps quand on cherche votre spécialité dans votre ville." },
    { slug: "seo", line: "Des pages d'expertise positionnées sur les questions que vos clients tapent avant d'appeler." },
    { slug: "custom-solutions", line: "Portails clients, espaces documents et suivi de dossiers sécurisés." },
    { slug: "ads", line: "Des campagnes qui vous amènent des dossiers qualifiés, pas des curieux." },
    { slug: "whatsapp-bots", line: "Qualification des demandes et prise de rendez-vous automatisées." },
    { slug: "mobile-apps", line: "Une application pour vos clients : suivi de dossier et échange de documents." },
    { slug: "desktop-apps", line: "Des outils bureau pour les traitements lourds et les données sensibles." },
  ],
  "healthcare-wellness": [
    { slug: "website-creation", line: "Un site rassurant, avec prise de rendez-vous en ligne et présentation claire des soins." },
    { slug: "local-seo", line: "Votre cabinet visible sur Maps au moment où un patient cherche près de chez lui." },
    { slug: "whatsapp-bots", line: "Confirmation et rappel des rendez-vous, pour réduire les absences." },
    { slug: "seo", line: "Des pages de soins qui répondent aux questions posées avant de prendre rendez-vous." },
    { slug: "custom-solutions", line: "Gestion des patients, agenda et dossiers, dans le respect de la confidentialité." },
    { slug: "ads", line: "Des campagnes locales mesurées au nombre de rendez-vous obtenus." },
    { slug: "mobile-apps", line: "Une application patient : rendez-vous, ordonnances et rappels de traitement." },
    { slug: "desktop-apps", line: "Un logiciel de cabinet qui reste accessible sans connexion internet." },
  ],
  "industry-logistics": [
    { slug: "website-creation", line: "Un site catalogue clair, avec fiches techniques et demande de devis simplifiée." },
    { slug: "custom-solutions", line: "Outils métier : suivi de flotte, gestion d'entrepôt, portails fournisseurs." },
    { slug: "desktop-apps", line: "Logiciels bureau pour les postes qui doivent fonctionner sans connexion." },
    { slug: "seo", line: "Un positionnement sur les recherches B2B de vos acheteurs et donneurs d'ordre." },
    { slug: "mobile-apps", line: "Applications terrain pour vos équipes : scan, saisie et remontée d'informations." },
    { slug: "whatsapp-bots", line: "Suivi de commande et d'expédition consultable directement sur WhatsApp." },
    { slug: "ads", line: "Des campagnes B2B ciblées sur les acheteurs et les responsables achats." },
    { slug: "local-seo", line: "Vos sites, dépôts et agences visibles sur Maps." },
  ],
  "education-elearning": [
    { slug: "website-creation", line: "Un site qui présente vos formations et remplit vos sessions d'inscription." },
    { slug: "custom-solutions", line: "Plateforme de cours, suivi des apprenants, quiz et certificats." },
    { slug: "seo", line: "Des pages formation positionnées sur ce que cherchent vos futurs inscrits." },
    { slug: "ads", line: "Des campagnes calées sur vos périodes d'inscription." },
    { slug: "whatsapp-bots", line: "Réponses aux questions d'admission et relance des dossiers incomplets." },
    { slug: "mobile-apps", line: "Une application pour suivre les cours et les devoirs depuis un téléphone." },
    { slug: "desktop-apps", line: "Des logiciels de salle et de laboratoire pour vos postes fixes." },
    { slug: "local-seo", line: "Votre établissement visible sur Maps au moment des inscriptions." },
  ],
  "creative-media-tech": [
    { slug: "website-creation", line: "Un portfolio qui met votre production au premier plan, sans la ralentir." },
    { slug: "seo", line: "Une visibilité sur les recherches de prestataires dans votre discipline." },
    { slug: "custom-solutions", line: "Outils sur mesure : espaces clients, livraison de fichiers, gestion de projets." },
    { slug: "mobile-apps", line: "Votre produit porté sur iOS et Android à partir d'une seule base de code." },
    { slug: "ads", line: "Des campagnes pour lancer un produit ou remplir un carnet de commandes." },
    { slug: "desktop-apps", line: "Applications bureau performantes pour les métiers créatifs exigeants." },
    { slug: "whatsapp-bots", line: "Qualification des demandes entrantes et prise de brief automatisées." },
    { slug: "local-seo", line: "Votre studio trouvé sur Maps par les clients de votre ville." },
  ],
  "public-sector-ngos": [
    { slug: "website-creation", line: "Un site accessible et clair, qui informe et donne envie d'agir." },
    { slug: "custom-solutions", line: "Formulaires, dons en ligne, gestion des bénévoles et des adhérents." },
    { slug: "seo", line: "Vos actions et vos ressources trouvables par ceux qui en ont besoin." },
    { slug: "whatsapp-bots", line: "Information et orientation du public, sans mobiliser une équipe." },
    { slug: "local-seo", line: "Vos antennes et permanences visibles sur Maps." },
    { slug: "ads", line: "Des campagnes de sensibilisation ciblées et mesurées." },
    { slug: "mobile-apps", line: "Une application pour vos membres, vos bénévoles ou vos usagers." },
    { slug: "desktop-apps", line: "Des outils bureau pour vos équipes internes et vos permanences." },
  ],
};

/**
 * Industry detail content. Plain data (no JSX) — imported by the server route
 * (metadata + JSON-LD) and the client view. One entry = one /industries/[slug] page.
 * Copy is French: the site is served in French only.
 */

export type Industry = {
  slug: string;
  name: string;
  keyword: string;
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

export const INDUSTRIES: Industry[] = [
  {
    slug: "ecommerce-retail",
    name: "E-commerce & commerce de détail",
    keyword: "création site e-commerce Maroc",
    metaTitle: "Sites e-commerce & commerce de détail | Wevtex",
    metaDescription:
      "Boutiques en ligne pour la mode, la beauté, la maison et l'alimentaire : paiement sécurisé, stocks et commandes gérés. Devis gratuit.",
    eyebrow: "E-commerce & commerce de détail",
    h1: "Des boutiques en ligne\nqui vendent vraiment.",
    h1Em: ["vendent", "vraiment."],
    intro:
      "Pour les marques de mode, de beauté, de décoration et les commerces alimentaires, nous créons des boutiques en ligne qui transforment les visiteurs en acheteurs : panier, paiement sécurisé et gestion des stocks simple à piloter au quotidien.",
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
    ],
  },
  {
    slug: "tourism-hospitality",
    name: "Tourisme & hôtellerie",
    keyword: "site de réservation hôtel Maroc",
    metaTitle: "Sites pour le tourisme & l'hôtellerie | Wevtex",
    metaDescription:
      "Sites de réservation directe pour hôtels, riads et agences de voyage : disponibilités, paiement en ligne et visites virtuelles.",
    eyebrow: "Tourisme & hôtellerie",
    h1: "Des réservations directes,\nmoins de commissions.",
    h1Em: ["moins", "de", "commissions."],
    intro:
      "Pour les hôtels, riads, resorts et agences de voyage, nous créons des sites qui génèrent des réservations en direct — disponibilités en temps réel, paiement sécurisé et visites virtuelles — pour que vous dépendiez moins des plateformes à forte commission.",
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
    ],
  },
  {
    slug: "professional-services",
    name: "Services professionnels",
    keyword: "site internet cabinet avocat comptable Maroc",
    metaTitle: "Sites pour les services professionnels | Wevtex",
    metaDescription:
      "Des sites qui inspirent confiance aux avocats, experts-comptables, agences immobilières et consultants, conçus pour capter des contacts qualifiés.",
    eyebrow: "Services professionnels",
    h1: "La confiance d'abord,\nles contacts ensuite.",
    h1Em: ["les", "contacts", "ensuite."],
    intro:
      "Pour les cabinets d'avocats, les experts-comptables, les agences immobilières et les consultants, nous créons des sites crédibles, pensés pour capter des demandes qualifiées et faciliter la prise de rendez-vous — parce que dans votre métier, c'est la confiance qui conclut.",
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
    ],
  },
  {
    slug: "healthcare-wellness",
    name: "Santé & bien-être",
    keyword: "site internet clinique salle de sport Maroc",
    metaTitle: "Sites pour la santé & le bien-être | Wevtex",
    metaDescription:
      "Sites pour cliniques, salles de sport et thérapeutes : formulaires patients sécurisés et réservation de séances en ligne.",
    eyebrow: "Santé & bien-être",
    h1: "Des soins simples\nà réserver en ligne.",
    h1Em: ["simples", "à", "réserver"],
    intro:
      "Pour les cliniques, les studios de sport et les thérapeutes, nous créons des sites avec formulaires sécurisés, réservation de séances et présentation claire des prestations — pour que vos futurs patients et adhérents vous trouvent et réservent sans effort.",
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
    ],
  },
  {
    slug: "industry-logistics",
    name: "Industrie & logistique",
    keyword: "site internet BTP transport Maroc",
    metaTitle: "Sites pour l'industrie & la logistique | Wevtex",
    metaDescription:
      "Sites pour le BTP, l'industrie et le transport : valorisez votre flotte et vos chantiers, et recevez facilement des demandes de devis B2B.",
    eyebrow: "Industrie & logistique",
    h1: "Montrez vos chantiers,\ngagnez vos appels d'offres.",
    h1Em: ["gagnez", "vos", "appels", "d'offres."],
    intro:
      "Pour les entreprises du BTP, de l'industrie et du transport, nous créons des sites qui mettent en valeur votre flotte, vos chantiers et vos savoir-faire — et qui permettent à vos clients B2B de demander un devis en quelques clics.",
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
    ],
  },
  {
    slug: "education-elearning",
    name: "Éducation & e-learning",
    keyword: "plateforme e-learning Maroc",
    metaTitle: "Sites pour l'éducation & le e-learning | Wevtex",
    metaDescription:
      "Sites et plateformes pour écoles, cours en ligne et centres de formation : espaces élèves, hébergement vidéo et modules de certification.",
    eyebrow: "Éducation & e-learning",
    h1: "Apprendre partout,\nsur tous les écrans.",
    h1Em: ["sur", "tous", "les", "écrans."],
    intro:
      "Pour les écoles, les cours en ligne et les centres de formation, nous créons des plateformes avec espaces élèves, hébergement vidéo et modules de certification — pour enseigner, suivre la progression et augmenter vos inscriptions.",
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
    ],
  },
  {
    slug: "creative-media-tech",
    name: "Création, médias & tech",
    keyword: "site internet startup agence Maroc",
    metaTitle: "Sites pour la création, les médias & la tech | Wevtex",
    metaDescription:
      "Pages d'atterrissage et sites animés rapides pour startups SaaS, agences et créateurs, conçus pour convertir vos premiers utilisateurs.",
    eyebrow: "Création, médias & tech",
    h1: "Des sites qui sortent\ndu lot, comme vous.",
    h1Em: ["comme", "vous."],
    intro:
      "Pour les startups SaaS, les agences marketing, les médias et les artisans créateurs, nous concevons des pages d'atterrissage et des sites animés à la hauteur de votre ambition — et qui transforment les curieux en utilisateurs et en clients.",
    includes: [
      "Pages d'atterrissage animées et ultra-performantes.",
      "Pages produit et fonctionnalités qui expliquent vite la valeur.",
      "Captation de contacts, liste d'attente et inscription.",
      "Un design qui vous distingue de la concurrence.",
    ],
    outcomes: [
      { h: "Votre travail vu en premier", p: "Un portfolio qui charge vite et met les images et les vidéos au premier plan, sans habillage qui les retarde." },
      { h: "Des briefs mieux cadrés", p: "Un formulaire qui pose les bonnes questions — budget, délai, périmètre — avant le premier rendez-vous." },
      { h: "Un site à votre niveau", p: "Une identité tenue jusque dans le détail des interactions, parce que c'est précisément ce que vos clients achètent." },
    ],
    faqs: [
      { q: "Pouvez-vous faire le site vitrine et le produit ?", a: "Oui. Du site marketing jusqu'au produit lui-même, nous pouvons construire les deux." },
      { q: "En combien de temps peut-on lancer ?", a: "Une page d'atterrissage peut être en ligne en quelques jours ; un produit complet demande plus de temps. Nous vous donnons un délai ferme." },
    ],
  },
  {
    slug: "public-sector-ngos",
    name: "Secteur public & associations",
    keyword: "site internet association ONG Maroc",
    metaTitle: "Sites pour le secteur public & les associations | Wevtex",
    metaDescription:
      "Sites accessibles pour associations, fondations et institutions publiques : collecte de dons, animation de communauté et design inclusif.",
    eyebrow: "Secteur public & associations",
    h1: "Informer, et donner\nenvie d'agir.",
    h1Em: ["donner", "envie", "d'agir."],
    intro:
      "Pour les associations, les fondations et les institutions publiques, nous créons des sites accessibles avec collecte de dons et outils d'animation de communauté — conçus pour informer, instaurer la confiance et donner envie de passer à l'action.",
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
    ],
  },
];

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

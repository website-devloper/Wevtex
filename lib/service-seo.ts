import type { Service } from "./services-data";

/**
 * The search layer of each service page: the phrases people actually type,
 * the question-shaped sections that answer them, and extra FAQs, kept apart
 * from the design content in services-data.ts.
 *
 * Sources, both checked 2026-09-11:
 *  - Google autocomplete for Morocco (hl=fr, gl=ma), 276 seed queries, about
 *    2 000 suggestions, filtered to Moroccan and service-relevant phrases.
 *    That is the literal wording clients type, "gratuit" and "prix" included.
 *  - The pages ranking on page one for each head term: exact term in the
 *    title and H1, question H2s, a 5 to 8 question FAQ.
 *
 * How the phrases reach the page: every keyword below appears in visible text
 * (an H2, a paragraph, an FAQ question or a link), never in a hidden block or
 * a repeated list. Google penalises keyword stuffing; it rewards a page that
 * answers the query, and that is what each section does, answer-first.
 *
 * Every price is one the service's own pricing table publishes. Questions
 * about free tools get an honest answer, which is what ranks for them.
 */

export type SeoSection = {
  h2: string;
  paras: string[];
  bullets?: string[];
  /** Internal links rendered under the section, keyword as anchor text. */
  links?: { label: string; href: string }[];
};

export type ServiceSeo = {
  /** Anchor prefix for the city links: "Agence SEO" -> "Agence SEO à Tanger". */
  cityLabel: string;
  /** The phrases this page answers, from Moroccan autocomplete. Meta keywords. */
  keywords: string[];
  sections: SeoSection[];
  /** Appended to the service's own FAQs, rendered and sent as FAQPage. */
  faqs: { q: string; a: string }[];
};

export const SERVICE_SEO: Record<string, ServiceSeo> = {
  /* ================================================================== */
  "website-creation": {
    cityLabel: "Création de site web",
    keywords: [
      "création site web maroc",
      "création site internet maroc",
      "création site web casablanca",
      "agence création site web maroc",
      "agence site web casablanca",
      "conception site web maroc",
      "développement site web maroc",
      "créateur de site web maroc",
      "prix site web maroc",
      "prix création site web maroc",
      "création site web maroc pas cher",
      "devis création site web maroc",
      "création site web professionnel",
      "création site internet professionnel prix",
      "création site web entreprise",
      "création site web pour petite entreprise",
      "création site vitrine maroc",
      "prix site vitrine maroc",
      "site vitrine ou e-commerce",
      "création site e-commerce maroc",
      "créer un site e-commerce au maroc",
      "boutique en ligne maroc",
      "site e-commerce maroc prix",
      "création site web shopify",
      "agence web shopify",
      "agence web wordpress",
      "créer un site wordpress",
      "refonte site web maroc",
      "refonte site internet maroc",
      "hébergement site web maroc",
      "créer un site web gratuit maroc",
      "création site web ia",
      "création site web marrakech",
      "création site web tanger",
      "création site web kénitra",
    ],
    sections: [
      {
        h2: "Création de site web au Maroc : ce que vous obtenez",
        paras: [
          "Wevtex est une agence de création de site web basée à Casablanca. Nous concevons des sites internet professionnels pour les entreprises marocaines : sites vitrines, sites d'entreprise de 15 pages avec rédaction, et boutiques en ligne avec paiement CMI ou Stripe. Chaque site est dessiné sur mesure, jamais tiré d'un thème acheté.",
          "Un site web professionnel doit faire trois choses : charger vite sur un téléphone en 4G, être compris par Google dès sa mise en ligne, et transformer un visiteur en appel ou en message WhatsApp. C'est sur ces trois points que se juge une création de site internet, bien plus que sur le design seul.",
        ],
        bullets: [
          "Design sur mesure, pensé mobile d'abord",
          "Référencement technique intégré : balises, plan de site, données structurées",
          "Formulaire relié à WhatsApp et à votre boîte mail",
          "Code, domaine et accès mis à votre nom",
        ],
      },
      {
        h2: "Agence de création de site web au Maroc : conception, développement, mise en ligne",
        paras: [
          "Conception de site web au Maroc, développement du site, rédaction et mise en ligne : un seul créateur de site web au Maroc s'occupe de tout, sans sous-traitance. Vous parlez directement à ceux qui dessinent et codent votre site.",
          "Création de site web professionnel pour une petite entreprise, une PME ou un groupe : le prix de création de site web au Maroc chez Wevtex démarre à {{prix:website-creation/Vitrine}} DH, et chaque devis de création de site web est gratuit et ferme. Pas cher ne veut pas dire bâclé : une création de site web au Maroc à {{prix:website-creation/Vitrine}} DH reste un site sur mesure, à votre nom.",
          "Agence web Shopify et agence web WordPress, nous réalisons la création de site web sur Shopify comme sur WordPress, et vous aidons à créer un site WordPress que vous gérez vous-même.",
        ],
      },
      {
        h2: "Combien coûte la création d'un site web au Maroc ?",
        paras: [
          "Chez Wevtex, un site vitrine jusqu'à 5 pages démarre à {{prix:website-creation/Vitrine}} DH et se livre en 7 à 14 jours. Un site d'entreprise jusqu'à 15 pages, textes rédigés et blog compris, démarre à {{prix:website-creation/Business}} DH, livré en 3 à 4 semaines. Une boutique en ligne complète démarre à {{prix:website-creation/Boutique}} DH, livrée en 4 à 8 semaines.",
          "Le prix d'une création de site internet professionnel au Maroc dépend du nombre de pages, de la rédaction des contenus, des langues et des fonctions à développer (paiement, réservation, espace client). Le devis est ferme après un échange de quinze minutes, et il ne bouge pas en cours de projet.",
        ],
        links: [{ label: "Combien coûte un site web au Maroc", href: "/blog/combien-coute-un-site-web-au-maroc" }],
      },
      {
        h2: "Création de site vitrine au Maroc",
        paras: [
          "Un site vitrine présente votre entreprise, vos services et vos réalisations, et transforme le visiteur en appel, en message WhatsApp ou en demande de devis. C'est le bon choix pour les métiers de service, les professions libérales, le BTP, la santé ou la restauration, où la vente se conclut par un échange.",
          "Le prix d'un site vitrine au Maroc chez Wevtex démarre à {{prix:website-creation/Vitrine}} DH jusqu'à 5 pages, et à {{prix:website-creation/Business}} DH jusqu'à 15 pages avec la rédaction des contenus. Même au prix le plus bas, le site est à votre nom et sur votre domaine, pas loué sur une plateforme.",
        ],
        links: [{ label: "Site vitrine ou boutique en ligne ?", href: "/blog/site-vitrine-ou-boutique-en-ligne" }],
      },
      {
        h2: "Création de site e-commerce et boutique en ligne au Maroc",
        paras: [
          "Nous créons des boutiques en ligne sur Shopify, sur WordPress avec WooCommerce, ou sur mesure en Next.js. Shopify convient pour démarrer vite avec un abonnement mensuel ; WooCommerce pour posséder entièrement la boutique ; le sur-mesure quand la vitesse ou des connexions à votre stock et votre point de vente comptent le plus.",
          "Une boutique au Maroc doit accepter la carte marocaine via CMI, la carte internationale via Stripe et le paiement à la livraison, encore préféré par beaucoup d'acheteurs. Une boutique e-commerce complète démarre à {{prix:website-creation/Boutique}} DH, livrée en 4 à 8 semaines, avec gestion des stocks, formation et six mois d'accompagnement. Pour créer un site e-commerce au Maroc, le prix d'un site e-commerce dépend ensuite du nombre de produits et des connexions à vos outils.",
        ],
        bullets: [
          "Shopify, WooCommerce ou sur mesure",
          "Paiement CMI, Stripe et paiement à la livraison",
          "Confirmation de commande par WhatsApp",
          "Frais de livraison par ville et suivi des commandes",
        ],
      },
      {
        h2: "Refonte de site web au Maroc, sans perdre son référencement",
        paras: [
          "Une refonte s'impose quand votre site est lent sur mobile, mal affiché sur téléphone, invisible sur Google ou difficile à modifier. Nous commençons par relever les pages qui apportent du trafic, puis nous redirigeons chaque ancienne adresse vers sa nouvelle page (redirections 301) pour conserver vos positions.",
          "La refonte d'un site internet au Maroc se chiffre après un audit du site existant, et le devis est ferme avant le démarrage. Nous reprenons aussi les sites WordPress vieillissants, pour les moderniser ou les migrer vers Next.js quand c'est le meilleur choix.",
        ],
        links: [{ label: "Next.js ou WordPress ?", href: "/blog/nextjs-ou-wordpress-quel-choix" }],
      },
      {
        h2: "Hébergement de site web et nom de domaine au Maroc",
        paras: [
          "Nous enregistrons votre nom de domaine, en .ma ou en .com, et mettons en place l'hébergement à votre nom, avec certificat SSL et sauvegardes. Le coût annuel figure sur le devis, séparé de la création, pour que vous sachiez exactement ce que le site coûte chaque année.",
        ],
      },
      {
        h2: "Pourquoi choisir une agence web plutôt qu'un modèle en ligne ?",
        paras: [
          "Un modèle en libre-service coûte moins cher le premier mois, mais le site reste chez la plateforme : vous le perdez le jour où vous arrêtez l'abonnement, et vous êtes limité à ce que l'outil sait faire. Une agence de création de site web vous livre un site qui vous appartient, rédigé pour les recherches de vos clients et optimisé pour la vitesse.",
          "La différence se voit surtout sur Google. Un site construit avec une structure propre, des titres qui reprennent les mots que vos clients tapent et des pages rapides se positionne ; un modèle rempli à la hâte reste invisible.",
        ],
        links: [{ label: "Comment choisir une agence web au Maroc", href: "/blog/comment-choisir-une-agence-web-au-maroc" }],
      },
    ],
    faqs: [
      {
        q: "Quel est le prix d'un site web au Maroc chez Wevtex ?",
        a: "Un site vitrine démarre à {{prix:website-creation/Vitrine}} DH, un site d'entreprise de 15 pages à {{prix:website-creation/Business}} DH et une boutique en ligne à {{prix:website-creation/Boutique}} DH. Chaque projet reçoit un devis ferme après un échange de quinze minutes.",
      },
      {
        q: "Peut-on créer un site web gratuit au Maroc ?",
        a: "Oui, avec des outils gratuits comme Google Sites ou les versions gratuites des créateurs de sites. Le site est alors sur un sous-domaine, affiche la marque de la plateforme et reste chez elle. Pour un site professionnel à votre nom, sur votre domaine et prêt pour Google, notre formule démarre à {{prix:website-creation/Vitrine}} DH.",
      },
      {
        q: "Combien coûte un site internet par mois ?",
        a: "Une fois créé, un site coûte surtout son nom de domaine (100 à 400 DH par an) et son hébergement, de zéro pour un site vitrine sur les plateformes modernes à quelques centaines de dirhams par mois pour une boutique avec du trafic. La maintenance est en option.",
      },
      {
        q: "Combien coûte un site Shopify ou WordPress ?",
        a: "La création suit nos formules, à partir de {{prix:website-creation/Vitrine}} DH pour une vitrine et {{prix:website-creation/Boutique}} DH pour une boutique. Shopify ajoute un abonnement mensuel payé directement à Shopify ; WordPress n'a pas de licence mais demande un hébergement et des mises à jour régulières.",
      },
      {
        q: "Site vitrine ou site e-commerce : que choisir ?",
        a: "Un site vitrine si la vente se conclut par un échange (devis, rendez-vous, conseil). Une boutique en ligne si le client peut choisir, payer et recevoir un produit seul. La question n'est pas la taille de l'entreprise mais la façon dont vous vendez aujourd'hui.",
      },
      {
        q: "Pouvez-vous refaire mon site internet existant ?",
        a: "Oui. Nous auditons le site actuel, reprenons ce qui fonctionne, redirigeons chaque ancienne adresse et livrons un site plus rapide et mieux référencé, sur votre domaine actuel.",
      },
      {
        q: "Peut-on créer un site web avec l'IA ?",
        a: "La création de site web par IA donne un premier jet rapide, utile pour tester une idée. Elle produit rarement un site structuré pour le référencement, rédigé pour vos clients et à votre nom. Dès que le site doit apporter des demandes, un site conçu sur mesure reste le bon choix.",
      },
      {
        q: "Créez-vous des sites internet pour toutes les villes du Maroc ?",
        a: "Oui. Basés à Casablanca, nous assurons la création de site web à Kénitra, Rabat, Marrakech, Tanger, Agadir, Fès et dans tout le Maroc, avec des points en visio et un suivi sur WhatsApp.",
      },
      {
        q: "Le site sera-t-il bien référencé sur Google ?",
        a: "Chaque site est livré avec les bases du référencement : titres et descriptions uniques, structure des pages, vitesse, plan de site et données structurées. Pour viser des recherches disputées, un accompagnement SEO mensuel prend le relais.",
      },
    ],
  },

  /* ================================================================== */
  seo: {
    cityLabel: "Agence SEO",
    keywords: [
      "agence seo maroc",
      "agence référencement naturel maroc",
      "agence référencement maroc",
      "référencement naturel maroc",
      "référencement google maroc",
      "agence référencement google",
      "consultant seo maroc",
      "expert seo maroc",
      "freelance seo maroc",
      "meilleure agence seo maroc",
      "agence seo casablanca",
      "consultant seo casablanca",
      "expert seo casablanca",
      "seo casablanca",
      "agence seo rabat",
      "agence seo marrakech",
      "agence seo tanger",
      "agence seo agadir",
      "agence seo kénitra",
      "agence seo oujda",
      "agence seo tétouan",
      "référencement naturel marrakech",
      "seo maroc prix",
      "agence seo prix maroc",
      "prix référencement naturel",
      "prix référencement site internet",
      "référencement google gratuit",
      "agence optimisation seo",
      "agence seo e-commerce",
      "agence seo wordpress",
      "agence seo pme",
      "agence seo et geo",
      "audit seo",
      "netlinking maroc",
    ],
    sections: [
      {
        h2: "Pourquoi choisir une agence SEO au Maroc ?",
        paras: [
          "Une agence SEO au Maroc connaît la façon dont vos clients cherchent réellement : en français, en français translittéré, parfois en darija, avec des requêtes locales comme « prix », « casablanca » ou « pas cher ». Wevtex construit votre référencement naturel sur ces recherches réelles, pas sur des volumes théoriques.",
          "Le référencement naturel est le seul canal d'acquisition qui continue de travailler quand vous arrêtez de payer. Une position gagnée sur Google apporte des visiteurs qualifiés pendant des mois, là où une campagne publicitaire s'arrête avec son budget.",
        ],
        bullets: [
          "Audit SEO technique complet, correctifs appliqués",
          "Étude de mots-clés fondée sur l'intention d'achat",
          "Rédaction et optimisation des pages de service et de ville",
          "Netlinking au Maroc et fiche Google Business",
          "Rapport mensuel : positions, trafic, contacts",
        ],
      },
      {
        h2: "Combien coûte le référencement naturel au Maroc ?",
        paras: [
          "Chez Wevtex, l'accompagnement SEO démarre à {{prix:seo/Essentiel}} DH par mois (formule Essentiel, 10 mots-clés suivis), {{prix:seo/Croissance}} DH par mois pour la formule Croissance avec netlinking actif et 30 mots-clés, et {{prix:seo/Concurrentiel}} DH par mois pour les marchés disputés. Chaque formule demande un engagement de trois mois minimum, le temps que le travail produise.",
          "Le prix d'une prestation SEO, comme le prix du référencement d'un site internet, dépend surtout de la concurrence sur vos mots-clés : se positionner sur « dentiste agadir » ne demande pas le même effort que sur « agence immobilière casablanca ».",
        ],
      },
      {
        h2: "Consultant SEO, freelance ou agence SEO au Maroc ?",
        paras: [
          "Un consultant SEO freelance coûte moins cher et convient à un site simple, sur quelques mots-clés. Une agence SEO couvre en plus la technique, la rédaction, le netlinking et la fiche Google, et reste disponible quand une personne seule ne l'est pas. Le bon critère n'est pas le statut, mais ce qui est fait chaque mois et ce que vous en voyez.",
          "Agence d'optimisation SEO, nous travaillons le référencement de sites WordPress, WooCommerce, Shopify et Next.js. Agence SEO pour PME, agence SEO e-commerce ou agence SEO WordPress : la méthode reste la même, seules les priorités changent.",
        ],
      },
      {
        h2: "SEO et GEO : être trouvé sur Google et cité par l'IA",
        paras: [
          "Les réponses générées par Google AI Overviews, ChatGPT ou Perplexity citent des pages qui répondent clairement à une question, avec des faits vérifiables et des sections compréhensibles seules. C'est ce qu'on appelle le GEO : en tant qu'agence SEO et GEO, c'est la façon dont nous rédigeons vos pages : une réponse directe d'abord, le détail ensuite.",
        ],
      },
      {
        h2: "En combien de temps le SEO donne-t-il des résultats ?",
        paras: [
          "Les premières progressions apparaissent en général entre un et trois mois sur les recherches locales et les requêtes précises. Les positions sur des termes larges et disputés demandent six à douze mois. Un prestataire qui garantit la première place en quelques semaines vend autre chose que du référencement naturel.",
          "Le travail est cumulatif : chaque page optimisée et chaque lien obtenu continue de compter. C'est ce qui rend le SEO rentable sur la durée, et c'est pourquoi nous mesurons chaque mois les contacts générés, pas seulement les positions.",
        ],
        links: [
          { label: "SEO au Maroc : par où commencer", href: "/blog/seo-au-maroc-par-ou-commencer" },
          { label: "Référencement local Google Maps", href: "/google-maps-seo-local-maroc" },
        ],
      },
    ],
    faqs: [
      {
        q: "Quel est le prix d'une agence SEO au Maroc ?",
        a: "Chez Wevtex, de {{prix:seo/Essentiel}} DH par mois pour 10 mots-clés suivis à {{prix:seo/Concurrentiel}} DH par mois pour les marchés disputés, avec trois mois minimum. Le prix dépend surtout de la concurrence sur vos mots-clés.",
      },
      {
        q: "Le référencement sur Google est-il gratuit ?",
        a: "Apparaître dans les résultats naturels de Google ne se paie pas à Google : les positions se gagnent par la qualité du site. Le travail pour y arriver, lui, demande du temps ou un prestataire. Les annonces en haut de page sont payantes, c'est Google Ads.",
      },
      {
        q: "Comment choisir la meilleure agence SEO au Maroc ?",
        a: "La meilleure agence SEO au Maroc pour vous, ou le meilleur expert SEO au Maroc, est celui qui montre des positions réelles, explique ce qui sera fait chaque mois et vous laisse propriétaire de vos accès. À Casablanca comme ailleurs, un expert SEO sérieux ne promet jamais la première place garantie.",
      },
      {
        q: "Faut-il choisir le SEO ou Google Ads ?",
        a: "Les deux se complètent. Google Ads apporte des demandes dès la première semaine mais s'arrête avec le budget ; le référencement naturel est plus lent mais construit des positions qui restent. Beaucoup d'entreprises lancent la publicité pendant que le SEO monte en puissance.",
      },
      {
        q: "Faites-vous le SEO de sites WordPress, Shopify ou WooCommerce ?",
        a: "Oui. Le référencement ne dépend pas de la plateforme mais de la structure, du contenu et de la vitesse. Nous travaillons sur WordPress, WooCommerce, Shopify et Next.js.",
      },
      {
        q: "Intervenez-vous à Casablanca, Rabat, Tanger et Marrakech ?",
        a: "Oui. Notre agence SEO intervient à Kénitra, Oujda, Tétouan et dans tout le Maroc depuis Casablanca, et nous travaillons le référencement naturel à Marrakech, Rabat ou Tanger, y compris pour des recherches locales du type « dentiste tanger » ou « avocat rabat ».",
      },
      {
        q: "Le SEO fonctionne-t-il avec les réponses générées par l'IA ?",
        a: "Oui, à condition d'écrire des pages qui répondent clairement aux questions, avec des faits vérifiables et des sections compréhensibles seules. C'est ainsi que Google AI Overviews, ChatGPT ou Perplexity choisissent les sources qu'ils citent.",
      },
      {
        q: "Qui reste propriétaire des contenus et des accès ?",
        a: "Vous. Les textes rédigés, les comptes Google Search Console et Analytics, et la fiche Google Business sont à votre nom. Si vous arrêtez l'accompagnement, tout reste en place.",
      },
    ],
  },

  /* ================================================================== */
  "local-seo": {
    cityLabel: "SEO local",
    keywords: [
      "référencement local maroc",
      "seo local maroc",
      "agence seo local",
      "fiche google business",
      "fiche google my business",
      "google my business maroc",
      "google business profile",
      "fiche google entreprise",
      "fiche google maps",
      "google maps entreprise",
      "google maps ajouter entreprise",
      "créer un compte google my business",
      "google my business est il gratuit",
      "google my business prix",
      "fiche google avis",
      "fiche google suspendue",
      "référencement google maps",
      "apparaître sur google maps",
    ],
    sections: [
      {
        h2: "Comment apparaître en tête sur Google Maps au Maroc ?",
        paras: [
          "Pour apparaître dans les trois premiers résultats de Google Maps, votre fiche Google Business doit être complète et cohérente : catégorie exacte, zone desservie, horaires, photos récentes, services listés et avis réguliers. Wevtex crée ou reprend votre fiche, l'optimise et vous donne une méthode simple pour collecter des avis clients en continu. C'est tout l'enjeu du référencement local au Maroc.",
          "Le référencement local compte pour toutes les recherches du type « dentiste casablanca », « restaurant marrakech » ou « garage près de moi ». Google y affiche une carte avant les sites web : c'est souvent là que se décide l'appel.",
        ],
        bullets: [
          "Création ou reprise de la fiche Google Business",
          "Catégories, zone et services optimisés",
          "Inscription dans 10 annuaires locaux marocains",
          "Méthode de collecte et de réponse aux avis",
        ],
      },
      {
        h2: "Comment ajouter son entreprise sur Google Maps ?",
        paras: [
          "Il faut créer un compte Google My Business (devenu Google Business Profile), choisir la catégorie, renseigner l'adresse ou la zone desservie, puis valider la fiche (par code, appel ou vidéo selon ce que Google demande). La création est gratuite. Ce qui fait la différence ensuite, c'est l'optimisation : une fiche remplie à moitié n'apparaît pas face à des concurrents complets. Une fiche Google My Business bien tenue devient la fiche Google de votre entreprise, sur Maps comme dans la recherche.",
        ],
      },
      {
        h2: "Combien coûte le référencement local Google Maps ?",
        paras: [
          "La mise en place de la fiche démarre à {{prix:local-seo/Mise en place}} DH, une fois, et se fait sous deux semaines. L'entretien mensuel (publications, réponses aux avis, suivi de position, mise à jour des horaires) est à {{prix:local-seo/Entretien}} DH par mois, sans engagement. Pour trois établissements ou plus, la formule Multi-sites démarre à {{prix:local-seo/Multi-sites}} DH par mois.",
        ],
        links: [
          { label: "Agence SEO au Maroc", href: "/referencement-seo-maroc" },
          { label: "Agence web à Casablanca", href: "/agence-web-casablanca" },
        ],
      },
    ],
    faqs: [
      {
        q: "Google My Business est-il gratuit ?",
        a: "Oui. Au Maroc comme ailleurs, Google My Business (aujourd'hui Google Business Profile) est gratuit : le prix de Google My Business est nul. Ce que nous facturons, c'est le travail : la création soignée, l'optimisation, les publications et la gestion des avis, qui décident de votre position sur Maps.",
      },
      {
        q: "Ma fiche Google est suspendue, que faire ?",
        a: "Une suspension vient souvent d'une adresse non conforme, d'un nom modifié avec des mots-clés ou de changements trop fréquents. Il faut corriger la cause puis demander le rétablissement à Google avec des justificatifs. Nous prenons en charge cette procédure lors de la reprise de fiche.",
      },
      {
        q: "Combien de temps pour apparaître sur Google Maps ?",
        a: "Une fiche créée ou corrigée est visible en quelques jours. Remonter dans les trois premières positions de la carte prend en général deux à huit semaines, selon la concurrence dans votre quartier et le nombre d'avis.",
      },
      {
        q: "Les avis Google influencent-ils le classement ?",
        a: "Oui, c'est l'un des facteurs les plus visibles. Le nombre d'avis, leur régularité et vos réponses comptent. Nous mettons en place une demande d'avis simple, par lien direct, au moment où le client est satisfait.",
      },
      {
        q: "Faut-il un site web pour le référencement local ?",
        a: "Ce n'est pas obligatoire pour exister sur Maps, mais un site relié à la fiche renforce nettement le classement et convertit mieux ceux qui veulent en savoir plus avant d'appeler.",
      },
    ],
  },

  /* ================================================================== */
  ads: {
    cityLabel: "Google Ads et Meta Ads",
    keywords: [
      "agence google ads maroc",
      "expert google ads maroc",
      "google ads maroc",
      "agence facebook ads maroc",
      "facebook ads maroc",
      "publicité facebook maroc",
      "publicité instagram maroc",
      "ads instagram maroc",
      "sponsoring facebook maroc",
      "meta ads maroc",
      "créer un compte google ads maroc",
      "google ads prix maroc",
      "facebook ads prix maroc",
      "prix publicité instagram maroc",
      "google ads coût par clic",
      "google ads prix par mois",
      "google ads vs meta ads",
      "sponsoring facebook comment ça marche",
      "agence sea maroc",
      "campagne google ads",
      "publicité en ligne maroc",
    ],
    sections: [
      {
        h2: "Agence Google Ads et Meta Ads au Maroc : ce que nous gérons",
        paras: [
          "Wevtex crée et gère vos campagnes publicitaires Google Ads, Facebook Ads et Instagram Ads pour les entreprises au Maroc. Nous nous occupons du ciblage, des annonces et des visuels, de la page d'atterrissage qui reçoit le clic, et du suivi des conversions qui dit combien chaque dirham a rapporté. En tant qu'agence SEA au Maroc, nous confions vos campagnes à un expert Google Ads, qui les ajuste en continu.",
        ],
        bullets: [
          "Google Search, Shopping, Display et YouTube",
          "Facebook et Instagram Ads, publicités WhatsApp",
          "Page d'atterrissage dédiée incluse",
          "Suivi des conversions jusqu'à l'appel ou l'achat",
          "Tests A/B et relance des visiteurs",
        ],
      },
      {
        h2: "Google Ads vs Meta Ads (Facebook, Instagram) : lequel choisir ?",
        paras: [
          "Google Ads capte ceux qui cherchent déjà votre service, au moment où ils le cherchent (« plombier rabat », « location voiture marrakech »). Facebook et Instagram Ads, via Meta, créent la demande auprès d'un public ciblé par âge, ville et centres d'intérêt, avec des visuels. Un service qu'on cherche sur Google démarre plutôt sur Google Ads ; un produit qui se voit démarre plutôt sur Instagram.",
          "Beaucoup d'entreprises combinent les deux : Google pour la demande existante, Meta pour la faire naître et relancer les visiteurs du site. Côté Meta, notre rôle d'agence Facebook Ads au Maroc couvre la publicité Facebook et la publicité Instagram au Maroc, du sponsoring Facebook de vos publications aux campagnes de conversion.",
        ],
      },
      {
        h2: "Combien coûte une campagne Google Ads ou Facebook Ads au Maroc ?",
        paras: [
          "Les frais de gestion Wevtex démarrent à {{prix:ads/Lancement}} DH par mois pour un canal (formule Lancement), {{prix:ads/Multicanal}} DH par mois pour Google et Meta ensemble (formule Multicanal), et {{prix:ads/Performance}} DH par mois pour les budgets importants. Le budget publicitaire, versé directement à Google ou à Meta, s'ajoute à ces frais et reste sous votre contrôle. En résumé, le prix de Google Ads au Maroc, comme le prix de Facebook Ads ou de la publicité Instagram, tient en deux lignes : nos frais de gestion et votre budget. Le prix de Google Ads par mois dépend donc surtout du budget que vous fixez.",
          "Le coût par clic sur Google Ads n'a pas de prix fixe : il se fixe aux enchères et varie selon le secteur et la concurrence sur chaque mot-clé. Avant de lancer, nous estimons ce coût avec l'outil de planification de Google et le rapportons au coût d'un client, pour décider si la campagne vaut d'être lancée.",
        ],
        links: [
          { label: "Agence SEO au Maroc", href: "/referencement-seo-maroc" },
          { label: "Création de site web", href: "/creation-site-web-maroc" },
        ],
      },
    ],
    faqs: [
      {
        q: "Sponsoring Facebook : comment ça marche ?",
        a: "Le sponsoring Facebook consiste à payer Meta pour montrer une publication ou une annonce à un public choisi (ville, âge, centres d'intérêt), sur Facebook et Instagram. Vous fixez un budget par jour ou par campagne, et Meta facture à l'affichage ou au clic.",
      },
      {
        q: "Google Ads est-il gratuit ?",
        a: "Créer un compte Google Ads au Maroc est gratuit, mais la diffusion se paie : vous réglez à Google chaque clic sur vos annonces, dans la limite du budget que vous fixez.",
      },
      {
        q: "Peut-on cibler uniquement une ville au Maroc ?",
        a: "Oui. Google Ads et Meta Ads permettent de cibler une ville, un rayon autour d'une adresse ou une région. Une entreprise de Casablanca peut ne diffuser qu'à Casablanca et ses environs.",
      },
      {
        q: "En combien de temps une campagne donne-t-elle des résultats ?",
        a: "Les premières demandes arrivent en général dès la première semaine. Il faut ensuite deux à quatre semaines d'optimisation pour stabiliser le coût par contact.",
      },
      {
        q: "Qui possède les comptes publicitaires ?",
        a: "Vous. Les comptes Google Ads et Meta Business sont créés à votre nom, et vous gardez l'accès complet à l'historique et aux audiences si vous changez de prestataire.",
      },
    ],
  },

  /* ================================================================== */
  "mobile-apps": {
    cityLabel: "Application mobile",
    keywords: [
      "développement application mobile maroc",
      "création application mobile maroc",
      "agence application mobile maroc",
      "application mobile maroc",
      "prix développement application mobile maroc",
      "développeur application mobile maroc",
      "application android maroc",
      "application ios",
      "application mobile flutter",
      "application mobile native",
      "application mobile sur mesure",
      "application mobile design",
      "application mobile no code",
      "création application mobile gratuit",
      "création application mobile ia",
    ],
    sections: [
      {
        h2: "Création d'application mobile au Maroc, iOS et Android",
        paras: [
          "Wevtex développe des applications mobiles sur mesure pour iOS et Android depuis Casablanca. Nous utilisons Flutter : un seul code qui tourne nativement sur les deux plateformes, ce qui divise le budget par deux par rapport à deux développements séparés, sans perte de fluidité. Agence d'application mobile au Maroc, nous réunissons designer et développeur d'application mobile dans la même équipe.",
          "Nous prenons en charge tout le parcours : design de l'application mobile validé avant le code, développement, connexion à vos systèmes (site, stock, paiement), publication sur l'App Store et Google Play, puis suivi après lancement.",
        ],
        bullets: [
          "Applications natives iOS et Android avec Flutter",
          "Comptes clients, paiement intégré, notifications push",
          "Espace d'administration et tableau de bord",
          "Publication sur les stores prise en charge",
        ],
      },
      {
        h2: "Combien coûte une application mobile au Maroc ?",
        paras: [
          "Le prix du développement d'une application mobile au Maroc démarre chez Wevtex à {{prix:mobile-apps/Essentielle}} DH pour une application essentielle jusqu'à 8 écrans, livrée en 4 à 6 semaines. Une application complète avec comptes, paiement et notifications démarre à {{prix:mobile-apps/Complète}} DH, en 8 à 12 semaines. Une application sur mesure à logique métier complexe démarre à {{prix:mobile-apps/Sur mesure}} DH, sur un périmètre défini ensemble.",
          "Le coût d'une application mobile dépend du nombre d'écrans, des fonctions (paiement, géolocalisation, mode hors ligne) et des systèmes à connecter. Le devis est ferme avant le démarrage.",
        ],
      },
      {
        h2: "Application no code, générée par IA ou sur mesure ?",
        paras: [
          "Les outils no code et la création d'application mobile par IA permettent de tester une idée vite et à faible coût. Ils atteignent leurs limites dès qu'il faut un paiement marocain, une connexion à votre stock, des performances fluides ou une publication soignée sur les stores. Une application sur mesure en Flutter vous donne un code qui vous appartient et qui évolue avec votre activité.",
        ],
        links: [
          { label: "Développement web sur mesure", href: "/solution-digitale-sur-mesure-maroc" },
          { label: "Logiciel sur mesure", href: "/logiciel-sur-mesure-maroc" },
        ],
      },
    ],
    faqs: [
      {
        q: "Peut-on créer une application mobile gratuitement ?",
        a: "Pour une création d'application mobile, le gratuit a ses limites : des outils no code permettent de monter une maquette ou une application très simple. Pour une application publiée sur l'App Store et Google Play, avec paiement et comptes clients, il faut un développement : chez Wevtex, à partir de {{prix:mobile-apps/Essentielle}} DH.",
      },
      {
        q: "Flutter ou développement natif ?",
        a: "Flutter pour la grande majorité des projets : un seul code produit une application mobile native pour iOS et Android, avec un budget réduit. Le développement natif séparé se justifie pour des besoins très spécifiques du matériel, rares dans les applications d'entreprise.",
      },
      {
        q: "Qui publie l'application sur l'App Store et Google Play ?",
        a: "Nous. La publication, la préparation des fiches et les échanges avec Apple et Google font partie de la prestation. Les comptes développeur sont ouverts à votre nom.",
      },
      {
        q: "Combien de temps pour développer une application mobile ?",
        a: "Quatre à six semaines pour une application essentielle, huit à douze semaines pour une application complète avec comptes et paiement. Le délai figure sur le devis.",
      },
    ],
  },

  /* ================================================================== */
  "desktop-apps": {
    cityLabel: "Logiciel sur mesure",
    keywords: [
      "logiciel sur mesure maroc",
      "logiciel sur mesure entreprise",
      "logiciel sur mesure prix",
      "développement logiciel maroc",
      "logiciel de gestion maroc",
      "logiciel de gestion commerciale maroc",
      "logiciel de gestion stock maroc",
      "logiciel de gestion erp maroc",
      "erp sur mesure maroc",
      "logiciel de facturation maroc",
      "logiciel de gestion pharmacie maroc",
      "logiciel de gestion dentaire maroc",
      "logiciel de gestion scolaire maroc",
      "logiciel de caisse",
      "logiciel de gestion commerciale gratuit maroc",
      "logiciel sur mesure marrakech",
      "société développement logiciel casablanca",
    ],
    sections: [
      {
        h2: "Développement de logiciel sur mesure au Maroc",
        paras: [
          "Société de développement logiciel basée à Casablanca, Wevtex développe des logiciels sur mesure pour Windows et macOS : gestion commerciale, facturation, gestion de stock, planning, reporting. Quand aucun logiciel du marché ne correspond à votre façon de travailler, nous construisons celui qui la suit, et qui continue de fonctionner sans connexion internet.",
          "Un logiciel sur mesure pour votre entreprise se paie une fois. Il n'y a pas de licence mensuelle par poste, et les règles propres à votre métier sont codées au lieu d'être contournées dans un tableur.",
        ],
        bullets: [
          "Analyse de vos processus avant le développement",
          "Installateur et mises à jour automatiques",
          "Reprise de vos données, fichiers Excel compris",
          "Multi-postes synchronisé, comptes et permissions",
        ],
      },
      {
        h2: "Logiciel de gestion commerciale, de stock ou ERP : standard ou sur mesure ?",
        paras: [
          "Au Maroc, un logiciel de gestion de stock, un logiciel de facturation ou un ERP standard suffit quand votre activité suit un fonctionnement courant. Un ERP sur mesure au Maroc se justifie quand vos règles sortent du cadre, comme dans les cas ci-dessous.",
          "Nous pouvons aussi relier un logiciel existant à vos autres outils plutôt que tout remplacer, quand c'est la solution la moins coûteuse.",
        ],
        bullets: [
          "Logiciel de gestion de pharmacie au Maroc : commandes, stock et ventes",
          "Logiciel de gestion dentaire au Maroc : planning, dossiers patients et facturation",
          "Logiciel de gestion scolaire au Maroc : inscriptions, paiements et suivi",
          "Logiciel de caisse relié au stock et à la facturation",
          "Logiciel de gestion ERP au Maroc pour grossistes et distributeurs",
        ],
      },
      {
        h2: "Combien coûte un logiciel sur mesure au Maroc ?",
        paras: [
          "Le prix d'un logiciel sur mesure dépend du nombre de modules : un outil simple couvrant un domaine fonctionnel démarre à {{prix:desktop-apps/Outil simple}} DH, livré en 4 à 6 semaines. Un logiciel de gestion complète en plusieurs modules, multi-postes, démarre à {{prix:desktop-apps/Gestion complète}} DH, en 8 à 12 semaines. Un système métier avancé avec intégrations démarre à {{prix:desktop-apps/Système métier}} DH, sur un périmètre défini ensemble.",
        ],
        links: [
          { label: "Développement web sur mesure", href: "/solution-digitale-sur-mesure-maroc" },
          { label: "Développement d'application mobile", href: "/developpement-application-mobile-maroc" },
        ],
      },
    ],
    faqs: [
      {
        q: "Existe-t-il un logiciel de gestion commerciale gratuit au Maroc ?",
        a: "Des logiciels gratuits ou open source existent et suffisent souvent pour démarrer. Ils montrent leurs limites quand vos règles de gestion sortent du standard ou que plusieurs postes doivent travailler ensemble ; c'est là qu'un logiciel sur mesure se justifie.",
      },
      {
        q: "Logiciel de bureau ou application web ?",
        a: "Un logiciel de bureau convient quand vos équipes travaillent sur des postes fixes, parfois sans connexion. Une application web convient quand il faut y accéder de partout, depuis un navigateur. Nous vous conseillons selon votre usage réel.",
      },
      {
        q: "Pouvez-vous reprendre nos fichiers Excel existants ?",
        a: "Oui. La reprise de vos données, depuis Excel ou un ancien logiciel, fait partie de la prestation, pour que l'outil soit utilisable dès le premier jour.",
      },
      {
        q: "Le code source nous appartient-il ?",
        a: "Oui. Le code source et la documentation vous sont remis à la livraison, ce qui vous laisse libre de le faire évoluer avec nous ou avec un autre prestataire.",
      },
    ],
  },

  /* ================================================================== */
  "custom-solutions": {
    cityLabel: "Développement web",
    keywords: [
      "développement web maroc",
      "développement web sur mesure maroc",
      "développeur web maroc",
      "agence développement web casablanca",
      "développeur web casablanca",
      "développeur web marrakech",
      "développement web marrakech",
      "application web sur mesure",
      "application web marrakech",
      "applications sur mesure",
      "développement web et mobile",
      "développeur web full stack",
      "développeur web freelance",
      "développeur web prix",
      "développeur web tarif",
      "saas maroc",
      "solution saas maroc",
      "plateforme saas",
      "portail client extranet",
      "intégration api",
    ],
    sections: [
      {
        h2: "Développement web sur mesure au Maroc : applications, SaaS et portails",
        paras: [
          "Wevtex développe des applications web sur mesure pour les entreprises au Maroc : plateformes SaaS, portails clients, extranets, outils métier et architectures d'API. Une application web sur mesure s'utilise dans le navigateur, depuis n'importe quel poste ou téléphone, et épouse vos règles de gestion au lieu de vous forcer à entrer dans un modèle générique.",
          "Un projet de développement web sur mesure commence par un cadrage : processus, règles métier, cas particuliers. Ce livrable vous appartient, et son coût est déduit du projet si vous poursuivez avec nous.",
        ],
        bullets: [
          "Plateformes SaaS multi-entreprises avec abonnements",
          "Portail client et extranet, avec rôles et permissions",
          "Intégration à vos outils existants par API et webhooks",
          "Tableaux de bord et traçabilité",
        ],
      },
      {
        h2: "Développeur web freelance ou agence de développement ?",
        paras: [
          "Que vous cherchiez un développeur web à Casablanca, un développeur web à Marrakech ou une équipe à distance, la question est la même. Un développeur web freelance convient à un projet court et bien délimité. Une agence de développement web apporte une équipe complète : conception, design, développeur web full stack, tests, et une continuité quand le projet dure ou qu'il faut le maintenir après la livraison. Pour une plateforme dont votre activité dépend, cette continuité compte plus que le tarif journalier.",
          "Nous développons aussi l'application mobile de votre plateforme, sur la même base de données, pour un développement web et mobile cohérent.",
        ],
      },
      {
        h2: "Combien coûte le développement d'une application web ?",
        paras: [
          "Le cadrage démarre à {{prix:custom-solutions/Cadrage}} DH, en 2 à 3 semaines. Une plateforme ou un outil métier démarre à {{prix:custom-solutions/Plateforme}} DH, en 8 à 12 semaines, avec une intégration incluse. Une solution SaaS complète au Maroc, multi-entreprises, avec abonnements et facturation, démarre à {{prix:custom-solutions/SaaS complet}} DH sur un périmètre défini ensemble.",
        ],
        links: [
          { label: "Agence développement IA au Maroc", href: "/agence-developpement-ia-maroc" },
          { label: "Développement d'application mobile", href: "/developpement-application-mobile-maroc" },
        ],
      },
    ],
    faqs: [
      {
        q: "Quel est le tarif d'un développeur web au Maroc ?",
        a: "Plutôt qu'un prix de développeur web à la journée, nous chiffrons au projet, pour que le prix soit ferme : un cadrage à partir de {{prix:custom-solutions/Cadrage}} DH, une plateforme ou un outil métier à partir de {{prix:custom-solutions/Plateforme}} DH, un SaaS complet à partir de {{prix:custom-solutions/SaaS complet}} DH.",
      },
      {
        q: "Quelle différence entre un site web et une application web ?",
        a: "Un site web présente votre activité et génère des contacts. Une application web est un outil : les utilisateurs se connectent, saisissent, consultent et traitent des données, avec des droits différents selon leur rôle.",
      },
      {
        q: "Quelles technologies utilisez-vous pour le développement web ?",
        a: "Next.js et React pour l'interface, Node.js et PostgreSQL pour le serveur et les données, et des API documentées pour relier vos outils. Des technologies répandues, pour que votre plateforme ne dépende pas de nous.",
      },
      {
        q: "Pouvez-vous reprendre une application existante ?",
        a: "Oui, après un audit du code existant. Nous vous disons honnêtement s'il vaut mieux faire évoluer l'application ou la reconstruire, et pourquoi.",
      },
    ],
  },

  /* ================================================================== */
  "whatsapp-bots": {
    cityLabel: "Chatbot WhatsApp",
    keywords: [
      "chatbot whatsapp maroc",
      "chatbot whatsapp business",
      "chatbot whatsapp entreprise",
      "chatbot ia whatsapp",
      "chatbot whatsapp gratuit",
      "whatsapp business maroc",
      "whatsapp business api maroc",
      "automatisation whatsapp",
      "bot whatsapp darija",
      "agent ia whatsapp maroc",
      "service client automatisé",
    ],
    sections: [
      {
        h2: "Chatbot WhatsApp pour entreprise au Maroc",
        paras: [
          "Un chatbot WhatsApp répond automatiquement aux questions de vos clients (prix, horaires, disponibilité, suivi de commande), qualifie les prospects et prend des rendez-vous, 24h/24, en français et en darija. Wevtex met en place votre compte WhatsApp Business API, écrit les scénarios pour votre activité et relie le bot à votre CRM ou votre boîte mail.",
          "Au Maroc, la vente se fait sur WhatsApp. Un message du soir sans réponse est souvent un client parti chez le concurrent : un service client automatisé garantit une réponse immédiate, et transmet à votre équipe dès que la demande sort du cadre.",
        ],
        bullets: [
          "Compte WhatsApp Business API ouvert et configuré",
          "Scénarios en français et en darija",
          "Qualification des prospects et prise de rendez-vous",
          "Transmission à un humain au bon moment",
        ],
      },
      {
        h2: "WhatsApp Business ou WhatsApp Business API ?",
        paras: [
          "L'application WhatsApp Business, gratuite, offre un message d'accueil, des réponses rapides enregistrées et un catalogue simple. Elle ne permet ni automatisation véritable, ni plusieurs agents sur un même numéro, ni connexion à vos outils. L'API WhatsApp Business, celle qu'utilisent les chatbots, autorise les scénarios, l'IA, la prise de rendez-vous et le travail en équipe sur une même conversation. Au Maroc, l'application WhatsApp Business suffit pour démarrer ; l'API WhatsApp Business s'ouvre ensuite pour votre entreprise au Maroc auprès de Meta, et c'est ce compte que nous configurons.",
        ],
      },
      {
        h2: "Combien coûte un chatbot WhatsApp au Maroc ?",
        paras: [
          "La formule Essentiel démarre à {{prix:whatsapp-bots/Essentiel}} DH de mise en place, puis {{mensuel:whatsapp-bots/Essentiel}} DH par mois, pour jusqu'à 10 scénarios. La formule Qualification, avec scénarios illimités, prise de rendez-vous et connexion CRM, démarre à {{prix:whatsapp-bots/Qualification}} DH puis {{mensuel:whatsapp-bots/Qualification}} DH par mois. Un agent IA WhatsApp sur mesure, qui comprend les messages formulés librement, démarre à {{prix:whatsapp-bots/Sur mesure}} DH au Maroc.",
        ],
        links: [
          { label: "Agent IA WhatsApp et automatisation", href: "/agence-developpement-ia-maroc" },
          { label: "Guide : automatiser la relation client", href: "/blog/chatbot-whatsapp-pme-marocaine" },
        ],
      },
    ],
    faqs: [
      {
        q: "Existe-t-il un chatbot WhatsApp gratuit ?",
        a: "L'application WhatsApp Business gratuite propose un message d'accueil et des réponses rapides, ce qui n'est pas un vrai chatbot. L'automatisation passe par l'API WhatsApp Business, dont les conversations sont facturées par Meta, en plus de la mise en place.",
      },
      {
        q: "Le chatbot comprend-il la darija ?",
        a: "Oui, un bot WhatsApp en darija est tout à fait possible : les scénarios sont écrits en français et en darija, et la formule sur mesure comprend les messages formulés librement, y compris en darija écrite en lettres latines.",
      },
      {
        q: "Le chatbot peut-il prendre des rendez-vous ?",
        a: "Oui, avec la formule Qualification : il propose des créneaux, confirme le rendez-vous et prévient votre équipe.",
      },
      {
        q: "Combien de temps pour mettre en place un chatbot WhatsApp ?",
        a: "Une à trois semaines pour un assistant qui répond aux questions courantes. Un bot connecté à votre catalogue ou votre CRM demande davantage, car l'essentiel du travail est l'intégration.",
      },
      {
        q: "Puis-je garder mon numéro WhatsApp actuel ?",
        a: "Dans la plupart des cas, oui : un numéro existant peut être migré vers WhatsApp Business API. Il doit simplement être libéré de l'application classique avant la migration.",
      },
    ],
  },
};

/** A service with its search layer merged in: extra FAQs appended, sections set. */
export function withSeo(s: Service): Service {
  const seo = SERVICE_SEO[s.slug];
  if (!seo) return s;
  return {
    ...s,
    faqs: [...s.faqs, ...seo.faqs],
    seoSections: seo.sections,
    seoKeywords: seo.keywords,
    seoCityLabel: seo.cityLabel,
  };
}

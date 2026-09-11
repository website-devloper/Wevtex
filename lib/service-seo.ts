import type { Service } from "./services-data";

/**
 * The search layer of each service page: secondary keywords, question-shaped
 * sections and extra FAQs, kept apart from the design content in
 * services-data.ts so the two can be edited without stepping on each other.
 *
 * Where these come from: the pages ranking on page one for each term in
 * Morocco (checked 2026-09-11) share one shape. The exact term sits in the
 * title and the H1, the H2s are the questions buyers type ("Combien coûte…
 * au Maroc ?", "Pourquoi choisir une agence… ?", "Dans quelles villes… ?"),
 * and a 5 to 8 question FAQ closes the page. These sections follow that
 * shape, answer-first, so each one also stands alone when an answer engine
 * quotes it.
 *
 * Every price here is one the service's own pricing table publishes. Nothing
 * is invented: no client count, no ranking promise, no review figure.
 */

export type SeoSection = {
  h2: string;
  paras: string[];
  bullets?: string[];
  /** Internal links rendered under the section, keyword as anchor text. */
  links?: { label: string; href: string }[];
};

export type ServiceSeo = {
  /** Secondary terms: meta keywords, and the vocabulary the sections use. */
  keywords: string[];
  sections: SeoSection[];
  /** Appended to the service's own FAQs, rendered and sent as FAQPage. */
  faqs: { q: string; a: string }[];
};

export const SERVICE_SEO: Record<string, ServiceSeo> = {
  /* ================================================================== */
  "website-creation": {
    keywords: [
      "création site web maroc",
      "création site internet maroc",
      "agence création site web",
      "création site web casablanca",
      "site internet professionnel",
      "conception site web",
      "prix site web maroc",
      "développeur web maroc",
      "site web sur mesure",
      "agence web maroc",
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
        h2: "Combien coûte la création d'un site web au Maroc ?",
        paras: [
          "Chez Wevtex, un site vitrine jusqu'à 5 pages démarre à 990 DH et se livre en 7 à 14 jours. Un site d'entreprise jusqu'à 15 pages, textes rédigés et blog compris, démarre à 6 000 DH, livré en 3 à 4 semaines. Une boutique en ligne complète démarre à 16 000 DH, livrée en 4 à 8 semaines.",
          "Le prix d'un site internet au Maroc dépend du nombre de pages, de la rédaction des contenus, des langues et des fonctions à développer (paiement, réservation, espace client). Le devis est ferme après un échange de quinze minutes, et il ne bouge pas en cours de projet.",
        ],
        links: [{ label: "Combien coûte un site web au Maroc", href: "/blog/combien-coute-un-site-web-au-maroc" }],
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
        a: "Un site vitrine démarre à 990 DH, un site d'entreprise de 15 pages à 6 000 DH et une boutique en ligne à 16 000 DH. Chaque projet reçoit un devis ferme après un échange de quinze minutes.",
      },
      {
        q: "Créez-vous des sites internet pour toutes les villes du Maroc ?",
        a: "Oui. Nous sommes basés à Casablanca et nous créons des sites pour des entreprises de Rabat, Marrakech, Fès, Tanger, Agadir et de tout le Maroc, avec des points en visio et un suivi sur WhatsApp.",
      },
      {
        q: "Le site sera-t-il bien référencé sur Google ?",
        a: "Chaque site est livré avec les bases du référencement : titres et descriptions uniques, structure des pages, vitesse, plan de site et données structurées. Pour viser des recherches disputées, un accompagnement SEO mensuel prend le relais.",
      },
    ],
  },

  /* ================================================================== */
  seo: {
    keywords: [
      "agence seo maroc",
      "référencement naturel maroc",
      "référencement google maroc",
      "consultant seo maroc",
      "agence seo casablanca",
      "audit seo",
      "netlinking maroc",
      "prix seo maroc",
      "positionnement google",
      "optimisation seo site web",
    ],
    sections: [
      {
        h2: "Pourquoi choisir une agence SEO au Maroc ?",
        paras: [
          "Une agence SEO au Maroc connaît la façon dont vos clients cherchent réellement : en français, en français translittéré, parfois en darija, avec des requêtes locales comme « prix », « casablanca » ou « pas cher ». Wevtex construit votre référencement naturel sur ces recherches réelles, pas sur des volumes théoriques.",
          "Le référencement naturel est le seul canal d'acquisition qui continue de travailler quand vous arrêtez de payer. Une position gagnée sur Google apporte des visiteurs qualifiés pendant des mois, là où une campagne publicitaire s'arrête avec son budget.",
        ],
        bullets: [
          "Audit technique complet, correctifs appliqués",
          "Étude de mots-clés fondée sur l'intention d'achat",
          "Rédaction et optimisation des pages de service et de ville",
          "Netlinking et fiche Google Business",
          "Rapport mensuel : positions, trafic, contacts",
        ],
      },
      {
        h2: "Combien coûte le référencement naturel au Maroc ?",
        paras: [
          "Chez Wevtex, l'accompagnement SEO démarre à 1 500 DH par mois (formule Essentiel, 10 mots-clés suivis), 3 500 DH par mois pour la formule Croissance avec netlinking actif et 30 mots-clés, et 6 500 DH par mois pour les marchés disputés. Chaque formule demande un engagement de trois mois minimum, le temps que le travail produise.",
          "Le prix d'une prestation SEO dépend surtout de la concurrence sur vos mots-clés : se positionner sur « dentiste agadir » ne demande pas le même effort que sur « agence immobilière casablanca ».",
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
        q: "Faut-il choisir le SEO ou Google Ads ?",
        a: "Les deux se complètent. Google Ads apporte des demandes dès la première semaine mais s'arrête avec le budget ; le référencement naturel est plus lent mais construit des positions qui restent. Beaucoup d'entreprises lancent la publicité pendant que le SEO monte en puissance.",
      },
      {
        q: "Le SEO fonctionne-t-il avec les réponses générées par l'IA ?",
        a: "Oui, à condition d'écrire des pages qui répondent clairement aux questions, avec des faits vérifiables et des sections compréhensibles seules. C'est ainsi que Google AI Overviews, ChatGPT ou Perplexity choisissent les sources qu'ils citent, et c'est la façon dont nous rédigeons.",
      },
      {
        q: "Qui reste propriétaire des contenus et des accès ?",
        a: "Vous. Les textes rédigés, les comptes Google Search Console et Analytics, et la fiche Google Business sont à votre nom. Si vous arrêtez l'accompagnement, tout reste en place.",
      },
    ],
  },

  /* ================================================================== */
  "local-seo": {
    keywords: [
      "référencement local maroc",
      "fiche google business maroc",
      "google my business maroc",
      "seo local casablanca",
      "référencement google maps",
      "apparaître sur google maps",
      "avis google entreprise",
      "optimisation fiche google",
    ],
    sections: [
      {
        h2: "Comment apparaître en tête sur Google Maps au Maroc ?",
        paras: [
          "Pour apparaître dans les trois premiers résultats de Google Maps, votre fiche Google Business doit être complète et cohérente : catégorie exacte, zone desservie, horaires, photos récentes, services listés et avis réguliers. Wevtex crée ou reprend votre fiche, l'optimise et vous donne une méthode simple pour collecter des avis clients en continu.",
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
        h2: "Combien coûte le référencement local Google Maps ?",
        paras: [
          "La mise en place de la fiche démarre à 790 DH, une fois, et se fait sous deux semaines. L'entretien mensuel (publications, réponses aux avis, suivi de position, mise à jour des horaires) est à 490 DH par mois, sans engagement. Pour trois établissements ou plus, la formule Multi-sites démarre à 1 900 DH par mois.",
        ],
        links: [
          { label: "Agence SEO au Maroc", href: "/referencement-seo-maroc" },
          { label: "Agence web à Casablanca", href: "/agence-web-casablanca" },
        ],
      },
    ],
    faqs: [
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
    keywords: [
      "agence google ads maroc",
      "agence facebook ads maroc",
      "publicité facebook instagram maroc",
      "meta ads maroc",
      "agence sea maroc",
      "campagne google ads",
      "agence publicité digitale maroc",
      "gestion campagne publicitaire",
      "publicité en ligne maroc",
    ],
    sections: [
      {
        h2: "Agence Google Ads et Meta Ads au Maroc : ce que nous gérons",
        paras: [
          "Wevtex crée et gère vos campagnes publicitaires Google Ads, Facebook Ads et Instagram Ads pour les entreprises au Maroc. Nous nous occupons du ciblage, des annonces et des visuels, de la page d'atterrissage qui reçoit le clic, et du suivi des conversions qui dit combien chaque dirham a rapporté.",
          "Google Ads capte ceux qui cherchent déjà votre service (« plombier rabat », « location voiture marrakech ») ; Meta Ads, sur Facebook et Instagram, crée la demande auprès d'un public ciblé par âge, ville et centres d'intérêt. La bonne combinaison dépend de votre activité, et nous le disons avant de lancer.",
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
        h2: "Combien coûte une campagne Google Ads ou Facebook Ads au Maroc ?",
        paras: [
          "Les frais de gestion Wevtex démarrent à 1 200 DH par mois pour un canal (formule Lancement), 2 800 DH par mois pour Google et Meta ensemble (formule Multicanal), et 5 500 DH par mois pour les budgets importants. Le budget publicitaire, versé directement à Google ou à Meta, s'ajoute à ces frais et reste sous votre contrôle.",
          "Le bon budget se fixe à partir du coût d'un client : si une demande vous coûte 50 DH et qu'un client vous rapporte 2 000 DH, la campagne peut être amplifiée. C'est pour cela que le suivi des conversions est installé avant le premier dirham dépensé.",
        ],
        links: [
          { label: "Agence SEO au Maroc", href: "/referencement-seo-maroc" },
          { label: "Création de site web", href: "/creation-site-web-maroc" },
        ],
      },
    ],
    faqs: [
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
    keywords: [
      "développement application mobile maroc",
      "création application mobile maroc",
      "agence application mobile casablanca",
      "application ios android",
      "développeur flutter maroc",
      "prix application mobile maroc",
      "application mobile sur mesure",
      "création app maroc",
    ],
    sections: [
      {
        h2: "Création d'application mobile au Maroc, iOS et Android",
        paras: [
          "Wevtex développe des applications mobiles sur mesure pour iOS et Android depuis Casablanca. Nous utilisons Flutter : un seul code qui tourne nativement sur les deux plateformes, ce qui divise le budget par deux par rapport à deux développements séparés, sans perte de fluidité.",
          "Nous prenons en charge tout le parcours : design des écrans validé avant le code, développement, connexion à vos systèmes (site, stock, paiement), publication sur l'App Store et Google Play, puis suivi après lancement.",
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
          "Chez Wevtex, une application essentielle jusqu'à 8 écrans démarre à 12 000 DH, livrée en 4 à 6 semaines. Une application complète avec comptes, paiement et notifications démarre à 28 000 DH, en 8 à 12 semaines. Une application sur mesure à logique métier complexe démarre à 50 000 DH, sur un périmètre défini ensemble.",
          "Le coût d'une application mobile dépend du nombre d'écrans, des fonctions (paiement, géolocalisation, mode hors ligne) et des systèmes à connecter. Le devis est ferme avant le démarrage.",
        ],
        links: [
          { label: "Développement web sur mesure", href: "/solution-digitale-sur-mesure-maroc" },
          { label: "Logiciel sur mesure", href: "/logiciel-sur-mesure-maroc" },
        ],
      },
    ],
    faqs: [
      {
        q: "Flutter ou développement natif ?",
        a: "Flutter pour la grande majorité des projets : un seul code pour iOS et Android, un rendu natif et un budget réduit. Le développement natif séparé se justifie pour des besoins très spécifiques du matériel, rares dans les applications d'entreprise.",
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
    keywords: [
      "logiciel sur mesure maroc",
      "développement logiciel maroc",
      "logiciel de gestion sur mesure",
      "logiciel windows sur mesure",
      "logiciel gestion stock maroc",
      "logiciel facturation maroc",
      "erp sur mesure maroc",
      "société développement logiciel casablanca",
    ],
    sections: [
      {
        h2: "Développement de logiciel sur mesure au Maroc",
        paras: [
          "Wevtex développe des logiciels sur mesure pour Windows et macOS : gestion commerciale, facturation, gestion de stock, planning, reporting. Quand aucun logiciel du marché ne correspond à votre façon de travailler, nous construisons celui qui la suit, et qui continue de fonctionner sans connexion internet.",
          "Un logiciel de gestion sur mesure se paie une fois. Il n'y a pas de licence mensuelle par poste, et les règles propres à votre métier sont codées au lieu d'être contournées dans un tableur.",
        ],
        bullets: [
          "Analyse de vos processus avant le développement",
          "Installateur et mises à jour automatiques",
          "Reprise de vos données, fichiers Excel compris",
          "Multi-postes synchronisé, comptes et permissions",
        ],
      },
      {
        h2: "Combien coûte un logiciel sur mesure au Maroc ?",
        paras: [
          "Un outil simple couvrant un domaine fonctionnel démarre à 14 000 DH, livré en 4 à 6 semaines. Un logiciel de gestion complète en plusieurs modules, multi-postes, démarre à 32 000 DH, en 8 à 12 semaines. Un système métier avancé avec intégrations démarre à 60 000 DH, sur un périmètre défini ensemble.",
        ],
        links: [
          { label: "Développement web sur mesure", href: "/solution-digitale-sur-mesure-maroc" },
          { label: "Développement d'application mobile", href: "/developpement-application-mobile-maroc" },
        ],
      },
    ],
    faqs: [
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
    keywords: [
      "développement web sur mesure maroc",
      "application web sur mesure",
      "développement web maroc",
      "plateforme saas maroc",
      "société développement web casablanca",
      "développement plateforme web",
      "portail client extranet",
      "intégration api",
      "transformation digitale maroc",
    ],
    sections: [
      {
        h2: "Développement web sur mesure au Maroc : applications, SaaS et portails",
        paras: [
          "Wevtex développe des applications web sur mesure pour les entreprises au Maroc : plateformes SaaS, portails clients, extranets, outils métier et architectures d'API. Ce sont des logiciels qui s'utilisent dans le navigateur, depuis n'importe quel poste ou téléphone, et qui épousent vos règles de gestion au lieu de vous forcer à entrer dans un modèle générique.",
          "Un projet de développement web sur mesure commence par un cadrage : processus, règles métier, cas particuliers. Ce livrable vous appartient, et son coût est déduit du projet si vous poursuivez avec nous.",
        ],
        bullets: [
          "Plateformes SaaS multi-entreprises avec abonnements",
          "Portails clients et extranets, rôles et permissions",
          "Intégration à vos outils existants par API",
          "Tableaux de bord et traçabilité",
        ],
      },
      {
        h2: "Combien coûte le développement d'une application web ?",
        paras: [
          "Le cadrage démarre à 6 000 DH, en 2 à 3 semaines. Une plateforme ou un outil métier démarre à 18 000 DH, en 8 à 12 semaines, avec une intégration incluse. Un SaaS complet, multi-entreprises, avec abonnements et facturation, démarre à 60 000 DH sur un périmètre défini ensemble.",
        ],
        links: [
          { label: "Agence développement IA au Maroc", href: "/agence-developpement-ia-maroc" },
          { label: "Logiciel sur mesure", href: "/logiciel-sur-mesure-maroc" },
        ],
      },
    ],
    faqs: [
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
    keywords: [
      "chatbot whatsapp maroc",
      "chatbot whatsapp entreprise",
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
          "Au Maroc, la vente se fait sur WhatsApp. Un message du soir sans réponse est souvent un client parti chez le concurrent : l'automatisation garantit une réponse immédiate, et transmet à votre équipe dès que la demande sort du cadre.",
        ],
        bullets: [
          "Compte WhatsApp Business API ouvert et configuré",
          "Scénarios en français et en darija",
          "Qualification des prospects et prise de rendez-vous",
          "Transmission à un humain au bon moment",
        ],
      },
      {
        h2: "Combien coûte un chatbot WhatsApp au Maroc ?",
        paras: [
          "La formule Essentiel démarre à 2 400 DH de mise en place, puis 390 DH par mois, pour jusqu'à 10 scénarios. La formule Qualification, avec scénarios illimités, prise de rendez-vous et connexion CRM, démarre à 5 900 DH puis 690 DH par mois. Un assistant sur mesure à compréhension libre par IA démarre à 12 000 DH.",
        ],
        links: [
          { label: "Agent IA WhatsApp et automatisation", href: "/agence-developpement-ia-maroc" },
          { label: "Guide : automatiser la relation client", href: "/blog/chatbot-whatsapp-pme-marocaine" },
        ],
      },
    ],
    faqs: [
      {
        q: "Le chatbot comprend-il la darija ?",
        a: "Oui. Les scénarios sont écrits en français et en darija, et la formule sur mesure comprend les messages formulés librement, y compris en darija écrite en lettres latines.",
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
  };
}

import type { Post } from "../blog-data";

/**
 * Posts 7–10: questions Moroccan buyers type that no page answered yet
 * (Google autocomplete, Morocco, checked 2026-09-11):
 *   « prix application mobile maroc », « google ads vs meta ads »,
 *   « facebook suffit » (one of the reasons small businesses give for having
 *   no site), « vendre en ligne au maroc ».
 *
 * Same rules as posts-a/b: the answer first, sections that stand alone, prices
 * as {{prix:…}} tokens from lib/pricing.ts, and no invented figure. The only
 * third-party amounts are public list prices (Apple and Google developer
 * accounts) and the media budget the ads page already publishes.
 */

export const POSTS_C: Post[] = [
  /* ================================================================== */
  {
    slug: "combien-coute-une-application-mobile-au-maroc",
    title: "Combien coûte une application mobile au Maroc en 2026 ?",
    metaTitle: "Prix d'une Application Mobile au Maroc en 2026 | WEVTEX",
    metaDescription:
      "Une application mobile au Maroc démarre à {{prix:mobile-apps/Essentielle}} DH. Ce qui fait varier le prix, les délais réels et les coûts après le lancement.",
    keyword: "combien coûte une application mobile au maroc",
    excerpt:
      "Les trois niveaux d'application et leur prix, ce qui fait grimper la facture, et les coûts que personne ne mentionne avant la publication.",
    answer:
      "Chez Wevtex, une application mobile iOS et Android démarre à {{prix:mobile-apps/Essentielle}} DH, publication sur les deux stores comprise. Au-delà, le prix dépend du nombre d'écrans, des comptes utilisateurs, du paiement en ligne et des systèmes à connecter : le périmètre est chiffré avant de commencer.",
    category: "Prix & budget",
    publishedAt: "2026-09-11",
    readingMinutes: 7,
    relatedService: "mobile-apps",
    relatedPosts: ["combien-coute-un-site-web-au-maroc", "site-web-ou-page-facebook"],
    body: [
      {
        type: "p",
        text: "« Combien coûte une application ? » est une question sans réponse tant qu'on ne sait pas ce que l'application doit faire. Voici les trois niveaux qui couvrent la grande majorité des projets, ce qui fait varier le prix à l'intérieur de chacun, et les coûts qui arrivent après la publication.",
      },
      { type: "h2", text: "Les trois niveaux d'application et leur prix" },
      {
        type: "table",
        head: ["Niveau", "À partir de", "Délai courant", "Typiquement"],
        rows: [
          ["Essentielle", "À partir de {{prix:mobile-apps/Essentielle}} DH", "4 à 6 semaines", "Catalogue, informations, prise de rendez-vous, jusqu'à 8 écrans"],
          ["Complète", "Sur devis", "8 à 12 semaines", "Comptes clients, paiement intégré, notifications, espace d'administration"],
          ["Sur mesure", "Sur devis", "Selon périmètre", "Logique métier complexe, mode hors ligne, intégrations multiples"],
        ],
      },
      {
        type: "p",
        text: "Ces prix couvrent iOS et Android à la fois. Nous développons avec Flutter : un seul code tourne nativement sur les deux plateformes, ce qui évite de payer deux fois la même application.",
      },
      { type: "h2", text: "Ce qui fait varier le prix d'une application" },
      {
        type: "ul",
        items: [
          "Le nombre d'écrans. Chaque écran se conçoit, se développe et se teste : c'est l'unité de travail la plus lisible.",
          "Les fonctions natives : paiement, géolocalisation, appareil photo, notifications, mode hors ligne. Chacune ajoute du développement et des tests.",
          "L'espace d'administration, où vous gérez produits, utilisateurs et commandes sans passer par nous.",
          "Les connexions à l'existant : votre site, votre stock, votre ERP, une passerelle de paiement.",
          "Le design : un design sur mesure coûte plus qu'un modèle adapté, mais c'est lui qui donne envie de rouvrir l'application.",
          "Les langues : une application en français, en arabe et en anglais demande trois versions de chaque texte, et l'arabe se lit de droite à gauche.",
        ],
      },
      { type: "h2", text: "Les coûts après le lancement" },
      {
        type: "p",
        text: "Le prix de développement n'est pas le coût total. Trois lignes reviennent, et elles sont modestes tant qu'on les prévoit.",
      },
      {
        type: "ul",
        items: [
          "Les comptes développeur : Apple facture 99 dollars par an pour publier sur l'App Store, Google 25 dollars une seule fois pour Google Play. Les comptes sont ouverts à votre nom.",
          "L'hébergement du serveur, si l'application a des comptes, des commandes ou des données partagées.",
          "La maintenance : iOS et Android sortent une nouvelle version chaque année, et une application non mise à jour finit par mal fonctionner.",
        ],
      },
      { type: "h2", text: "Faut-il vraiment une application, ou d'abord un site ?" },
      {
        type: "p",
        text: "Une application se justifie quand vos clients reviennent souvent : commande récurrente, fidélité, suivi de livraison, réservation régulière, espace client. Si votre client vient une fois, se renseigne et appelle, un site mobile rapide fait le même travail pour une fraction du prix, et il est trouvé sur Google, ce qu'une application n'est pas.",
      },
      {
        type: "note",
        text: "Méfiez-vous d'un prix donné avant d'avoir listé les écrans et les fonctions. Un devis d'application sans cadrage est un devis qui changera en cours de route.",
      },
      { type: "h2", text: "Comment obtenir un prix fiable" },
      {
        type: "ol",
        items: [
          "Décrivez ce que fait l'utilisateur, étape par étape, du téléchargement à l'action qui vous rapporte.",
          "Séparez les fonctions indispensables au lancement de celles qui peuvent attendre une deuxième version.",
          "Montrez deux ou trois applications dont vous aimez le fonctionnement.",
          "Demandez un devis ferme, détaillé par écran et par fonction, avec le délai et ce qui est inclus après la publication.",
        ],
      },
    ],
    faqs: [
      {
        q: "Faut-il payer Apple et Google pour publier une application ?",
        a: "Oui. Apple facture 99 dollars par an pour le programme développeur, Google 25 dollars une seule fois pour Google Play. Nous ouvrons ces comptes à votre nom et gérons la publication.",
      },
      {
        q: "Une application peut-elle accepter le paiement par carte marocaine ?",
        a: "Oui, par l'intermédiaire d'une passerelle de paiement, comme sur un site. Selon votre activité, on combine la carte marocaine, la carte internationale et le paiement à la livraison.",
      },
      {
        q: "Qui est propriétaire de l'application ?",
        a: "Vous. Le code source, les comptes App Store et Google Play et les accès au serveur sont à votre nom, ce qui vous laisse libre de faire évoluer l'application avec qui vous voulez.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "google-ads-ou-facebook-ads-maroc",
    title: "Google Ads ou Facebook Ads : que choisir pour une entreprise au Maroc ?",
    metaTitle: "Google Ads ou Facebook Ads au Maroc : Que Choisir ? | WEVTEX",
    metaDescription:
      "Google Ads capte ceux qui cherchent déjà, Facebook et Instagram créent la demande. Le bon choix selon votre activité, votre budget et vos objectifs au Maroc.",
    keyword: "google ads ou facebook ads",
    excerpt:
      "Intention contre attention : quel canal publicitaire pour quel métier, ce qu'il faut prévoir comme budget, et le piège qui fait perdre la moitié des clics.",
    answer:
      "Choisissez Google Ads si vos clients cherchent déjà votre service sur Google, comme un plombier, un avocat ou une location de voiture : vous payez pour apparaître au moment exact de la recherche. Choisissez Facebook et Instagram Ads si votre produit se voit et s'achète par envie, comme la mode, la cosmétique ou la restauration : vous créez la demande auprès d'un public ciblé. Beaucoup d'entreprises marocaines combinent les deux.",
    category: "Publicité",
    publishedAt: "2026-09-11",
    readingMinutes: 7,
    relatedService: "ads",
    relatedPosts: ["seo-au-maroc-par-ou-commencer", "site-web-ou-page-facebook"],
    body: [
      {
        type: "p",
        text: "Les deux plateformes vendent de la visibilité, mais pas au même moment de la décision. Choisir la mauvaise, c'est payer pour être vu par des gens qui ne sont pas en train d'acheter.",
      },
      { type: "h2", text: "La différence de fond : l'intention contre l'attention" },
      {
        type: "p",
        text: "Sur Google, la personne tape ce qu'elle veut : « dentiste rabat », « climatisation prix casablanca ». Elle a déjà un besoin, et votre annonce arrive au moment où elle cherche. Sur Facebook et Instagram, la personne fait défiler son fil. Elle ne cherche rien, et c'est votre visuel qui doit l'arrêter et lui donner envie.",
      },
      { type: "h2", text: "Quand Google Ads est le meilleur choix" },
      {
        type: "ul",
        items: [
          "Les services qu'on cherche au moment du besoin : dépannage, santé, juridique, location, formation.",
          "Les achats réfléchis où l'on compare avant d'appeler, en B2B comme chez les particuliers.",
          "Les recherches locales du type « près de moi » ou « [métier] + ville ».",
          "Les produits recherchés par leur nom ou leur référence, via Google Shopping.",
        ],
      },
      { type: "h2", text: "Quand Facebook et Instagram Ads sont le meilleur choix" },
      {
        type: "ul",
        items: [
          "Les produits qui se voient : mode, cosmétique, décoration, restauration, immobilier.",
          "Les achats d'impulsion et les nouveautés que personne ne cherche encore.",
          "Les événements, ouvertures et promotions limitées dans le temps.",
          "La relance des personnes qui ont déjà visité votre site sans acheter.",
        ],
      },
      { type: "h2", text: "Comparatif rapide" },
      {
        type: "table",
        head: ["Critère", "Google Ads", "Facebook & Instagram Ads"],
        rows: [
          ["Moment", "La personne cherche", "La personne fait défiler"],
          ["Format", "Texte, Shopping, vidéo YouTube", "Image, vidéo, stories, carrousel"],
          ["Ciblage", "Mots-clés, ville, rayon", "Âge, centres d'intérêt, ville"],
          ["Idéal pour", "Services, urgence, B2B", "Produits visuels, envie, nouveautés"],
          ["Mesure clé", "Coût par appel ou demande", "Coût par message ou commande"],
        ],
      },
      { type: "h2", text: "Le budget : deux lignes à ne pas confondre" },
      {
        type: "p",
        text: "Une campagne a toujours deux coûts. Le budget média, versé directement à Google ou à Meta, qui paie l'affichage et les clics : comptez au minimum 2 000 à 3 000 DH par mois pour que les campagnes aient assez de données pour apprendre. Et les frais de gestion, qui paient la conception et le pilotage : chez Wevtex, {{prix:ads/Lancement}} DH par jour, que l'on pilote un canal ou Google et Meta ensemble.",
      },
      { type: "h2", text: "Le piège qui fait perdre la moitié des clics" },
      {
        type: "p",
        text: "Le clic est payé, mais la vente se fait sur la page qui le reçoit. Envoyer une annonce vers une page d'accueil générale, lente ou sans bouton WhatsApp visible, c'est payer des visites qui repartent. Chaque campagne mérite sa page d'atterrissage : un message, une offre, un bouton.",
      },
      { type: "h2", text: "Comment savoir ce qui marche" },
      {
        type: "p",
        text: "Le bon indicateur n'est pas le nombre de clics mais le coût d'un contact ou d'une vente. Il suppose un suivi installé avant le lancement : formulaires, appels et messages WhatsApp comptés et rattachés à la campagne qui les a générés. Sans lui, on optimise au ressenti.",
      },
    ],
    faqs: [
      {
        q: "Peut-on faire de la publicité Facebook sans site web ?",
        a: "Oui, avec les formulaires intégrés de Meta ou en envoyant les gens vers WhatsApp. Un site reste utile pour rassurer ceux qui hésitent et pour mesurer précisément ce que rapporte chaque campagne.",
      },
      {
        q: "Google Ads convient-il à une petite entreprise locale ?",
        a: "Oui. En ciblant une ville ou un rayon autour de votre adresse, un petit budget suffit à apparaître sur les recherches de votre quartier, sans payer pour des clics venant d'ailleurs.",
      },
      {
        q: "Faut-il arrêter la publicité quand le référencement naturel décolle ?",
        a: "Pas forcément. Le SEO réduit la dépendance à la publicité, mais les annonces restent utiles pour les lancements, les promotions et les recherches très disputées où les premières positions naturelles sont hors d'atteinte.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "site-web-ou-page-facebook",
    title: "Site web ou page Facebook : de quoi votre entreprise a-t-elle besoin ?",
    metaTitle: "Site Web ou Page Facebook : Que Choisir au Maroc ? | WEVTEX",
    metaDescription:
      "Une page Facebook ou Instagram suffit-elle ? Ce qu'un réseau social ne fait pas, ce qu'un site vous apporte en plus, et quand les deux se complètent.",
    keyword: "site web ou page facebook",
    excerpt:
      "« Facebook suffit » : ce que les réseaux sociaux font bien, ce qu'ils ne feront jamais, et pourquoi le bon choix est souvent les deux.",
    answer:
      "Une page Facebook ou Instagram suffit pour être vu par ceux qui vous suivent déjà. Un site web sert à être trouvé par ceux qui ne vous connaissent pas encore, sur Google, et il vous appartient : personne ne peut changer l'algorithme, suspendre votre compte ou limiter votre portée. Pour la plupart des entreprises, les deux se complètent, le site servant de base et les réseaux sociaux d'amplificateur.",
    category: "Stratégie",
    publishedAt: "2026-09-11",
    readingMinutes: 6,
    relatedService: "website-creation",
    relatedPosts: ["site-vitrine-ou-boutique-en-ligne", "combien-coute-un-site-web-au-maroc"],
    body: [
      {
        type: "p",
        text: "« Ma page Facebook suffit » est l'une des raisons les plus citées par les petites entreprises marocaines pour ne pas avoir de site. Elle n'est pas absurde : beaucoup de clients viennent réellement des réseaux sociaux. Mais elle oublie ce qu'une page ne sait pas faire.",
      },
      { type: "h2", text: "Ce que les réseaux sociaux font bien" },
      {
        type: "ul",
        items: [
          "Montrer votre activité au quotidien, en photos et en vidéos.",
          "Garder le lien avec vos clients existants et leurs proches.",
          "Recevoir des messages rapidement, souvent vers WhatsApp.",
          "Toucher un public ciblé grâce à la publicité.",
        ],
      },
      { type: "h2", text: "Ce qu'une page Facebook ne fait pas" },
      {
        type: "ul",
        items: [
          "Vous faire trouver sur Google. Quand quelqu'un tape « plombier casablanca » ou « clinique dentaire rabat », ce sont des sites et des fiches Google qui sortent, rarement une page Facebook.",
          "Vous garantir votre public. L'algorithme décide combien de vos abonnés voient chaque publication, et cette part baisse sans que vous y puissiez rien.",
          "Vous protéger. Un compte piraté ou suspendu, et tout disparaît du jour au lendemain, abonnés, messages et historique.",
          "Présenter une offre complète : pages par service, tarifs, catalogue structuré, paiement en ligne.",
          "Rassurer un client exigeant. En B2B, dans la santé ou le conseil, l'absence de site se remarque au moment où l'on vérifie qui vous êtes.",
        ],
      },
      { type: "h2", text: "Ce qu'un site web vous apporte en plus" },
      {
        type: "p",
        text: "Un site est le seul endroit en ligne qui vous appartient. Il est trouvé sur Google par ceux qui cherchent votre métier, il présente chaque service sur sa propre page, il rassemble vos preuves, et il transforme la visite en appel ou en message WhatsApp. Et contrairement à une page, vous savez exactement combien de personnes l'ont visité et ce qu'elles y ont fait.",
      },
      { type: "h2", text: "Le bon duo : un site comme base, les réseaux comme amplificateur" },
      {
        type: "p",
        text: "Les entreprises qui s'en sortent le mieux utilisent chaque outil pour ce qu'il fait bien. Les réseaux sociaux attirent l'attention et entretiennent le lien ; le site capte les recherches, rassure et convertit. Chaque publication renvoie vers une page précise du site, et le site renvoie vers vos réseaux et WhatsApp.",
      },
      { type: "h2", text: "Et le budget ?" },
      {
        type: "p",
        text: "Un site vitrine professionnel démarre chez Wevtex à {{prix:website-creation/Vitrine}} DH, livré en 7 à 14 jours, à votre nom et sur votre domaine. C'est un investissement ponctuel, là où une page sociale demande du temps chaque semaine et ne vous appartient jamais vraiment.",
      },
      { type: "h2", text: "Par où commencer" },
      {
        type: "ol",
        items: [
          "Créez ou reprenez votre fiche Google Business : c'est gratuit et c'est ce qui sort en premier sur les recherches locales.",
          "Lancez un site simple avec une page par service, vos coordonnées et un bouton WhatsApp.",
          "Reliez-le à vos réseaux, et faites pointer vos publications vers les bonnes pages.",
        ],
      },
    ],
    faqs: [
      {
        q: "Un site web est-il utile si mes clients me connaissent déjà ?",
        a: "Oui, car ils vous recommandent à d'autres, qui vérifient sur Google avant d'appeler. Un site et une fiche Google à jour transforment ce bouche-à-oreille en appels, au lieu de le perdre au profit d'un concurrent mieux présenté.",
      },
      {
        q: "Puis-je relier mon site à ma page Instagram et à WhatsApp ?",
        a: "Oui. Le site affiche vos réseaux et un bouton WhatsApp, et vos publications renvoient vers les pages du site. Les deux se renforcent au lieu de se concurrencer.",
      },
      {
        q: "Que se passe-t-il si mon compte Facebook est piraté ?",
        a: "Vous pouvez perdre l'accès pendant des semaines, parfois définitivement, avec vos abonnés et vos messages. Un site sur votre propre domaine continue de fonctionner et de recevoir des clients pendant ce temps.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "vendre-en-ligne-au-maroc",
    title: "Vendre en ligne au Maroc : paiement, livraison et boutique, le guide pour démarrer",
    metaTitle: "Vendre en Ligne au Maroc : le Guide pour Démarrer | WEVTEX",
    metaDescription:
      "Paiement à la livraison, CMI ou Stripe, livraison par ville, boutique ou Instagram : les étapes concrètes pour vendre en ligne au Maroc sans perdre de colis.",
    keyword: "vendre en ligne au maroc",
    excerpt:
      "Où vendre, comment encaisser, comment livrer, et les réflexes qui font baisser les colis refusés : le guide pratique pour démarrer.",
    answer:
      "Pour vendre en ligne au Maroc, il faut quatre choses : une boutique qui présente vos produits clairement sur mobile, le paiement à la livraison en plus de la carte bancaire, un transporteur qui livre dans les villes que vous visez, et une confirmation de commande par WhatsApp avant chaque expédition pour limiter les colis refusés.",
    category: "E-commerce",
    publishedAt: "2026-09-11",
    readingMinutes: 8,
    relatedService: "website-creation",
    relatedPosts: ["site-vitrine-ou-boutique-en-ligne", "google-ads-ou-facebook-ads-maroc"],
    body: [
      {
        type: "p",
        text: "Vendre en ligne au Maroc a ses règles propres : on paie encore beaucoup à la livraison, on commande depuis son téléphone, et on pose ses questions sur WhatsApp avant d'acheter. Voici les étapes, dans l'ordre, pour une boutique qui vend vraiment.",
      },
      { type: "h2", text: "1. Choisir où vendre : Instagram, marketplace ou boutique à vous" },
      {
        type: "p",
        text: "Instagram permet de tester une idée sans investir, mais chaque commande passe par des messages et rien ne vous appartient. Une marketplace apporte du trafic, contre une commission et une concurrence directe sur la même page. Une boutique à votre nom demande un investissement de départ, mais chaque client, chaque commande et chaque avis restent chez vous. Beaucoup commencent par Instagram et passent à leur propre boutique dès que répondre aux messages prend plus d'une heure par jour.",
      },
      { type: "h2", text: "2. Le paiement : à la livraison et par carte" },
      {
        type: "p",
        text: "Le paiement à la livraison reste largement préféré au Maroc : une boutique qui ne l'accepte pas perd une grande partie de ses commandes. En complément, la carte bancaire marocaine passe par une passerelle comme le CMI, et la carte internationale par un service comme Stripe, utile pour la diaspora et l'export.",
      },
      { type: "h2", text: "3. La livraison : transporteur, zones et frais" },
      {
        type: "p",
        text: "Choisissez un transporteur qui couvre les villes que vous visez, avec un suivi de colis et un encaissement du paiement à la livraison reversé rapidement. Affichez les frais et les délais par ville avant la commande, pas après : un frais découvert au dernier moment est la première cause d'abandon de panier.",
      },
      { type: "h2", text: "4. Réduire les colis refusés" },
      {
        type: "ul",
        items: [
          "Confirmez chaque commande par WhatsApp avant l'expédition, avec le récapitulatif et le montant.",
          "Affichez clairement le prix total, livraison comprise.",
          "Annoncez des délais réalistes, puis tenez-les.",
          "Utilisez des photos fidèles au produit reçu, surtout pour les couleurs et les tailles.",
          "Rendez la politique d'échange et de retour visible et simple.",
        ],
      },
      { type: "h2", text: "5. Des fiches produits qui vendent" },
      {
        type: "ul",
        items: [
          "Plusieurs photos nettes, dont une portée ou en situation.",
          "Le prix, la disponibilité et les tailles ou variantes visibles sans chercher.",
          "Une description qui répond aux questions qu'on vous pose sur WhatsApp.",
          "Un bouton WhatsApp pour ceux qui veulent un conseil avant d'acheter.",
        ],
      },
      { type: "h2", text: "6. Faire venir les premiers clients" },
      {
        type: "p",
        text: "Vos abonnés Instagram sont vos premiers acheteurs : envoyez-les vers la boutique. Ensuite, la publicité Facebook et Instagram crée la demande pour les produits qui se voient, Google Shopping capte ceux qui cherchent un produit précis, et des fiches produits bien rédigées remontent peu à peu sur Google sans budget publicitaire.",
      },
      { type: "h2", text: "Combien coûte une boutique en ligne ?" },
      {
        type: "p",
        text: "Chez Wevtex, une boutique en ligne complète démarre à {{prix:website-creation/Boutique}} DH, livrée en 4 à 8 semaines, avec paiement CMI et Stripe, paiement à la livraison, gestion des stocks et formation. Sur Shopify, un abonnement mensuel s'ajoute ; avec WooCommerce, pas de licence, mais un hébergement et des mises à jour à prévoir.",
      },
    ],
    faqs: [
      {
        q: "Faut-il une société pour vendre en ligne au Maroc ?",
        a: "Pour encaisser par carte bancaire, il faut une activité déclarée, qui permet d'ouvrir un compte de paiement auprès d'une banque ou d'une passerelle. Le statut d'auto-entrepreneur ou une société conviennent selon votre volume : un comptable vous dira lequel est adapté.",
      },
      {
        q: "Le paiement à la livraison est-il risqué ?",
        a: "Le risque, ce sont les colis refusés. Il se réduit fortement avec une confirmation par WhatsApp avant l'expédition, un prix total affiché dès le départ et des délais tenus.",
      },
      {
        q: "Peut-on vendre à l'étranger depuis une boutique marocaine ?",
        a: "Oui. Avec la carte internationale, un transporteur qui expédie hors du Maroc et des prix affichés dans la bonne devise, une boutique peut vendre à la diaspora et à l'export.",
      },
    ],
  },
];

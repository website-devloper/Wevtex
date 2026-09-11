import type { Post } from "../blog-data";

/**
 * Posts 1–3 — prix, choix d'agence, vitrine ou boutique.
 *
 * Prices quoted here are the ones published on the service pages (990 /
 * 6 000 / 16 000 DH pour un site, 12 000 DH pour une application…), so a reader
 * who compares the blog and the pricing tables finds the same numbers.
 *
 * `publishedAt` is the day the post was actually written. If you stagger the
 * publication, move the date with it — a date that predates the text is the
 * kind of detail both Google and an answer engine can check.
 */

export const POSTS_A: Post[] = [
  /* ================================================================== */
  {
    slug: "combien-coute-un-site-web-au-maroc",
    title: "Combien coûte un site web au Maroc en 2026 ?",
    metaTitle: "Combien Coûte un Site Web au Maroc en 2026 ? | WEVTEX",
    metaDescription:
      "Un site vitrine au Maroc coûte de {{prix:website-creation/Vitrine}} à 15 000 DH, une boutique en ligne de {{prix:website-creation/Boutique}} à 40 000 DH. Ce qui fait varier le prix.",
    keyword: "combien coûte un site web au maroc",
    excerpt:
      "Les fourchettes réelles par type de site, ce qui fait monter la facture, et les coûts annuels que personne ne chiffre avant de signer.",
    answer:
      "Au Maroc, un site vitrine professionnel coûte entre {{prix:website-creation/Vitrine}} et 15 000 DH, un site d'entreprise complet entre {{prix:website-creation/Business}} et 30 000 DH, et une boutique en ligne entre {{prix:website-creation/Boutique}} et 40 000 DH. Une application mobile démarre autour de {{prix:mobile-apps/Essentielle}} DH. L'écart vient du nombre de pages, de la rédaction des contenus et des fonctions à développer, pas du prestataire.",
    category: "Prix & budget",
    publishedAt: "2026-09-10",
    readingMinutes: 8,
    relatedService: "website-creation",
    relatedPosts: ["site-vitrine-ou-boutique-en-ligne", "comment-choisir-une-agence-web-au-maroc"],
    body: [
      {
        type: "p",
        text: "Le prix d'un site est la première question qu'on nous pose et la seule à laquelle la plupart des agences répondent « ça dépend ». C'est vrai, mais inutile. Voici les fourchettes que pratique le marché marocain, ce qui fait bouger le curseur à l'intérieur de chaque fourchette, et les frais annuels qu'on oublie de vous annoncer.",
      },
      { type: "h2", text: "Les fourchettes de prix par type de site" },
      {
        type: "p",
        text: "Un projet web se range dans l'une de quatre familles. Chacune correspond à une quantité de travail différente, et c'est là que se décide le budget, avant toute discussion de design.",
      },
      {
        type: "table",
        head: ["Type de site", "Fourchette (DH)", "Délai courant"],
        rows: [
          ["Site vitrine (3 à 5 pages)", "{{prix:website-creation/Vitrine}} – 15 000", "1 à 3 semaines"],
          ["Site d'entreprise (10 à 20 pages)", "{{prix:website-creation/Business}} – 30 000", "3 à 6 semaines"],
          ["Boutique en ligne", "{{prix:website-creation/Boutique}} – 40 000", "4 à 8 semaines"],
          ["Plateforme ou logiciel métier", "{{prix:custom-solutions/Plateforme}} – 60 000+", "8 à 16 semaines"],
          ["Application mobile iOS + Android", "{{prix:mobile-apps/Essentielle}} – 50 000+", "4 à 12 semaines"],
        ],
      },
      {
        type: "p",
        text: "Ces chiffres sont ceux d'un prestataire professionnel qui livre un site à vous, hébergé sur votre nom de domaine, avec un code que vous pouvez récupérer. En dessous de 900 DH, vous n'achetez pas un site : vous louez un modèle sur une plateforme, et vous le perdez le jour où vous arrêtez de payer.",
      },
      { type: "h2", text: "Ce qui fait réellement varier la facture" },
      {
        type: "p",
        text: "Six facteurs expliquent presque tout l'écart entre un devis à 5 000 DH et un devis à 30 000 DH pour ce qui ressemble, de loin, au même site.",
      },
      {
        type: "ul",
        items: [
          "Le nombre de pages uniques. Cinq pages, ce n'est pas la moitié de dix : chaque page a sa structure, son contenu et sa version mobile.",
          "La rédaction. Si vous fournissez vos textes, vous économisez. Si l'agence les écrit, comptez plusieurs jours de travail — et un site rédigé se positionne mieux qu'un site rempli.",
          "Le design. Un modèle adapté coûte moins qu'une maquette dessinée pour vous. La différence se voit surtout sur la crédibilité, pas sur la technique.",
          "Les fonctions. Un formulaire, c'est une heure. Un paiement en ligne, un espace client, une réservation avec créneaux, une synchronisation de stock : chacun est un projet dans le projet.",
          "Les langues. Un site français-arabe n'est pas un site français traduit : il faut une seconde version de chaque contenu, et l'arabe se lit de droite à gauche.",
          "Le référencement de départ. Structure, balises, vitesse, données structurées : c'est du travail réel, et c'est ce qui décide si le site sera trouvé ou seulement joli.",
        ],
      },
      { type: "h2", text: "Les coûts annuels qu'on oublie de vous annoncer" },
      {
        type: "p",
        text: "Le prix de création n'est pas le coût du site. Trois lignes reviennent chaque année, et elles sont modestes tant qu'on les prévoit.",
      },
      {
        type: "ul",
        items: [
          "Le nom de domaine : 100 à 400 DH par an selon l'extension (.ma, .com).",
          "L'hébergement : de 0 DH sur les plateformes modernes pour un site vitrine, à 1 500–6 000 DH par an pour une boutique avec du trafic.",
          "La maintenance : mises à jour, sauvegardes, correctifs de sécurité et petites modifications. Comptez 300 à 1 500 DH par mois selon la taille du site, ou rien si vous assumez ces tâches vous-même.",
        ],
      },
      {
        type: "note",
        text: "Demandez toujours que le devis sépare la création, l'hébergement de la première année et la maintenance. Un prix unique « tout compris » sans détail est le meilleur moyen de découvrir des frais après la mise en ligne.",
      },
      { type: "h2", text: "Pourquoi deux devis peuvent aller du simple au triple" },
      {
        type: "p",
        text: "Pour le même cahier des charges, l'écart entre prestataires s'explique par ce qui est inclus, pas par une marge. Un devis bas exclut souvent la rédaction, les photos, la version arabe, le paramétrage du paiement, la formation et le suivi post-lancement. Un devis élevé les intègre, et prévoit du temps pour les allers-retours que tout projet réel comporte.",
      },
      {
        type: "p",
        text: "La comparaison utile n'est donc pas « quel est le prix » mais « qu'est-ce que je reçois, et qu'est-ce qui me sera facturé en plus ». Un devis honnête vous dit ce qu'il ne couvre pas.",
      },
      { type: "h2", text: "Combien devriez-vous mettre, selon votre situation" },
      {
        type: "p",
        text: "Un budget se décide par ce que le site doit rapporter, pas par ce que le voisin a payé.",
      },
      {
        type: "ol",
        items: [
          "Vous démarrez et vous voulez exister sur Google et sur WhatsApp : un site vitrine soigné de 3 à 5 pages suffit, autour de {{prix:website-creation/Vitrine}} à {{prix:website-creation/Business}} DH. Vous l'enrichirez ensuite.",
          "Vous avez une activité qui tourne et vous perdez des demandes faute de crédibilité en ligne : un site d'entreprise rédigé, entre {{prix:website-creation/Business}} et {{prix:website-creation/Boutique}} DH, avec un vrai travail sur les pages de service.",
          "Vous vendez des produits : une boutique à partir de {{prix:website-creation/Boutique}} DH, avec paiement CMI ou Stripe et gestion des stocks. En dessous, vous aurez un catalogue, pas un canal de vente.",
          "Vous avez un processus interne qui vous coûte des heures : c'est un logiciel ou une plateforme, pas un site, et le budget se chiffre après un cadrage.",
        ],
      },
      { type: "h2", text: "Notre position sur les prix" },
      {
        type: "p",
        text: "Wevtex publie ses formules de départ sur chaque page de service : {{prix:website-creation/Vitrine}} DH pour une vitrine jusqu'à 5 pages livrée en 7 à 14 jours, {{prix:website-creation/Business}} DH pour un site d'entreprise jusqu'à 15 pages avec rédaction, {{prix:website-creation/Boutique}} DH pour une boutique en ligne complète. Chaque projet reçoit ensuite un devis ferme après un échange de quinze minutes, et ce devis ne bouge pas en cours de route.",
      },
    ],
    faqs: [
      {
        q: "Quel est le prix minimum pour un site web professionnel au Maroc ?",
        a: "Autour de {{prix:website-creation/Vitrine}} DH pour un site vitrine de quelques pages, conçu sur mesure et livré à vous. En dessous, vous êtes sur un abonnement à une plateforme, où le site cesse d'exister si vous arrêtez de payer.",
      },
      {
        q: "Le prix inclut-il le nom de domaine et l'hébergement ?",
        a: "Chez nous, la première année est incluse dans les formules courantes ; ensuite le domaine coûte 100 à 400 DH par an et l'hébergement de 0 à 6 000 DH par an selon le type de site. Faites préciser ce point sur tout devis, car les pratiques varient.",
      },
      {
        q: "Faut-il payer la totalité à la commande ?",
        a: "Non. L'usage au Maroc est un acompte à la commande et le solde à la livraison, parfois en trois fois sur les projets longs. Un prestataire qui exige 100 % avant de commencer est un signal à examiner.",
      },
      {
        q: "Un site plus cher se positionne-t-il mieux sur Google ?",
        a: "Pas mécaniquement. Ce qui pèse, c'est la structure, la vitesse et surtout le contenu rédigé pour les recherches réelles de vos clients. Un site à 6 000 DH bien rédigé bat un site à 30 000 DH sans texte.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "comment-choisir-une-agence-web-au-maroc",
    title: "Comment choisir une agence web au Maroc : le guide complet",
    metaTitle: "Comment Choisir une Agence Web au Maroc | WEVTEX",
    metaDescription:
      "Les huit questions à poser avant de signer, les signaux d'alerte, et comment comparer deux devis qui ne contiennent pas les mêmes lignes. Guide pratique.",
    keyword: "comment choisir une agence web au maroc",
    excerpt:
      "Huit questions qui séparent un prestataire sérieux d'un vendeur de maquettes, et les trois clauses à vérifier avant de signer.",
    answer:
      "Pour choisir une agence web au Maroc, vérifiez trois choses avant tout le reste : des réalisations en ligne que vous pouvez ouvrir et tester, un devis détaillé ligne par ligne, et une clause écrite qui vous donne la propriété du site, du code et des accès. Le reste — technologie, taille de l'équipe, années d'existence — vient après.",
    category: "Choisir un prestataire",
    publishedAt: "2026-09-10",
    readingMinutes: 9,
    relatedService: "website-creation",
    relatedPosts: ["combien-coute-un-site-web-au-maroc", "nextjs-ou-wordpress-quel-choix"],
    body: [
      {
        type: "p",
        text: "Choisir une agence engage bien plus que le budget de création : vous confiez à quelqu'un votre présence en ligne, vos contenus, votre domaine et souvent vos données clients. Voici comment évaluer un prestataire marocain sans être technicien.",
      },
      { type: "h2", text: "Commencez par ses réalisations, pas par son discours" },
      {
        type: "p",
        text: "Une agence qui livre a des sites en ligne. Demandez trois adresses, ouvrez-les sur votre téléphone et jugez trois points : le temps de chargement, la lisibilité sur mobile, et la facilité à trouver comment les contacter. Si on vous montre des maquettes plutôt que des sites en ligne, ou des captures sans lien, c'est que les projets n'existent pas ou qu'ils ne sont plus présentables.",
      },
      {
        type: "p",
        text: "Regardez aussi si les réalisations ressemblent à votre besoin. Une agence qui n'a fait que des vitrines n'a pas les réflexes d'un projet e-commerce, où le tunnel d'achat, le paiement et la gestion de stock font tout le travail.",
      },
      { type: "h2", text: "Les huit questions à poser avant de signer" },
      {
        type: "ol",
        items: [
          "À qui appartient le site une fois payé — le code, les contenus, le domaine et les accès ? La réponse doit être « à vous », et elle doit figurer par écrit.",
          "Que se passe-t-il si nous arrêtons de travailler ensemble ? Pouvez-vous partir avec le site, ou repart-il avec le prestataire ?",
          "Qui rédige les textes ? Si c'est vous, c'est un travail réel à prévoir ; si c'est l'agence, c'est une ligne du devis.",
          "Le site sera-t-il livré avec les bases du référencement — titres, descriptions, structure, vitesse, sitemap ?",
          "Quel est le délai, et sur quoi repose-t-il ? Un délai crédible tient compte de vos retours, pas seulement du travail de l'agence.",
          "Que couvre exactement la maintenance, et à quel prix après la première année ?",
          "Pourrai-je modifier mes contenus moi-même, et sur quel outil ?",
          "Qui sera mon interlocuteur, et par quel canal ? Un projet suivi sur WhatsApp avec une personne identifiée avance plus vite qu'un ticket sans nom.",
        ],
      },
      { type: "h2", text: "Comment comparer deux devis qui ne se ressemblent pas" },
      {
        type: "p",
        text: "Deux devis pour le même projet contiennent rarement les mêmes lignes, ce qui rend la comparaison des totaux trompeuse. Reconstituez le périmètre : nombre de pages, rédaction incluse ou non, nombre de langues, fonctions, hébergement de la première année, formation, durée de suivi. Ajoutez ensuite au devis le moins cher tout ce qu'il n'inclut pas. L'écart se réduit souvent de moitié, et parfois s'inverse.",
      },
      {
        type: "note",
        text: "Un devis d'une seule ligne — « création site internet : 12 000 DH » — n'est pas comparable et ne vous protège pas. Demandez le détail avant de discuter le prix.",
      },
      { type: "h2", text: "Les signaux d'alerte" },
      {
        type: "ul",
        items: [
          "La promesse d'une « première place sur Google » avec un délai. Personne ne peut garantir un classement, et l'affirmer est le signe le plus fiable qu'on vous vend du vent.",
          "Le refus de vous donner les accès à votre propre hébergement ou à votre domaine.",
          "Un domaine enregistré au nom de l'agence plutôt qu'au vôtre. C'est votre actif : il doit être à votre nom dès le premier jour.",
          "Aucune adresse, aucun nom, aucun numéro fixe ou WhatsApp professionnel vérifiable.",
          "Un prix très inférieur au marché sans explication : le travail non fait revient toujours, soit en frais supplémentaires, soit en site à refaire.",
          "Des délais irréalistes. Une boutique complète en cinq jours signifie un modèle rempli à la hâte.",
        ],
      },
      { type: "h2", text: "Agence, freelance ou plateforme : lequel pour vous" },
      {
        type: "p",
        text: "Un freelance coûte moins cher et convient parfaitement à un site vitrine, à condition d'accepter le risque de disponibilité : une personne seule tombe malade et prend des vacances. Une agence coûte davantage mais couvre plusieurs métiers — design, développement, rédaction, référencement — et reste joignable après la livraison. Une plateforme en libre-service est la moins chère et suffit pour tester une idée, tant que vous acceptez de ne pas posséder le résultat et de rester limité à ce que l'outil sait faire.",
      },
      {
        type: "p",
        text: "Le critère décisif n'est pas la forme juridique du prestataire, mais la question précédente : que se passe-t-il pour votre site si cette personne ou cette structure disparaît demain ?",
      },
      { type: "h2", text: "Ce qu'il faut faire figurer dans le contrat" },
      {
        type: "p",
        text: "Trois clauses suffisent à éviter la quasi-totalité des litiges que nous voyons quand un client vient nous confier un site créé ailleurs : la propriété pleine du site et des contenus à réception du paiement final, la remise des accès (domaine, hébergement, administration, code) à la livraison, et le périmètre précis avec le nombre d'allers-retours de correction inclus.",
      },
      {
        type: "p",
        text: "Ajoutez-y les échéances de paiement et ce qui déclenche la livraison. Un projet qui se termine mal, au Maroc comme ailleurs, se termine presque toujours mal sur un point que personne n'avait écrit.",
      },
    ],
    faqs: [
      {
        q: "Faut-il choisir une agence dans ma ville ?",
        a: "Ce n'est pas indispensable, mais un prestataire proche est plus simple pour une réunion, une séance photo ou un point sur place. Nous travaillons depuis Casablanca avec des clients dans tout le Maroc et à l'étranger, en visio et sur WhatsApp.",
      },
      {
        q: "Combien de temps prend le choix d'une agence ?",
        a: "Comptez une à deux semaines : deux ou trois échanges de cadrage, puis les devis. Une agence qui vous envoie un devis chiffré sans avoir posé de questions n'a pas compris votre projet.",
      },
      {
        q: "Une agence peut-elle garantir la première place sur Google ?",
        a: "Non. Le classement dépend de Google, de vos concurrents et du temps. Ce qui peut être garanti, c'est le travail : structure technique, contenus, vitesse, fiche Google Business et suivi des positions.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "site-vitrine-ou-boutique-en-ligne",
    title: "Site vitrine ou boutique en ligne : lequel choisir pour votre activité ?",
    metaTitle: "Site Vitrine ou E-commerce : Lequel Choisir ? | WEVTEX",
    metaDescription:
      "Vitrine ou e-commerce : la règle simple pour trancher, les coûts et le travail réel de chaque option, et les cas où le vitrine vend mieux.",
    keyword: "site vitrine ou boutique en ligne",
    excerpt:
      "La règle simple pour trancher, ce que chaque option demande vraiment, et pourquoi un vitrine peut rapporter plus qu'une boutique.",
    answer:
      "Choisissez un site vitrine si la vente se conclut par un échange — devis, rendez-vous, conseil, essai. Choisissez une boutique en ligne si un client peut décider seul, payer seul et recevoir un produit standard. La question n'est pas la taille de l'entreprise mais la façon dont la vente se conclut aujourd'hui.",
    category: "Stratégie",
    publishedAt: "2026-09-10",
    readingMinutes: 7,
    relatedService: "website-creation",
    relatedPosts: ["combien-coute-un-site-web-au-maroc", "seo-au-maroc-par-ou-commencer"],
    body: [
      {
        type: "p",
        text: "Beaucoup d'entreprises marocaines commandent une boutique en ligne parce que c'est ce qui se fait, puis découvrent qu'elles passent leurs journées sur WhatsApp de toute façon. D'autres restent sur un site vitrine alors que leurs produits se vendraient seuls. Voici comment trancher.",
      },
      { type: "h2", text: "La différence réelle entre les deux" },
      {
        type: "p",
        text: "Un site vitrine présente votre activité et provoque une prise de contact : appel, WhatsApp, formulaire, demande de devis, réservation. Une boutique en ligne exécute la transaction complète : catalogue, panier, paiement, livraison, suivi de commande. Le premier vend votre crédibilité, le second vend vos produits.",
      },
      {
        type: "p",
        text: "Techniquement, la boutique demande deux à trois fois plus de travail : fiches produits, gestion des stocks, paiement CMI ou Stripe, frais de port, retours, e-mails automatiques. C'est ce qui explique l'écart de prix, de {{prix:website-creation/Vitrine}}–15 000 DH pour un vitrine à {{prix:website-creation/Boutique}}–40 000 DH pour une boutique.",
      },
      { type: "h2", text: "Prenez le site vitrine si…" },
      {
        type: "ul",
        items: [
          "Votre prix dépend du besoin : bâtiment, conseil, formation, événementiel, transport, maintenance.",
          "Le client a besoin d'être rassuré ou conseillé avant d'acheter : santé, immobilier, juridique, éducation.",
          "Vous vendez un service à rendez-vous : clinique, salon, cabinet, studio, restaurant.",
          "Vous avez peu de références mais un savoir-faire à démontrer, avec des réalisations et des avis.",
        ],
      },
      {
        type: "p",
        text: "Dans ces cas, un vitrine bien rédigé, avec des pages par prestation et par ville, rapporte plus qu'une boutique : il capte les recherches précises et amène des demandes qualifiées que vous concluez à votre prix.",
      },
      { type: "h2", text: "Prenez la boutique en ligne si…" },
      {
        type: "ul",
        items: [
          "Vos produits ont un prix fixe et une description qui suffit à décider.",
          "Vous vendez déjà par Instagram ou WhatsApp et vous passez trop de temps à répéter prix, stock et livraison.",
          "Vous avez du stock à écouler ou une gamme qui se renouvelle.",
          "Vous voulez vendre au-delà de votre ville, ou à l'étranger vers la diaspora.",
        ],
      },
      {
        type: "p",
        text: "Un signal fiable : si vous recevez chaque semaine des messages « chhal taman » et « kayn ? », la boutique est déjà justifiée. Elle ne remplace pas WhatsApp, elle en retire le travail répétitif.",
      },
      { type: "h2", text: "Le cas marocain : le paiement à la livraison" },
      {
        type: "p",
        text: "Une grande partie des acheteurs au Maroc préfère encore payer à la réception. Une boutique qui n'accepte que la carte perd ces commandes ; une boutique qui propose le paiement à la livraison doit gérer les refus de colis et le suivi. Prévoyez les deux, avec confirmation de la commande par WhatsApp avant expédition : c'est ce qui fait le plus baisser le taux de colis retournés.",
      },
      { type: "h2", text: "La troisième voie : le vitrine catalogue" },
      {
        type: "p",
        text: "Entre les deux existe une option que peu de prestataires proposent, et qui convient à beaucoup de commerces : un site vitrine avec un catalogue complet, des prix affichés, mais sans panier — chaque produit ouvre une conversation WhatsApp pré-remplie avec sa référence.",
      },
      {
        type: "p",
        text: "Vous gardez le conseil et la négociation, vous supprimez les questions répétitives, et le budget reste celui d'un vitrine. C'est souvent la bonne première étape avant une vraie boutique, l'année suivante, quand les volumes le justifient.",
      },
      { type: "h2", text: "Comment décider en cinq minutes" },
      {
        type: "ol",
        items: [
          "Regardez vos dix dernières ventes. Combien se seraient conclues sans un seul échange ? Si c'est moins de la moitié, c'est un vitrine.",
          "Comptez vos références. Moins de dix produits stables : un catalogue suffit. Plus de trente, avec des variantes : une boutique.",
          "Estimez le temps passé à répondre aux mêmes questions. Au-delà d'une heure par jour, la boutique se rembourse par le temps gagné.",
          "Vérifiez qui gérera les commandes. Une boutique sans personne pour préparer, expédier et suivre les colis devient un problème, pas un canal.",
        ],
      },
    ],
    faqs: [
      {
        q: "Peut-on transformer un site vitrine en boutique plus tard ?",
        a: "Oui, à condition que le site ait été construit pour. Un site vitrine bien structuré accueille une partie boutique sans être refait ; c'est une question à poser à votre prestataire avant la création, pas après.",
      },
      {
        q: "Une boutique en ligne rapporte-t-elle plus qu'un site vitrine ?",
        a: "Pas nécessairement. Une boutique rapporte si les produits se vendent sans conseil et si quelqu'un traite les commandes. Pour une activité de service, un vitrine qui génère des demandes de devis rapporte davantage, pour un budget inférieur.",
      },
      {
        q: "Combien de produits faut-il pour justifier une boutique ?",
        a: "Il n'y a pas de seuil absolu, mais en dessous d'une dizaine de références stables, un catalogue avec commande par WhatsApp fait le même travail pour un coût bien moindre.",
      },
    ],
  },
];

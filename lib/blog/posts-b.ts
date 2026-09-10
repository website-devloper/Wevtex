import type { Post } from "../blog-data";

/**
 * Posts 4–6 — SEO, chatbots WhatsApp, Next.js vs WordPress.
 *
 * Same rules as posts-a: answer-first opening, sections that stand alone if
 * quoted, and only figures the site already publishes elsewhere.
 */

export const POSTS_B: Post[] = [
  /* ================================================================== */
  {
    slug: "seo-au-maroc-par-ou-commencer",
    title: "SEO au Maroc : par où commencer pour être trouvé sur Google",
    metaTitle: "SEO au Maroc : Par Où Commencer pour Être Trouvé | WEVTEX",
    metaDescription:
      "Les six premières actions SEO pour une entreprise marocaine, dans l'ordre : fiche Google, vrais mots-clés, pages par service et par ville.",
    keyword: "référencement naturel maroc débutant",
    excerpt:
      "Les six premières actions, dans l'ordre, et les délais réalistes avant de voir arriver les premières demandes.",
    answer:
      "Pour être trouvé sur Google au Maroc, commencez par votre fiche Google Business Profile, puis créez une page distincte pour chaque prestation et chaque ville que vous couvrez. Ces deux actions apportent les premiers appels en quelques semaines ; le référencement des termes larges comme « agence web maroc » demande, lui, six à douze mois.",
    category: "Référencement",
    publishedAt: "2026-09-10",
    readingMinutes: 9,
    relatedService: "seo",
    relatedPosts: ["site-vitrine-ou-boutique-en-ligne", "nextjs-ou-wordpress-quel-choix"],
    body: [
      {
        type: "p",
        text: "Le référencement se vend souvent comme une discipline obscure. Dans les faits, pour une PME marocaine, quatre-vingts pour cent du résultat vient de six actions ordonnées, dont deux ne coûtent rien. Voici l'ordre dans lequel les faire.",
      },
      { type: "h2", text: "1. La fiche Google Business Profile, avant le site" },
      {
        type: "p",
        text: "Pour toutes les recherches locales — « dentiste casablanca », « traiteur rabat », « garage marrakech » — Google affiche d'abord une carte avec trois établissements. Cette place ne dépend pas de votre site mais de votre fiche : catégorie exacte, zone d'intervention, horaires, photos récentes, services listés, et surtout avis clients.",
      },
      {
        type: "p",
        text: "C'est gratuit, cela prend une heure à créer et c'est le seul levier qui produit des appels en quelques jours. Demandez un avis à chaque client satisfait, au moment où il est content, avec un lien direct : c'est le facteur qui bouge le plus la position dans la carte.",
      },
      { type: "h2", text: "2. Écrire les mots que vos clients tapent réellement" },
      {
        type: "p",
        text: "Les entreprises décrivent leur métier dans leur langage — « solutions d'ingénierie thermique » — quand leurs clients tapent « installation climatisation casablanca prix ». Le site doit contenir les seconds, dans ses titres et dans son texte.",
      },
      {
        type: "p",
        text: "Trouvez-les sans outil payant : tapez votre service dans Google et lisez les suggestions automatiques, puis le bloc « Autres questions posées » et les recherches associées en bas de page. Notez les tournures qui reviennent, y compris les fautes et les formulations franco-arabes. C'est votre liste de départ.",
      },
      { type: "h2", text: "3. Une page par prestation, jamais une page « Services »" },
      {
        type: "p",
        text: "Une page unique qui liste huit prestations ne se positionne sur aucune. Google classe des pages, pas des entreprises : chaque prestation a besoin de sa page, avec son titre, son prix de départ, ses questions fréquentes et ses exemples.",
      },
      {
        type: "p",
        text: "C'est la raison pour laquelle ce site a une page par service plutôt qu'une liste. Le travail est plus long, et c'est exactement ce qui fait la différence entre un site présent et un site trouvé.",
      },
      { type: "h2", text: "4. Une page par ville que vous couvrez réellement" },
      {
        type: "p",
        text: "« Création site web casablanca » est cherché plus souvent, et disputé moins durement, que « création site web maroc ». Une page par ville, avec un contenu réellement différent — le tissu économique local, les secteurs, vos clients dans la zone — capte ces recherches.",
      },
      {
        type: "note",
        text: "Ne dupliquez jamais une page de ville en remplaçant le nom de la ville. Google détecte ce schéma et cesse de considérer ces pages. Si vous n'avez rien de spécifique à dire sur une ville, ne créez pas la page.",
      },
      { type: "h2", text: "5. La vitesse et le mobile, qui décident du reste" },
      {
        type: "p",
        text: "Au Maroc, la majorité des visites vient du téléphone, souvent en 4G moyenne. Un site qui met plus de trois secondes à s'afficher perd la moitié de ses visiteurs avant d'avoir dit bonjour, et Google le sait aussi.",
      },
      {
        type: "p",
        text: "Testez le vôtre sur PageSpeed Insights, en version mobile. Les trois causes habituelles d'un mauvais score sont les images non compressées, les extensions accumulées et un hébergement mutualisé saturé. Corrigez dans cet ordre.",
      },
      { type: "h2", text: "6. Publier régulièrement, sur ce qu'on vous demande" },
      {
        type: "p",
        text: "Chaque question que vos clients posent au téléphone est un article. « Combien ça coûte », « combien de temps », « quelle différence entre X et Y » : ce sont des recherches réelles, peu disputées, et ce sont celles que les moteurs de réponse citent parce qu'elles ont une réponse nette.",
      },
      {
        type: "p",
        text: "Un article par mois, écrit sérieusement, vaut mieux que dix articles remplis en une semaine puis plus rien. La régularité compte davantage que le volume.",
      },
      { type: "h2", text: "Les délais réalistes" },
      {
        type: "table",
        head: ["Action", "Premiers effets", "Effet plein"],
        rows: [
          ["Fiche Google Business", "1 à 3 semaines", "2 à 3 mois"],
          ["Pages par service", "1 à 2 mois", "4 à 6 mois"],
          ["Pages par ville", "2 à 3 mois", "6 mois"],
          ["Articles de blog", "2 à 4 mois", "6 à 12 mois"],
          ["Termes larges (« agence web maroc »)", "6 mois", "12 mois et plus"],
        ],
      },
      {
        type: "p",
        text: "Un prestataire qui vous promet la première place en un mois vend autre chose que du référencement. Le SEO est lent au départ puis cumulatif : les demandes qu'il apporte ne s'arrêtent pas quand vous cessez de payer, contrairement à la publicité.",
      },
    ],
    faqs: [
      {
        q: "Combien de temps avant d'apparaître sur Google ?",
        a: "Un site neuf est indexé en quelques jours, mais se positionner utilement prend deux à six mois selon la concurrence de vos termes. Le référencement local via la fiche Google Business est le plus rapide, souvent quelques semaines.",
      },
      {
        q: "Le SEO fonctionne-t-il sans budget publicitaire ?",
        a: "Oui, ce sont deux canaux distincts. La publicité achète des visites immédiates qui cessent avec le budget ; le référencement construit des positions qui restent. Beaucoup d'entreprises font de la publicité les premiers mois, le temps que le SEO produise.",
      },
      {
        q: "Faut-il un site en arabe pour se référencer au Maroc ?",
        a: "Cela dépend de votre clientèle. La majorité des recherches commerciales au Maroc se font en français ou en français translittéré ; une version arabe est utile pour le grand public et pour certains secteurs, mais elle ne remplace pas le travail sur le français.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "chatbot-whatsapp-pme-marocaine",
    title: "Chatbots WhatsApp : comment automatiser la relation client d'une PME marocaine",
    metaTitle: "Chatbot WhatsApp pour PME au Maroc : Guide Pratique | WEVTEX",
    metaDescription:
      "Ce qu'un chatbot WhatsApp automatise vraiment dans une PME marocaine, ce qu'il coûte, en combien de temps il se met en place, et ses limites.",
    keyword: "chatbot whatsapp entreprise maroc",
    excerpt:
      "Ce qui s'automatise vraiment, ce qui ne doit pas l'être, et le coût réel d'un assistant WhatsApp au Maroc.",
    answer:
      "Un chatbot WhatsApp répond automatiquement aux questions récurrentes d'une entreprise — prix, disponibilité, horaires, suivi de commande, prise de rendez-vous — et passe la main à une personne dès que la demande sort du cadre. Au Maroc, la mise en place démarre à 2 400 DH avec un abonnement mensuel de 390 DH, et l'assistant est opérationnel en une à trois semaines.",
    category: "Automatisation",
    publishedAt: "2026-09-10",
    readingMinutes: 8,
    relatedService: "whatsapp-bots",
    relatedPosts: ["site-vitrine-ou-boutique-en-ligne", "combien-coute-un-site-web-au-maroc"],
    body: [
      {
        type: "p",
        text: "Au Maroc, WhatsApp n'est pas un canal parmi d'autres : c'est celui où la vente se fait. Le problème n'est donc pas d'y être, mais d'y répondre — le soir, le dimanche, et trente fois par jour à la même question.",
      },
      { type: "h2", text: "Ce qu'un chatbot WhatsApp automatise réellement" },
      {
        type: "p",
        text: "Un assistant bien réglé traite les demandes qui ont une réponse stable, c'est-à-dire l'essentiel du volume entrant d'une PME.",
      },
      {
        type: "ul",
        items: [
          "Prix, formules et conditions, avec la réponse exacte plutôt qu'une approximation donnée à la hâte.",
          "Horaires, adresse, itinéraire et disponibilités.",
          "Disponibilité d'un produit et suivi d'une commande.",
          "Prise de rendez-vous, avec proposition de créneaux réels.",
          "Qualification d'un prospect : budget, ville, échéance, avant de transmettre à un commercial.",
          "Relance d'un panier abandonné ou d'un devis sans réponse.",
        ],
      },
      {
        type: "p",
        text: "Ce n'est pas de la magie : c'est la reprise du travail répétitif, exécuté à toute heure et sans faute de frappe.",
      },
      { type: "h2", text: "Ce qu'il ne faut pas automatiser" },
      {
        type: "p",
        text: "Une réclamation, un client mécontent, une négociation, une demande sensible : ces échanges doivent aller à une personne, immédiatement. Un assistant qui tente de gérer un litige aggrave le litige.",
      },
      {
        type: "p",
        text: "La règle que nous appliquons : l'assistant sait dire qu'il ne sait pas et transmet à un humain en une phrase, sans faire tourner le client en rond. C'est le seul moyen d'automatiser sans dégrader la relation.",
      },
      { type: "h2", text: "Scénarios ou IA : la vraie différence" },
      {
        type: "p",
        text: "Un chatbot à scénarios suit un arbre prévu à l'avance : « tapez 1 pour les tarifs ». Il est fiable, économique, et il bloque dès qu'une question sort du script. Un assistant à base d'IA comprend une demande formulée librement, en français, en darija écrite ou en anglais, et répond à partir de vos informations réelles.",
      },
      {
        type: "p",
        text: "Le second coûte plus cher et demande un cadrage sérieux — il faut lui donner des sources fiables et des limites — mais c'est le seul qui tient face à la façon dont les gens écrivent réellement sur WhatsApp, avec des phrases mélangées et sans ponctuation.",
      },
      { type: "h2", text: "Combien ça coûte, et en combien de temps" },
      {
        type: "table",
        head: ["Formule", "Mise en place", "Mensuel"],
        rows: [
          ["Essentiel — jusqu'à 10 scénarios", "2 400 DH", "390 DH"],
          ["Qualification — scénarios illimités, CRM", "5 900 DH", "690 DH"],
          ["Sur mesure — compréhension libre par IA", "à partir de 12 000 DH", "selon périmètre"],
        ],
      },
      {
        type: "p",
        text: "À ces montants s'ajoute le coût des conversations facturé par WhatsApp Business, faible pour les volumes d'une PME. Un assistant simple est en service en une à trois semaines ; un agent connecté à votre catalogue ou à votre CRM demande davantage, parce que l'essentiel du travail est l'intégration.",
      },
      { type: "h2", text: "WhatsApp Business ou l'API : lequel vous faut-il" },
      {
        type: "p",
        text: "L'application WhatsApp Business gratuite suffit pour un message d'accueil, des réponses rapides enregistrées et un catalogue simple. Elle ne permet ni automatisation véritable, ni plusieurs agents sur le même numéro, ni connexion à vos outils.",
      },
      {
        type: "p",
        text: "L'API WhatsApp Business — celle qu'utilisent les assistants automatisés — exige un compte vérifié et un numéro dédié, et c'est elle qui autorise les scénarios, l'IA, les envois programmés et le travail à plusieurs sur une même conversation. Le passage de l'une à l'autre se fait sans changer de numéro dans la plupart des cas.",
      },
      { type: "h2", text: "Par où commencer sans se tromper" },
      {
        type: "ol",
        items: [
          "Relisez vos cent derniers messages entrants et classez-les. Trois ou quatre questions représentent presque toujours la majorité du volume.",
          "Écrivez la bonne réponse à chacune, celle que vous voudriez que votre meilleur employé donne.",
          "Automatisez uniquement celles-là au départ, avec transmission immédiate pour tout le reste.",
          "Écoutez les conversations réelles pendant deux semaines et corrigez ce qui coince. Un assistant se règle avec de vrais échanges, pas en laboratoire.",
        ],
      },
      {
        type: "p",
        text: "Cette progression évite le piège classique : un assistant qui prétend tout savoir dès le premier jour et fait fuir les clients avant d'être corrigé.",
      },
    ],
    faqs: [
      {
        q: "Le chatbot peut-il répondre en darija ?",
        a: "Oui. Les modèles actuels gèrent le français, l'arabe, la darija marocaine écrite et l'anglais dans une même conversation. Un client peut poser sa question en darija et recevoir une réponse en darija.",
      },
      {
        q: "Vais-je perdre le contact humain avec mes clients ?",
        a: "Non si l'assistant est réglé pour transmettre dès que la demande sort de son périmètre. Ce qui s'automatise, ce sont les questions répétitives ; votre équipe récupère ce temps pour les échanges qui méritent une personne.",
      },
      {
        q: "Faut-il changer de numéro WhatsApp ?",
        a: "Dans la plupart des cas, non : un numéro existant peut être migré vers l'API WhatsApp Business. Un numéro déjà utilisé sur l'application classique doit en revanche être libéré avant la migration.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "nextjs-ou-wordpress-quel-choix",
    title: "Next.js ou WordPress : quel choix pour un site rapide et durable ?",
    metaTitle: "Next.js ou WordPress : Quel Choix pour Votre Site ? | WEVTEX",
    metaDescription:
      "Next.js ou WordPress : vitesse, coût, sécurité et autonomie éditoriale comparés. Le tableau de décision et les cas où chacun gagne.",
    keyword: "next.js ou wordpress",
    excerpt:
      "Vitesse, sécurité, coût d'entretien et autonomie : ce qui sépare vraiment les deux, et le cas où WordPress reste le bon choix.",
    answer:
      "WordPress convient si vous publiez souvent et voulez tout modifier vous-même sans développeur. Next.js convient si la vitesse, la sécurité et une expérience sur mesure comptent plus que l'autonomie totale sur la mise en page. Pour un site vitrine ou une plateforme métier, Next.js est plus rapide et demande moins d'entretien ; pour un site de contenu géré au quotidien par une équipe non technique, WordPress reste plus simple.",
    category: "Technologie",
    publishedAt: "2026-09-10",
    readingMinutes: 8,
    relatedService: "website-creation",
    relatedPosts: ["comment-choisir-une-agence-web-au-maroc", "seo-au-maroc-par-ou-commencer"],
    body: [
      {
        type: "p",
        text: "Le choix technique est rarement le vôtre à faire, mais ses conséquences sont les vôtres à vivre : vitesse du site, factures de maintenance, sécurité, et capacité à modifier une page sans appeler quelqu'un. Voici les différences qui comptent réellement.",
      },
      { type: "h2", text: "La vitesse : l'écart le plus visible" },
      {
        type: "p",
        text: "Un site Next.js sert des pages pré-générées, sans base de données à interroger à chaque visite. Un site WordPress construit la page à la demande, puis compense avec des extensions de cache. Sur un téléphone en 4G moyenne — le contexte marocain courant — l'écart se voit : quelques centaines de millisecondes contre deux à quatre secondes pour un WordPress chargé d'extensions.",
      },
      {
        type: "p",
        text: "Un WordPress bien optimisé, hébergé correctement et allégé, atteint de bons scores. Le problème n'est pas WordPress mais ce qu'on y ajoute : chaque extension installée ralentit toutes les pages.",
      },
      { type: "h2", text: "La sécurité et l'entretien" },
      {
        type: "p",
        text: "WordPress fait tourner une part majeure du web, ce qui en fait la cible la plus attaquée. Les intrusions passent presque toujours par une extension non mise à jour, pas par le cœur du logiciel. Un site WordPress demande donc un entretien réel : mises à jour, sauvegardes, surveillance.",
      },
      {
        type: "p",
        text: "Un site Next.js publié en pages statiques n'a ni base de données exposée ni panneau d'administration public : la surface d'attaque est presque nulle, et il n'y a pas d'extensions à mettre à jour chaque mois.",
      },
      { type: "h2", text: "L'autonomie éditoriale, l'avantage de WordPress" },
      {
        type: "p",
        text: "C'est le point où WordPress garde une avance nette. Vous ajoutez une page, changez une photo, déplacez un bloc, publiez un article, sans personne. Pour une entreprise qui publie plusieurs fois par semaine, c'est décisif.",
      },
      {
        type: "p",
        text: "Un site Next.js peut offrir la même chose en lui branchant un gestionnaire de contenu, mais c'est une brique à prévoir dès le départ, avec son coût. Sans elle, chaque modification passe par un développeur — acceptable pour un site de dix pages qui bouge peu, pénible pour un site d'actualités.",
      },
      { type: "h2", text: "Le coût, à la création et sur trois ans" },
      {
        type: "table",
        head: ["", "WordPress", "Next.js"],
        rows: [
          ["Création (site vitrine)", "Souvent moins cher", "Comparable à supérieur"],
          ["Hébergement annuel", "600 – 3 000 DH", "0 – 1 200 DH"],
          ["Entretien mensuel", "Nécessaire", "Minimal"],
          ["Modifications de contenu", "Vous, sans coût", "Développeur, ou CMS à prévoir"],
          ["Refonte à 3 ans", "Fréquente (thème vieilli)", "Rare (code à vous)"],
        ],
      },
      {
        type: "p",
        text: "Sur trois ans, l'écart se resserre : ce qu'on économise à la création en WordPress, on le repaye en hébergement, en maintenance et en extensions payantes.",
      },
      { type: "h2", text: "Quel choix selon votre situation" },
      {
        type: "ul",
        items: [
          "Blog, magazine, site d'actualités mis à jour tous les jours : WordPress.",
          "Site vitrine d'entreprise, site de service, page d'atterrissage publicitaire : Next.js, pour la vitesse et la tranquillité.",
          "Boutique en ligne standard gérée en interne : WooCommerce ou Shopify, plutôt qu'un développement sur mesure.",
          "Plateforme métier, espace client, application web : Next.js, car WordPress n'est pas fait pour ça.",
          "Budget très serré et besoin de publier vous-même : WordPress, en limitant les extensions.",
        ],
      },
      { type: "h2", text: "Ce que nous utilisons, et pourquoi" },
      {
        type: "p",
        text: "Wevtex construit en Next.js parce que la majorité de nos clients veulent un site qui charge vite sur mobile, tient sans entretien mensuel et leur appartient entièrement, code compris. Ce site en est un exemple : chaque page est pré-générée et servie telle quelle.",
      },
      {
        type: "p",
        text: "Quand un client a besoin de publier lui-même tous les jours, nous le disons et nous branchons un gestionnaire de contenu, ou nous recommandons WordPress. Le bon outil est celui qui correspond à l'usage réel, pas celui que le prestataire préfère.",
      },
    ],
    faqs: [
      {
        q: "Peut-on migrer un site WordPress vers Next.js ?",
        a: "Oui. Les contenus et les images se récupèrent, et les anciennes adresses sont redirigées vers les nouvelles pour conserver le référencement acquis. C'est un projet de refonte, pas une simple conversion.",
      },
      {
        q: "Next.js est-il meilleur pour le référencement ?",
        a: "Il donne un avantage sur la vitesse et la propreté technique, qui sont des critères réels. Mais le contenu reste déterminant : un WordPress bien rédigé bat un Next.js vide.",
      },
      {
        q: "Pourrai-je modifier mon site Next.js moi-même ?",
        a: "Oui si un gestionnaire de contenu est prévu à la construction ; sinon les modifications passent par nous. Nous posons la question avant de commencer, parce que la réponse change l'architecture du projet.",
      },
    ],
  },
];

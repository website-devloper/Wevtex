/**
 * /agence-developpement-ia-maroc — the AI-forward service page.
 *
 * Targets "agence développement ia maroc", "automatisation entreprise maroc"
 * and "agent ia whatsapp maroc": terms the established Moroccan agencies have
 * barely claimed, and the ones an answer engine gets asked most often.
 *
 * Every section is written to stand alone if quoted without the rest of the
 * page, and every claim maps to something the studio already ships — the
 * WhatsApp chatbot service and the Zina Beauty assistant are both real.
 */

export const IA_FAQS = [
  {
    q: "Qu'est-ce qu'un agent IA pour une entreprise ?",
    a: "Un agent IA est un programme qui comprend une demande en langage naturel et agit dessus : répondre à un client, qualifier un prospect, retrouver une commande, remplir un document. Contrairement à un chatbot à scénarios, il n'a pas besoin qu'on ait prévu chaque question à l'avance.",
  },
  {
    q: "Combien coûte un agent IA au Maroc ?",
    a: "Un assistant WhatsApp simple démarre au niveau de nos formules d'automatisation ; un agent connecté à votre catalogue, votre stock ou votre CRM se situe plus haut. Le prix dépend surtout du nombre de systèmes à connecter, pas du modèle utilisé. Le devis est ferme avant démarrage.",
  },
  {
    q: "L'IA peut-elle répondre en darija ?",
    a: "Oui. Les modèles actuels gèrent le français, l'arabe classique, la darija marocaine et l'anglais dans une même conversation — un client peut poser sa question en darija et recevoir une réponse en darija. C'est ce qui rend l'automatisation utile au Maroc plutôt que théorique.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Nous cloisonnons les données par client et n'envoyons au modèle que ce qui est nécessaire à la réponse. Vos fichiers, votre catalogue et vos conversations restent les vôtres, et nous documentons ce qui transite avant de mettre quoi que ce soit en production.",
  },
  {
    q: "Combien de temps pour mettre un agent en service ?",
    a: "Un assistant WhatsApp qui répond aux questions courantes est opérationnel en 1 à 3 semaines. Un agent connecté à vos outils internes demande plus, parce que l'essentiel du travail est l'intégration, pas l'IA elle-même.",
  },
  {
    q: "L'IA va-t-elle remplacer mon équipe ?",
    a: "Non, et ce n'est pas l'objectif. Ce qui s'automatise bien, c'est le répétitif : la même question posée trente fois par jour, la relance d'un panier, la saisie d'un formulaire. Votre équipe récupère le temps passé là-dessus pour les demandes qui méritent une personne.",
  },
];

export const IA_CAPABILITIES = [
  {
    h: "Assistants WhatsApp",
    p: "Un agent qui répond aux questions produit, suit une commande, prend un rendez-vous et transmet à une personne quand il faut. En français, en darija ou en anglais, 24h/24.",
  },
  {
    h: "Agents commerciaux",
    p: "Le client décrit son besoin, l'agent recommande, compose un panier et prend la commande dans la conversation. Nous l'avons livré pour une boutique de cosmétiques marocains.",
  },
  {
    h: "Automatisation métier",
    p: "Devis, relances, saisie de documents, mise à jour de stock : les tâches répétitives qui occupent une demi-journée par semaine et que personne n'aime faire.",
  },
  {
    h: "Recherche sur vos documents",
    p: "Vos catalogues, contrats et procédures interrogeables en langage naturel, avec la source citée — pour que la réponse soit vérifiable plutôt que plausible.",
  },
];

export const IA_STEPS = [
  { n: "01", h: "Cadrage", p: "Nous identifions la tâche qui vous coûte le plus de temps et vérifions qu'elle s'automatise vraiment. Certaines ne s'y prêtent pas, et nous le disons.", d: "2–3 jours" },
  { n: "02", h: "Prototype", p: "Un agent fonctionnel sur un périmètre réduit, que vous testez avec vos propres cas. Vous jugez sur pièce avant d'engager la suite.", d: "1–2 semaines" },
  { n: "03", h: "Intégration", p: "Connexion à vos outils : WhatsApp, catalogue, stock, CRM. C'est là que passe l'essentiel du travail, pas dans le modèle.", d: "2–4 semaines" },
  { n: "04", h: "Mise en service", p: "Passage en production, suivi des conversations réelles et ajustements. Un agent se règle avec de vrais échanges, pas en laboratoire.", d: "1 semaine" },
];

/* ------------------------------------------------------------------ Page copy
 * Hero, metadata and the running text. Answer-first: the first paragraph says
 * plainly who does what, where, so an answer engine can quote it alone. */

export const IA_META = {
  path: "/agence-developpement-ia-maroc",
  title: "Agence de Développement IA au Maroc | WEVTEX",
  description:
    "Agence IA à Casablanca : agents WhatsApp, automatisation des tâches et assistants connectés à vos outils. Livrés en 1 à 4 semaines.",
  keywords: [
    "agence développement ia maroc",
    "automatisation entreprise maroc",
    "agent ia whatsapp maroc",
    "intelligence artificielle entreprise maroc",
    "chatbot ia darija",
    "agence ia casablanca",
  ],
  h1: "Agence de développement",
  h1Em: "IA au Maroc.",
  lede:
    "Wevtex est un studio basé à Casablanca qui conçoit des agents IA et des automatisations pour les entreprises marocaines : un assistant WhatsApp qui répond aux clients en darija, un agent qui prend les commandes, un robot qui remplit les tâches répétitives de votre équipe. Un premier agent est en service en 1 à 4 semaines.",
} as const;

/** "Ce que l'IA change vraiment" — the honest framing, before the catalogue. */
export const IA_REALITY = [
  "L'IA d'entreprise n'est pas un sujet de conférence : c'est une question de temps récupéré. Une PME marocaine qui reçoit trente messages WhatsApp par jour passe une heure et demie à répondre trois fois la même chose. C'est cette heure et demie que nous rendons, pas plus, et nous le disons avant de commencer.",
  "Ce qui a changé en deux ans, c'est la langue. Les modèles comprennent maintenant la darija écrite comme le français, ce qui rend l'automatisation utilisable au Maroc au lieu d'être réservée aux marchés anglophones. Un client peut écrire « chhal taman » et recevoir une réponse juste, dans sa langue.",
  "Le travail réel n'est pas le modèle : c'est le branchement. Connecter l'agent à votre catalogue, votre stock, votre agenda ou votre CRM représente l'essentiel du projet. C'est aussi ce qui sépare un agent qui sert d'un chatbot qui récite.",
];

/** Sectors where the studio has actually shipped or scoped this work. */
export const IA_SECTORS = [
  { h: "E-commerce", p: "Conseil produit, suivi de commande et relance de panier dans la conversation. Livré pour une boutique de cosmétiques marocains." },
  { h: "Services & rendez-vous", p: "Qualification de la demande et prise de rendez-vous directe dans l'agenda, sans aller-retour téléphonique." },
  { h: "Immobilier & automobile", p: "Tri des demandes entrantes selon budget, zone et disponibilité, pour que le commercial ne rappelle que des pistes réelles." },
  { h: "Import, gros & distribution", p: "Devis récurrents, relances impayés et mise à jour de stock : les tâches de bureau qui s'automatisent le plus proprement." },
];

/**
 * The standalone /faq page.
 *
 * Written answer-first: every answer opens with a direct, self-contained
 * sentence that resolves the question before any elaboration. That is what an
 * answer engine can lift whole, and it is also simply how a person wants to be
 * answered.
 *
 * Facts are scoped rather than vague — "2 à 4 semaines", "à partir de 990 DH",
 * "30 jours" — because a scoped fact is citable and a vague one is not. Nothing
 * here is invented: every figure already appears elsewhere on the site.
 *
 * REVIEW BEFORE LAUNCH — these are commitments to clients. Confirm each one.
 */

import { fillPricesDeep } from "./pricing";

export type Faq = { q: string; a: string };
export type FaqGroup = { id: string; title: string; items: Faq[] };

export const FAQ_GROUPS: FaqGroup[] = fillPricesDeep([
  {
    id: "prix",
    title: "Prix et devis",
    items: [
      {
        q: "Combien coûte un site web au Maroc ?",
        a: "Nos formules démarrent à {{prix:website-creation/Vitrine}} DH pour un site vitrine simple. Une boutique en ligne ou une application se situe plus haut, selon le nombre de pages, les fonctionnalités et le contenu à produire. Le prix final est fixé dans un devis ferme avant que le travail ne commence, et il ne bouge pas ensuite.",
      },
      {
        q: "Qu'est-ce qui fait varier le prix d'un site ?",
        a: "Quatre choses : le nombre de pages, les fonctionnalités (paiement, réservation, espace client), la quantité de contenu à rédiger ou traduire, et le niveau de personnalisation du design. Un site vitrine de cinq pages avec vos textes coûte nettement moins qu'une boutique de deux cents références à créer de zéro.",
      },
      {
        q: "Comment se passe le paiement ?",
        a: "Prix fixe, périmètre fixe, payé par étapes. Vous validez chaque étape avant qu'elle ne soit facturée, et rien n'est dû tant que le résultat ne vous convient pas.",
      },
      {
        q: "Le devis est-il gratuit ?",
        a: "Oui. Le devis et l'échange préalable sont gratuits et sans engagement. Vous repartez avec un prix, un délai et un périmètre écrits, que vous décidiez de travailler avec nous ou non.",
      },
    ],
  },
  {
    id: "delais",
    title: "Délais et déroulement",
    items: [
      {
        q: "Combien de temps pour créer un site web ?",
        a: "Un site vitrine part en ligne en 2 à 4 semaines, une boutique en ligne en 4 à 8. Une application sur mesure dépend de son périmètre. Le délai est écrit dans le devis avant démarrage, pas estimé en cours de route.",
      },
      {
        q: "Comment se déroule un projet ?",
        a: "En cinq étapes : cadrage, arborescence et textes, design, développement, mise en ligne. Vous validez chaque étape avant la suivante, et vous recevez un point d'avancement chaque semaine — vous savez donc toujours où en est le projet.",
      },
      {
        q: "Que devez-vous nous fournir pour commencer ?",
        a: "Votre logo s'il existe, vos textes ou les informations pour les écrire, et vos photos ou produits. Si vous n'avez rien de tout cela, nous pouvons rédiger les textes et organiser la production des visuels — c'est prévu dans le devis.",
      },
    ],
  },
  {
    id: "propriete",
    title: "Propriété et hébergement",
    items: [
      {
        q: "À qui appartient le site une fois livré ?",
        a: "À vous, entièrement. Le code, le contenu, le nom de domaine et tous les accès sont à votre nom. Vous pouvez travailler avec qui vous voulez ensuite, sans nous demander quoi que ce soit.",
      },
      {
        q: "Gérez-vous l'hébergement et le nom de domaine ?",
        a: "Oui. Nous mettons en place un hébergement rapide et sécurisé ainsi que votre domaine, et nous pouvons continuer à les gérer — ou tout vous transmettre si vous préférez gérer vous-même.",
      },
      {
        q: "Puis-je modifier le contenu moi-même ?",
        a: "Oui. Nous mettons en place une interface simple pour modifier vos textes, vos images et vos produits, et nous vous formons à son utilisation avant la mise en ligne. Aucune connaissance technique n'est nécessaire.",
      },
    ],
  },
  {
    id: "seo",
    title: "Référencement et visibilité",
    items: [
      {
        q: "Mon site sera-t-il visible sur Google ?",
        a: "Chaque site est livré prêt pour Google : structure propre, vitesse, balises et plan de site. Cela vous rend éligible. Pour viser les premières positions sur des recherches disputées, il faut un travail de référencement dans la durée, que nous proposons séparément.",
      },
      {
        q: "Combien de temps avant d'apparaître sur Google ?",
        a: "L'indexation prend quelques jours à quelques semaines après la mise en ligne. Se positionner sur des recherches concurrentielles demande plusieurs mois de travail continu : contenu, référencement local et liens. Toute agence qui promet la première place en quelques semaines vous raconte une histoire.",
      },
      {
        q: "Faites-vous le référencement local et Google Maps ?",
        a: "Oui. Nous optimisons votre fiche Google Business, vos pages pour les recherches locales et votre positionnement sur Maps, pour que vous apparaissiez quand quelqu'un cherche votre service près de chez lui.",
      },
    ],
  },
  {
    id: "apres",
    title: "Après la mise en ligne",
    items: [
      {
        q: "Que se passe-t-il après la mise en ligne ?",
        a: "Chaque projet inclut un accompagnement après le lancement : nous corrigeons ce qui relève de notre travail, sans frais. Ensuite, une maintenance optionnelle prend en charge les mises à jour, les sauvegardes et la surveillance du site.",
      },
      {
        q: "Que couvre la maintenance ?",
        a: "Les mises à jour techniques, les sauvegardes régulières, la surveillance de la disponibilité et les petites modifications de contenu. C'est optionnel : un site peut très bien vivre sans, mais un site laissé sans mises à jour finit par présenter des failles.",
      },
    ],
  },
  {
    id: "travail",
    title: "Technologies et façon de travailler",
    items: [
      {
        q: "Quelles technologies utilisez-vous ?",
        a: "Nous construisons principalement avec Next.js et React, qui produisent des sites rapides et durables. Pour les projets qui demandent un back-office simple à tenir, nous utilisons aussi des solutions e-commerce éprouvées. Le choix se fait selon votre besoin, pas selon une préférence d'agence.",
      },
      {
        q: "Travaillez-vous avec des entreprises hors de Casablanca ?",
        a: "Oui. Nous sommes basés à Casablanca et travaillons à distance avec des clients partout au Maroc et à l'international. Les échanges se font en français, en darija ou en anglais, et le suivi passe par des points hebdomadaires et WhatsApp.",
      },
      {
        q: "Dans quels secteurs intervenez-vous ?",
        a: "Commerce et e-commerce, hôtellerie et tourisme, santé, services professionnels, industrie et logistique, éducation, création et tech, secteur public et associations. Chaque secteur a sa page sur le site, avec ce que nous y faisons concrètement.",
      },
      {
        q: "Comment démarrer un projet ?",
        a: "Écrivez-nous sur WhatsApp ou remplissez le formulaire de contact. Nous revenons vers vous pendant les horaires de bureau avec un premier avis, une idée du budget et un délai réaliste — sans engagement de votre part.",
      },
    ],
  },
]);

/** Flat list, for FAQPage structured data. */
export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.items);

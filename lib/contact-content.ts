/**
 * Contact page FAQs.
 *
 * Shared because the page renders them and the layout emits FAQPage structured
 * data from them. They previously lived only in the page while the schema was
 * hand-written separately — the schema ended up in English, listing two
 * questions that were not on the page. Google requires FAQPage markup to match
 * the visible content, so one array now feeds both.
 *
 * REVIEW BEFORE LAUNCH — these are commitments to clients, not marketing copy.
 */
export type ContactFaq = { q: string; a: string };

export const CONTACT_FAQS: ContactFaq[] = [
  {
    q: "Combien de temps faut-il pour créer un site ?",
    a: "Cela dépend de la taille du projet : un site vitrine va plus vite qu'une boutique en ligne ou une application. Vous recevez une date de livraison ferme dans le devis, avant que le travail ne commence.",
  },
  {
    q: "Combien coûte un site web ?",
    a: "Nos formules démarrent à 990 DH. Le prix final dépend du nombre de pages, des fonctionnalités et du contenu à produire. Vous recevez un devis détaillé avant tout engagement.",
  },
  {
    q: "Travaillez-vous avec des clients en dehors du Maroc ?",
    a: "Oui. Nous sommes basés à Casablanca et travaillons à distance avec des clients au Maroc comme à l'étranger. Les échanges se font en français, en anglais ou en arabe.",
  },
  {
    q: "À qui appartient le site à la fin du projet ?",
    a: "À vous. Le site, le nom de domaine et l'hébergement sont mis à votre nom. Vous restez propriétaire de tout, et libre de travailler avec qui vous voulez ensuite.",
  },
  {
    q: "Puis-je modifier le contenu moi-même ?",
    a: "Oui. Nous mettons en place une interface simple pour modifier vos textes et vos images, et nous vous montrons comment l'utiliser avant la mise en ligne.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Nous restons joignables. Les corrections liées à notre travail sont prises en charge, et vous pouvez ajouter un suivi mensuel si vous souhaitez faire évoluer le site.",
  },
  {
    q: "Comment démarrer ?",
    a: "Remplissez le formulaire ci-dessus, ou écrivez-nous directement sur WhatsApp. Nous revenons vers vous avec un premier avis et une idée claire du budget.",
  },
];

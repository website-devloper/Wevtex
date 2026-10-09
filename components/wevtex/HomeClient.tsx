"use client";

/**
 * Wevtex homepage — a lean conversion funnel:
 * Hero → Problem → Services → Work → Proof → Testimonials → Industries → Pricing → FAQ → Contact.
 * Deeper material (process, comparison, add-ons, founder) lives on /services.
 * Primary actions everywhere are WhatsApp and email.
 *
 * One component for both languages: the copy sits in T below, the projects
 * arrive as a prop from the server page (so the portfolio text is not shipped
 * twice), and every internal link goes through useLp().
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProjectBriefForm } from "./ProjectBriefForm";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollRevealText } from "./ScrollRevealText";
import { HeroReviews, GoogleMark } from "./HeroReviews";
import { InkBackdrop } from "./primitives";
import { CITY_LINKS, CITY_LINKS_EN, cityImage } from "@/lib/city-list";
import { StickyCta } from "./StickyCta";
import { useHomeContent } from "./useHomeContent";
import { useLocale, useLp } from "./locale";
import type { Project } from "@/lib/projects-data";
import type { Review, ClientLogo } from "@/lib/content";
import { ServicesBento, SERVICE_ICONS } from "./SharedSections";
/* Contact channels — one definition for the whole site, see lib/site-links.ts */
import { WHATSAPP_URL, serviceWhatsAppUrl, GOOGLE_REVIEWS_URL, PORTFOLIO_URL, PRICING_URL, industryPath } from "@/lib/site-links";

/* Client logo wall. Each file is pre-normalised onto the same 400x170
   transparent canvas, sized by optical weight rather than raw height — a
   square mark is drawn larger than a wide wordmark so the two carry equal
   presence in the row. Originals live in assets/clients-src. */

const WHATSAPP = (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden style={{ marginRight: 2 }}>
    <path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" />
  </svg>
);

/* Maps each industry card (in order) to its detail page at /industries/[slug]. */
const INDUSTRY_LINKS = [
  "ecommerce-retail", "tourism-hospitality", "professional-services", "healthcare-wellness",
  "industry-logistics", "education-elearning", "creative-media-tech", "public-sector-ngos",
];

/* Background photo for each industry card — indexed by the same position as INDUSTRY_LINKS. */
const IC_IMAGES = [
  "/images/industries/ecommerce-retail.webp",          // 0 E-Commerce & Retail
  "/images/industries/tourism-hospitality.webp",             // 1 Tourism & Hospitality
  "/images/industries/professional-services.webp",      // 2 Professional Services
  "/images/industries/healthcare-wellness.webp",        // 3 Healthcare & Wellness
  "/images/industries/industry-logistics.webp",          // 4 Industry & Logistics
  "/images/industries/education-elearning.webp",           // 5 Education & E-Learning
  "/images/industries/creative-media-tech.webp",          // 6 Creative, Media & Tech
  "/images/industries/public-sector-ngos.webp",     // 7 Public Sector & NGOs
];

/* Industry card icons, by the same position. */
const IC_ICONS = [
  <svg key="0" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-4h16l1 4"></path><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"></path><path d="M9 21V13h6v8"></path></svg>,
  <svg key="1" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 012 2v10"></path><path d="M2 17h20"></path><path d="M6 8v3"></path></svg>,
  <svg key="2" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path></svg>,
  <svg key="3" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"></path></svg>,
  <svg key="4" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z"></path></svg>,
  <svg key="5" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
  <svg key="6" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
  <svg key="7" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
];

/* A published review, as the section needs it: the words, who wrote them,
   and the address where anyone can go and read the same thing. */
/** "mars 2026" / "March 2026". Fixed time zone so the server and the browser
    agree: a date rendered from the visitor's zone would flip at midnight and
    trip hydration. */
function fmtMonth(iso: string, locale: "fr" | "en"): string {
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

/** Reviews shown before the fold. The cards sit two abreast, so an even
    number: three would leave a hole in the grid where the fourth belongs. */
const FOLD_AT = 4;

type Quote = {
  /** The entry slug: unique where the author's name is not. */
  id: string;
  q: string;
  name: string;
  role: string;
  /** Initial, shown when there is no photo. */
  a: string;
  avatar?: string;
  rating: number;
  /** True for a Google review, whose source the card's link already names. */
  isGoogle: boolean;
  /** ISO date from the dashboard; formatted at render. */
  date?: string;
  /** The review's own page, when the client gave one. */
  url?: string;
};

const T = {
  fr: {
    /* Claim shown in the hero — keep it accurate. */
    guarantee: "Payé par étapes : vous ne réglez que ce que vous avez validé.",
    eyebrow: "Agence marketing digital · Casablanca · Tout le Maroc",
    h1: "Agence marketing digital\nau Maroc : un site\nqui vous rapporte.",
    h1Em: ["rapporte"],
    heroSub: "Depuis Casablanca, nous créons votre site, votre boutique ou votre application, puis nous vous rendons visible sur Google. Prix affiché, délai écrit, et tout reste à votre nom.",
    quote: "Obtenir mon devis gratuit",
    seeWork: "Voir les sites livrés",
    heroAlt: "Une boutique en ligne affichée sur un ordinateur portable et un téléphone, avec la croissance du trafic et des ventes",
    logosLead: "Ils nous ont confié leur présence en ligne",
    problemA: "Votre site est joli.",
    problemB: "Mais il vous rapporte ",
    problemEm: "combien",
    problemC: " de clients ?",
    problemLines: [
      "Lent sur mobile, absent de Google, impossible à modifier sans rappeler l'agence.",
      "Ou pas de site du tout, et une page Facebook qui ne vous appartient pas.",
      "Nous construisons l'inverse : un site rapide, trouvé, qui fait appeler et acheter.",
    ],
    whyEyebrow: "Ce qui change avec nous",
    whyA: "Les mauvaises surprises, ",
    whyEm: "on les a supprimées.",
    promises: [
      { h: "Pas de facture surprise", p: "Le prix est écrit sur le devis avant le premier jour de travail. Vous payez ce prix-là, même si le projet nous prend plus de temps que prévu." },
      { h: "Votre domaine, jamais en otage", p: "Le site, le nom de domaine et tous les accès sont à votre nom dès la livraison. Vous pouvez changer de prestataire demain, sans rien nous demander." },
      { h: "Quelqu'un qui répond", p: "Vous parlez à ceux qui construisent votre site, sur WhatsApp, pendant les horaires de bureau. Pas de standard, pas de sous-traitant à l'autre bout du monde." },
      { h: "Une date tenue", p: "Une vitrine est en ligne en 2 à 4 semaines, une boutique en 4 à 8. La date est écrite sur le devis, pas improvisée en cours de route." },
    ],
    citiesH2: "Où que vous soyez au Maroc, on s'occupe de votre site.",
    cityAria: (name: string) => `Agence web à ${name}`,
    bentoEyebrow: "Ce que nous faisons pour vous",
    bentoA: "Être trouvé, être choisi, ",
    bentoEm: "être payé.",
    bentoIntro: "Huit prestations, une seule question derrière chacune : combien de clients en plus ce travail va-t-il vous rapporter ?",
    workEyebrow: "Preuves en ligne",
    workA: "Ne nous croyez pas sur parole, ",
    workEm: "cliquez.",
    workLede: "Des sites livrés et en ligne aujourd'hui. Ouvrez un projet, puis visitez le vrai site.",
    openSite: (title: string) => `Ouvrir le site ${title}`,
    metricNote: "Résultats mesurés chez nos clients.",
    visit: "Visiter le site",
    allWork: "Voir tous les projets en ligne",
    stats: [
      { to: 40, dec: 0, suffix: "+", label: "Projets livrés", desc: "Sites, boutiques et applications, en production chez nos clients." },
      { to: 5, dec: 1, suffix: "", label: "Note Google", desc: "Sur nos avis Google, publics et lisibles par tous." },
      { to: 8, dec: 0, suffix: "", label: "Prestations", desc: "Du site au chatbot WhatsApp, sans jongler entre prestataires." },
      { to: 100, dec: 0, suffix: "%", label: "À votre nom", desc: "Domaine, code et accès de chaque site sont remis au client." },
    ],
    nextSite: "Le prochain site de cette liste peut être le vôtre.",
    testiEyebrow: "Avis clients",
    testiA: "Nos avis, ",
    testiEm: "en entier.",
    testiSub:
      "Peu nombreux, et tous vérifiables. Chacun est publié sous le nom de son auteur sur notre fiche Google, et s'ouvre en un clic. Nous préférons en afficher peu de vrais plutôt que beaucoup que nous aurions écrits.",
    rated: (n: number) => `Noté ${n} sur 5`,
    reviewCount: (n: number) => (n > 1 ? `${n} avis Google` : "1 avis Google"),
    readGoogle: "Voir la fiche Google",
    seeOnGoogle: "Lire cet avis sur Google",
    moreReviews: (n: number) => `Voir les ${n} avis`,
    fewerReviews: "Replier",
    checkLabel: "À vérifier aussi",
    checkWork: (n: number) => `Les ${n} sites livrés, en ligne aujourd'hui`,
    checkPrices: "Les prix, publics et en dirhams",
    viaGoogle: "Avis Google",
    viaDirect: "Client vérifié",
    icEyebrow: "Votre secteur",
    icA: "Un riad ne vend pas comme ",
    icEm: "une clinique.",
    icSubA: "Vos clients ne décident pas comme ceux du voisin.",
    icSubB: "Choisissez votre secteur et voyez ce qui marche vraiment chez vous.",
    icCards: [
      { i: 0, label: "Commerce", desc: "Vendre en ligne sans répondre cent fois au même prix sur WhatsApp." },
      { i: 1, label: "Hôtellerie", desc: "Des réservations en direct, sans commission de plateforme." },
      { i: 3, label: "Santé", desc: "Un agenda qui se remplit, même quand le cabinet est fermé." },
      { i: 5, label: "Éducation", desc: "Des inscriptions qui aboutissent en ligne, pas au téléphone." },
      { i: 4, label: "Logistique", desc: "Des demandes de devis B2B qui arrivent toutes seules." },
      { i: 2, label: "Services professionnels", desc: "Un site qui rassure avant le premier rendez-vous." },
      { i: 6, label: "Création & tech", desc: "Un site à la hauteur de votre travail." },
      { i: 7, label: "Public & associations", desc: "Des dons et des bénévoles, en quelques clics." },
    ],
    icAlt: (label: string) => `Site web pour le secteur ${label.toLowerCase()} au Maroc`,
    prevSectors: "Secteurs précédents",
    nextSectors: "Secteurs suivants",
    pricingEyebrow: "Tarifs",
    pricingA: "Le prix, avant même ",
    pricingEm: "de nous appeler.",
    pricingSubA: "Ailleurs, il faut un rendez-vous pour connaître le prix. Ici, il est affiché.",
    pricingSubB: "Dites-nous ce qu'il vous faut : le devis ferme suit, et il ne bouge plus.",
    popular: "Le plus demandé",
    from: "À partir de",
    cur: "DH",
    noHidden: "Aucun frais caché",
    paySatisfied: "Vous ne payez qu'une fois satisfait",
    offGrid: "Un projet hors grille ? On le chiffre",
    faqA: "Ce que vous vous demandez ",
    faqEm: "avant de signer.",
    faqSub: "Prix, délais, propriété du site : les réponses franches aux doutes qu'on nous confie le plus souvent.",
    waH3: "Un doute qui reste ?",
    waEm: "Posez-le sur WhatsApp",
    waP: "Une vraie personne vous répond, en français ou en darija, pendant les horaires de bureau. Sans engagement.",
    waBtn: "Poser ma question",
    privacy: "Vos informations restent confidentielles. Nous ne les partageons avec personne.",
  },
  en: {
    guarantee: "Paid in stages: you only pay for what you have approved.",
    eyebrow: "Digital marketing agency · Casablanca · Morocco",
    h1: "Web design & digital\nmarketing in Morocco:\na site that sells.",
    h1Em: ["sells"],
    heroSub: "From Casablanca, we build your website, online store or app, then get you found on Google. Price shown upfront, deadline in writing, and everything stays in your name.",
    quote: "Get my free quote",
    seeWork: "See delivered websites",
    heroAlt: "An online store shown on a laptop and a phone, with traffic and sales growing",
    logosLead: "They trusted us with their online presence",
    problemA: "Your website looks good.",
    problemB: "But how many ",
    problemEm: "customers",
    problemC: " does it bring you?",
    problemLines: [
      "Slow on mobile, missing from Google, impossible to change without calling the agency back.",
      "Or no website at all, just a Facebook page you don't own.",
      "We build the opposite: a fast website that gets found and makes people call and buy.",
    ],
    whyEyebrow: "What changes with us",
    whyA: "Bad surprises? ",
    whyEm: "We removed them.",
    promises: [
      { h: "No surprise invoice", p: "The price is written on the quote before the first day of work. You pay that price, even if the project takes us longer than planned." },
      { h: "Your domain, never held hostage", p: "The website, the domain name and every login are in your name from delivery. You can change provider tomorrow without asking us for anything." },
      { h: "Someone who answers", p: "You talk to the people building your website, on WhatsApp, during office hours. No switchboard, no subcontractor on the other side of the world." },
      { h: "A deadline that holds", p: "A business website goes live in 2 to 4 weeks, an online store in 4 to 8. The date is written on the quote, not improvised along the way." },
    ],
    citiesH2: "Wherever you are in Morocco, we take care of your website.",
    cityAria: (name: string) => `Web design agency in ${name}`,
    bentoEyebrow: "What we do for you",
    bentoA: "Get found, get chosen, ",
    bentoEm: "get paid.",
    bentoIntro: "Eight services, one question behind each: how many more customers will this work bring you?",
    workEyebrow: "Live proof",
    workA: "Don't take our word for it, ",
    workEm: "click.",
    workLede: "Websites delivered and live today. Open a project, then visit the real site.",
    openSite: (title: string) => `Open the website of ${title}`,
    metricNote: "Results measured at our clients.",
    visit: "Visit the website",
    allWork: "See all live projects",
    stats: [
      { to: 40, dec: 0, suffix: "+", label: "Projects delivered", desc: "Websites, online stores and apps, live with our clients." },
      { to: 5, dec: 1, suffix: "", label: "Google rating", desc: "From our Google reviews, public and readable by anyone." },
      { to: 8, dec: 0, suffix: "", label: "Services", desc: "From websites to WhatsApp chatbots, without juggling providers." },
      { to: 100, dec: 0, suffix: "%", label: "In your name", desc: "Domain, code and logins of every site are handed to the client." },
    ],
    nextSite: "The next website on this list could be yours.",
    testiEyebrow: "Client reviews",
    testiA: "Our reviews, ",
    testiEm: "in full.",
    testiSub:
      "Few of them, and every one verifiable. Each is published under its author's name on our Google profile, one click away. We would rather show a handful of real ones than a wall we wrote ourselves.",
    rated: (n: number) => `Rated ${n} out of 5`,
    reviewCount: (n: number) => (n > 1 ? `${n} Google reviews` : "1 Google review"),
    readGoogle: "See the Google profile",
    seeOnGoogle: "Read this review on Google",
    moreReviews: (n: number) => `See all ${n} reviews`,
    fewerReviews: "Show fewer",
    checkLabel: "Check these too",
    checkWork: (n: number) => `The ${n} websites we delivered, live today`,
    checkPrices: "The prices, public and in dirhams",
    viaGoogle: "Google review",
    viaDirect: "Verified client",
    icEyebrow: "Your industry",
    icA: "A riad doesn't sell like ",
    icEm: "a clinic.",
    icSubA: "Your customers don't decide like your neighbor's.",
    icSubB: "Choose your industry and see what really works for you.",
    icCards: [
      { i: 0, label: "Retail", desc: "Sell online without answering the same price question a hundred times on WhatsApp." },
      { i: 1, label: "Hospitality", desc: "Direct bookings, with no platform commission." },
      { i: 3, label: "Health", desc: "A calendar that fills up, even when the practice is closed." },
      { i: 5, label: "Education", desc: "Enrollments that go through online, not over the phone." },
      { i: 4, label: "Logistics", desc: "B2B quote requests that come in on their own." },
      { i: 2, label: "Professional services", desc: "A website that reassures before the first meeting." },
      { i: 6, label: "Creative & tech", desc: "A website that lives up to your work." },
      { i: 7, label: "Public sector & NGOs", desc: "Donations and volunteers in a few clicks." },
    ],
    icAlt: (label: string) => `Website for the ${label.toLowerCase()} industry in Morocco`,
    prevSectors: "Previous industries",
    nextSectors: "Next industries",
    pricingEyebrow: "Pricing",
    pricingA: "The price, before you ",
    pricingEm: "even call us.",
    pricingSubA: "Elsewhere you need a meeting to learn the price. Here, it's on the page.",
    pricingSubB: "Tell us what you need: the firm quote follows, and it doesn't move.",
    popular: "Most popular",
    from: "From",
    cur: "MAD",
    noHidden: "No hidden fees",
    paySatisfied: "You only pay once you're satisfied",
    offGrid: "A project off the grid? We'll price it",
    faqA: "What you're wondering ",
    faqEm: "before signing.",
    faqSub: "Price, timelines, site ownership: straight answers to the doubts people share with us most often.",
    waH3: "Still unsure about something?",
    waEm: "Ask on WhatsApp",
    waP: "A real person answers, in English, French or Darija, during office hours. No commitment.",
    waBtn: "Ask my question",
    privacy: "Your details stay confidential. We never share them with anyone.",
  },
};

/* WORK — one accordion, one project open at a time.
   Every entry carries its own detail panel, so the list stays a tight index
   at rest and becomes an editorial row on demand. Order matters: index 0 is
   open on load, so lead with the strongest piece.
 */
/* The six the client chose for the homepage, by the `order` field. Every
   project appears on /portfolio. Fields are mapped rather than duplicated so
   there is one place to correct a client name, a URL or a figure. */
type WorkItem = {
  slug: string;
  title: string;
  cat: string;
  year: string;
  url: string;
  liveUrl: string;
  outcome: string;
  stack: string[];
  metric: string;
  metricLabel: string;
  /** Fallback gradient, kept for any entry without a screenshot yet. */
  shot: string;
  /** The capture at /images/work/<French slug>/<French slug>.webp. */
  screenshot: string;
  capture?: boolean;
};

export function HomeClient({
  projects,
  projectCount,
  reviews,
  clients,
}: {
  /** The six shown in the work section. */
  projects: Project[];
  /** Every réalisation, which is what the proof strip counts. */
  projectCount: number;
  reviews: Review[];
  clients: ClientLogo[];
}) {
  const locale = useLocale();
  const t = T[locale];
  const lp = useLp();
  const { SERVICES, FAQS } = useHomeContent();
  /* Real reviews only. When none are published the section does not render:
     an empty band is better than invented praise. */
  const TPOOL: Quote[] = reviews.map((r) => ({
    id: r.id,
    q: r.text,
    name: r.author,
    role: r.source === "google" ? t.viaGoogle : t.viaDirect,
    isGoogle: r.source === "google",
    a: r.author.trim().slice(0, 1).toUpperCase(),
    avatar: r.avatar,
    rating: r.rating,
    date: r.date,
    url: r.sourceUrl,
  }));
  /* One decimal, as Google shows it. */
  const avgRating = TPOOL.length
    ? TPOOL.reduce((sum, q) => sum + q.rating, 0) / TPOOL.length
    : 0;

  /* Reviews past the third are folded away: they are worth reading, but not
     at the cost of pushing the rest of the page down for every visitor. */
  const [allReviews, setAllReviews] = useState(false);
  const shownReviews = allReviews ? TPOOL : TPOOL.slice(0, FOLD_AT);

  const cities =
    locale === "en"
      ? CITY_LINKS_EN.map((c) => ({ slug: c.slug, name: c.name, href: `/en/${c.slug}`, img: cityImage(c) }))
      : CITY_LINKS.map((c) => ({ slug: c.slug, name: c.name, href: `/${c.slug}`, img: cityImage(c) }));

  const WORK: WorkItem[] = projects.slice(0, 6).map((p, i) => ({
    slug: p.slug,
    title: p.title,
    cat: p.category,
    year: String(p.year),
    url: p.clientUrl,
    liveUrl: p.liveUrl,
    outcome: p.description,
    stack: p.stack,
    metric: p.metricValue,
    metricLabel: p.metricLabel,
    shot: `g${i % 5}`,
    screenshot: p.screenshot,
    capture: true,
  }));

  /* Work accordion — a single open index, so opening one closes the rest.
     Index 0 is open on load: a wall of closed rows reads as an empty section. */
  const [openWork, setOpenWork] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: Array<() => void> = [];

    /* Scroll reveal */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            const cta = e.target.closest(".cta");
            if (cta) cta.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    root.querySelectorAll(".reveal, .reveal-words, .srt-scroll").forEach((r) => io.observe(r));
    cleanups.push(() => io.disconnect());

    /* Testimonials carousel */
    const track = root.querySelector<HTMLElement>("#tTrack");
    if (track) {
      const slides = track.children;
      const total = slides.length;
      let current = 0;
      const counter = root.querySelector<HTMLElement>("#tCurrent");
      const totalEl = root.querySelector<HTMLElement>("#tTotal");
      const progress = root.querySelector<HTMLElement>("#tProgress");
      const prev = root.querySelector<HTMLButtonElement>("#tPrev");
      const next = root.querySelector<HTMLButtonElement>("#tNext");
      if (totalEl) totalEl.textContent = String(total).padStart(2, "0");
      const getVisible = () => (window.innerWidth < 880 ? 1 : 2);
      const render = () => {
        const slideWidth = (slides[0] as HTMLElement).getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 24;
        track.style.transform = `translateX(${-current * (slideWidth + gap)}px)`;
        if (counter) counter.textContent = String(current + 1).padStart(2, "0");
        if (progress) progress.style.width = `${((current + 1) / total) * 100}%`;
        if (prev) prev.disabled = current === 0;
        if (next) next.disabled = current >= total - getVisible();
      };
      const go = (d: number) => {
        const max = total - getVisible();
        current = Math.max(0, Math.min(max, current + d));
        render();
      };
      const onPrev = () => go(-1);
      const onNext = () => go(1);
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      window.addEventListener("resize", render);

      let auto = window.setInterval(() => {
        const max = total - getVisible();
        current = current >= max ? 0 : current + 1;
        render();
      }, 6000);
      const car = track.closest(".t-carousel");
      const onCarEnter = () => clearInterval(auto);
      const onCarLeave = () => {
        clearInterval(auto);
        auto = window.setInterval(() => {
          const max = total - getVisible();
          current = current >= max ? 0 : current + 1;
          render();
        }, 6000);
      };
      car?.addEventListener("mouseenter", onCarEnter);
      car?.addEventListener("mouseleave", onCarLeave);

      let startX = 0, dx = 0, dragging = false;
      const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; dragging = true; };
      const onTouchMove = (e: TouchEvent) => { if (dragging) dx = e.touches[0].clientX - startX; };
      const onTouchEnd = () => {
        if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
        dragging = false; dx = 0;
      };
      track.addEventListener("touchstart", onTouchStart, { passive: true });
      track.addEventListener("touchmove", onTouchMove, { passive: true });
      track.addEventListener("touchend", onTouchEnd);

      render();
      cleanups.push(() => {
        clearInterval(auto);
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        window.removeEventListener("resize", render);
        car?.removeEventListener("mouseenter", onCarEnter);
        car?.removeEventListener("mouseleave", onCarLeave);
        track.removeEventListener("touchstart", onTouchStart);
        track.removeEventListener("touchmove", onTouchMove);
        track.removeEventListener("touchend", onTouchEnd);
      });
    }

    /* Smooth anchors */
    const anchors = root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const anchorHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];
    anchors.forEach((a) => {
      const handler = (e: Event) => {
        const id = a.getAttribute("href") || "";
        if (id.length > 1) {
          const el = document.querySelector(id);
          if (el) {
            e.preventDefault();
            window.scrollTo({
              top: el.getBoundingClientRect().top + window.scrollY - 80,
              behavior: "smooth",
            });
          }
        }
      };
      a.addEventListener("click", handler);
      anchorHandlers.push([a, handler]);
    });
    cleanups.push(() => anchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h)));

    /* Industries carousel — sync dots with scroll position + make them clickable */
    const icTrack = root.querySelector<HTMLElement>(".industries-carousel .ic-track");
    const icDots = Array.from(root.querySelectorAll<HTMLElement>(".industries-carousel .ic-dots span"));
    if (icTrack && icDots.length) {
      const syncDots = () => {
        const max = icTrack.scrollWidth - icTrack.clientWidth;
        const frac = max > 0 ? icTrack.scrollLeft / max : 0;
        const active = Math.round(frac * (icDots.length - 1));
        icDots.forEach((d, i) => d.classList.toggle("on", i === active));
      };
      icTrack.addEventListener("scroll", syncDots, { passive: true });
      window.addEventListener("resize", syncDots);
      icDots.forEach((d, i) => {
        const onClick = () => {
          const max = icTrack.scrollWidth - icTrack.clientWidth;
          icTrack.scrollTo({ left: (i / (icDots.length - 1)) * max, behavior: "smooth" });
        };
        d.addEventListener("click", onClick);
        cleanups.push(() => d.removeEventListener("click", onClick));
      });
      syncDots();
      cleanups.push(() => {
        icTrack.removeEventListener("scroll", syncDots);
        window.removeEventListener("resize", syncDots);
      });

      /* Auto-advance (pauses on hover, loops back at the end) */
      const carousel = icTrack.closest(".industries-carousel");
      const advance = () => {
        const max = icTrack.scrollWidth - icTrack.clientWidth;
        const first = icTrack.firstElementChild as HTMLElement | null;
        const step = first ? first.getBoundingClientRect().width + 18 : 260;
        if (icTrack.scrollLeft >= max - 6) icTrack.scrollTo({ left: 0, behavior: "smooth" });
        else icTrack.scrollBy({ left: step, behavior: "smooth" });
      };
      let auto = window.setInterval(advance, 3500);
      const stopAuto = () => clearInterval(auto);
      const startAuto = () => { clearInterval(auto); auto = window.setInterval(advance, 3500); };
      carousel?.addEventListener("mouseenter", stopAuto);
      carousel?.addEventListener("mouseleave", startAuto);
      cleanups.push(() => {
        clearInterval(auto);
        carousel?.removeEventListener("mouseenter", stopAuto);
        carousel?.removeEventListener("mouseleave", startAuto);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* Count-up animation for the stats band when it scrolls into view. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nums = Array.from(root.querySelectorAll<HTMLElement>(".sb-num"));
    if (!nums.length) return;

    const animate = (el: HTMLElement) => {
      const to = parseFloat(el.dataset.to || "0");
      // Markup ships the final value as the no-JS fallback, so the animation
      // resets to zero before running rather than counting up from the total.
      const dec = parseInt(el.dataset.dec || "0", 10);
      const suffix = el.dataset.suffix || "";
      const dur = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const k = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - k, 3); // ease-out cubic
        el.textContent = (to * eased).toFixed(dec) + suffix;
        if (k < 1) requestAnimationFrame(tick);
        else el.textContent = to.toFixed(dec) + suffix;
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className="wevtex mode-light" ref={rootRef}>
      {/* ===================== HEADER ===================== */}
      <SiteHeader />

      <main id="main">

      {/* ===================== HERO (mockup 1 — split) ===================== */}
      <section className="theme-cream hero hero-split" id="hero">
        <div className="hero-motif" aria-hidden></div>
        <div className="hero-arc" aria-hidden></div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="eyebrow line-eyebrow" style={{ marginBottom: 18 }}>
                {t.eyebrow}
              </span>
              <ScrollRevealText
                as="h1"
                mode="load"
                em={t.h1Em}
                emClassName="hl-line"
                text={t.h1}
              />
              <p className="hero-sub">
                {t.heroSub}
              </p>
              <div className="hero-ctas">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {t.quote}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href={lp(PORTFOLIO_URL)} className="btn btn-outline">
                  {t.seeWork}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>

              <HeroReviews count={TPOOL.length} rating={avgRating} />

              {/* Risk reversal: answers the question every visitor has before
                  they will consider getting in touch. */}
              <ul className="hero-reassure">
                <li>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                  {t.guarantee}
                </li>
              </ul>
            </div>

            <div className="hero-visual hero-form-slot">
              {/* Conversion: the full project brief — the same fields and the
                  same backend as /contact — where the eye lands after the headline. */}
              <div className="hero-form">
                <ProjectBriefForm />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust bar: its own white band under the hero, so the marks are read
          on their own ground rather than inside the deep-green screen. */}
      <section className="logos-band">
        <div className="container">
          <div className="hero-logos reveal">
            <p className="ls-lead">{t.logosLead}</p>
            <ul className="ls-row">
              {clients.map((c) => (
                <li key={c.name}>
                  <Image src={c.logo} alt={c.name} width={400} height={170} sizes="136px" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM (mockup 2 — dark band) ===================== */}
      <section className="problem-band" id="problem">
        <div className="problem-motif" aria-hidden></div>
        <div className="container">
          <div className="problem-inner">
            <h2 className="problem-h">
              {t.problemA}<br />
              {t.problemB}<em className="hl-em hl-underline">{t.problemEm}</em>{t.problemC}
            </h2>
            <p className="problem-sub">
              {t.problemLines[0]}{" "}<br />
              {t.problemLines[1]}{" "}<br />
              {t.problemLines[2]}
            </p>

          </div>
        </div>
      </section>

      {/* ===================== POURQUOI WEVTEX =====================
          Four promises, each written as a contrast: the reader can picture the
          wrong version, which is what makes the right one land. */}
      <section className="theme-paper" style={{ padding: "clamp(72px, 11vh, 120px) 0" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow line-eyebrow">{t.whyEyebrow}</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              {t.whyA}<em className="hl-line">{t.whyEm}</em>
            </h2>
          </div>

          <div className="ind-outcomes reveal" style={{ marginTop: "clamp(38px, 6vh, 58px)" }}>
            {t.promises.map((c) => (
              <div className="ind-outcome" key={c.h}>
                <h3>{c.h}</h3>
                <span className="ind-outcome-rule" aria-hidden></span>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VILLES =====================
          Its own band under the statement. These are the only homepage links
          into the city landing pages, which are the strongest local-search
          entry points on the site. */}
      <section className="cities-band">
        <div className="container">
          <h2 className="cities-band-h">
            {t.citiesH2}
          </h2>
          <ul className="pb-cities reveal">
            {cities.map((c) => (
              <li key={c.slug}>
                <a href={c.href} aria-label={t.cityAria(c.name)}>
                  <span
                    className="pb-city-img"
                    style={{ backgroundImage: `url(${c.img})` }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== SERVICES (mockup 3 — bento) =====================
          Shared with /services so both surfaces read the same SERVICES list —
          a service added or re-linked in homeContent.ts moves on every page. */}
      <ServicesBento
        eyebrow={t.bentoEyebrow}
        heading={<>{t.bentoA}<em className="hl-line">{t.bentoEm}</em></>}
        intro={t.bentoIntro}
      />

      {/* ===================== WORK =====================
          The rest of the page is white, ink and one sliver of lime so that
          the screenshots here are the only rich colour on it. The section's
          job is to frame them and get out of the way.

          One accordion, one project open at a time. Clicking a row expands
          it in place rather than navigating away — the visitor never loses
          the page, and the list stays a tight index between openings. */}
      <section className="theme-cream-2 work" id="work">
        <div className="container">

          {/* Same head components as every other section — eyebrow, h-section,
              ic-sub. The section reads quiet because of the space around it,
              not because the heading was removed. */}
          <div className="wk-head reveal">
            <span className="eyebrow line-eyebrow">{t.workEyebrow}</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              {t.workA}<em className="hl-line">{t.workEm}</em>
            </h2>
            <p className="ic-sub wk-lede">
              {t.workLede}
            </p>
          </div>

          <ol className="wk-list reveal">
            {WORK.map((p, i) => {
              const open = openWork === i;
              return (
                <li key={p.slug} className={open ? "wk-item is-open" : "wk-item"}>
                  <h3 className="wk-row-h">
                    <button
                      type="button"
                      className="wk-row"
                      aria-expanded={open}
                      aria-controls={`wk-panel-${p.slug}`}
                      id={`wk-row-${p.slug}`}
                      /* Clicking the open row closes it, so the section can rest fully collapsed. */
                      onClick={() => setOpenWork(open ? -1 : i)}
                    >
                      <span className="wk-ix-n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="wk-ix-title">{p.title}</span>
                      <span className="wk-ix-cat">{p.cat}</span>
                      <span className="wk-ix-year">{p.year}</span>
                      <span className="wk-toggle" aria-hidden>
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14" /><path className="wk-toggle-v" d="M12 5v14" /></svg>
                      </span>
                    </button>
                  </h3>

                  {/* grid-template-rows 0fr → 1fr collapses to the panel's real
                      height, so no max-height guess to get wrong. */}
                  <div
                    className="wk-panel"
                    id={`wk-panel-${p.slug}`}
                    role="region"
                    aria-labelledby={`wk-row-${p.slug}`}
                    hidden={!open}
                  >
                    <div className="wk-panel-in">
                      <div className="wk-panel-grid">
                        {/* The screenshot is the link — clicking a picture of a
                            site to open that site is what people already try. */}
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t.openSite(p.title)}
                          className={p.capture ? "wk-shot" : `wk-shot ${p.shot}`}
                          style={p.capture ? { backgroundImage: `url(${p.screenshot})` } : undefined}
                        ></a>

                        <div className="wk-body">
                          <p className="wk-outcome">{p.outcome}</p>

                          <ul className="wk-stack">
                            {p.stack.map((s) => <li key={s}>{s}</li>)}
                          </ul>

                          <div className="wk-metric">
                            <span className="wk-metric-n">{p.metric}</span>
                            <span className="wk-metric-l">{p.metricLabel}</span>
                          </div>
                          <p className="wk-metric-note">{t.metricNote}</p>

                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="wk-view">
                            {t.visit}
                            <span className="wk-view-arrow" aria-hidden>
                              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="wk-all reveal">
            <a href={lp(PORTFOLIO_URL)} className="btn btn-outline">
              {t.allWork}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

        </div>
      </section>

      {/* ===================== STATS (mockup 6 — clay band) ===================== */}
      {/* Every figure is checkable: projects delivered is confirmed, the
          rating is the public Google profile, eight is the service list, and
          ownership is the promise made on every page. No unverified claim. */}
      <section className="stats-band-v2">
        <InkBackdrop variant="data" />
        <div className="container">
          <div className="sb-grid reveal">
            {t.stats.map((s) => (
              <div className="sb-item" key={s.label}>
                {/* The final value is rendered here, not a zero: if the count-up
                    never runs — no JS, reduced data, an observer that never
                    fires — the band still shows real numbers. */}
                <div className="sb-num" data-to={s.to} data-dec={s.dec} data-suffix={s.suffix}>
                  {s.to.toFixed(s.dec) + s.suffix}
                </div>
                <div className="sb-label">{s.label}</div>
                <span className="sb-rule"></span>
                <p className="sb-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA beside the proof — the reference puts one right after the evidence. */}
      <section className="inline-cta inline-cta-ink">
        <InkBackdrop variant="data" />
        <div className="container">
          <div className="ict-inner reveal">
            <p className="ict-text">{t.nextSite}</p>
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              {t.quote}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== AVIS CLIENTS =====================
          Two real reviews will never fill a three-column quote grid, and a
          grid with an empty column reads as a missing tooth. So the section
          stops imitating a wall of praise: the position on the left, the
          reviews quoted whole on the right, each one a click from the page it
          was written on. The count is stated rather than hidden, because a
          number you volunteer is worth more than one a visitor has to dig for.

          Fed by the Avis clients collection in the dashboard. No reviews
          published means no section: an invented quote is worse than none. */}
      {TPOOL.length > 0 && (
      <section className="theme-paper proof" id="testimonials">
        <div className="container">
          <div className="proof-grid">
            <div className="proof-rail reveal">
              <span className="eyebrow line-eyebrow">{t.testiEyebrow}</span>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                {t.testiA}<em className="hl-line">{t.testiEm}</em>
              </h2>
              <p className="ic-sub proof-lede">{t.testiSub}</p>

              <a
                className="proof-google"
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener nofollow"
              >
                <span className="pg-top">
                  <GoogleMark size={22} />
                  <span className="pg-score">{locale === "fr" ? "5,0" : "5.0"}</span>
                  <span className="rv-stars rv-stars-gold" aria-hidden>★★★★★</span>
                </span>
                <span className="pg-count">{t.reviewCount(TPOOL.length)}</span>
                <span className="pg-link">
                  {t.readGoogle}
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </a>
            </div>

            {/* The fold lives in an attribute, never in className: useReveal
                adds .in to every .reveal imperatively and then stops watching,
                so re-rendering a different class string here would strip it
                and drop the whole list back to opacity 0, for good. */}
            <ul className="proof-list reveal" data-folded={allReviews || TPOOL.length <= FOLD_AT ? undefined : "true"}>
              {shownReviews.map((q) => (
                <li className="proof-item" key={q.id}>
                  <div className="pi-head">
                    {q.avatar ? (
                      <Image className="pi-avatar pi-photo" src={q.avatar} alt="" width={96} height={96} />
                    ) : (
                      <span className="pi-avatar" aria-hidden>{q.a}</span>
                    )}
                    <span className="pi-id">
                      <span className="pi-name">{q.name}</span>
                      <span className="pi-meta">
                        {q.isGoogle ? null : <>{q.role}{q.date ? <span aria-hidden>·</span> : null}</>}
                        {q.date ? fmtMonth(q.date, locale) : null}
                      </span>
                    </span>
                    <span className="pi-stars" aria-label={t.rated(q.rating)}>
                      {Array.from({ length: q.rating }, (_, n) => n).map((n) => (
                        <svg key={n} viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
                          <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" />
                        </svg>
                      ))}
                    </span>
                  </div>

                  {/* Quoted whole, exactly as written: the heading promises
                      "en entier", so no clamping and no ellipsis. */}
                  <blockquote className="pi-text">{q.q}</blockquote>

                  <a
                    className="pi-link"
                    href={q.url || GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    <GoogleMark size={14} />
                    {t.seeOnGoogle}
                  </a>
                </li>
              ))}

              {TPOOL.length > FOLD_AT && (
                <li className="proof-more">
                  <button type="button" className="proof-more-btn" onClick={() => setAllReviews((v) => !v)}>
                    {allReviews ? t.fewerReviews : t.moreReviews(TPOOL.length)}
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d={allReviews ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                    </svg>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* The reviews are one kind of evidence. These are the others, and
              unlike an opinion they can be opened and checked. */}
          <div className="proof-check reveal">
            <span className="pc-label">{t.checkLabel}</span>
            <a className="pc-link" href={lp(PORTFOLIO_URL)}>{t.checkWork(projectCount)}</a>
            <a className="pc-link" href={lp(PRICING_URL)}>{t.checkPrices}</a>
          </div>
        </div>
      </section>
      )}

      {/* ===================== INDUSTRIES (mockup 4 — carousel) ===================== */}
      <section className="theme-cream industries-carousel" id="industries">
        <div className="container">
          <div className="ic-head reveal">
            <span className="eyebrow line-eyebrow-center">{t.icEyebrow}</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              {t.icA}<em className="hl-line">{t.icEm}</em>
            </h2>
            <p className="ic-sub">
              {t.icSubA}<br />
              {t.icSubB}
            </p>
          </div>

          <div className="ic-track reveal">
            {t.icCards.map((it, idx) => (
              <a key={it.i} href={lp(industryPath(INDUSTRY_LINKS[it.i]))} className={`ic-card g${idx % 5}`}>
                <Image
                  src={IC_IMAGES[it.i]}
                  alt={t.icAlt(it.label)}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 80vw, 25vw"
                />
                <span className="ic-overlay" aria-hidden></span>
                <span className="ic-card-inner">
                  <span className="ic-badge">{IC_ICONS[it.i]}</span>
                  <span className="ic-card-text">
                    <span className="ic-card-h">{it.label}</span>
                    <span className="ic-card-p">{it.desc}</span>
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="ic-controls reveal">
            <button className="ic-arrow" aria-label={t.prevSectors} onClick={(e) => { const tr = e.currentTarget.closest(".industries-carousel")?.querySelector(".ic-track") as HTMLElement | null; tr?.scrollBy({ left: -340, behavior: "smooth" }); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="ic-dots" aria-hidden>
              <span className="on"></span><span></span><span></span><span></span><span></span>
            </div>
            <button className="ic-arrow" aria-label={t.nextSectors} onClick={(e) => { const tr = e.currentTarget.closest(".industries-carousel")?.querySelector(".ic-track") as HTMLElement | null; tr?.scrollBy({ left: 340, behavior: "smooth" }); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== FAQ (mockup 8 — FAQ + WhatsApp card) ===================== */}
      <section className="theme-paper faq-split" id="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-left reveal">
              <span className="eyebrow line-eyebrow">FAQ</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>{t.faqA}<em className="hl-line">{t.faqEm}</em></h2>
              <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
                {t.faqSub}
              </p>
              <div className="faq-list-v2">
                {FAQS.map((f, i) => (
                  <details className="faq-item-v2" key={i}>
                    <summary>
                      <span className="faq-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                      <span className="faq-q">{f.q}</span>
                      <span className="faq-plus" aria-hidden></span>
                    </summary>
                    <div className="faq-body">
                      <p>{f.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="faq-right reveal">
              <div className="wa-card">
                <span className="wa-card-motif" aria-hidden></span>
                <span className="wa-icon">{WHATSAPP}</span>
                <h3>{t.waH3}<br /><em>{t.waEm}</em></h3>
                <span className="wa-rule"></span>
                <p>{t.waP}</p>
                <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                  {WHATSAPP}
                  {t.waBtn}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
              <div className="wa-privacy">
                <span className="wa-lock">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                </span>
                {t.privacy}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT =====================
          Ink ground with one white slab, the same pairing used at pricing —
          the two points on the page where a visitor decides something.
          Deliberately spare: one line of copy, two channels, the form.
          The steps, trust row and card header were cut — the page has
          already made the argument by the time anyone scrolls here. */}
      {/* ===================== FOOTER ===================== */}
      </main>

      <SiteFooter />

      {/* Mobile-only: keeps the ask reachable through the whole scroll. */}
      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

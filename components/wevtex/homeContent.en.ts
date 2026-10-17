/**
 * English twin of homeContent.ts: the eight services and the home FAQ, same
 * slugs, same images, same prices. The header, footer, home page and service
 * cards read whichever list matches the page's language (useHomeContent).
 *
 * Written for English searches, not translated word for word: the names are
 * the terms people type ("web design", "SEO services", "Google & Meta ads").
 */

import { priceOf, monthlyOf, formatAmount, fillPricesDeep } from "@/lib/pricing";
import type { Service } from "./homeContent";

const en = (v: string | undefined) => formatAmount(v, "en") || undefined;

/** "Puis 390 DH par mois", or nothing when no monthly fee is published. */
function monthlyNote(amount: string | undefined, before: string, after: string): string | undefined {
  return amount ? `${before} ${amount} ${after}` : undefined;
}

export const FAQS_EN = fillPricesDeep([
  { q: "How soon will my website be live?", a: "A business website goes live in 2 to 4 weeks, an online store in 4 to 8. The date is written on the quote before work starts, and it is the date we commit to." },
  { q: "Do I have to pay everything upfront?", a: "No. The price is fixed and paid in stages: you approve each stage before it is invoiced. Nothing is due until you are happy with the result." },
  { q: "Will my customers find me on Google?", a: "Every site goes live ready for Google: speed, structure and tags. To get ahead of competitors on contested searches, our SEO and Google Maps service takes over." },
  { q: "What if I want to change agency one day?", a: "You leave with everything. The code, the content, the domain name and the logins are in your name from delivery. We keep no keys." },
  { q: "Do you handle hosting and the domain name?", a: "Yes. We set up fast, secure hosting and your domain name, then manage both for you. If you prefer, we simply hand you the keys." },
  { q: "What happens after launch?", a: "You are not left on your own. Post-launch support is included in every project, then optional maintenance takes care of updates, backups and monitoring." },
  { q: "What does a digital marketing agency do, and what does Wevtex do?", a: "A digital marketing agency helps a business get found and chosen online. Wevtex is a web design and digital marketing agency in Morocco, based in Casablanca: websites and mobile apps, SEO, Google and Meta ads, and automation, in one team." },
  { q: "How much does a digital marketing agency cost in Morocco?", a: "At Wevtex every service has a published starting price: a business website starts at MAD {{prix:website-creation/Vitrine}}, SEO at MAD {{prix:seo/Essentiel}} a month and Google or Meta ads management at MAD {{prix:ads/Lancement}} a month. Every project gets a firm quote." },
  { q: "How do I choose the best web design agency in Morocco?", a: "The best web design agency in Morocco for you is the one that shows live sites you can test, gives a line-by-line quote and leaves you the owner of the site, the code and the logins. Be wary of anyone who guarantees first place on Google." },
]);

export const SERVICES_EN: Service[] = [
  {
    slug: "website-creation",
    image: "/images/services/website-creation.webp",
    cta: "Launch my website",
    name: "Web design & development",
    short: "A site that makes the phone ring",
    desc: "A fast website, found on Google, that turns visits into calls. And it is in your name.",
    price: en(priceOf("website-creation", "Vitrine")),
    note: "Basic package, delivered in 5 to 7 days",
    featured: true,
    features: [
      "Up to 5 pages, responsive",
      "Copywriting and layout",
      "Basic SEO set up",
      "Contact form and WhatsApp",
      "1 month of support",
    ],
  },
  {
    slug: "seo",
    image: "/images/services/seo.webp",
    cta: "Improve my rankings",
    name: "SEO services",
    short: "Show up when customers search",
    desc: "Your customers are already searching on Google. We make sure they land on you.",
    price: en(priceOf("seo", "Essentiel")),
    note: "Per month · 3-month minimum",
    features: [
      "Technical audit and fixes",
      "Keyword and content strategy",
      "On-page optimization",
      "Link building",
      "Monthly ranking report",
    ],
  },
  {
    slug: "local-seo",
    image: "/images/services/local-seo.webp",
    cta: "Get me on Google Maps",
    name: "Google Maps & local SEO",
    short: "Calls from customers nearby",
    desc: "When someone searches “near me”, your listing comes up, with your reviews and your number.",
    price: en(priceOf("local-seo", "Mise en place")),
    note: "One-time, within 2 weeks",
    features: [
      "Google Business Profile setup and optimization",
      "Ranking on Google Maps",
      "Local directories and citations",
      "Customer review strategy",
      "Monthly local report",
    ],
  },
  {
    slug: "ads",
    image: "/images/services/ads.webp",
    cta: "Launch my campaign",
    name: "Google & Meta ads",
    short: "Customers from the first week",
    desc: "Google and Meta campaigns run on cost per customer: you know what every dirham brings back.",
    price: en(priceOf("ads", "Lancement")),
    note: "Per day · ad spend not included",
    features: [
      "Google, Facebook and Instagram",
      "Audience and keyword targeting",
      "Ad visuals and copy",
      "Dedicated landing page",
      "Conversion tracking and reporting",
    ],
  },
  {
    slug: "mobile-apps",
    image: "/images/services/mobile-apps.webp",
    cta: "Scope my app",
    name: "Mobile app development",
    short: "Your service on their phone",
    desc: "An icon on your customers' home screen, on iOS and Android, so they come back on their own.",
    price: en(priceOf("mobile-apps", "Essentielle")),
    note: "Scope defined per project",
    features: [
      "iOS and Android from one codebase",
      "UI/UX design included",
      "Backend and API integration",
      "App Store and Google Play publishing handled",
      "3 months of support",
    ],
  },
  {
    slug: "desktop-apps",
    image: "/images/services/desktop-apps.webp",
    cta: "Scope my software",
    name: "Custom software",
    short: "No more patched-up spreadsheets",
    desc: "Software that follows the way you work, runs offline and has no per-seat license.",
    price: en(priceOf("desktop-apps", "Outil simple")),
    note: "Scope defined per project",
    features: [
      "Windows and macOS versions",
      "Works offline",
      "Reports and exports",
      "Installer and automatic updates",
      "Training session for your team",
    ],
  },
  {
    slug: "custom-solutions",
    image: "/images/services/custom-solutions.webp",
    cta: "Scope my platform",
    name: "Custom web applications",
    short: "The tool the market doesn't sell",
    desc: "Client portal, business tool or SaaS: when nothing exists for your trade, we build it.",
    price: en(priceOf("custom-solutions", "Entreprises")),
    note: "Scope defined per project",
    features: [
      "Discovery and specification",
      "Custom business logic",
      "Roles, permissions and audit trail",
      "APIs and third-party integrations",
      "6 months of support",
    ],
  },
  {
    slug: "whatsapp-bots",
    image: "/images/services/whatsapp-bots.webp",
    cta: "Automate my WhatsApp",
    name: "WhatsApp chatbots",
    short: "Every message answered, even at night",
    desc: "It answers, sorts leads and books appointments. Your team only handles real customers.",
    price: en(priceOf("whatsapp-bots", "Basic")),
    note: monthlyNote(en(monthlyOf("whatsapp-bots", "Essentiel")), "Then MAD", "a month"),
    features: [
      "WhatsApp Business API setup",
      "Conversation flows written for your business",
      "Lead qualification and routing",
      "Sync to your CRM or spreadsheet",
      "Monthly fine-tuning",
    ],
  },
];

/**
 * The delivered projects in English: same sites, same figures, same order as
 * lib/projects-data.ts, served at /en/portfolio/<slug>. Only the words change;
 * every result shown is one the French page already stands behind.
 */

import type { Project } from "../projects-data";
import { PROJECTS } from "../projects-data";
import { PROJECT_SLUGS_EN } from "../i18n-paths";

export type ProjectEn = Project & { /** The French page this one mirrors. */ fr: string };

type Copy = Pick<Project, "title" | "category" | "description" | "stack" | "metricValue" | "metricLabel" | "metaDescription">;

/* English copy per French slug; everything else (URLs, year, order,
   screenshot) is taken from the French entry so the two can't drift. */
const COPY: Record<string, Copy> = {
  "plateforme-agence-voyage-maroc": {
    title: "Follow Me Travel",
    category: "Platform",
    description:
      "Booking platform for a Moroccan travel agency: search by destination, theme and trip type, detailed tour pages, domestic, international and Umrah trips, customer accounts and online payment. The comfort of a high-street agency at online prices.",
    stack: ["Web development", "Online booking", "Payments"],
    metricValue: "6",
    metricLabel: "international destinations online",
    metaDescription: "Development of a travel booking platform in Morocco: search, tours and online payment.",
  },
  "ecommerce-opticien-en-ligne-maroc": {
    title: "Epoptique",
    category: "E-commerce",
    description:
      "Online store for a Moroccan optician: over 500 prescription glasses and sunglasses, virtual try-on, 2-in-1 clip-ons, major brands, 24/48h delivery and free returns. A shopping experience designed to convert online as well as in store.",
    stack: ["Shopify", "Virtual try-on", "E-commerce"],
    metricValue: "+500",
    metricLabel: "models available online",
    metaDescription: "Online optician store in Morocco with virtual try-on, major brands and 24/48h delivery.",
  },
  "ecommerce-informatique-hightech-maroc": {
    title: "JPM",
    category: "E-commerce",
    description:
      "High-tech online store: laptops, smartphones, monitors and accessories, with category search, clear product pages, dynamic promotions and secure payment. A fast shopping experience built for a catalog that changes quickly.",
    stack: ["Shopify", "E-commerce", "Product catalog"],
    metricValue: "7/7",
    metricLabel: "support and online ordering",
    metaDescription: "Electronics and high-tech online store in Morocco: PCs, smartphones and accessories.",
  },
  "site-service-nettoyage-maroc": {
    title: "EMAS Nettoyage",
    category: "Business website",
    description:
      "Business website for a professional cleaning company: a clear presentation of services (homes, offices, shops, post-construction, windows, disinfection), service areas and a simple quote request. Built to turn a search into a service request.",
    stack: ["Next.js", "Business website", "SEO"],
    metricValue: "6",
    metricLabel: "service types showcased",
    metaDescription: "Business website for a professional cleaning company in Morocco, with services and online quotes.",
  },
  "ecommerce-electromenager-maroc": {
    title: "Biougnach Electro",
    category: "E-commerce",
    description:
      "Online store for a home appliance specialist in Morocco since 1973: multi-category catalog, product search, availability across several cities and a clear buying journey. A long-established brand taken online.",
    stack: ["E-commerce", "Product catalog", "SEO"],
    metricValue: "1973",
    metricLabel: "a heritage brand taken online",
    metaDescription: "Home appliance online store in Morocco: a multi-city catalog for a brand established in 1973.",
  },
  "rekrify-plateforme-emploi": {
    title: "Rekrify",
    category: "Platform",
    description:
      "Full recruitment platform connecting Moroccan candidates and employers: verified job offers, smart matching, company profiles and real-time recruiter messaging. Built for speed and trust, with a simplified application journey.",
    stack: ["Next.js", "React", "Tailwind"],
    metricValue: "+52%",
    metricLabel: "more completed applications",
    metaDescription: "Development of a modern job board in Morocco with verified offers and smart candidate matching.",
  },
  "ecommerce-cosmetiques-assistant-ia": {
    title: "Zina Beauty",
    category: "E-commerce",
    description:
      "Moroccan cosmetics store with a conversational AI assistant: customers describe their skin, the assistant recommends products, builds a routine and takes the order in the chat, in Darija, French or English, 24/7. A new, guided and instant way to shop.",
    stack: ["Next.js", "AI assistant", "Multilingual"],
    metricValue: "24/7",
    metricLabel: "automated advice and ordering",
    metaDescription: "Moroccan cosmetics e-commerce with an AI assistant: advice and ordering in Darija, French and English, 24/7.",
  },
  "plateforme-immobilier-prestige-maroc": {
    title: "M2 Immobilier",
    category: "Real estate platform",
    description:
      "Luxury real estate platform for Marrakech and all of Morocco: multi-criteria search (city, type, budget, bedrooms), detailed property pages, free valuation and WhatsApp contact. A built-in real estate blog strengthens SEO.",
    stack: ["Next.js", "Advanced search", "SEO"],
    metricValue: "+38%",
    metricLabel: "more qualified enquiries",
    metaDescription: "Development of a luxury real estate platform in Morocco: villas, riads and high-end apartments.",
  },
  "boutique-caftan-luxe": {
    title: "Maison Couture",
    category: "E-commerce",
    description:
      "High-end online store for Moroccan couture: handmade kaftans, djellabas, takchitas and gandouras. Browsing by collection, carefully crafted product pages, multi-currency (MAD) and a checkout designed for international customers.",
    stack: ["E-commerce", "Laravel", "Multi-currency"],
    metricValue: "+41%",
    metricLabel: "conversion rate",
    metaDescription: "Online store for luxury Moroccan kaftans, handmade in Marrakech.",
  },
  "site-cafe-brunch-casablanca": {
    title: "Koffee Kuento",
    category: "Business website",
    description:
      "Bilingual website for a specialty coffee shop in Les Palmiers: illustrated menu, signature drinks, Glovo ordering and local SEO (opening hours, Google reviews, directions). Built to turn local searches into customers at the counter.",
    stack: ["Next.js", "Local SEO", "Glovo"],
    metricValue: "+63%",
    metricLabel: "local searches",
    metaDescription: "Website and local SEO for a specialty coffee shop in Casablanca: menu, Google reviews and online ordering.",
  },
  "site-clinique-dentaire": {
    title: "Dentica",
    category: "Healthcare website",
    description:
      "Modern dental clinic website built around booking: treatments (implants, orthodontics, cosmetic dentistry), the team of practitioners, a clear price list and an online booking system. A reassuring design that turns visitors into patients.",
    stack: ["HTML5", "Online booking", "Responsive"],
    metricValue: "+47%",
    metricLabel: "online appointments",
    metaDescription: "Dental clinic website with online booking and a clear presentation of treatments.",
  },
  "site-agence-creative-casablanca": {
    title: "Raiide Media",
    category: "Portfolio",
    description:
      "Website for a Casablanca creative agency: filterable portfolio, brand identity showcases, embedded video reels, detailed service pages and client testimonials. An immersive showcase that puts the creative work first.",
    stack: ["Next.js", "Portfolio", "Video"],
    metricValue: "+58%",
    metricLabel: "quote requests",
    metaDescription: "Portfolio website for a digital creative agency in Casablanca: branding, video and marketing.",
  },
  "application-gestion-depenses": {
    title: "Floussy",
    category: "Web app",
    description:
      "Web app for personal and family budgets: spending by category, merchant and month, receipt scanning, automatic categorization and plain-language questions about your own history. Every user's data is isolated, with export and deletion at any time.",
    stack: ["Next.js", "Dashboard", "Secure auth"],
    metricValue: "100%",
    metricLabel: "of data isolated per user",
    metaDescription: "Development of a web app to track personal and family expenses.",
  },
  "landing-page-casque-vr": {
    title: "VEIL",
    category: "Landing page",
    description:
      "Immersive product landing page for a standalone VR headset: scroll-driven storytelling, an animated image sequence, 3D spatial audio and a showcase of the game library. A cinematic scroll experience designed to pull you into the game.",
    stack: ["Scroll animation", "WebGL", "Performance"],
    metricValue: "2×",
    metricLabel: "time spent on page",
    metaDescription: "Immersive, animated landing page for the launch of a virtual reality headset.",
  },
  "site-studio-photographie": {
    title: "Studio Photo",
    category: "Portfolio",
    description:
      "Portfolio website for an award-winning photography studio: galleries by specialty (weddings, portraits, events, commercial), full-screen imagery and easy contact. A quiet setting where the pictures speak for themselves.",
    stack: ["Gallery", "SEO", "Responsive"],
    metricValue: "+44%",
    metricLabel: "booking requests",
    metaDescription: "Portfolio website for a professional photography studio: weddings, portraits and events.",
  },
};

export const PROJECTS_EN: ProjectEn[] = PROJECTS.map((p) => {
  const copy = COPY[p.slug];
  const slug = PROJECT_SLUGS_EN[p.slug];
  if (!copy || !slug) throw new Error(`No English version of the project ${p.slug} (lib/en/projects-data.ts).`);
  return { ...p, ...copy, slug, fr: p.slug };
});

export const PROJECTS_ORDERED_EN = [...PROJECTS_EN].sort((a, b) => a.order - b.order);
export const PROJECT_SLUGS_LIST_EN = PROJECTS_EN.map((p) => p.slug);
export const getProjectEn = (slug: string) => PROJECTS_EN.find((p) => p.slug === slug);
export const projectPathEn = (slug: string) => `/en/portfolio/${slug}`;

import { SERVICES } from "@/lib/services-data";
import { CITIES } from "@/lib/cities-data";
import { postPath } from "@/lib/blog-data";
import { getPosts } from "@/lib/content";
import { projectPath, projectPathEn } from "@/lib/projects-data";
import { getProjects } from "@/lib/content";
import { IA_META } from "@/lib/ia-page-data";
import { SERVICES_EN } from "@/lib/en/services-data";
import { CITIES_EN } from "@/lib/en/cities-data";
import { IA_META_EN } from "@/lib/en/ia-page-data";
import { localize } from "@/lib/i18n-paths";
import { abs } from "@/lib/seo";
import { servicePath, PHONE_DISPLAY, EMAIL } from "@/lib/site-links";

/**
 * /llms.txt — a plain-language map of the site for AI assistants (the
 * llmstxt.org convention that ChatGPT, Perplexity and others read).
 *
 * Generated from the same data as the pages, at build time, so it can never
 * drift: a price changed in lib/pricing.ts or a new blog post shows up here
 * with the next build. Only facts the site already publishes. The French map
 * comes first, then the same map for the English pages under /en.
 */

export const dynamic = "force-static";

export async function GET() {
  // The blog list comes from content/, written in the dashboard.
  const POSTS_ORDERED = await getPosts("fr");
  const POSTS_ORDERED_EN = await getPosts("en");
  const PROJECTS_ORDERED = await getProjects("fr");
  const PROJECTS_ORDERED_EN = await getProjects("en");
  const lines = [
    "# Wevtex",
    "",
    "> Wevtex est une agence marketing digital et agence web basée à Casablanca, au Maroc. Elle crée des sites vitrines et des boutiques en ligne, des applications mobiles, des logiciels et plateformes sur mesure, et rend les entreprises visibles avec le référencement SEO, Google Maps, la publicité Google et Meta, les chatbots WhatsApp et les agents IA.",
    "",
    "- Basée à Casablanca, intervient dans tout le Maroc (Rabat, Marrakech, Tanger, Agadir, Fès) et à l'international, à distance.",
    `- Contact : ${PHONE_DISPLAY} (téléphone et WhatsApp), ${EMAIL}.`,
    "- Prix de départ publiés sur chaque page de service, devis ferme avant démarrage, paiement par étapes validées.",
    "- Le site, le nom de domaine, le code et les accès sont remis au nom du client.",
    "- Échanges en français, en darija et en anglais.",
    "",
    "## Services",
    ...SERVICES.map((s) => `- [${s.name}](${abs(servicePath(s.slug))}): ${s.metaDescription}`),
    `- [Agence de développement IA](${abs(IA_META.path)}): ${IA_META.description}`,
    "",
    "## Villes",
    ...CITIES.map((c) => `- [Agence web à ${c.name}](${abs(`/${c.slug}`)}): ${c.metaDescription}`),
    "",
    "## Guides",
    ...POSTS_ORDERED.map((p) => `- [${p.title}](${abs(postPath(p.slug))}): ${p.excerpt}`),
    "",
    "## Réalisations",
    ...PROJECTS_ORDERED.map((p) => `- [${p.title}](${abs(projectPath(p.slug))}): ${p.metaDescription}`),
    "",
    "## Pages utiles",
    `- [Questions fréquentes](${abs("/faq")}): prix, délais, propriété du site, hébergement, référencement, maintenance.`,
    `- [Tarifs et formules](${abs("/tarifs")})`,
    `- [Réalisations](${abs("/portfolio")})`,
    `- [Contact et devis](${abs("/contact")})`,
    "",
    "## English",
    "",
    "> Wevtex is a web design and digital marketing agency based in Casablanca, Morocco. It builds business websites and online stores, mobile apps, custom software and platforms, and makes businesses visible with SEO, Google Maps, Google and Meta ads, WhatsApp chatbots and AI agents. The full site is available in English at " + abs("/en") + ".",
    "",
    "- Based in Casablanca, working across Morocco (Rabat, Marrakech, Tangier, Agadir, Fez) and abroad, remotely.",
    `- Contact: ${PHONE_DISPLAY} (phone and WhatsApp), ${EMAIL}.`,
    "- Starting prices published on every service page, in Moroccan dirhams (MAD); firm quote before work starts; paid in approved stages.",
    "- The website, domain name, code and logins are handed over in the client's name.",
    "- Works in English, French and Darija.",
    "",
    "### Services",
    ...SERVICES_EN.map((s) => `- [${s.name}](${abs(localize(servicePath(s.slug), "en"))}): ${s.metaDescription}`),
    `- [AI automation agency](${abs(IA_META_EN.path)}): ${IA_META_EN.description}`,
    "",
    "### Cities",
    ...CITIES_EN.map((c) => `- [Web design agency in ${c.name}](${abs(`/en/${c.slug}`)}): ${c.metaDescription}`),
    "",
    "### Guides",
    ...POSTS_ORDERED_EN.map((p) => `- [${p.title}](${abs(postPath(p.slug, "en"))}): ${p.excerpt}`),
    "",
    "### Portfolio",
    ...PROJECTS_ORDERED_EN.map((p) => `- [${p.title}](${abs(projectPathEn(p.slug))}): ${p.metaDescription}`),
    "",
    "### Useful pages",
    `- [FAQ](${abs("/en/faq")}): prices, timelines, website ownership, hosting, SEO, maintenance.`,
    `- [All services](${abs("/en/services")})`,
    `- [Portfolio](${abs("/en/portfolio")})`,
    `- [Contact and quote](${abs("/en/contact")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

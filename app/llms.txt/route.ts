import { SERVICES } from "@/lib/services-data";
import { CITIES } from "@/lib/cities-data";
import { POSTS_ORDERED, postPath } from "@/lib/blog-data";
import { PROJECTS_ORDERED, projectPath } from "@/lib/projects-data";
import { IA_META } from "@/lib/ia-page-data";
import { abs } from "@/lib/seo";
import { servicePath, PHONE_DISPLAY, EMAIL } from "@/lib/site-links";

/**
 * /llms.txt — a plain-language map of the site for AI assistants (the
 * llmstxt.org convention that ChatGPT, Perplexity and others read).
 *
 * Generated from the same data as the pages, at build time, so it can never
 * drift: a price changed in lib/pricing.ts or a new blog post shows up here
 * with the next build. Only facts the site already publishes.
 */

export const dynamic = "force-static";

export function GET() {
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
    `- [Toutes les prestations](${abs("/services")})`,
    `- [Réalisations](${abs("/portfolio")})`,
    `- [Contact et devis](${abs("/contact")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

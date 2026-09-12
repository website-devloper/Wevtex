import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PortfolioView } from "@/components/wevtex/PortfolioView";
import { PROJECTS_ORDERED_EN } from "@/lib/en/projects-data";
import { languageAlternates } from "@/lib/i18n-paths";
import { SITE_URL, abs } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Portfolio | Web Design Agency in Morocco | WEVTEX" },
  description:
    "Our work in Morocco: online stores, SaaS, booking platforms and business websites. Live, clickable websites. See the work.",
  keywords: ["website examples", "web design portfolio morocco", "ecommerce website examples", "business website examples"],
  alternates: { canonical: "/en/portfolio", languages: languageAlternates("/portfolio") },
  openGraph: {
    title: "Portfolio | Web Design Agency in Morocco | WEVTEX",
    description: "Online stores, SaaS, booking systems and business websites, in Morocco and abroad.",
    url: "/en/portfolio",
    locale: "en_US",
  },
};

export default function EnglishPortfolioPage() {
  /* The delivered work as an ItemList, as on the French page. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Wevtex portfolio",
    numberOfItems: PROJECTS_ORDERED_EN.length,
    itemListElement: PROJECTS_ORDERED_EN.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.title,
        description: p.metaDescription,
        url: p.liveUrl,
        image: abs(p.screenshot),
        dateCreated: String(p.year),
        genre: p.category,
        creator: { "@type": "Organization", name: "Wevtex", url: SITE_URL },
        inLanguage: "en",
      },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PortfolioView projects={PROJECTS_ORDERED_EN} />
    </>
  );
}

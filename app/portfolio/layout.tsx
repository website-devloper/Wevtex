import type { Metadata } from "next";
import { PROJECTS_ORDERED } from "@/lib/projects-data";
import { SITE_URL, abs } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Réalisations | Agence web au Maroc | WEVTEX" },
  description: "Découvrez nos réalisations : boutiques en ligne, plateformes SaaS, systèmes de réservation et sites vitrines qui convertissent, au Maroc et à l'international.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Réalisations | Agence web au Maroc | WEVTEX",
    description: "Nos réalisations : boutiques en ligne, SaaS, systèmes de réservation et sites vitrines, au Maroc et à l'international.",
    url: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /* An ItemList of the delivered work. The page listed ten real projects with
     live URLs and carried no structured data at all, so none of it was legible
     to a crawler as a portfolio. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Réalisations Wevtex",
    numberOfItems: PROJECTS_ORDERED.length,
    itemListElement: PROJECTS_ORDERED.map((p, i) => ({
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
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

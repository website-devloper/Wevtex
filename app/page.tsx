import type { Metadata } from "next";
import { HomeClient } from "../components/wevtex/HomeClient";
import { FAQS } from "../components/wevtex/homeContent";

/**
 * Home route — a Server Component.
 * Owns the static <head> (metadata) and structured data (JSON-LD) so crawlers
 * get everything on the server, then renders the interactive UI as a client island.
 */

export const metadata: Metadata = {
  /* The page is served in French to a French-speaking market, so the title,
     description and keywords are too. They were English, which meant the
     snippet Google showed did not match the page a visitor then landed on. */
  title: {
    absolute: "Agence Marketing Digital au Maroc | Sites & SEO | WEVTEX",
  },
  description:
    "Agence marketing digital au Maroc : sites, boutiques en ligne, SEO et publicité Google & Meta. Prix clair en DH, livré en 2 à 4 semaines.",
  keywords: [
    "agence marketing digital",
    "agence marketing digital Maroc",
    "agence marketing web",
    "agence web Maroc",
    "agence digitale Maroc",
    "agence de communication digitale Maroc",
    "agence web et mobile",
    "tarif agence marketing digital Maroc",
    "meilleure agence web Maroc",
    "Wevtex",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agence Marketing Digital au Maroc | Sites & SEO | WEVTEX",
    description:
      "Création de sites, boutiques en ligne et applications qui transforment vos visiteurs en clients. Basés à Casablanca, au service du Maroc et de l'international.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}

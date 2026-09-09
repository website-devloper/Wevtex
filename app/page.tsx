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
    absolute: "Agence Web au Maroc — Sites & Applications | WEVTEX",
  },
  description:
    "Agence web au Maroc : création de sites, boutiques en ligne, applications et SEO. Prix clair en DH, livré en 2 à 4 semaines. Devis gratuit.",
  keywords: [
    "agence web Maroc",
    "création site web Maroc",
    "création site internet Casablanca",
    "prix site web Maroc",
    "création boutique en ligne Maroc",
    "agence e-commerce Maroc",
    "développement application mobile Maroc",
    "référencement naturel SEO Maroc",
    "Google Maps référencement local Maroc",
    "Wevtex",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agence Web au Maroc — Sites & Applications | WEVTEX",
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

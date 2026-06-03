import type { Metadata } from "next";
import { HomeClient } from "../components/wevtex/HomeClient";
import { FAQS } from "../components/wevtex/homeContent";

/**
 * Home route — a Server Component.
 * Owns the static <head> (metadata) and structured data (JSON-LD) so crawlers
 * get everything on the server, then renders the interactive UI as a client island.
 */

export const metadata: Metadata = {
  title: {
    absolute: "Web Design & Development Agency in Morocco | Wevtex",
  },
  description:
    "Wevtex builds fast, modern websites, online stores and apps that turn visitors into customers. Casablanca-based, serving clients across Morocco and worldwide. Clear DH pricing, no surprises.",
  keywords: [
    // Local (Morocco)
    "web design agency Morocco",
    "création site web Casablanca",
    "agence web Maroc",
    "site web Maroc prix",
    "e-commerce Maroc",
    // Service / international
    "website development",
    "online store development",
    "Next.js development agency",
    "SEO services",
    "Wevtex",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Web Design & Development Agency in Morocco | Wevtex",
    description:
      "Fast, modern websites, online stores and apps that turn visitors into customers. Casablanca-based, serving Morocco and worldwide.",
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

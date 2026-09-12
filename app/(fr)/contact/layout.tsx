import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n-paths";
import { serializeJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Contact | Devis site web au Maroc | WEVTEX" },
  description: "Parlez-nous de votre projet web ou application au Maroc. Premier avis, budget et délai sous quelques heures ouvrées. Devis gratuit.",
  keywords: ["devis site web Maroc", "demande de devis site internet", "devis création site web", "devis gratuit site web"],
  alternates: { canonical: "/contact", languages: languageAlternates("/contact") },
  openGraph: {
    title: "Contact | Devis site web au Maroc | WEVTEX",
    description: "Agence web et applications basée à Casablanca. Sites internet, boutiques en ligne, SEO et automatisation.",
    url: "/contact",
  },
};

import { CONTACT_FAQS } from "@/lib/contact-content";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /* Generated from the same array the page renders. Google requires FAQPage
     markup to match the visible content; this was hand-written English that
     listed two questions the page does not show. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CONTACT_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      {children}
    </>
  )
}

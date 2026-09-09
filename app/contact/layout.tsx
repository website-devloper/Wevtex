import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact | Devis site web au Maroc | WEVTEX" },
  description: "Contactez Wevtex, agence web et applications basée à Casablanca. Sites internet, boutiques en ligne, SEO et automatisation, au Maroc et à l'international.",
  alternates: { canonical: "/contact" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}

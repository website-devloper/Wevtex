import type { Metadata } from "next";
import { FaqView } from "@/components/wevtex/FaqView";
import { ALL_FAQS } from "@/lib/faq-data";
import { JsonLd, breadcrumb, faqSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Questions fréquentes — Création de site web au Maroc | WEVTEX" },
  description:
    "Prix, délais, propriété du site, hébergement, référencement et maintenance : les réponses claires aux questions qu'on nous pose avant de lancer un projet web au Maroc.",
  keywords: [
    "combien coûte un site web au maroc",
    "prix création site web maroc",
    "combien de temps pour créer un site web",
    "à qui appartient un site web",
    "agence web maroc questions",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Questions fréquentes | WEVTEX",
    description:
      "Prix, délais, propriété, hébergement, référencement : les réponses claires avant de lancer un projet web au Maroc.",
    url: "/faq",
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <>
      {/* Answers here are the ones rendered on the page, verbatim — schema-only
          content is against Google's FAQPage guidelines. */}
      <JsonLd data={faqSchema(ALL_FAQS)} />
      <JsonLd data={breadcrumb([{ name: "Questions fréquentes", path: "/faq" }])} />
      <FaqView />
    </>
  );
}

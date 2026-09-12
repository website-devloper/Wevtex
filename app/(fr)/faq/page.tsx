import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n-paths";
import { FaqView } from "@/components/wevtex/FaqView";
import { ALL_FAQS, FAQ_GROUPS } from "@/lib/faq-data";
import { JsonLd, breadcrumb, faqSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Questions fréquentes | Création de site au Maroc | WEVTEX" },
  description:
    "Prix, délais, propriété du site, hébergement, SEO et maintenance : des réponses claires avant de lancer votre projet web au Maroc.",
  keywords: [
    "combien de temps pour créer un site web",
    "à qui appartient le site",
    "hébergement et nom de domaine",
    "site visible sur Google",
  ],
  alternates: { canonical: "/faq", languages: languageAlternates("/faq") },
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
      <FaqView groups={FAQ_GROUPS} />
    </>
  );
}

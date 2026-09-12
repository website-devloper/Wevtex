import type { Metadata } from "next";
import { IaView } from "@/components/wevtex/IaView";
import { IA_META, IA_FAQS } from "@/lib/ia-page-data";
import { JsonLd, breadcrumb, faqSchema, serviceSchema } from "@/components/seo/JsonLd";

/**
 * /agence-developpement-ia-maroc — the AI service page.
 *
 * Sits at the root rather than under /services because the URL is the keyword
 * ("agence développement ia maroc"), the same reasoning as the city pages.
 */

export const metadata: Metadata = {
  title: { absolute: IA_META.title },
  description: IA_META.description,
  keywords: [...IA_META.keywords],
  alternates: { canonical: IA_META.path },
  openGraph: {
    title: IA_META.title,
    description: IA_META.description,
    url: IA_META.path,
    type: "website",
  },
};

export default function IaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Développement d'agents IA et automatisation",
          description: IA_META.description,
          path: IA_META.path,
          serviceType: "Développement d'intelligence artificielle",
          areaServed: ["Maroc", "Casablanca", "Rabat", "Marrakech"],
        })}
      />
      {/* Answers are the ones rendered on the page, verbatim. */}
      <JsonLd data={faqSchema(IA_FAQS)} />
      <JsonLd data={breadcrumb([{ name: "Développement IA au Maroc", path: IA_META.path }])} />
      <IaView />
    </>
  );
}

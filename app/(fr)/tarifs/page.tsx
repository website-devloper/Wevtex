import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n-paths";
import { PricingPageView } from "@/components/wevtex/PricingPageView";
import { SERVICES } from "@/lib/services-data";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Tarifs | Prix d'un site web, du SEO et des applications au Maroc | WEVTEX" },
  description:
    "Tous nos tarifs affichés : site web dès 1 899 DH, SEO dès 1 000 DH par mois, publicité à 200 DH par jour, application dès 8 000 DH, et le prix des options.",
  keywords: [
    "tarifs agence web maroc",
    "prix création site web maroc",
    "tarif référencement maroc",
    "prix application mobile maroc",
    "page supplémentaire site web prix",
  ],
  alternates: { canonical: "/tarifs", languages: languageAlternates("/tarifs") },
  openGraph: {
    title: "Tarifs | WEVTEX",
    description:
      "Toutes les formules et leurs options, prix affichés : sites web, SEO, publicité, applications et logiciels sur mesure.",
    url: "/tarifs",
    type: "website",
  },
};

export default function TarifsPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Tarifs", path: "/tarifs" }])} />
      <PricingPageView services={SERVICES} />
    </>
  );
}

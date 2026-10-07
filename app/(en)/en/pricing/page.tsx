import type { Metadata } from "next";
import { languageAlternates } from "@/lib/i18n-paths";
import { PricingPageView } from "@/components/wevtex/PricingPageView";
import { getServices } from "@/lib/content";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Pricing | Websites, SEO and Apps in Morocco | WEVTEX" },
  description:
    "Every price published: websites from MAD 1,899, SEO from MAD 1,000 a month, ads at MAD 200 a day, apps from MAD 8,000, plus what each add-on costs.",
  keywords: [
    "web agency pricing morocco",
    "website price morocco",
    "seo pricing morocco",
    "mobile app price morocco",
    "extra page website price",
  ],
  alternates: { canonical: "/en/pricing", languages: languageAlternates("/tarifs") },
  openGraph: {
    title: "Pricing | WEVTEX",
    description:
      "Every package and add-on, with the price published: websites, SEO, ads, apps and custom software.",
    url: "/en/pricing",
    locale: "en_US",
  },
};

export default async function EnglishPricingPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: "Pricing", path: "/en/pricing" }])} />
      <PricingPageView services={await getServices("en")} />
    </>
  );
}

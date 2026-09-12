import type { Metadata } from "next";
import { FaqView } from "@/components/wevtex/FaqView";
import { ALL_FAQS_EN, FAQ_GROUPS_EN } from "@/lib/en/faq-data";
import { JsonLd, breadcrumb, faqSchema } from "@/components/seo/JsonLd";
import { languageAlternates } from "@/lib/i18n-paths";

export const metadata: Metadata = {
  title: { absolute: "FAQ | Web Design in Morocco | WEVTEX" },
  description:
    "Prices, timelines, website ownership, hosting, SEO and maintenance: clear answers before you start a web project in Morocco.",
  keywords: [
    "how long does it take to build a website",
    "who owns my website",
    "website hosting and domain name",
    "website visible on google",
  ],
  alternates: { canonical: "/en/faq", languages: languageAlternates("/faq") },
  openGraph: {
    title: "FAQ | WEVTEX",
    description: "Prices, timelines, ownership, hosting, SEO: clear answers before starting a web project in Morocco.",
    url: "/en/faq",
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishFaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(ALL_FAQS_EN, "en")} />
      <JsonLd data={breadcrumb([{ name: "FAQ", path: "/en/faq" }], "en")} />
      <FaqView groups={FAQ_GROUPS_EN} />
    </>
  );
}

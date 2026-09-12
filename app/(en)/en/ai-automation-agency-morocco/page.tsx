import type { Metadata } from "next";
import { IaView } from "@/components/wevtex/IaView";
import {
  IA_META_EN,
  IA_FAQS_EN,
  IA_REALITY_EN,
  IA_CAPABILITIES_EN,
  IA_STEPS_EN,
  IA_SECTORS_EN,
} from "@/lib/en/ia-page-data";
import { languageAlternates } from "@/lib/i18n-paths";
import { JsonLd, breadcrumb, faqSchema, serviceSchema } from "@/components/seo/JsonLd";

/** /en/ai-automation-agency-morocco — the AI page in English. */

export const metadata: Metadata = {
  title: { absolute: IA_META_EN.title },
  description: IA_META_EN.description,
  keywords: [...IA_META_EN.keywords],
  alternates: { canonical: IA_META_EN.path, languages: languageAlternates("/agence-developpement-ia-maroc") },
  openGraph: {
    title: IA_META_EN.title,
    description: IA_META_EN.description,
    url: IA_META_EN.path,
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishAiPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "AI agent development and automation",
          description: IA_META_EN.description,
          path: IA_META_EN.path,
          serviceType: "Artificial intelligence development",
          areaServed: ["Morocco", "Casablanca", "Rabat", "Marrakech"],
          locale: "en",
        })}
      />
      <JsonLd data={faqSchema(IA_FAQS_EN, "en")} />
      <JsonLd data={breadcrumb([{ name: "AI automation agency in Morocco", path: IA_META_EN.path }], "en")} />
      <IaView
        data={{
          meta: IA_META_EN,
          reality: IA_REALITY_EN,
          capabilities: IA_CAPABILITIES_EN,
          steps: IA_STEPS_EN,
          sectors: IA_SECTORS_EN,
          faqs: IA_FAQS_EN,
        }}
      />
    </>
  );
}

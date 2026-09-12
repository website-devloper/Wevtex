import type { Metadata } from "next";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { ContactView } from "@/components/wevtex/ContactView";
import { CONTACT_FAQS_EN } from "@/lib/en/contact-content";
import { languageAlternates } from "@/lib/i18n-paths";

export const metadata: Metadata = {
  title: { absolute: "Contact | Website Quote in Morocco | WEVTEX" },
  description:
    "Tell us about your website or app project in Morocco. A first opinion, budget and timeline within a few office hours. Free quote.",
  keywords: ["website quote morocco", "web design quote", "free website quote", "contact web design agency morocco"],
  alternates: { canonical: "/en/contact", languages: languageAlternates("/contact") },
  openGraph: {
    title: "Contact | Website Quote in Morocco | WEVTEX",
    description: "Web design and apps agency based in Casablanca. Websites, online stores, SEO and automation.",
    url: "/en/contact",
    locale: "en_US",
  },
};

export default function EnglishContactPage() {
  return (
    <>
      {/* The same answers the page renders, as FAQPage. */}
      <JsonLd data={faqSchema(CONTACT_FAQS_EN, "en")} />
      <ContactView faqs={CONTACT_FAQS_EN} />
    </>
  );
}

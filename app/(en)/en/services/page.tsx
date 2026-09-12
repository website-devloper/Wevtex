import type { Metadata } from "next";
import { ServicesIndexView } from "@/components/wevtex/ServicesIndexView";
import { languageAlternates } from "@/lib/i18n-paths";

export const metadata: Metadata = {
  title: { absolute: "Web Design & Digital Marketing Services in Morocco | WEVTEX" },
  description:
    "Websites, online stores, mobile apps, SEO, Google & Meta ads, custom software and WhatsApp chatbots in Morocco. Clear prices in MAD.",
  keywords: [
    "web design services morocco",
    "digital marketing services morocco",
    "web agency services",
    "website development services morocco",
  ],
  alternates: { canonical: "/en/services", languages: languageAlternates("/services") },
  openGraph: {
    title: "Web Design & Digital Marketing Services in Morocco | WEVTEX",
    description:
      "Custom websites, online stores, SEO, automation and design for businesses in Morocco and abroad.",
    url: "/en/services",
    locale: "en_US",
  },
};

export default function EnglishServicesPage() {
  return <ServicesIndexView />;
}

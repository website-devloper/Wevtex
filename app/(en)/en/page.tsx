import type { Metadata } from "next";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { HomeClient } from "@/components/wevtex/HomeClient";
import { FAQS_EN } from "@/components/wevtex/homeContent.en";
import { getProjects, getReviews, getClients } from "@/lib/content";
import { languageAlternates } from "@/lib/i18n-paths";

/**
 * /en — the English homepage. Targets the English head terms from Google
 * autocomplete: "web design agency morocco", "digital marketing agency
 * morocco", "web development company morocco".
 */

export const metadata: Metadata = {
  title: { absolute: "Web Design & Digital Marketing Agency in Morocco | WEVTEX" },
  description:
    "Web design and digital marketing agency in Morocco: websites, online stores, SEO and Google & Meta ads. Clear prices in MAD, delivered in 2 to 4 weeks.",
  keywords: [
    "web design agency morocco",
    "digital marketing agency morocco",
    "web development company morocco",
    "web design morocco",
    "web agency casablanca",
    "digital agency morocco",
    "website design morocco",
    "marketing agency morocco",
    "best web design agency in morocco",
    "Wevtex",
  ],
  alternates: { canonical: "/en", languages: languageAlternates("/") },
  openGraph: {
    title: "Web Design & Digital Marketing Agency in Morocco | WEVTEX",
    description:
      "Websites, online stores and apps that turn your visitors into customers. Based in Casablanca, working across Morocco and abroad.",
    url: "/en",
    type: "website",
    locale: "en_US",
  },
};

export default async function EnglishHomePage() {
  const [projects, reviews, clients] = await Promise.all([getProjects("en"), getReviews(), getClients()]);
  return (
    <>
      <JsonLd data={faqSchema(FAQS_EN, "en")} />
      <HomeClient projects={projects.slice(0, 6)} reviews={reviews} clients={clients} />
    </>
  );
}

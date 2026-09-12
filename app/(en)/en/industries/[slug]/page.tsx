import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetail } from "@/components/wevtex/IndustryDetail";
import { INDUSTRY_SLUGS } from "@/lib/industries-data";
import { INDUSTRY_SERVICES_EN, getIndustryEn } from "@/lib/en/industries-data";
import { languageAlternates } from "@/lib/i18n-paths";
import { JsonLd, breadcrumb, faqSchema, serviceSchema } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryEn(slug);
  if (!industry) return {};
  const url = `/en/industries/${industry.slug}`;
  return {
    title: { absolute: industry.metaTitle },
    description: industry.metaDescription,
    keywords: [industry.keyword, ...(industry.seoKeywords ?? [])],
    alternates: { canonical: url, languages: languageAlternates(`/industries/${industry.slug}`) },
    openGraph: { title: industry.metaTitle, description: industry.metaDescription, url, type: "website", locale: "en_US" },
  };
}

export default async function EnglishIndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryEn(slug);
  if (!industry) notFound();
  const path = `/en/industries/${industry.slug}`;

  return (
    <>
      <JsonLd data={serviceSchema({ name: industry.name, description: industry.metaDescription, path, serviceType: "Web design", locale: "en" })} />
      <JsonLd data={faqSchema(industry.faqs, "en")} />
      <JsonLd data={breadcrumb([{ name: "Industries", path: "/en#industries" }, { name: industry.name, path }], "en")} />
      <IndustryDetail industry={industry} services={INDUSTRY_SERVICES_EN[industry.slug] ?? []} />
    </>
  );
}

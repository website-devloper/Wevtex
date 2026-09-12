import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetail } from "../../../components/wevtex/IndustryDetail";
import { INDUSTRY_SLUGS, getIndustry } from "../../../lib/industries-data";
import { JsonLd, breadcrumb, faqSchema, serviceSchema } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const url = `/industries/${industry.slug}`;
  return {
    title: { absolute: industry.metaTitle },
    description: industry.metaDescription,
    keywords: [industry.keyword, ...(industry.seoKeywords ?? [])],
    alternates: { canonical: url },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const path = `/industries/${industry.slug}`;

  return (
    <>
      <JsonLd data={serviceSchema({ name: industry.name, description: industry.metaDescription, path, serviceType: "Création de site web" })} />
      {/* IndustryDetail renders these same answers on the page, verbatim. */}
      <JsonLd data={faqSchema(industry.faqs)} />
      <JsonLd data={breadcrumb([{ name: "Secteurs", path: "/#industries" }, { name: industry.name, path }])} />
      <IndustryDetail industry={industry} />
    </>
  );
}

export const dynamicParams = false;

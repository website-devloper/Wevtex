import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryDetail } from "../../../components/wevtex/IndustryDetail";
import { INDUSTRY_SLUGS, getIndustry } from "../../../lib/industries-data";
import { SITE_URL, abs } from "../../../lib/seo";

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
    keywords: [industry.keyword],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Web development for ${industry.name}`,
        serviceType: "Web development",
        description: industry.metaDescription,
        url: abs(`/industries/${industry.slug}`),
        provider: { "@type": "Organization", name: "Wevtex", url: SITE_URL },
        areaServed: ["MA", "US", "GB", "Worldwide"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Industries", item: abs("/#industries") },
          { "@type": "ListItem", position: 3, name: industry.name, item: abs(`/industries/${industry.slug}`) },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IndustryDetail industry={industry} />
    </>
  );
}

export const dynamicParams = false;

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICE_SLUGS, getService } from "../../../lib/services-data";
import { SITE_URL, abs } from "../../../lib/seo";
import { ServiceDetailView } from "../../../components/wevtex/service/ServiceDetailView";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `/services/${service.slug}`;
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: [service.keyword],
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url: abs(`/services/${service.slug}`),
        provider: { "@type": "Organization", name: "Wevtex", url: SITE_URL },
        areaServed: ["MA", "US", "GB", "Worldwide"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: abs("/services") },
          { "@type": "ListItem", position: 3, name: service.name, item: abs(`/services/${service.slug}`) },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetailView service={service} />
    </>
  );
}

export const dynamicParams = false;

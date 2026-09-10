import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, CITY_SLUGS } from "@/lib/cities-data";
import { CityView } from "@/components/wevtex/CityView";
import { JsonLd, breadcrumb, faqSchema, localBusinessSchema } from "@/components/seo/JsonLd";

/**
 * City landing pages, at the root so the URL is the keyword:
 * /agence-web-casablanca, /agence-web-rabat, …
 *
 * The route is a catch-all on a single segment, so it must only match the known
 * city slugs — anything else 404s rather than rendering an empty city.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: { absolute: city.title },
    description: city.metaDescription,
    keywords: [
      `agence web ${city.name.toLowerCase()}`,
      `création site web ${city.name.toLowerCase()}`,
      `création site internet ${city.name.toLowerCase()}`,
      `agence digitale ${city.name.toLowerCase()}`,
      "agence web Maroc",
    ],
    alternates: { canonical: `/${city.slug}` },
    openGraph: {
      title: city.title,
      description: city.metaDescription,
      url: `/${city.slug}`,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <>
      <JsonLd data={localBusinessSchema({ city: city.name, path: `/${city.slug}`, description: city.metaDescription })} />
      <JsonLd data={faqSchema(city.faqs)} />
      <JsonLd data={breadcrumb([{ name: `Agence web à ${city.name}`, path: `/${city.slug}` }])} />
      <CityView city={city} />
    </>
  );
}

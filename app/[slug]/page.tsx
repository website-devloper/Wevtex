import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, CITY_SLUGS } from "@/lib/cities-data";
import { SERVICE_SLUGS, getService } from "@/lib/services-data";
import type { Service } from "@/lib/services-data";
import { SERVICE_URLS, servicePath, serviceIdFromUrl } from "@/lib/site-links";
import { CityView } from "@/components/wevtex/CityView";
import { ServiceDetailView } from "@/components/wevtex/service/ServiceDetailView";
import {
  JsonLd,
  breadcrumb,
  faqSchema,
  localBusinessSchema,
  serviceSchema,
} from "@/components/seo/JsonLd";

/**
 * Root-level keyword pages: the URL is the search term.
 *
 *   /agence-web-casablanca, /agence-web-rabat, …   → city landing pages
 *   /creation-site-web-maroc, /chatbot-whatsapp-maroc, … → service pages
 *
 * Next allows one dynamic segment per level, so both families share this
 * route. It only matches the known slugs; anything else 404s. The old
 * /services/<id> addresses 301 here (next.config.mjs).
 */

export const dynamicParams = false;

/* A city and a service claiming the same URL would silently shadow one
   another, so the overlap is checked at build rather than left to chance. */
const clash = CITY_SLUGS.filter((c) => Object.values(SERVICE_URLS).includes(c));
if (clash.length) {
  throw new Error(`City and service pages share a URL: ${clash.join(", ")}`);
}

export function generateStaticParams() {
  return [
    ...CITY_SLUGS.map((slug) => ({ slug })),
    ...SERVICE_SLUGS.map((id) => ({ slug: servicePath(id).slice(1) })),
  ];
}

function resolve(slug: string) {
  const city = CITIES.find((c) => c.slug === slug);
  if (city) return { kind: "city" as const, city };
  const id = serviceIdFromUrl(slug);
  const service = id ? getService(id) : undefined;
  if (service) return { kind: "service" as const, service };
  return null;
}

/** The first published tier is the starting price: "1 500" -> 1500. */
function startingPrice(service: Service) {
  const raw = service.pricing?.tiers[0]?.price;
  const n = raw ? Number(raw.replace(/\D/g, "")) : NaN;
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) return {};

  if (page.kind === "city") {
    const { city } = page;
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

  const { service } = page;
  const url = servicePath(service.slug);
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: [service.keyword, ...(service.seoKeywords ?? [])],
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) notFound();

  if (page.kind === "city") {
    const { city } = page;
    return (
      <>
        <JsonLd data={localBusinessSchema({ city: city.name, path: `/${city.slug}`, description: city.metaDescription })} />
        <JsonLd data={faqSchema(city.faqs)} />
        <JsonLd data={breadcrumb([{ name: `Agence web à ${city.name}`, path: `/${city.slug}` }])} />
        <CityView city={city} />
      </>
    );
  }

  const { service } = page;
  const path = servicePath(service.slug);
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path,
          startingPrice: startingPrice(service),
        })}
      />
      {/* ServiceDetailView renders these same answers on the page, verbatim. */}
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}
      <JsonLd
        data={breadcrumb([
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ])}
      />
      <ServiceDetailView service={service} />
    </>
  );
}

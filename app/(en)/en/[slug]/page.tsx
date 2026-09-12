import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES_EN, CITY_SLUGS_EN, getCityEn } from "@/lib/en/cities-data";
import { getServiceEn } from "@/lib/en/services-data";
import type { Service } from "@/lib/services-data";
import { SERVICE_URLS_EN, languageAlternates } from "@/lib/i18n-paths";
import { servicePath } from "@/lib/site-links";
import { CityView } from "@/components/wevtex/CityView";
import { ServiceDetailView } from "@/components/wevtex/service/ServiceDetailView";
import { JsonLd, breadcrumb, faqSchema, localBusinessSchema, serviceSchema } from "@/components/seo/JsonLd";

/**
 * English keyword pages at /en/<term>, the twin of app/(fr)/[slug]:
 *   /en/web-design-casablanca, /en/web-design-marrakech, … → city pages
 *   /en/web-design-morocco, /en/seo-agency-morocco, …       → service pages
 */

export const dynamicParams = false;

const serviceIdFromEnUrl = (slug: string) => Object.keys(SERVICE_URLS_EN).find((id) => SERVICE_URLS_EN[id] === slug);

const clash = CITY_SLUGS_EN.filter((c) => Object.values(SERVICE_URLS_EN).includes(c));
if (clash.length) throw new Error(`English city and service pages share a URL: ${clash.join(", ")}`);

export function generateStaticParams() {
  return [...CITY_SLUGS_EN.map((slug) => ({ slug })), ...Object.values(SERVICE_URLS_EN).map((slug) => ({ slug }))];
}

function resolve(slug: string) {
  const city = getCityEn(slug);
  if (city) return { kind: "city" as const, city };
  const id = serviceIdFromEnUrl(slug);
  const service = id ? getServiceEn(id) : undefined;
  if (service) return { kind: "service" as const, service };
  return null;
}

/** The first published tier is the starting price: "1,500" -> 1500. */
function startingPrice(service: Service) {
  const raw = service.pricing?.tiers[0]?.price;
  const n = raw ? Number(raw.replace(/\D/g, "")) : NaN;
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) return {};
  const url = `/en/${slug}`;

  if (page.kind === "city") {
    const { city } = page;
    return {
      title: { absolute: city.title },
      description: city.metaDescription,
      /* The phrases English searchers type for a city (autocomplete, hl=en). */
      keywords: [
        "web design",
        "web design agency",
        "web development",
        "website design",
        "digital marketing agency",
        "digital agency",
        "seo agency",
        "web developer",
      ].map((k) => `${k} ${city.name.toLowerCase()}`),
      alternates: { canonical: url, languages: languageAlternates(`/${city.fr}`) },
      openGraph: { title: city.title, description: city.metaDescription, url, type: "website", locale: "en_US" },
    };
  }

  const { service } = page;
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: [service.keyword, ...(service.seoKeywords ?? [])],
    alternates: { canonical: url, languages: languageAlternates(servicePath(service.slug)) },
    openGraph: { title: service.metaTitle, description: service.metaDescription, url, type: "website", locale: "en_US" },
  };
}

export default async function EnglishKeywordPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = resolve(slug);
  if (!page) notFound();
  const path = `/en/${slug}`;

  if (page.kind === "city") {
    const { city } = page;
    return (
      <>
        <JsonLd data={localBusinessSchema({ city: city.name, path, description: city.metaDescription, locale: "en" })} />
        <JsonLd data={faqSchema(city.faqs, "en")} />
        <JsonLd data={breadcrumb([{ name: `Web design agency in ${city.name}`, path }], "en")} />
        <CityView city={city} />
      </>
    );
  }

  const { service } = page;
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path,
          startingPrice: startingPrice(service),
          locale: "en",
        })}
      />
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs, "en")} />}
      <JsonLd
        data={breadcrumb(
          [
            { name: "Services", path: "/en/services" },
            { name: service.name, path },
          ],
          "en",
        )}
      />
      <ServiceDetailView service={service} />
    </>
  );
}

/* Keep the city list import used for type-only consumers. */
export type { CityEn } from "@/lib/en/cities-data";
void CITIES_EN;

import { SITE_URL, abs } from "@/lib/seo";

/**
 * Structured-data helpers.
 *
 * One component emits a JSON-LD block; the builders below produce the shapes
 * the site needs. Everything references the organisation by @id rather than
 * repeating it, so a crawler resolves one entity across the whole graph.
 *
 * Nothing here invents data. Notably there is no aggregateRating builder:
 * ratings must match a real Google Business Profile, and inventing one is the
 * kind of thing that gets a site distrusted rather than promoted.
 */

export const ORG_ID = `${SITE_URL}#organization`;

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Accueil › … › current page. Every non-home page should carry one. */
export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** A service, priced only when the page actually shows a starting price. */
export function serviceSchema(o: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  startingPrice?: number;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: o.name,
    description: o.description,
    serviceType: o.serviceType ?? o.name,
    url: abs(o.path),
    provider: { "@id": ORG_ID },
    areaServed: (o.areaServed ?? ["Maroc"]).map((n) => ({ "@type": "Place", name: n })),
    inLanguage: "fr",
    ...(o.startingPrice
      ? {
          offers: {
            "@type": "Offer",
            price: String(o.startingPrice),
            priceCurrency: "MAD",
            availability: "https://schema.org/InStock",
            url: abs(o.path),
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: String(o.startingPrice),
              priceCurrency: "MAD",
              valueAddedTaxIncluded: false,
            },
          },
        }
      : {}),
  };
}

/** FAQPage. Answers must be the ones visible on the page, verbatim. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "fr",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** A city landing page: the studio, scoped to the place it serves. */
export function localBusinessSchema(o: {
  city: string;
  path: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${abs(o.path)}#localbusiness`,
    name: `Wevtex — Agence web à ${o.city}`,
    parentOrganization: { "@id": ORG_ID },
    url: abs(o.path),
    description: o.description,
    telephone: "+212687633774",
    email: "hello@wevtex.com",
    image: abs("/images/og-image.jpg"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    areaServed: { "@type": "City", name: o.city },
    priceRange: "990 DH – 60 000 DH",
    currenciesAccepted: "MAD",
    inLanguage: "fr",
  };
}

/** A blog post. Dates are the visible ones; the author is the studio. */
export function articleSchema(o: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${abs(o.path)}#article`,
    headline: o.headline,
    description: o.description,
    url: abs(o.path),
    mainEntityOfPage: abs(o.path),
    datePublished: o.datePublished,
    dateModified: o.dateModified ?? o.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    image: abs(o.image ?? "/images/og-image.jpg"),
    inLanguage: "fr",
    ...(o.keywords ? { keywords: o.keywords.join(", ") } : {}),
  };
}

/** A delivered project: the live site, who built it, and what with. */
export function creativeWorkSchema(o: {
  name: string;
  description: string;
  path: string;
  liveUrl: string;
  image: string;
  year: number;
  keywords: string[];
  genre: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${abs(o.path)}#work`,
    name: o.name,
    description: o.description,
    url: abs(o.path),
    sameAs: o.liveUrl,
    image: abs(o.image),
    dateCreated: String(o.year),
    genre: o.genre,
    keywords: o.keywords.join(", "),
    creator: { "@id": ORG_ID },
    inLanguage: "fr",
  };
}

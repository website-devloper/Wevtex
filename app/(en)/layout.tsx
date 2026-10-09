import type { Metadata, Viewport } from "next";
import { serializeJsonLd } from "@/components/seo/JsonLd";
import { fontVars } from "@/lib/fonts";
import { LocaleProvider } from "@/components/wevtex/locale";
import { AnalyticsConsent } from "@/components/wevtex/AnalyticsConsent";
import { SmoothScroll } from "@/components/wevtex/SmoothScroll";
import { SITE_URL, abs } from "@/lib/seo";
import { PRICE_RANGE_EN } from "@/lib/pricing";
import { EMAIL, servicePath } from "@/lib/site-links";
import { localize } from "@/lib/i18n-paths";
import { SERVICES_EN } from "@/components/wevtex/homeContent.en";

/**
 * Root layout of the English site (/en/...). A root layout of its own, rather
 * than a nested one, so every English page is served with <html lang="en">.
 * Same fonts, same consent gate and same organisation entity (@id) as the
 * French layout; the words and inLanguage are English.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wevtex | Web Design & Apps Agency in Casablanca, Morocco",
    template: "%s | Wevtex",
  },
  description:
    "Wevtex, web design agency in Casablanca: business websites, online stores, mobile apps, SEO and automation for businesses in Morocco and abroad.",
  keywords: [
    "web design agency Morocco",
    "web design Casablanca",
    "digital marketing agency Morocco",
    "website prices in Morocco",
    "ecommerce website Morocco",
    "mobile app development Morocco",
    "SEO agency Morocco",
    "Google Maps local SEO",
    "WhatsApp chatbot",
    "Wevtex",
  ],
  openGraph: {
    title: "Wevtex | Web Design & Apps Agency in Casablanca, Morocco",
    description:
      "Casablanca-based agency: fast websites, online stores, apps, SEO and automation for Moroccan and international businesses.",
    url: `${SITE_URL}/en`,
    siteName: "Wevtex",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Wevtex" }],
    locale: "en_US",
    alternateLocale: ["fr_MA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wevtex | Web Design & Apps Agency in Casablanca, Morocco",
    description:
      "Casablanca-based agency: fast websites, online stores, apps, SEO and automation for Moroccan and international businesses.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ZHmabHHYvz9mL-jRnCS5rbLZRwUBid0YoNBHQyckBP8",
  },
  icons: {
    icon: [
      { url: "/images/logo/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/images/logo/icon-32.png",
    apple: { url: "/images/logo/apple-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  /* The same organisation as the French layout (same @id), described in
     English. Every fact here is stated somewhere on the site. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}#organization`,
    name: "Wevtex",
    alternateName: "Wevtex web design agency",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: abs("/images/logo/wevtex-mark.png"), caption: "Wevtex" },
    image: abs("/images/og-image.jpg"),
    description:
      "Web design and digital marketing agency based in Casablanca: business websites, online stores, mobile apps, SEO and automation for businesses in Morocco and abroad.",
    telephone: "+212783180806",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
    },
    sameAs: ["https://www.instagram.com/wevtex.agency/"],
    areaServed: [
      { "@type": "Country", name: "Morocco" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Belgium" },
      { "@type": "Country", name: "Canada" },
    ],
    knowsLanguage: ["fr", "ar", "en"],
    inLanguage: "en",
    priceRange: PRICE_RANGE_EN,
    currenciesAccepted: "MAD",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "14:00" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wevtex services",
      itemListElement: SERVICES_EN.map((sv) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: sv.name,
          description: sv.desc,
          url: abs(localize(servicePath(sv.slug), "en")),
          provider: { "@id": `${SITE_URL}#organization` },
          areaServed: { "@type": "Country", name: "Morocco" },
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212783180806",
      contactType: "sales",
      availableLanguage: ["English", "French", "Arabic"],
      areaServed: "MA",
    },
  };

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/en#website`,
    url: `${SITE_URL}/en`,
    name: "Wevtex",
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}#organization` },
  };

  return (
    <html lang="en" className={fontVars}>
      <body id="scrool" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }} />
        <a href="#main" className="skip-link">Skip to content</a>
        <LocaleProvider locale="en">
          <SmoothScroll>{children}</SmoothScroll>
          <AnalyticsConsent gaId={GA_ID} />
        </LocaleProvider>
      </body>
    </html>
  );
}

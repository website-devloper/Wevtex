import type { Metadata, Viewport } from "next";
import { serializeJsonLd } from "@/components/seo/JsonLd";
import { Onest, Space_Mono } from "next/font/google";
import { AnalyticsConsent } from "../components/wevtex/AnalyticsConsent";
import { SmoothScroll } from "../components/wevtex/SmoothScroll";
import { SITE_URL, abs } from "@/lib/seo";
import { PRICE_RANGE } from "@/lib/pricing";
import { servicePath } from "@/lib/site-links";
import { SERVICES } from "../components/wevtex/homeContent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Self-hosted via next/font (no render-blocking Google Fonts request, no layout shift).
// Design system: Onest for display + body, Space Mono for eyebrows / labels / data.
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-face",
  display: "swap",
});
const fontVars = `${onest.variable} ${spaceMono.variable}`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wevtex | Agence web & applications — Casablanca, Maroc",
    template: "%s | Agence Wevtex",
  },
  description: "Wevtex, agence web à Casablanca : sites vitrines, boutiques en ligne, applications, SEO et automatisation pour les entreprises au Maroc.",
  keywords: ["agence web Maroc", "création site web Casablanca", "agence digitale Maroc", "prix site web Maroc", "e-commerce Maroc", "développement application mobile", "référencement naturel SEO Maroc", "Google Maps référencement local", "chatbot WhatsApp", "Wevtex"],
  openGraph: {
    title: "Wevtex | Agence web & applications — Casablanca, Maroc",
    description: "Agence basée à Casablanca : sites rapides, boutiques en ligne, applications, SEO et automatisation pour les entreprises marocaines et internationales.",
    url: SITE_URL,
    siteName: 'Agence Wevtex',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Agence Wevtex',
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wevtex | Agence web & applications — Casablanca, Maroc",
    description: "Agence basée à Casablanca : sites rapides, boutiques en ligne, applications, SEO et automatisation pour les entreprises marocaines et internationales.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* Organisation / local business. Everything here is stated somewhere on the
     site — the hours come from the contact page, the catalogue from the service
     list, the price band from the cheapest published tier. Nothing is invented,
     and no geo coordinates are claimed without a verified street address. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}#organization`,
    name: "Wevtex",
    alternateName: "Agence Wevtex",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: abs("/images/logo/wevtex-mark-ink.png"),
      caption: "Wevtex",
    },
    image: abs("/images/og-image.jpg"),
    description:
      "Agence web basée à Casablanca : sites vitrines, boutiques en ligne, applications, SEO et automatisation pour les entreprises au Maroc et à l'international.",
    telephone: "+212783180806",
    email: "hello@wevtex.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
      addressCountry: "MA",
    },
    sameAs: ["https://www.instagram.com/wevtex.agency/"],
    areaServed: [
      { "@type": "Country", name: "Maroc" },
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Belgique" },
      { "@type": "Country", name: "Canada" },
    ],
    knowsLanguage: ["fr", "ar", "en"],
    inLanguage: "fr",
    /* Was "$$$", which reads as expensive against a published entry price of
       990 DH. */
    priceRange: PRICE_RANGE,
    currenciesAccepted: "MAD",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations Wevtex",
      itemListElement: SERVICES.map((sv) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: sv.name,
          description: sv.desc,
          url: abs(servicePath(sv.slug)),
          provider: { "@id": `${SITE_URL}#organization` },
          areaServed: { "@type": "Country", name: "Maroc" },
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212783180806",
      contactType: "sales",
      availableLanguage: ["French", "Arabic", "English"],
      areaServed: "MA",
    },
  };

  /* A WebSite entity so the site itself is a named node crawlers can attach
     pages to, rather than only the organisation behind it. */
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "Wevtex",
    inLanguage: "fr",
    publisher: { "@id": `${SITE_URL}#organization` },
  };

  return (
    <html lang="fr" className={fontVars}>
      {/* Browser extensions (ColorZilla, Grammarly, etc.) inject attributes on
          body before hydration; this scopes the warning away from that one node. */}
      <body id='scrool' suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
        />
        <a href="#main" className="skip-link">Aller au contenu</a>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <AnalyticsConsent gaId={GA_ID} />
      </body>
    </html>
  );
}

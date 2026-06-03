import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScroll } from "../components/wevtex/SmoothScroll";
import { ThemeProvider } from "./ThemeContext";
import { SITE_URL, abs } from "@/lib/seo";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wevtex | Web & App Development Agency — Casablanca, Morocco & Worldwide",
    template: "%s | Wevtex IT Agency",
  },
  description: "Wevtex is a Casablanca-based web & app development agency building fast websites, online stores, SEO/GEO and automation for businesses across Morocco and worldwide.",
  keywords: ["agence web Maroc", "création site web Casablanca", "web development agency", "site web Maroc prix", "e-commerce Maroc", "mobile app development", "SEO services", "GEO targeting", "secure hosting", "Wevtex"],
  openGraph: {
    title: "Wevtex | Web & App Development Agency — Casablanca, Morocco & Worldwide",
    description: "Casablanca-based agency delivering fast websites, online stores, SEO/GEO and automation for businesses across Morocco and worldwide.",
    url: SITE_URL,
    siteName: 'Wevtex Agency',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wevtex IT Agency',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wevtex | Web & App Development Agency — Casablanca, Morocco & Worldwide",
    description: "Casablanca-based agency delivering fast websites, online stores, SEO/GEO and automation for businesses across Morocco and worldwide.",
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
  icons: {
    icon: [
      { url: "/images/logo/favicon.png", sizes: "32x32" },
      { url: "/images/logo/favicon.png", sizes: "192x192" },
      { url: "/images/logo/favicon.png", sizes: "512x512" },
    ],
    shortcut: "/images/logo/favicon.png",
    apple: "/images/logo/favicon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "name": "Wevtex",
    "url": SITE_URL,
    "logo": abs("/images/logo/favicon.png"),
    "image": abs("/images/og-image.jpg"),
    "description": "Casablanca-based web & app development agency building fast websites, online stores, SEO/GEO and automation for businesses across Morocco and worldwide.",
    "telephone": "+212687633774",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casablanca",
      "addressCountry": "MA"
    },
    "sameAs": [
      "https://www.instagram.com/wevtex.agency/"
    ],
    "areaServed": ["MA", "US", "GB", "Worldwide"],
    "priceRange": "$$$"
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id='scrool'>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}

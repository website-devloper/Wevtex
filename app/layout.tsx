import type { Metadata, Viewport } from "next";
import { Onest, Space_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScroll } from "../components/wevtex/SmoothScroll";
import { ThemeProvider } from "./ThemeContext";
import { SITE_URL, abs } from "@/lib/seo";

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
  description: "Wevtex est une agence web basée à Casablanca : sites vitrines, boutiques en ligne, applications, SEO et automatisation pour les entreprises au Maroc et à l'international.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "name": "Wevtex",
    "url": SITE_URL,
    "logo": abs("/images/logo/wevtex-mark-ink.png"),
    "image": abs("/images/og-image.jpg"),
    "description": "Agence web basée à Casablanca : sites vitrines, boutiques en ligne, applications, SEO et automatisation pour les entreprises au Maroc et à l'international.",
    "telephone": "+212687633774",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casablanca",
      "addressCountry": "MA"
    },
    "sameAs": [
      "https://www.instagram.com/wevtex.agency/"
    ],
    "areaServed": ["MA", "FR", "BE", "CA", "Worldwide"],
    "inLanguage": "fr",
    "priceRange": "$$$"
  };

  return (
    <html lang="fr" className={fontVars}>
      {/* Browser extensions (ColorZilla, Grammarly, etc.) inject attributes on
          body before hydration; this scopes the warning away from that one node. */}
      <body id='scrool' suppressHydrationWarning>
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

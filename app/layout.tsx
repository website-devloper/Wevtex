import type { Metadata, Viewport } from "next";
import { SmoothScroll } from "../components/wevtex/SmoothScroll";
import { ThemeProvider } from "./ThemeContext";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://wevtex.com'),
  title: {
    default: "Wevtex | Enterprise Web & App Development Agency USA & UK",
    template: "%s | Wevtex IT Agency",
  },
  description: "Wevtex is a global IT agency specializing in high-performance web development, mobile apps, advanced SEO/GEO, secure hosting, and IT support for businesses in the US, UK, and worldwide.",
  keywords: ["web development agency", "mobile app development", "enterprise SEO services", "GEO targeting", "secure hosting", "IT support", "USA", "UK", "global IT agency", "Wevtex"],
  openGraph: {
    title: "Wevtex | Enterprise Web & App Development Agency USA & UK",
    description: "Global IT agency delivering scalable web apps, mobile solutions, SEO/GEO, and managed IT support for businesses scaling in the US and UK.",
    url: 'https://wevtex.com',
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
    title: "Wevtex | Enterprise Web & App Development Agency USA & UK",
    description: "Global IT agency delivering scalable web apps, mobile solutions, SEO/GEO, and managed IT support for businesses scaling in the US and UK.",
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
    "@type": "ITUtility",
    "name": "Wevtex",
    "url": "https://wevtex.com",
    "logo": "https://wevtex.com/images/logo/favicon.png",
    "image": "https://wevtex.com/images/og-image.jpg",
    "description": "Global IT agency delivering scalable web apps, mobile solutions, SEO/GEO, and managed IT support for businesses scaling in the US and UK.",
    "telephone": "+212783180806",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Casablanca",
      "addressCountry": "MA"
    },
    "sameAs": [
      "https://www.instagram.com/wevtex.agency/"
    ],
    "areaServed": ["US", "GB", "Worldwide"],
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
    </html>
  );
}

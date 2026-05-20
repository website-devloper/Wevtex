import type { Metadata } from "next";
import { MagneticCursor } from "../components/aura/MagneticCursor";

export const metadata: Metadata = {
  title: {
    default: "Wevtex — Web Development, Desktop Applications & Digital Strategy",
    template: "%s | Wevtex Agency",
  },
  description: "Wevtex helps businesses in Morocco and the MENA region grow online by building high-converting websites, web applications, desktop software, and digital strategies — faster and smarter than anyone else.",
  keywords: ["web development", "desktop applications", "digital strategy", "web agency Morocco", "Casablanca", "MENA", "Next.js", "Electron", "SaaS"],
  openGraph: {
    title: "Wevtex — Web Development, Desktop Applications & Digital Strategy",
    description: "High-converting websites, web applications, and desktop software that get clients, sell products, and streamline operations.",
    type: "website",
    locale: "en_US",
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
        <MagneticCursor />
        {children}
      </body>
    </html>
  );
}

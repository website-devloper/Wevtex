import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/fontawesome.css";
import "../styles/themify-icons.css";
import "../styles/animate.css";
import "../styles/cursor.css";
import "../styles/custom-font.css";
import "../styles/main.css";

export const metadata: Metadata = {
  title: {
    default: "Innomax — Enterprise IT Solutions & Digital Agency",
    template: "%s | Innomax IT Agency",
  },
  description: "Your dedicated partner for cloud infrastructure, custom software, data analytics, and IT consulting. We engineer scalable digital solutions that drive measurable growth.",
  keywords: ["IT agency", "cloud infrastructure", "software development", "data analytics", "digital transformation", "IT consulting"],
  openGraph: {
    title: "Innomax — Enterprise IT Solutions & Digital Agency",
    description: "We engineer scalable digital solutions that drive measurable growth.",
    type: "website",
    locale: "en_US",
  },
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
      </head>
      <body id='scrool'>
        {children}
      </body>
    </html>
  );
}

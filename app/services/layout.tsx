import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Dev, E-commerce, SEO & Automation | Wevtex",
  description: "Wevtex services: custom web development, online stores, WordPress, ERP, automation, AI chatbots, SEO/GEO and UX/UI design — for businesses in Morocco and worldwide.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Web Dev, E-commerce, SEO & Automation | Wevtex",
    description: "Custom web development, online stores, SEO/GEO, automation and design for businesses in Morocco and worldwide.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

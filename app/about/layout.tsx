import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wevtex | Casablanca Web & App Development Agency",
  description: "Learn about Wevtex, a Casablanca-based web & app development agency building fast websites, online stores, SEO and automation for businesses across Morocco and worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Wevtex | Casablanca Web & App Development Agency",
    description: "A Casablanca-based web & app development agency serving clients across Morocco and worldwide.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

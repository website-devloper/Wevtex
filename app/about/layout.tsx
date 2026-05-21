import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wevtex | Global IT Agency & Development Studio",
  description: "Learn about Wevtex, a global IT agency building high-performance web applications, mobile apps, and delivering enterprise SEO and IT support worldwide.",
  openGraph: {
    title: "About Wevtex | Global IT Agency & Development Studio",
    description: "Learn about Wevtex, a global IT agency building high-performance web applications, mobile apps, and delivering enterprise SEO and IT support worldwide.",
    url: 'https://wevtex.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

import type { Metadata } from "next";
import { BlogIndexView } from "@/components/wevtex/BlogIndexView";
import { getPosts } from "@/lib/content";
import { postPath, toCard } from "@/lib/blog-utils";
import { JsonLd, breadcrumb } from "@/components/seo/JsonLd";
import { abs, SITE_URL } from "@/lib/seo";
import { languageAlternates } from "@/lib/i18n-paths";

export const metadata: Metadata = {
  title: { absolute: "Blog | Website, SEO & AI Advice for Morocco | WEVTEX" },
  description:
    "Website prices in Morocco, choosing an agency, SEO, WhatsApp chatbots: clear answers with real figures, written by a Casablanca studio.",
  keywords: ["digital marketing blog", "website advice", "seo tips morocco", "Wevtex blog"],
  alternates: { canonical: "/en/blog", languages: languageAlternates("/blog") },
  openGraph: {
    title: "Blog | Website, SEO & AI Advice for Morocco | WEVTEX",
    description: "Prices, timelines, SEO, automation: clear answers with real figures for businesses in Morocco.",
    url: "/en/blog",
    type: "website",
    locale: "en_US",
  },
};

export default async function EnglishBlogPage() {
  const posts = await getPosts("en");
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${abs("/en/blog")}#blog`,
    name: "Wevtex blog",
    url: abs("/en/blog"),
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: abs(postPath(p.slug, "en")),
      datePublished: p.publishedAt,
    })),
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <JsonLd data={breadcrumb([{ name: "Blog", path: "/en/blog" }], "en")} />
      <BlogIndexView posts={posts.map(toCard)} />
    </>
  );
}

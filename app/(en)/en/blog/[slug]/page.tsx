import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/wevtex/BlogPostView";
import { POST_SLUGS_LIST_EN, getPostEn } from "@/lib/en/blog-data";
import { postPath, toCard } from "@/lib/blog-utils";
import { POST_SLUGS_EN, languageAlternates } from "@/lib/i18n-paths";
import { JsonLd, articleSchema, breadcrumb, faqSchema } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return POST_SLUGS_LIST_EN.map((slug) => ({ slug }));
}

/** The French post this one mirrors. */
const frSlugOf = (slug: string) => Object.keys(POST_SLUGS_EN).find((fr) => POST_SLUGS_EN[fr] === slug)!;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostEn(slug);
  if (!post) return {};
  const path = postPath(post.slug, "en");
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    keywords: [post.keyword],
    alternates: { canonical: path, languages: languageAlternates(`/blog/${frSlugOf(post.slug)}`) },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: path,
      type: "article",
      locale: "en_US",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Wevtex"],
    },
  };
}

export default async function EnglishBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostEn(slug);
  if (!post) notFound();
  const path = postPath(post.slug, "en");

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: post.title,
          description: post.metaDescription,
          path,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          keywords: [post.keyword],
          locale: "en",
        })}
      />
      {/* The FAQ is rendered visibly on the post; these are the same answers. */}
      {post.faqs && post.faqs.length > 0 && <JsonLd data={faqSchema(post.faqs, "en")} />}
      <JsonLd
        data={breadcrumb(
          [
            { name: "Blog", path: "/en/blog" },
            { name: post.title, path },
          ],
          "en",
        )}
      />
      <BlogPostView
        post={post}
        related={post.relatedPosts.flatMap((s) => {
          const r = getPostEn(s);
          return r ? [toCard(r)] : [];
        })}
      />
    </>
  );
}

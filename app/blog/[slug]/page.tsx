import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/wevtex/BlogPostView";
import { POST_SLUGS, getPost, postPath } from "@/lib/blog-data";
import { JsonLd, articleSchema, breadcrumb, faqSchema } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = postPath(post.slug);
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    keywords: [post.keyword],
    alternates: { canonical: path },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: path,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Wevtex"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const path = postPath(post.slug);

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
        })}
      />
      {/* The FAQ is rendered visibly on the post; these are the same answers. */}
      {post.faqs && post.faqs.length > 0 && <JsonLd data={faqSchema(post.faqs)} />}
      <JsonLd
        data={breadcrumb([
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ])}
      />
      <BlogPostView post={post} />
    </>
  );
}

import type { Post } from "./blog-data";

/**
 * The light half of the blog: helpers and the card shape the client views
 * need. Kept apart from lib/blog-data so that importing a date formatter does
 * not pull every post's full text into the browser. The server pages build
 * the cards and pass them down as props.
 */

export const postPath = (slug: string) => `/blog/${slug}`;

/** "10 septembre 2026", the visible date, in French. */
export const formatPostDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/** What a post card shows: no body, no FAQ. */
export type PostCard = Pick<Post, "slug" | "title" | "excerpt" | "answer" | "category" | "readingMinutes" | "publishedAt">;

export const toCard = (p: Post): PostCard => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  answer: p.answer,
  category: p.category,
  readingMinutes: p.readingMinutes,
  publishedAt: p.publishedAt,
});

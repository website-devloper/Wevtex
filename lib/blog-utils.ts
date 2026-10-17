import type { Post } from "./blog-data";
import type { Locale } from "./i18n";

/**
 * The light half of the blog: helpers and the card shape the client views
 * need. Kept apart from lib/blog-data so that importing a date formatter does
 * not pull every post's full text into the browser. The server pages build
 * the cards and pass them down as props.
 */

export const postPath = (slug: string, locale: Locale = "fr") =>
  locale === "en" ? `/en/blog/${slug}` : `/blog/${slug}`;

/** "10 septembre 2026" in French, "10 September 2026" in English. */
export const formatPostDate = (iso: string, locale: Locale = "fr") =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale === "en" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/** What a post card shows: no body, no FAQ. */
export type PostCard = Pick<
  Post,
  "slug" | "title" | "excerpt" | "answer" | "category" | "readingMinutes" | "publishedAt" | "cover"
>;

export const toCard = (p: Post): PostCard => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  answer: p.answer,
  category: p.category,
  readingMinutes: p.readingMinutes,
  publishedAt: p.publishedAt,
  cover: p.cover,
});

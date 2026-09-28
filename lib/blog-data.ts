/**
 * Blog content model.
 *
 * The posts themselves live in content/fr/posts and content/en/posts, written
 * in the dashboard at /keystatic and read by lib/content.ts. This file keeps
 * the shape they are rendered in, which BlogPostView and blog-utils both
 * depend on.
 *
 * Writing rules the posts follow (from the SEO/GEO brief):
 *  - `answer` states the reply to the post's question in 1–3 sentences, before
 *    any build-up, so an answer engine can quote it whole.
 *  - Each H2 section stands on its own if quoted without the ones above it.
 *  - Every price, delay and figure is one the site already publishes.
 *  - One primary keyword per post, and no two posts share one — checked at
 *    build time in lib/content.ts.
 */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "links"; items: { label: string; href: string }[] };

export type Post = {
  slug: string;
  /** H1 — the question or promise, as a reader would type it. */
  title: string;
  /** Unique <title>. */
  metaTitle: string;
  /** Unique meta description, ≤ 155 characters. */
  metaDescription: string;
  /** The one keyword this post targets. Never shared with another page. */
  keyword: string;
  /** Card text on /blog. */
  excerpt: string;
  /** The answer-first opening, rendered as the lede and reused nowhere else. */
  answer: string;
  category: string;
  /** ISO date. Shown on the page and sent in the Article schema. */
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  /** The service page this post links to — one internal link per post, minimum. */
  relatedService: string;
  /** Other posts to surface at the end. */
  relatedPosts: string[];
  body: PostBlock[];
  /** Optional FAQ block, rendered visibly and mirrored in FAQPage schema. */
  faqs?: { q: string; a: string }[];
};

export { postPath, formatPostDate } from "./blog-utils";

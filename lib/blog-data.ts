/**
 * Blog content model.
 *
 * Posts are structured data, not hardcoded JSX — same pattern as the services,
 * cities and sectors: one typed entry per post, rendered by a single view. That
 * keeps the markup identical across posts and lets metadata, Article JSON-LD,
 * the sitemap and the index page all read from the same source.
 *
 * Writing rules these posts follow (from the SEO/GEO brief):
 *  - `answer` states the reply to the post's question in 1–3 sentences, before
 *    any build-up, so an answer engine can quote it whole.
 *  - Each H2 section stands on its own if quoted without the ones above it.
 *  - Every price, delay and figure is one the site already publishes; nothing
 *    is invented, and no client name appears that isn't in projects-data.
 *  - One primary keyword per post, and no two posts share one.
 */

import { POSTS_A } from "./blog/posts-a";
import { POSTS_B } from "./blog/posts-b";
import { POSTS_C } from "./blog/posts-c";
import { fillPricesDeep } from "./pricing";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

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

/* Prices in the posts are {{prix:…}} tokens, resolved from lib/pricing.ts. */
export const POSTS: Post[] = fillPricesDeep([...POSTS_A, ...POSTS_B, ...POSTS_C]);

export const POST_SLUGS = POSTS.map((p) => p.slug);

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

/** Newest first — the order the index page renders. */
export const POSTS_ORDERED = [...POSTS].sort((a, b) =>
  (b.updatedAt ?? b.publishedAt).localeCompare(a.updatedAt ?? a.publishedAt),
);

export { postPath, formatPostDate } from "./blog-utils";

/* Two posts targeting the same term would compete with each other, so the
   keyword set is checked at module load rather than left to review. */
const seen = new Set<string>();
for (const p of POSTS) {
  if (seen.has(p.keyword)) {
    throw new Error(`Two blog posts target the same keyword: "${p.keyword}" (${p.slug}).`);
  }
  seen.add(p.keyword);
}

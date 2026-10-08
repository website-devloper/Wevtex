/**
 * The content layer: everything the dashboard owns, read from content/.
 *
 * Server-only — it touches the filesystem. Pages are Server Components, so they
 * await these directly and the result is baked into the static build.
 *
 * Markdoc is converted back into the PostBlock shape BlogPostView already
 * renders, rather than the renderer being rewritten: the markup a reader gets
 * is unchanged by the move, which is what makes the swap provable.
 *
 * The invariants that used to throw at module load in lib/blog-data.ts live
 * here now, because an editor can break them from the dashboard: two posts on
 * one keyword, a duplicate slug, a post published in only one language.
 */

import "server-only";
import { createReader } from "@keystatic/core/reader";
import config from "../keystatic.config";
import type { Post, PostBlock } from "./blog-data";
import { fillPricesDeep, formatAmount, PACKS } from "./pricing";
import type { Service, PriceTier } from "./services-data";
import { SERVICE_SEO } from "./service-seo";
import { SERVICE_SEO_EN } from "./en/service-seo";
import type { Locale } from "./i18n";

const reader = createReader(process.cwd(), config);

const collectionFor = (locale: Locale) => (locale === "fr" ? reader.collections.posts : reader.collections.postsEn);

/* ------------------------------------------------------------- markdoc -- */

type Node = {
  type: string;
  tag?: string;
  attributes?: Record<string, any>;
  children?: Node[];
};

/** Every piece of text under a node, in order. */
function textOf(node: Node | undefined): string {
  if (!node) return "";
  if (node.type === "text") return String(node.attributes?.content ?? "");
  if (node.type === "softbreak") return " ";
  return (node.children ?? []).map(textOf).join("");
}

const cellsOf = (row: Node) => (row.children ?? []).map(textOf);

/** A native Markdoc table: tag:table > table > thead/tbody > tr > th/td. */
function tableBlock(tag: Node): PostBlock | null {
  const table = (tag.children ?? []).find((c) => c.type === "table");
  if (!table) return null;
  const head = (table.children ?? []).find((c) => c.type === "thead");
  const body = (table.children ?? []).find((c) => c.type === "tbody");
  const headRow = (head?.children ?? [])[0];
  return {
    type: "table",
    head: headRow ? cellsOf(headRow) : [],
    rows: (body?.children ?? []).map(cellsOf),
  };
}

/** Markdoc document -> the blocks BlogPostView renders. */
function toBlocks(doc: Node): PostBlock[] {
  const out: PostBlock[] = [];

  for (const node of doc.children ?? []) {
    switch (node.type) {
      case "paragraph": {
        const text = textOf(node).trim();
        if (text) out.push({ type: "p", text });
        break;
      }
      case "heading": {
        const level = Number(node.attributes?.level ?? 2);
        out.push({ type: level >= 3 ? "h3" : "h2", text: textOf(node).trim() });
        break;
      }
      case "list": {
        const items = (node.children ?? []).map((li) => textOf(li).trim()).filter(Boolean);
        if (items.length) out.push({ type: node.attributes?.ordered ? "ol" : "ul", items });
        break;
      }
      case "tag": {
        if (node.tag === "note") out.push({ type: "note", text: textOf(node).trim() });
        else if (node.tag === "links") out.push({ type: "links", items: node.attributes?.items ?? [] });
        else if (node.tag === "table") {
          const block = tableBlock(node);
          if (block) out.push(block);
        }
        break;
      }
      default:
        break;
    }
  }

  return out;
}

/* --------------------------------------------------------------- posts -- */

async function readPosts(locale: Locale): Promise<Post[]> {
  const entries = await collectionFor(locale).all();

  const posts = await Promise.all(
    entries.map(async ({ slug, entry }) => {
      const e = entry as any;
      const { node } = (await e.content()) as { node: Node };
      return {
        slug,
        title: e.title,
        metaTitle: e.seo.metaTitle,
        metaDescription: e.seo.metaDescription,
        keyword: e.seo.keyword,
        excerpt: e.excerpt,
        answer: e.answer,
        category: e.category,
        publishedAt: e.publishedAt,
        updatedAt: e.updatedAt ?? undefined,
        readingMinutes: e.readingMinutes,
        relatedService: e.relatedService,
        relatedPosts: (e.relatedPosts ?? []).filter(Boolean),
        body: toBlocks(node),
        faqs: (e.faqs ?? []).length ? e.faqs : undefined,
        /** Not part of Post: used to pair the two languages. */
        pairKey: e.pairKey,
        ogImage: e.seo.ogImage ?? undefined,
        noindex: e.seo.noindex ?? false,
      } as Post & { pairKey: string; ogImage?: string; noindex: boolean };
    }),
  );

  // A price written as {{prix:…}} in the dashboard resolves the same way it
  // does in code, and an unknown token still fails the build.
  return fillPricesDeep(posts, locale);
}

/** Checked once per locale, because the dashboard can break these. */
function assertSound(posts: (Post & { pairKey: string })[], locale: Locale) {
  const keywords = new Map<string, string>();
  const slugs = new Set<string>();

  for (const p of posts) {
    const clash = keywords.get(p.keyword);
    if (clash) {
      throw new Error(
        `Two ${locale.toUpperCase()} posts target the keyword "${p.keyword}": ${clash} and ${p.slug}. ` +
          `Give one of them its own keyword — they compete with each other otherwise.`,
      );
    }
    keywords.set(p.keyword, p.slug);

    if (slugs.has(p.slug)) throw new Error(`Duplicate ${locale} post slug: ${p.slug}`);
    slugs.add(p.slug);
  }
}

const cache = new Map<Locale, Promise<(Post & { pairKey: string })[]>>();

/** All posts in a language, newest first. */
export function getPosts(locale: Locale = "fr") {
  if (!cache.has(locale)) {
    cache.set(
      locale,
      readPosts(locale).then((posts) => {
        const sound = posts as (Post & { pairKey: string })[];
        assertSound(sound, locale);
        return [...sound].sort((a, b) => (b.updatedAt ?? b.publishedAt).localeCompare(a.updatedAt ?? a.publishedAt));
      }),
    );
  }
  return cache.get(locale)!;
}

export async function getPost(slug: string, locale: Locale = "fr") {
  return (await getPosts(locale)).find((p) => p.slug === slug);
}

export async function getPostSlugs(locale: Locale = "fr") {
  return (await getPosts(locale)).map((p) => p.slug);
}

/**
 * French slug -> English slug, built from the pairKey both versions carry.
 * Throws on an entry that exists in only one language, the same check the
 * hand-written map in lib/i18n-paths.ts used to make at build time.
 */
export async function getPostPairs(): Promise<Record<string, string>> {
  const [fr, en] = await Promise.all([getPosts("fr"), getPosts("en")]);
  const byKey = new Map(en.map((p) => [p.pairKey, p.slug]));

  const pairs: Record<string, string> = {};
  for (const p of fr) {
    const match = byKey.get(p.pairKey);
    if (!match) throw new Error(`The post "${p.slug}" has no English version (pairKey "${p.pairKey}").`);
    pairs[p.slug] = match;
    byKey.delete(p.pairKey);
  }
  for (const [key, slug] of byKey) {
    throw new Error(`The English post "${slug}" has no French version (pairKey "${key}").`);
  }
  return pairs;
}

/* ------------------------------------------------------------ projects -- */

/**
 * Réalisations.
 *
 * The English entry carries only the translated copy and names its French
 * twin; everything structural — the links, the year, the order, the screenshot
 * — is read from that twin. That is the same no-drift rule the old
 * lib/en/projects-data.ts enforced in code, kept here so an editor cannot
 * break it from the dashboard.
 */
export type ProjectEntry = {
  title: string;
  slug: string;
  clientUrl: string;
  liveUrl: string;
  category: string;
  year: number;
  featured: boolean;
  order: number;
  description: string;
  stack: string[];
  metricValue: string;
  metricLabel: string;
  screenshot: string;
  metaDescription: string;
  /** The French slug, on both languages, so the pair can be resolved. */
  fr: string;
};

async function readProjects(locale: Locale): Promise<ProjectEntry[]> {
  const fr = await reader.collections.projects.all();
  const byFrenchSlug = new Map(fr.map((e) => [e.slug, e]));

  if (locale === "fr") {
    return fr.map(({ slug, entry }) => {
      const e = entry as any;
      return {
        ...e,
        slug,
        fr: slug,
        stack: [...(e.stack ?? [])],
        // The screenshots are named after the page, so a cleared field can
        // fall back rather than leaving a réalisation with no image.
        screenshot: e.screenshot || `/images/work/${slug}.webp`,
        metaDescription: e.seo.metaDescription,
      } as ProjectEntry;
    });
  }

  const en = await reader.collections.projectsEn.all();
  return en.map(({ slug, entry }) => {
    const e = entry as any;
    const base = byFrenchSlug.get(e.frenchProject);
    if (!base) {
      throw new Error(
        `The English project "${slug}" points at "${e.frenchProject}", which does not exist. ` +
          `Open it in the dashboard and pick its French version again.`,
      );
    }
    const b = base.entry as any;
    return {
      title: e.title,
      slug,
      fr: base.slug,
      // Structural fields always come from the French entry.
      clientUrl: b.clientUrl,
      liveUrl: b.liveUrl,
      year: b.year,
      featured: b.featured,
      order: b.order,
      screenshot: b.screenshot || `/images/work/${base.slug}.webp`,
      // Translated copy.
      category: e.category,
      description: e.description,
      stack: [...(e.stack ?? [])],
      metricValue: e.metricValue,
      metricLabel: e.metricLabel,
      metaDescription: e.seo.metaDescription,
    } as ProjectEntry;
  });
}

const projectCache = new Map<Locale, Promise<ProjectEntry[]>>();

/** All projects in a language, in the display order set in the dashboard. */
export function getProjects(locale: Locale = "fr") {
  if (!projectCache.has(locale)) {
    projectCache.set(
      locale,
      readProjects(locale).then((list) => fillPricesDeep([...list].sort((a, b) => a.order - b.order), locale)),
    );
  }
  return projectCache.get(locale)!;
}

export async function getProject(slug: string, locale: Locale = "fr") {
  return (await getProjects(locale)).find((p) => p.slug === slug);
}

export async function getProjectSlugs(locale: Locale = "fr") {
  return (await getProjects(locale)).map((p) => p.slug);
}

/** French slug -> English slug, from the twin each English entry names. */
export async function getProjectPairs(): Promise<Record<string, string>> {
  const en = await getProjects("en");
  const fr = await getProjects("fr");
  const pairs: Record<string, string> = {};
  for (const p of en) pairs[p.fr] = p.slug;
  for (const p of fr) {
    if (!pairs[p.slug]) throw new Error(`The project "${p.slug}" has no English version.`);
  }
  return pairs;
}

/* ------------------------------------------------- reviews and clients -- */

export type Review = {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  text: string;
  source: "google" | "whatsapp" | "email" | "direct";
  sourceUrl?: string;
  date?: string;
  featured: boolean;
};

/**
 * Real client reviews, newest first. Not translated: a review is shown in the
 * language it was written in, in both versions of the site.
 */
export async function getReviews(): Promise<Review[]> {
  const entries = await reader.collections.reviews.all();
  return entries
    .map(({ slug, entry }) => {
      const e = entry as any;
      return {
        id: slug,
        author: e.author,
        avatar: e.avatar ?? undefined,
        rating: Number(e.rating ?? 5),
        text: e.text,
        source: e.source ?? "google",
        sourceUrl: e.sourceUrl ?? undefined,
        date: e.date ?? undefined,
        featured: !!e.featured,
      } as Review;
    })
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export type ClientLogo = { name: string; logo: string; order: number };

/** The logo wall, in the order set in the dashboard. */
export async function getClients(): Promise<ClientLogo[]> {
  const entries = await reader.collections.clients.all();
  return entries
    .map(({ entry }) => {
      const e = entry as any;
      return { name: e.name, logo: e.logo, order: Number(e.order ?? 50) };
    })
    .sort((a, b) => a.order - b.order);
}


/* ------------------------------------------------------------- services -- */

/**
 * Service pages.
 *
 * The wording comes from the dashboard; the formules come from the Tarifs page
 * through PACKS, so a price is written once and read everywhere. The SEO extras
 * in lib/service-seo.ts (secondary keywords and the extra FAQs) are merged on
 * top, exactly as they were when the data lived in code.
 */
function tiersFor(serviceId: string, locale: Locale): PriceTier[] {
  return (PACKS[serviceId] ?? []).map((t) => ({
    name: t[locale].name,
    price: locale === "en" ? formatAmount(t.price, "en") : t.price,
    note: t[locale].note,
    features: [...t[locale].features],
    ...(t.featured ? { featured: true } : {}),
    ...(t.showFrom ? {} : { from: false }),
    ...(t.unit ? { unit: t.unit } : {}),
  }));
}

/** Drops the empty objects the dashboard writes for a section left blank. */
const presence = <T extends Record<string, any>>(value: T, has: (v: T) => boolean) => (has(value) ? value : undefined);

async function readServices(locale: Locale): Promise<Service[]> {
  const entries = await (locale === "fr" ? reader.collections.services : reader.collections.servicesEn).all();

  const services = entries
    .map(({ slug, entry }) => {
      const e = entry as any;
      const tiers = tiersFor(e.serviceId, locale);

      const service: Service = {
        slug: e.serviceId,
        name: e.name,
        keyword: e.keyword,
        metaTitle: e.seo.metaTitle,
        metaDescription: e.seo.metaDescription,
        eyebrow: e.eyebrow,
        h1: e.h1,
        h1Em: [...(e.h1Em ?? [])],
        intro: e.intro,
        includes: [...(e.includes ?? [])],
        outcomes: (e.outcomes ?? []).map((o: any) => ({ h: o.h, p: o.p })),
        tags: [...(e.tags ?? [])],
        faqs: (e.faqs ?? []).map((f: any) => ({ q: f.q, a: f.a })),
        demo: presence(e.demo ?? {}, (d) => !!d.title),
        featureSections: (e.featureSections ?? []).length
          ? (e.featureSections ?? []).map((f: any) => ({
              eyebrow: f.eyebrow,
              title: f.title,
              titleEm: [...(f.titleEm ?? [])],
              subtitle: f.subtitle || undefined,
              cards: (f.cards ?? []).map((c: any) => ({ title: c.title, desc: c.desc, checks: [...(c.checks ?? [])] })),
            }))
          : undefined,
        tech: presence(
          {
            title: e.tech?.title,
            titleEm: [...(e.tech?.titleEm ?? [])],
            subtitle: e.tech?.subtitle || undefined,
            groups: (e.tech?.groups ?? []).map((g: any) => ({
              label: g.label,
              desc: g.desc || undefined,
              items: [...(g.items ?? [])],
            })),
          },
          (t) => !!t.title,
        ),
        process: presence(
          {
            title: e.process?.title,
            titleEm: [...(e.process?.titleEm ?? [])],
            subtitle: e.process?.subtitle || undefined,
            steps: (e.process?.steps ?? []).map((st: any) => ({
              n: st.n,
              h: st.h,
              d: st.d,
              checks: [...(st.checks ?? [])],
            })),
          },
          (p) => !!p.title,
        ),
        sectors: presence(
          {
            title: e.sectors?.title,
            titleEm: [...(e.sectors?.titleEm ?? [])],
            subtitle: e.sectors?.subtitle || undefined,
            groups: (e.sectors?.groups ?? []).map((g: any) => ({ label: g.label, cases: [...(g.cases ?? [])] })),
          },
          (s) => !!s.title,
        ),
        pricing: tiers.length
          ? {
              title: e.pricingHead?.title ?? "",
              titleEm: [...(e.pricingHead?.titleEm ?? [])],
              subtitle: e.pricingHead?.subtitle || undefined,
              footnote: e.pricingHead?.footnote || undefined,
              tiers,
            }
          : undefined,
        whyUs: presence(
          {
            title: e.whyUs?.title,
            titleEm: [...(e.whyUs?.titleEm ?? [])],
            subtitle: e.whyUs?.subtitle || undefined,
            points: (e.whyUs?.points ?? []).map((p: any) => ({ h: p.h, p: p.p })),
          },
          (w) => !!w.title,
        ),
        /** Kept off the Service type: the page address in this language. */
        ...( { urlSlug: slug } as any ),
        order: e.order,
      } as Service & { urlSlug: string; order: number };

      return service as Service & { urlSlug: string; order: number };
    })
    .sort((a, b) => (a as any).order - (b as any).order);

  /* The questions from the search layer are already part of the content: they
     were merged in when it was exported, so an editor sees and owns them. Only
     the two fields that are not in the content are added here. */
  const table = locale === "fr" ? SERVICE_SEO : SERVICE_SEO_EN;
  const merged = services.map((s) => {
    const seo = table[s.slug];
    return seo ? { ...s, seoKeywords: seo.keywords, seoCityLabel: seo.cityLabel } : s;
  });
  return fillPricesDeep(merged, locale);
}

const serviceCache = new Map<Locale, Promise<Service[]>>();

/** Every service in a language, in the order set in the dashboard. */
export function getServices(locale: Locale = "fr") {
  if (!serviceCache.has(locale)) serviceCache.set(locale, readServices(locale));
  return serviceCache.get(locale)!;
}

/** Looked up by the address in the URL, not by the internal id. */
export async function getService(urlSlug: string, locale: Locale = "fr") {
  return (await getServices(locale)).find((s) => (s as any).urlSlug === urlSlug);
}

export async function getServiceSlugs(locale: Locale = "fr") {
  return (await getServices(locale)).map((s) => (s as any).urlSlug as string);
}

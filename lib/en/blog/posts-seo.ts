/**
 * The search sections, as blog posts — English.
 *
 * Mirrors lib/blog/posts-seo.ts: these answers used to sit at the bottom of
 * each service page and moved to the blog on 2026-09-27. Bodies are assembled
 * from lib/en/service-seo.ts, so the prose has one home; only the post's own
 * framing is written here. Each post targets a long-tail phrase, never the
 * keyword its service page targets.
 */

import type { Post, PostBlock } from "../../blog-data";
import { SERVICE_SEO_EN } from "../service-seo";
import { CITY_LINKS_EN } from "../../city-list";

const cityLinks = (label: string) =>
  CITY_LINKS_EN.slice(0, 6).map((c) => ({ label: `${label} in ${c.name}`, href: `/en/${c.slug}` }));

function body(slug: keyof typeof SERVICE_SEO_EN): PostBlock[] {
  const seo = SERVICE_SEO_EN[slug];
  const blocks: PostBlock[] = [];
  for (const sec of seo.sections) {
    blocks.push({ type: "h2", text: sec.h2 });
    for (const text of sec.paras) blocks.push({ type: "p", text });
    if (sec.bullets) blocks.push({ type: "ul", items: sec.bullets });
    if (sec.links) blocks.push({ type: "links", items: sec.links });
  }
  blocks.push({ type: "h2", text: `${seo.cityLabel}: where we work` });
  blocks.push({
    type: "p",
    text:
      "We are based in Casablanca and work across Morocco, over video and WhatsApp. " +
      "Each city has its own page, with the same published prices.",
  });
  blocks.push({ type: "links", items: cityLinks(seo.cityLabel) });
  return blocks;
}

const DATE = "2026-09-27";

type Meta = {
  slug: string;
  service: keyof typeof SERVICE_SEO_EN;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  excerpt: string;
  answer: string;
  category: string;
  readingMinutes: number;
  relatedPosts: string[];
};

const META: Meta[] = [
  {
    slug: "guide-to-building-a-website-in-morocco",
    service: "website-creation",
    title: "Building a website in Morocco: the complete guide",
    metaTitle: "Building a Website in Morocco: Complete Guide 2026 | WEVTEX",
    metaDescription:
      "Types of site, timelines, published prices, SEO, hosting and who owns the code: what to know before building a website in Morocco.",
    keyword: "guide to building a website in morocco",
    excerpt:
      "What a professional site includes, how long it takes, what it really costs, and what stays yours once it ships.",
    answer:
      "Building a website in Morocco comes down to three decisions: what kind of site, who builds it, and what you own at the end. This guide answers all three, with the prices published.",
    category: "Strategy",
    readingMinutes: 8,
    relatedPosts: ["how-much-does-a-website-cost-in-morocco", "business-website-or-online-store"],
  },
  {
    slug: "guide-to-seo-in-morocco",
    service: "seo",
    title: "SEO in Morocco, explained plainly",
    metaTitle: "SEO in Morocco: The Plain Guide | WEVTEX",
    metaDescription:
      "How SEO works in Morocco: keywords, content, technical work and real timelines, with what an agency actually does each month.",
    keyword: "how seo works in morocco",
    excerpt:
      "What an SEO agency actually does each month, what moves first, and how long the work takes to show on Google.",
    answer:
      "SEO means making your pages readable to Google and useful to the people searching for your trade. The first movements show around month three.",
    category: "SEO",
    readingMinutes: 7,
    relatedPosts: ["seo-in-morocco-where-to-start", "how-much-does-a-website-cost-in-morocco"],
  },
  {
    slug: "guide-to-local-seo-google-maps-morocco",
    service: "local-seo",
    title: "Local SEO and Google Maps in Morocco: being found nearby",
    metaTitle: "Local SEO and Google Maps in Morocco: The Guide | WEVTEX",
    metaDescription:
      "Google Business Profile, reviews, photos, citations and city pages: how to show up in Google's local pack in Morocco.",
    keyword: "local seo google maps morocco",
    excerpt:
      "How a well-kept Google profile makes the phone ring, and what to publish to stay ahead of the competitor down the street.",
    answer:
      "Local SEO turns on three things: a complete Google profile, a steady flow of reviews, and consistent citations in Moroccan directories. It is the fastest channel for a local business.",
    category: "SEO",
    readingMinutes: 6,
    relatedPosts: ["seo-in-morocco-where-to-start", "how-to-choose-a-web-design-agency-in-morocco"],
  },
  {
    slug: "guide-to-google-ads-meta-ads-morocco",
    service: "ads",
    title: "Google Ads and Meta Ads in Morocco: how it actually works",
    metaTitle: "Google Ads and Meta Ads in Morocco: The Guide | WEVTEX",
    metaDescription:
      "Targeting, ads, landing page, conversion tracking and budget: what a Google Ads or Facebook Ads campaign in Morocco really involves.",
    keyword: "running google ads meta ads in morocco",
    excerpt:
      "What a campaign covers, what management costs, what media costs, and how to tell whether it pays.",
    answer:
      "A campaign has two costs: the budget paid to Google or Meta, and the management fee. At Wevtex management is MAD 200 a day, and the budget stays under your control.",
    category: "Advertising",
    readingMinutes: 7,
    relatedPosts: ["google-ads-or-facebook-ads-morocco", "website-or-facebook-page"],
  },
  {
    slug: "guide-to-mobile-app-development-morocco",
    service: "mobile-apps",
    title: "Having a mobile app built in Morocco",
    metaTitle: "Mobile App Development in Morocco: The Guide | WEVTEX",
    metaDescription:
      "iOS and Android, Flutter, store publishing, timelines and scope: what to decide before having an app built in Morocco.",
    keyword: "having a mobile app built in morocco",
    excerpt:
      "What actually moves the price of an app, what store publishing involves, and what to prepare before the first line of code.",
    answer:
      "An iOS and Android app starts at MAD 8,000 at Wevtex, publishing included. The scope, screen by screen, is quoted before development day one.",
    category: "Technology",
    readingMinutes: 7,
    relatedPosts: ["how-much-does-an-app-cost-in-morocco", "nextjs-or-wordpress"],
  },
  {
    slug: "guide-to-custom-software-morocco",
    service: "desktop-apps",
    title: "Custom software in Morocco: when to leave Excel behind",
    metaTitle: "Custom Management Software in Morocco: The Guide | WEVTEX",
    metaDescription:
      "Management, invoicing, stock: when custom software replaces spreadsheets, what it costs in Morocco and what to plan for.",
    keyword: "custom management software morocco",
    excerpt:
      "The signs a spreadsheet has run its course, what custom software changes day to day, and what you own at the end.",
    answer:
      "Custom software starts at MAD 4,999 at Wevtex, with no monthly licence. It earns its keep as soon as your spreadsheets are shared, hand-corrected and copied between machines.",
    category: "Technology",
    readingMinutes: 6,
    relatedPosts: ["nextjs-or-wordpress", "how-to-choose-a-web-design-agency-in-morocco"],
  },
  {
    slug: "guide-to-custom-web-development-morocco",
    service: "custom-solutions",
    title: "Custom web development: when off-the-shelf stops fitting",
    metaTitle: "Custom Web Development in Morocco: The Guide | WEVTEX",
    metaDescription:
      "Business platforms, client portals, internal tools: how to scope custom web development in Morocco, and what it costs.",
    keyword: "custom web development morocco",
    excerpt:
      "How to recognise a project that deserves custom work, how to scope it, and how to avoid the quote that doubles halfway through.",
    answer:
      "Custom work is justified when the way you operate is an advantage no product on the market sells. Scoping always comes before the price, never the other way round.",
    category: "Strategy",
    readingMinutes: 6,
    relatedPosts: ["how-to-choose-a-web-design-agency-in-morocco", "nextjs-or-wordpress"],
  },
  {
    slug: "guide-to-whatsapp-chatbots-morocco",
    service: "whatsapp-bots",
    title: "WhatsApp chatbots in Morocco: answering without losing the day",
    metaTitle: "WhatsApp Chatbots in Morocco: The Guide | WEVTEX",
    metaDescription:
      "WhatsApp Business API, flows, lead qualification and pricing: how to automate your WhatsApp replies in Morocco.",
    keyword: "automating whatsapp business morocco",
    excerpt:
      "What a WhatsApp chatbot can answer for you, what it should hand to a human, and what the official API changes.",
    answer:
      "A WhatsApp chatbot answers the questions that keep coming back, qualifies the enquiry and hands you the conversation at the right moment. It works at night, on Sundays and during your meetings.",
    category: "Automation",
    readingMinutes: 6,
    relatedPosts: ["whatsapp-chatbot-for-moroccan-businesses", "how-to-sell-online-in-morocco"],
  },
];

export const POSTS_SEO_EN: Post[] = META.map((m) => ({
  slug: m.slug,
  title: m.title,
  metaTitle: m.metaTitle,
  metaDescription: m.metaDescription,
  keyword: m.keyword,
  excerpt: m.excerpt,
  answer: m.answer,
  category: m.category,
  publishedAt: DATE,
  readingMinutes: m.readingMinutes,
  relatedService: m.service,
  relatedPosts: m.relatedPosts,
  body: body(m.service),
}));

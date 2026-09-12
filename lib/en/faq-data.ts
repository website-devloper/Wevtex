/**
 * The /en/faq page: the same commitments as lib/faq-data.ts, answer-first,
 * in English. Every figure is one the site already publishes.
 */

import { fillPricesDeep } from "../pricing";
import type { Faq, FaqGroup } from "../faq-data";

export const FAQ_GROUPS_EN: FaqGroup[] = fillPricesDeep(
  [
    {
      id: "pricing",
      title: "Pricing and quotes",
      items: [
        {
          q: "How much does a website cost in Morocco?",
          a: "Our packages start at MAD {{prix:website-creation/Vitrine}} for a simple business website. An online store or an app costs more, depending on the number of pages, the features and the content to produce. The final price is set in a firm quote before work starts, and it doesn't move after that.",
        },
        {
          q: "What makes the price of a website vary?",
          a: "Four things: the number of pages, the features (payment, booking, customer accounts), the amount of content to write or translate, and how custom the design is. A five-page business website with your own text costs far less than a store of two hundred products created from scratch.",
        },
        {
          q: "How does payment work?",
          a: "Fixed price, fixed scope, paid in stages. You approve each stage before it is invoiced, and nothing is due until you are happy with the result.",
        },
        {
          q: "Is the quote free?",
          a: "Yes. The quote and the first call are free, with no commitment. You leave with a written price, timeline and scope, whether or not you decide to work with us.",
        },
        {
          q: "Do you invoice clients outside Morocco?",
          a: "Yes. We work with clients in Morocco and abroad. Quotes and invoices are issued in Moroccan dirhams (MAD), and payment is made in stages, as for every project.",
        },
      ],
    },
    {
      id: "timeline",
      title: "Timelines and process",
      items: [
        {
          q: "How long does it take to build a website?",
          a: "A business website goes live in 2 to 4 weeks, an online store in 4 to 8. A custom app depends on its scope. The deadline is written in the quote before work starts, not estimated along the way.",
        },
        {
          q: "How does a project run?",
          a: "In five stages: discovery, sitemap and copy, design, development, launch. You approve each stage before the next, and you get a progress update every week, so you always know where the project stands.",
        },
        {
          q: "What do you need from us to start?",
          a: "Your logo if you have one, your text or the information to write it, and your photos or products. If you have none of these, we can write the copy and organize the visuals, and it is planned in the quote.",
        },
      ],
    },
    {
      id: "ownership",
      title: "Ownership and hosting",
      items: [
        {
          q: "Who owns the website once it's delivered?",
          a: "You do, completely. The code, the content, the domain name and every login are in your name. You can work with anyone you like afterwards, without asking us for anything.",
        },
        {
          q: "Do you handle hosting and the domain name?",
          a: "Yes. We set up fast, secure hosting and your domain, and we can keep managing both, or hand everything over if you prefer to manage it yourself.",
        },
        {
          q: "Can I edit the content myself?",
          a: "Yes. We set up a simple interface to edit your text, images and products, and we train you to use it before launch. No technical knowledge is needed.",
        },
      ],
    },
    {
      id: "seo",
      title: "SEO and visibility",
      items: [
        {
          q: "Will my website be visible on Google?",
          a: "Every website is delivered ready for Google: clean structure, speed, tags and a sitemap. That makes you eligible. Aiming for the top positions on competitive searches takes ongoing SEO work, which we offer separately.",
        },
        {
          q: "How long before I show up on Google?",
          a: "Indexing takes a few days to a few weeks after launch. Ranking on competitive searches takes several months of continuous work: content, local SEO and links. Any agency promising first place within weeks is telling you a story.",
        },
        {
          q: "Do you do local SEO and Google Maps?",
          a: "Yes. We optimize your Google Business Profile, your pages for local searches and your position on Maps, so you show up when someone looks for your service nearby.",
        },
        {
          q: "Can my website rank in both English and French?",
          a: "Yes. Each language gets its own pages and its own keywords, linked together so Google shows the right one to each visitor. This website works that way.",
        },
      ],
    },
    {
      id: "after-launch",
      title: "After launch",
      items: [
        {
          q: "What happens after launch?",
          a: "Every project includes support after launch: we fix anything related to our work at no cost. After that, optional maintenance takes care of updates, backups and monitoring.",
        },
        {
          q: "What does maintenance cover?",
          a: "Technical updates, regular backups, uptime monitoring and small content changes. It is optional: a website can live without it, but one left without updates eventually develops security holes.",
        },
      ],
    },
    {
      id: "how-we-work",
      title: "Technology and how we work",
      items: [
        {
          q: "Which technologies do you use?",
          a: "We mainly build with Next.js and React, which produce fast, durable websites. For projects that need an easy back office, we also use proven e-commerce solutions. The choice depends on your needs, not on an agency preference.",
        },
        {
          q: "Do you work with companies outside Casablanca and abroad?",
          a: "Yes. We are based in Casablanca and work remotely with clients across Morocco and abroad. We work in English, French or Darija, with weekly check-ins and WhatsApp.",
        },
        {
          q: "Which industries do you work in?",
          a: "Retail and e-commerce, hospitality and tourism, health, professional services, industry and logistics, education, creative and tech, the public sector and NGOs. Each industry has its own page on the site, with what we actually do there.",
        },
        {
          q: "How do I start a project?",
          a: "Message us on WhatsApp or fill in the contact form. We get back to you during office hours with a first opinion, an idea of the budget and a realistic timeline, with no commitment on your side.",
        },
      ],
    },
  ],
  "en",
);

/** Flat list, for FAQPage structured data. */
export const ALL_FAQS_EN: Faq[] = FAQ_GROUPS_EN.flatMap((g) => g.items);

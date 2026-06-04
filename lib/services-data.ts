/**
 * Service detail content. Plain data (no JSX) so it can be imported by both the
 * server route (metadata + JSON-LD + generateStaticParams) and the client view.
 * One entry per service = one SEO-targeted page (/services/[slug]).
 */

export type Service = {
  slug: string;
  /** Short label for cards/nav. */
  name: string;
  /** Primary keyword this page targets. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** H1 — use \n for a line break; words in `h1Em` render emphasized. */
  h1: string;
  h1Em: string[];
  intro: string;
  /** "What's included" — concrete deliverables. */
  includes: string[];
  /** Outcomes/benefits — why it matters to the client. */
  outcomes: { h: string; p: string }[];
  tags: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    keyword: "web development agency Morocco",
    metaTitle: "Web Development | Wevtex — Fast Websites & Web Apps",
    metaDescription:
      "Custom websites and web apps built with React, Next.js and TypeScript — fast, secure and SEO-ready. For businesses in Morocco and worldwide.",
    eyebrow: "Web Development",
    h1: "Websites & web apps\nbuilt to perform.",
    h1Em: ["perform."],
    intro:
      "We build high-performance websites and web applications with React, Next.js and TypeScript — engineered for speed, security and conversion, not just looks. From a marketing site to a full SaaS platform, your build is modern, scalable and yours to own.",
    includes: [
      "Custom marketing sites and landing pages, built mobile-first and SEO-ready.",
      "Web applications — dashboards, portals and internal tools with auth and billing.",
      "Modern, scalable architecture using React, Next.js and TypeScript.",
      "Clean handover — code, hosting and accounts in your name. No lock-in.",
    ],
    outcomes: [
      { h: "Faster by default", p: "Optimised Core Web Vitals so pages load fast and rank better on Google." },
      { h: "Built to convert", p: "Clear structure and CTAs that turn visitors into customers." },
      { h: "Ready to grow", p: "Scalable architecture that grows with your business." },
    ],
    tags: ["React", "Next.js", "TypeScript", "API"],
    faqs: [
      { q: "How long does a custom website take?", a: "Most business sites go live in 2–4 weeks; larger web apps take longer. You get a firm timeline with your quote." },
      { q: "Do I own the code?", a: "Yes — completely. Code, content and every account are handed over in your name." },
    ],
  },
  {
    slug: "wordpress",
    name: "WordPress Sites",
    keyword: "WordPress website Morocco",
    metaTitle: "WordPress Websites | Wevtex — Custom & Optimized",
    metaDescription:
      "Custom WordPress websites with bespoke themes, optimized performance and maintenance included. Showcase and corporate sites for businesses everywhere.",
    eyebrow: "WordPress",
    h1: "Custom WordPress\nsites that load fast.",
    h1Em: ["load", "fast."],
    intro:
      "Showcase and corporate websites on WordPress, built with bespoke themes and tuned for speed — easy for your team to edit, with maintenance included so it keeps running smoothly.",
    includes: [
      "Bespoke themes designed around your brand — no generic templates.",
      "Performance optimization: caching, image compression and clean code.",
      "Easy editing so your team can update content without a developer.",
      "Maintenance, security and backups included.",
    ],
    outcomes: [
      { h: "Edit it yourself", p: "Update pages, posts and images from a simple dashboard." },
      { h: "Fast & secure", p: "Optimised hosting, SSL and regular updates keep it healthy." },
      { h: "SEO-ready", p: "Built clean so Google can crawl and rank your pages." },
    ],
    tags: ["WordPress", "Custom theme", "SEO", "Maintenance"],
    faqs: [
      { q: "Can I update the site myself?", a: "Yes. We build it so your team can edit content easily, and we provide a short walkthrough." },
      { q: "Is hosting included?", a: "We set up fast, secure hosting and can manage it for you, or hand it over." },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    keyword: "e-commerce website Morocco",
    metaTitle: "E-commerce Development | Wevtex — Online Stores",
    metaDescription:
      "Turnkey online stores with secure checkout, product management and order tracking. Built to convert browsers into buyers, in Morocco and worldwide.",
    eyebrow: "E-commerce",
    h1: "Online stores,\nready to take orders.",
    h1Em: ["take", "orders."],
    intro:
      "Turnkey online stores built to sell — secure checkout, product and inventory management, and order tracking. Whether you sell 10 products or 10,000, your store is fast, mobile-first and conversion-focused.",
    includes: [
      "Product catalog and inventory management that's easy to run.",
      "Secure checkout with Stripe and local payment options.",
      "Order management and tracking for you and your customers.",
      "Conversion-focused design that turns browsers into buyers.",
    ],
    outcomes: [
      { h: "Sell from day one", p: "A complete store, set up and ready to take real orders." },
      { h: "Mobile-first", p: "Most shoppers are on their phones — your store is built for them." },
      { h: "Built to convert", p: "Fast pages and a clean checkout reduce drop-off." },
    ],
    tags: ["WooCommerce", "Stripe", "Payments", "Inventory"],
    faqs: [
      { q: "How long until my store is live?", a: "Most online stores go live in 4–8 weeks depending on catalog size and features." },
      { q: "Can customers pay locally?", a: "Yes — we set up Stripe and local payment options to fit your market." },
    ],
  },
  {
    slug: "erp-management",
    name: "ERP & Management",
    keyword: "ERP solutions Morocco",
    metaTitle: "ERP & Business Management | Wevtex — Dolibarr & Odoo",
    metaDescription:
      "Centralize invoicing, stock and CRM with custom Dolibarr and Odoo solutions. Streamline your operations and see your whole business in one place.",
    eyebrow: "ERP & Management",
    h1: "Run your business\nfrom one place.",
    h1Em: ["one", "place."],
    intro:
      "Centralize invoicing, stock, sales and customers with custom Dolibarr and Odoo solutions. Stop juggling spreadsheets — get one system that reflects how your business actually works.",
    includes: [
      "Invoicing and quotes that match your process and branding.",
      "Stock and inventory management across locations.",
      "CRM to track leads, customers and follow-ups.",
      "Custom Dolibarr and Odoo setup, configured to your workflow.",
    ],
    outcomes: [
      { h: "One source of truth", p: "Sales, stock and finances in a single connected system." },
      { h: "Less manual work", p: "Automate repetitive admin and reduce costly errors." },
      { h: "Clear visibility", p: "Dashboards that show how the business is really doing." },
    ],
    tags: ["Dolibarr", "Odoo", "CRM", "Invoicing"],
    faqs: [
      { q: "Dolibarr or Odoo — which is right for me?", a: "It depends on your size and needs. We'll recommend the right fit on a quick call, free." },
      { q: "Can it connect to my online store?", a: "Yes — we can sync stock, orders and customers between your store and your ERP." },
    ],
  },
  {
    slug: "automation",
    name: "Automation",
    keyword: "business automation Morocco",
    metaTitle: "Business Automation | Wevtex — Smart Workflows",
    metaDescription:
      "Automate repetitive tasks with smart workflows that connect your tools. Save hours every week with n8n, APIs and webhooks. For businesses everywhere.",
    eyebrow: "Automation",
    h1: "Automate the work\nyou do twice.",
    h1Em: ["you", "do", "twice."],
    intro:
      "Smart workflows that connect your tools and handle repetitive tasks automatically — from lead capture to invoicing to notifications. Free your team to focus on work that actually grows the business.",
    includes: [
      "Workflow automation with n8n connecting your existing tools.",
      "API and webhook integrations between apps that don't natively talk.",
      "Automated notifications, follow-ups and data syncing.",
      "Custom triggers built around your real processes.",
    ],
    outcomes: [
      { h: "Save hours weekly", p: "Hand off repetitive admin to reliable automations." },
      { h: "Fewer mistakes", p: "Automated steps don't forget or fat-finger data." },
      { h: "Connected tools", p: "Your apps finally work together instead of in silos." },
    ],
    tags: ["n8n", "Workflows", "API", "Webhooks"],
    faqs: [
      { q: "What can you automate?", a: "Lead routing, invoicing, notifications, data entry, reporting — most repetitive, rules-based tasks." },
      { q: "Will it work with my current tools?", a: "Usually yes. We connect via APIs and webhooks, or build a custom bridge if needed." },
    ],
  },
  {
    slug: "business-apps",
    name: "Business Apps",
    keyword: "custom business software Morocco",
    metaTitle: "Custom Business Apps | Wevtex — Internal Tools",
    metaDescription:
      "Custom software for your unique processes — dashboards, internal tools and SaaS. Built around how your business actually works. Morocco and worldwide.",
    eyebrow: "Business Apps",
    h1: "Software shaped\naround your process.",
    h1Em: ["your", "process."],
    intro:
      "When off-the-shelf software doesn't fit, we build custom apps around how your business actually works — internal dashboards, dedicated tools and full SaaS products that remove friction and scale with you.",
    includes: [
      "Internal tools and dashboards tailored to your team's workflow.",
      "Custom SaaS products with auth, roles and billing.",
      "Data dashboards that surface the numbers that matter.",
      "Integrations with the systems you already use.",
    ],
    outcomes: [
      { h: "Fits your workflow", p: "Software built around your process, not the other way round." },
      { h: "Removes friction", p: "Replace messy spreadsheets and manual steps." },
      { h: "Scales with you", p: "Architecture that grows as your team and data grow." },
    ],
    tags: ["Custom", "Dashboard", "SaaS", "Internal tools"],
    faqs: [
      { q: "Is a custom app worth it over off-the-shelf?", a: "When existing tools force you to change how you work, custom usually pays off fast. We'll advise honestly." },
      { q: "Do I own the software?", a: "Yes — the code and accounts are yours, handed over in your name." },
    ],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    keyword: "AI chatbot development Morocco",
    metaTitle: "AI Chatbots | Wevtex — 24/7 Customer Service",
    metaDescription:
      "Smart AI chatbots that automate customer service 24/7 on WhatsApp, Messenger and your website. Answer customers instantly and capture more leads.",
    eyebrow: "AI Chatbots",
    h1: "Answer customers\n24/7, automatically.",
    h1Em: ["24/7,", "automatically."],
    intro:
      "Smart AI chatbots that handle customer questions instantly — on WhatsApp, Messenger and your website. Capture leads around the clock, cut response times and free your team from repetitive questions.",
    includes: [
      "AI chatbots trained on your business, products and FAQs.",
      "Deployed where your customers already are — WhatsApp, Messenger, web.",
      "Lead capture and handover to a human when it matters.",
      "Available 24/7, in multiple languages.",
    ],
    outcomes: [
      { h: "Never miss a lead", p: "Answer and qualify customers even outside working hours." },
      { h: "Instant replies", p: "Customers get answers in seconds, not hours." },
      { h: "Less repetitive work", p: "The bot handles FAQs so your team handles real conversations." },
    ],
    tags: ["OpenAI", "WhatsApp", "NLP", "24/7"],
    faqs: [
      { q: "Can it talk to customers in Arabic and French?", a: "Yes — the chatbot can handle multiple languages, including Arabic, French and English." },
      { q: "Does it hand over to a human?", a: "Yes. When a question needs a person, it routes the conversation to your team." },
    ],
  },
  {
    slug: "ux-ui-design",
    name: "UX/UI Design",
    keyword: "UX UI design agency Morocco",
    metaTitle: "UX/UI Design | Wevtex — Interfaces That Convert",
    metaDescription:
      "Intuitive, beautiful interfaces that convert. Wireframes, prototypes and design systems in Figma. User-centred design for web and mobile.",
    eyebrow: "UX/UI Design",
    h1: "Interfaces that are\nbeautiful and convert.",
    h1Em: ["beautiful", "convert."],
    intro:
      "Intuitive, beautiful interfaces designed to convert — grounded in how your users actually think and behave. From wireframes to polished prototypes and a reusable design system, we make products that feel effortless.",
    includes: [
      "User research and wireframes that map real journeys.",
      "High-fidelity prototypes in Figma you can click through.",
      "Design systems for consistent, scalable interfaces.",
      "Mobile-first design tested across screen sizes.",
    ],
    outcomes: [
      { h: "Higher conversion", p: "Clear, intuitive flows that guide users to action." },
      { h: "Looks premium", p: "Polished design that builds instant trust." },
      { h: "Consistent at scale", p: "A design system keeps every screen on-brand." },
    ],
    tags: ["Figma", "Prototype", "Design system", "Mobile"],
    faqs: [
      { q: "Do you design and build, or just design?", a: "Both. We can hand off polished designs, or design and build the whole product end to end." },
      { q: "Will I get a design system?", a: "Yes — reusable components and styles so your product stays consistent as it grows." },
    ],
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

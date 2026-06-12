/**
 * Service detail content. Plain data (no JSX) so it can be imported by both the
 * server route (metadata + JSON-LD + generateStaticParams) and the client view.
 * One entry per service = one SEO-targeted page (/services/[slug]).
 */

export type FeatureCard = { title: string; desc: string; checks: string[] };
export type FeatureSection = { eyebrow: string; title: string; titleEm?: string[]; subtitle?: string; cards: FeatureCard[] };
export type TechGroup = { label: string; items: string[]; desc?: string };
export type ProcessStep = { n: string; h: string; checks: string[]; d: string };
export type SectorGroup = { label: string; cases: string[] };

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
  // Rich detail sections — pages render them only when present.
  demo?: { title: string; subtitle?: string; caption?: string };
  featureSections?: FeatureSection[];
  tech?: { title: string; titleEm?: string[]; subtitle?: string; groups: TechGroup[] };
  process?: { title: string; titleEm?: string[]; subtitle?: string; steps: ProcessStep[] };
  sectors?: { title: string; titleEm?: string[]; subtitle?: string; groups: SectorGroup[] };
};

/** Shared methodology — the same across services. */
const STANDARD_PROCESS: Service["process"] = {
  title: "How we work\ntogether.",
  titleEm: ["work", "together."],
  subtitle: "No mystery — you always know what's happening and what's next.",
  steps: [
    { n: "01", h: "Discover", d: "1–2 days", checks: ["Goals & audience", "Scope & quote", "Clear plan"] },
    { n: "02", h: "Design", d: "3–5 days", checks: ["In-browser design", "Your feedback", "Approved look"] },
    { n: "03", h: "Build", d: "1–3 weeks", checks: ["Fast, secure code", "Weekly updates", "Mobile-ready"] },
    { n: "04", h: "Launch", d: "1–2 days", checks: ["Full testing", "Analytics setup", "Go live"] },
    { n: "05", h: "Support", d: "ongoing", checks: ["Post-launch help", "Care plan", "Improvements"] },
  ],
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
    demo: {
      title: "Web development in action",
      subtitle: "A fast, modern build — from a marketing site to a full web app.",
      caption: "Illustration of a Next.js build: fast, accessible and SEO-ready.",
    },
    featureSections: [
      {
        eyebrow: "What we build",
        title: "Everything in modern\nweb development.",
        titleEm: ["web", "development."],
        subtitle: "Custom builds engineered for speed, security and conversion.",
        cards: [
          { title: "Marketing sites & landing pages", desc: "Pages that load fast and turn visitors into customers.", checks: ["Mobile-first design", "SEO-ready structure", "Fast Core Web Vitals", "Easy content editing"] },
          { title: "Web applications", desc: "Dashboards, portals and internal tools that scale.", checks: ["Authentication & roles", "Billing & subscriptions", "Custom dashboards", "Admin panels"] },
          { title: "Headless e-commerce", desc: "Online stores built to convert and scale.", checks: ["Stripe payments", "Product management", "Cart & checkout", "Order tracking"] },
          { title: "Performance & SEO", desc: "Built so Google and users both love it.", checks: ["Core Web Vitals tuning", "Schema / JSON-LD", "Clean, semantic URLs", "Analytics wired in"] },
        ],
      },
      {
        eyebrow: "Built right",
        title: "On a solid\nfoundation.",
        titleEm: ["solid", "foundation."],
        subtitle: "Modern tools, secure by default, and entirely yours.",
        cards: [
          { title: "Modern stack", desc: "Current, well-supported technology — no legacy debt.", checks: ["React & Next.js", "TypeScript", "Tailwind CSS", "Component systems"] },
          { title: "Secure by default", desc: "Security baked in from the first commit.", checks: ["HTTPS & HSTS", "Server-side validation", "Security headers", "Dependency audits"] },
          { title: "Hosting & CI/CD", desc: "Fast global hosting with automated deploys.", checks: ["Edge / CDN hosting", "ISR caching", "Automated deploys", "Uptime monitoring"] },
          { title: "Yours to own", desc: "Full ownership handed over — no lock-in.", checks: ["Code handover", "Domain & accounts", "No vendor lock-in", "Documentation"] },
        ],
      },
    ],
    tech: {
      title: "The web stack\nwe build on.",
      titleEm: ["build", "on."],
      subtitle: "Proven, modern tools chosen for performance and longevity.",
      groups: [
        { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
        { label: "Backend & APIs", items: ["Node.js", "REST", "GraphQL", "Prisma"] },
        { label: "Commerce", items: ["Stripe", "WooCommerce", "Medusa"] },
        { label: "Infra & SEO", items: ["Vercel", "ISR", "JSON-LD", "Analytics"] },
      ],
    },
    process: {
      title: "How we work\ntogether.",
      titleEm: ["work", "together."],
      subtitle: "No mystery — you always know what's happening and what's next.",
      steps: [
        { n: "01", h: "Discover", d: "1–2 days", checks: ["Goals & audience", "Scope & quote", "Clear plan"] },
        { n: "02", h: "Design", d: "3–5 days", checks: ["In-browser design", "Your feedback", "Approved look"] },
        { n: "03", h: "Build", d: "1–3 weeks", checks: ["Fast, secure code", "Weekly updates", "Mobile-ready"] },
        { n: "04", h: "Launch", d: "1–2 days", checks: ["Full testing", "Analytics setup", "Go live"] },
        { n: "05", h: "Support", d: "ongoing", checks: ["Post-launch help", "Care plan", "Improvements"] },
      ],
    },
    sectors: {
      title: "Web development\nfor every sector.",
      titleEm: ["every", "sector."],
      subtitle: "We tailor the build to how your customers actually buy.",
      groups: [
        { label: "E-commerce & Retail", cases: ["Online stores", "Checkout optimization", "Inventory sync"] },
        { label: "Professional Services", cases: ["Lead capture", "Appointment booking", "Trust-building sites"] },
        { label: "SaaS & Tech", cases: ["Landing pages", "Web apps", "Dashboards"] },
        { label: "Hospitality", cases: ["Direct booking", "Multilingual sites", "Rich galleries"] },
      ],
    },
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
    demo: {
      title: "WordPress in action",
      subtitle: "A polished, fast WordPress site you can edit yourself.",
      caption: "Illustration of a custom WordPress build — fast and easy to manage.",
    },
    featureSections: [
      {
        eyebrow: "What we build",
        title: "Custom WordPress,\nnot templates.",
        titleEm: ["not", "templates."],
        subtitle: "Bespoke design and clean code — easy for your team to run.",
        cards: [
          { title: "Bespoke themes", desc: "Designed around your brand, not a generic template.", checks: ["Custom design", "No page-builder bloat", "Brand styling", "Reusable blocks"] },
          { title: "Performance", desc: "Tuned to load fast on every device.", checks: ["Caching", "Image compression", "Clean code", "Core Web Vitals"] },
          { title: "Easy editing", desc: "Update content without a developer.", checks: ["Simple dashboard", "Editable pages", "Media library", "Short training"] },
          { title: "WooCommerce", desc: "Add a shop whenever you need one.", checks: ["Products & cart", "Secure checkout", "Coupons", "Order management"] },
        ],
      },
      {
        eyebrow: "Looked after",
        title: "Maintained &\nsecure.",
        titleEm: ["secure."],
        subtitle: "We keep your site healthy long after launch.",
        cards: [
          { title: "Security", desc: "Protected and kept up to date.", checks: ["SSL", "Core & plugin updates", "Firewall", "Malware scans"] },
          { title: "Backups", desc: "Your site is never at risk.", checks: ["Automated backups", "One-click restore", "Off-site copies", "Versioning"] },
          { title: "Hosting", desc: "Fast, reliable infrastructure.", checks: ["Fast hosting", "Staging site", "Uptime monitoring", "CDN"] },
          { title: "Support", desc: "We're here when you need us.", checks: ["Care plan", "Bug fixes", "Content help", "Priority response"] },
        ],
      },
    ],
    tech: {
      title: "The WordPress\nstack.",
      titleEm: ["stack."],
      subtitle: "A modern, flexible foundation built on open source technologies we know inside and out.",
      groups: [
        { label: "Core", desc: "The solid foundation that powers every site. Secure, reliable, and built to scale.", items: ["WordPress", "PHP", "MySQL"] },
        { label: "Build", desc: "Flexible tooling to build custom experiences tailored to your content and workflow.", items: ["Custom Theme", "ACF"] },
        { label: "Commerce", desc: "Powerful commerce capabilities to sell products, subscriptions, and digital services.", items: ["WooCommerce", "Stripe"] },
        { label: "Design", desc: "Intentional design and seamless front-end experiences that elevate your brand.", items: ["Figma"] },
      ],
    },
    process: STANDARD_PROCESS,
    sectors: {
      title: "WordPress for\nevery business.",
      titleEm: ["every", "business."],
      subtitle: "From a simple brochure site to a content-heavy platform.",
      groups: [
        { label: "Corporate & Showcase", cases: ["Company sites", "Portfolios", "Brochure sites"] },
        { label: "Content & Blogs", cases: ["News & magazines", "SEO blogs", "Resource hubs"] },
        { label: "Small Business", cases: ["Local services", "Restaurants", "Clinics"] },
        { label: "Shops", cases: ["WooCommerce stores", "Bookings", "Memberships"] },
      ],
    },
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
    demo: {
      title: "Your online store in action",
      subtitle: "A fast store built to turn browsers into buyers.",
      caption: "Illustration of an online store — cart, checkout and order tracking.",
    },
    featureSections: [
      {
        eyebrow: "What we build",
        title: "A complete\nonline store.",
        titleEm: ["online", "store."],
        subtitle: "Everything you need to sell online, set up and ready.",
        cards: [
          { title: "Storefront", desc: "A fast, beautiful shop on every device.", checks: ["Mobile-first design", "Product pages", "Search & filters", "Fast loading"] },
          { title: "Checkout & payments", desc: "A smooth, secure path to purchase.", checks: ["Secure checkout", "Stripe & local pay", "Coupons", "Guest checkout"] },
          { title: "Catalog & inventory", desc: "Easy to manage as you grow.", checks: ["Products & variants", "Stock tracking", "Categories", "Bulk import"] },
          { title: "Orders", desc: "Stay on top of every sale.", checks: ["Order management", "Email notifications", "Tracking", "Refunds"] },
        ],
      },
      {
        eyebrow: "Built to sell",
        title: "Conversion\nbaked in.",
        titleEm: ["baked", "in."],
        subtitle: "Design and speed that reduce drop-off and grow sales.",
        cards: [
          { title: "Performance", desc: "Fast stores sell more.", checks: ["Fast pages", "Optimised images", "CDN", "Core Web Vitals"] },
          { title: "SEO", desc: "Get found by ready-to-buy shoppers.", checks: ["Product schema", "Clean URLs", "Sitemaps", "Meta control"] },
          { title: "Trust", desc: "Reassure shoppers at every step.", checks: ["Reviews", "Secure badges", "Clear policies", "Support chat"] },
          { title: "Marketing", desc: "Win back and grow your customers.", checks: ["Abandoned cart", "Promotions", "Analytics", "Ad pixels"] },
        ],
      },
    ],
    tech: {
      title: "The commerce\nstack.",
      titleEm: ["stack."],
      subtitle: "Proven tools for selling online at any scale.",
      groups: [
        { label: "Platforms", items: ["WooCommerce", "Shopify", "Medusa"] },
        { label: "Payments", items: ["Stripe", "PayPal", "Local pay"] },
        { label: "Frontend", items: ["Next.js", "React", "Tailwind"] },
        { label: "Growth", items: ["Analytics", "Schema", "Email"] },
      ],
    },
    process: STANDARD_PROCESS,
    sectors: {
      title: "Stores for\nevery niche.",
      titleEm: ["every", "niche."],
      subtitle: "Tuned to how your customers actually shop.",
      groups: [
        { label: "Fashion & Beauty", cases: ["Lookbooks", "Variants", "Wishlists"] },
        { label: "Home & Decor", cases: ["Rich catalogs", "Galleries", "Bundles"] },
        { label: "Food & Grocery", cases: ["Local delivery", "Scheduling", "Reorder"] },
        { label: "Digital & Services", cases: ["Downloads", "Subscriptions", "Bookings"] },
      ],
    },
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
    demo: {
      title: "Your ERP in action",
      subtitle: "Invoicing, stock and customers in one connected system.",
      caption: "Illustration of a custom ERP dashboard — sales, stock and finance.",
    },
    featureSections: [
      {
        eyebrow: "Modules",
        title: "Run the whole\nbusiness.",
        titleEm: ["whole", "business."],
        subtitle: "Pick the modules you need and add more as you grow.",
        cards: [
          { title: "Invoicing & quotes", desc: "Bill clients in minutes, not hours.", checks: ["Professional invoices", "Quotes", "Payment tracking", "Reminders"] },
          { title: "Stock & inventory", desc: "Always know what you have.", checks: ["Real-time stock", "Low-stock alerts", "Movements", "Multi-location"] },
          { title: "CRM", desc: "Never lose track of a customer.", checks: ["Customer records", "Sales pipeline", "Follow-ups", "History"] },
          { title: "Accounting", desc: "Keep the books in order.", checks: ["Ledgers", "Tax / VAT", "Reports", "Exports"] },
        ],
      },
      {
        eyebrow: "Tailored",
        title: "Configured\nto you.",
        titleEm: ["to", "you."],
        subtitle: "Dolibarr or Odoo, set up around your workflow.",
        cards: [
          { title: "Custom setup", desc: "Built to match how you work.", checks: ["Your workflow", "Roles & permissions", "Branding", "Templates"] },
          { title: "Integrations", desc: "Connected to your other tools.", checks: ["Online store sync", "Payments", "Email", "APIs"] },
          { title: "Dashboards", desc: "See the business at a glance.", checks: ["Live KPIs", "Sales reports", "Stock views", "Cashflow"] },
          { title: "Training & support", desc: "Your team up and running fast.", checks: ["Team training", "Documentation", "Care plan", "Updates"] },
        ],
      },
    ],
    tech: {
      title: "The ERP\nstack.",
      titleEm: ["stack."],
      subtitle: "Open, proven business platforms.",
      groups: [
        { label: "Platforms", items: ["Dolibarr", "Odoo", "Custom"] },
        { label: "Data", items: ["PostgreSQL", "MySQL", "APIs"] },
        { label: "Integrations", items: ["WooCommerce", "Stripe", "Webhooks"] },
        { label: "Reporting", items: ["Dashboards", "Exports", "BI"] },
      ],
    },
    process: STANDARD_PROCESS,
    sectors: {
      title: "ERP for\nMoroccan SMEs.",
      titleEm: ["Moroccan", "SMEs."],
      subtitle: "Built for how local businesses actually operate.",
      groups: [
        { label: "Retail & Wholesale", cases: ["Stock", "Invoicing", "POS"] },
        { label: "Services", cases: ["Quotes", "Projects", "Time tracking"] },
        { label: "Manufacturing", cases: ["Bill of materials", "Production", "Planning"] },
        { label: "Trading", cases: ["Purchasing", "Suppliers", "Margins"] },
      ],
    },
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
    demo: {
      title: "Automation in action",
      subtitle: "Workflows that run your busywork automatically, 24/7.",
      caption: "Illustration of an n8n workflow — your tools connected end to end.",
    },
    featureSections: [
      {
        eyebrow: "What we automate",
        title: "Hand off the\nrepetitive work.",
        titleEm: ["repetitive", "work."],
        subtitle: "Connect your tools and let workflows do the rest.",
        cards: [
          { title: "Lead & sales", desc: "Never drop a lead again.", checks: ["Lead routing", "CRM updates", "Follow-up emails", "Notifications"] },
          { title: "Operations", desc: "Cut the daily admin.", checks: ["Data entry", "File handling", "Reports", "Reminders"] },
          { title: "Finance", desc: "Keep billing on autopilot.", checks: ["Invoice creation", "Payment alerts", "Reconciliation", "Exports"] },
          { title: "Marketing", desc: "Stay consistent without the effort.", checks: ["Social posting", "Campaign syncs", "List building", "Ad pixels"] },
        ],
      },
      {
        eyebrow: "How it connects",
        title: "Tools that finally\ntalk to each other.",
        titleEm: ["talk"],
        subtitle: "APIs and webhooks bridge apps that don't natively connect.",
        cards: [
          { title: "Integrations", desc: "Connect almost anything.", checks: ["200+ apps", "REST APIs", "Webhooks", "Custom bridges"] },
          { title: "Triggers", desc: "Run on the events that matter.", checks: ["Schedules", "Form submits", "New orders", "Custom events"] },
          { title: "Reliability", desc: "Automations you can trust.", checks: ["Error handling", "Retries", "Logging", "Alerts"] },
          { title: "Ownership", desc: "Yours to keep and change.", checks: ["Self-hosted option", "Documented", "No lock-in", "Editable"] },
        ],
      },
    ],
    tech: {
      title: "The automation\nstack.",
      titleEm: ["stack."],
      subtitle: "Flexible, self-hostable workflow tooling.",
      groups: [
        { label: "Workflow", items: ["n8n", "Make", "Zapier"] },
        { label: "Connect", items: ["REST", "Webhooks", "GraphQL"] },
        { label: "Data", items: ["Sheets", "Postgres", "Airtable"] },
        { label: "Channels", items: ["Email", "WhatsApp", "Slack"] },
      ],
    },
    process: STANDARD_PROCESS,
    sectors: {
      title: "Automation for\nevery team.",
      titleEm: ["every", "team."],
      subtitle: "Save hours wherever the work repeats.",
      groups: [
        { label: "E-commerce", cases: ["Order sync", "Stock alerts", "Reviews"] },
        { label: "Services", cases: ["Bookings", "Reminders", "Onboarding"] },
        { label: "B2B", cases: ["Lead nurturing", "Quotes", "Reporting"] },
        { label: "Agencies", cases: ["Reporting", "Publishing", "Handoffs"] },
      ],
    },
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
    demo: {
      title: "Your custom app in action",
      subtitle: "Software shaped around your exact process.",
      caption: "Illustration of a custom internal dashboard built for your team.",
    },
    featureSections: [
      {
        eyebrow: "What we build",
        title: "Software that\nfits you.",
        titleEm: ["fits", "you."],
        subtitle: "Internal tools, dashboards and full products.",
        cards: [
          { title: "Internal tools", desc: "Replace messy spreadsheets and manual steps.", checks: ["Custom workflows", "Forms", "Approvals", "Roles"] },
          { title: "Dashboards", desc: "See the numbers that matter, live.", checks: ["Live data", "KPIs", "Charts", "Exports"] },
          { title: "SaaS products", desc: "Launch a product of your own.", checks: ["Auth", "Billing", "Multi-tenant", "Admin"] },
          { title: "Integrations", desc: "Connect the systems you already use.", checks: ["Your systems", "APIs", "Imports", "Sync"] },
        ],
      },
      {
        eyebrow: "Built right",
        title: "Reliable\nand yours.",
        titleEm: ["yours."],
        subtitle: "Modern, secure and fully owned by you.",
        cards: [
          { title: "Modern stack", desc: "Current, well-supported technology.", checks: ["React", "Next.js", "TypeScript", "APIs"] },
          { title: "Secure", desc: "Protected from day one.", checks: ["Auth & roles", "Validation", "Audit logs", "Backups"] },
          { title: "Scalable", desc: "Grows with your team and data.", checks: ["Cloud hosting", "Caching", "Monitoring", "CI/CD"] },
          { title: "Yours", desc: "No lock-in, ever.", checks: ["Code handover", "Docs", "No lock-in", "Training"] },
        ],
      },
    ],
    tech: {
      title: "The app\nstack.",
      titleEm: ["stack."],
      subtitle: "Battle-tested tools for custom software.",
      groups: [
        { label: "Frontend", items: ["React", "Next.js", "TypeScript"] },
        { label: "Backend", items: ["Node.js", "Postgres", "Prisma"] },
        { label: "Auth & Pay", items: ["Auth.js", "Stripe", "RBAC"] },
        { label: "Infra", items: ["Vercel", "Docker", "Monitoring"] },
      ],
    },
    process: STANDARD_PROCESS,
    sectors: {
      title: "Apps for\nany operation.",
      titleEm: ["any", "operation."],
      subtitle: "If a spreadsheet is holding you back, we can replace it.",
      groups: [
        { label: "Operations", cases: ["Inventory", "Scheduling", "Tracking"] },
        { label: "Sales & CRM", cases: ["Pipelines", "Quotes", "Client portals"] },
        { label: "Finance", cases: ["Invoicing", "Reporting", "Approvals"] },
        { label: "Field & Logistics", cases: ["Dispatch", "Routes", "Forms"] },
      ],
    },
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
    demo: {
      title: "Your AI chatbot in action",
      subtitle: "Answering customers and capturing leads, 24/7.",
      caption: "Illustration of an AI chatbot qualifying a lead automatically.",
    },
    featureSections: [
      {
        eyebrow: "What it does",
        title: "A complete,\nsmart assistant.",
        titleEm: ["smart", "assistant."],
        subtitle: "Trained on your business, on the channels you already use.",
        cards: [
          { title: "Conversational AI", desc: "Understands and answers naturally.", checks: ["Natural language", "Trained on your FAQs", "Multilingual", "Context-aware"] },
          { title: "Lead capture", desc: "Turns chats into qualified leads.", checks: ["Qualifies leads", "Collects details", "Books calls", "Human handover"] },
          { title: "Multi-channel", desc: "Meets customers where they are.", checks: ["WhatsApp", "Messenger", "Website", "Instagram"] },
          { title: "Customer service", desc: "Instant help, around the clock.", checks: ["Instant answers", "Order status", "Returns", "24/7"] },
        ],
      },
      {
        eyebrow: "Under the hood",
        title: "Smart and\nsecure.",
        titleEm: ["secure."],
        subtitle: "Reliable AI with the controls you need.",
        cards: [
          { title: "Integrations", desc: "Connected to your systems.", checks: ["CRM", "Orders", "Calendar", "APIs"] },
          { title: "Analytics", desc: "See what customers ask.", checks: ["Conversations", "Resolution rate", "Topics", "Leads"] },
          { title: "Control", desc: "Stays on-message and on-brand.", checks: ["Guardrails", "Approved answers", "Escalation", "Logs"] },
          { title: "Privacy", desc: "Customer data handled responsibly.", checks: ["Secure data", "Consent", "Hosting", "Compliance"] },
        ],
      },
    ],
    tech: {
      title: "The chatbot\nstack.",
      titleEm: ["stack."],
      subtitle: "Modern AI and the channels your customers use.",
      groups: [
        { label: "AI & NLP", items: ["OpenAI", "Claude", "RAG"] },
        { label: "Channels", items: ["WhatsApp API", "Messenger", "Web widget"] },
        { label: "Integrations", items: ["HubSpot", "Calendly", "Stripe"] },
        { label: "Hosting", items: ["Cloud", "Vector DB", "Analytics"] },
      ],
    },
    process: STANDARD_PROCESS,
    sectors: {
      title: "Chatbots\nby sector.",
      titleEm: ["by", "sector."],
      subtitle: "Use cases tailored to your business.",
      groups: [
        { label: "Hospitality", cases: ["Bookings", "Concierge", "FAQs"] },
        { label: "E-commerce", cases: ["Product help", "Order status", "Cart recovery"] },
        { label: "B2B Services", cases: ["Lead qualification", "Scheduling", "Support"] },
        { label: "Healthcare", cases: ["Intake", "Appointments", "Reminders"] },
      ],
    },
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
    demo: {
      title: "Our design process in action",
      subtitle: "From wireframe to interactive prototype.",
      caption: "Illustration of a Figma design — wireframe to polished prototype.",
    },
    featureSections: [
      {
        eyebrow: "What we do",
        title: "User-centred\ndesign.",
        titleEm: ["User-centred"],
        subtitle: "Interfaces grounded in how people actually behave.",
        cards: [
          { title: "UX research", desc: "Map the real user journey first.", checks: ["User journeys", "Wireframes", "Information architecture", "Flows"] },
          { title: "UI design", desc: "Beautiful, on-brand interfaces.", checks: ["High-fidelity", "Brand styling", "Components", "Responsive"] },
          { title: "Prototyping", desc: "Click through it before we build.", checks: ["Clickable prototypes", "Interactions", "User testing", "Iteration"] },
          { title: "Design systems", desc: "Consistency that scales.", checks: ["Reusable components", "Tokens", "Guidelines", "Handoff"] },
        ],
      },
      {
        eyebrow: "Why it works",
        title: "Beautiful\nand effective.",
        titleEm: ["effective."],
        subtitle: "Design that looks premium and converts.",
        cards: [
          { title: "Conversion", desc: "Guide users to action.", checks: ["Clear CTAs", "Reduced friction", "A/B ready", "Trust cues"] },
          { title: "Consistency", desc: "On-brand on every screen.", checks: ["Design system", "Reusable styles", "On-brand", "Scalable"] },
          { title: "Accessibility", desc: "Usable by everyone.", checks: ["WCAG AA", "Contrast", "Keyboard", "Screen readers"] },
          { title: "Dev handoff", desc: "Clean specs developers love.", checks: ["Figma specs", "Tokens", "Assets", "Clean handoff"] },
        ],
      },
    ],
    tech: {
      title: "The design\ntoolkit.",
      titleEm: ["toolkit."],
      subtitle: "Industry-standard tools for modern product design.",
      groups: [
        { label: "Design", items: ["Figma", "Adobe", "Sketch"] },
        { label: "Prototype", items: ["Figma", "ProtoPie", "Framer"] },
        { label: "Research", items: ["Maze", "Hotjar", "Useberry"] },
        { label: "Handoff", items: ["Figma Dev Mode", "Tokens", "Storybook"] },
      ],
    },
    process: STANDARD_PROCESS,
    sectors: {
      title: "Design for\nany product.",
      titleEm: ["any", "product."],
      subtitle: "From marketing sites to complex apps.",
      groups: [
        { label: "SaaS & Apps", cases: ["Onboarding", "Dashboards", "Design systems"] },
        { label: "E-commerce", cases: ["Product pages", "Checkout", "Mobile"] },
        { label: "Hospitality", cases: ["Booking flows", "Galleries", "Multilingual"] },
        { label: "Marketing", cases: ["Landing pages", "Brand", "Animation"] },
      ],
    },
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

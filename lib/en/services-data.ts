/**
 * The eight service pages in English, served at /en/<keyword-url>
 * (lib/i18n-paths.ts SERVICE_URLS_EN). Same ids, same structure and same
 * prices as lib/services-data.ts; the copy is written for English searchers
 * and merged with the English search layer (lib/en/service-seo.ts).
 */

import type { Service } from "../services-data";
import { SERVICE_SEO_EN } from "./service-seo";
import { PRICES, MONTHLY, fillPricesDeep, formatAmount } from "../pricing";
import { SERVICES_EN as MARKETED_EN } from "@/components/wevtex/homeContent.en";

const en = (v: string) => formatAmount(v, "en");

const PRICE_FOOTNOTE =
  "Indicative starting prices, in Moroccan dirhams (MAD). Every project gets a firm quote after a fifteen-minute call, with no commitment.";

const SECTORS = {
  retail: "E-commerce & retail",
  tourism: "Tourism & hospitality",
  pro: "Professional services",
  health: "Health & wellness",
  industry: "Industry & logistics",
  education: "Education & e-learning",
  creative: "Creative, media & tech",
  public: "Public sector & NGOs",
};

const BASE: Service[] = [
  /* ================================================================== */
  {
    slug: "website-creation",
    name: "Web design & development",
    keyword: "web design Morocco",
    metaTitle: "Web Design & Website Development in Morocco | WEVTEX",
    metaDescription:
      "Web design in Morocco from MAD {{prix:website-creation/Vitrine}}: business websites, online stores and custom sites, fast and ready for Google. Delivered in 2 to 4 weeks.",
    eyebrow: "Web design & development",
    h1: "Web design in Morocco,\nfast and built to sell.",
    h1Em: ["fast", "and", "built", "to", "sell."],
    intro:
      "Your website has one job: turning a visitor into a call, a WhatsApp message or an order. We design it for that, fast on mobile, written for Google, and delivered in your name, code and domain included.",
    includes: [
      "A custom design, mobile-first, never a bought theme.",
      "A structure ready for SEO: tags, sitemap, structured data.",
      "A contact form connected to WhatsApp and your inbox.",
      "A full handover: code, domain and logins in your name.",
    ],
    outcomes: [
      { h: "Fast by default", p: "Core Web Vitals in the green: your pages load fast, Google notices, and your visitors stay." },
      { h: "Built to convert", p: "A clear hierarchy and calls to action placed where the decision is made." },
      { h: "Easy to keep alive", p: "You edit your text and images without calling us or breaking anything." },
    ],
    tags: ["Next.js", "React", "WordPress", "TypeScript", "SEO"],
    faqs: [
      { q: "How long does it take to build the website?", a: "Two to four weeks for a business website, four to eight for an online store. The deadline is firm and written on the quote." },
      { q: "Can I edit the content myself?", a: "Yes. You get a simple interface for your text, images and pages, with a one-hour walkthrough." },
      { q: "Do I really own the website?", a: "Completely. Code, content, domain and hosting are put in your name and handed over at delivery." },
      { q: "Next.js or WordPress?", a: "Next.js for maximum speed and custom work; WordPress when you want a familiar admin and to publish without us. We advise based on your team and your budget, not on our preferences." },
    ],
    featureSections: [
      {
        eyebrow: "What you get",
        title: "Four ways to\nwin customers.",
        titleEm: ["win", "customers."],
        subtitle: "Depending on what you sell, your website doesn't work the same way.",
        cards: [
          { title: "Business websites", desc: "Your services, your proof and your number, where visitors look for them.", checks: ["Custom design", "Mobile-first", "Structured copy", "One-click contact"] },
          { title: "Online stores", desc: "Customers who choose, order and pay on their own, even at night.", checks: ["CMI & Stripe payments", "Stock management", "Short checkout", "Order tracking"] },
          { title: "Performance", desc: "Every second of loading saved keeps one more visitor.", checks: ["Optimized images", "Static rendering", "CDN caching", "Lighthouse score 90+"] },
          { title: "Technical SEO", desc: "Built to be understood and ranked by Google from day one.", checks: ["Tags and headings", "Structured data", "Sitemap & robots", "Analytics connected"] },
        ],
      },
    ],
    process: {
      title: "From the first call\nto a live website.",
      titleEm: ["live", "website."],
      subtitle: "You approve each stage before the next. Nothing is ever sprung on you.",
      steps: [
        { n: "01", h: "Discovery", d: "1–2 days", checks: ["Your goals", "Your competitors", "Scope and firm quote"] },
        { n: "02", h: "Sitemap & copy", d: "2–4 days", checks: ["Page plan", "Content outline", "Target keywords"] },
        { n: "03", h: "Design", d: "3–5 days", checks: ["Real mockups", "Your feedback", "Approval before code"] },
        { n: "04", h: "Development", d: "1–2 weeks", checks: ["Responsive build", "Speed optimization", "Forms and tracking"] },
        { n: "05", h: "Launch", d: "1–2 days", checks: ["Mobile testing", "SEO checked", "One-hour training"] },
      ],
    },
    sectors: {
      title: "A website that speaks\nto your customers.",
      titleEm: ["to", "your", "customers."],
      subtitle: "A hotelier and a lawyer don't need the same website. Here is what we put forward for yours.",
      groups: [
        { label: SECTORS.retail, cases: ["Catalog and product pages", "CMI and Stripe payments", "In-store pickup"] },
        { label: SECTORS.tourism, cases: ["Direct booking", "Multilingual website", "Galleries and tours"] },
        { label: SECTORS.pro, cases: ["Appointment booking", "References and proof", "Qualified form"] },
        { label: SECTORS.health, cases: ["Treatments presented", "Practitioner profiles", "Appointment booking"] },
        { label: SECTORS.industry, cases: ["Technical catalog", "B2B quote request", "Document area"] },
        { label: SECTORS.education, cases: ["Programs presented", "Online enrollment", "Student area"] },
        { label: SECTORS.creative, cases: ["Polished portfolio", "SaaS product pages", "Blog and news"] },
        { label: SECTORS.public, cases: ["Accessible website (WCAG)", "Online donations", "News and appeals"] },
      ],
    },
    whyUs: {
      title: "Why trust us\nwith your website.",
      titleEm: ["your", "website."],
      subtitle: "What really changes compared with a bought theme or a provider who never picks up.",
      points: [
        { h: "A fixed price, stated upfront", p: "The quote is firm before we start. No add-ons along the way, no surprise at delivery." },
        { h: "Delivered in weeks, not months", p: "Two to four weeks for a business website, with a launch date committed to in the quote." },
        { h: "You talk to the people who code", p: "No project manager in between: you brief the people who build your website directly." },
        { h: "Nothing locks you in", p: "Code, domain, hosting and logins are yours. You can leave tomorrow without losing anything." },
      ],
    },
    pricing: {
      title: "Your website's price,\nwithout a meeting.",
      titleEm: ["without", "a", "meeting."],
      subtitle: "Three packages on display. The final quote confirms the price, it doesn't inflate it.",
      tiers: [
        { name: "Basic", price: en(PRICES["website-creation"]["Vitrine"]), note: "Front-end brochure site, delivered in 5 to 7 days", from: false, features: ["Up to 5 pages: home, services, about, contact", "Custom design in your brand's colours", "Reads perfectly on phone, tablet and desktop", "Contact form wired to your email address", "WhatsApp button and links to your social accounts", "Domain name and hosting free for the first year", "Static pages, no admin area"] },
        { name: "Standard", price: en(PRICES["website-creation"]["Business"]), note: "Front-end and back-end, delivered in 2 to 3 weeks", featured: true, from: false, features: ["Everything in Basic", "Up to 12 pages", "Custom back-end with a database", "Admin area: change your own text and images", "Blog or news, managed from your dashboard", "Form submissions stored, with email alerts", "Baseline SEO: tags, sitemap, Search Console"] },
        { name: "Premium", price: en(PRICES["website-creation"]["Boutique"]), note: "Online store with an admin page, delivered in 4 to 6 weeks", from: false, features: ["Everything in Standard", "Product catalogue, variants and stock control", "Cart, checkout and online payment", "Admin page: orders, customers, stock, promotions", "Customer accounts and order history", "Shipping costs configurable by city", "One hour of handover training over video"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "seo",
    name: "SEO services",
    keyword: "SEO agency Morocco",
    metaTitle: "SEO Agency in Morocco | Google Rankings | WEVTEX",
    metaDescription:
      "SEO agency in Morocco: audit, keywords, content and link building to climb Google and win customers. SEO services from MAD {{prix:seo/Essentiel}} a month.",
    eyebrow: "Search engine optimization",
    h1: "SEO agency in Morocco,\nget found by those searching for you.",
    h1Em: ["get", "found"],
    intro:
      "Your customers already type your trade into Google. The only question: do they land on you or on your competitor? We fix what's holding your website back, write the pages that answer their searches and build the authority that puts you ahead.",
    includes: [
      "A full technical audit, with fixes applied, not just listed.",
      "A keyword strategy based on buying intent, not raw volume.",
      "Optimization of your existing pages and creation of the missing ones.",
      "A readable monthly report: rankings, traffic, leads generated.",
    ],
    outcomes: [
      { h: "Traffic that lasts", p: "A position won keeps bringing visitors months later, with no ad budget." },
      { h: "Qualified visitors", p: "We target searches close to buying, not the ones that inflate statistics." },
      { h: "Measured progress", p: "Every month you see what moved, what was done and what comes next." },
    ],
    tags: ["Technical audit", "Keywords", "Content", "Link building"],
    faqs: [
      { q: "How long before we see results?", a: "The first movements appear around the third month, significant gains between the sixth and the ninth. SEO is built, not bought." },
      { q: "Do you guarantee first place?", a: "No, and nobody seriously can. We commit to the work done and to full transparency, not to a position only Google decides." },
      { q: "Do I need to rebuild my website?", a: "Not necessarily. The audit tells whether your current website can be fixed or is better rebuilt, and we say so plainly." },
    ],
    featureSections: [
      {
        eyebrow: "What we work on",
        title: "What puts you\nahead of competitors.",
        titleEm: ["ahead", "of", "competitors."],
        subtitle: "None is enough alone. We work on them together, in this order.",
        cards: [
          { title: "Technical", desc: "What stops Google from reading your website, fixed by us.", checks: ["Speed and Core Web Vitals", "Indexing and crawling", "Structured data", "Mobile version"] },
          { title: "Keywords", desc: "What your customers actually type before buying.", checks: ["Intent analysis", "Competitor research", "Long-tail queries", "Content plan"] },
          { title: "Content", desc: "Pages that answer better than the ones already ranking.", checks: ["Page optimization", "Missing pages created", "Internal linking", "Content in English and French"] },
          { title: "Authority", desc: "The links and signals that put you ahead.", checks: ["Quality link building", "Relevant directories", "Press relations", "Link monitoring"] },
        ],
      },
    ],
    process: {
      title: "What happens,\nmonth after month.",
      titleEm: ["month", "after", "month."],
      subtitle: "In the first month we reset everything. Then a monthly rhythm where you see every action.",
      steps: [
        { n: "01", h: "Audit", d: "1 week", checks: ["Technical analysis", "Current rankings", "Competitor analysis"] },
        { n: "02", h: "Strategy", d: "3–5 days", checks: ["Priority keywords", "Content plan", "Measurable goals"] },
        { n: "03", h: "Fixes", d: "2–3 weeks", checks: ["Technical fixes", "Page optimization", "Internal linking"] },
        { n: "04", h: "Content & links", d: "ongoing", checks: ["New pages", "Link building", "Updates"] },
        { n: "05", h: "Report", d: "every month", checks: ["Rankings and traffic", "Actions taken", "Next month's priorities"] },
      ],
    },
    sectors: {
      title: "Your customers' searches,\nnot ours.",
      titleEm: ["not", "ours."],
      subtitle: "Queries, competition and buying cycles change from one trade to another.",
      groups: [
        { label: SECTORS.retail, cases: ["Category pages", "Product pages", "Brand queries"] },
        { label: SECTORS.tourism, cases: ["Seasonal queries", "Destination pages", "Multilingual SEO"] },
        { label: SECTORS.pro, cases: ["Trade queries", "Expertise content", "City pages"] },
        { label: SECTORS.health, cases: ["Symptom queries", "Specialty pages", "Sources and trust"] },
        { label: SECTORS.industry, cases: ["Technical queries", "Solution pages", "B2B long tail"] },
        { label: SECTORS.education, cases: ["Course queries", "Educational content", "Degree pages"] },
        { label: SECTORS.creative, cases: ["Product queries", "In-depth content", "Topical authority"] },
        { label: SECTORS.public, cases: ["Information queries", "Technical accessibility", "Institutional content"] },
      ],
    },
    whyUs: {
      title: "Why trust us\nwith your SEO.",
      titleEm: ["your", "SEO."],
      subtitle: "SEO attracts easy promises. Here is what we do differently.",
      points: [
        { h: "We fix, not just advise", p: "The audit doesn't leave you with a to-do list for someone else: we apply the fixes ourselves." },
        { h: "No ranking promises", p: "We commit to a precise, transparent amount of work, never to a position only Google decides." },
        { h: "Reports you can understand", p: "No unreadable dashboard: what was done, what it produced, what comes next. On one page." },
        { h: "No long commitment", p: "Three months minimum while the work takes effect, then month to month. Leave whenever you want, with everything." },
      ],
    },
    pricing: {
      title: "SEO plans\nwith no long commitment.",
      titleEm: ["no", "long", "commitment."],
      subtitle: "Three paces depending on the competition for your keywords. Three months minimum, then you're free.",
      tiers: [
        { name: "Basic", price: en(PRICES["seo"]["Essentiel"]), note: "Per month, 3-month minimum", from: false, features: ["Research on the core keywords of your trade", "Titles, meta descriptions and tags optimised", "XML sitemap and robots.txt, submitted to Google", "Search Console and Analytics installed and configured", "Technical errors blocking indexing fixed", "Monthly ranking report"] },
        { name: "Intermediate", price: en(PRICES["seo"]["Croissance"]), note: "Per month, 3-month minimum", featured: true, from: false, features: ["Everything in Basic", "Google Maps profile optimised, photos and posts", "AI-assisted keyword research on buying intent", "Your existing pages rewritten for those keywords", "Local SEO: city pages and Moroccan directories", "Tracking of calls and enquiries coming from Google"] },
        { name: "Advanced", price: en(PRICES["seo"]["Concurrentiel"]), note: "Per month, contested markets", from: false, features: ["Everything in Intermediate", "Advanced keyword research and competitor analysis", "Content strategy and optimised article writing", "Listings on Clutch, Sortlist and reference directories", "Link building and citations to build your authority", "Deep technical work, speed and Core Web Vitals", "Aiming for page one on your priority searches"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "local-seo",
    name: "Google Maps & local SEO",
    keyword: "local SEO Morocco",
    metaTitle: "Local SEO & Google Maps Ranking in Morocco | WEVTEX",
    metaDescription:
      "Local SEO in Morocco: optimized Google Business Profile, top 3 on Google Maps and customer reviews. Setup from MAD {{prix:local-seo/Mise en place}}, then MAD {{prix:local-seo/Entretien}} a month.",
    eyebrow: "Google Maps & local SEO",
    h1: "Local SEO and Google Maps in Morocco,\nbe the listing people call.",
    h1Em: ["the", "listing", "people", "call."],
    intro:
      "When someone searches for a “dentist” or a “garage” near them, Google shows three listings before anything else. We make sure yours is one of them: a complete Google Business Profile, a strong position on Maps and a steady flow of customer reviews.",
    includes: [
      "Creation or full takeover of your Google Business Profile.",
      "Optimization of your Maps position in your catchment area.",
      "Consistent listings in the directories that matter in Morocco.",
      "A simple method to collect customer reviews continuously.",
    ],
    outcomes: [
      { h: "Direct calls", p: "A well-ranked profile generates calls and directions without going through your website." },
      { h: "Visible in your area", p: "You rise on the searches made a few kilometers from your door." },
      { h: "A reputation kept up", p: "Regular reviews and careful replies: the first thing a hesitant customer sees." },
    ],
    tags: ["Google Business", "Maps", "Customer reviews", "Directories"],
    faqs: [
      { q: "Does it work if I don't have a shop?", a: "Yes. A service area can be declared without a displayed address: that is the case for tradespeople, plumbers or consultants who travel to their clients." },
      { q: "How long before I climb on Maps?", a: "The first effects often show in four to six weeks. The position then strengthens with reviews and regular posts." },
      { q: "Do you handle negative reviews?", a: "We prepare replies and a method to reduce their impact. A negative review handled well often reassures more than a perfect score." },
    ],
    featureSections: [
      {
        eyebrow: "What we work on",
        title: "What lifts\na local listing.",
        titleEm: ["a", "local", "listing."],
        subtitle: "Four workstreams that really weigh in Google's local ranking.",
        cards: [
          { title: "Google Business Profile", desc: "The storefront prospects see before your website.", checks: ["Exact categories", "Hours and area", "Photos and products", "Regular posts"] },
          { title: "Maps ranking", desc: "Climbing into the three shown at the top of the results.", checks: ["Catchment area", "Local pages", "Proximity signals", "Tracking by neighborhood"] },
          { title: "Citations & directories", desc: "The same details everywhere, or Google starts to doubt.", checks: ["Moroccan directories", "Consistent name and address", "Duplicates cleaned up", "Social networks"] },
          { title: "Customer reviews", desc: "The social proof that triggers the call or the visit.", checks: ["Automated collection", "Written replies", "Real-time alerts", "Dispute handling"] },
        ],
      },
    ],
    process: {
      title: "How we\nmake you visible.",
      titleEm: ["make", "you", "visible."],
      subtitle: "Setup in a few weeks, then light monthly upkeep.",
      steps: [
        { n: "01", h: "Audit", d: "2–3 days", checks: ["Current Maps position", "Competing profiles", "Duplicates and errors"] },
        { n: "02", h: "Optimization", d: "1 week", checks: ["Profile completed", "Categories and area", "Photos and services"] },
        { n: "03", h: "Citations", d: "1–2 weeks", checks: ["Local directories", "Consistent details", "Links to the website"] },
        { n: "04", h: "Reviews", d: "ongoing", checks: ["Collection method", "Written replies", "Rating tracking"] },
        { n: "05", h: "Upkeep", d: "every month", checks: ["Posts", "Rank tracking", "Local report"] },
      ],
    },
    sectors: {
      title: "What makes people call,\ntrade by trade.",
      titleEm: ["trade", "by", "trade."],
      subtitle: "A local search doesn't play out the same way in every trade.",
      groups: [
        { label: SECTORS.retail, cases: ["Products on the profile", "Directions", "Local promotions"] },
        { label: SECTORS.tourism, cases: ["Photos and amenities", "Guest reviews", "Booking from Maps"] },
        { label: SECTORS.pro, cases: ["Hours and contact", "Service area", "Client reviews"] },
        { label: SECTORS.health, cases: ["Appointment booking", "On-call hours", "Patient reviews"] },
        { label: SECTORS.industry, cases: ["Sites and depots", "Delivery hours", "Sales contact"] },
        { label: SECTORS.education, cases: ["Open days", "Campus location", "Parent reviews"] },
        { label: SECTORS.creative, cases: ["Office and team", "Work in photos", "Client reviews"] },
        { label: SECTORS.public, cases: ["Opening hours", "Collection points", "Local events"] },
      ],
    },
    whyUs: {
      title: "Why trust us\nwith your local visibility.",
      titleEm: ["your", "local", "visibility."],
      subtitle: "A field where many sell a listing and stop there.",
      points: [
        { h: "We know the Moroccan ground", p: "The directories that matter here aren't the ones in international guides. We work on the ones that really count." },
        { h: "Measured street by street", p: "We track your position from several points in your city, not from a distant server that always says yes." },
        { h: "Reviews, without the fakes", p: "We set up collection from your real customers. Bought reviews show, get penalized and backfire." },
        { h: "Light upkeep", p: "After setup, a few hundred dirhams a month are enough to hold the position." },
      ],
    },
    pricing: {
      title: "Simple prices\nto get found.",
      titleEm: ["to", "get", "found."],
      subtitle: "A one-time setup, then light monthly upkeep.",
      tiers: [
        { name: "Setup", price: en(PRICES["local-seo"]["Mise en place"]), note: "One-time · within 2 weeks", features: ["Profile created or taken over", "Categories and area optimized", "Photos and services", "10 local directories", "Review collection method"] },
        { name: "Upkeep", price: en(PRICES["local-seo"]["Entretien"]), note: "Per month · no commitment", featured: true, features: ["Monthly posts", "Review replies", "Rank tracking", "Hours kept up to date", "Monthly report"] },
        { name: "Multi-location", price: en(PRICES["local-seo"]["Multi-sites"]), note: "Per month · from 3 locations", features: ["All profiles managed", "Consistency across locations", "Tracking per location", "Centralized reviews", "Consolidated report"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "ads",
    name: "Google & Meta ads",
    keyword: "Google Ads agency Morocco",
    metaTitle: "Google Ads & Facebook Ads Agency in Morocco | WEVTEX",
    metaDescription:
      "Google Ads and Meta ads agency in Morocco: Google, Facebook and Instagram campaigns, landing page and conversion tracking. From MAD {{prix:ads/Lancement}} a month.",
    eyebrow: "Online advertising",
    h1: "Google Ads and Meta ads agency in Morocco,\nadvertising that pays for itself.",
    h1Em: ["pays", "for", "itself."],
    intro:
      "Online advertising can bring you customers this week, or silently burn your budget. We build your Google, Facebook and Instagram campaigns, the page that receives the click and the tracking that tells you what every dirham brought back.",
    includes: [
      "Complete campaign setup, from targeting to visuals.",
      "A dedicated landing page, built to convert the paid click.",
      "Conversion tracking installed and verified, down to the call or the purchase.",
      "A monthly report showing the cost per lead.",
    ],
    outcomes: [
      { h: "Immediate results", p: "Unlike SEO, a well-tuned campaign brings enquiries from the very first week." },
      { h: "A controlled budget", p: "You set the envelope, we optimize what it brings back. Nothing is spent without being measured." },
      { h: "A known cost per customer", p: "You know what a lead costs, and so whether the campaign is worth scaling up." },
    ],
    tags: ["Google Ads", "Meta Ads", "Landing page", "Tracking"],
    faqs: [
      { q: "What ad budget should I plan?", a: "Plan at least MAD 2,000 to 3,000 of media spend a month to get usable data. Below that, campaigns don't have enough to learn from." },
      { q: "Is the ad budget included?", a: "No. Our fees cover design and management; the media budget is paid directly to Google or Meta, in your name and on your card." },
      { q: "Do I need to redo my homepage?", a: "We'd rather build a page dedicated to the campaign. Sending paid traffic to a general homepage cuts conversions." },
    ],
    featureSections: [
      {
        eyebrow: "What we manage",
        title: "What separates spending\nfrom investing.",
        titleEm: ["from", "investing."],
        subtitle: "Four essential pieces. Miss one and the budget evaporates.",
        cards: [
          { title: "Targeting", desc: "Speaking to the people who can really buy from you.", checks: ["Search intent", "Lookalike audiences", "Geographic areas", "Costly exclusions"] },
          { title: "Creative", desc: "Visuals and copy that stop the scroll.", checks: ["Visuals sized per format", "Tested hooks", "A/B variants", "Mobile-ready"] },
          { title: "Landing page", desc: "The click is paid for: the page can't afford mistakes.", checks: ["Page dedicated to the campaign", "Instant loading", "Short form", "Proof and guarantees"] },
          { title: "Measurement", desc: "Without reliable tracking, optimization is guesswork.", checks: ["Verified conversions", "Tracked calls", "Cost per lead", "Return on ad spend"] },
        ],
      },
    ],
    process: {
      title: "How we launch\nyour campaigns.",
      titleEm: ["your", "campaigns."],
      subtitle: "Two weeks of preparation, then continuous optimization.",
      steps: [
        { n: "01", h: "Strategy", d: "2–3 days", checks: ["Measurable goal", "Target audiences", "Budget and channels"] },
        { n: "02", h: "Creative", d: "3–5 days", checks: ["Visuals and copy", "Landing page", "Variants to test"] },
        { n: "03", h: "Setup", d: "2 days", checks: ["Accounts and access", "Conversion tracking", "End-to-end check"] },
        { n: "04", h: "Launch", d: "1 week", checks: ["Gradual rollout", "Daily monitoring", "First adjustments"] },
        { n: "05", h: "Optimization", d: "ongoing", checks: ["Constant testing", "Weak ads cut", "Monthly report"] },
      ],
    },
    sectors: {
      title: "The right channel for\nwhat you sell.",
      titleEm: ["what", "you", "sell."],
      subtitle: "Channel, message and acquisition cost change with what you sell.",
      groups: [
        { label: SECTORS.retail, cases: ["Google Shopping", "Abandoned carts", "Lookalike audiences"] },
        { label: SECTORS.tourism, cases: ["Seasonal campaigns", "Targeting by country", "Visitor retargeting"] },
        { label: SECTORS.pro, cases: ["High-intent search", "Targeted LinkedIn", "Qualified forms"] },
        { label: SECTORS.health, cases: ["Strict local targeting", "Ad compliance", "Appointment booking"] },
        { label: SECTORS.industry, cases: ["Technical queries", "Quote requests", "B2B targeting"] },
        { label: SECTORS.education, cases: ["Back-to-school campaigns", "Parent targeting", "Tracked enrollments"] },
        { label: SECTORS.creative, cases: ["Free trials", "Interest targeting", "Creative testing"] },
        { label: SECTORS.public, cases: ["Donation campaigns", "Awareness", "Volunteer recruitment"] },
      ],
    },
    whyUs: {
      title: "Why trust us\nwith your campaigns.",
      titleEm: ["your", "campaigns."],
      subtitle: "A trade where opacity is common, and costly.",
      points: [
        { h: "Your accounts belong to you", p: "Campaigns are created on your own Google and Meta accounts. If we part ways, you keep everything: history, audiences, learning." },
        { h: "The landing page is included", p: "We don't send paid traffic to an unsuitable page. A dedicated page is built with the campaign." },
        { h: "We measure down to the lead", p: "Not just clicks: calls, forms and WhatsApp messages are tracked and attributed." },
        { h: "Fixed fees", p: "A known monthly amount, not a percentage of media spend that would push us to make you spend more." },
      ],
    },
    pricing: {
      title: "Fixed fees,\nad spend separate.",
      titleEm: ["ad", "spend", "separate."],
      subtitle: "You pay the platform directly. We only invoice the management.",
      tiers: [
        { name: "Campaign management", price: en(PRICES["ads"]["Lancement"]), note: "Management fee, ad budget not included", from: false, unit: "/ day", features: ["Google, Facebook and Instagram campaigns", "Visuals designed and ad copy written", "Targeting by city, age and interests", "Landing page built to convert", "Conversion tracking: calls, WhatsApp, forms", "Bids and budget adjusted continuously", "Performance report every week"] },
      ],
      footnote:
        "Management fees only. The ad budget is paid directly to Google or Meta, on your accounts and in your name.",
    },
  },

  /* ================================================================== */
  {
    slug: "mobile-apps",
    name: "Mobile app development",
    keyword: "mobile app development Morocco",
    metaTitle: "Mobile App Development Company in Morocco | WEVTEX",
    metaDescription:
      "Mobile app development in Morocco: iOS and Android apps with Flutter, one codebase, App Store and Google Play publishing included. From MAD {{prix:mobile-apps/Essentielle}}.",
    eyebrow: "Mobile apps",
    h1: "Mobile app development\nin Morocco, iOS and Android.",
    h1Em: ["iOS", "and", "Android."],
    intro:
      "An app is only worth something if your customers open it. We design it around what they actually do, then build it with Flutter: one codebase for iOS and Android, half the budget, and App Store and Google Play publishing handled.",
    includes: [
      "Screen designs before development, approved by you.",
      "A native iOS and Android app from a single codebase.",
      "Connection to your existing systems: website, stock, payments.",
      "Publishing on the App Store and Google Play, accounts included.",
    ],
    outcomes: [
      { h: "Half the budget", p: "One build instead of two, with a native feel on both platforms." },
      { h: "On the home screen", p: "An icon on your customers' phones beats a forgotten bookmark." },
      { h: "Direct notifications", p: "You reach your users without going through an algorithm or buying reach." },
    ],
    tags: ["Flutter", "iOS", "Android", "API"],
    faqs: [
      { q: "Why Flutter rather than native?", a: "One codebase for both platforms, with rendering and performance equivalent to native in the vast majority of cases. Budget and timelines are halved." },
      { q: "Do you handle App Store and Google Play publishing?", a: "Yes, end to end: developer accounts, listings, screenshots, compliance and submission. Allow one to two weeks of review on Apple's and Google's side." },
      { q: "What happens after launch?", a: "Three months of support are included. After that, a maintenance plan covers the updates iOS and Android require every year." },
    ],
    featureSections: [
      {
        eyebrow: "What we build in",
        title: "The features that bring\nyour customers back.",
        titleEm: ["your", "customers", "back."],
        subtitle: "The features most projects need, proven and ready.",
        cards: [
          { title: "Accounts & profiles", desc: "Sign-up, login and user management.", checks: ["Email and phone", "Google and Apple sign-in", "Profiles and preferences", "Password reset"] },
          { title: "Payments", desc: "Getting paid in the app, fully compliant.", checks: ["Bank cards", "Subscriptions", "In-app purchases", "Payment history"] },
          { title: "Notifications", desc: "Reaching the user at the right moment.", checks: ["Push notifications", "Targeted messages", "Scheduling", "Open rates"] },
          { title: "Offline & data", desc: "An app that stays useful without a network.", checks: ["Offline mode", "Sync", "Local cache", "Geolocation"] },
        ],
      },
    ],
    process: {
      title: "How your\napp comes to life.",
      titleEm: ["comes", "to", "life."],
      subtitle: "From scoping to publishing, with a testable version halfway through.",
      steps: [
        { n: "01", h: "Scoping", d: "1 week", checks: ["User journey", "Priority features", "Firm quote"] },
        { n: "02", h: "Design", d: "1–2 weeks", checks: ["All screens", "Clickable prototype", "Approval before code"] },
        { n: "03", h: "Development", d: "4–8 weeks", checks: ["Testable version", "Weekly check-ins", "Service connections"] },
        { n: "04", h: "Testing", d: "1–2 weeks", checks: ["Tests on real devices", "TestFlight beta", "Fixes"] },
        { n: "05", h: "Publishing", d: "1–2 weeks", checks: ["Store listings", "Submission", "Review follow-up"] },
      ],
    },
    sectors: {
      title: "What your app\nshould do for you.",
      titleEm: ["should", "do", "for", "you."],
      subtitle: "What the app should do depends entirely on your trade.",
      groups: [
        { label: SECTORS.retail, cases: ["Online ordering", "Loyalty points", "Delivery tracking"] },
        { label: SECTORS.tourism, cases: ["Booking and stay", "Destination guide", "Room key"] },
        { label: SECTORS.pro, cases: ["Client area", "Shared documents", "Appointment booking"] },
        { label: SECTORS.health, cases: ["Appointments and reminders", "Patient follow-up", "Session programs"] },
        { label: SECTORS.industry, cases: ["Fleet tracking", "Proof of delivery", "Route sheets"] },
        { label: SECTORS.education, cases: ["Courses and videos", "Quizzes and progress", "Parent area"] },
        { label: SECTORS.creative, cases: ["Product app", "Community", "Targeted notifications"] },
        { label: SECTORS.public, cases: ["Citizen reports", "Mobile donations", "Events calendar"] },
      ],
    },
    whyUs: {
      title: "Why trust us\nwith your app.",
      titleEm: ["your", "app."],
      subtitle: "Mobile is where projects most often go off the rails.",
      points: [
        { h: "A firm quote before coding", p: "The scope is written and priced. Changes along the way are priced separately, never imposed." },
        { h: "A testable version halfway", p: "You use the app before it's finished. Fixes cost far less at that stage." },
        { h: "Publishing included", p: "App Store rejections are frequent and confusing. We handle the submission and the back-and-forth until approval." },
        { h: "The source code is yours", p: "Delivered, documented and transferable. Another provider can take over without starting from scratch." },
      ],
    },
    pricing: {
      title: "How much\nyour app costs.",
      titleEm: ["your", "app", "costs."],
      subtitle: "Three levels of ambition, priced firmly after scoping.",
      tiers: [
        { name: "iOS and Android app", price: en(PRICES["mobile-apps"]["Essentielle"]), note: "Scope agreed together before we start", features: ["One codebase for iOS and Android, with Flutter", "Custom interface design, screen by screen", "User accounts and push notifications", "Back-end, database and API", "Dashboard to manage your content", "Published to the App Store and Google Play", "Three months of fixes included after launch"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "desktop-apps",
    name: "Custom software",
    keyword: "custom software development Morocco",
    metaTitle: "Custom Software Development in Morocco | WEVTEX",
    metaDescription:
      "Custom software development in Morocco: management, invoicing and inventory software for Windows and macOS, usable offline. From MAD {{prix:desktop-apps/Outil simple}}, with no per-seat license.",
    eyebrow: "Custom software",
    h1: "Custom software development in Morocco,\nbuilt around how you work.",
    h1Em: ["how", "you", "work."],
    intro:
      "If your teams spend their days between three Excel files and software that doesn't fit your trade, the problem isn't your teams. We develop the Windows and macOS software that follows the way you work, with no per-seat license, usable even offline.",
    includes: [
      "An analysis of your current processes before any code.",
      "A Windows and macOS application with an installer and automatic updates.",
      "Your existing data imported, Excel included.",
      "Training for your teams and user documentation.",
    ],
    outcomes: [
      { h: "No per-seat subscription", p: "You pay for development once, not a monthly license multiplied by your staff." },
      { h: "Works without internet", p: "Your teams keep working when the connection drops, and sync happens when it's back." },
      { h: "Exactly your processes", p: "The software follows your organization instead of forcing you into a generic mold." },
    ],
    tags: ["Windows", "macOS", "Offline", "Reporting"],
    faqs: [
      { q: "Why not simply buy software off the shelf?", a: "If existing software fits, we'll tell you, it's cheaper for you. Custom makes sense when your processes are specific or when per-seat licenses end up costing more than the development." },
      { q: "Can you recover our Excel data?", a: "Yes. Importing your existing files is part of the project: we import the history and check its consistency before go-live." },
      { q: "What if you're no longer around?", a: "The source code is delivered to you, documented. Any developer can take over the project, which is precisely the point of not depending on a software vendor." },
    ],
    featureSections: [
      {
        eyebrow: "What we build",
        title: "What the software\nwill do for you.",
        titleEm: ["for", "you."],
        subtitle: "The features most of the companies we work with ask for.",
        cards: [
          { title: "Management & invoicing", desc: "The administrative heart of your business, in one place.", checks: ["Quotes and invoices", "Customers and suppliers", "Payments and reminders", "Accounting export"] },
          { title: "Stock & production", desc: "Knowing what you have, where, and what to order.", checks: ["Stock in and out", "Inventories", "Threshold alerts", "Barcodes"] },
          { title: "Reporting", desc: "Figures that serve decisions, not a binder.", checks: ["Dashboards", "Excel and PDF exports", "Scheduled reports", "Full history"] },
          { title: "Access & audit trail", desc: "Who can do what, and who did what.", checks: ["Accounts and roles", "Action log", "Automatic backups", "Restore"] },
        ],
      },
    ],
    process: {
      title: "How your\nsoftware is built.",
      titleEm: ["is", "built."],
      subtitle: "Analysis weighs more than code: that's where the project is won.",
      steps: [
        { n: "01", h: "Analysis", d: "1–2 weeks", checks: ["On-site observation", "Current processes", "Specification"] },
        { n: "02", h: "Mockups", d: "1 week", checks: ["Main screens", "Approval with the teams", "Adjustments"] },
        { n: "03", h: "Development", d: "6–10 weeks", checks: ["Delivered in batches", "Tests with your data", "Weekly check-ins"] },
        { n: "04", h: "Data import", d: "1 week", checks: ["Existing data imported", "Consistency checks", "Temporary double entry"] },
        { n: "05", h: "Deployment", d: "1 week", checks: ["Workstation setup", "Team training", "Documentation"] },
      ],
    },
    sectors: {
      title: "Your trade's rules,\nfinally respected.",
      titleEm: ["finally", "respected."],
      subtitle: "Every trade has its rules, its documents and its data-entry habits.",
      groups: [
        { label: SECTORS.retail, cases: ["Checkout and payments", "Multi-store stock", "Labels and barcodes"] },
        { label: SECTORS.tourism, cases: ["Room planning", "Stay invoicing", "Night reports"] },
        { label: SECTORS.pro, cases: ["Client files", "Quotes and invoicing", "Time tracking"] },
        { label: SECTORS.health, cases: ["Patient records", "Practitioner schedules", "Billing and insurers"] },
        { label: SECTORS.industry, cases: ["Production orders", "Traceability", "Quality control"] },
        { label: SECTORS.education, cases: ["Enrollment and grades", "Timetables", "Report cards"] },
        { label: SECTORS.creative, cases: ["Project management", "Budget tracking", "Media library"] },
        { label: SECTORS.public, cases: ["Member tracking", "Donation receipts", "Activity reports"] },
      ],
    },
    whyUs: {
      title: "Why trust us\nwith your software.",
      titleEm: ["your", "software."],
      subtitle: "Custom software has a bad reputation. Often for good reasons.",
      points: [
        { h: "We'll tell you if it's pointless", p: "If software on the market covers 90% of your needs, we'll tell you rather than sell you a build." },
        { h: "Analysis before code", p: "We spend time in your offices watching how you work. That is what avoids delivering a tool nobody opens." },
        { h: "Delivered in batches", p: "You use the first features within a few weeks, without waiting for the end of the project to discover the result." },
        { h: "No per-seat license", p: "Install the software on as many workstations as you need. The price doesn't depend on your headcount." },
      ],
    },
    pricing: {
      title: "How much\nyour software costs.",
      titleEm: ["your", "software", "costs."],
      subtitle: "Priced firmly after the analysis phase, never before.",
      tiers: [
        { name: "Custom desktop software", price: en(PRICES["desktop-apps"]["Outil simple"]), note: "Scope agreed together before we start", features: ["Windows and macOS, works offline", "Management, invoicing, stock or production, to your trade", "Local database or shared across workstations", "Printing and Excel or PDF export", "Automatic backup of your data", "No monthly licence, the software is yours", "Training for your team on handover"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "custom-solutions",
    name: "Custom web applications",
    keyword: "web application development Morocco",
    metaTitle: "Web Application & SaaS Development in Morocco | WEVTEX",
    metaDescription:
      "Custom web application development in Morocco: SaaS platforms, client portals and APIs built around your business, nearshore for European companies. Discovery from MAD {{prix:custom-solutions/Cadrage}}.",
    eyebrow: "Custom web applications",
    h1: "Custom web application development\nin Morocco, when nothing else fits.",
    h1Em: ["nothing", "else", "fits."],
    intro:
      "When your teams copy the same data into three tools and your clients call to ask where their file stands, you need a platform of your own. We design web applications, client portals and SaaS that follow your rules exactly, and hold up as you grow.",
    includes: [
      "Serious discovery: processes, business rules, edge cases.",
      "A custom web platform, with roles, permissions and an audit trail.",
      "Integration with your existing tools through APIs.",
      "Complete technical and functional documentation.",
    ],
    outcomes: [
      { h: "Your rules, respected", p: "The edge cases that make your business valuable are coded, not worked around." },
      { h: "Everything connected", p: "Your tools finally talk to each other: no more double entry or files sent by email." },
      { h: "Ready to grow", p: "An architecture that handles ten times more users without being rewritten." },
    ],
    tags: ["SaaS", "API", "Extranet", "Integrations"],
    faqs: [
      { q: "How do you assess a complex project?", a: "Through a separately invoiced discovery phase, short and concrete: processes, rules, priorities. It ends with a firmly priced scope, and it's yours even if you don't continue with us." },
      { q: "Can you connect to our ERP?", a: "Yes, as long as it exposes an API or an accessible database. We have connected invoicing, stock and payroll tools to custom platforms." },
      { q: "Who hosts the platform?", a: "Your choice: on your side, or on infrastructure we manage. Either way, access and code stay in your name." },
    ],
    featureSections: [
      {
        eyebrow: "What we build",
        title: "Four projects that\nchange day-to-day work.",
        titleEm: ["change", "day-to-day", "work."],
        subtitle: "The four kinds of project that come up most often.",
        cards: [
          { title: "Client portals", desc: "Giving your clients a space to follow what concerns them.", checks: ["Secure area", "Documents and invoices", "Request tracking", "Built-in messaging"] },
          { title: "SaaS platforms", desc: "A product you sell by subscription.", checks: ["Multi-tenant", "Subscriptions and billing", "Onboarding", "Dashboard"] },
          { title: "Extranets & business tools", desc: "What your teams use every day.", checks: ["Approval workflows", "Roles and permissions", "Action log", "Reports"] },
          { title: "API architectures", desc: "Making systems that ignored each other talk.", checks: ["Documented REST API", "Synchronization", "Webhooks", "Error handling"] },
        ],
      },
    ],
    process: {
      title: "How a platform\nis designed.",
      titleEm: ["is", "designed."],
      subtitle: "Paid, serious discovery, then usable deliveries in batches.",
      steps: [
        { n: "01", h: "Discovery", d: "2–3 weeks", checks: ["Business workshops", "Rules and edge cases", "Priced scope"] },
        { n: "02", h: "Architecture", d: "1 week", checks: ["Data model", "Technical choices", "Integration plan"] },
        { n: "03", h: "Development", d: "8–16 weeks", checks: ["Delivered in batches", "Acceptance at each batch", "Weekly check-ins"] },
        { n: "04", h: "Integrations", d: "2–3 weeks", checks: ["Connection to your tools", "Data migration", "Load testing"] },
        { n: "05", h: "Go-live", d: "1–2 weeks", checks: ["Gradual switchover", "Training", "Documentation"] },
      ],
    },
    sectors: {
      title: "Where custom\nmakes the difference.",
      titleEm: ["makes", "the", "difference."],
      subtitle: "The more specific the trade, the more custom makes sense.",
      groups: [
        { label: SECTORS.retail, cases: ["Supplier portal", "Stock synchronization", "Per-customer pricing"] },
        { label: SECTORS.tourism, cases: ["Channel manager", "Agency portal", "Multi-site dashboard"] },
        { label: SECTORS.pro, cases: ["Client portal", "Service tracking", "Recurring billing"] },
        { label: SECTORS.health, cases: ["Shared records", "Multi-site scheduling", "Traceability and compliance"] },
        { label: SECTORS.industry, cases: ["Shipment tracking", "Carrier portal", "Proof of delivery"] },
        { label: SECTORS.education, cases: ["Course platform", "Online school admin", "Learning tracking"] },
        { label: SECTORS.creative, cases: ["SaaS product", "Subscriptions", "Public API"] },
        { label: SECTORS.public, cases: ["Online service desk", "Request management", "Regulatory reports"] },
      ],
    },
    whyUs: {
      title: "Why trust us\nwith your platform.",
      titleEm: ["your", "platform."],
      subtitle: "Custom projects rarely fail for technical reasons.",
      points: [
        { h: "Discovery is a deliverable", p: "It's invoiced, short, and you leave with it: documented processes, written rules, a priced scope. Even if you don't continue with us." },
        { h: "Delivered in usable batches", p: "Each batch goes live and gets used. You don't discover the whole platform on the last day." },
        { h: "A team that stays", p: "The same people from discovery to go-live. No internal handovers, no takeover midway." },
        { h: "Your code and your data", p: "Code repository, documentation, infrastructure access. You're never captive to a provider, us included." },
      ],
    },
    pricing: {
      title: "How much\nyour platform costs.",
      titleEm: ["your", "platform", "costs."],
      subtitle: "Discovery always comes before the final price.",
      tiers: [
        { name: "Discovery", price: en(PRICES["custom-solutions"]["Cadrage"]), note: "2 to 3 weeks · the deliverable is yours", features: ["Workshops with your teams", "Documented processes", "Data model", "Priced scope", "Deducted from the project if you continue"] },
        { name: "Platform", price: en(PRICES["custom-solutions"]["Plateforme"]), note: "From · 8 to 12 weeks", featured: true, features: ["Portal or business tool", "Accounts, roles and permissions", "Dashboards", "One integration included", "6 months of support"] },
        { name: "Full SaaS", price: en(PRICES["custom-solutions"]["SaaS complet"]), note: "From · scope defined together", features: ["Multi-tenant architecture", "Subscriptions and billing", "Multiple integrations", "Load testing", "Priority support"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },

  /* ================================================================== */
  {
    slug: "whatsapp-bots",
    name: "WhatsApp chatbots",
    keyword: "WhatsApp chatbot Morocco",
    metaTitle: "WhatsApp Chatbot for Business in Morocco | WEVTEX",
    metaDescription:
      "WhatsApp chatbot for businesses in Morocco: 24/7 answers in English, French and Darija, lead qualification and appointment booking. From MAD {{prix:whatsapp-bots/Essentiel}}.",
    eyebrow: "WhatsApp chatbots",
    h1: "WhatsApp chatbot in Morocco,\nan answer even at midnight.",
    h1Em: ["even", "at", "midnight."],
    intro:
      "In Morocco, your customers write on WhatsApp and expect an answer right away: in the evening, at the weekend, the same question thirty times a day. Our chatbot answers for you, in English, French and Darija, sorts the serious requests and hands over to your team at the right moment.",
    includes: [
      "Opening and configuring your WhatsApp Business API account.",
      "Conversation flows written for your business, in English, French and Darija.",
      "Lead qualification and handover to your team.",
      "Connection to your CRM, spreadsheet or inbox.",
    ],
    outcomes: [
      { h: "No enquiry lost", p: "Evening and weekend messages get an answer instead of waiting for Monday." },
      { h: "Sorted leads", p: "Your team only handles serious requests, already qualified by the bot." },
      { h: "Time given back", p: "Repetitive questions, opening hours, prices, availability, no longer tie anyone up." },
    ],
    tags: ["WhatsApp API", "Automation", "CRM", "Support"],
    faqs: [
      { q: "Is it official WhatsApp?", a: "Yes. We use Meta's official WhatsApp Business API, with your verified number. No unofficial tools: those end up blocked." },
      { q: "Does the bot replace my team?", a: "No, it protects it. It handles repetitive questions and hands over as soon as a request goes beyond the script, with the full history." },
      { q: "Does it speak Darija?", a: "Yes. Flows are written in English, French and Darija, based on how your customers actually write." },
    ],
    featureSections: [
      {
        eyebrow: "What your bot does",
        title: "What a well-tuned\nbot can do.",
        titleEm: ["can", "do."],
        subtitle: "Four uses that cover the vast majority of incoming requests.",
        cards: [
          { title: "Instant answers", desc: "The questions asked twenty times a day, handled on their own.", checks: ["Hours and address", "Prices and services", "Availability", "Frequent questions"] },
          { title: "Qualification", desc: "Sorting the curious from the buyers before spending time.", checks: ["Scoping questions", "Budget and timeline", "Lead scoring", "Targeted handover"] },
          { title: "Appointment booking", desc: "Filling the calendar without ten messages back and forth.", checks: ["Suggested slots", "Automatic confirmation", "Reminders the day before", "Rescheduling and cancelling"] },
          { title: "Follow-up & reminders", desc: "Getting back in touch at the right time, without thinking about it.", checks: ["Order tracking", "Quote follow-ups", "Satisfaction surveys", "Targeted campaigns"] },
        ],
      },
    ],
    process: {
      title: "How a bot\nis set up.",
      titleEm: ["is", "set", "up."],
      subtitle: "Three to four weeks, most of it spent writing the right answers.",
      steps: [
        { n: "01", h: "Analysis", d: "3–5 days", checks: ["Your real messages", "Recurring questions", "Cases to hand over"] },
        { n: "02", h: "Flows", d: "1 week", checks: ["Conversation tree", "Writing in EN, FR and Darija", "Handover rules"] },
        { n: "03", h: "Configuration", d: "3–5 days", checks: ["WhatsApp API account", "Verified number", "Templates approved by Meta"] },
        { n: "04", h: "Connection", d: "3–5 days", checks: ["CRM or spreadsheet", "Team notifications", "End-to-end tests"] },
        { n: "05", h: "Tuning", d: "every month", checks: ["Reading conversations", "Answers refined", "New flows"] },
      ],
    },
    sectors: {
      title: "The questions\nyour customers ask.",
      titleEm: ["your", "customers", "ask."],
      subtitle: "The questions a restaurant gets have nothing to do with a clinic's.",
      groups: [
        { label: SECTORS.retail, cases: ["Order tracking", "Product availability", "Returns and exchanges"] },
        { label: SECTORS.tourism, cases: ["Bookings", "Stay information", "Special requests"] },
        { label: SECTORS.pro, cases: ["Request qualification", "Appointment booking", "Sending documents"] },
        { label: SECTORS.health, cases: ["Appointments and reminders", "Documents to bring", "On-call hours"] },
        { label: SECTORS.industry, cases: ["Shipment tracking", "Quote requests", "Sales contact"] },
        { label: SECTORS.education, cases: ["Enrollment information", "Class reminders", "Answers to parents"] },
        { label: SECTORS.creative, cases: ["First-level support", "Trials and demos", "Feedback collection"] },
        { label: SECTORS.public, cases: ["Practical information", "Request routing", "Event sign-ups"] },
      ],
    },
    whyUs: {
      title: "Why trust us\nwith your automation.",
      titleEm: ["your", "automation."],
      subtitle: "Many bots annoy more than they help. Here is how we avoid that.",
      points: [
        { h: "The official API, nothing else", p: "Unofficial solutions get your number blocked sooner or later, often at the worst moment. We go through Meta, with your verified number." },
        { h: "Written from your real messages", p: "We read your past conversations before writing anything. The flows answer the questions actually asked." },
        { h: "Handover at the right moment", p: "The bot recognizes what it can't handle and passes to a person with the full history, without making the customer repeat themselves." },
        { h: "Tuned every month", p: "We reread the conversations and fix what jams. A bot nobody maintains degrades within weeks." },
      ],
    },
    pricing: {
      title: "How much\nyour chatbot costs.",
      titleEm: ["your", "chatbot", "costs."],
      subtitle: "A one-time setup, then a subscription for upkeep.",
      tiers: [
        { name: "Essential", price: en(PRICES["whatsapp-bots"]["Essentiel"]), note: `Setup · then MAD ${en(MONTHLY["whatsapp-bots"]["Essentiel"])} a month`, features: ["WhatsApp API account", "Up to 10 flows", "Answers to common questions", "Handover to your team", "Monthly tuning"] },
        { name: "Qualification", price: en(PRICES["whatsapp-bots"]["Qualification"]), note: `Setup · then MAD ${en(MONTHLY["whatsapp-bots"]["Qualification"])} a month`, featured: true, features: ["Everything in Essential", "Unlimited flows", "Lead qualification", "Appointment booking", "CRM connection", "Monthly reports"] },
        { name: "Custom", price: en(PRICES["whatsapp-bots"]["Sur mesure"]), note: "From · scope defined together", features: ["Free-text understanding by AI", "Several languages", "Multiple integrations", "Outbound campaigns", "Priority support"] },
      ],
      footnote: PRICE_FOOTNOTE,
    },
  },
];

/** A service with its English search layer merged in. */
function withSeoEn(s: Service): Service {
  const seo = SERVICE_SEO_EN[s.slug];
  if (!seo) return s;
  return {
    ...s,
    faqs: [...s.faqs, ...seo.faqs],
    seoSections: seo.sections,
    seoKeywords: seo.keywords,
    seoCityLabel: seo.cityLabel,
  };
}

export const SERVICES_EN: Service[] = BASE.map((s) => fillPricesDeep(withSeoEn(s), "en"));

export const SERVICE_SLUGS_EN = SERVICES_EN.map((s) => s.slug);
export const getServiceEn = (slug: string) => SERVICES_EN.find((s) => s.slug === slug);

/* Same contract as the French pages: every marketed service has a detail
   page, and every detail page is marketed. */
const missing = MARKETED_EN.filter((m) => !SERVICE_SLUGS_EN.includes(m.slug)).map((m) => m.slug);
const unlisted = SERVICE_SLUGS_EN.filter((slug) => !MARKETED_EN.some((m) => m.slug === slug));
if (missing.length || unlisted.length) {
  throw new Error(`English service slugs out of sync: missing ${missing.join(", ")}; unlisted ${unlisted.join(", ")}.`);
}
/* The page name must be the one the menus show. */
for (const s of SERVICES_EN) {
  const m = MARKETED_EN.find((x) => x.slug === s.slug);
  if (m && m.name !== s.name) throw new Error(`English service name mismatch for ${s.slug}: "${m.name}" vs "${s.name}".`);
}

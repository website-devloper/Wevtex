import type { Post } from "../../blog-data";

/**
 * English posts 1–3: website prices, choosing an agency, business website or
 * online store. Same facts and prices as the French posts; written for the
 * English searches ("how much does a website cost in morocco", "website
 * prices in morocco"), with amounts in MAD.
 */

export const POSTS_A_EN: Post[] = [
  /* ================================================================== */
  {
    slug: "how-much-does-a-website-cost-in-morocco",
    title: "How much does a website cost in Morocco in 2026?",
    metaTitle: "How Much Does a Website Cost in Morocco in 2026? | WEVTEX",
    metaDescription:
      "A business website in Morocco costs MAD {{prix:website-creation/Vitrine}} to 15,000, an online store MAD {{prix:website-creation/Boutique}} to 40,000. What makes the price vary, and the yearly costs.",
    keyword: "how much does a website cost in morocco",
    excerpt:
      "The real price ranges by type of website, what pushes the bill up, and the yearly costs nobody mentions before you sign.",
    answer:
      "In Morocco, a professional business website costs between MAD {{prix:website-creation/Vitrine}} and 15,000, a full company website between MAD {{prix:website-creation/Business}} and 30,000, and an online store between MAD {{prix:website-creation/Boutique}} and 40,000. A mobile app starts around MAD {{prix:mobile-apps/Essentielle}}. The gap comes from the number of pages, the copywriting and the features to build, not from the provider.",
    category: "Pricing & budget",
    publishedAt: "2026-09-10",
    readingMinutes: 8,
    relatedService: "website-creation",
    relatedPosts: ["business-website-or-online-store", "how-to-choose-a-web-design-agency-in-morocco"],
    body: [
      {
        type: "p",
        text: "The price of a website is the first question we're asked and the only one most agencies answer with “it depends”. That's true, and useless. Here are the ranges the Moroccan market works with, what moves the needle within each range, and the yearly costs nobody tells you about.",
      },
      { type: "h2", text: "Website prices in Morocco, by type of website" },
      {
        type: "p",
        text: "A web project falls into one of five families. Each one is a different amount of work, and that is where the budget is decided, before any discussion of design.",
      },
      {
        type: "table",
        head: ["Type of website", "Range (MAD)", "Usual timeline"],
        rows: [
          ["Business website (3 to 5 pages)", "{{prix:website-creation/Vitrine}} – 15,000", "1 to 3 weeks"],
          ["Company website (10 to 20 pages)", "{{prix:website-creation/Business}} – 30,000", "3 to 6 weeks"],
          ["Online store", "{{prix:website-creation/Boutique}} – 40,000", "4 to 8 weeks"],
          ["Platform or business software", "{{prix:custom-solutions/Plateforme}} – 60,000+", "8 to 16 weeks"],
          ["iOS + Android mobile app", "From MAD {{prix:mobile-apps/Essentielle}}", "4 to 12 weeks"],
        ],
      },
      {
        type: "p",
        text: "These are the prices of a professional provider who delivers a website that is yours, hosted on your domain, with code you can take back. Below MAD 900 you aren't buying a website: you are renting a template on a platform, and you lose it the day you stop paying.",
      },
      { type: "h2", text: "What really makes the bill vary" },
      {
        type: "p",
        text: "Six factors explain almost the whole gap between a MAD 5,000 quote and a MAD 30,000 quote for what looks, from afar, like the same website.",
      },
      {
        type: "ul",
        items: [
          "The number of unique pages. Five pages isn't half of ten: each page has its own structure, content and mobile version.",
          "Copywriting. If you supply your text, you save. If the agency writes it, count several days of work, and a website with real copy ranks better than one that's merely filled in.",
          "Design. An adapted template costs less than a design drawn for you. The difference shows mostly in credibility, not in the technology.",
          "Features. A form is an hour's work. Online payment, a customer area, booking with time slots, stock sync: each is a project within the project.",
          "Languages. A French-Arabic or French-English website isn't a French site translated: every piece of content needs a second version, and Arabic reads right to left.",
          "The initial SEO. Structure, tags, speed, structured data: that is real work, and it decides whether the website gets found or just looks nice.",
        ],
      },
      { type: "h2", text: "The yearly costs nobody mentions" },
      {
        type: "p",
        text: "The build price isn't the cost of the website. Three lines come back every year, and they stay modest as long as you plan for them.",
      },
      {
        type: "ul",
        items: [
          "The domain name: MAD 100 to 400 a year depending on the extension (.ma, .com).",
          "Hosting: from MAD 0 on modern platforms for a business website, to MAD 1,500–6,000 a year for a store with traffic.",
          "Maintenance: updates, backups, security fixes and small changes. Count MAD 300 to 1,500 a month depending on the size of the website, or nothing if you take care of it yourself.",
        ],
      },
      {
        type: "note",
        text: "Always ask for the quote to separate the build, the first year of hosting and maintenance. A single “all-inclusive” price with no breakdown is the best way to discover fees after launch.",
      },
      { type: "h2", text: "Why two quotes can differ threefold" },
      {
        type: "p",
        text: "For the same brief, the gap between providers comes from what is included, not from margin. A low quote often leaves out copywriting, photos, the Arabic version, payment setup, training and post-launch support. A higher quote includes them, and plans time for the back-and-forth every real project involves.",
      },
      {
        type: "p",
        text: "The useful comparison is therefore not “what's the price” but “what do I get, and what will I be charged on top”. An honest quote tells you what it doesn't cover.",
      },
      { type: "h2", text: "How much you should spend, depending on your situation" },
      {
        type: "p",
        text: "A budget is decided by what the website must bring in, not by what the neighbor paid.",
      },
      {
        type: "ol",
        items: [
          "You're starting out and want to exist on Google and on WhatsApp: a well-made business website of 3 to 5 pages is enough, around MAD {{prix:website-creation/Vitrine}} to {{prix:website-creation/Business}}. You'll build on it later.",
          "Your business is running and you lose enquiries for lack of online credibility: a company website with real copy, between MAD {{prix:website-creation/Business}} and {{prix:website-creation/Boutique}}, with serious work on the service pages.",
          "You sell products: a store from MAD {{prix:website-creation/Boutique}}, with CMI or Stripe payment and stock management. Below that, you'll have a catalog, not a sales channel.",
          "You have an internal process that costs you hours: that is software or a platform, not a website, and the budget is set after a discovery phase.",
        ],
      },
      { type: "h2", text: "Our position on prices" },
      {
        type: "p",
        text: "Wevtex publishes its starting packages on every service page: MAD {{prix:website-creation/Vitrine}} for a business website of up to 5 pages delivered in 7 to 14 days, MAD {{prix:website-creation/Business}} for a company website of up to 15 pages with copywriting, MAD {{prix:website-creation/Boutique}} for a complete online store. Every project then gets a firm quote after a fifteen-minute call, and that quote doesn't move along the way.",
      },
    ],
    faqs: [
      {
        q: "What is the minimum price for a professional website in Morocco?",
        a: "Around MAD {{prix:website-creation/Vitrine}} for a business website of a few pages, custom-designed and handed over to you. Below that, you're on a platform subscription, where the website stops existing if you stop paying.",
      },
      {
        q: "Does the price include the domain name and hosting?",
        a: "With us, the first year is included in the usual packages; after that the domain costs MAD 100 to 400 a year and hosting MAD 0 to 6,000 a year depending on the type of website. Have this point spelled out on any quote, because practices vary.",
      },
      {
        q: "Do I have to pay everything when I order?",
        a: "No. The usual practice in Morocco is a deposit on ordering and the balance on delivery, sometimes in three payments on long projects. A provider who demands 100% before starting is a signal worth examining.",
      },
      {
        q: "Does a more expensive website rank better on Google?",
        a: "Not automatically. What counts is structure, speed and above all content written for the real searches of your customers. A well-written MAD 6,000 website beats a MAD 30,000 website with no text.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "how-to-choose-a-web-design-agency-in-morocco",
    title: "How to choose a web design agency in Morocco: the complete guide",
    metaTitle: "How to Choose a Web Design Agency in Morocco | WEVTEX",
    metaDescription:
      "The eight questions to ask before signing, the red flags, and how to compare two quotes that don't contain the same lines. A practical guide.",
    keyword: "how to choose a web design agency in morocco",
    excerpt:
      "Eight questions that separate a serious provider from a mockup seller, and the three clauses to check before you sign.",
    answer:
      "To choose a web design agency in Morocco, check three things before anything else: live websites you can open and test, a line-by-line quote, and a written clause that gives you ownership of the website, the code and the logins. Everything else, technology, team size, years in business, comes after.",
    category: "Choosing a provider",
    publishedAt: "2026-09-10",
    readingMinutes: 9,
    relatedService: "website-creation",
    relatedPosts: ["how-much-does-a-website-cost-in-morocco", "nextjs-or-wordpress"],
    body: [
      {
        type: "p",
        text: "Choosing an agency commits far more than the build budget: you hand someone your online presence, your content, your domain and often your customer data. Here is how to assess a provider in Morocco without being technical, whether you are a Moroccan business or a foreign company hiring remotely.",
      },
      { type: "h2", text: "Start with their work, not their pitch" },
      {
        type: "p",
        text: "An agency that delivers has live websites. Ask for three addresses, open them on your phone and judge three things: loading time, readability on mobile, and how easy it is to find how to contact them. If you are shown mockups rather than live websites, or screenshots without links, the projects either don't exist or are no longer presentable.",
      },
      {
        type: "p",
        text: "Also check whether their work resembles what you need. An agency that has only built business websites lacks the reflexes of an e-commerce project, where checkout, payment and stock management do all the work.",
      },
      { type: "h2", text: "The eight questions to ask before signing" },
      {
        type: "ol",
        items: [
          "Who owns the website once paid for, the code, the content, the domain and the logins? The answer must be “you”, and it must be in writing.",
          "What happens if we stop working together? Can you leave with the website, or does it leave with the provider?",
          "Who writes the copy? If you do, it's real work to plan for; if the agency does, it's a line on the quote.",
          "Will the website be delivered with the basics of SEO: titles, descriptions, structure, speed, sitemap?",
          "What is the timeline, and what does it rest on? A credible timeline accounts for your feedback, not just the agency's work.",
          "What exactly does maintenance cover, and at what price after the first year?",
          "Will I be able to edit my content myself, and with which tool?",
          "Who will be my contact, and through which channel? A project followed on WhatsApp with a named person moves faster than an anonymous ticket.",
        ],
      },
      { type: "h2", text: "How to compare two quotes that don't look alike" },
      {
        type: "p",
        text: "Two quotes for the same project rarely contain the same lines, which makes comparing totals misleading. Rebuild the scope: number of pages, copywriting included or not, number of languages, features, first-year hosting, training, length of support. Then add to the cheaper quote everything it leaves out. The gap often halves, and sometimes reverses.",
      },
      {
        type: "note",
        text: "A one-line quote, “website creation: MAD 12,000”, isn't comparable and doesn't protect you. Ask for the breakdown before discussing the price.",
      },
      { type: "h2", text: "The red flags" },
      {
        type: "ul",
        items: [
          "A promise of “first place on Google” with a deadline. Nobody can guarantee a ranking, and claiming it is the most reliable sign you're being sold hot air.",
          "Refusal to give you access to your own hosting or domain.",
          "A domain registered in the agency's name rather than yours. It's your asset: it must be in your name from day one.",
          "No address, no name, no verifiable landline or business WhatsApp.",
          "A price far below the market with no explanation: work left undone always comes back, either as extra fees or as a website to redo.",
          "Unrealistic timelines. A complete store in five days means a template filled in a hurry.",
        ],
      },
      { type: "h2", text: "Agency, freelancer or platform: which one for you" },
      {
        type: "p",
        text: "A freelance web developer costs less and suits a business website perfectly, as long as you accept the availability risk: one person gets sick and takes holidays. An agency costs more but covers several trades, design, development, copywriting, SEO, and stays reachable after delivery. A self-service platform is the cheapest and fine for testing an idea, as long as you accept not owning the result and staying limited to what the tool can do.",
      },
      {
        type: "p",
        text: "The deciding factor isn't the provider's legal form but the question above: what happens to your website if this person or this company disappears tomorrow?",
      },
      { type: "h2", text: "What the contract should include" },
      {
        type: "p",
        text: "Three clauses avoid almost every dispute we see when a client brings us a website built elsewhere: full ownership of the website and content on receipt of the final payment, handover of the logins (domain, hosting, admin, code) at delivery, and the precise scope with the number of revision rounds included.",
      },
      {
        type: "p",
        text: "Add the payment schedule and what triggers delivery. A project that ends badly, in Morocco as anywhere, almost always ends badly over a point nobody had written down.",
      },
    ],
    faqs: [
      {
        q: "Should I choose an agency in my city?",
        a: "It isn't essential, but a nearby provider is easier for a meeting, a photo shoot or an on-site review. We work from Casablanca with clients across Morocco and abroad, by video call and on WhatsApp.",
      },
      {
        q: "How long does choosing an agency take?",
        a: "Allow one to two weeks: two or three scoping conversations, then the quotes. An agency that sends you a priced quote without asking questions hasn't understood your project.",
      },
      {
        q: "Can an agency guarantee first place on Google?",
        a: "No. Rankings depend on Google, your competitors and time. What can be guaranteed is the work: technical structure, content, speed, Google Business Profile and rank tracking.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "business-website-or-online-store",
    title: "Business website or online store: which one for your business?",
    metaTitle: "Business Website or Online Store: Which One? | WEVTEX",
    metaDescription:
      "Business website or e-commerce: the simple rule to decide, the real cost and work of each option, and the cases where a business website sells better.",
    keyword: "business website or online store",
    excerpt:
      "The simple rule to decide, what each option really takes, and why a business website can earn more than a store.",
    answer:
      "Choose a business website if the sale closes through a conversation: a quote, an appointment, advice, a trial. Choose an online store if customers can decide alone, pay alone and receive a standard product. The question isn't the size of the company but how the sale closes today.",
    category: "Strategy",
    publishedAt: "2026-09-10",
    readingMinutes: 7,
    relatedService: "website-creation",
    relatedPosts: ["how-much-does-a-website-cost-in-morocco", "seo-in-morocco-where-to-start"],
    body: [
      {
        type: "p",
        text: "Many Moroccan businesses order an online store because it's what everyone does, then find they spend their days on WhatsApp anyway. Others stay on a business website when their products would sell on their own. Here is how to decide.",
      },
      { type: "h2", text: "The real difference between the two" },
      {
        type: "p",
        text: "A business website presents your activity and triggers contact: a call, a WhatsApp message, a form, a quote request, a booking. An online store runs the whole transaction: catalog, cart, payment, delivery, order tracking. The first sells your credibility, the second sells your products.",
      },
      {
        type: "p",
        text: "Technically, a store takes two to three times more work: product pages, stock management, CMI or Stripe payment, shipping fees, returns, automatic emails. That explains the price gap, from MAD {{prix:website-creation/Vitrine}}–15,000 for a business website to MAD {{prix:website-creation/Boutique}}–40,000 for a store.",
      },
      { type: "h2", text: "Choose a business website if…" },
      {
        type: "ul",
        items: [
          "Your price depends on the need: construction, consulting, training, events, transport, maintenance.",
          "Customers need reassurance or advice before buying: health, real estate, legal, education.",
          "You sell a service by appointment: clinic, salon, practice, studio, restaurant.",
          "You have few products but know-how to demonstrate, with projects and reviews.",
        ],
      },
      {
        type: "p",
        text: "In these cases, a well-written business website, with pages per service and per city, earns more than a store: it captures precise searches and brings qualified enquiries that you close at your price.",
      },
      { type: "h2", text: "Choose an online store if…" },
      {
        type: "ul",
        items: [
          "Your products have a fixed price and a description that is enough to decide.",
          "You already sell through Instagram or WhatsApp and spend too much time repeating price, stock and delivery.",
          "You have stock to move or a range that keeps changing.",
          "You want to sell beyond your city, or abroad to the diaspora.",
        ],
      },
      {
        type: "p",
        text: "A reliable signal: if every week you get messages asking “chhal taman?” (how much?) and “kayn?” (is it available?), the store is already justified. It doesn't replace WhatsApp, it takes the repetitive work out of it.",
      },
      { type: "h2", text: "The Moroccan case: cash on delivery" },
      {
        type: "p",
        text: "A large share of buyers in Morocco still prefer to pay on delivery. A store that only accepts cards loses those orders; a store that offers cash on delivery has to manage refused parcels and tracking. Plan for both, with order confirmation on WhatsApp before shipping: that is what cuts returned parcels the most.",
      },
      { type: "h2", text: "The third way: the catalog website" },
      {
        type: "p",
        text: "Between the two there is an option few providers offer, which suits many shops: a business website with a full catalog and displayed prices, but no cart. Each product opens a pre-filled WhatsApp conversation with its reference.",
      },
      {
        type: "p",
        text: "You keep the advice and the negotiation, you remove the repetitive questions, and the budget stays that of a business website. It's often the right first step before a real store the following year, once volumes justify it.",
      },
      { type: "h2", text: "How to decide in five minutes" },
      {
        type: "ol",
        items: [
          "Look at your last ten sales. How many would have closed without a single conversation? If it's under half, it's a business website.",
          "Count your products. Fewer than ten stable products: a catalog is enough. More than thirty, with variants: a store.",
          "Estimate the time spent answering the same questions. Beyond an hour a day, the store pays for itself in time saved.",
          "Check who will handle the orders. A store with nobody to prepare, ship and track parcels becomes a problem, not a channel.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a business website be turned into a store later?",
        a: "Yes, provided the website was built for it. A well-structured business website can take a store section without being rebuilt; it's a question to ask your provider before the build, not after.",
      },
      {
        q: "Does an online store earn more than a business website?",
        a: "Not necessarily. A store earns if the products sell without advice and if someone handles the orders. For a service business, a website that generates quote requests earns more, on a smaller budget.",
      },
      {
        q: "How many products justify a store?",
        a: "There's no absolute threshold, but below about ten stable products, a catalog with ordering through WhatsApp does the same job for much less.",
      },
    ],
  },
];

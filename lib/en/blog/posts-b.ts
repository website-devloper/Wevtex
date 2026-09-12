import type { Post } from "../../blog-data";

/**
 * English posts 4–6: SEO in Morocco, WhatsApp chatbots, Next.js vs WordPress.
 * Same rules: the answer first, sections that stand alone, published figures.
 */

export const POSTS_B_EN: Post[] = [
  /* ================================================================== */
  {
    slug: "seo-in-morocco-where-to-start",
    title: "SEO in Morocco: where to start to get found on Google",
    metaTitle: "SEO in Morocco: Where to Start to Get Found on Google | WEVTEX",
    metaDescription:
      "The first six SEO actions for a business in Morocco, in order: Google profile, real keywords, pages per service and per city.",
    keyword: "seo in morocco where to start",
    excerpt:
      "The first six actions, in order, and realistic timelines before the first enquiries arrive.",
    answer:
      "To get found on Google in Morocco, start with your Google Business Profile, then create a separate page for each service and each city you cover. Those two actions bring the first calls within weeks; ranking for broad terms such as “web agency morocco” takes six to twelve months.",
    category: "SEO",
    publishedAt: "2026-09-10",
    readingMinutes: 9,
    relatedService: "seo",
    relatedPosts: ["business-website-or-online-store", "nextjs-or-wordpress"],
    body: [
      {
        type: "p",
        text: "SEO is often sold as an obscure discipline. In practice, for a small Moroccan business, eighty percent of the result comes from six actions done in order, two of which cost nothing. Here is the order to do them in.",
      },
      { type: "h2", text: "1. Your Google Business Profile, before the website" },
      {
        type: "p",
        text: "For every local search, “dentist casablanca”, “caterer rabat”, “garage marrakech”, Google first shows a map with three businesses. That spot doesn't depend on your website but on your profile: exact category, service area, opening hours, recent photos, listed services, and above all customer reviews.",
      },
      {
        type: "p",
        text: "It's free, takes an hour to set up and is the only lever that produces calls within days. Ask every happy customer for a review, at the moment they're happy, with a direct link: it's the factor that moves your position on the map the most.",
      },
      { type: "h2", text: "2. Write the words your customers actually type" },
      {
        type: "p",
        text: "Businesses describe their trade in their own language, “thermal engineering solutions”, when their customers type “air conditioning installation casablanca price”. The website must contain the latter, in its headings and in its text.",
      },
      {
        type: "p",
        text: "Find them without a paid tool: type your service into Google and read the autocomplete suggestions, then the “People also ask” box and the related searches at the bottom of the page. Note the phrasings that come back, including misspellings and French-Arabic mixes. That's your starting list. If you also target English-speaking customers, repeat the exercise in English: the searches are different.",
      },
      { type: "h2", text: "3. One page per service, never one “Services” page" },
      {
        type: "p",
        text: "A single page listing eight services ranks for none of them. Google ranks pages, not companies: each service needs its own page, with its heading, its starting price, its frequent questions and its examples.",
      },
      {
        type: "p",
        text: "That is why this website has a page per service rather than a list. It's more work, and it's exactly what separates a website that exists from a website that gets found.",
      },
      { type: "h2", text: "4. One page per city you really cover" },
      {
        type: "p",
        text: "“Web design casablanca” is searched more often, and contested less fiercely, than “web design morocco”. One page per city, with genuinely different content, the local economy, the sectors, your clients in the area, captures those searches.",
      },
      {
        type: "note",
        text: "Never duplicate a city page by swapping the city name. Google detects the pattern and stops taking those pages into account. If you have nothing specific to say about a city, don't create the page.",
      },
      { type: "h2", text: "5. Speed and mobile, which decide the rest" },
      {
        type: "p",
        text: "In Morocco, most visits come from phones, often on average 4G. A website that takes more than three seconds to display loses half its visitors before saying hello, and Google knows it too.",
      },
      {
        type: "p",
        text: "Test yours on PageSpeed Insights, in mobile mode. The three usual causes of a bad score are uncompressed images, piled-up plugins and overloaded shared hosting. Fix them in that order.",
      },
      { type: "h2", text: "6. Publish regularly, about what people ask you" },
      {
        type: "p",
        text: "Every question your customers ask on the phone is an article. “How much does it cost”, “how long does it take”, “what's the difference between X and Y”: these are real searches, lightly contested, and they are the ones answer engines quote because they have a clear answer.",
      },
      {
        type: "p",
        text: "One article a month, written seriously, beats ten articles filled in a week and then nothing. Regularity counts more than volume.",
      },
      { type: "h2", text: "Realistic timelines" },
      {
        type: "table",
        head: ["Action", "First effects", "Full effect"],
        rows: [
          ["Google Business Profile", "1 to 3 weeks", "2 to 3 months"],
          ["Pages per service", "1 to 2 months", "4 to 6 months"],
          ["Pages per city", "2 to 3 months", "6 months"],
          ["Blog articles", "2 to 4 months", "6 to 12 months"],
          ["Broad terms (“web agency morocco”)", "6 months", "12 months and more"],
        ],
      },
      {
        type: "p",
        text: "A provider promising first place within a month is selling something other than SEO. SEO is slow at first, then cumulative: the enquiries it brings don't stop when you stop paying, unlike advertising.",
      },
    ],
    faqs: [
      {
        q: "How long before I show up on Google?",
        a: "A new website is indexed within days, but ranking usefully takes two to six months depending on the competition for your terms. Local SEO through the Google Business Profile is the fastest, often a few weeks.",
      },
      {
        q: "Does SEO work without an ad budget?",
        a: "Yes, they are two separate channels. Advertising buys immediate visits that stop with the budget; SEO builds positions that stay. Many businesses advertise in the first months, while SEO starts producing.",
      },
      {
        q: "Do I need a website in Arabic or English to rank in Morocco?",
        a: "It depends on your customers. Most commercial searches in Morocco are made in French or transliterated French; an Arabic version helps with the general public, and an English version with foreign customers, tourists and international companies. Neither replaces the work on French.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "whatsapp-chatbot-for-moroccan-businesses",
    title: "WhatsApp chatbots: how a Moroccan business can automate customer service",
    metaTitle: "WhatsApp Chatbot for Businesses in Morocco: A Practical Guide | WEVTEX",
    metaDescription:
      "What a WhatsApp chatbot really automates for a Moroccan business, what it costs, how long it takes to set up, and its limits.",
    keyword: "whatsapp chatbot for business morocco",
    excerpt:
      "What really automates, what shouldn't, and the real cost of a WhatsApp assistant in Morocco.",
    answer:
      "A WhatsApp chatbot automatically answers a business's recurring questions, prices, availability, opening hours, order tracking, appointment booking, and hands over to a person as soon as the request goes beyond its scope. In Morocco, setup starts at MAD {{prix:whatsapp-bots/Essentiel}} with a monthly subscription of MAD {{mensuel:whatsapp-bots/Essentiel}}, and the assistant is live in one to three weeks.",
    category: "Automation",
    publishedAt: "2026-09-10",
    readingMinutes: 8,
    relatedService: "whatsapp-bots",
    relatedPosts: ["business-website-or-online-store", "how-much-does-a-website-cost-in-morocco"],
    body: [
      {
        type: "p",
        text: "In Morocco, WhatsApp isn't one channel among others: it's where sales happen. The problem isn't being there, it's answering, in the evening, on Sunday, and thirty times a day to the same question.",
      },
      { type: "h2", text: "What a WhatsApp chatbot really automates" },
      {
        type: "p",
        text: "A well-tuned assistant handles requests that have a stable answer, which is most of a small business's incoming volume.",
      },
      {
        type: "ul",
        items: [
          "Prices, packages and conditions, with the exact answer rather than an approximation given in a hurry.",
          "Opening hours, address, directions and availability.",
          "Product availability and order tracking.",
          "Appointment booking, with real time slots offered.",
          "Lead qualification: budget, city, deadline, before passing to a salesperson.",
          "Follow-up on an abandoned cart or an unanswered quote.",
        ],
      },
      {
        type: "p",
        text: "It isn't magic: it's taking over the repetitive work, done at any hour and without typos.",
      },
      { type: "h2", text: "What shouldn't be automated" },
      {
        type: "p",
        text: "A complaint, an unhappy customer, a negotiation, a sensitive request: these exchanges must go to a person, immediately. An assistant that tries to handle a dispute makes the dispute worse.",
      },
      {
        type: "p",
        text: "The rule we apply: the assistant knows how to say it doesn't know, and hands over to a human in one sentence, without sending the customer in circles. It's the only way to automate without damaging the relationship.",
      },
      { type: "h2", text: "Scripted flows or AI: the real difference" },
      {
        type: "p",
        text: "A scripted chatbot follows a tree planned in advance: “type 1 for prices”. It's reliable, cheap, and stuck as soon as a question leaves the script. An AI assistant understands a freely worded request, in French, written Darija or English, and answers from your real information.",
      },
      {
        type: "p",
        text: "The second costs more and needs serious scoping, it must be given reliable sources and limits, but it's the only one that holds up against the way people actually write on WhatsApp, with mixed languages and no punctuation.",
      },
      { type: "h2", text: "What it costs, and how long it takes" },
      {
        type: "table",
        head: ["Plan", "Setup", "Monthly"],
        rows: [
          ["Essential, up to 10 flows", "MAD {{prix:whatsapp-bots/Essentiel}}", "MAD {{mensuel:whatsapp-bots/Essentiel}}"],
          ["Qualification, unlimited flows, CRM", "MAD {{prix:whatsapp-bots/Qualification}}", "MAD {{mensuel:whatsapp-bots/Qualification}}"],
          ["Custom, free-text understanding by AI", "from MAD {{prix:whatsapp-bots/Sur mesure}}", "depending on scope"],
        ],
      },
      {
        type: "p",
        text: "On top of these amounts comes the cost of conversations billed by WhatsApp Business, low at a small business's volumes. A simple assistant is live in one to three weeks; an agent connected to your catalog or CRM takes longer, because most of the work is the integration.",
      },
      { type: "h2", text: "WhatsApp Business app or the API: which one you need" },
      {
        type: "p",
        text: "The free WhatsApp Business app is enough for a greeting message, saved quick replies and a simple catalog. It allows no real automation, no multiple agents on the same number and no connection to your tools.",
      },
      {
        type: "p",
        text: "The WhatsApp Business API, the one automated assistants use, requires a verified account and a dedicated number, and it's what allows flows, AI, scheduled messages and several people working on the same conversation. Moving from one to the other happens without changing number in most cases.",
      },
      { type: "h2", text: "Where to start without getting it wrong" },
      {
        type: "ol",
        items: [
          "Reread your last hundred incoming messages and sort them. Three or four questions almost always make up most of the volume.",
          "Write the right answer to each, the one you'd want your best employee to give.",
          "Automate only those at first, with immediate handover for everything else.",
          "Listen to the real conversations for two weeks and fix what jams. An assistant is tuned with real exchanges, not in a lab.",
        ],
      },
      {
        type: "p",
        text: "This progression avoids the classic trap: an assistant that claims to know everything on day one and drives customers away before it's corrected.",
      },
    ],
    faqs: [
      {
        q: "Can the chatbot answer in Darija?",
        a: "Yes. Current models handle French, Arabic, written Moroccan Darija and English in the same conversation. A customer can ask in Darija and get an answer in Darija.",
      },
      {
        q: "Will I lose the human touch with my customers?",
        a: "Not if the assistant is set to hand over as soon as a request leaves its scope. What gets automated is the repetitive questions; your team gets that time back for the exchanges that deserve a person.",
      },
      {
        q: "Do I have to change my WhatsApp number?",
        a: "In most cases, no: an existing number can be migrated to the WhatsApp Business API. A number already used on the regular app must, however, be released before the migration.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "nextjs-or-wordpress",
    title: "Next.js or WordPress: which one for a fast, lasting website?",
    metaTitle: "Next.js or WordPress: Which One for Your Website? | WEVTEX",
    metaDescription:
      "Next.js or WordPress: speed, cost, security and editing independence compared. The decision table and the cases where each one wins.",
    keyword: "next.js or wordpress",
    excerpt:
      "Speed, security, upkeep cost and independence: what really separates the two, and when WordPress is still the right choice.",
    answer:
      "WordPress suits you if you publish often and want to edit everything yourself without a developer. Next.js suits you if speed, security and a custom experience matter more than total control over the layout. For a business website or a business platform, Next.js is faster and needs less upkeep; for a content website run daily by a non-technical team, WordPress stays simpler.",
    category: "Technology",
    publishedAt: "2026-09-10",
    readingMinutes: 8,
    relatedService: "website-creation",
    relatedPosts: ["how-to-choose-a-web-design-agency-in-morocco", "seo-in-morocco-where-to-start"],
    body: [
      {
        type: "p",
        text: "The technical choice is rarely yours to make, but its consequences are yours to live with: website speed, maintenance bills, security, and the ability to change a page without calling someone. Here are the differences that really matter.",
      },
      { type: "h2", text: "Speed: the most visible gap" },
      {
        type: "p",
        text: "A Next.js website serves pre-generated pages, with no database to query on each visit. A WordPress website builds the page on demand, then compensates with caching plugins. On a phone on average 4G, the usual situation in Morocco, the gap shows: a few hundred milliseconds against two to four seconds for a WordPress site loaded with plugins.",
      },
      {
        type: "p",
        text: "A well-optimized WordPress site, properly hosted and trimmed down, gets good scores. The problem isn't WordPress but what gets added to it: every plugin installed slows every page.",
      },
      { type: "h2", text: "Security and upkeep" },
      {
        type: "p",
        text: "WordPress runs a large share of the web, which makes it the most attacked target. Break-ins almost always come through an outdated plugin, not the core software. A WordPress website therefore needs real upkeep: updates, backups, monitoring.",
      },
      {
        type: "p",
        text: "A Next.js website published as static pages has no exposed database and no public admin panel: the attack surface is almost nil, and there are no plugins to update every month.",
      },
      { type: "h2", text: "Editing independence: WordPress's advantage" },
      {
        type: "p",
        text: "This is where WordPress keeps a clear lead. You add a page, change a photo, move a block, publish an article, without anyone. For a business that publishes several times a week, that's decisive.",
      },
      {
        type: "p",
        text: "A Next.js website can offer the same by connecting a content management system, but it's a component to plan from the start, with its cost. Without it, every change goes through a developer, acceptable for a ten-page website that rarely changes, painful for a news site.",
      },
      { type: "h2", text: "Cost, at build time and over three years" },
      {
        type: "table",
        head: ["", "WordPress", "Next.js"],
        rows: [
          ["Build (business website)", "Often cheaper", "Similar or higher"],
          ["Yearly hosting", "MAD 600 – 3,000", "MAD 0 – 1,200"],
          ["Monthly upkeep", "Required", "Minimal"],
          ["Content changes", "You, at no cost", "Developer, or a CMS to plan"],
          ["Redesign after 3 years", "Common (theme ages)", "Rare (code is yours)"],
        ],
      },
      {
        type: "p",
        text: "Over three years the gap narrows: what you save at build time with WordPress, you pay back in hosting, maintenance and paid plugins.",
      },
      { type: "h2", text: "Which one, depending on your situation" },
      {
        type: "ul",
        items: [
          "Blog, magazine, news website updated every day: WordPress.",
          "Company business website, service website, ad landing page: Next.js, for speed and peace of mind.",
          "Standard online store run in-house: WooCommerce or Shopify, rather than a custom build.",
          "Business platform, client area, web application: Next.js, because WordPress isn't made for that.",
          "Very tight budget and a need to publish yourself: WordPress, keeping plugins to a minimum.",
        ],
      },
      { type: "h2", text: "What we use, and why" },
      {
        type: "p",
        text: "Wevtex builds with Next.js because most of our clients want a website that loads fast on mobile, runs without monthly upkeep and belongs entirely to them, code included. This website is an example: every page is pre-generated and served as is, in French and in English.",
      },
      {
        type: "p",
        text: "When a client needs to publish every day, we say so and connect a content management system, or we recommend WordPress. The right tool is the one that fits the real use, not the one the provider prefers.",
      },
    ],
    faqs: [
      {
        q: "Can a WordPress website be migrated to Next.js?",
        a: "Yes. Content and images are recovered, and the old addresses are redirected to the new ones to keep the rankings already earned. It's a redesign project, not a simple conversion.",
      },
      {
        q: "Is Next.js better for SEO?",
        a: "It gives an edge on speed and technical cleanliness, which are real criteria. But content stays decisive: a well-written WordPress site beats an empty Next.js one.",
      },
      {
        q: "Will I be able to edit my Next.js website myself?",
        a: "Yes if a content management system is planned at build time; otherwise changes go through us. We ask the question before starting, because the answer changes the project's architecture.",
      },
    ],
  },
];

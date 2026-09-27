import type { Post } from "../../blog-data";

/**
 * English posts 7–10: app prices, Google Ads vs Facebook Ads, website or
 * Facebook page, selling online in Morocco. The questions English searchers
 * type ("how much does an app cost in morocco", "google ads vs facebook ads",
 * "sell online morocco"), with the same facts as the French posts.
 */

export const POSTS_C_EN: Post[] = [
  /* ================================================================== */
  {
    slug: "how-much-does-an-app-cost-in-morocco",
    title: "How much does a mobile app cost in Morocco in 2026?",
    metaTitle: "How Much Does an App Cost in Morocco in 2026? | WEVTEX",
    metaDescription:
      "A mobile app in Morocco starts at MAD {{prix:mobile-apps/Essentielle}}. What makes the price vary, real timelines and the costs after launch.",
    keyword: "how much does an app cost in morocco",
    excerpt:
      "The three levels of app and their price, what pushes the bill up, and the costs nobody mentions before publishing.",
    answer:
      "At Wevtex, an iOS and Android mobile app starts at MAD {{prix:mobile-apps/Essentielle}}, publishing to both stores included. Beyond that the price depends on the number of screens, user accounts, in-app payment and the systems to connect: the scope is quoted before we start.",
    category: "Pricing & budget",
    publishedAt: "2026-09-11",
    readingMinutes: 7,
    relatedService: "mobile-apps",
    relatedPosts: ["how-much-does-a-website-cost-in-morocco", "website-or-facebook-page"],
    body: [
      {
        type: "p",
        text: "“How much does an app cost?” has no answer until you know what the app must do. Here are the three levels that cover most projects, what makes the price vary within each, and the costs that arrive after publishing.",
      },
      { type: "h2", text: "The three levels of app and their price" },
      {
        type: "table",
        head: ["Level", "From", "Usual timeline", "Typically"],
        rows: [
          ["Essential", "From MAD {{prix:mobile-apps/Essentielle}}", "4 to 6 weeks", "Catalog, information, appointment booking, up to 8 screens"],
          ["Complete", "On quote", "8 to 12 weeks", "Customer accounts, in-app payments, notifications, admin area"],
          ["Custom", "On quote", "Depends on scope", "Complex business logic, offline mode, multiple integrations"],
        ],
      },
      {
        type: "p",
        text: "These prices cover iOS and Android at once. We develop with Flutter: one codebase runs natively on both platforms, which avoids paying twice for the same app.",
      },
      { type: "h2", text: "What makes the price of an app vary" },
      {
        type: "ul",
        items: [
          "The number of screens. Every screen is designed, developed and tested: it's the most readable unit of work.",
          "Native features: payment, geolocation, camera, notifications, offline mode. Each adds development and testing.",
          "The admin area, where you manage products, users and orders without going through us.",
          "Connections to what exists: your website, your stock, your ERP, a payment gateway.",
          "Design: a custom design costs more than an adapted template, but it's what makes people want to reopen the app.",
          "Languages: an app in French, Arabic and English needs three versions of every text, and Arabic reads right to left.",
        ],
      },
      { type: "h2", text: "The costs after launch" },
      {
        type: "p",
        text: "The development price isn't the total cost. Three lines come back, and they stay modest as long as you plan for them.",
      },
      {
        type: "ul",
        items: [
          "Developer accounts: Apple charges 99 dollars a year to publish on the App Store, Google 25 dollars once for Google Play. The accounts are opened in your name.",
          "Server hosting, if the app has accounts, orders or shared data.",
          "Maintenance: iOS and Android release a new version every year, and an app that isn't updated eventually stops working properly.",
        ],
      },
      { type: "h2", text: "Do you really need an app, or a website first?" },
      {
        type: "p",
        text: "An app makes sense when your customers come back often: repeat orders, loyalty, delivery tracking, regular bookings, a customer area. If your customer comes once, looks around and calls, a fast mobile website does the same job for a fraction of the price, and it's found on Google, which an app isn't.",
      },
      {
        type: "note",
        text: "Be wary of a price given before the screens and features are listed. An app quote without scoping is a quote that will change along the way.",
      },
      { type: "h2", text: "How to get a reliable price" },
      {
        type: "ol",
        items: [
          "Describe what the user does, step by step, from download to the action that earns you money.",
          "Separate the features needed at launch from those that can wait for a second version.",
          "Show two or three apps whose workings you like.",
          "Ask for a firm quote, broken down by screen and feature, with the timeline and what's included after publishing.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to pay Apple and Google to publish an app?",
        a: "Yes. Apple charges 99 dollars a year for the developer program, Google 25 dollars once for Google Play. We open these accounts in your name and handle the publishing.",
      },
      {
        q: "Can an app accept Moroccan card payments?",
        a: "Yes, through a payment gateway, as on a website. Depending on your business, we combine Moroccan cards, international cards and cash on delivery.",
      },
      {
        q: "Who owns the app?",
        a: "You do. The source code, the App Store and Google Play accounts and the server access are in your name, which leaves you free to develop the app further with anyone you like.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "google-ads-or-facebook-ads-morocco",
    title: "Google Ads or Facebook Ads: which one for a business in Morocco?",
    metaTitle: "Google Ads or Facebook Ads in Morocco: Which One? | WEVTEX",
    metaDescription:
      "Google Ads captures people already searching, Facebook and Instagram create demand. The right choice for your business, budget and goals in Morocco.",
    keyword: "google ads or facebook ads",
    excerpt:
      "Intent versus attention: which ad channel for which business, what budget to plan, and the trap that wastes half the clicks.",
    answer:
      "Choose Google Ads if your customers already search for your service on Google, like a plumber, a lawyer or a car rental: you pay to appear at the exact moment of the search. Choose Facebook and Instagram ads if your product sells on sight and on impulse, like fashion, cosmetics or restaurants: you create demand among a targeted audience. Many businesses in Morocco combine the two.",
    category: "Advertising",
    publishedAt: "2026-09-11",
    readingMinutes: 7,
    relatedService: "ads",
    relatedPosts: ["seo-in-morocco-where-to-start", "website-or-facebook-page"],
    body: [
      {
        type: "p",
        text: "Both platforms sell visibility, but not at the same moment of the decision. Choosing the wrong one means paying to be seen by people who aren't buying.",
      },
      { type: "h2", text: "The core difference: intent versus attention" },
      {
        type: "p",
        text: "On Google, people type what they want: “dentist rabat”, “air conditioning price casablanca”. They already have a need, and your ad arrives while they search. On Facebook and Instagram, people scroll their feed. They aren't looking for anything, and your visual has to stop them and make them want it.",
      },
      { type: "h2", text: "When Google Ads is the better choice" },
      {
        type: "ul",
        items: [
          "Services people search for when the need arises: repairs, health, legal, rentals, training.",
          "Considered purchases where people compare before calling, in B2B as with consumers.",
          "Local searches such as “near me” or “[trade] + city”.",
          "Products searched by name or reference, through Google Shopping.",
        ],
      },
      { type: "h2", text: "When Facebook and Instagram ads are the better choice" },
      {
        type: "ul",
        items: [
          "Products that sell on sight: fashion, cosmetics, decor, restaurants, real estate.",
          "Impulse buys and novelties nobody is searching for yet.",
          "Events, openings and time-limited promotions.",
          "Retargeting people who already visited your website without buying.",
        ],
      },
      { type: "h2", text: "Quick comparison" },
      {
        type: "table",
        head: ["Criterion", "Google Ads", "Facebook & Instagram ads"],
        rows: [
          ["Moment", "The person is searching", "The person is scrolling"],
          ["Format", "Text, Shopping, YouTube video", "Image, video, stories, carousel"],
          ["Targeting", "Keywords, city, radius", "Age, interests, city"],
          ["Best for", "Services, urgent needs, B2B", "Visual products, desire, novelties"],
          ["Key metric", "Cost per call or enquiry", "Cost per message or order"],
        ],
      },
      { type: "h2", text: "Budget: two lines not to confuse" },
      {
        type: "p",
        text: "A campaign always has two costs. The media budget, paid directly to Google or Meta, which pays for impressions and clicks: plan at least MAD 2,000 to 3,000 a month so the campaigns have enough data to learn. And management fees, which pay for design and running: at Wevtex, MAD {{prix:ads/Lancement}} a day, whether we run one channel or Google and Meta together.",
      },
      { type: "h2", text: "The trap that wastes half the clicks" },
      {
        type: "p",
        text: "The click is paid for, but the sale happens on the page that receives it. Sending an ad to a general homepage, slow or without a visible WhatsApp button, means paying for visits that leave. Every campaign deserves its landing page: one message, one offer, one button.",
      },
      { type: "h2", text: "How to know what works" },
      {
        type: "p",
        text: "The right indicator isn't the number of clicks but the cost of a lead or a sale. It requires tracking installed before launch: forms, calls and WhatsApp messages counted and attributed to the campaign that generated them. Without it, you optimize by feel.",
      },
    ],
    faqs: [
      {
        q: "Can I advertise on Facebook without a website?",
        a: "Yes, with Meta's built-in forms or by sending people to WhatsApp. A website remains useful to reassure the hesitant and to measure precisely what each campaign brings in.",
      },
      {
        q: "Is Google Ads suitable for a small local business?",
        a: "Yes. By targeting a city or a radius around your address, a small budget is enough to appear on searches in your area, without paying for clicks from elsewhere.",
      },
      {
        q: "Should I stop advertising once SEO takes off?",
        a: "Not necessarily. SEO reduces the dependence on advertising, but ads stay useful for launches, promotions and very contested searches where the top organic positions are out of reach.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "website-or-facebook-page",
    title: "Website or Facebook page: what does your business need?",
    metaTitle: "Website or Facebook Page: Which One in Morocco? | WEVTEX",
    metaDescription:
      "Is a Facebook or Instagram page enough? What social networks can't do, what a website adds, and when the two work together.",
    keyword: "website or facebook page",
    excerpt:
      "“Facebook is enough”: what social networks do well, what they will never do, and why the right choice is often both.",
    answer:
      "A Facebook or Instagram page is enough to be seen by people who already follow you. A website is for being found by people who don't know you yet, on Google, and it belongs to you: nobody can change the algorithm, suspend your account or limit your reach. For most businesses the two work together, with the website as the base and social networks as the amplifier.",
    category: "Strategy",
    publishedAt: "2026-09-11",
    readingMinutes: 6,
    relatedService: "website-creation",
    relatedPosts: ["business-website-or-online-store", "how-much-does-a-website-cost-in-morocco"],
    body: [
      {
        type: "p",
        text: "“My Facebook page is enough” is one of the reasons small Moroccan businesses give most often for not having a website. It isn't absurd: many customers really do come from social networks. But it forgets what a page can't do.",
      },
      { type: "h2", text: "What social networks do well" },
      {
        type: "ul",
        items: [
          "Show your activity day to day, in photos and videos.",
          "Keep in touch with your existing customers and the people around them.",
          "Receive messages quickly, often through WhatsApp.",
          "Reach a targeted audience through advertising.",
        ],
      },
      { type: "h2", text: "What a Facebook page doesn't do" },
      {
        type: "ul",
        items: [
          "Get you found on Google. When someone types “plumber casablanca” or “dental clinic rabat”, websites and Google profiles come up, rarely a Facebook page.",
          "Guarantee your audience. The algorithm decides how many of your followers see each post, and that share falls without you being able to do anything.",
          "Protect you. A hacked or suspended account and everything disappears overnight: followers, messages and history.",
          "Present a complete offer: pages per service, prices, a structured catalog, online payment.",
          "Reassure a demanding customer. In B2B, health or consulting, the lack of a website shows the moment someone checks who you are.",
        ],
      },
      { type: "h2", text: "What a website adds" },
      {
        type: "p",
        text: "A website is the only place online that belongs to you. It's found on Google by people searching for your trade, it presents each service on its own page, it gathers your proof, and it turns a visit into a call or a WhatsApp message. And unlike a page, you know exactly how many people visited it and what they did there.",
      },
      { type: "h2", text: "The right pair: a website as the base, social networks as the amplifier" },
      {
        type: "p",
        text: "The businesses that do best use each tool for what it does well. Social networks attract attention and keep the relationship going; the website captures searches, reassures and converts. Every post points to a specific page on the website, and the website points back to your social networks and WhatsApp.",
      },
      { type: "h2", text: "And the budget?" },
      {
        type: "p",
        text: "A professional business website starts at MAD {{prix:website-creation/Vitrine}} at Wevtex, delivered in 7 to 14 days, in your name and on your domain. It's a one-off investment, where a social page needs time every week and never really belongs to you.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "ol",
        items: [
          "Create or take over your Google Business Profile: it's free and it's what comes up first on local searches.",
          "Launch a simple website with a page per service, your contact details and a WhatsApp button.",
          "Connect it to your social networks, and point your posts to the right pages.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a website useful if my customers already know me?",
        a: "Yes, because they recommend you to others, who check on Google before calling. A website and an up-to-date Google profile turn that word of mouth into calls, instead of losing it to a better-presented competitor.",
      },
      {
        q: "Can I connect my website to my Instagram page and WhatsApp?",
        a: "Yes. The website shows your social networks and a WhatsApp button, and your posts point to the website's pages. The two reinforce each other instead of competing.",
      },
      {
        q: "What happens if my Facebook account is hacked?",
        a: "You can lose access for weeks, sometimes for good, along with your followers and messages. A website on your own domain keeps working and receiving customers in the meantime.",
      },
    ],
  },

  /* ================================================================== */
  {
    slug: "how-to-sell-online-in-morocco",
    title: "How to sell online in Morocco: payment, delivery and your store, the guide to getting started",
    metaTitle: "How to Sell Online in Morocco: The Starter Guide | WEVTEX",
    metaDescription:
      "Cash on delivery, CMI or Stripe, delivery by city, store or Instagram: the concrete steps to sell online in Morocco without losing parcels.",
    keyword: "how to sell online in morocco",
    excerpt:
      "Where to sell, how to get paid, how to deliver, and the habits that cut refused parcels: the practical guide to getting started.",
    answer:
      "To sell online in Morocco you need four things: a store that presents your products clearly on mobile, cash on delivery on top of card payment, a carrier that delivers to the cities you target, and an order confirmation on WhatsApp before each shipment to limit refused parcels.",
    category: "E-commerce",
    publishedAt: "2026-09-11",
    readingMinutes: 8,
    relatedService: "website-creation",
    relatedPosts: ["business-website-or-online-store", "google-ads-or-facebook-ads-morocco"],
    body: [
      {
        type: "p",
        text: "Selling online in Morocco has its own rules: many people still pay on delivery, they order from their phone, and they ask their questions on WhatsApp before buying. Here are the steps, in order, for a store that really sells.",
      },
      { type: "h2", text: "1. Choose where to sell: Instagram, a marketplace or your own store" },
      {
        type: "p",
        text: "Instagram lets you test an idea without investing, but every order goes through messages and nothing belongs to you. A marketplace brings traffic, in exchange for a commission and direct competition on the same page. A store in your name takes an initial investment, but every customer, every order and every review stays with you. Many start on Instagram and move to their own store as soon as answering messages takes more than an hour a day.",
      },
      { type: "h2", text: "2. Payment: cash on delivery and by card" },
      {
        type: "p",
        text: "Cash on delivery remains widely preferred in Morocco: a store that doesn't accept it loses a large share of its orders. In addition, Moroccan bank cards go through a gateway such as CMI, and international cards through a service such as Stripe, useful for the diaspora and for export.",
      },
      { type: "h2", text: "3. Delivery: carrier, areas and fees" },
      {
        type: "p",
        text: "Choose a carrier that covers the cities you target, with parcel tracking and cash-on-delivery collection paid back quickly. Show fees and delivery times by city before the order, not after: a fee discovered at the last moment is the first cause of abandoned carts.",
      },
      { type: "h2", text: "4. Cut refused parcels" },
      {
        type: "ul",
        items: [
          "Confirm every order on WhatsApp before shipping, with the summary and the amount.",
          "Show the total price clearly, delivery included.",
          "Announce realistic delivery times, then keep to them.",
          "Use photos true to the product received, especially for colors and sizes.",
          "Make the exchange and returns policy visible and simple.",
        ],
      },
      { type: "h2", text: "5. Product pages that sell" },
      {
        type: "ul",
        items: [
          "Several sharp photos, including one worn or in use.",
          "Price, availability and sizes or variants visible without searching.",
          "A description that answers the questions people ask you on WhatsApp.",
          "A WhatsApp button for those who want advice before buying.",
        ],
      },
      { type: "h2", text: "6. Bring in your first customers" },
      {
        type: "p",
        text: "Your Instagram followers are your first buyers: send them to the store. Then Facebook and Instagram ads create demand for products that sell on sight, Google Shopping captures people looking for a specific product, and well-written product pages gradually climb on Google with no ad budget.",
      },
      { type: "h2", text: "How much does an online store cost?" },
      {
        type: "p",
        text: "At Wevtex, a complete online store starts at MAD {{prix:website-creation/Boutique}}, delivered in 4 to 8 weeks, with CMI and Stripe payment, cash on delivery, stock management and training. On Shopify a monthly subscription is added; with WooCommerce there's no license, but hosting and updates to plan for.",
      },
    ],
    faqs: [
      {
        q: "Do I need a company to sell online in Morocco?",
        a: "To accept card payments you need a registered business, which lets you open a payment account with a bank or gateway. Auto-entrepreneur status or a company both work depending on your volume: an accountant will tell you which one fits.",
      },
      {
        q: "Is cash on delivery risky?",
        a: "The risk is refused parcels. It drops sharply with a WhatsApp confirmation before shipping, a total price shown from the start and delivery times that are kept.",
      },
      {
        q: "Can a Moroccan store sell abroad?",
        a: "Yes. With international card payment, a carrier that ships outside Morocco and prices shown in the right currency, a store can sell to the diaspora and to export markets.",
      },
    ],
  },
];

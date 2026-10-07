import type { ServiceSeo } from "../service-seo";

/**
 * The search layer of the English service pages.
 *
 * Sources, checked 2026-09-12:
 *  - Google autocomplete in English (hl=en) from Morocco (gl=ma) and from the
 *    US (gl=us), 486 queries: "web design morocco", "web design agency in
 *    morocco", "seo agency morocco", "google ads morocco", "mobile app
 *    development company in morocco", "software company morocco", "nearshore
 *    morocco", "ai automation agency morocco", "website prices in morocco"…
 *  - The English pages ranking on page one for those terms (agency pages,
 *    Clutch, Sortlist, price guides): exact term in the title and H1,
 *    question H2s, a short FAQ.
 *
 * Written for English searchers, not translated from French: who searches in
 * English about Morocco is often a foreign company, an expat-run business or
 * a hotel serving international guests, so the sections answer their
 * questions too (working in English, invoicing, time zone, nearshoring).
 * Same rules as the French layer: every phrase appears in visible text,
 * the answer comes first, and every price is a published one.
 */

import type { Service } from "../services-data";

export const SERVICE_SEO_EN: Record<string, ServiceSeo> = {
  /* ================================================================== */
  "website-creation": {
    cityLabel: "Web design",
    keywords: [
      "web design morocco",
      "web design agency morocco",
      "web design agency in morocco",
      "website design morocco",
      "web development morocco",
      "web development company morocco",
      "website development morocco",
      "web developer morocco",
      "web design casablanca",
      "web development casablanca",
      "web design marrakech",
      "web design agadir",
      "web designer rabat",
      "website prices in morocco",
      "website cost morocco",
      "ecommerce website morocco",
      "online store morocco",
      "shopify morocco",
      "shopify developer morocco",
      "wordpress developer morocco",
      "website redesign morocco",
      "web hosting morocco",
      "freelance web developer morocco",
      "best web design agency in morocco",
    ],
    sections: [
      {
        h2: "Web design in Morocco: what you get",
        paras: [
          "Wevtex is a web design agency based in Casablanca. We design and build professional websites for businesses in Morocco and abroad: business websites, 15-page company sites with copywriting, and online stores with Moroccan (CMI) or international (Stripe) card payments. Every website is designed from scratch, never taken from a bought theme.",
          "A professional website has three jobs: load fast on a phone on 4G, be understood by Google from launch day, and turn a visitor into a call or a WhatsApp message. That is how we judge website design in Morocco, far more than on looks alone.",
        ],
        bullets: [
          "Custom design, mobile-first",
          "Technical SEO built in: tags, sitemap, structured data",
          "Contact form connected to WhatsApp and your inbox",
          "Code, domain and logins in your name",
        ],
      },
      {
        h2: "A web design and development company in Morocco, from design to launch",
        paras: [
          "Design, web development, copywriting and launch: one web design agency in Morocco handles everything, with no subcontracting. You talk directly to the people who design and code your website, in English, French or Darija.",
          "Whether you run a small business, an SME or a group, website prices in Morocco at Wevtex start at MAD {{prix:website-creation/Vitrine}}, and every quote is free and firm. Affordable doesn't mean rushed: a website at MAD {{prix:website-creation/Vitrine}} is still custom-built and in your name.",
          "We are also a Shopify and WordPress web development company: we build on Shopify, on WordPress with WooCommerce, or custom with Next.js, and we can hand you a WordPress site you manage yourself.",
        ],
      },
      {
        h2: "How much does a website cost in Morocco?",
        paras: [
          "At Wevtex, a business website of up to 5 pages starts at MAD {{prix:website-creation/Vitrine}} and is delivered in 7 to 14 days. A company website of up to 15 pages, copywriting and blog included, starts at MAD {{prix:website-creation/Business}}, delivered in 3 to 4 weeks. A full online store starts at MAD {{prix:website-creation/Boutique}}, delivered in 4 to 8 weeks.",
          "The cost of a professional website in Morocco depends on the number of pages, the copywriting, the languages and the features to build (payments, booking, customer accounts). The quote is firm after a fifteen-minute call, and it doesn't move during the project.",
        ],
        links: [{ label: "How much does a website cost in Morocco", href: "/en/blog/how-much-does-a-website-cost-in-morocco" }],
      },
      {
        h2: "Ecommerce website development in Morocco",
        paras: [
          "We build online stores on Shopify, on WordPress with WooCommerce, or custom with Next.js. Shopify suits a fast start with a monthly subscription; WooCommerce suits owning the store outright; custom suits stores where speed or connections to your stock and point of sale matter most.",
          "An online store in Morocco needs to accept Moroccan cards through CMI, international cards through Stripe, and cash on delivery, which many buyers still prefer. A complete ecommerce website starts at MAD {{prix:website-creation/Boutique}}, delivered in 4 to 8 weeks, with stock management, training and six months of support.",
        ],
        bullets: [
          "Shopify, WooCommerce or custom",
          "CMI, Stripe and cash on delivery",
          "Order confirmation on WhatsApp",
          "Delivery fees by city and order tracking",
        ],
        links: [{ label: "How to sell online in Morocco", href: "/en/blog/how-to-sell-online-in-morocco" }],
      },
      {
        h2: "Website redesign in Morocco, without losing your rankings",
        paras: [
          "A redesign is due when your website is slow on mobile, looks broken on phones, can't be found on Google or is hard to update. We start by mapping the pages that bring traffic, then redirect every old address to its new page (301 redirects) to keep your rankings.",
          "We also take over ageing WordPress websites, to modernize them or move them to Next.js when that is the better choice. The redesign is priced after an audit of the current site, and the quote is firm before work starts.",
        ],
        links: [{ label: "Next.js or WordPress?", href: "/en/blog/nextjs-or-wordpress" }],
      },
      {
        h2: "Web hosting and domain names in Morocco",
        paras: [
          "We register your domain name, .ma or .com, and set up hosting in your name, with an SSL certificate and backups. The yearly cost is on the quote, separate from the build, so you know exactly what the website costs each year.",
        ],
      },
      {
        h2: "Why hire a web design agency rather than a website builder?",
        paras: [
          "A self-service builder costs less in the first month, but the site stays on the platform: you lose it the day you stop paying, and you are limited to what the tool can do. A web design agency delivers a website you own, written for the searches your customers make and optimized for speed.",
          "The difference shows on Google. A website with a clean structure, headings that use the words your customers type and fast pages ranks; a template filled in a hurry stays invisible. Freelance web developer or agency, ask the same question: who owns the site, and what happens if they disappear tomorrow?",
        ],
        links: [{ label: "How to choose a web design agency in Morocco", href: "/en/blog/how-to-choose-a-web-design-agency-in-morocco" }],
      },
    ],
    faqs: [
      {
        q: "What are website prices in Morocco at Wevtex?",
        a: "A business website starts at MAD {{prix:website-creation/Vitrine}}, a 15-page company website at MAD {{prix:website-creation/Business}} and an online store at MAD {{prix:website-creation/Boutique}}. Every project gets a firm quote after a fifteen-minute call.",
      },
      {
        q: "Do you work with foreign companies and in English?",
        a: "Yes. We work in English, French and Darija, with clients in Morocco and abroad. Calls happen by video, follow-up on WhatsApp, and quotes and invoices are in Moroccan dirhams.",
      },
      {
        q: "Can I build a website for free in Morocco?",
        a: "Yes, with free tools such as Google Sites or the free plans of website builders. The site then sits on a subdomain, shows the platform's branding and stays with the platform. For a professional website in your name, on your domain and ready for Google, our package starts at MAD {{prix:website-creation/Vitrine}}.",
      },
      {
        q: "How much does a Shopify or WordPress website cost?",
        a: "The build follows our packages, from MAD {{prix:website-creation/Vitrine}} for a business website and MAD {{prix:website-creation/Boutique}} for an online store. Shopify adds a monthly subscription paid directly to Shopify; WordPress has no license fee but needs hosting and regular updates.",
      },
      {
        q: "Business website or ecommerce website: which one?",
        a: "A business website if the sale closes through a conversation (a quote, an appointment, advice). An online store if customers can choose, pay and receive a product on their own. It's not about company size but about how you sell today.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We audit the current site, keep what works, redirect every old address and deliver a faster, better-ranked website on your current domain.",
      },
      {
        q: "Do you build websites in every city in Morocco?",
        a: "Yes. From Casablanca we design websites for clients in Rabat, Marrakech, Tangier, Agadir, Fez and across Morocco, with video calls and follow-up on WhatsApp.",
      },
    ],
  },

  /* ================================================================== */
  seo: {
    cityLabel: "SEO agency",
    keywords: [
      "seo agency morocco",
      "seo morocco",
      "seo services morocco",
      "seo expert morocco",
      "seo company morocco",
      "seo consultant morocco",
      "seo casablanca",
      "top seo agency in morocco",
      "ecommerce seo agency morocco",
      "google ranking morocco",
      "seo pricing morocco",
      "seo and geo",
      "multilingual seo morocco",
    ],
    sections: [
      {
        h2: "Why work with an SEO agency in Morocco?",
        paras: [
          "An SEO agency in Morocco knows how your customers actually search: in French, in English, in transliterated Darija, with local words such as “price”, “casablanca” or “near me”. Wevtex builds your SEO on those real searches, not on theoretical volumes.",
          "SEO is the only acquisition channel that keeps working when you stop paying. A position won on Google brings qualified visitors for months, where an ad campaign stops with its budget. For businesses targeting foreign customers, we also handle multilingual SEO, so each language ranks on its own.",
        ],
        bullets: [
          "Full technical SEO audit, fixes applied",
          "Keyword research based on buying intent",
          "Service and city pages written and optimized",
          "Link building and Google Business Profile",
          "Monthly report: rankings, traffic, leads",
        ],
      },
      {
        h2: "How much do SEO services cost in Morocco?",
        paras: [
          "At Wevtex, SEO starts at MAD {{prix:seo/Essentiel}} a month (Essential plan, 10 tracked keywords), MAD {{prix:seo/Croissance}} a month for the Growth plan with active link building and 30 keywords, and MAD {{prix:seo/Concurrentiel}} a month for competitive markets. Each plan has a three-month minimum, the time the work needs to produce results.",
          "SEO pricing in Morocco depends mostly on the competition for your keywords: ranking for “dentist agadir” doesn't take the same effort as “real estate agency casablanca”.",
        ],
      },
      {
        h2: "SEO consultant, freelancer or SEO company in Morocco?",
        paras: [
          "A freelance SEO consultant costs less and suits a simple website with a few keywords. An SEO company also covers the technical side, copywriting, link building and your Google profile, and stays available when one person can't. The right test isn't the status but what gets done each month and what you can see of it.",
          "We handle SEO for WordPress, WooCommerce, Shopify and Next.js websites. Ecommerce SEO, SEO for SMEs or for a single WordPress site: the method stays the same, only the priorities change.",
        ],
      },
      {
        h2: "SEO and GEO: found on Google, quoted by AI",
        paras: [
          "Answers generated by Google AI Overviews, ChatGPT or Perplexity quote pages that answer a question clearly, with verifiable facts and sections that stand on their own. That is GEO, generative engine optimization, and it is how we write your pages: a direct answer first, the detail after.",
        ],
      },
      {
        h2: "How long does SEO take to show results?",
        paras: [
          "The first improvements usually appear within one to three months on local searches and precise queries. Rankings on broad, competitive terms take six to twelve months. Anyone guaranteeing first place within weeks is selling something other than SEO.",
          "The work compounds: every optimized page and every link earned keeps counting. That is what makes SEO profitable over time, and why we measure the leads generated each month, not just rankings.",
        ],
        links: [
          { label: "SEO in Morocco: where to start", href: "/en/blog/seo-in-morocco-where-to-start" },
          { label: "Local SEO and Google Maps", href: "/en/local-seo-google-maps-morocco" },
        ],
      },
    ],
    faqs: [
      {
        q: "How much does an SEO agency cost in Morocco?",
        a: "At Wevtex, from MAD {{prix:seo/Essentiel}} a month for 10 tracked keywords to MAD {{prix:seo/Concurrentiel}} a month for competitive markets, with a three-month minimum. The price depends mostly on the competition for your keywords.",
      },
      {
        q: "Is ranking on Google free?",
        a: "Showing up in Google's organic results isn't paid to Google: rankings are earned by the quality of the site. The work to get there takes time or a provider. The ads at the top of the page are paid, that is Google Ads.",
      },
      {
        q: "How do I choose the best SEO agency in Morocco?",
        a: "The best SEO agency or SEO expert in Morocco for you is the one that shows real rankings, explains what will be done each month and leaves you owner of your accounts. A serious SEO expert never promises a guaranteed first place.",
      },
      {
        q: "Should I choose SEO or Google Ads?",
        a: "They work together. Google Ads brings enquiries from the first week but stops with the budget; SEO is slower but builds positions that stay. Many businesses run ads while SEO ramps up.",
      },
      {
        q: "Do you do SEO in English and French?",
        a: "Yes. Each language gets its own pages, keywords and structure, so a French page ranks on French searches and an English page on English ones, instead of one translated page ranking for neither.",
      },
      {
        q: "Does SEO work with AI-generated answers?",
        a: "Yes, as long as pages answer questions clearly, with verifiable facts and sections that stand alone. That is how Google AI Overviews, ChatGPT and Perplexity pick the sources they quote.",
      },
      {
        q: "Who owns the content and the accounts?",
        a: "You do. The content we write, the Google Search Console and Analytics accounts, and your Google Business Profile are in your name. If you stop the service, everything stays in place.",
      },
    ],
  },

  /* ================================================================== */
  "local-seo": {
    cityLabel: "Local SEO",
    keywords: [
      "local seo morocco",
      "google business profile morocco",
      "google my business morocco",
      "google maps morocco business",
      "rank on google maps",
      "add business to google maps",
      "is google business profile free",
      "google reviews for business",
      "near me searches",
    ],
    sections: [
      {
        h2: "How do you rank at the top of Google Maps in Morocco?",
        paras: [
          "To appear in the top three results on Google Maps, your Google Business Profile must be complete and consistent: exact category, service area, opening hours, recent photos, listed services and regular reviews. Wevtex creates or takes over your profile, optimizes it and gives you a simple method to collect customer reviews continuously. That is what local SEO in Morocco comes down to.",
          "Local SEO matters for every search like “dentist casablanca”, “restaurant marrakech” or “garage near me”. Google shows a map before the websites, and that is often where the call is decided.",
        ],
        bullets: [
          "Google Business Profile created or taken over",
          "Categories, area and services optimized",
          "Listing in 10 Moroccan local directories",
          "A method to collect and answer reviews",
        ],
      },
      {
        h2: "How do you add your business to Google Maps?",
        paras: [
          "Create a Google Business Profile (formerly Google My Business), choose the category, enter the address or the service area, then verify the profile (by code, call or video, depending on what Google asks). Creating it is free. What makes the difference afterwards is optimization: a half-filled profile doesn't show up against complete competitors.",
        ],
      },
      {
        h2: "How much does local SEO on Google Maps cost?",
        paras: [
          "Profile setup starts at MAD {{prix:local-seo/Mise en place}}, once, done within two weeks. Monthly upkeep (posts, review replies, rank tracking, opening hours) is MAD {{prix:local-seo/Entretien}} a month, with no commitment. For three locations or more, the Multi-location plan starts at MAD {{prix:local-seo/Multi-sites}} a month.",
        ],
        links: [
          { label: "SEO agency in Morocco", href: "/en/seo-agency-morocco" },
          { label: "Web design agency in Casablanca", href: "/en/web-design-casablanca" },
        ],
      },
    ],
    faqs: [
      {
        q: "Is Google Business Profile free?",
        a: "Yes. In Morocco as everywhere, Google Business Profile (formerly Google My Business) is free. What we charge for is the work: careful setup, optimization, posts and review management, which decide your position on Maps.",
      },
      {
        q: "My Google profile is suspended, what should I do?",
        a: "A suspension often comes from a non-compliant address, a name stuffed with keywords or too many changes. The cause must be fixed, then reinstatement requested from Google with supporting documents. We handle this when we take over a profile.",
      },
      {
        q: "How long does it take to show up on Google Maps?",
        a: "A new or corrected profile is visible within days. Reaching the top three on the map usually takes two to eight weeks, depending on competition in your area and your number of reviews.",
      },
      {
        q: "Do Google reviews affect rankings?",
        a: "Yes, it is one of the most visible factors. The number of reviews, how regularly they come and your replies all count. We set up a simple review request, by direct link, at the moment the customer is happy.",
      },
      {
        q: "Do I need a website for local SEO?",
        a: "It isn't required to exist on Maps, but a website linked to the profile clearly strengthens rankings and converts better those who want to know more before calling.",
      },
    ],
  },

  /* ================================================================== */
  ads: {
    cityLabel: "Google Ads and Meta ads",
    keywords: [
      "google ads morocco",
      "google ads agency morocco",
      "google ads expert morocco",
      "facebook ads morocco",
      "meta ads morocco",
      "instagram ads morocco",
      "facebook ads price in morocco",
      "ppc agency morocco",
      "social media advertising morocco",
      "google ads vs facebook ads",
      "google ads cost per click",
      "online advertising morocco",
    ],
    sections: [
      {
        h2: "Google Ads and Meta ads agency in Morocco: what we manage",
        paras: [
          "Wevtex creates and manages Google Ads, Facebook Ads and Instagram Ads campaigns for businesses in Morocco. We handle targeting, ads and visuals, the landing page that receives the click, and the conversion tracking that tells you what every dirham brought back. As a PPC agency in Morocco, we put a Google Ads expert on your campaigns who adjusts them continuously.",
        ],
        bullets: [
          "Google Search, Shopping, Display and YouTube",
          "Facebook and Instagram ads, click-to-WhatsApp ads",
          "Dedicated landing page included",
          "Conversion tracking down to the call or the sale",
          "A/B tests and retargeting",
        ],
      },
      {
        h2: "Google Ads vs Meta ads (Facebook, Instagram): which one?",
        paras: [
          "Google Ads reaches people already searching for your service, at the moment they search (“plumber rabat”, “car rental marrakech”). Facebook and Instagram ads, through Meta, create demand among an audience targeted by age, city and interests, with visuals. A service people search for usually starts on Google Ads; a product that sells on sight usually starts on Instagram.",
          "Many businesses combine the two: Google for existing demand, Meta to create it and to retarget website visitors. For hotels and riads targeting foreign guests, both platforms can target by country and language.",
        ],
        links: [{ label: "Google Ads or Facebook Ads?", href: "/en/blog/google-ads-or-facebook-ads-morocco" }],
      },
      {
        h2: "How much does a Google Ads or Facebook Ads campaign cost in Morocco?",
        paras: [
          "Wevtex management fees are MAD {{prix:ads/Lancement}} a day, whichever channels we run: Google, Facebook or Instagram, together or separately. The ad spend, paid directly to Google or Meta, comes on top and stays under your control. In short, Google Ads and Facebook Ads prices in Morocco come down to two lines: our management fee and your budget.",
          "Google Ads has no fixed cost per click: it is set by auction and varies by industry and by competition on each keyword. Before launching, we estimate that cost with Google's planning tool and compare it with the value of a customer, to decide whether the campaign is worth running.",
        ],
        links: [
          { label: "SEO agency in Morocco", href: "/en/seo-agency-morocco" },
          { label: "Web design in Morocco", href: "/en/web-design-morocco" },
        ],
      },
    ],
    faqs: [
      {
        q: "How do Facebook ads work?",
        a: "You pay Meta to show a post or an ad to a chosen audience (city, age, interests) on Facebook and Instagram. You set a budget per day or per campaign, and Meta charges per impression or per click.",
      },
      {
        q: "Is Google Ads free?",
        a: "Opening a Google Ads account in Morocco is free, but ads are paid: you pay Google for each click on your ads, within the budget you set.",
      },
      {
        q: "How quickly does a campaign bring results?",
        a: "The first enquiries usually arrive in the first week. Then it takes two to four weeks of optimization to stabilize the cost per lead.",
      },
      {
        q: "Can I target a single city in Morocco, or foreign countries?",
        a: "Yes. Google Ads and Meta ads can target a city, a radius around an address, a region or other countries. A Casablanca business can advertise only in Casablanca; a Marrakech riad can target guests in France or the UK.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do. The Google Ads and Meta Business accounts are created in your name, and you keep full access to the history and audiences if you change provider.",
      },
    ],
  },

  /* ================================================================== */
  "mobile-apps": {
    cityLabel: "Mobile app development",
    keywords: [
      "mobile app development morocco",
      "mobile app development company in morocco",
      "app development company morocco",
      "app developer morocco",
      "ios app development morocco",
      "android app development morocco",
      "flutter app development",
      "how much does an app cost in morocco",
      "custom mobile app",
    ],
    sections: [
      {
        h2: "A mobile app development company in Morocco, for iOS and Android",
        paras: [
          "Wevtex builds custom mobile apps for iOS and Android from Casablanca. We use Flutter: one codebase that runs natively on both platforms, which halves the budget compared with two separate builds, with no loss of smoothness. Designer and app developer work in the same team.",
          "We handle the whole journey: app design approved before any code, development, connection to your systems (website, stock, payments), publishing on the App Store and Google Play, then support after launch.",
        ],
        bullets: [
          "Native iOS and Android apps with Flutter",
          "Customer accounts, in-app payments, push notifications",
          "Admin area and dashboard",
          "App Store and Google Play publishing handled",
        ],
      },
      {
        h2: "How much does an app cost in Morocco?",
        paras: [
          "Mobile app development in Morocco starts at MAD {{prix:mobile-apps/Essentielle}} at Wevtex, for an iOS and Android app published to both stores. What moves the price is the number of screens, user accounts, in-app payment and how complex the business logic is. The scope is agreed and quoted before we start, in 4 to 12 weeks depending on size.",
          "The cost of an app depends on the number of screens, the features (payments, geolocation, offline mode) and the systems to connect. The quote is firm before work starts.",
        ],
        links: [{ label: "How much does an app cost in Morocco", href: "/en/blog/how-much-does-an-app-cost-in-morocco" }],
      },
      {
        h2: "No-code, AI-generated or custom app?",
        paras: [
          "No-code tools and AI app builders let you test an idea quickly and cheaply. They hit their limits as soon as you need Moroccan payments, a connection to your stock, smooth performance or a polished store listing. A custom Flutter app gives you code you own, which grows with your business.",
        ],
        links: [
          { label: "Custom web applications", href: "/en/web-application-development-morocco" },
          { label: "Custom software development", href: "/en/custom-software-development-morocco" },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I build a mobile app for free?",
        a: "Free has its limits: no-code tools can produce a mockup or a very simple app. For an app published on the App Store and Google Play, with payments and customer accounts, you need real development: at Wevtex, from MAD {{prix:mobile-apps/Essentielle}}.",
      },
      {
        q: "Flutter or native development?",
        a: "Flutter for the vast majority of projects: one codebase produces a native app for iOS and Android, on a smaller budget. Separate native development is justified for very specific hardware needs, rare in business apps.",
      },
      {
        q: "Who publishes the app on the App Store and Google Play?",
        a: "We do. Publishing, preparing the store listings and dealing with Apple and Google are part of the service. The developer accounts are opened in your name.",
      },
      {
        q: "How long does it take to develop a mobile app?",
        a: "Four to six weeks for an essential app, eight to twelve weeks for a complete app with accounts and payments. The deadline is on the quote.",
      },
    ],
  },

  /* ================================================================== */
  "desktop-apps": {
    cityLabel: "Custom software",
    keywords: [
      "custom software development morocco",
      "software company morocco",
      "software companies in morocco",
      "software development company casablanca",
      "software developer morocco",
      "custom software morocco",
      "erp morocco",
      "crm morocco",
      "inventory management software morocco",
      "invoicing software morocco",
      "it company morocco",
    ],
    sections: [
      {
        h2: "Custom software development in Morocco",
        paras: [
          "A software company based in Casablanca, Wevtex develops custom software for Windows and macOS: sales management, invoicing, inventory, scheduling and reporting. When no software on the market fits the way you work, we build the one that does, and it keeps working without an internet connection.",
          "Custom software for your business is paid for once. There is no monthly per-seat license, and the rules of your trade are coded in instead of being worked around in a spreadsheet.",
        ],
        bullets: [
          "Analysis of your processes before development",
          "Installer and automatic updates",
          "Your existing data imported, Excel files included",
          "Multi-workstation sync, accounts and permissions",
        ],
      },
      {
        h2: "Sales, inventory or ERP software: off the shelf or custom?",
        paras: [
          "In Morocco, off-the-shelf inventory software, invoicing software or an ERP is enough when your business runs in a standard way. A custom ERP or CRM in Morocco makes sense when your rules fall outside the frame, as in the cases below.",
          "We can also connect existing software to your other tools rather than replace everything, when that is the cheaper option.",
        ],
        bullets: [
          "Pharmacy management: orders, stock and sales",
          "Dental practice management: scheduling, patient records and billing",
          "School management: enrollment, payments and tracking",
          "Point-of-sale software linked to stock and invoicing",
          "ERP for wholesalers and distributors",
        ],
      },
      {
        h2: "How much does custom software cost in Morocco?",
        paras: [
          "Custom software starts at MAD {{prix:desktop-apps/Outil simple}} at Wevtex, for a tool covering one functional area, delivered in 4 to 6 weeks. The price rises with the number of modules, multi-workstation use and integrations with the tools you already run. The scope is agreed and quoted before we start.",
        ],
        links: [
          { label: "Custom web applications", href: "/en/web-application-development-morocco" },
          { label: "Mobile app development", href: "/en/mobile-app-development-morocco" },
        ],
      },
    ],
    faqs: [
      {
        q: "Is there free sales management software in Morocco?",
        a: "Free and open-source software exists and is often enough to start. It shows its limits when your management rules fall outside the standard or several workstations must work together; that is when custom software makes sense.",
      },
      {
        q: "Desktop software or web application?",
        a: "Desktop software suits teams working at fixed workstations, sometimes offline. A web application suits access from anywhere, through a browser. We advise based on how you actually work.",
      },
      {
        q: "Can you import our existing Excel files?",
        a: "Yes. Importing your data, from Excel or old software, is part of the service, so the tool is usable from day one.",
      },
      {
        q: "Do we own the source code?",
        a: "Yes. The source code and documentation are handed over at delivery, which leaves you free to develop it further with us or with another provider.",
      },
    ],
  },

  /* ================================================================== */
  "custom-solutions": {
    cityLabel: "Web development",
    keywords: [
      "web application development morocco",
      "saas development morocco",
      "custom web development morocco",
      "web development company morocco",
      "software outsourcing morocco",
      "nearshore morocco",
      "nearshore software development morocco",
      "outsourcing web development morocco",
      "full stack developer morocco",
      "client portal development",
      "api integration",
    ],
    sections: [
      {
        h2: "Custom web application development in Morocco: SaaS, platforms and portals",
        paras: [
          "Wevtex builds custom web applications for businesses in Morocco and abroad: SaaS platforms, client portals, extranets, business tools and API architectures. A custom web application runs in the browser, from any computer or phone, and follows your business rules instead of forcing you into a generic model.",
          "A custom web development project starts with discovery: processes, business rules, edge cases. That deliverable is yours, and its cost is deducted from the project if you continue with us.",
        ],
        bullets: [
          "Multi-tenant SaaS platforms with subscriptions",
          "Client portal and extranet, with roles and permissions",
          "Integration with your existing tools through APIs and webhooks",
          "Dashboards and audit trails",
        ],
      },
      {
        h2: "Nearshore software development in Morocco",
        paras: [
          "For companies in Europe, Morocco is a natural nearshore location: the time zone is the same as or one hour from Western Europe, flights are short, and teams work in English and French. Outsourcing web development to Morocco typically costs less than in Western Europe, without the time-zone gap of offshore teams.",
          "Wevtex works remotely with clients in France, Belgium and Canada. You get a small team that stays the same from discovery to launch, weekly check-ins, a staging environment you can test at every stage, and code and access that are yours.",
        ],
        bullets: [
          "Same working hours as Western Europe",
          "English and French, written and spoken",
          "Fixed-price projects, invoiced in dirhams",
          "Code, repository and infrastructure in your name",
        ],
      },
      {
        h2: "Freelance web developer or web development company?",
        paras: [
          "A freelance web developer suits a short, well-defined project. A web development company brings a full team, discovery, design, full stack developers and testing, and continuity when the project lasts or needs maintaining after delivery. For a platform your business depends on, that continuity matters more than the day rate.",
          "We also build the mobile app for your platform, on the same database, for consistent web and mobile development.",
        ],
      },
      {
        h2: "How much does web application development cost?",
        paras: [
          "Discovery starts at MAD {{prix:custom-solutions/Cadrage}}, in 2 to 3 weeks. A platform or business tool starts at MAD {{prix:custom-solutions/Plateforme}}, in 8 to 12 weeks, with one integration included. A complete multi-tenant SaaS with subscriptions and billing starts at MAD {{prix:custom-solutions/SaaS complet}}, on a scope defined together.",
        ],
        links: [
          { label: "AI automation agency in Morocco", href: "/en/ai-automation-agency-morocco" },
          { label: "Mobile app development", href: "/en/mobile-app-development-morocco" },
        ],
      },
    ],
    faqs: [
      {
        q: "What does a web developer cost in Morocco?",
        a: "Rather than a daily rate, we price per project, so the price is firm: discovery from MAD {{prix:custom-solutions/Cadrage}}, a platform or business tool from MAD {{prix:custom-solutions/Plateforme}}, a complete SaaS from MAD {{prix:custom-solutions/SaaS complet}}.",
      },
      {
        q: "Do you work with companies outside Morocco?",
        a: "Yes. We work remotely with clients in France, Belgium and Canada, in English or French, with weekly check-ins, a shared staging environment and fixed-price quotes.",
      },
      {
        q: "What is the difference between a website and a web application?",
        a: "A website presents your business and generates leads. A web application is a tool: users log in, enter, look up and process data, with different rights depending on their role.",
      },
      {
        q: "Which technologies do you use for web development?",
        a: "Next.js and React for the interface, Node.js and PostgreSQL for the server and data, and documented APIs to connect your tools. Widely used technologies, so your platform doesn't depend on us.",
      },
      {
        q: "Can you take over an existing application?",
        a: "Yes, after an audit of the existing code. We tell you honestly whether it is better to improve the application or rebuild it, and why.",
      },
    ],
  },

  /* ================================================================== */
  "whatsapp-bots": {
    cityLabel: "WhatsApp chatbot",
    keywords: [
      "whatsapp chatbot morocco",
      "whatsapp chatbot for business",
      "whatsapp business api morocco",
      "ai chatbot whatsapp",
      "chatbot morocco",
      "whatsapp automation",
      "darija chatbot",
      "customer service automation",
    ],
    sections: [
      {
        h2: "WhatsApp chatbot for businesses in Morocco",
        paras: [
          "A WhatsApp chatbot answers your customers' questions automatically (prices, opening hours, availability, order tracking), qualifies leads and books appointments, 24/7, in English, French and Darija. Wevtex sets up your WhatsApp Business API account, writes the conversation flows for your business and connects the bot to your CRM or your inbox.",
          "In Morocco, sales happen on WhatsApp. An evening message left unanswered is often a customer gone to a competitor: automated customer service guarantees an immediate answer, and hands over to your team as soon as a request goes beyond the script.",
        ],
        bullets: [
          "WhatsApp Business API account opened and configured",
          "Flows in English, French and Darija",
          "Lead qualification and appointment booking",
          "Handover to a person at the right moment",
        ],
      },
      {
        h2: "WhatsApp Business app or WhatsApp Business API?",
        paras: [
          "The free WhatsApp Business app offers a greeting message, saved quick replies and a simple catalog. It allows no real automation, no multiple agents on one number and no connection to your tools. The WhatsApp Business API, the one chatbots use, allows flows, AI, appointment booking and teamwork on a single conversation. The app is enough to start; the WhatsApp Business API is then opened for your business in Morocco through Meta, and that is the account we configure.",
        ],
      },
      {
        h2: "How much does a WhatsApp chatbot cost in Morocco?",
        paras: [
          "The Essential plan starts at MAD {{prix:whatsapp-bots/Essentiel}} for setup, then MAD {{mensuel:whatsapp-bots/Essentiel}} a month, for up to 10 flows. The Qualification plan, with unlimited flows, appointment booking and CRM connection, starts at MAD {{prix:whatsapp-bots/Qualification}} then MAD {{mensuel:whatsapp-bots/Qualification}} a month. A custom AI WhatsApp agent that understands freely worded messages starts at MAD {{prix:whatsapp-bots/Sur mesure}}.",
        ],
        links: [
          { label: "AI WhatsApp agents and automation", href: "/en/ai-automation-agency-morocco" },
          { label: "Guide: automating customer service", href: "/en/blog/whatsapp-chatbot-for-moroccan-businesses" },
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a free WhatsApp chatbot?",
        a: "The free WhatsApp Business app offers a greeting message and quick replies, which isn't a real chatbot. Automation goes through the WhatsApp Business API, whose conversations are billed by Meta, on top of the setup.",
      },
      {
        q: "Does the chatbot understand Darija?",
        a: "Yes. Flows are written in English, French and Darija, and the custom plan understands freely worded messages, including Darija written in Latin letters.",
      },
      {
        q: "Can the chatbot book appointments?",
        a: "Yes, with the Qualification plan: it offers time slots, confirms the appointment and notifies your team.",
      },
      {
        q: "How long does it take to set up a WhatsApp chatbot?",
        a: "One to three weeks for an assistant that answers common questions. A bot connected to your catalog or CRM takes longer, because most of the work is the integration.",
      },
      {
        q: "Can I keep my current WhatsApp number?",
        a: "In most cases, yes: an existing number can be migrated to the WhatsApp Business API. It just has to be released from the regular app before the migration.",
      },
    ],
  },
};

/** A service with its English search layer merged in. */
export function withSeoEn(s: Service): Service {
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

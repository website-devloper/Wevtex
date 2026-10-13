/**
 * The eight sector pages in English, at /en/industries/<slug> (same slugs as
 * the French pages, which were already English). Written for English
 * searches ("ecommerce website morocco", "riad website", "hotel website
 * design morocco", "real estate website morocco"…), with the same facts and
 * the same projects as lib/industries-data.ts.
 */

import { fillPricesDeep } from "../pricing";
import type { Industry, IndustryService } from "../industries-data";
import { INDUSTRY_SLUGS } from "../industries-data";

export const INDUSTRIES_EN: Industry[] = fillPricesDeep(
  [
    {
      slug: "ecommerce-retail",
      name: "E-commerce & retail",
      keyword: "ecommerce website Morocco",
      seoKeywords: ["online store morocco", "ecommerce website development morocco", "cosmetics online store morocco", "clothing online store morocco", "shopify store morocco"],
      metaTitle: "Ecommerce Website Development in Morocco | Retail | Wevtex",
      metaDescription:
        "Online stores for fashion, beauty, home and food in Morocco: secure payment, cash on delivery, stock and orders managed. Free quote.",
      eyebrow: "E-commerce & retail",
      h1: "Online stores\nthat actually sell.",
      h1Em: ["actually", "sell."],
      intro:
        "You already sell on Instagram or in store, and you answer the same price question a hundred times on WhatsApp. We build the online store that sells for you: a clear catalog, cash on delivery or card payment, stock kept up to date and orders tracked.",
      includes: [
        "Cart and secure checkout with local payment methods.",
        "Catalog, stock and product variant management.",
        "Order tracking, for you and for your customers.",
        "Mobile-first design, built to convert.",
      ],
      outcomes: [
        { h: "Fewer abandoned carts", p: "A three-step checkout, local payment methods accepted, and pages that open in under a second on mobile." },
        { h: "Stock that's always right", p: "Catalog, variants and quantities managed from one screen, with no double entry between the store and the point of sale." },
        { h: "Found at the moment of purchase", p: "Your product pages written for the searches that come before an order, not just for your brand name." },
      ],
      faqs: [
        { q: "Can you migrate my current store?", a: "Yes. We migrate products, customers and orders from most platforms, with minimal downtime." },
        { q: "Do you handle payments?", a: "Yes. We set up Stripe and the local payment methods that suit your market, including Moroccan cards through CMI and cash on delivery." },
        { q: "Do you build cosmetics and clothing online stores in Morocco?", a: "Yes. A cosmetics or clothing store in Morocco needs careful product pages, variants (sizes, shades), cash on delivery and order confirmation on WhatsApp. We delivered a Moroccan cosmetics store with an advice assistant and a luxury kaftan store, both in our portfolio." },
        { q: "How much does an ecommerce website cost in Morocco?", a: "At Wevtex, a complete online store starts at MAD {{prix:website-creation/Boutique}}, delivered in 4 to 8 weeks, with payments, stock management and training. A clothing store with many variants is priced according to the catalog." },
      ],
    },
    {
      slug: "tourism-hospitality",
      name: "Tourism & hospitality",
      keyword: "hotel booking website Morocco",
      seoKeywords: ["riad website", "hotel website design morocco", "hotel booking website morocco", "restaurant website morocco", "travel agency website"],
      metaTitle: "Hotel & Riad Website Design in Morocco | Direct Booking | Wevtex",
      metaDescription:
        "Direct booking websites for hotels, riads and travel agencies in Morocco: live availability, online payment and virtual tours, in your guests' languages.",
      eyebrow: "Tourism & hospitality",
      h1: "Direct bookings,\nfewer commissions.",
      h1Em: ["fewer", "commissions."],
      intro:
        "Every night booked through a platform costs you a commission. We build the website for your hotel, riad or travel agency that takes bookings direct: real-time availability, secure payment and pages in your guests' languages.",
      includes: [
        "A direct booking engine with real-time availability.",
        "Secure online payments and deposits.",
        "Virtual tours and galleries that make people want to book.",
        "Multilingual pages for your international guests.",
      ],
      outcomes: [
        { h: "Direct bookings", p: "An engine on your own website: every booking taken there is a commission you don't pay the platforms." },
        { h: "Enquiries handled at night", p: "Availability, rates and transfers answered automatically on WhatsApp, even outside your hours." },
        { h: "Visible before the booking", p: "Your pages ranked on stay searches, weeks before the travel date is set." },
      ],
      faqs: [
        { q: "Is it compatible with my channel manager?", a: "Yes. We can sync availability with the main booking and channel management tools." },
        { q: "Can guests pay just a deposit?", a: "Yes. We configure a deposit, full payment or payment on arrival, according to your policy." },
        { q: "Do you build booking websites for hotels and riads in Morocco?", a: "Yes. A hotel or riad website in Morocco is built for direct booking: availability, payment and several languages, to reduce the share left to booking platforms." },
        { q: "Do you build websites for restaurants and travel agencies?", a: "Yes. For a restaurant, the website shows the menu, directions and table booking; for a travel agency, it becomes a platform with trip search and payment. We built the platform of a Moroccan travel agency and the website of a café in Casablanca, both in our portfolio." },
      ],
    },
    {
      slug: "professional-services",
      name: "Professional services",
      keyword: "law firm website Morocco",
      seoKeywords: ["law firm website design", "accounting firm website", "real estate website morocco", "real estate agency website morocco", "architecture firm website"],
      metaTitle: "Websites for Law Firms, Accountants & Real Estate | Wevtex",
      metaDescription:
        "Websites that inspire trust for lawyers, accountants, real estate agencies and consultants in Morocco, built to bring in qualified leads.",
      eyebrow: "Professional services",
      h1: "Trust first,\nthen the leads.",
      h1Em: ["then", "the", "leads."],
      intro:
        "In your trade, a client decides who to trust with their case before even calling. For law firms, accountants, real estate agencies and consultants, we build a website that reassures, shows your proof and turns a visit into a qualified appointment.",
      includes: [
        "A design that highlights your expertise and your proof.",
        "Contact forms and online appointment booking.",
        "Practice area and team pages that build trust.",
        "Content optimized for local searches.",
      ],
      outcomes: [
        { h: "Leads already qualified", p: "A form that collects the context of the case, so the first conversation starts informed rather than from zero." },
        { h: "Instant credibility", p: "References, method and fees presented clearly: doubt clears before the call, not during it." },
        { h: "Less back-and-forth", p: "Client portal, documents and case tracking available online, without going through your front desk." },
      ],
      faqs: [
        { q: "Can my clients book appointments online?", a: "Yes. We add appointment booking directly on your website." },
        { q: "Will the website show up for my city?", a: "Every website is delivered ready for SEO, and we target your city and your practice areas." },
        { q: "Does a law firm website have to follow rules?", a: "Yes. Lawyers' communication is governed by professional rules: in Morocco we write an informative law firm website, with no promise of results and no solicitation, which you approve before publication. The same care applies to accounting and architecture firm websites." },
        { q: "Do you build real estate websites in Morocco?", a: "Yes. A real estate website in Morocco lets visitors search properties by city, budget and type, with polished listings and direct contact. We built a luxury real estate platform, in our portfolio." },
      ],
    },
    {
      slug: "healthcare-wellness",
      name: "Health & wellness",
      keyword: "clinic website Morocco",
      seoKeywords: ["doctor website", "medical clinic website", "dentist website", "dental clinic website", "medical practice website"],
      metaTitle: "Websites for Clinics, Doctors & Dentists in Morocco | Wevtex",
      metaDescription:
        "Websites for clinics, gyms and therapists in Morocco: secure patient forms and online booking of sessions and appointments.",
      eyebrow: "Health & wellness",
      h1: "Care that's easy\nto book online.",
      h1Em: ["to", "book", "online."],
      intro:
        "Your patients search in the evening, when the practice is closed. For clinics, practices, fitness studios and therapists, we build a website that explains your treatments simply, introduces the team and takes appointments online, at any hour.",
      includes: [
        "Secure patient and contact forms.",
        "Session and appointment booking.",
        "A clear presentation of services and practitioners.",
        "Mobile-first, accessible design.",
      ],
      outcomes: [
        { h: "A calendar that fills itself", p: "Online booking works in the evening and at weekends, exactly when your patients search." },
        { h: "Fewer missed appointments", p: "Automatic confirmation and reminders on WhatsApp, with the option to move the slot in one message." },
        { h: "A patient reassured before walking in", p: "Treatments explained simply, the team introduced, fees stated: the awkward questions already have their answers." },
      ],
      faqs: [
        { q: "Are patient forms secure?", a: "Yes. Data travels over HTTPS and we apply good privacy practices." },
        { q: "Can members book a class?", a: "Yes. We can add the schedule and booking suited to your studio or practice." },
        { q: "Do you build websites for dental practices, doctors and clinics?", a: "Yes. A dentist, doctor or medical clinic website in Morocco presents treatments, practitioners, access and appointment booking, in an informative tone. We built the website of a dental clinic, in our portfolio." },
        { q: "Is online appointment booking possible?", a: "Yes. The website can offer real time slots, a request form or a WhatsApp link, depending on how your front desk works." },
      ],
    },
    {
      slug: "industry-logistics",
      name: "Industry & logistics",
      keyword: "industrial company website Morocco",
      seoKeywords: ["construction company website morocco", "industrial website", "logistics company website", "transport company website"],
      metaTitle: "Websites for Construction, Industry & Logistics | Wevtex",
      metaDescription:
        "Websites for construction, manufacturing and transport companies in Morocco: showcase your fleet and projects, and receive B2B quote requests easily.",
      eyebrow: "Industry & logistics",
      h1: "Show your projects,\nwin your tenders.",
      h1Em: ["win", "your", "tenders."],
      intro:
        "A buyer compares three suppliers in ten minutes, and calls the one whose website shows projects, certifications and a clear quote form. We build that website for construction, manufacturing and transport companies.",
      includes: [
        "Project portfolio and fleet presentation.",
        "Quote request forms suited to your services.",
        "Know-how and certification pages that reassure.",
        "A fast, professional website on every screen.",
      ],
      outcomes: [
        { h: "Quotes sent faster", p: "Technical sheets and references available online: the buyer finds what they need without tying up your teams." },
        { h: "Less manual entry", p: "Your business tools talk to each other, and data is no longer copied from one file to another." },
        { h: "Tracking clients check themselves", p: "Order and shipment status in self-service, which lightens your switchboard accordingly." },
      ],
      faqs: [
        { q: "Can you showcase our past projects?", a: "Yes. We create portfolio and case study sections to showcase your projects." },
        { q: "Can people request a quote online?", a: "Yes. We build quote forms tailored to your services." },
        { q: "What should a construction company website in Morocco include?", a: "It shows completed projects, trades covered, certifications and a structured quote request. That is what reassures a project owner before the call." },
        { q: "Can an industrial or logistics website present a technical catalog?", a: "Yes. It can present a technical catalog, downloadable sheets, a document area and a B2B quote request, in English, French or Spanish for export buyers." },
      ],
    },
    {
      slug: "education-elearning",
      name: "Education & e-learning",
      keyword: "e-learning platform Morocco",
      seoKeywords: ["private school website", "training center website", "e-learning platform morocco", "educational website"],
      metaTitle: "Websites & E-learning Platforms for Schools | Wevtex",
      metaDescription:
        "Websites and platforms for schools, online courses and training centers in Morocco: student areas, video hosting and certification modules.",
      eyebrow: "Education & e-learning",
      h1: "Learn anywhere,\non every screen.",
      h1Em: ["on", "every", "screen."],
      intro:
        "A family or a future trainee often decides on your website. For schools, training centers and online courses, we build websites and platforms that present your programs, take enrollments and track student progress.",
      includes: [
        "Student areas with progress tracking.",
        "Video hosting and structured learning paths.",
        "Assessment and certification modules.",
        "Enrollment and payment for paid courses.",
      ],
      outcomes: [
        { h: "Sessions that fill up", p: "Programs, dates and conditions made clear, with an enrollment that completes online instead of stopping at an email." },
        { h: "Fewer incomplete files", p: "Automatic reminders for missing documents, without tying up your admin team." },
        { h: "Learners who come back", p: "Courses, assignments and progress available from a phone, between sessions." },
      ],
      faqs: [
        { q: "Can we sell courses online?", a: "Yes. We add enrollment and payment so you can sell your courses directly." },
        { q: "Do students get a certificate?", a: "Yes. We can build assessment and certification modules into the platform." },
        { q: "Do you build websites for private schools and training centers?", a: "Yes. A private school or training center website presents the institution, programs, online enrollment and a parent or student area. It is often the first contact families have with you." },
        { q: "How much does an e-learning platform cost in Morocco?", a: "A custom e-learning platform in Morocco, with accounts, courses, tracking and payment, falls under our custom solutions: discovery starts at MAD {{prix:custom-solutions/Entreprises}} and the build is priced on the scope it produces. A simpler educational website follows the price of a business website." },
      ],
    },
    {
      slug: "creative-media-tech",
      name: "Creative, media & tech",
      keyword: "startup website Morocco",
      seoKeywords: ["portfolio website", "graphic designer portfolio website", "photographer website", "saas landing page"],
      metaTitle: "Websites for Startups, Agencies & Creatives | Wevtex",
      metaDescription:
        "Fast landing pages and animated websites for SaaS startups, agencies and creators in Morocco, built to convert your first users.",
      eyebrow: "Creative, media & tech",
      h1: "Websites that stand out,\njust like you.",
      h1Em: ["just", "like", "you."],
      intro:
        "Your clients buy your taste, and a slow or bland website contradicts it. For startups, agencies, media and creators, we design websites and landing pages that match the quality of your work and turn the curious into customers.",
      includes: [
        "Animated, high-performance landing pages.",
        "Product and feature pages that explain value fast.",
        "Lead capture, waitlist and sign-up.",
        "A design that sets you apart from the competition.",
      ],
      outcomes: [
        { h: "Your work seen first", p: "A portfolio that loads fast and puts images and videos up front, with no packaging that delays them." },
        { h: "Better-framed briefs", p: "A form that asks the right questions, budget, timeline, scope, before the first meeting." },
        { h: "A website at your level", p: "An identity held down to the detail of the interactions, because that is exactly what your clients buy." },
      ],
      faqs: [
        { q: "Can you build both the marketing site and the product?", a: "Yes. From the marketing site to the product itself, we can build both." },
        { q: "How fast can we launch?", a: "A landing page can go live in a few days; a full product takes longer. We give you a firm deadline." },
        { q: "Do you build portfolio websites for photographers and designers?", a: "Yes. A professional photographer's website or a graphic designer's portfolio shows off the images without slowing them down: optimized galleries, project pages and direct contact. We built the website of a photography studio and of a creative agency in Casablanca, both in our portfolio." },
        { q: "Do you build startup websites?", a: "Yes. A startup website explains the product in one sentence, shows the interface and leads to the trial or the demo. We build it in Next.js so it grows with the product." },
      ],
    },
    {
      slug: "public-sector-ngos",
      name: "Public sector & NGOs",
      keyword: "NGO website Morocco",
      seoKeywords: ["ngo website", "nonprofit website", "association website", "charity donation website"],
      metaTitle: "Websites for NGOs, Associations & Public Bodies | Wevtex",
      metaDescription:
        "Accessible websites for associations, foundations and public institutions in Morocco: online donations, community engagement and inclusive design.",
      eyebrow: "Public sector & NGOs",
      h1: "Inform, and make people\nwant to act.",
      h1Em: ["want", "to", "act."],
      intro:
        "An association lives on the trust it inspires. For associations, foundations and institutions, we build websites accessible to all that explain your mission, recruit volunteers and collect donations in a few clicks.",
      includes: [
        "An accessible design, following WCAG guidelines.",
        "Secure donation collection.",
        "Community engagement and volunteer sign-up.",
        "Clear, multilingual information for everyone.",
      ],
      outcomes: [
        { h: "Information accessible to all", p: "Contrast, keyboard navigation and screen readers taken into account, so nobody is left out." },
        { h: "Simpler donations and memberships", p: "A short, secure path that works just as well on an entry-level phone." },
        { h: "Fewer repetitive requests", p: "Frequent questions handled online and on WhatsApp: your team focuses on the field." },
      ],
      faqs: [
        { q: "Can people donate online?", a: "Yes. We set up secure donation collection with the options you need." },
        { q: "Is the website accessible?", a: "Yes. We build to WCAG accessibility standards, so everyone can use it." },
        { q: "Do you build websites for associations and NGOs in Morocco?", a: "Yes. A cultural or sports association website presents the mission, activities and calls for volunteers; a humanitarian NGO website puts campaigns and donations forward, with content accessible to all." },
        { q: "Can an association website receive online donations?", a: "Yes. It can take card donations online, with automatic confirmation to the donor and a campaign page for each appeal." },
      ],
    },
  ],
  "en",
);

export const getIndustryEn = (slug: string) => INDUSTRIES_EN.find((i) => i.slug === slug);

if (INDUSTRIES_EN.map((i) => i.slug).join("|") !== INDUSTRY_SLUGS.join("|")) {
  throw new Error("lib/en/industries-data.ts must define the same sectors, in the same order, as lib/industries-data.ts.");
}

/** What each service means for a sector, in English. Keys are service ids. */
export const INDUSTRY_SERVICES_EN: Record<string, IndustryService[]> = {
  "ecommerce-retail": [
    { slug: "website-creation", line: "Your online store, from catalog to checkout, designed for buying on mobile." },
    { slug: "seo", line: "Your product pages ranked on buying searches, not just on your brand name." },
    { slug: "ads", line: "Google Shopping and Meta campaigns that bring buyers, with cost per sale tracked." },
    { slug: "whatsapp-bots", line: "An assistant that answers product questions, tracks orders and recovers abandoned carts." },
    { slug: "custom-solutions", line: "Stock synced between your store, your point of sale and your marketplaces." },
    { slug: "local-seo", line: "Your shop visible on Maps when people search for your product nearby." },
    { slug: "mobile-apps", line: "A store app for loyal customers: ordering in two taps, and notifications." },
    { slug: "desktop-apps", line: "Point-of-sale and stock management software for your shop." },
  ],
  "tourism-hospitality": [
    { slug: "website-creation", line: "A website with a direct booking engine, so you stop leaving everything to the platforms." },
    { slug: "local-seo", line: "Your property at the top of Maps and of “hotel” or “riad” searches in your city." },
    { slug: "seo", line: "Pages that capture stay searches well before the arrival date." },
    { slug: "ads", line: "Campaigns targeted at your source markets, in low and high season." },
    { slug: "whatsapp-bots", line: "Instant answers on availability, rates and transfers, 24/7." },
    { slug: "mobile-apps", line: "An app for check-in, on-site services and loyalty." },
    { slug: "custom-solutions", line: "Bookings, rooms and rates managed, connected to your channels." },
    { slug: "desktop-apps", line: "Front-desk software that keeps working when the connection drops." },
  ],
  "professional-services": [
    { slug: "website-creation", line: "A website that inspires trust and turns visitors into appointments." },
    { slug: "local-seo", line: "Your firm found on Maps when people search for your specialty in your city." },
    { slug: "seo", line: "Expertise pages ranked on the questions your clients type before calling." },
    { slug: "custom-solutions", line: "Client portals, document areas and secure case tracking." },
    { slug: "ads", line: "Campaigns that bring you qualified cases, not the merely curious." },
    { slug: "whatsapp-bots", line: "Automated request qualification and appointment booking." },
    { slug: "mobile-apps", line: "An app for your clients: case tracking and document exchange." },
    { slug: "desktop-apps", line: "Desktop tools for heavy processing and sensitive data." },
  ],
  "healthcare-wellness": [
    { slug: "website-creation", line: "A reassuring website, with online booking and a clear presentation of treatments." },
    { slug: "local-seo", line: "Your practice visible on Maps when a patient searches nearby." },
    { slug: "whatsapp-bots", line: "Appointment confirmations and reminders, to cut no-shows." },
    { slug: "seo", line: "Treatment pages that answer the questions asked before booking." },
    { slug: "custom-solutions", line: "Patient, calendar and records management, with confidentiality respected." },
    { slug: "ads", line: "Local campaigns measured by the number of appointments booked." },
    { slug: "mobile-apps", line: "A patient app: appointments, prescriptions and treatment reminders." },
    { slug: "desktop-apps", line: "Practice software that stays available without an internet connection." },
  ],
  "industry-logistics": [
    { slug: "website-creation", line: "A clear catalog website, with technical sheets and a simple quote request." },
    { slug: "custom-solutions", line: "Business tools: fleet tracking, warehouse management, supplier portals." },
    { slug: "desktop-apps", line: "Desktop software for workstations that must run offline." },
    { slug: "seo", line: "Rankings on the B2B searches of your buyers and contractors." },
    { slug: "mobile-apps", line: "Field apps for your teams: scanning, data entry and reporting." },
    { slug: "whatsapp-bots", line: "Order and shipment tracking available directly on WhatsApp." },
    { slug: "ads", line: "B2B campaigns targeted at buyers and purchasing managers." },
    { slug: "local-seo", line: "Your sites, depots and branches visible on Maps." },
  ],
  "education-elearning": [
    { slug: "website-creation", line: "A website that presents your courses and fills your enrollment sessions." },
    { slug: "custom-solutions", line: "Course platform, learner tracking, quizzes and certificates." },
    { slug: "seo", line: "Course pages ranked on what your future students search for." },
    { slug: "ads", line: "Campaigns timed to your enrollment periods." },
    { slug: "whatsapp-bots", line: "Answers to admission questions and reminders for incomplete files." },
    { slug: "mobile-apps", line: "An app to follow courses and assignments from a phone." },
    { slug: "desktop-apps", line: "Classroom and lab software for your fixed workstations." },
    { slug: "local-seo", line: "Your institution visible on Maps at enrollment time." },
  ],
  "creative-media-tech": [
    { slug: "website-creation", line: "A portfolio that puts your work first, without slowing it down." },
    { slug: "seo", line: "Visibility on searches for providers in your discipline." },
    { slug: "custom-solutions", line: "Custom tools: client areas, file delivery, project management." },
    { slug: "mobile-apps", line: "Your product on iOS and Android from a single codebase." },
    { slug: "ads", line: "Campaigns to launch a product or fill an order book." },
    { slug: "desktop-apps", line: "High-performance desktop apps for demanding creative work." },
    { slug: "whatsapp-bots", line: "Automated qualification of incoming requests and brief collection." },
    { slug: "local-seo", line: "Your studio found on Maps by clients in your city." },
  ],
  "public-sector-ngos": [
    { slug: "website-creation", line: "An accessible, clear website that informs and makes people want to act." },
    { slug: "custom-solutions", line: "Forms, online donations, volunteer and member management." },
    { slug: "seo", line: "Your actions and resources findable by those who need them." },
    { slug: "whatsapp-bots", line: "Information and guidance for the public, without tying up a team." },
    { slug: "local-seo", line: "Your branches and drop-in centers visible on Maps." },
    { slug: "ads", line: "Targeted, measured awareness campaigns." },
    { slug: "mobile-apps", line: "An app for your members, volunteers or users." },
    { slug: "desktop-apps", line: "Desktop tools for your internal teams and drop-in centers." },
  ],
};

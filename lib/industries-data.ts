/**
 * Industry detail content. Plain data (no JSX) — imported by the server route
 * (metadata + JSON-LD) and the client view. One entry = one /industries/[slug] page.
 */

export type Industry = {
  slug: string;
  name: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  h1Em: string[];
  intro: string;
  includes: string[];
  outcomes: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "ecommerce-retail",
    name: "E-Commerce & Retail",
    keyword: "e-commerce website for retail Morocco",
    metaTitle: "Websites for E-Commerce & Retail | Wevtex",
    metaDescription:
      "Online stores for fashion, beauty, home and grocery brands — secure checkout, inventory and order management built to convert browsers into buyers.",
    eyebrow: "E-Commerce & Retail",
    h1: "Online stores that\nactually sell.",
    h1Em: ["actually", "sell."],
    intro:
      "For fashion, beauty, home decor and local grocery brands, we build online stores that turn browsers into buyers — complete with shopping carts, secure checkout and inventory management that's easy to run.",
    includes: [
      "Shopping cart and secure checkout with local payment options.",
      "Inventory and catalog management across products and variants.",
      "Order management and tracking for you and your customers.",
      "Conversion-focused, mobile-first design.",
    ],
    outcomes: [
      { h: "More sales", p: "Fast pages and a clean checkout reduce cart abandonment." },
      { h: "Easy to run", p: "Manage products, stock and orders from one dashboard." },
      { h: "Found on Google", p: "SEO-ready product pages bring in shoppers." },
    ],
    faqs: [
      { q: "Can you migrate my existing store?", a: "Yes — we migrate products, customers and orders from most platforms with minimal downtime." },
      { q: "Do you handle payments?", a: "Yes. We set up Stripe and local payment methods suited to your market." },
    ],
  },
  {
    slug: "tourism-hospitality",
    name: "Tourism & Hospitality",
    keyword: "hotel booking website Morocco",
    metaTitle: "Websites for Tourism & Hospitality | Wevtex",
    metaDescription:
      "Direct booking websites for hotels, riads, resorts and travel agencies — availability calendars, online payments and virtual tours that fill rooms.",
    eyebrow: "Tourism & Hospitality",
    h1: "Direct bookings,\nfewer commissions.",
    h1Em: ["fewer", "commissions."],
    intro:
      "For hotels, riads, resorts and travel agencies, we build sites that drive direct bookings — with availability calendars, secure payments and virtual tours — so you depend less on commission-heavy platforms.",
    includes: [
      "Direct booking engine with real-time availability.",
      "Secure online payments and deposits.",
      "Virtual tours and rich galleries that sell the experience.",
      "Multilingual pages for international guests.",
    ],
    outcomes: [
      { h: "Keep more revenue", p: "Direct bookings cut third-party commission fees." },
      { h: "Fill more rooms", p: "A smooth booking flow converts more visitors." },
      { h: "Reach travelers", p: "Multilingual, SEO-ready pages attract international guests." },
    ],
    faqs: [
      { q: "Can it sync with my channel manager?", a: "Yes — we can integrate availability with common booking and channel-management tools." },
      { q: "Can guests pay a deposit only?", a: "Yes. We can configure deposits, full payment or pay-on-arrival options." },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    keyword: "website for law firm accounting Morocco",
    metaTitle: "Websites for Professional Services | Wevtex",
    metaDescription:
      "Trust-driven websites for law firms, accountants, real estate and consultants — built to capture qualified leads and book appointments.",
    eyebrow: "Professional Services",
    h1: "Trust-driven sites\nthat capture leads.",
    h1Em: ["capture", "leads."],
    intro:
      "For law firms, accountants, real estate agencies and consultants, we build credible, trust-driven websites designed to capture qualified leads and schedule appointments — because in professional services, trust closes the deal.",
    includes: [
      "Credibility-first design with clear expertise and proof.",
      "Lead capture forms and appointment scheduling.",
      "Service and team pages that build trust.",
      "SEO-ready content to rank for local searches.",
    ],
    outcomes: [
      { h: "More qualified leads", p: "Clear CTAs and forms turn visitors into enquiries." },
      { h: "Instant credibility", p: "Professional design that earns trust on first visit." },
      { h: "Booked appointments", p: "Scheduling built in so prospects can act now." },
    ],
    faqs: [
      { q: "Can clients book appointments online?", a: "Yes — we integrate scheduling so prospects can book directly from your site." },
      { q: "Will it rank for my city?", a: "We build every site SEO-ready and can target your city and practice areas." },
    ],
  },
  {
    slug: "healthcare-wellness",
    name: "Healthcare & Wellness",
    keyword: "website for clinics and gyms Morocco",
    metaTitle: "Websites for Healthcare & Wellness | Wevtex",
    metaDescription:
      "Websites for clinics, gyms and therapists — secure patient intake, class scheduling and service directories that bring in new patients and members.",
    eyebrow: "Healthcare & Wellness",
    h1: "Care that's easy\nto book online.",
    h1Em: ["easy", "to", "book"],
    intro:
      "For clinics, fitness studios and therapists, we build websites with secure intake forms, class scheduling and clear service directories — so new patients and members can find you and book with ease.",
    includes: [
      "Secure patient intake and contact forms.",
      "Class and appointment scheduling.",
      "Clear service and practitioner directories.",
      "Mobile-first, accessible design.",
    ],
    outcomes: [
      { h: "More bookings", p: "Online scheduling removes friction for new patients." },
      { h: "Less admin", p: "Intake forms and scheduling cut phone back-and-forth." },
      { h: "Trusted presence", p: "A professional site reassures new patients and members." },
    ],
    faqs: [
      { q: "Are intake forms secure?", a: "Yes — forms are handled securely over HTTPS, and we follow privacy best practices." },
      { q: "Can members book classes?", a: "Yes. We can add class schedules and booking suited to your studio or clinic." },
    ],
  },
  {
    slug: "industry-logistics",
    name: "Industry & Logistics",
    keyword: "website for construction and transport Morocco",
    metaTitle: "Websites for Industry & Logistics | Wevtex",
    metaDescription:
      "Websites for construction, manufacturing and transport — showcase your fleet and portfolio and generate B2B quote requests with ease.",
    eyebrow: "Industry & Logistics",
    h1: "Showcase your work,\nwin B2B quotes.",
    h1Em: ["win", "B2B", "quotes."],
    intro:
      "For construction, manufacturing and transport companies, we build websites that showcase your fleet, projects and capabilities — and make it easy for B2B clients to request quotes.",
    includes: [
      "Project portfolio and fleet showcases.",
      "B2B quote-request forms tuned to your services.",
      "Capability and certification pages that build confidence.",
      "Fast, professional design that works on any device.",
    ],
    outcomes: [
      { h: "More quote requests", p: "Clear CTAs make it simple for clients to enquire." },
      { h: "Proven capability", p: "Portfolios and certifications win bigger contracts." },
      { h: "Professional image", p: "A strong site signals a serious, reliable partner." },
    ],
    faqs: [
      { q: "Can you show our past projects?", a: "Yes — we build portfolio and case-study sections to showcase your work." },
      { q: "Can clients request quotes online?", a: "Yes. We build quote-request forms tailored to your services." },
    ],
  },
  {
    slug: "education-elearning",
    name: "Education & E-Learning",
    keyword: "e-learning website Morocco",
    metaTitle: "Websites for Education & E-Learning | Wevtex",
    metaDescription:
      "Websites and platforms for schools, online courses and training centers — student portals, video hosting and certification modules.",
    eyebrow: "Education & E-Learning",
    h1: "Learning that works\non any screen.",
    h1Em: ["any", "screen."],
    intro:
      "For schools, online courses and training centers, we build platforms with student portals, video hosting and certification modules — so you can teach, track progress and grow enrolment online.",
    includes: [
      "Student portals with progress tracking.",
      "Video hosting and structured course delivery.",
      "Certificates and assessment modules.",
      "Enrolment and payment for paid courses.",
    ],
    outcomes: [
      { h: "Grow enrolment", p: "A clear, fast site converts visitors into students." },
      { h: "Deliver at scale", p: "Host courses and video for any number of learners." },
      { h: "Track progress", p: "Portals and certificates keep students engaged." },
    ],
    faqs: [
      { q: "Can you sell courses online?", a: "Yes — we add enrolment and payments so you can sell courses directly." },
      { q: "Can students get certificates?", a: "Yes. We can build assessment and certificate modules into the platform." },
    ],
  },
  {
    slug: "creative-media-tech",
    name: "Creative, Media & Tech",
    keyword: "website for startups and agencies Morocco",
    metaTitle: "Websites for Creative, Media & Tech | Wevtex",
    metaDescription:
      "High-performance, animated landing pages and sites for SaaS startups, agencies and creators — built to convert early adopters and raise your profile.",
    eyebrow: "Creative, Media & Tech",
    h1: "Standout sites for\nstandout brands.",
    h1Em: ["standout", "brands."],
    intro:
      "For SaaS startups, marketing agencies, media brands and artisans, we build high-performance, animated landing pages and sites that match your ambition — and convert early adopters into users and clients.",
    includes: [
      "High-performance, animated landing pages.",
      "Product and feature pages that explain value fast.",
      "Lead capture and waitlist/sign-up flows.",
      "A design that sets you apart from the competition.",
    ],
    outcomes: [
      { h: "Convert early users", p: "Clear, fast pages turn interest into sign-ups." },
      { h: "Look the part", p: "Standout design builds instant credibility." },
      { h: "Move quickly", p: "We ship fast so you can launch and iterate." },
    ],
    faqs: [
      { q: "Can you build a SaaS landing + app?", a: "Yes — from marketing site to the product itself, we can build both." },
      { q: "How fast can we launch?", a: "Landing pages can go live in days; full products take longer. We'll give a firm timeline." },
    ],
  },
  {
    slug: "public-sector-ngos",
    name: "Public Sector & NGOs",
    keyword: "website for NGOs and charities Morocco",
    metaTitle: "Websites for Public Sector & NGOs | Wevtex",
    metaDescription:
      "Accessible websites for charities, foundations and public institutions — donation processing, community engagement and inclusive design.",
    eyebrow: "Public Sector & NGOs",
    h1: "Sites that inform\nand inspire action.",
    h1Em: ["inspire", "action."],
    intro:
      "For charities, foundations and public institutions, we build accessible websites with donation processing and community engagement tools — designed to inform, build trust and inspire people to act.",
    includes: [
      "Accessible design that meets WCAG guidelines.",
      "Secure donation processing.",
      "Community engagement and volunteer sign-up.",
      "Clear, multilingual information for everyone.",
    ],
    outcomes: [
      { h: "More donations", p: "A simple, trusted flow encourages people to give." },
      { h: "Reaches everyone", p: "Accessible, multilingual design includes all audiences." },
      { h: "Builds trust", p: "Transparent, professional presence earns confidence." },
    ],
    faqs: [
      { q: "Can people donate online?", a: "Yes — we set up secure donation processing with the options you need." },
      { q: "Is the site accessible?", a: "Yes. We build to WCAG accessibility standards so everyone can use it." },
    ],
  },
];

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug);
export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);

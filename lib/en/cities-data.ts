/**
 * English city pages: /en/web-design-casablanca and five more.
 *
 * The URL and the H1 carry the phrase English searchers type ("web design
 * casablanca", "web design marrakech", "web designer rabat": Google
 * autocomplete, 2026-09-12). The copy is written from each city's real
 * economy, like the French pages, and adds what matters to a foreign reader:
 * working in English, remote collaboration, invoicing in dirhams.
 *
 * As in French, no office or client is claimed outside Casablanca.
 */

import { fillPricesDeep } from "../pricing";
import { CITY_LINKS_EN } from "../city-list";
import type { City } from "../cities-data";

export type CityEn = City & { /** The French page, which also names the hero photo. */ fr: string };

export const CITIES_EN: CityEn[] = fillPricesDeep(
  [
    {
      slug: "web-design-casablanca",
      fr: "agence-web-casablanca",
      name: "Casablanca",
      inCity: "in Casablanca",
      title: "Web Design Agency in Casablanca | Digital Marketing | WEVTEX",
      metaDescription:
        "Web design agency in Casablanca: business websites, online stores, mobile apps and SEO. Casablanca-based studio, free quote in dirhams and a firm deadline.",
      h1: "Web design agency in",
      h1Em: "Casablanca.",
      intro:
        "In Casablanca, your customer compares three websites before calling. As a web design agency based in Casablanca, we build the website, online store or app that makes them choose you, with a clear quote in dirhams and a firm deadline.",
      context: [
        "Casablanca is where most of Morocco's business happens: the port, the Casablanca Finance City business district, the industrial zones of Ain Sebaa and Sidi Bernoussi, and a dense fabric of small companies in Maarif, Gauthier and Bourgogne. Competition online is fiercer here than anywhere else in Morocco, and that changes how a website should be built: being online is not enough, you have to be found before the others.",
        "In practice, that means a website that loads fast on a mobile network, pages written for the searches your customers actually make, and a Google Business Profile kept up to date. Those three things decide whether a shop in Maarif or a firm in Casablanca Finance City gets enquiries, or stays invisible behind three directories.",
      ],
      sectors: [
        { h: "Retail & e-commerce", p: "Shops in Maarif, Californie or Anfa that want to sell online as well as in store, with local payment and delivery across Casablanca." },
        { h: "Professional services", p: "Law firms, accountants and consultancies in Casablanca Finance City and the city centre, for whom the website is the first test of credibility." },
        { h: "Industry & logistics", p: "Companies in Ain Sebaa, Sidi Bernoussi and the port area: technical catalogs, quote requests and supplier portals." },
        { h: "Health & wellness", p: "Clinics and practices in Bourgogne, Gauthier and Racine, with online booking and automatic reminders." },
      ],
      proximity:
        "Our studio is in Casablanca. We can meet you in person when it helps and work remotely when it doesn't: most of our projects move forward through short weekly check-ins, without pointless meetings.",
      faqs: [
        { q: "How much does a website cost in Casablanca?", a: "Our packages start at MAD {{prix:website-creation/Vitrine}} for a simple business website. An online store or an app costs more, depending on the number of pages, the features and the content to produce. You get a firm quote before any work starts." },
        { q: "Do you work with companies outside Casablanca?", a: "Yes. We are based in Casablanca and work remotely with clients across Morocco and abroad, in English, French or Darija." },
        { q: "How long does it take to build a website in Casablanca?", a: "A business website goes live in 2 to 4 weeks, an online store in 4 to 8. The deadline is set in the quote before work begins." },
        { q: "Do you do local SEO for Casablanca?", a: "Yes. We optimize your Google Business Profile, your pages for local searches and your presence on Google Maps, so you show up when someone looks for your service nearby." },
        { q: "Are you a digital marketing agency in Casablanca?", a: "Yes. Based in Casablanca, Wevtex brings web developers, SEO specialists, web designers and digital marketers into one team. For a Casablanca company, that means one point of contact, from the website to the Google and Meta campaigns." },
      ],
    },
    {
      slug: "web-design-rabat",
      fr: "agence-web-rabat",
      name: "Rabat",
      inCity: "in Rabat",
      title: "Web Design Agency in Rabat | Digital Marketing | WEVTEX",
      metaDescription:
        "Web design for Rabat: websites, apps and SEO for companies, institutions and NGOs. Studio based in Casablanca, one hour from Rabat. Free quote, firm deadline.",
      h1: "Web design agency in",
      h1Em: "Rabat.",
      intro:
        "We build websites, apps and SEO for organizations in Rabat. Our studio is in Casablanca, an hour away by train: close enough to meet, organized enough not to need to often.",
      context: [
        "Rabat is not Casablanca. It is an administrative capital: ministries, public agencies, embassies, NGOs, universities, and the consultancies and engineering firms that work around them. Expectations online are different here: people look for clarity, accessibility and seriousness before anything spectacular.",
        "A website that works in Rabat is therefore easy to read, accessible to people with disabilities, fast even on an average connection, and structured so official information is two clicks away. It is often bilingual too, French and Arabic, sometimes with English for international partners, which we plan from the design stage rather than bolting on afterwards.",
      ],
      sectors: [
        { h: "Public sector & NGOs", p: "Clear, accessible websites for agencies, NGOs and associations: information, forms, donations and member management." },
        { h: "Education & training", p: "Universities, schools and training centers in Agdal and Hay Riad: programs, online enrollment and student areas." },
        { h: "Professional services", p: "Engineering firms, consultancies and regulated professions, whose website must inspire trust before the first meeting." },
        { h: "Health", p: "Practices and clinics with online booking and a clear presentation of treatments." },
      ],
      proximity:
        "We are in Casablanca, one hour from Rabat by train. We travel for the meetings that matter, a project kickoff, a presentation to a committee, and work remotely the rest of the time.",
      faqs: [
        { q: "Do you build bilingual French-Arabic websites?", a: "Yes. Bilingual sites are planned from the start: page structure, reading direction, typography and SEO in both languages, rather than a translation added later. English can be added the same way for international partners." },
        { q: "Do you come to Rabat?", a: "Yes, for the meetings that justify it: project kickoff, a presentation to a committee, hands-on training. The rest of the follow-up happens remotely, in short, regular check-ins." },
        { q: "Do you work with public bodies and NGOs?", a: "Yes. These projects need accessibility and clarity above all: sufficient contrast, keyboard navigation, readable content and simple forms. We treat them as starting requirements, not options." },
        { q: "Are you a web design and digital marketing agency for Rabat?", a: "Yes. From Casablanca, one hour by train from Rabat, we act as your web developer, your SEO agency and your digital marketing agency. We work with companies, firms and institutions, and meet on site when the project calls for it." },
      ],
    },
    {
      slug: "web-design-marrakech",
      fr: "agence-web-marrakech",
      name: "Marrakech",
      inCity: "in Marrakech",
      title: "Web Design Agency in Marrakech | Riads & Hotels | WEVTEX",
      metaDescription:
        "Web design in Marrakech: websites for riads, hotels, restaurants and shops, with direct booking and local SEO. English-speaking team, free quote, firm deadline.",
      h1: "Web design agency in",
      h1Em: "Marrakech.",
      intro:
        "In Marrakech, a website mostly has one job: getting guests to book direct instead of through a platform that takes its commission. We build websites for riads, hotels, restaurants and shops that take those bookings back.",
      context: [
        "Marrakech's economy revolves around visitors: riads in the medina, hotels in Hivernage, restaurants in Gueliz, craft shops and excursion companies. Most of them rely on Booking, Airbnb or TripAdvisor to fill up, and pay 15 to 20% commission on every night.",
        "A well-built website doesn't replace those platforms, it wins back the guests who already search for you by name. That is the most profitable traffic there is: someone typing the name of your riad is ready to book, and every booking taken on your own site is a commission you don't pay.",
      ],
      sectors: [
        { h: "Hotels & riads", p: "Direct booking engine, availability calendar, galleries that make people want to come, and pages in the languages of your guests." },
        { h: "Restaurants", p: "Up-to-date illustrated menus, table booking, Google reviews and local SEO to catch searches made on the spot." },
        { h: "Crafts & retail", p: "Online stores that sell Moroccan craftsmanship worldwide, with multi-currency pricing and international shipping." },
        { h: "Tours & experiences", p: "Activity catalog, online booking and pages ranked on the searches travelers make before they leave." },
      ],
      proximity:
        "We are based in Casablanca and work with Marrakech remotely. In practice it changes nothing: weekly check-ins, designs shared online, and one point of contact on WhatsApp, in English or French.",
      faqs: [
        { q: "Can you add a booking engine to my riad's website?", a: "Yes. We add a direct booking engine to your site, with an availability calendar and online payment, so you get paid without a platform commission." },
        { q: "Do you build multilingual websites for foreign guests?", a: "Yes. English, French and Spanish are the most requested combinations in Marrakech. Languages are planned in the site structure from the start, which also lets each language rank on Google." },
        { q: "Can I keep Booking alongside my own website?", a: "Of course. The goal is not to leave the platforms but to win back the bookings of guests who already search for you by name: those are the ones that cost you the most in commission." },
        { q: "Are you a digital marketing agency for Marrakech?", a: "Yes, working remotely from Casablanca. For riads, hotels, restaurants, craftspeople and travel agencies in Marrakech, we handle multilingual web design, direct booking, SEO and the campaigns that bring foreign visitors. The same contact is your web developer and your SEO agency, so you are found in English as well as in French." },
      ],
    },
    {
      slug: "web-design-fes",
      fr: "agence-web-fes",
      name: "Fez",
      inCity: "in Fez",
      title: "Web Design Agency in Fez | Crafts, Riads & Shops | WEVTEX",
      metaDescription:
        "Web design in Fez: websites for artisans, riads and shops, e-commerce to sell abroad and local SEO. Studio based in Casablanca. Free quote in dirhams.",
      h1: "Web design agency in",
      h1Em: "Fez.",
      intro:
        "Fez lives on its crafts, its heritage and its schools. We build websites that give that craftsmanship the showcase it deserves, and a way to sell beyond the medina.",
      context: [
        "Fez holds Morocco's greatest craft heritage: brass and copperwork, zellige, tanneries, embroidery, the pottery of Ain Nokbi. Demand reaches far beyond the city, into Europe and North America, but it almost always hits the same wall: a workshop known locally has no presence online, and the foreign buyer goes to a reseller who does.",
        "The challenge is not local reputation, which is already there, but credibility at a distance: photos that do justice to the piece, a description that explains the technique, clear shipping and a way to pay. That is what separates a workshop that exports from one that waits for passers-by.",
      ],
      sectors: [
        { h: "Crafts & export", p: "Online stores for brass, zellige, leather and pottery, with multi-currency pricing, international shipping and product pages that explain the technique." },
        { h: "Riads & hospitality", p: "Direct booking for medina riads, rather than nights that go to commission." },
        { h: "Education & training", p: "Universities, schools and institutes: programs, online enrollment and student areas." },
        { h: "Retail & services", p: "Shops in the Ville Nouvelle and local businesses, with a Google Business Profile and local SEO." },
      ],
      proximity:
        "Our studio is in Casablanca and we work with Fez remotely: designs shared online, weekly check-ins and one point of contact on WhatsApp.",
      faqs: [
        { q: "Can you build a store to sell crafts abroad?", a: "Yes. It is a common project: translated catalog, multi-currency pricing, international shipping rates and product pages that explain the technique and the origin. That is what reassures a buyer who cannot touch the piece." },
        { q: "Do you build websites for riads in the medina?", a: "Yes, with a direct booking engine. Every booking taken on your site is a platform commission you don't pay." },
        { q: "Do you work remotely with Fez?", a: "Yes. Everything is followed online: viewable designs, weekly check-ins and WhatsApp during office hours. The project moves exactly as if it were in Casablanca." },
        { q: "Are you a web design and digital marketing agency for Fez?", a: "Yes, from Casablanca. For artisans, guesthouses, schools and shops in Fez, our team builds the website, the online store that sells crafts abroad and the local SEO, as a full digital marketing agency. In Fez we also act as your web developer and your SEO agency for local searches." },
      ],
    },
    {
      slug: "web-design-tangier",
      fr: "agence-web-tanger",
      name: "Tangier",
      inCity: "in Tangier",
      title: "Web Design Agency in Tangier | Industry & Export | WEVTEX",
      metaDescription:
        "Web design in Tangier: industrial and logistics websites, e-commerce and apps, in English, French and Spanish. Studio based in Casablanca. Free quote.",
      h1: "Web design agency in",
      h1Em: "Tangier.",
      intro:
        "Tangier became an industrial and logistics hub before it became a tourist city. We build websites there whose first job is to be found by professional buyers, and to get a quote out faster.",
      context: [
        "Tanger Med, the free zone and the automotive, textile and aerospace clusters have made the region an industrial hub that deals with Europe every day. The typical customer is not a consumer: it is a buyer, a contractor or a logistics partner looking for a supplier and comparing three websites in ten minutes.",
        "An effective industrial website doesn't need to be spectacular. It needs clear technical sheets, verifiable references, a quote request that takes thirty seconds, and pages written for B2B searches in English, French and sometimes Spanish.",
      ],
      sectors: [
        { h: "Manufacturing & subcontracting", p: "Technical catalogs, certifications, production capacity and a simple quote request for European contractors." },
        { h: "Logistics & transport", p: "Shipment tracking, partner portals and pages ranked on searches for import-export providers." },
        { h: "Retail & e-commerce", p: "Online stores that sell in Morocco and abroad, with stock management and secure payment." },
        { h: "Hospitality", p: "Direct booking for hotels on the bay and in the city center." },
      ],
      proximity:
        "Studio based in Casablanca, working with Tangier remotely every day. Our projects move forward through short weekly check-ins and a design you can view online at every stage.",
      faqs: [
        { q: "Do you build websites in English and Spanish?", a: "Yes. In Tangier, English and Spanish often matter as much as French, especially for industry and logistics. Each language is optimized for search separately, not just translated." },
        { q: "Can you connect the website to our internal tools?", a: "Yes. We connect the site to your existing tools, ERP, stock management, shipment tracking, or build the missing tool when nothing on the market fits." },
        { q: "How much does an industrial company website cost?", a: "Our packages start at MAD {{prix:website-creation/Vitrine}} for a simple business website. A site with a technical catalog, a document area and a structured quote request costs more; the quote is firm before work starts." },
        { q: "Are you a digital agency for Tangier?", a: "Yes, from Casablanca. For manufacturers, logistics companies and exporters in Tangier, our work covers the multilingual website, the technical catalog and the B2B quote request, then SEO and campaigns aimed at Europe. We also act as your web developer and SEO agency, from the catalog to your Google rankings." },
      ],
    },
    {
      slug: "web-design-agadir",
      fr: "agence-web-agadir",
      name: "Agadir",
      inCity: "in Agadir",
      title: "Web Design Agency in Agadir | Hotels & Export | WEVTEX",
      metaDescription:
        "Web design in Agadir: websites for hotels, surf schools, cooperatives and shops, e-commerce and local SEO. Studio based in Casablanca. Free quote.",
      h1: "Web design agency in",
      h1Em: "Agadir.",
      intro:
        "Agadir lives on tourism, fishing and the agriculture of the Souss. We build websites for businesses and producers who want to sell direct, to visitors and to export markets.",
      context: [
        "The region combines two economies that rarely meet online: seaside tourism, with its hotels and residences, and the agri-food industry of the Souss, argan cooperatives, fresh produce and canneries, which exports to Europe. Both share the same blind spot: an online presence too thin to catch the demand already looking for them.",
        "For a hotel, that means bookings that go to commission. For a cooperative, it means foreign buyers who find no credible website and move on to a competitor who has one. In both cases, a proper website and an up-to-date Google profile change the outcome.",
      ],
      sectors: [
        { h: "Hotels & residences", p: "Direct booking, galleries, translated pages and SEO on stay searches for Agadir and Taghazout." },
        { h: "Agri-food & cooperatives", p: "Credible business websites for argan, fresh produce and canneries, built for export buyers." },
        { h: "Local retail", p: "Online stores and local SEO for shops in the city center and the marina." },
        { h: "Services & health", p: "Practices and local businesses, with online booking and a presence on Google Maps." },
      ],
      proximity:
        "We work with Agadir remotely from Casablanca. Everything is followed online: shared designs, weekly check-ins, and one contact on WhatsApp during office hours.",
      faqs: [
        { q: "Can you build a website for a cooperative?", a: "Yes. For a cooperative, the challenge is credibility with buyers who don't know you: certifications, capacity, traceability and direct contact, presented clearly and translated for your markets." },
        { q: "Do you do local SEO for Agadir?", a: "Yes. Google Business Profile, pages optimized for local searches and ranking on Maps, so you show up when someone looks for your service on the spot." },
        { q: "Do you work remotely?", a: "Yes, that is how we work with Agadir. Online designs, weekly check-ins and a single point of contact: the project moves exactly as if it were in Casablanca." },
        { q: "Are you a digital agency for Agadir?", a: "Yes, remotely from Casablanca. For hotels, surf schools, agricultural exporters and shops in Agadir, we are the web development agency, the digital marketing agency and the web designer for your site or online store. Agadir businesses get a web developer and an SEO agency they can reach on WhatsApp." },
      ],
    },
  ],
  "en",
);

export const CITY_SLUGS_EN = CITIES_EN.map((c) => c.slug);
export const getCityEn = (slug: string) => CITIES_EN.find((c) => c.slug === slug);

/* The English navigation reads lib/city-list (CITY_LINKS_EN); the two must agree. */
const navList = CITY_LINKS_EN.map((c) => `${c.slug}:${c.name}:${c.fr}`).join("|");
const pageList = CITIES_EN.map((c) => `${c.slug}:${c.name}:${c.fr}`).join("|");
if (navList !== pageList) {
  throw new Error(`lib/city-list.ts is out of sync with lib/en/cities-data.ts: ${navList} != ${pageList}`);
}

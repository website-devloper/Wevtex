/**
 * /en/contact FAQs. Rendered on the page and sent as FAQPage schema from the
 * same array, as on the French page. These are commitments to clients.
 */
import { fillPricesDeep } from "../pricing";
import type { ContactFaq } from "../contact-content";

export const CONTACT_FAQS_EN: ContactFaq[] = fillPricesDeep(
  [
    {
      q: "How long does it take to build a website?",
      a: "A business website goes live in 2 to 4 weeks, an online store in 4 to 8. The delivery date is written in the quote, before work begins.",
    },
    {
      q: "How much does a website cost?",
      a: "Our packages start at MAD {{prix:website-creation/Vitrine}}. The final price depends on the number of pages, the features and the content to produce. You get a detailed quote before any commitment.",
    },
    {
      q: "Do you work with clients outside Morocco?",
      a: "Yes. We are based in Casablanca and work remotely with clients in Morocco and abroad. We work in English, French or Arabic.",
    },
    {
      q: "Who owns the website at the end of the project?",
      a: "You do. The website, the domain name and the hosting are put in your name. You own everything, and you are free to work with whoever you want afterwards.",
    },
    {
      q: "Can I edit the content myself?",
      a: "Yes. We set up a simple interface to edit your text and images, and we show you how to use it before launch.",
    },
    {
      q: "What happens after launch?",
      a: "We stay reachable. Fixes related to our work are covered, and you can add monthly support if you want the website to keep evolving.",
    },
    {
      q: "How do I get started?",
      a: "Fill in the form above, or message us directly on WhatsApp. We get back to you with a first opinion and a clear idea of the budget.",
    },
  ],
  "en",
);

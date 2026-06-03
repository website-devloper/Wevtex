/**
 * Shared home content that must exist in BOTH the server component
 * (for JSON-LD) and the client UI (for rendering). Keep it plain data
 * (no JSX) so it can be imported on the server.
 */

export const FAQS = [
  { q: "How long does a website take?", a: "Most business sites go live in 2–4 weeks; online stores in 4–8. You get a firm timeline with your quote, before anything starts." },
  { q: "How does payment work?", a: "A fixed price for a fixed scope, split into milestones. You approve each stage before it's invoiced — nothing is due until you're happy with it." },
  { q: "Will my website show up on Google?", a: "Yes. Every site is built SEO-ready, and we can take it further with our SEO and GEO services so customers find you on Google and AI search." },
  { q: "Who owns the finished website?", a: "You do — completely. Code, content, domain and every account are handed over in your name. No lock-in, ever." },
  { q: "Do you handle hosting and domains?", a: "Yes. We set up fast, secure hosting and your domain, and can keep managing them — or hand everything over if you'd rather run it yourself." },
  { q: "What happens after launch?", a: "Every build includes post-launch support. After that, an optional care plan keeps your site monitored, updated and backed up." },
] as const;

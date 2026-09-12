/**
 * /en/ai-automation-agency-morocco — the AI page in English.
 *
 * Targets "ai agency morocco", "ai automation agency morocco", "ai agent
 * morocco" and "ai automation morocco" (Google autocomplete, hl=en, gl=ma,
 * 2026-09-12). Same rules as the French page: every section stands alone if
 * quoted, and every claim maps to something the studio already ships.
 */

export const IA_FAQS_EN = [
  {
    q: "What is an AI agent for a business?",
    a: "An AI agent is a program that understands a request in plain language and acts on it: answering a customer, qualifying a lead, finding an order, filling in a document. Unlike a scripted chatbot, it doesn't need every question to be planned in advance.",
  },
  {
    q: "How much does an AI agent cost in Morocco?",
    a: "A simple WhatsApp assistant starts at the level of our automation packages; an agent connected to your catalog, stock or CRM costs more. The price depends mostly on the number of systems to connect, not on the model used. The quote is firm before work starts.",
  },
  {
    q: "Can AI answer in Darija?",
    a: "Yes. Current models handle French, Modern Standard Arabic, Moroccan Darija and English in the same conversation: a customer can ask in Darija and get an answer in Darija. That is what makes automation useful in Morocco rather than theoretical.",
  },
  {
    q: "Is my data safe?",
    a: "We keep each client's data separate and send the model only what the answer needs. Your files, catalog and conversations remain yours, and we document what goes through before anything goes live.",
  },
  {
    q: "How long does it take to put an agent into service?",
    a: "A WhatsApp assistant that answers common questions is live in 1 to 3 weeks. An agent connected to your internal tools takes longer, because most of the work is the integration, not the AI itself.",
  },
  {
    q: "Will AI replace my team?",
    a: "No, and that isn't the goal. What automates well is the repetitive: the same question asked thirty times a day, a cart reminder, filling in a form. Your team gets that time back for the requests that deserve a person.",
  },
];

export const IA_CAPABILITIES_EN = [
  {
    h: "WhatsApp assistants",
    p: "An agent that answers product questions, tracks an order, books an appointment and hands over to a person when needed. In English, French or Darija, 24/7.",
  },
  {
    h: "Sales agents",
    p: "The customer describes their need, the agent recommends, builds a cart and takes the order in the conversation. We delivered one for a Moroccan cosmetics store.",
  },
  {
    h: "Business automation",
    p: "Quotes, reminders, document entry, stock updates: the repetitive tasks that take half a day a week and that nobody likes doing.",
  },
  {
    h: "Search across your documents",
    p: "Your catalogs, contracts and procedures searchable in plain language, with the source cited, so the answer is verifiable rather than merely plausible.",
  },
];

export const IA_STEPS_EN = [
  { n: "01", h: "Scoping", p: "We identify the task that costs you the most time and check that it can really be automated. Some can't, and we say so.", d: "2–3 days" },
  { n: "02", h: "Prototype", p: "A working agent on a reduced scope, which you test with your own cases. You judge on evidence before committing to the rest.", d: "1–2 weeks" },
  { n: "03", h: "Integration", p: "Connection to your tools: WhatsApp, catalog, stock, CRM. That is where most of the work goes, not into the model.", d: "2–4 weeks" },
  { n: "04", h: "Go-live", p: "Production launch, monitoring of real conversations and adjustments. An agent is tuned with real exchanges, not in a lab.", d: "1 week" },
];

export const IA_META_EN = {
  path: "/en/ai-automation-agency-morocco",
  title: "AI Automation Agency in Morocco | AI Agents | WEVTEX",
  description:
    "AI agency in Casablanca: WhatsApp AI agents, task automation and assistants connected to your tools, for businesses in Morocco. Live in 1 to 4 weeks.",
  keywords: [
    "ai agency morocco",
    "ai automation agency morocco",
    "ai automation morocco",
    "ai agent morocco",
    "ai development company morocco",
    "morocco ai company",
    "ai company casablanca",
    "ai chatbot whatsapp",
    "darija ai chatbot",
    "business automation morocco",
  ],
  h1: "AI automation agency",
  h1Em: "in Morocco.",
  lede:
    "Wevtex is a Casablanca-based studio that builds AI agents and automations for businesses in Morocco: a WhatsApp assistant that answers customers in Darija, English or French, an agent that takes orders, a bot that handles your team's repetitive tasks. A first agent is live within 1 to 4 weeks.",
} as const;

/** "What AI really changes": the honest framing, before the catalog. */
export const IA_REALITY_EN = [
  "Business AI isn't a conference topic: it's a question of time won back. A small Moroccan business receiving thirty WhatsApp messages a day spends an hour and a half answering the same three things. That hour and a half is what we give back, no more, and we say so before we start.",
  "What changed in the last two years is language. Models now understand written Darija as well as French and English, which makes automation usable in Morocco instead of being reserved for English-speaking markets. A customer can write “chhal taman” and get the right answer, in their own language.",
  "The real work isn't the model: it's the plumbing. Connecting the agent to your catalog, stock, calendar or CRM is most of the project. It is also what separates an agent that does the job from a chatbot that recites.",
  "As an AI automation agency in Morocco, we work on three fronts: automating repetitive tasks, AI chatbots on WhatsApp for customer relations, and Darija AI chatbots for customers who write the way they speak.",
  "For a business in Morocco, artificial intelligence only makes sense if it gives time back. Business automation in Morocco therefore always starts with the same question: which task costs you the most hours?",
];

/** Trades where the studio has actually shipped or scoped this work. */
export const IA_SECTORS_EN = [
  { h: "E-commerce", p: "Product advice, order tracking and cart reminders in the conversation. Delivered for a Moroccan cosmetics store." },
  { h: "Services & appointments", p: "Request qualification and direct booking into the calendar, with no phone back-and-forth." },
  { h: "Real estate & automotive", p: "Incoming requests sorted by budget, area and availability, so the salesperson only calls back real prospects." },
  { h: "Import, wholesale & distribution", p: "Recurring quotes, payment reminders and stock updates: the office tasks that automate most cleanly." },
];

"use client";

import { useTheme } from "../../app/ThemeContext";
/**
 * Wevtex homepage — a lean conversion funnel:
 * Hero → Problem → Services → Industries → Proof → Work → FAQ → Pricing → Add-ons → CTA → Contact.
 * Primary actions everywhere are WhatsApp and email.
 */

import { useEffect, useRef } from "react";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollRevealText } from "./ScrollRevealText";
import { WaveBackground } from "./WaveBackground";
import { HeroReviews } from "./HeroReviews";
import { ContactForm } from "./ContactForm";
import { FAQS } from "./homeContent";

/* Contact channels — used by every call to action */
const WHATSAPP_URL = "https://wa.me/212687633774";
const EMAIL_URL = "mailto:hello@wevtex.co";

const WHATSAPP = (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden style={{ marginRight: 2 }}>
    <path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" />
  </svg>
);

/* Service cards */
const INDUSTRIES = [
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-4h16l1 4"></path><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"></path><path d="M9 21V13h6v8"></path></svg>,
    head: "E-Commerce & Retail",
    body: "Fashion, beauty, home decor, and local groceries. Complete with shopping carts, secure checkout, and inventory management."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 012 2v10"></path><path d="M2 17h20"></path><path d="M6 8v3"></path></svg>,
    head: "Tourism & Hospitality",
    body: "Hotels, resorts, and travel agencies. Features direct booking engines, availability calendars, and virtual tours."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path></svg>,
    head: "Professional Services",
    body: "Law firms, accounting, real estate, and consulting. We build trust-driven sites to capture leads and schedule appointments."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"></path></svg>,
    head: "Healthcare & Wellness",
    body: "Clinics, fitness gyms, and therapists. Secure patient intake forms, class scheduling, and service directories."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z"></path></svg>,
    head: "Industry & Logistics",
    body: "Construction, manufacturing, and transport. Showcase your fleet, portfolio, and easily generate B2B quote requests."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
    head: "Education & E-Learning",
    body: "Schools, online courses, and training centers. Integrated student portals, video hosting, and certification modules."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
    head: "Creative, Media & Tech",
    body: "SaaS startups, marketing agencies, and artisans. High-performance, animated landing pages to convert early adopters."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    head: "Public Sector & NGOs",
    body: "Charities, foundations, and public institutions. Accessible design, donation processing, and community engagement."
  }
];

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    head: <>Web <em>Development</em>.</>,
    body: "High-performance web apps with React, Next.js and TypeScript. Modern, scalable architecture.",
    tags: ["React", "Next.js", "TypeScript", "API"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9s1.3-6.5 3.8-9z" />
      </svg>
    ),
    head: <><em>WordPress</em> sites.</>,
    body: "Custom showcase and corporate sites. Bespoke themes, optimized performance, maintenance included.",
    tags: ["WordPress", "Custom", "SEO", "Starter"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
    head: <>ERP & <em>Management</em>.</>,
    body: "Centralize your business: invoicing, stock and CRM. Custom Dolibarr and Odoo solutions.",
    tags: ["Dolibarr", "Odoo", "CRM", "Invoicing"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    head: <><em>E-commerce</em>.</>,
    body: "Turnkey online stores. Stripe payments, product management and order tracking.",
    tags: ["WooCommerce", "Stripe", "Payments", "Stock"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    head: <><em>Automation</em>.</>,
    body: "Automate your repetitive tasks. Smart workflows that connect all your tools together.",
    tags: ["n8n", "Workflows", "API", "Webhooks"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    head: <>Business <em>Apps</em>.</>,
    body: "Custom software for your unique processes. Dashboards and dedicated internal tools.",
    tags: ["Custom", "Dashboard", "SaaS", "Internal"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    head: <>AI <em>Chatbots</em>.</>,
    body: "Smart chatbots that automate customer service. Available 24/7 on WhatsApp, Messenger and web.",
    tags: ["OpenAI", "WhatsApp", "NLP", "24/7"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    head: <>UX/UI <em>Design</em>.</>,
    body: "Intuitive, beautiful interfaces that convert. Wireframes, prototypes and design systems.",
    tags: ["Figma", "Prototype", "Design System", "Mobile"],
  },
];

/* Add-on cards */
const ADDONS = [
  { h: "Extra pages", p: "Add more pages to any package as you grow.", pr: "300 DH / page" },
  { h: "Multilingual", p: "Serve your customers in a second language.", pr: "800 DH" },
  { h: "Blog setup", p: "A blog to publish news and boost your SEO.", pr: "1,000 DH" },
  { h: "SEO boost", p: "Deeper optimization to climb higher on Google.", pr: "from 1,000 DH" },
  { h: "Booking system", p: "Let customers book appointments online.", pr: "1,500 DH" },
  { h: "Google Business", p: "Get found on Google Maps and local search.", pr: "from 500 DH" },
  { h: "Social media setup", p: "Branded social accounts, ready to post.", pr: "500 DH" },
  { h: "Store module", p: "Add a shop and checkout to an existing site.", pr: "from 2,000 DH" },
];

/* Process steps */
const STEPS = [
  { n: "01", h: "Discover", p: "A quick call to understand your business, your customers and your goals. You get a clear plan before anything starts.", d: "1–2 days" },
  { n: "02", h: "Design", p: "We design your site in the browser and refine it with you — so what you approve is exactly what gets built.", d: "3–5 days" },
  { n: "03", h: "Build", p: "We build a fast, secure, mobile-ready site, with updates every week so you always know where things stand.", d: "1–3 weeks" },
  { n: "04", h: "Launch", p: "We put your site live, test everything, connect analytics and hand it over — with support continuing after launch.", d: "1–2 days" },
];

/* Sample proof — placeholder content shown for layout only.
   TODO: replace with real, verified client case studies before launch. */
const PROJECTS = [
  { h: "Sample — E-Commerce", tag: "E-Commerce · Headless", style: "" },
  { h: "Sample — Booking", tag: "Booking · SaaS", style: "style2" },
  { h: "Sample — Desktop", tag: "Desktop · Electron", style: "" },
  { h: "Sample — Branding", tag: "Branding · Web", style: "" },
  { h: "Sample — SEO/Growth", tag: "SEO · Growth", style: "style2" },
  { h: "Sample — Retail", tag: "E-Commerce · Retail", style: "" },
];

/* Sample testimonials — placeholder content shown for layout only.
   TODO: replace with real, attributed client reviews (name, company, photo) before launch. */
const TESTIMONIALS = [
  { featured: true, q: "Wevtex rebuilt our site and the calls started coming in. It loads fast, looks the part, and customers finally find us on Google. Worth every dirham.", a: "S", n: "Sample client", r: "Founder · Sample Studio" },
  { q: "They explained everything in plain language, kept to the timeline, and the price never moved. Easiest project we've run.", a: "G", n: "Sample client", r: "Manager · Sample Trading" },
  { q: "Our online store went live in three weeks and we took our first order the same day. Support has been quick every time we've reached out.", a: "N", n: "Sample client", r: "Owner · Sample & Co." },
  { q: "We went from invisible to page one for our main keywords. The SEO work paid for itself within a couple of months.", a: "T", n: "Sample client", r: "Director · Sample Growth" },
  { q: "A real team that picks up the phone. They handle our hosting so we never think about it — the site just works.", a: "A", n: "Sample client", r: "Manager · Sample Co." },
  { q: "Professional from the first call to launch. The new website looks far more expensive than what we paid.", a: "D", n: "Sample client", r: "Founder · Sample Desktop" },
];

export function HomeClient() {
  const { isDark } = useTheme();

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanups: Array<() => void> = [];

    /* Scroll reveal */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            const cta = e.target.closest(".cta");
            if (cta) cta.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    root.querySelectorAll(".reveal, .reveal-words").forEach((r) => io.observe(r));
    cleanups.push(() => io.disconnect());

    /* Testimonials carousel */
    const track = root.querySelector<HTMLElement>("#tTrack");
    if (track) {
      const slides = track.children;
      const total = slides.length;
      let current = 0;
      const counter = root.querySelector<HTMLElement>("#tCurrent");
      const totalEl = root.querySelector<HTMLElement>("#tTotal");
      const progress = root.querySelector<HTMLElement>("#tProgress");
      const prev = root.querySelector<HTMLButtonElement>("#tPrev");
      const next = root.querySelector<HTMLButtonElement>("#tNext");
      if (totalEl) totalEl.textContent = String(total).padStart(2, "0");
      const getVisible = () => (window.innerWidth < 880 ? 1 : 2);
      const render = () => {
        const slideWidth = (slides[0] as HTMLElement).getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 24;
        track.style.transform = `translateX(${-current * (slideWidth + gap)}px)`;
        if (counter) counter.textContent = String(current + 1).padStart(2, "0");
        if (progress) progress.style.width = `${((current + 1) / total) * 100}%`;
        if (prev) prev.disabled = current === 0;
        if (next) next.disabled = current >= total - getVisible();
      };
      const go = (d: number) => {
        const max = total - getVisible();
        current = Math.max(0, Math.min(max, current + d));
        render();
      };
      const onPrev = () => go(-1);
      const onNext = () => go(1);
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      window.addEventListener("resize", render);

      let auto = window.setInterval(() => {
        const max = total - getVisible();
        current = current >= max ? 0 : current + 1;
        render();
      }, 6000);
      const car = track.closest(".t-carousel");
      const onCarEnter = () => clearInterval(auto);
      const onCarLeave = () => {
        clearInterval(auto);
        auto = window.setInterval(() => {
          const max = total - getVisible();
          current = current >= max ? 0 : current + 1;
          render();
        }, 6000);
      };
      car?.addEventListener("mouseenter", onCarEnter);
      car?.addEventListener("mouseleave", onCarLeave);

      let startX = 0, dx = 0, dragging = false;
      const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; dragging = true; };
      const onTouchMove = (e: TouchEvent) => { if (dragging) dx = e.touches[0].clientX - startX; };
      const onTouchEnd = () => {
        if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
        dragging = false; dx = 0;
      };
      track.addEventListener("touchstart", onTouchStart, { passive: true });
      track.addEventListener("touchmove", onTouchMove, { passive: true });
      track.addEventListener("touchend", onTouchEnd);

      render();
      cleanups.push(() => {
        clearInterval(auto);
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        window.removeEventListener("resize", render);
        car?.removeEventListener("mouseenter", onCarEnter);
        car?.removeEventListener("mouseleave", onCarLeave);
        track.removeEventListener("touchstart", onTouchStart);
        track.removeEventListener("touchmove", onTouchMove);
        track.removeEventListener("touchend", onTouchEnd);
      });
    }

    /* Smooth anchors */
    const anchors = root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const anchorHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];
    anchors.forEach((a) => {
      const handler = (e: Event) => {
        const id = a.getAttribute("href") || "";
        if (id.length > 1) {
          const el = document.querySelector(id);
          if (el) {
            e.preventDefault();
            window.scrollTo({
              top: el.getBoundingClientRect().top + window.scrollY - 80,
              behavior: "smooth",
            });
          }
        }
      };
      a.addEventListener("click", handler);
      anchorHandlers.push([a, handler]);
    });
    cleanups.push(() => anchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h)));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className={`wevtex ${isDark ? 'mode-dark' : 'mode-light'}`} ref={rootRef}>
      {/* ===================== HEADER ===================== */}
      <SiteHeader />

      {/* ===================== HERO ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} hero`} id="hero" style={{ position: "relative" }}>
        <WaveBackground />
        <div className="hero-wash"></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-centered">
            <div className="hero-content" style={{ width: "100%" }}>
              <span className="status-pill" style={{ marginBottom: 24 }}>
                <span className="pulse"></span>Available for new projects
              </span>
              <ScrollRevealText
                as="h1"
                mode="load"
                em={["customers"]}
                emClassName="serif-em"
                text={"Websites & apps that turn\nvisitors into customers."}
              />
              <p className="hero-sub" style={{ margin: "0 auto 40px auto" }}>
                From first idea to launch in weeks — custom websites, online stores and
                automation, built to bring your business more customers.
              </p>
              <div className="hero-ctas">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Get a free quote
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href="/portfolio" className="btn btn-outline">
                  See our work
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
              <HeroReviews />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-paper"} problem`} id="problem">
        <div className="container">
          <div className="industries-head reveal">
            <div>
              <span className="eyebrow">The problem</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"Most business websites\ndon't bring in customers."}
                em={["don't", "bring", "in", "customers."]}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
            </div>
            <p className="lead">
              They load slowly, hide on page five of Google, and look nothing like the business behind
              them — so visitors leave and buy elsewhere. We fix that: fast, findable sites built
              around how your customers actually decide.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} features`} id="services">
        <div className="container">
          <div className="cap-head reveal">
            <div>
              <span className="eyebrow">Services</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"Everything to grow\nyour business online."}
                em={["online"]}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
            </div>
          </div>

          <div className="feature-row reveal">
            {SERVICES.map((s, i) => (
              <div className="feature-card" key={i}>
                <span className="feature-icon">{s.icon}</span>
                <h4>{s.head}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <div className="addon-foot reveal">
            <span>Not sure which service fits? Tell us your goal and we&apos;ll recommend the right setup — free, no obligation.</span>
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              {WHATSAPP}
              Get a free quote
            </a>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-paper"} industries`} id="industries">
        <div className="container">
          <div className="industries-head reveal">
            <div>
              <span className="eyebrow">Industries we serve</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"Built for your\nspecific sector."}
                em={["specific", "sector"]}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
            </div>
            <p className="lead">
              Every sector sells differently. Whether you take orders, bookings, or leads, we build a site tuned to how your customers actually buy — so more of them do.
            </p>
          </div>

          <div className="industries-grid reveal">
            {INDUSTRIES.map((ind, i) => (
              <div className="ind-card" key={i}>
                <div className="ind-icon">{ind.icon}</div>
                <h4>{ind.head}</h4>
                <p>{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} process`} id="process">
        <div className="container">
          <div className="cap-head reveal">
            <div>
              <span className="eyebrow">How it works</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"From idea to launch\nin four clear steps."}
                em={["four", "clear", "steps."]}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
            </div>
            <p className="lead">
              No mystery, no jargon. You always know what&apos;s happening, what&apos;s next, and when
              your site goes live.
            </p>
          </div>

          <div className="proc-grid reveal">
            {STEPS.map((s, i) => (
              <div className="proc-card" key={i}>
                <div className="proc-num">{s.n}</div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
                <span className="proc-dur">{s.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} stats-band`}>
        <div className="container">
          {/* TODO: replace with verified figures before launch. */}
          <div className="stats-row reveal">
            <div className="stat"><strong>200+</strong><span>Projects shipped</span></div>
            <div className="stat"><strong>5.0</strong><span>Average rating</span></div>
            <div className="stat"><strong>4</strong><span>Continents served</span></div>
            <div className="stat"><strong>98%</strong><span>Clients who return</span></div>
          </div>
          <p className="sample-note reveal">Sample figures — to be confirmed with verified numbers before launch.</p>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} projects`} id="work">
        <div className="container">
          <div className="projects-head reveal">
            <div>
              <span className="eyebrow">Our work</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"Recent projects."}
                em={["projects"]}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
            </div>
            <p className="sample-note">Sample concepts shown for layout — real client case studies coming soon.</p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <a className="project-small reveal" data-delay={(i % 3) + 1} href="/portfolio" key={i}>
                <div className={`project-visual ${p.style}`}>
                  <div className="mockup">
                    <div className="topbar"><span></span><span></span><span></span></div>
                    <div className="body">
                      <div className="row1"><div></div><div></div><div></div></div>
                      <h4></h4>
                      <p></p>
                      <div className="grid">
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="small-meta">
                  <h4>{p.h}</h4>
                  <span className="tag">{p.tag}</span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }} className="reveal">
            <a href="/portfolio" className="btn btn-outline">
              See all our work
              <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} faq`} id="faq">
        <div className="container">
          <div className="faq-head reveal">
            <span className="eyebrow">FAQ</span>
            <ScrollRevealText
              as="h2"
              className="h-section"
              style={{ marginTop: 24 }}
              text={"Questions, answered."}
              em={["answered"]}
              emClassName="serif"
              emStyle={{ color: "var(--accent)" }}
            />
          </div>
          <div className="faq-list reveal">
            {FAQS.map((f, i) => (
              <details className="faq-item" key={i}>
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden></span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} testimonials`} id="testimonials">
        <div className="container">
          <div className="testimonials-head reveal">
            <div>
              <span className="eyebrow">Client reviews</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"Businesses that\ntrust us."}
                em={["trust", "us"]}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
            </div>
            <p className="sample-note">
              Sample reviews shown for layout — real, attributed client testimonials coming soon.
            </p>
          </div>

          <div className="t-carousel reveal">
            <div className="t-track" id="tTrack">
              {TESTIMONIALS.map((t, i) => (
                <div className={t.featured ? "t-slide featured" : "t-slide"} key={i}>
                  <span className="quote-mark">&ldquo;</span>
                  <div className="stars">★★★★★</div>
                  <p className="big-q">{t.q}</p>
                  <div className="person">
                    <div className="avatar">{t.a}</div>
                    <div className="person-meta">
                      <div className="name">{t.n}</div>
                      <div className="role">{t.r}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="t-controls">
              <span className="t-counter"><strong id="tCurrent">01</strong> / <span id="tTotal">06</span></span>
              <div className="t-progress"><div className="t-progress-bar" id="tProgress"></div></div>
              <div className="t-nav">
                <button id="tPrev" aria-label="Previous">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 4L6 8l4 4" /></svg>
                </button>
                <button id="tNext" aria-label="Next">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4l4 4-4 4" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} pricing`} id="pricing">
        <div className="container">
          <div className="pricing-head reveal">
            <div>
              <span className="eyebrow">Pricing</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"Clear pricing.\nNo surprises."}
                em={["No", "surprises"]}
                emClassName="serif"
                emStyle={{ color: "var(--accent-hot)" }}
              />
            </div>
            <p className="lead">
              One fixed price for a fixed scope, agreed before we start. You pay in milestones, and
              nothing is due until you&apos;re happy with the work in front of you.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="plan reveal" data-delay="1">
              <div className="plan-num">Package 01 — One Page</div>
              <h3>A single, polished page to get your business online fast.</h3>
              <div className="plan-price">
                <span className="amount">990</span>
                <span className="currency">DH</span>
                <span className="per">one-time</span>
              </div>
              <ul className="plan-features">
                <li>One professional page</li>
                <li>Fully responsive design</li>
                <li>Content writing included</li>
                <li>Premium images</li>
                <li>Contact form &amp; WhatsApp</li>
                <li>SSL security</li>
              </ul>
              <a href={WHATSAPP_URL} className="btn btn-outline" target="_blank" rel="noopener">Get started</a>
            </div>

            <div className="plan featured reveal" data-delay="2">
              <div className="plan-num">Package 02 — Corporate</div>
              <h3>Six professional pages to present your company in full.</h3>
              <div className="plan-price">
                <span className="amount">2,900</span>
                <span className="currency">DH</span>
                <span className="per">one-time</span>
              </div>
              <ul className="plan-features">
                <li>Six professional pages</li>
                <li>Modern, responsive design</li>
                <li>Content writing for every page</li>
                <li>Premium stock images</li>
                <li>WhatsApp integration</li>
                <li>SSL security</li>
              </ul>
              <a href={WHATSAPP_URL} className="btn" target="_blank" rel="noopener">Choose Corporate →</a>
            </div>

            <div className="plan reveal" data-delay="3">
              <div className="plan-num">Package 03 — E-commerce</div>
              <h3>A complete online store, ready to take orders.</h3>
              <div className="plan-price">
                <span className="amount">7,900</span>
                <span className="currency">DH</span>
                <span className="per">one-time</span>
              </div>
              <ul className="plan-features">
                <li>Up to 20 product pages</li>
                <li>Shopping cart &amp; checkout</li>
                <li>Order management system</li>
                <li>Product catalog system</li>
                <li>Conversion-focused design</li>
                <li>SSL security</li>
              </ul>
              <a href={WHATSAPP_URL} className="btn btn-outline" target="_blank" rel="noopener">Start a store</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROMISE / RISK REVERSAL ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} promise`}>
        <div className="container">
          <div className="promise-banner reveal">
            <div>
              <span className="promise-banner-kicker">Our promise</span>
              <h3>No payment until you&apos;re fully satisfied.</h3>
            </div>
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              Get a free quote
              <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== ADD-ONS ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} addons`} id="addons">
        <div className="container">
          <div className="cap-head reveal">
            <div>
              <span className="eyebrow">Add-ons</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"Make it yours\nwith add-ons."}
                em={["with", "add-ons"]}
                emClassName="serif"
                emStyle={{ color: "var(--accent-hot)" }}
              />
            </div>
          </div>

          <div className="addon-grid reveal">
            {ADDONS.map((a, i) => (
              <div className="addon-card" key={i}>
                <span className="addon-price">{a.pr}</span>
                <h4>{a.h}</h4>
                <p>{a.p}</p>
              </div>
            ))}
          </div>

          <div className="addon-foot reveal">
            <span>Not sure what you need? Tell us your goal and we&apos;ll put together the right mix.</span>
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              {WHATSAPP}
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} cta`}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">Let&apos;s talk</span>
            <ScrollRevealText
              as="h2"
              style={{ marginTop: 28 }}
              text={"Ready to grow\nyour business?"}
              em={["business"]}
            />
            <p className="lead">
              Tell us what you need on WhatsApp or by email. We reply within a few hours — with
              honest advice and a clear price, no obligation.
            </p>
            <div className="cta-ctas">
              <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                Get a free quote
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="/portfolio" className="btn btn-outline">
                See our work
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} contact`} id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="eyebrow">Get in touch</span>
              <ScrollRevealText
                as="h2"
                className="h-section"
                style={{ marginTop: 24 }}
                text={"Let’s start with\na quick message."}
                em={["quick", "message"]}
                emClassName="serif"
                emStyle={{ color: "var(--accent)" }}
              />
              <p className="lead">
                The fastest way to reach us is WhatsApp — send your idea and we&apos;ll reply with a
                clear plan and price. Prefer email or the form? That works too.
              </p>

              <div className="contact-actions">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  {WHATSAPP}
                  Chat on WhatsApp
                </a>
                <a href={EMAIL_URL} className="btn btn-outline">Email us</a>
              </div>

              <div className="contact-row">
                <div className="contact-line">
                  <span className="label">Mon – Fri</span>
                  <span className="val">09:00 – 19:00</span>
                </div>
                <div className="contact-line">
                  <span className="label">Saturday</span>
                  <span className="val">09:00 – 19:00</span>
                </div>
                <div className="contact-line">
                  <span className="label">Sunday</span>
                  <span className="val">10:00 – 16:00</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <SiteFooter />
    </div>
  );
}

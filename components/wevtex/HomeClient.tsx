"use client";

import { useTheme } from "../../app/ThemeContext";
/**
 * Wevtex homepage — a lean conversion funnel:
 * Hero → Problem → Services → Industries → Proof → Work → FAQ → Pricing → Add-ons → CTA → Contact.
 * Primary actions everywhere are WhatsApp and email.
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollRevealText } from "./ScrollRevealText";
import { ContactForm } from "./ContactForm";
import { FAQS } from "./homeContent";

/* Contact channels — used by every call to action */
const WHATSAPP_URL = "https://wa.me/212687633774";
const EMAIL_URL = "mailto:hello@wevtex.com";

const WHATSAPP = (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden style={{ marginRight: 2 }}>
    <path d="M17.5 14.4c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.65.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-1.7-.85-2.82-1.52-3.94-3.44-.3-.51.3-.48.85-1.58.1-.2.05-.36-.02-.5-.08-.15-.65-1.58-.9-2.16-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.15.2 2.03 3.1 4.92 4.35 2.88 1.24 2.88.83 3.4.78.52-.05 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2.1A9.9 9.9 0 0 0 3.5 17l-1.32 4.82 4.94-1.3A9.9 9.9 0 1 0 12 2.1z" />
  </svg>
);

/* Maps each industry card (in order) to its detail page at /industries/[slug]. */
const INDUSTRY_LINKS = [
  "ecommerce-retail", "tourism-hospitality", "professional-services", "healthcare-wellness",
  "industry-logistics", "education-elearning", "creative-media-tech", "public-sector-ngos",
];

/* Background photo for each industry card — indexed by the same position as INDUSTRY_LINKS. */
const IC_IMAGES = [
  "/images/industries/retails websites.png",          // 0 E-Commerce & Retail
  "/images/industries/ryadh websites.png",             // 1 Tourism & Hospitality
  "/images/industries/professional websites.png",      // 2 Professional Services
  "/images/industries/HealthCare websites.png",        // 3 Healthcare & Wellness
  "/images/industries/Logistic websites.png",          // 4 Industry & Logistics
  "/images/industries/Learning website.png",           // 5 Education & E-Learning
  "/images/industries/creative websites.png",          // 6 Creative, Media & Tech
  "/images/industries/public and ngo website.png",     // 7 Public Sector & NGOs
];

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

/* Maps each service card (in order) to its detail page at /services/[slug]. */
const SERVICE_LINKS = [
  "web-development", "wordpress", "erp-management", "ecommerce",
  "automation", "business-apps", "ai-chatbots", "ux-ui-design",
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

const TPOOL = [
  { q: "The new website not only looks great but has significantly increased our leads. The team was responsive, professional, and a pleasure to work with.", name: "James Carter", role: "Director, Luxora Interiors", a: "J" },
  { q: "From day one, they understood our goals and delivered beyond our expectations. Our online sales have ", em: "doubled.", name: "Sarah Mitchell", role: "CEO, Petrocore Solutions", a: "S" },
  { q: "Their automation solution saved us over 20 hours a week. Everything works seamlessly and the support has been excellent.", name: "Daniel Rahman", role: "Operations Manager, Wellcare Clinic", a: "D" },
  { q: "They explained everything in plain language, kept to the timeline, and the price never moved. Easiest project we've run.", name: "Gareth Morris", role: "Manager, Atlas Trading", a: "G" },
  { q: "Our store went live in three weeks and we took our first order the same day. Support has been quick every time.", name: "Naomi Reyes", role: "Owner, Marlow & Co.", a: "N" },
  { q: "We went from invisible to page one for our main keywords. The SEO work paid for itself within a couple of months.", name: "Theo Lindahl", role: "Director, Northbound", a: "T" },
];

export function HomeClient() {
  const { isDark } = useTheme();
  const [ti, setTi] = useState(0);

  /* Auto-rotate testimonials. */
  useEffect(() => {
    const id = window.setInterval(() => setTi((p) => (p + 1) % TPOOL.length), 6000);
    return () => clearInterval(id);
  }, []);

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

    /* Industries carousel — sync dots with scroll position + make them clickable */
    const icTrack = root.querySelector<HTMLElement>(".industries-carousel .ic-track");
    const icDots = Array.from(root.querySelectorAll<HTMLElement>(".industries-carousel .ic-dots span"));
    if (icTrack && icDots.length) {
      const syncDots = () => {
        const max = icTrack.scrollWidth - icTrack.clientWidth;
        const frac = max > 0 ? icTrack.scrollLeft / max : 0;
        const active = Math.round(frac * (icDots.length - 1));
        icDots.forEach((d, i) => d.classList.toggle("on", i === active));
      };
      icTrack.addEventListener("scroll", syncDots, { passive: true });
      window.addEventListener("resize", syncDots);
      icDots.forEach((d, i) => {
        const onClick = () => {
          const max = icTrack.scrollWidth - icTrack.clientWidth;
          icTrack.scrollTo({ left: (i / (icDots.length - 1)) * max, behavior: "smooth" });
        };
        d.addEventListener("click", onClick);
        cleanups.push(() => d.removeEventListener("click", onClick));
      });
      syncDots();
      cleanups.push(() => {
        icTrack.removeEventListener("scroll", syncDots);
        window.removeEventListener("resize", syncDots);
      });

      /* Auto-advance (pauses on hover, loops back at the end) */
      const carousel = icTrack.closest(".industries-carousel");
      const advance = () => {
        const max = icTrack.scrollWidth - icTrack.clientWidth;
        const first = icTrack.firstElementChild as HTMLElement | null;
        const step = first ? first.getBoundingClientRect().width + 18 : 260;
        if (icTrack.scrollLeft >= max - 6) icTrack.scrollTo({ left: 0, behavior: "smooth" });
        else icTrack.scrollBy({ left: step, behavior: "smooth" });
      };
      let auto = window.setInterval(advance, 3500);
      const stopAuto = () => clearInterval(auto);
      const startAuto = () => { clearInterval(auto); auto = window.setInterval(advance, 3500); };
      carousel?.addEventListener("mouseenter", stopAuto);
      carousel?.addEventListener("mouseleave", startAuto);
      cleanups.push(() => {
        clearInterval(auto);
        carousel?.removeEventListener("mouseenter", stopAuto);
        carousel?.removeEventListener("mouseleave", startAuto);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* Count-up animation for the stats band when it scrolls into view. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nums = Array.from(root.querySelectorAll<HTMLElement>(".sb-num"));
    if (!nums.length) return;

    const animate = (el: HTMLElement) => {
      const to = parseFloat(el.dataset.to || "0");
      const dec = parseInt(el.dataset.dec || "0", 10);
      const suffix = el.dataset.suffix || "";
      const dur = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        el.textContent = (to * eased).toFixed(dec) + suffix;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = to.toFixed(dec) + suffix;
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    nums.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`wevtex ${isDark ? 'mode-dark' : 'mode-light'}`} ref={rootRef}>
      {/* ===================== HEADER ===================== */}
      <SiteHeader />

      {/* ===================== HERO (mockup 1 — split) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} hero hero-split`} id="hero">
        <div className="hero-motif" aria-hidden></div>
        <div className="hero-arc" aria-hidden></div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="status-pill">
                <span className="pulse"></span>Available for new projects
              </span>
              <ScrollRevealText
                as="h1"
                mode="load"
                em={["customers"]}
                emClassName="hl-em"
                text={"Websites & apps that\nturn visitors into\ncustomers."}
              />
              <p className="hero-sub">
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
            </div>

            <div className="hero-visual" aria-hidden>
              <div className="hero-browser">
                <div className="hb-bar"><i></i><i></i><i></i><span className="hb-url">zahra.store</span></div>
                <div className="hb-body">
                  <div className="hb-nav">
                    <span className="hb-logo">ZAHRA</span>
                    <span className="hb-links"><b></b><b></b><b></b><b></b></span>
                  </div>
                  <div className="hb-hero">
                    <div className="hb-copy">
                      <span className="hb-h"></span>
                      <span className="hb-h sm"></span>
                      <span className="hb-p"></span>
                      <span className="hb-p sm"></span>
                      <span className="hb-btn">Shop collection</span>
                    </div>
                    <div className="hb-art"><span></span><span></span><span></span></div>
                  </div>
                </div>
              </div>
              <div className="hero-phone">
                <span className="hp-cam"></span>
                <div className="hp-screen">
                  <div className="hp-img"></div>
                  <span className="hp-h"></span>
                  <span className="hp-p"></span>
                  <span className="hp-p sm"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROBLEM (mockup 2 — dark band) ===================== */}
      <section className="problem-band" id="problem">
        <div className="problem-motif" aria-hidden></div>
        <div className="container">
          <div className="problem-inner">
            <h2 className="problem-h">
              Most business websites<br />
              don&apos;t <em className="hl-em hl-underline">bring in</em> customers
            </h2>
            <p className="problem-sub">
              They look nice, but they&apos;re slow, confusing, and hard to update.<br />
              We build websites and apps that actually work —<br />
              so you get more leads, more sales, and more time back.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES (mockup 3 — bento) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} services-bento`} id="services">
        <div className="container">
          <div className="bento-head reveal">
            <div className="bento-head-left">
              <span className="eyebrow line-eyebrow">Services</span>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                Everything you need<br />
                to <em className="hl-em">grow, scale</em> &amp; <em className="hl-em">automate</em>
              </h2>
            </div>
            <p className="bento-head-right">
              From powerful websites to smart automation, we build digital solutions that help your
              business grow faster and run smoother.
            </p>
          </div>

          <div className="bento-grid reveal">
            {[
              { i: 0, slug: "web-development", name: "Web Development", desc: "Fast, secure, and scalable websites built to perform.", variant: "feature" },
              { i: 1, slug: "wordpress", name: "WordPress", desc: "Flexible, easy to manage sites with WordPress.", variant: "" },
              { i: 2, slug: "erp-management", name: "ERP", desc: "Custom ERP systems to streamline operations.", variant: "" },
              { i: 4, slug: "automation", name: "Automation", desc: "Automate workflows and save valuable time.", variant: "vermilion" },
              { i: 3, slug: "ecommerce", name: "E-commerce", desc: "Online stores that convert visitors into customers.", variant: "feature ochre" },
              { i: 5, slug: "business-apps", name: "Business Apps", desc: "Powerful web apps tailored to your business needs.", variant: "" },
              { i: 6, slug: "ai-chatbots", name: "AI Chatbots", desc: "Intelligent bots that engage and support customers.", variant: "" },
              { i: 7, slug: "ux-ui-design", name: "UX/UI Design", desc: "Beautiful, intuitive designs that users love.", variant: "" },
            ].map((b) => (
              <a key={b.slug} href={`/services/${b.slug}`} className={`bento-card ${b.variant} bx-${b.slug}`}>
                <span className="bento-motif" aria-hidden></span>
                <span className="bento-icon">{SERVICES[b.i].icon}</span>
                <div className="bento-card-body">
                  <h4>{b.name}</h4>
                  <p>{b.desc}</p>
                  <span className="bento-arrow">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES (mockup 4 — carousel) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-paper"} industries-carousel`} id="industries">
        <div className="container">
          <div className="ic-head reveal">
            <span className="eyebrow line-eyebrow-center">Industries we serve</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Built for your <em className="hl-em">specific sector</em>
            </h2>
            <p className="ic-sub">
              We understand that every industry has unique challenges.<br />
              Our solutions are tailored to help you grow in your world.
            </p>
          </div>

          <div className="ic-track reveal">
            {[
              { i: 0, label: "Retail", desc: "Solutions that drive footfall and boost online sales." },
              { i: 1, label: "Hospitality", desc: "Beautiful digital experiences that delight your guests." },
              { i: 3, label: "Healthcare", desc: "Secure, compliant systems for better patient care." },
              { i: 5, label: "Education", desc: "Digital tools that empower students and educators." },
              { i: 4, label: "Logistics", desc: "Streamlined operations that keep business moving." },
              { i: 2, label: "Professional Services", desc: "Trust-driven sites that capture qualified leads." },
              { i: 6, label: "Creative & Tech", desc: "High-performance sites for startups and creators." },
              { i: 7, label: "Public & NGOs", desc: "Accessible sites that inform and inspire action." },
            ].map((it, idx) => (
              <a key={it.i} href={`/industries/${INDUSTRY_LINKS[it.i]}`} className={`ic-card g${idx % 5}`}>
                <Image
                  src={IC_IMAGES[it.i]}
                  alt={it.label}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 80vw, 25vw"
                />
                <span className="ic-overlay" aria-hidden></span>
                <span className="ic-card-inner">
                  <span className="ic-badge">{INDUSTRIES[it.i].icon}</span>
                  <span className="ic-card-text">
                    <span className="ic-card-h">{it.label}</span>
                    <span className="ic-card-p">{it.desc}</span>
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="ic-controls reveal">
            <button className="ic-arrow" aria-label="Previous industries" onClick={(e) => { const t = e.currentTarget.closest(".industries-carousel")?.querySelector(".ic-track") as HTMLElement | null; t?.scrollBy({ left: -340, behavior: "smooth" }); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="ic-dots" aria-hidden>
              <span className="on"></span><span></span><span></span><span></span><span></span>
            </div>
            <button className="ic-arrow" aria-label="Next industries" onClick={(e) => { const t = e.currentTarget.closest(".industries-carousel")?.querySelector(".ic-track") as HTMLElement | null; t?.scrollBy({ left: 340, behavior: "smooth" }); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== PROCESS (mockup 5 — timeline) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} process-timeline`} id="process">
        <div className="container">
          <div className="pt-head reveal">
            <span className="eyebrow line-eyebrow-center">How it works</span>
            <h2 className="h-section" style={{ marginTop: 16, justifyContent: "center" }}>
              A clear process. <em className="hl-em">Real results.</em>
            </h2>
            <p className="ic-sub">
              From first conversation to final launch, we keep things simple,<br />
              transparent, and focused on your goals.
            </p>
          </div>

          <div className="pt-track reveal">
            {[
              { n: "01", h: "Discover", p: "We learn about your business, audience, and goals.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg> },
              { n: "02", h: "Design", p: "We plan the structure and craft a beautiful, intuitive experience.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg> },
              { n: "03", h: "Build", p: "We develop your solution with clean code and reliable functionality.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg> },
              { n: "04", h: "Launch", p: "We launch, test, and support you for long-term success.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0z" /><path d="M12 15l-3-3a16 16 0 0 1 9-9 6 6 0 0 1-9 9z" /><path d="M9 12H4s.5-3 2-4 5 0 5 0" /></svg> },
            ].map((s) => (
              <div className="pt-step" key={s.n}>
                <span className="pt-num">{s.n}</span>
                <span className="pt-icon">{s.icon}</span>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            ))}
            {["1–2 days", "3–5 days", "1–3 weeks"].map((d, i) => (
              <span className="pt-dur" style={{ left: `${25 * (i + 1)}%` }} key={d}>
                <span className="node"></span>
                <span className="lbl">{d}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS (mockup 6 — clay band) ===================== */}
      {/* TODO: replace with verified figures before launch. */}
      <section className="stats-band-v2">
        <span className="sb-motif tl" aria-hidden></span>
        <span className="sb-motif br" aria-hidden></span>
        <div className="container">
          <div className="sb-grid reveal">
            {[
              { to: 200, dec: 0, suffix: "+", label: "Projects delivered", desc: "Successful websites, apps and automation systems launched." },
              { to: 5, dec: 1, suffix: "", label: "Average rating", desc: "Based on client reviews across platforms." },
              { to: 4, dec: 0, suffix: "", label: "Years experience", desc: "Helping businesses grow with smart digital solutions." },
              { to: 98, dec: 0, suffix: "%", label: "Client satisfaction", desc: "Clients who recommend us and come back." },
            ].map((s) => (
              <div className="sb-item" key={s.label}>
                <div className="sb-num" data-to={s.to} data-dec={s.dec} data-suffix={s.suffix}>{`0${s.suffix}`}</div>
                <div className="sb-label">{s.label}</div>
                <span className="sb-rule"></span>
                <p className="sb-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS (mockup 7 — browser-frame cards) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} projects-v2`} id="work">
        <div className="container">
          <div className="pj-head reveal">
            <div>
              <span className="eyebrow line-eyebrow">Our work</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>Recent <em className="hl-em">projects</em></h2>
              <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
                A selection of websites, apps, and digital platforms we&apos;ve crafted for businesses like yours.
              </p>
            </div>
            <a href="/portfolio" className="btn btn-outline pj-viewall">
              View all projects
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <div className="pj-grid reveal">
            {[
              { cls: "pj-luxora", title: "Luxora Interiors", type: "E-commerce Website", url: "luxora.store", shot: "g0", variant: "" },
              { cls: "pj-dar", title: "Dar Essaada Hotel", type: "Hospitality Website", url: "daressaada.com", shot: "g1", variant: "" },
              { cls: "pj-well", title: "Wellcare Clinic", type: "Healthcare Website", url: "wellcare.ma", shot: "g2", variant: "" },
              { cls: "pj-petro", title: "Petrocore Solutions", type: "Corporate Website", url: "petrocore.com", shot: "solid", variant: "solid" },
              { cls: "pj-edu", title: "Eduflow Platform", type: "SaaS Dashboard", url: "eduflow.app", shot: "g3", variant: "" },
            ].map((p) => (
              <a key={p.cls} href="/portfolio" className={`pj-card ${p.cls} ${p.variant}`}>
                <div className="pj-frame">
                  <div className="pj-bar"><i></i><i></i><i></i><span className="pj-url">{p.url}</span></div>
                  <div className={`pj-shot ${p.shot}`}></div>
                </div>
                <div className="pj-meta">
                  <div><h4>{p.title}</h4><span>{p.type}</span></div>
                  <svg className="pj-ext" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== FAQ (mockup 8 — FAQ + WhatsApp card) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} faq-split`} id="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-left reveal">
              <span className="eyebrow line-eyebrow">FAQ</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>Questions, <em className="hl-em">answered</em></h2>
              <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
                Here are some common questions about our process, services, and how we help your business grow.
              </p>
              <div className="faq-list-v2">
                {FAQS.map((f, i) => (
                  <details className="faq-item-v2" key={i}>
                    <summary>
                      <span>{f.q}</span>
                      <span className="faq-plus" aria-hidden></span>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="faq-right reveal">
              <div className="wa-card">
                <span className="wa-card-motif" aria-hidden></span>
                <span className="wa-icon">{WHATSAPP}</span>
                <h3>Still have questions?<br /><em>Chat on WhatsApp</em></h3>
                <span className="wa-rule"></span>
                <p>We&apos;re here to help. Reach out anytime and we&apos;ll get back to you as soon as possible.</p>
                <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                  {WHATSAPP}
                  Chat on WhatsApp
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
              <div className="wa-privacy">
                <span className="wa-lock">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                </span>
                Your information is safe with us. We respect your privacy.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS (mockup 9 — featured + 2) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} testi-v2`} id="testimonials">
        <div className="container">
          <div className="ic-head reveal">
            <span className="eyebrow line-eyebrow-center">Client testimonials</span>
            <h2 className="h-section" style={{ marginTop: 16, justifyContent: "center" }}>
              Businesses that <em className="hl-em">trust us</em>
            </h2>
            <p className="ic-sub">
              We take pride in the relationships we build and the results we deliver.<br />
              Here&apos;s what our clients have to say.
            </p>
          </div>

          <div className="testi-grid reveal">
            {[0, 1, 2].map((off) => {
              const t = TPOOL[(ti + off) % TPOOL.length];
              const featured = off === 1;
              return (
                <div className={featured ? "testi-card featured" : "testi-card"} key={off}>
                  {featured ? <div className="stars">★★★★★</div> : <span className="testi-mark">&ldquo;</span>}
                  <p className="testi-q">
                    {featured && "“"}{t.q}{t.em ? <em className="hl-em">{t.em}</em> : null}{featured && "”"}
                  </p>
                  {!featured && <span className="testi-rule"></span>}
                  <div className="testi-person">
                    <span className="testi-avatar">{t.a}</span>
                    <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
                  </div>
                  <span className="testi-bigquote" aria-hidden>&rdquo;</span>
                </div>
              );
            })}
          </div>

          <div className="testi-controls reveal">
            <button className="ic-arrow" aria-label="Previous reviews" onClick={() => setTi((p) => (p - 1 + TPOOL.length) % TPOOL.length)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="ic-dots testi-dots">
              {TPOOL.map((_, d) => (
                <span key={d} className={d === ti ? "on" : ""} onClick={() => setTi(d)} role="button" aria-label={`Go to review ${d + 1}`}></span>
              ))}
            </div>
            <button className="ic-arrow" aria-label="Next reviews" onClick={() => setTi((p) => (p + 1) % TPOOL.length)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            <a href="/portfolio" className="btn btn-outline" style={{ marginLeft: 8 }}>
              See more reviews
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 4 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== PRICING (mockup 10) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} pricing-v2`} id="pricing">
        <div className="container">
          <div className="ic-head reveal">
            <span className="eyebrow line-eyebrow-center">Pricing</span>
            <h2 className="h-section" style={{ marginTop: 16, justifyContent: "center" }}>
              Clear pricing. <em className="hl-em">No surprises.</em>
            </h2>
            <p className="ic-sub">
              Choose the plan that fits your goals. All plans include expert support<br />
              and a commitment to your success.
            </p>
          </div>

          <div className="pr-grid reveal">
            {[
              { name: "Start", sub: "Perfect for small businesses", price: "990", featured: false,
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 0 5-1 11-2 16z" /><path d="M11 20c0-4 2-8 6-10" /></svg>,
                features: ["Up to 5 Pages Website", "Responsive Design", "Basic SEO Setup", "Contact Form", "1 Month Support"] },
              { name: "Grow", sub: "Ideal for growing businesses", price: "2,900", featured: true,
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0z" /><path d="M12 15l-3-3a16 16 0 0 1 9-9 6 6 0 0 1-9 9z" /><path d="M9 12H4s.5-3 2-4 5 0 5 0" /></svg>,
                features: ["Up to 15 Pages Website", "Advanced SEO", "Speed Optimization", "Blog/News Section", "3 Months Support", "Performance Analytics"] },
              { name: "Scale", sub: "For established businesses", price: "7,900", featured: false,
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l4 3 5-6 5 6 4-3-2 11H5L3 8z" /></svg>,
                features: ["Unlimited Pages", "Advanced SEO & Schema", "Custom Integrations", "Priority Support", "6 Months Support", "Monthly Performance Reports"] },
            ].map((p) => (
              <div className={p.featured ? "pr-card featured" : "pr-card"} key={p.name}>
                {p.featured && (
                  <span className="pr-badge">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" /></svg>
                    Most Popular
                  </span>
                )}
                <div className="pr-top">
                  <span className="pr-icon">{p.icon}</span>
                  <div>
                    <div className="pr-name">{p.name}</div>
                    <div className="pr-sub">{p.sub}</div>
                  </div>
                </div>
                <div className="pr-divider"><span className="dot"></span></div>
                <div className="pr-price">{p.price}<span className="cur">DH</span></div>
                <ul className="pr-feats">
                  {p.features.map((f) => (
                    <li key={f}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} className={`pr-btn${p.featured ? " solid" : ""}`} target="_blank" rel="noopener">
                  Get Started
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 4 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROMISE (mockup — dark card + stamp) ===================== */}
      <section className="promise-v2">
        <div className="container">
          <div className="promise-card reveal">
            <span className="promise-motif tl" aria-hidden></span>
            <span className="promise-motif br" aria-hidden></span>
            <div className="promise-left">
              <span className="eyebrow line-eyebrow">Our promise</span>
              <h2 className="promise-h">No payment<br />until you&apos;re <em className="hl-em">fully satisfied</em></h2>
              <p className="promise-p">We stand behind our work and your success. That&apos;s why you won&apos;t pay a thing until you&apos;re completely happy with the results.</p>
            </div>
            <div className="promise-right">
              <svg className="promise-stamp" viewBox="0 0 200 200" aria-hidden>
                <defs>
                  <path id="psTop" d="M 36 100 A 64 64 0 0 1 164 100" />
                  <path id="psBot" d="M 36 100 A 64 64 0 0 0 164 100" />
                </defs>
                <circle cx="100" cy="100" r="82" fill="none" stroke="#e5501e" strokeWidth="1.5" opacity="0.55" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#e5501e" strokeWidth="1" strokeDasharray="2 5" opacity="0.7" />
                <text fill="#e5501e" fontSize="13"><textPath href="#psTop" startOffset="50%" textAnchor="middle">SATISFACTION</textPath></text>
                <text fill="#e5501e" fontSize="13"><textPath href="#psBot" startOffset="50%" textAnchor="middle">GUARANTEED</textPath></text>
                <text className="ps-num" x="100" y="112" textAnchor="middle" fontSize="34" fontWeight="500" fill="#e5501e">100%</text>
              </svg>
              <a href={WHATSAPP_URL} className="promise-btn" target="_blank" rel="noopener">
                Get a free quote
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <div className="promise-trust">
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /></svg>No risk</span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>Secure</span>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>Hassle-free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ADD-ONS (mockup 11 — list) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} addons-v2`} id="addons">
        <div className="container">
          <div className="ao-head reveal">
            <span className="eyebrow line-eyebrow">Add-ons</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>Make it yours <em className="hl-em">with add-ons</em></h2>
            <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
              Enhance your solution with powerful features and services.<br />Only pay for what you need.
            </p>
          </div>

          <div className="ao-grid reveal">
            {[
              { name: "Additional Page", desc: "Add extra pages to your website.", price: "300 DH/page", tone: "v", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg> },
              { name: "Custom Feature", desc: "Tailored functionality built for your needs.", price: "1,000 DH+", tone: "o", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.3 1a7 7 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a7 7 0 0 0-1.7 1l-2.3-1-2 3.5 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.3-1a7 7 0 0 0 1.7 1l.3 2.5h4l.3-2.5a7 7 0 0 0 1.7-1l2.3 1 2-3.5-2-1.5a7 7 0 0 0 .1-1z" /></svg> },
              { name: "E-commerce Setup", desc: "Full online store setup and configuration.", price: "1,500 DH", tone: "o", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></svg> },
              { name: "Content Writing", desc: "Professional copywriting for your pages.", price: "500 DH/page", tone: "v", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg> },
              { name: "Multi-language", desc: "Add additional languages to your site.", price: "800 DH", tone: "v", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h7M9 3v2c0 4-2 7-6 8" /><path d="M5 9c0 3 3 5 6 6" /><path d="M13 21l4-9 4 9M14.5 18h5" /></svg> },
              { name: "Custom Design", desc: "Premium UI/UX design enhancements.", price: "2,000 DH", tone: "o", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.5" /><path d="M21 16l-5-5L5 20" /></svg> },
              { name: "Speed Optimization", desc: "Improve loading speed and performance.", price: "1,000 DH", tone: "o", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14a8 8 0 1 1 8-8" opacity="0" /><circle cx="12" cy="13" r="8" /><path d="M12 13l4-3" /><path d="M9 3h6" /></svg> },
              { name: "Cloud Backup", desc: "Automatic daily backups and recovery.", price: "800 DH/year", tone: "o", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18a4 4 0 0 1 0-8 6 6 0 0 1 11.5-1.5A4 4 0 0 1 18 18z" /><path d="M12 12v5M9.5 14.5L12 12l2.5 2.5" /></svg> },
              { name: "SSL Certificate", desc: "Secure your website with SSL.", price: "300 DH/year", tone: "v", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg> },
              { name: "Priority Support", desc: "Faster response and priority handling.", price: "1,000 DH/month", tone: "o", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /><path d="M20 19a3 3 0 0 1-3 3h-2" /></svg> },
            ].map((a) => (
              <div className="ao-row" key={a.name}>
                <span className="ao-icon">{a.icon}</span>
                <div className="ao-info">
                  <div className="ao-name">{a.name}</div>
                  <div className="ao-desc">{a.desc}</div>
                </div>
                <span className={`ao-price ${a.tone}`}>{a.price}</span>
              </div>
            ))}
          </div>

          <div className="ao-foot reveal">
            <span className="ao-info-icon">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
            </span>
            <span>Need something specific?</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">
              Let&apos;s talk about your project
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== CTA (mockup — vermilion band) ===================== */}
      <section className="cta-v2">
        <span className="cta-motif tr" aria-hidden></span>
        <span className="cta-motif bl" aria-hidden></span>
        <div className="container">
          <div className="cta-inner reveal">
            <span className="cta-eyebrow">Let&apos;s talk</span>
            <span className="cta-line"><span className="dot"></span></span>
            <h2 className="cta-h">Ready to grow <em className="cta-em">your business?</em></h2>
            <p className="cta-p">
              Let&apos;s build something great together. Tell us about your project<br />
              and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="cta-btns">
              <a href={WHATSAPP_URL} className="cta-btn solid" target="_blank" rel="noopener">
                Get a free quote
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="/portfolio" className="cta-btn outline">
                See our work
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT (mockup 12 — split) ===================== */}
      <section className="contact-split" id="contact">
        <div className="cs-left">
          <span className="cs-motif" aria-hidden></span>
          <div className="cs-inner reveal">
            <span className="eyebrow cs-eyebrow">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" /></svg>
              We&apos;d love to hear from you
            </span>
            <h2 className="cs-h">Let&apos;s start with<br />a quick <em className="hl-em">message</em></h2>
            <span className="cs-rule"></span>
            <p className="cs-p">
              Have a project in mind or just want to say hello?<br />
              We&apos;ll get back to you as soon as possible.
            </p>
            <div className="cs-cards">
              <a className="cs-card wa" href={WHATSAPP_URL} target="_blank" rel="noopener">
                <span className="cs-card-ic">{WHATSAPP}</span>
                <span className="cs-card-tx"><b>Chat on WhatsApp</b><span>Quick responses</span></span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a className="cs-card" href={EMAIL_URL}>
                <span className="cs-card-ic">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                </span>
                <span className="cs-card-tx"><b>Send an Email</b><span>hello@wevtex.com</span></span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
            <div className="cs-hours">
              <span className="cs-hours-head">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                Opening hours
              </span>
              <div className="cs-hour"><span>Monday – Friday</span><span>09:00 – 18:00</span></div>
              <div className="cs-hour"><span>Saturday</span><span>10:00 – 14:00</span></div>
              <div className="cs-hour"><span>Sunday</span><span>Closed</span></div>
              <p className="cs-reply"><span className="dot"></span>We usually reply within a few hours.</p>
            </div>
          </div>
        </div>
        <div className="cs-right">
          <span className="cs-right-motif" aria-hidden></span>
          <ContactForm />
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <SiteFooter />
    </div>
  );
}

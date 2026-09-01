"use client";

import { useTheme } from "../../app/ThemeContext";
/**
 * Wevtex homepage — a lean conversion funnel:
 * Hero → Problem → Services → Work → Proof → Testimonials → Industries → Pricing → FAQ → Contact.
 * Deeper material (process, comparison, add-ons, founder) lives on /services and /about.
 * Primary actions everywhere are WhatsApp and email.
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../../app/wevtex-home.css";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollRevealText } from "./ScrollRevealText";
import { ContactForm } from "./ContactForm";
import { StickyCta } from "./StickyCta";
import { FAQS } from "./homeContent";

/* Contact channels — used by every call to action */
const WHATSAPP_URL = "https://wa.me/212687633774";
const EMAIL_URL = "mailto:hello@wevtex.com";

/* Opens WhatsApp with the audit request already written, so the visitor only taps send. */
const AUDIT_WHATSAPP_URL =
  "https://wa.me/212687633774?text=" +
  encodeURIComponent("Hi Wevtex — I'd like the free 15-minute call audit for my website.");

/* ---------------------------------------------------------------------------
 * Claims about the business — keep these accurate.
 * PRICE_ANCHOR tracks the "Start" tier in the pricing section below.
 * AVAILABILITY must be updated (or emptied) when it stops being true.
 * ------------------------------------------------------------------------- */
const PRICE_ANCHOR = "Projects from 990 MAD";
const AVAILABILITY = "2 project slots left this month";
const GUARANTEE = "No payment until you're fully satisfied";

/* Client logo wall. Drop real logos over these files — no code change needed. */
const CLIENT_LOGOS = [
  { name: "Luxora Interiors", src: "/images/clients/client-01.png" },
  { name: "Dar Essaada", src: "/images/clients/client-02.png" },
  { name: "Wellcare Clinic", src: "/images/clients/client-03.png" },
  { name: "Petrocore", src: "/images/clients/client-04.png" },
  { name: "Eduflow", src: "/images/clients/client-05.png" },
  { name: "Atlas Logistics", src: "/images/clients/client-06.png" },
];

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

/* The eight service cards in the home bento grid.
   `href` points at a /services/[slug] detail page where one exists; the newer
   offers link to the contact section until their detail pages are written. */
const SERVICE_CARDS = [
  {
    name: "Website Creation",
    desc: "Showcase sites, online stores and interactive portals — modern, ultra-fast and built for SEO.",
    href: "/services/web-development",
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M2 9h20M8 21h8M12 17v4" /></svg>,
  },
  {
    name: "Search Engine Optimization",
    desc: "Technical optimization, keyword strategy and link building that bring in organic traffic month after month.",
    href: "/#contact",
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.6-3.6" /><path d="M8 12.5l2.2-2.4 1.9 1.7 2.4-2.8" /></svg>,
  },
  {
    name: "Google Maps & Local SEO",
    desc: "Win the searches happening around you, with an optimized Google Business profile and a strong Maps ranking.",
    href: "/#contact",
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>,
  },
  {
    name: "Ads Creation & Management",
    desc: "Targeted Google Ads, Facebook and Instagram campaigns built for an immediate, measurable return.",
    href: "/#contact",
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" /><path d="M16 9.2a4 4 0 0 1 0 5.6" /><path d="M18.8 6.4a8 8 0 0 1 0 11.2" /></svg>,
  },
  {
    name: "Mobile Apps",
    desc: "Native and cross-platform iOS and Android apps, smooth and fast, built with Flutter.",
    href: "/#contact",
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10.5 18.5h3" /></svg>,
  },
  {
    name: "Desktop Apps",
    desc: "Custom Windows and macOS software that simplifies your internal operations and your data.",
    href: "/#contact",
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>,
  },
  {
    name: "Custom Digital Solutions",
    desc: "Bespoke business tools, SaaS portals, extranets and API architectures shaped around your company.",
    href: "/services/business-apps",
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="2.5" /><path d="M9.5 3v4M14.5 3v4M9.5 17v4M14.5 17v4M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4" /></svg>,
  },
  {
    name: "Automated WhatsApp Bots",
    desc: "Smart bots that answer instantly, qualify your leads and keep support running 24/7.",
    href: "/services/ai-chatbots",
    icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 11.5a8 8 0 0 1-11.9 7L4 20l1.6-4.4A8 8 0 1 1 20.5 11.5z" /><path d="M9.5 11.5v.8M14.5 11.5v.8" /><path d="M9.8 15c1.4 1 3 1 4.4 0" /></svg>,
  },
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
                <span className="pulse"></span>{AVAILABILITY}
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
              {/* Price anchor + risk reversal: both answer the two questions every
                  visitor has before they will consider getting in touch. */}
              <ul className="hero-reassure">
                <li>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                  {PRICE_ANCHOR}
                </li>
                <li>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                  {GUARANTEE}
                </li>
              </ul>
            </div>

            <div className="hero-visual">
              <Image
                src="/images/feature/slider section.png"
                alt="An online store shown on a laptop and phone, with traffic and sales growth"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 960px) 92vw, 46vw"
                className="hero-shot"
              />
            </div>
          </div>

          {/* Trust bar: proof of other clients, kept in the hero so it lands above the fold. */}
          <div className="hero-logos reveal">
            <p className="ls-lead">Trusted by teams across Morocco and beyond</p>
            <ul className="ls-row">
              {CLIENT_LOGOS.map((c) => (
                <li key={c.name}>
                  <Image src={c.src} alt={c.name} width={160} height={40} sizes="160px" />
                </li>
              ))}
            </ul>
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
            {SERVICE_CARDS.map((b) => (
              <a key={b.name} href={b.href} className="bento-card">
                <span className="bento-motif" aria-hidden></span>
                <span className="bento-icon">{b.icon}</span>
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

      {/* ===================== PROJECTS (mockup 7 — browser-frame cards) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} projects-v2`} id="work">
        <div className="container">
          <div className="pj-head reveal">
            <div>
              <span className="eyebrow line-eyebrow">Our work</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>Recent <em className="hl-em">projects</em></h2>
              <p className="ic-sub" style={{ marginTop: 14, textAlign: "left", maxWidth: "46ch" }}>
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

      {/* CTA beside the proof — the reference puts one right after the evidence. */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} inline-cta`}>
        <div className="container">
          <div className="ict-inner reveal">
            <p className="ict-text">Want results like these for your business?</p>
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              Get a free quote
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
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
                <figure className={featured ? "testi-card featured" : "testi-card"} key={off}>
                  <div className="testi-stars" aria-label="Rated 5 out of 5">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <svg key={n} viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
                        <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="testi-q">
                    &ldquo;{t.q}{t.em ? <em className="hl-em">{t.em}</em> : null}&rdquo;
                  </blockquote>
                  <figcaption className="testi-foot">
                    <span className="testi-rule"></span>
                    <div className="testi-person">
                      <span className="testi-avatar">{t.a}</span>
                      <div>
                        <div className="testi-name">{t.name}</div>
                        <div className="testi-role">{t.role}</div>
                      </div>
                    </div>
                  </figcaption>
                  <span className="testi-bigquote" aria-hidden>&rdquo;</span>
                </figure>
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
          </div>

          <div className="testi-cta reveal">
            <a href="/portfolio" className="btn btn-outline">
              See more reviews
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 4 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
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

      {/* ===================== PRICING (mockup 10) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-paper"} pricing-v2`} id="pricing">
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
              { name: "Start", sub: "Perfect for small businesses", price: "990", note: "One-time · delivered in 7 days", featured: false,
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 4.4L18.2 9.2 13.8 11 12 15.4 10.2 11 5.8 9.2 10.2 7.4 12 3z" /><path d="M18.4 15.2l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7z" /></svg>,
                features: ["Up to 5 Pages Website", "Responsive Design", "Basic SEO Setup", "Contact Form", "1 Month Support"] },
              { name: "Grow", sub: "Ideal for growing businesses", price: "2,900", note: "One-time · delivered in 14 days", featured: true,
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0z" /><path d="M12 15l-3-3a16 16 0 0 1 9-9 6 6 0 0 1-9 9z" /><path d="M9 12H4s.5-3 2-4 5 0 5 0" /></svg>,
                features: ["Up to 15 Pages Website", "Advanced SEO", "Speed Optimization", "Blog/News Section", "3 Months Support", "Performance Analytics"] },
              { name: "Scale", sub: "For established businesses", price: "7,900", note: "One-time · custom timeline", featured: false,
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
                <div className="pr-note">{p.note}</div>
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

          <div className="pr-foot reveal">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>No hidden fees</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>Pay only when you&apos;re satisfied</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>Need something custom? Ask us</span>
          </div>

          {/* Add-ons live on /services — the detail belongs after the visitor has picked a plan. */}
          <div className="pr-addons-link reveal">
            <a href="/services#addons">
              See every add-on and its price
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FAQ (mockup 8 — FAQ + WhatsApp card) ===================== */}
      <section className={`${isDark ? "theme-dark" : "theme-paper"} faq-split`} id="faq">
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
                      <span className="faq-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                      <span className="faq-q">{f.q}</span>
                      <span className="faq-plus" aria-hidden></span>
                    </summary>
                    <div className="faq-body">
                      <p>{f.a}</p>
                    </div>
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

      {/* ===================== CONTACT (single column) ===================== */}
      <section className="contact-one" id="contact">
        <div className="container">
          <div className="co-head reveal">
            <span className="eyebrow line-eyebrow-center">Contact</span>
            <h2 className="h-section" style={{ marginTop: 16, justifyContent: "center" }}>
              Let&apos;s start with <em className="hl-em">a quick message</em>
            </h2>
            <p className="co-sub">
              Tell us what you need. You get a clear plan and a fixed price back &mdash; usually within a few hours.
            </p>
          </div>

          <div className="co-channels reveal">
            <a className="co-chan primary" href={WHATSAPP_URL} target="_blank" rel="noopener">
              <span className="co-chan-ic">{WHATSAPP}</span>
              <span className="co-chan-tx"><b>Chat on WhatsApp</b><small>Fastest way to reach us</small></span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="co-chan" href={EMAIL_URL}>
              <span className="co-chan-ic">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              </span>
              <span className="co-chan-tx"><b>Send an email</b><small>hello@wevtex.com</small></span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <div className="co-or reveal"><span>or send a quick brief</span></div>

          <div className="co-form reveal">
            <ContactForm />
          </div>

          <ul className="co-trust reveal">
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>Free quote</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>No obligation</li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>Reply within a few hours</li>
          </ul>
          <p className="co-hours reveal">Mon &ndash; Fri 09:00&ndash;18:00 &middot; Sat 10:00&ndash;14:00 &middot; Sun closed</p>

          {/* Low-commitment fallback for visitors who scrolled past the form without sending it. */}
          <div className="co-audit reveal">
            <div className="co-audit-tx">
              <b>Not ready for a quote?</b>
              <span>
                Take the free 15-minute call audit. We look at your site with you and tell you
                what we would fix first &mdash; no slides, no pitch, no commitment.
              </span>
            </div>
            <a href={AUDIT_WHATSAPP_URL} className="btn btn-outline" target="_blank" rel="noopener">
              Book the free audit
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <SiteFooter />

      {/* Mobile-only: keeps the ask reachable through the whole scroll. */}
      <StickyCta whatsappUrl={WHATSAPP_URL} />
    </div>
  );
}

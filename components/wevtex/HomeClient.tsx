"use client";

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
import { FAQS, SERVICES } from "./homeContent";
import { ServicesBento, SERVICE_ICONS } from "./SharedSections";
/* Contact channels — one definition for the whole site, see lib/site-links.ts */
import { WHATSAPP_URL, EMAIL_URL, AUDIT_WHATSAPP_URL, serviceWhatsAppUrl, GOOGLE_REVIEWS_URL, PORTFOLIO_URL, industryPath } from "@/lib/site-links";

/* ---------------------------------------------------------------------------
 * Claims about the business — keep these accurate.
 * PRICE_ANCHOR tracks the "Start" tier in the pricing section below.
 * AVAILABILITY must be updated (or emptied) when it stops being true.
 * ------------------------------------------------------------------------- */
const PRICE_ANCHOR = "Projets à partir de 990 DH";
const AVAILABILITY = "2 places disponibles ce mois-ci";
const GUARANTEE = "Vous ne payez qu'une fois satisfait";

/* Client logo wall. Each file is pre-normalised onto the same 400x170
   transparent canvas, sized by optical weight rather than raw height — a
   square mark is drawn larger than a wide wordmark so the two carry equal
   presence in the row. Originals live in assets/clients-src. */
const CLIENT_LOGOS = [
  { name: "CMPF", src: "/images/clients/wall/cmpf.png" },
  { name: "M2 Maroc", src: "/images/clients/wall/m2-maroc.png" },
  { name: "Meowy", src: "/images/clients/wall/meowy.png" },
  { name: "Raiide Media", src: "/images/clients/wall/raiide-media.png" },
  { name: "RedMed", src: "/images/clients/wall/redmed.png" },
  { name: "Tripway", src: "/images/clients/wall/tripway.png" },
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
  "/images/industries/ecommerce-retail.webp",          // 0 E-Commerce & Retail
  "/images/industries/tourism-hospitality.webp",             // 1 Tourism & Hospitality
  "/images/industries/professional-services.webp",      // 2 Professional Services
  "/images/industries/healthcare-wellness.webp",        // 3 Healthcare & Wellness
  "/images/industries/industry-logistics.webp",          // 4 Industry & Logistics
  "/images/industries/education-elearning.webp",           // 5 Education & E-Learning
  "/images/industries/creative-media-tech.webp",          // 6 Creative, Media & Tech
  "/images/industries/public-sector-ngos.webp",     // 7 Public Sector & NGOs
];

/* Service cards */
const INDUSTRIES = [
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l1-4h16l1 4"></path><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"></path><path d="M9 21V13h6v8"></path></svg>,
    head: "E-commerce & commerce de détail",
    body: "Mode, beauté, décoration et alimentaire. Panier, paiement sécurisé et gestion des stocks, tout est prévu."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 012 2v10"></path><path d="M2 17h20"></path><path d="M6 8v3"></path></svg>,
    head: "Tourisme & hôtellerie",
    body: "Hôtels, riads et agences de voyage. Moteur de réservation en direct, calendrier de disponibilités et visites virtuelles."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path></svg>,
    head: "Services professionnels",
    body: "Cabinets d'avocats, comptabilité, immobilier et conseil. Des sites qui inspirent confiance, captent des contacts et gèrent la prise de rendez-vous."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"></path></svg>,
    head: "Santé & bien-être",
    body: "Cliniques, salles de sport et thérapeutes. Formulaires patients sécurisés, réservation de séances et annuaire des prestations."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z"></path></svg>,
    head: "Industrie & logistique",
    body: "BTP, production et transport. Mettez en avant votre flotte et vos réalisations, et recevez des demandes de devis B2B."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
    head: "Éducation & e-learning",
    body: "Écoles, cours en ligne et centres de formation. Espace élève intégré, hébergement vidéo et modules de certification."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
    head: "Création, médias & tech",
    body: "Startups SaaS, agences marketing et artisans. Des pages d'atterrissage rapides et animées qui convertissent vos premiers clients."
  },
  {
    icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    head: "Secteur public & associations",
    body: "Associations, fondations et institutions publiques. Design accessible, collecte de dons et animation de communauté."
  }
];

/* WORK — one accordion, one project open at a time.
   Every entry carries its own detail panel, so the list stays a tight index
   at rest and becomes an editorial row on demand. Order matters: index 0 is
   open on load, so lead with the strongest piece.

   Placeholder content shown for layout only.
   TODO before launch: real client names, real URLs, real screenshots at
   /images/work/<slug>.jpg (tall full-page captures — the hover scrolls them),
   and metrics that have actually been measured. Do not ship the numbers below. */
const WORK = [
  {
    slug: "luxora",
    title: "Exemple — Luxora Interiors",
    cat: "E-commerce",
    year: "2026",
    url: "luxora.store",
    outcome: "Refonte axée vitesse : recherche instantanée sur 4 000 références et un tunnel de commande qui ne perd plus personne à l'étape livraison.",
    stack: ["Next.js", "Shopify", "Algolia"],
    metric: "+38%",
    metricLabel: "de revenu par visite",
    shot: "g0",
  },
  {
    slug: "daressaada",
    title: "Exemple — Hôtel Dar Essaada",
    cat: "Hôtellerie",
    year: "2026",
    url: "daressaada.com",
    outcome: "Un moteur de réservation en direct moins cher que les plateformes, avec disponibilités en temps réel et un calendrier de tarifs que la réception modifie elle-même.",
    stack: ["Next.js", "Strapi", "Stripe"],
    metric: "2.4x",
    metricLabel: "de réservations directes",
    shot: "g1",
  },
  {
    slug: "eduflow",
    title: "Exemple — Plateforme Eduflow",
    cat: "SaaS",
    year: "2025",
    url: "eduflow.app",
    outcome: "Une plateforme de formation multi-établissements : espaces élèves, diffusion vidéo et certification, le tout dans un seul tableau de bord.",
    stack: ["Next.js", "Postgres", "Mux"],
    metric: "12k",
    metricLabel: "élèves actifs",
    shot: "g3",
  },
  {
    slug: "wellcare",
    title: "Exemple — Clinique Wellcare",
    cat: "Santé",
    year: "2025",
    url: "wellcare.ma",
    outcome: "Un formulaire patient utilisable depuis un téléphone en salle d'attente, relié directement à l'agenda du cabinet.",
    stack: ["Next.js", "Strapi", "Twilio"],
    metric: "-62%",
    metricLabel: "de rendez-vous manqués",
    shot: "g0",
  },
  {
    slug: "petrocore",
    title: "Exemple — Petrocore Solutions",
    cat: "Entreprise",
    year: "2025",
    url: "petrocore.com",
    outcome: "Un site B2B pensé pour la demande de devis : fiches techniques, références de chantiers et un formulaire que les commerciaux lisent vraiment.",
    stack: ["Next.js", "Strapi", "Vercel"],
    metric: "3.1x",
    metricLabel: "de demandes qualifiées",
    shot: "g1",
  },
  {
    slug: "northbound",
    title: "Exemple — Northbound",
    cat: "SEO & croissance",
    year: "2024",
    url: "northbound.co",
    outcome: "Refonte technique et arborescence de contenu qui a enfin permis aux pages catégories de se positionner sur leurs mots-clés commerciaux.",
    stack: ["Astro", "GA4", "Search Console"],
    metric: "+240%",
    metricLabel: "de visites organiques",
    shot: "g3",
  },
];

/* Sample testimonials — placeholder content shown for layout only.
   TODO: replace with real, attributed client reviews (name, company, photo) before launch. */
const TESTIMONIALS = [
  { featured: true, q: "Wevtex a refait notre site et les appels ont commencé à arriver. Il charge vite, il a de l'allure, et nos clients nous trouvent enfin sur Google. Chaque dirham est justifié.", a: "S", n: "Client exemple", r: "Fondateur · Studio exemple" },
  { q: "Ils ont tout expliqué simplement, tenu les délais, et le prix n'a jamais bougé. Le projet le plus simple qu'on ait mené.", a: "G", n: "Client exemple", r: "Gérant · Trading exemple" },
  { q: "Notre boutique en ligne était prête en trois semaines et nous avons pris notre première commande le jour même. Le support répond vite à chaque fois.", a: "N", n: "Client exemple", r: "Propriétaire · Exemple & Cie" },
  { q: "Nous sommes passés d'invisibles à la première page sur nos mots-clés principaux. Le travail SEO s'est rentabilisé en deux mois.", a: "T", n: "Client exemple", r: "Directeur · Growth exemple" },
  { q: "Une vraie équipe, qui décroche le téléphone. Ils gèrent notre hébergement, on n'y pense plus : le site tourne, tout simplement.", a: "A", n: "Client exemple", r: "Responsable · Société exemple" },
  { q: "Professionnels du premier appel jusqu'à la mise en ligne. Le nouveau site a l'air bien plus cher que ce que nous avons payé.", a: "D", n: "Client exemple", r: "Fondateur · Desktop exemple" },
];

const TPOOL = [
  { q: "Le nouveau site est non seulement très beau, il nous apporte nettement plus de demandes. L'équipe est réactive, professionnelle et agréable.", name: "James Carter", role: "Directeur, Luxora Interiors", a: "J" },
  { q: "Dès le premier jour, ils ont compris nos objectifs et sont allés au-delà. Nos ventes en ligne ont ", em: "doublé.", name: "Sarah Mitchell", role: "Directrice générale, Petrocore Solutions", a: "S" },
  { q: "Leur solution d'automatisation nous fait gagner plus de 20 heures par semaine. Tout fonctionne sans accroc et le support est excellent.", name: "Daniel Rahman", role: "Responsable d'exploitation, Clinique Wellcare", a: "D" },
  { q: "They explained everything in plain language, kept to the timeline, and the price never moved. Easiest project we've run.", name: "Gareth Morris", role: "Gérant, Atlas Trading", a: "G" },
  { q: "Notre boutique était en ligne en trois semaines et nous avons pris notre première commande le jour même. Le support répond toujours vite.", name: "Naomi Reyes", role: "Propriétaire, Marlow & Co.", a: "N" },
  { q: "We went from invisible to page one for our main keywords. The SEO work paid for itself within a couple of months.", name: "Theo Lindahl", role: "Directeur, Northbound", a: "T" },
];

export function HomeClient() {
  const [ti, setTi] = useState(0);
  /* Work accordion — a single open index, so opening one closes the rest.
     Index 0 is open on load: a wall of closed rows reads as an empty section. */
  const [openWork, setOpenWork] = useState(0);

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
    root.querySelectorAll(".reveal, .reveal-words, .srt-scroll").forEach((r) => io.observe(r));
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
    <div className="wevtex mode-light" ref={rootRef}>
      {/* ===================== HEADER ===================== */}
      <SiteHeader />

      {/* ===================== HERO (mockup 1 — split) ===================== */}
      <section className="theme-cream hero hero-split" id="hero">
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
                em={["clients"]}
                emClassName="hl-em"
                text={"Des sites et applis qui\ntransforment vos visiteurs\nen clients."}
              />
              <p className="hero-sub">
                De la première idée à la mise en ligne en quelques semaines : sites sur mesure,
                boutiques en ligne et automatisation, conçus pour vous amener plus de clients.
              </p>
              <div className="hero-ctas">
                <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
                  Demander un devis gratuit
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 2 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a href={PORTFOLIO_URL} className="btn btn-outline">
                  Voir nos réalisations
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
                src="/images/feature/hero-shot.webp"
                alt="Une boutique en ligne affichée sur un ordinateur portable et un téléphone, avec la croissance du trafic et des ventes"
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
            <p className="ls-lead">Ils nous font confiance, au Maroc et ailleurs</p>
            <ul className="ls-row">
              {CLIENT_LOGOS.map((c) => (
                <li key={c.name}>
                  <Image src={c.src} alt={c.name} width={400} height={170} sizes="136px" />
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
              La plupart des sites d&apos;entreprise<br />
              n&apos;<em className="hl-em hl-underline">apportent aucun</em> client
            </h2>
            <p className="problem-sub">
              Ils sont jolis, mais lents, confus et impossibles à mettre à jour.<br />
              Nous créons des sites et des applications qui fonctionnent vraiment —<br />
              pour plus de contacts, plus de ventes et plus de temps pour vous.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES (mockup 3 — bento) =====================
          Shared with /services so both surfaces read the same SERVICES list —
          a service added or re-linked in homeContent.ts moves on every page. */}
      <ServicesBento
        heading={<>Tout ce qu&apos;il faut pour<br /><em className="hl-line">développer</em> &amp; <em className="hl-line">automatiser</em></>}
        intro="Du site performant à l'automatisation intelligente, nous créons des solutions digitales qui font grandir votre activité et vous simplifient le quotidien."
      />

      {/* ===================== WORK =====================
          The rest of the page is white, ink and one sliver of lime so that
          the screenshots here are the only rich colour on it. The section's
          job is to frame them and get out of the way.

          One accordion, one project open at a time. Clicking a row expands
          it in place rather than navigating away — the visitor never loses
          the page, and the list stays a tight index between openings. */}
      <section className="work" id="work">
        <div className="container">

          {/* Same head components as every other section — eyebrow, h-section,
              ic-sub. The section reads quiet because of the space around it,
              not because the heading was removed. */}
          <div className="wk-head reveal">
            <span className="eyebrow line-eyebrow">Nos réalisations</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Projets <em className="hl-line">récents</em>
            </h2>
            <p className="ic-sub wk-lede">
              Quelques projets livrés. Ouvrez-en un pour voir le détail.
            </p>
          </div>

          <ol className="wk-list reveal">
            {WORK.map((p, i) => {
              const open = openWork === i;
              return (
                <li key={p.slug} className={open ? "wk-item is-open" : "wk-item"}>
                  <h3 className="wk-row-h">
                    <button
                      type="button"
                      className="wk-row"
                      aria-expanded={open}
                      aria-controls={`wk-panel-${p.slug}`}
                      id={`wk-row-${p.slug}`}
                      /* Clicking the open row closes it, so the section can rest fully collapsed. */
                      onClick={() => setOpenWork(open ? -1 : i)}
                    >
                      <span className="wk-ix-n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="wk-ix-title">{p.title}</span>
                      <span className="wk-ix-cat">{p.cat}</span>
                      <span className="wk-ix-year">{p.year}</span>
                      <span className="wk-toggle" aria-hidden>
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14" /><path className="wk-toggle-v" d="M12 5v14" /></svg>
                      </span>
                    </button>
                  </h3>

                  {/* grid-template-rows 0fr → 1fr collapses to the panel's real
                      height, so no max-height guess to get wrong. */}
                  <div
                    className="wk-panel"
                    id={`wk-panel-${p.slug}`}
                    role="region"
                    aria-labelledby={`wk-row-${p.slug}`}
                    hidden={!open}
                  >
                    <div className="wk-panel-in">
                      <div className="wk-panel-grid">
                        <div className="wk-frame">
                          <div className="wk-bar">
                            <i></i><i></i><i></i>
                            <span className="wk-url">{p.url}</span>
                          </div>
                          {/* Swap in a tall full-page capture and the hover scrolls it:
                              style={{ backgroundImage: "url(/images/work/slug.jpg)" }} */}
                          <div className={`wk-shot ${p.shot}`}></div>
                        </div>

                        <div className="wk-body">
                          <p className="wk-outcome">{p.outcome}</p>

                          <ul className="wk-stack">
                            {p.stack.map((t) => <li key={t}>{t}</li>)}
                          </ul>

                          <div className="wk-metric">
                            <span className="wk-metric-n">{p.metric}</span>
                            <span className="wk-metric-l">{p.metricLabel}</span>
                          </div>

                          <a href={PORTFOLIO_URL} className="wk-view">
                            Voir nos réalisations
                            <span className="wk-view-arrow" aria-hidden>
                              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="wk-all reveal">
            <a href={PORTFOLIO_URL} className="btn btn-outline">
              Voir tous les projets
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
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
              { to: 200, dec: 0, suffix: "+", label: "Projets livrés", desc: "Sites, applications et systèmes d'automatisation mis en ligne." },
              { to: 5, dec: 1, suffix: "", label: "Note moyenne", desc: "D'après les avis clients laissés sur les différentes plateformes." },
              { to: 4, dec: 0, suffix: "", label: "Ans d'expérience", desc: "À faire grandir des entreprises avec des solutions digitales." },
              { to: 98, dec: 0, suffix: "%", label: "Clients satisfaits", desc: "Des clients qui nous recommandent et qui reviennent." },
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
      <section className="theme-cream inline-cta">
        <div className="container">
          <div className="ict-inner reveal">
            <p className="ict-text">Vous voulez ce type de résultats pour votre entreprise ?</p>
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              Demander un devis gratuit
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS (mockup 9 — featured + 2) ===================== */}
      <section className="theme-cream testi-v2" id="testimonials">
        <div className="container">
          <div className="ic-head ic-head-left reveal">
            <span className="eyebrow line-eyebrow">Avis clients</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Des entreprises qui nous <em className="hl-line">font confiance</em>
            </h2>
            <p className="ic-sub">
              Nous sommes fiers des relations que nous construisons et des résultats que nous livrons.
            </p>
          </div>

          {/* Three equal columns, hairline-separated. The old layout made the
              middle one a dark card and the outer two plain, so nothing lined
              up and short quotes left a void under them. Uniform treatment
              fixes both: a quote is content, not an object. */}
          <div className="testi-grid reveal">
            {[0, 1, 2].map((off) => {
              const t = TPOOL[(ti + off) % TPOOL.length];
              return (
                <figure className="testi-col" key={off}>
                  <div className="testi-stars" aria-label="Noté 5 sur 5">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <svg key={n} viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
                        <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="testi-q">
                    &ldquo;{t.q}{t.em ? <em className="hl-line">{t.em}</em> : null}&rdquo;
                  </blockquote>
                  <figcaption className="testi-person">
                    <span className="testi-avatar">{t.a}</span>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="testi-controls reveal">
            <button className="ic-arrow" aria-label="Avis précédents" onClick={() => setTi((p) => (p - 1 + TPOOL.length) % TPOOL.length)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="ic-dots testi-dots">
              {TPOOL.map((_, d) => (
                <span key={d} className={d === ti ? "on" : ""} onClick={() => setTi(d)} role="button" aria-label={`Go to review ${d + 1}`}></span>
              ))}
            </div>
            <button className="ic-arrow" aria-label="Avis suivants" onClick={() => setTi((p) => (p + 1) % TPOOL.length)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>

          <div className="testi-cta reveal">
            <a href={GOOGLE_REVIEWS_URL} className="btn btn-outline" target="_blank" rel="noopener nofollow">
              Voir tous nos avis Google
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 4 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES (mockup 4 — carousel) ===================== */}
      <section className="theme-paper industries-carousel" id="industries">
        <div className="container">
          <div className="ic-head reveal">
            <span className="eyebrow line-eyebrow-center">Les secteurs que nous servons</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Pensé pour <em className="hl-em">votre secteur</em>
            </h2>
            <p className="ic-sub">
              Chaque secteur a ses propres contraintes.<br />
              Nos solutions sont adaptées à votre réalité pour vous faire grandir.
            </p>
          </div>

          <div className="ic-track reveal">
            {[
              { i: 0, label: "Commerce", desc: "Des solutions qui font venir en boutique et augmentent les ventes en ligne." },
              { i: 1, label: "Hôtellerie", desc: "Des expériences digitales soignées qui séduisent vos clients." },
              { i: 3, label: "Santé", desc: "Des systèmes sécurisés et conformes, au service de vos patients." },
              { i: 5, label: "Éducation", desc: "Des outils numériques qui aident élèves et enseignants." },
              { i: 4, label: "Logistique", desc: "Des opérations fluidifiées pour que tout continue d'avancer." },
              { i: 2, label: "Services professionnels", desc: "Des sites qui inspirent confiance et captent des contacts qualifiés." },
              { i: 6, label: "Création & tech", desc: "Des sites performants pour les startups et les créateurs." },
              { i: 7, label: "Public & associations", desc: "Des sites accessibles qui informent et donnent envie d'agir." },
            ].map((it, idx) => (
              <a key={it.i} href={industryPath(INDUSTRY_LINKS[it.i])} className={`ic-card g${idx % 5}`}>
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
            <button className="ic-arrow" aria-label="Secteurs précédents" onClick={(e) => { const t = e.currentTarget.closest(".industries-carousel")?.querySelector(".ic-track") as HTMLElement | null; t?.scrollBy({ left: -340, behavior: "smooth" }); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="ic-dots" aria-hidden>
              <span className="on"></span><span></span><span></span><span></span><span></span>
            </div>
            <button className="ic-arrow" aria-label="Secteurs suivants" onClick={(e) => { const t = e.currentTarget.closest(".industries-carousel")?.querySelector(".ic-track") as HTMLElement | null; t?.scrollBy({ left: 340, behavior: "smooth" }); }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ===================== PRICING (mockup 10) ===================== */}
      <section className="pricing-v2 pricing-ink" id="pricing">
        <div className="container">
          <div className="ic-head reveal">
            <span className="eyebrow line-eyebrow-center">Tarifs</span>
            <h2 className="h-section" style={{ marginTop: 16, justifyContent: "center" }}>
              Des prix clairs. <em className="hl-em">Aucune surprise.</em>
            </h2>
            <p className="ic-sub">
              Un prix de départ pour chacun de nos services. Dites-nous ce qu&apos;il vous faut<br />
              et nous vous envoyons un devis ferme pour votre projet.
            </p>
          </div>

          {/* One card per service — the price is the entry point for that service,
              not a bundle, so a visitor sees what their own job costs. */}
          <div className="pr-grid pr-grid-8 reveal">
            {SERVICES.map((sv) => (
              <div className={sv.featured ? "pr-card featured" : "pr-card"} key={sv.slug}>
                {sv.featured && (
                  <span className="pr-badge">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 17.3 5.8 20.8l1.6-6.7L2.2 8.9l6.9-.6z" /></svg>
                    Le plus demandé
                  </span>
                )}
                <div className="pr-top">
                  <span className="pr-icon">{SERVICE_ICONS[sv.slug]}</span>
                  <div>
                    <div className="pr-name">{sv.name}</div>
                    <div className="pr-sub">{sv.short}</div>
                  </div>
                </div>
                <div className="pr-divider"></div>
                <span className="pr-from">À partir de</span>
                <div className="pr-price">{sv.price}<span className="cur">DH</span></div>
                <div className="pr-note">{sv.note}</div>
                <ul className="pr-feats">
                  {sv.features.map((f) => (
                    <li key={f}>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={serviceWhatsAppUrl(sv.name)} className={`pr-btn${sv.featured ? " solid" : ""}`} target="_blank" rel="noopener">
                  {sv.cta}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ marginLeft: 4 }}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
            ))}
          </div>

          <div className="pr-foot reveal">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>Aucun frais caché</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>Vous ne payez qu&apos;une fois satisfait</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>Besoin de sur-mesure ? Écrivez-nous</span>
          </div>

        </div>
      </section>

      {/* ===================== FAQ (mockup 8 — FAQ + WhatsApp card) ===================== */}
      <section className="theme-paper faq-split" id="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-left reveal">
              <span className="eyebrow line-eyebrow">FAQ</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>Vos questions, <em className="hl-line">nos réponses</em></h2>
              <p className="ic-sub" style={{ marginTop: 14, textAlign: "left" }}>
                Les questions qu&apos;on nous pose le plus souvent sur notre méthode, nos services et notre façon de travailler.
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
                <h3>Une autre question ?<br /><em>Écrivez-nous sur WhatsApp</em></h3>
                <span className="wa-rule"></span>
                <p>Nous sommes là pour vous aider. Écrivez-nous quand vous voulez, nous répondons au plus vite.</p>
                <a href={WHATSAPP_URL} className="wa-btn" target="_blank" rel="noopener">
                  {WHATSAPP}
                  Discuter sur WhatsApp
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
              <div className="wa-privacy">
                <span className="wa-lock">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                </span>
                Vos informations restent confidentielles. Nous respectons votre vie privée.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT =====================
          Ink ground with one white slab, the same pairing used at pricing —
          the two points on the page where a visitor decides something.
          Deliberately spare: one line of copy, two channels, the form.
          The steps, trust row and card header were cut — the page has
          already made the argument by the time anyone scrolls here. */}
      <section className="contact-split" id="contact">
        <span className="cs-motif" aria-hidden></span>
        <div className="container">
          <div className="cs-grid">

            <div className="cs-left reveal">
              <span className="eyebrow line-eyebrow">Contact</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>
                Dites-nous ce que vous<br />construisez. <em className="hl-em">On le chiffre.</em>
              </h2>
              <p className="cs-sub">
                Envoyez votre brief, recevez un plan et un prix ferme le jour même.
              </p>

              <div className="cs-channels">
                <a className="cs-chan" href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <span className="cs-chan-ic">{WHATSAPP}</span>
                  <span className="cs-chan-tx"><b>WhatsApp</b></span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="cs-chan" href={EMAIL_URL}>
                  <span className="cs-chan-ic">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                  </span>
                  <span className="cs-chan-tx"><b>hello@wevtex.com</b></span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>

              <p className="cs-hours">
                <span className="cs-dot" aria-hidden></span>
                Lun &ndash; Ven 09h00&ndash;18h00 &middot; Sam 10h00&ndash;14h00
              </p>
            </div>

            <div className="cs-right reveal">
              <div className="cs-form-card">
                <ContactForm />
              </div>
              <p className="cs-audit">
                <a href={AUDIT_WHATSAPP_URL} target="_blank" rel="noopener">
                  Audit téléphonique gratuit de 15 min
                </a>{" "}
                si vous n&apos;êtes pas encore prêt pour un devis.
              </p>
            </div>

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

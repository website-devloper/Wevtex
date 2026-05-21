"use client";

/**
 * Wevtex homepage — implementation of the Claude Design handoff
 * (.design-wevtex/project/index.html). Markup ported to JSX, the prototype's
 * inline <script> ported to the effect below, styling lives in the scoped
 * ./wevtex-home.css (every rule prefixed with `.wevtex`).
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./wevtex-home.css";
import { SiteHeader } from "../components/wevtex/SiteHeader";
import { SiteFooter } from "../components/wevtex/SiteFooter";
import { ScrollRevealText } from "../components/wevtex/ScrollRevealText";
import { WaveBackground } from "../components/wevtex/WaveBackground";
import { HeroReviews } from "../components/wevtex/HeroReviews";

const ARROW = (
  <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 9L9 3M9 3H4M9 3V8" />
  </svg>
);

const IND1 = [
  "E-Commerce", "Hotels", "Real Estate", "SaaS", "Booking", "Restaurants",
  "Logistics", "Fintech", "Healthcare", "Education", "Insurance",
  "Manufacturing", "Construction", "Legal", "Consulting", "Media",
];
const IND2 = [
  "Crypto", "Travel", "Beauty", "Fitness", "Coaching", "Marketplace",
  "Studios", "Photography", "Music", "Film", "Agencies", "Non-profit",
  "Government", "Startups", "Energy", "Retail", "Pharma",
];

function IndustryChips({ list }: { list: string[] }) {
  return (
    <>
      {[...list, ...list].map((x, i) => (
        <span className="industry-chip" key={i}>
          <span className="num">{String((i % list.length) + 1).padStart(2, "0")}</span>
          {x}
        </span>
      ))}
    </>
  );
}

export default function HomePage() {
  const [contactSent, setContactSent] = useState(false);
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

    /* Vanilla JS animations for hero section removed as they are now handled by Framer Motion & Spline */

    /* Capabilities — switch on hover */
    const capItems = root.querySelectorAll<HTMLElement>("#capItems .cap-item");
    const frames = root.querySelectorAll<HTMLElement>("#capPreview .frame");
    const capLabel = root.querySelector<HTMLElement>("#capLabel");
    const capNames = ["web development", "app development", "seo & geo targeting", "hosting & it support"];
    capItems.forEach((it, i) => {
      const go = () => {
        capItems.forEach((x) => x.classList.remove("active"));
        frames.forEach((x) => x.classList.remove("active"));
        it.classList.add("active");
        if (frames[i]) frames[i].classList.add("active");
        if (capLabel) capLabel.textContent = capNames[i];
      };
      it.addEventListener("mouseenter", go);
      it.addEventListener("click", go);
      cleanups.push(() => {
        it.removeEventListener("mouseenter", go);
        it.removeEventListener("click", go);
      });
    });

    /* Process — scroll-driven step */
    const steps = root.querySelectorAll<HTMLElement>(".process-step");
    const processH = root.querySelector<HTMLElement>("#processH");
    const processP = root.querySelector<HTMLElement>("#processP");
    const processProgress = root.querySelector<HTMLElement>("#processProgress");
    const labels = [
      { h: "Discover", p: "We start every engagement with a Discovery Sprint — interviewing your team, auditing your data, mapping the competitive landscape." },
      { h: "Design", p: "Wireframes, prototypes and brand surfaces — designed in the browser so what you approve is what gets shipped." },
      { h: "Build", p: "Weekly demos. Production from day one. Tests, CI, analytics, hardening — all baked in as we go." },
      { h: "Launch", p: "Go-live runbook, monitoring dashboards, 30-day post-launch retainer. Then we hand over the keys." },
    ];
    const setActive = (i: number) => {
      steps.forEach((s) => s.classList.remove("active"));
      if (steps[i]) steps[i].classList.add("active");
      if (labels[i] && processH && processP) {
        processH.textContent = labels[i].h;
        processP.textContent = labels[i].p;
      }
      if (processProgress) processProgress.style.height = ((i + 1) / steps.length) * 100 + "%";
    };
    const stepIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(parseInt((e.target as HTMLElement).dataset.i || "0", 10));
        });
      },
      { threshold: 0.55 }
    );
    steps.forEach((s) => {
      stepIO.observe(s);
      const onEnter = () => setActive(parseInt(s.dataset.i || "0", 10));
      s.addEventListener("mouseenter", onEnter);
      cleanups.push(() => s.removeEventListener("mouseenter", onEnter));
    });
    cleanups.push(() => stepIO.disconnect());

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
    <div className="wevtex" ref={rootRef}>
      {/* ===================== HEADER ===================== */}
      <SiteHeader />

      {/* ===================== HERO ===================== */}
      <section className="theme-dark hero" id="hero" style={{ position: 'relative' }}>
        {/* Animated flowing-waves background */}
        <WaveBackground />

        <div className="hero-wash"></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-centered">
            <div className="hero-content" style={{ width: '100%' }}>
              <ScrollRevealText
                as="h1"
                mode="load"
                em={["web"]}
                emClassName="serif-em"
                text={"We build high-converting\nweb & mobile applications."}
              />
              <p className="hero-sub" style={{ margin: '0 auto 40px auto' }}>
                We build web, mobile and desktop products — plus the SEO, hosting and infrastructure that make them grow.
              </p>
              <div className="hero-ctas">
                <a href="/contact" className="btn btn-primary">
                  Start Your Project
                  {ARROW}
                </a>
                <a href="/services" className="btn btn-outline">Explore Capabilities</a>
              </div>
              <HeroReviews />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MANIFESTO ===================== */}
      <section className="theme-cream manifesto">
        <div className="container">
          <div className="manifesto-grid reveal">
            <div className="manifesto-meta">
              <figure className="manifesto-photo">
                <div className="manifesto-photo-frame">
                  <Image
                    className="manifesto-photo-img"
                    src="/images/manifesto-studio.jpg"
                    alt="Wevtex Studio"
                    width={720}
                    height={900}
                  />
                </div>
              </figure>
            </div>
            <ScrollRevealText
              as="h2"
              em={["instruments"]}
              text="We don’t build websites. We build instruments that compound — for operators who measure in revenue, retention, and pipeline."
            />
          </div>

        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="theme-dark features">
        <div className="container">
          <div className="feature-row reveal">
            <div className="feature-card">
              <span className="feature-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M13 2 4 14h6l-1 8 9-12h-7z" />
                </svg>
              </span>
              <h4>Fast <em>delivery</em>.</h4>
              <p>Sprint-based shipping with weekly demos — most MVPs go live in 4–6 weeks.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <path d="M12 3l1.7 6.3L20 11l-6.3 1.7L12 19l-1.7-6.3L4 11l6.3-1.7z" />
                </svg>
              </span>
              <h4>AI-powered.</h4>
              <p>Modern AI embedded into your stack — search, support, automation.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <path d="M3 11V5a2 2 0 0 1 2-2h6l9 9a2 2 0 0 1 0 2.8l-5.2 5.2a2 2 0 0 1-2.8 0z" />
                  <circle cx="8" cy="8" r="1.7" />
                </svg>
              </span>
              <h4>Honestly priced.</h4>
              <p>Transparent retainers from MAD 300/mo. No hidden line items, ever.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                  <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H10l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
                </svg>
              </span>
              <h4>Humans on Slack.</h4>
              <p>Real-time monitoring, a dedicated channel, and incident response 24/7.</p>
            </div>
          </div>
        </div>
      </section>



      {/* ===================== CAPABILITIES ===================== */}
      <section className="theme-cream capabilities" id="capabilities">
        <div className="container">
          <div className="cap-head reveal">
            <div>
              <span className="eyebrow">// 03 — What we do</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Four capabilities.<br />Built around <span className="serif" style={{ color: "var(--accent-hot)" }}>your product.</span></h2>
            </div>
            <p className="lead">
              Hover any track to see it in motion. Each practice is battle-tested across e-commerce, SaaS, fintech and bookings.
            </p>
          </div>

          <div className="cap-wrap reveal">
            <div className="cap-items" id="capItems">
              {["Web Development", "App Development", "SEO & GEO Targeting", "Hosting & IT Support"].map((name, i) => (
                <div className={i === 0 ? "cap-item active" : "cap-item"} data-i={i} key={i}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="name">{name}</span>
                  <span className="arrow">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
                  </span>
                </div>
              ))}
            </div>

            <div className="cap-preview" id="capPreview">
              <span className="preview-label">// In production</span>

              <div className="frame active">
                <div style={{ width: '100%', height: '100%', borderRadius: 12, background: 'rgba(0,0,0,0.02)' }} />
              </div>

              <div className="frame">
                <div style={{ width: '100%', height: '100%', borderRadius: 12, background: 'rgba(0,0,0,0.02)' }} />
              </div>

              <div className="frame">
                <div style={{ width: '100%', height: '100%', borderRadius: 12, background: 'rgba(0,0,0,0.02)' }} />
              </div>

              <div className="frame">
                <div style={{ width: '100%', height: '100%', borderRadius: 12, background: 'rgba(0,0,0,0.02)' }} />
              </div>

              <div className="preview-meta">
                <span>// shipped 14 may 2026</span>
                <span id="capLabel">web development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WEBSITE TYPES ===================== */}
      <section className="theme-cream types">
        <div className="container">
          <div className="types-head reveal">
            <div>
              <span className="eyebrow">// 04 — What we build</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Every type of website.<br /><span className="serif" style={{ color: "var(--accent)" }}>One expert team.</span></h2>
            </div>
            <p className="lead">
              We&apos;ve shipped across most surfaces of the modern web. Pick the closest match — or let&apos;s invent something new together.
            </p>
          </div>

          <div className="types-grid">
            {[
              { n: "01 / Marketing", h: "Landing Page", p: "High-converting pages tuned for ad campaigns and product launches.", d: 1 },
              { n: "02 / Marketing", h: "Product Portal", p: "Marketing & docs sites for SaaS — fast, structured, infinitely scalable.", d: 2 },
              { n: "03 / Commerce", h: "E-commerce", p: "Headless Shopify, Medusa or custom stacks. Wins on speed and conversion.", d: 3 },
              { n: "04 / Product", h: "Web App", p: "Multi-tenant SaaS — auth, billing, dashboards, integrations.", d: 4 },
              { n: "05 / Vertical", h: "Booking Website", p: "Calendars, payments, reminders. Built for restaurants, clinics & studios.", d: 1 },
              { n: "06 / Community", h: "Membership Portal", p: "Gated content, communities, course delivery. Stripe-native subscriptions.", d: 2 },
              { n: "07 / Vertical", h: "Restaurant & Menu", p: "Reservation, menu, online order. Showcases the food, drives the booking.", d: 3 },
              { n: "08 / Vertical", h: "Real Estate Listing", p: "Map search, MLS feeds, lead capture, agent CRM hooks.", d: 4 },
            ].map((t, i) => (
              <a className="type-card reveal" data-delay={t.d} href="/services" key={i}>
                <span className="num">{t.n}</span>
                <div>
                  <h4>{t.h}</h4>
                  <p>{t.p}</p>
                </div>
                <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
              </a>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }} className="reveal">
            <a href="/services" className="btn btn-dark">
              Discover All Services
              <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="theme-dark process">
        <div className="container">
          <div className="process-head reveal">
            <div>
              <span className="eyebrow">// 05 — How we work</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Process<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>overview.</span></h2>
            </div>
            <p className="lead">
              Most agencies start coding day one. We start two weeks earlier — with research, mapping, and a clear thesis on what will make this thing win.
            </p>
          </div>

          <div className="process-wrap">
            <div className="process-sticky reveal">
              <div className="process-preview">
                <div className="preview-kicker">// Active phase</div>
                <h3 id="processH">Discover</h3>
                <p id="processP">We start every engagement with a Discovery Sprint — interviewing your team, auditing your data, mapping the competitive landscape.</p>
              </div>
            </div>

            <div className="process-steps">
              <div className="process-progress"><div className="process-progress-fill" id="processProgress"></div></div>
              {[
                { n: "01", h: "Discover", p: "Interviews with your team and customers. Funnel audit. Competitive map. The output: a one-page thesis on where the leverage is hiding.", d: "1–2 wks" },
                { n: "02", h: "Design", p: "Wireframes, prototypes, brand surfaces. We design in the browser so what you approve is what gets shipped — no Figma-to-code gap.", d: "2–3 wks" },
                { n: "03", h: "Build", p: "Weekly demos. Production from day one. Tests, CI, analytics, hardening — all baked in as we go.", d: "4–8 wks" },
                { n: "04", h: "Launch", p: "Go-live runbook. Monitoring dashboards. 30-day post-launch retainer. Then we hand over the keys — or stick around for round two.", d: "1 wk" },
              ].map((s, i) => (
                <div className={i === 0 ? "process-step active reveal" : "process-step reveal"} data-i={i} data-delay={i || undefined} key={i}>
                  <div className="num">{s.n}</div>
                  <div>
                    <h4>{s.h}</h4>
                    <p>{s.p}</p>
                  </div>
                  <div className="duration">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section className="theme-cream projects" id="projects">
        <div className="container">
          <div className="projects-head reveal">
            <div>
              <span className="eyebrow">// 06 — Selected work</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Recent<br /><span className="serif" style={{ color: "var(--accent)" }}>projects.</span></h2>
            </div>
            <p className="lead">
              A small slice of the 240+ products we&apos;ve shipped — chosen because the story is more interesting than the deliverable.
            </p>
          </div>

          <a className="project-feature reveal" href="/portfolio">
            <div className="project-feature-meta">
              <div>
                <h3>Global E-Commerce<br /><em>platform.</em></h3>
              </div>
              <div className="meta-block">
                <span>2025</span>
                <span>E-Commerce · Headless</span>
                <span>50K SKUs · +47% conv</span>
              </div>
            </div>
            <div className="project-visual">
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
          </a>

          <div className="projects-row">
            <a className="project-small reveal" data-delay="1" href="/portfolio">
              <div className="project-visual style2">
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
                <h4>Reserve.co</h4>
                <span className="tag">Booking · SaaS</span>
              </div>
            </a>
            <a className="project-small reveal" data-delay="2" href="/portfolio">
              <div className="project-visual">
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
                <h4>Arc Desktop</h4>
                <span className="tag">Desktop · Electron</span>
              </div>
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 60 }} className="reveal">
            <a href="/portfolio" className="btn btn-dark">
              View All Case Studies
              <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section className="theme-dark marquee-section">
        <div className="container">
          <div className="marquee-head reveal">
            <div>
              <span className="eyebrow">// 07 — Industries</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>We&apos;ve shipped for<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>40+ industries.</span></h2>
            </div>
            <p className="lead" style={{ maxWidth: "38ch" }}>
              Different domains, same playbook — research, design, build, measure, iterate.
            </p>
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-track" id="track1"><IndustryChips list={IND1} /></div>
          <div className="marquee-track r2" id="track2"><IndustryChips list={IND2} /></div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="theme-cream testimonials" id="testimonials">
        <div className="container">
          <div className="testimonials-head reveal">
            <div>
              <span className="eyebrow">// 08 — Client voices</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Thousands of customers<br /><span className="serif" style={{ color: "var(--accent)" }}>can&apos;t be wrong.</span></h2>
            </div>
            <p className="lead">
              Our clients ship faster, convert higher, and sleep better. Here&apos;s what they say in their own words — slide through.
            </p>
          </div>

          <div className="t-carousel reveal">
            <div className="t-track" id="tTrack">
              {[
                { featured: true, q: "Wevtex made our entire e-commerce stack feel built for us, not bought off a shelf. Conversion is up 47% and the team is genuinely fun to work with — that almost never happens.", a: "S", n: "Saadia Vence", r: "Founder · Lumen Studio" },
                { q: "Senior engineers who actually act like senior engineers. We've been able to bring our digital ambitions in record time — the new platform feels like a flagship.", a: "G", n: "Gareth Morris", r: "CEO · Business Co." },
                { q: "Post-launch support was the differentiator. Six months in they're still treating us like the day we signed. Best agency we've worked with, by a long shot.", a: "N", n: "Naomi Reyes", r: "CMO · Marlow & Co." },
                { q: "They started with research, not Figma. By week two we already knew what we were really building — and why. The shipped product reflects that clarity.", a: "T", n: "Theo Lindahl", r: "Head of Product · Northbound" },
                { q: "We came for a website redesign and got a thinking partner. They pushed back on the brief in the right ways, and the result is dramatically better than what we asked for.", a: "A", n: "Amélie Roux", r: "VP Marketing · Verbena" },
                { q: 'Native desktop is hard. They made it look easy. The app loads instantly, handles huge files, and our customers stopped asking for a "web version" — which says it all.', a: "D", n: "David Park", r: "Founder · Atlas Desktop" },
              ].map((t, i) => (
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
      <section className="theme-dark pricing" id="pricing">
        <div className="container">
          <div className="pricing-head reveal">
            <div>
              <span className="eyebrow">// 09 — Engagement plans</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Scalable plans<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>for any stage.</span></h2>
            </div>
            <p className="lead">
              Transparent retainers, no procurement back-and-forth. Cancel any month. Upgrade anytime.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="plan reveal" data-delay="1">
              <div className="plan-num">Plan 01 — Basic Support</div>
              <h3>For early-stage teams shipping their first product.</h3>
              <div className="plan-price">
                <span className="amount">300</span>
                <span className="currency">MAD</span>
                <span className="per">/ month</span>
              </div>
              <ul className="plan-features">
                <li>Production hosting &amp; monitoring</li>
                <li>4 hours of dev work / month</li>
                <li>Email support · 48h response</li>
                <li>Quarterly strategy review</li>
                <li>Performance &amp; SEO baseline audit</li>
              </ul>
              <a href="/contact" className="btn btn-outline">Get Started</a>
            </div>

            <div className="plan featured reveal" data-delay="2">
              <div className="plan-num">Plan 02 — Most Popular</div>
              <h3>Growth &amp; SEO — the sweet spot for scaling teams.</h3>
              <div className="plan-price">
                <span className="amount">2,000</span>
                <span className="currency">MAD</span>
                <span className="per">/ month</span>
              </div>
              <ul className="plan-features">
                <li>Everything in Basic Support</li>
                <li>20 hours of dev work / month</li>
                <li>Slack channel · 4h response</li>
                <li>Monthly SEO &amp; CRO sprint</li>
                <li>A/B testing &amp; reporting</li>
                <li>Dedicated growth strategist</li>
              </ul>
              <a href="/contact" className="btn">Select Growth →</a>
            </div>

            <div className="plan reveal" data-delay="3">
              <div className="plan-num">Plan 03 — Full Care</div>
              <h3>The whole studio, embedded with your team.</h3>
              <div className="plan-price">
                <span className="amount">5,000</span>
                <span className="currency">MAD</span>
                <span className="per">/ month</span>
              </div>
              <ul className="plan-features">
                <li>Everything in Growth &amp; SEO</li>
                <li>60 hours of dev/design / month</li>
                <li>Dedicated PM &amp; tech lead</li>
                <li>Weekly executive review</li>
                <li>Priority incident response 24/7</li>
                <li>Quarterly product roadmapping</li>
              </ul>
              <a href="/contact" className="btn btn-outline">Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>



      {/* ===================== CTA ===================== */}
      <section className="theme-dark cta">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">// 11 — Final scene</span>
            <h2 style={{ marginTop: 28 }}>Ready to grow<br />your <em>business?</em></h2>
            <p className="lead">
              Partner with Wevtex to build high-converting websites, web applications, and desktop software tailored to your unique requirements.
            </p>
            <div className="cta-ctas">
              <a href="/contact" className="btn btn-primary">
                Get a Quote
                {ARROW}
              </a>
              <a href="/services" className="btn btn-outline">View Services</a>
            </div>
            <div className="cta-meta">
              <span>Booking Q3 · 14 slots</span>
              <span>Avg. reply 4h 12m</span>
              <span>Casablanca · Lisbon · Remote</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className="theme-cream contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="eyebrow">// 12 — Get in touch</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Send us a message —<br />we&apos;ll <span className="serif" style={{ color: "var(--accent)" }}>reply in 24h.</span></h2>
              <p className="lead">
                Tell us about the project. We&apos;ll come back with a tailored quote, rough scope, and a calendar invite.
              </p>

              <div className="contact-row">
                <div className="contact-line">
                  <span className="label">Email</span>
                  <span className="val">hello@wevtex.co</span>
                </div>
                <div className="contact-line">
                  <span className="label">Phone</span>
                  <span className="val">+1 (415) 555-0142</span>
                </div>
                <div className="contact-line">
                  <span className="label">Studio</span>
                  <span className="val">Casablanca · MA — Remote-first</span>
                </div>
                <div className="contact-line">
                  <span className="label">Hours</span>
                  <span className="val">Mon–Fri · 09:00–18:00 GMT+1</span>
                </div>
              </div>

              <div className="contact-ratings">
                <div className="rating-chip"><strong>4.8</strong> Clutch</div>
                <div className="rating-chip"><strong>5.0</strong> Google</div>
                <div className="rating-chip"><strong>4.9</strong> DesignRush</div>
              </div>
            </div>

            <form
              className="form reveal"
              data-delay="2"
              onSubmit={(e) => { e.preventDefault(); setContactSent(true); }}
            >
              <div className="form-eyebrow">// Quick brief</div>
              <h3>Discuss your <em>project</em> with us.</h3>
              <div className="form-grid">
                <div className="field">
                  <label>Full name</label>
                  <input type="text" placeholder="Jane Smith" />
                </div>
                <div className="field">
                  <label>Work email</label>
                  <input type="email" placeholder="jane@company.com" />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input type="text" placeholder="Your company" />
                </div>
                <div className="field">
                  <label>Budget range</label>
                  <select defaultValue="">
                    <option value="">Select budget</option>
                    <option>MAD 3K — 10K</option>
                    <option>MAD 10K — 25K</option>
                    <option>MAD 25K — 50K</option>
                    <option>MAD 50K+</option>
                  </select>
                </div>
                <div className="field full">
                  <label>Project brief</label>
                  <textarea placeholder="What are you trying to build? What's the deadline? What's keeping you up at night?"></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                {contactSent ? (
                  "Sent ✓ — we'll reply within 24h"
                ) : (
                  <>
                    Send Message
                    <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <SiteFooter />
    </div>
  );
}

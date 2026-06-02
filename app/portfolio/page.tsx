"use client";


import { useTheme } from "@/app/ThemeContext";
/** Wevtex — Portfolio. Ported from .design-wevtex/project/portfolio.html */

import { useState } from "react";
import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { useReveal } from "../../components/wevtex/useReveal";

const FILTERS = [
  { label: "All", count: "12" },
  { label: "E-commerce", count: "04" },
  { label: "SaaS", count: "03" },
  { label: "Booking", count: "02" },
  { label: "Desktop", count: "02" },
  { label: "Marketing", count: "01" },
];

const PROJECTS = [
  { t: <>Global <em>E-Commerce</em></>, y: "2025", s: "Replatformed a 50K-SKU electronics retailer onto a headless stack — checkout latency 3.2s → 0.8s, conversion +47%.", tags: ["E-Commerce", "Headless", "Featured"], d: 1 },
  { t: <>Reserve<em>.co</em></>, y: "2025", s: "Restaurant booking SaaS — calendar, payments, no-show prediction. 40 restaurants on day one, 4× growth in six months.", tags: ["SaaS", "Booking"], d: 2, style2: true },
  { t: <>Arc <em>Desktop</em></>, y: "2024", s: "Native macOS/Windows companion app — sub-10MB binary, instant launch, native notifications. App-Store featured at launch.", tags: ["Desktop", "Tauri"], d: 1 },
  { t: <>Lumen <em>Studio</em></>, y: "2024", s: "Editorial portfolio site for a photography studio — 100/100 Lighthouse, zero CSS frameworks, custom animations.", tags: ["Marketing", "Editorial"], d: 2, style2: true },
  { t: <>Northbound<em>.io</em></>, y: "2024", s: "B2B SaaS dashboard for logistics — multi-tenant auth, real-time tracking, custom reporting. ARR up 3× in 12 months.", tags: ["SaaS", "B2B"], d: 1 },
  { t: <>Marlow <em>&amp; Co.</em></>, y: "2024", s: "Heritage menswear e-commerce — Shopify Hydrogen rebuild, brand refresh, made-to-measure flow. Orders +89%.", tags: ["E-commerce", "Shopify"], d: 2, style2: true },
  { t: <>Atlas <em>Desktop</em></>, y: "2023", s: "Cross-platform CAD viewer — handles 1GB files at 60fps. Replaced an Electron predecessor that maxed out at 50MB.", tags: ["Desktop", "Rust"], d: 1 },
  { t: <>Hammam <em>Casablanca</em></>, y: "2023", s: "Luxury spa booking platform — calendar, gift cards, multilingual. Phone bookings down 60%, online 4×.", tags: ["Booking", "Hospitality"], d: 2, style2: true },
  { t: <>Verbena <em>Skincare</em></>, y: "2023", s: "Direct-to-consumer beauty brand launch — full stack from brand identity to subscription commerce.", tags: ["E-commerce", "Brand"], d: 1 },
  { t: <>Helix<em>.health</em></>, y: "2023", s: "Telehealth platform — HIPAA-compliant video, scheduling, prescriptions. Patient signups +220% YoY.", tags: ["SaaS", "Health"], d: 2, style2: true },
  { t: <>Brick <em>&amp; Mortar</em></>, y: "2022", s: "Real-estate listing platform with map-first UX, agent CRM hooks, lead capture. Inquiries up 3.5×.", tags: ["E-commerce", "Real estate"], d: 1 },
  { t: <>Studio <em>v2</em></>, y: "2022", s: "Internal tool for a film production house — asset management, review & approval, shoot scheduling.", tags: ["SaaS", "Internal tool"], d: 2, style2: true },
];

function Mockup({ style2 }: { style2?: boolean }) {
  return (
    <div className={style2 ? "project-visual style2" : "project-visual"}>
      <div className="mockup">
        <div className="topbar"><span></span><span></span><span></span></div>
        <div className="body">
          <div className="row1"><div></div><div></div><div></div></div>
          <h4></h4>
          <p></p>
          <div className="grid"><div className="tile"></div><div className="tile"></div><div className="tile"></div></div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const { isDark } = useTheme();

  useReveal();
  const [active, setActive] = useState(0);
  return (
    <div className={`wevtex ${isDark ? 'mode-dark' : 'mode-light'}`}>
      <SiteHeader current="work" />

      {/* HERO */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} page-hero`}>
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb"><a href="/" style={{ color: "inherit" }}>Home</a> &nbsp;/&nbsp; Work</div>
            <h1>Selected<br /><em>work.</em></h1>
            <p className="lead">
              Twelve case studies from the past three years. Each one was a real engagement with real numbers — the deliverable matters less than the move it unlocked.
            </p>
            <div className="page-hero-meta">
              <div><span className="label">Total ships</span><div className="val">240+ to date</div></div>
              <div><span className="label">Featured here</span><div className="val">12 case studies</div></div>
              <div><span className="label">Avg. conv. lift</span><div className="val">+47% in 90d</div></div>
              <div><span className="label">Industries</span><div className="val">40+ verticals</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className={isDark ? "theme-dark" : "theme-cream"} style={{ padding: "100px 0 140px" }}>
        <div className="container">
          <div className="portfolio-filters reveal">
            {FILTERS.map((f, i) => (
              <button
                className={i === active ? "filter-chip active" : "filter-chip"}
                onClick={() => setActive(i)}
                key={i}
              >
                {f.label} <span className="count">{f.count}</span>
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {PROJECTS.map((p, i) => (
              <a className="portfolio-card reveal" data-delay={p.d} href="/case-study" key={i}>
                <Mockup style2={p.style2} />
                <div className="meta-row">
                  <h3>{p.t}</h3>
                  <span className="year">{p.y}</span>
                </div>
                <p className="summary">{p.s}</p>
                <div className="tags">
                  {p.tags.map((tag, j) => <span key={j}>{tag}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} cta`}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">// Yours next?</span>
            <h2 style={{ marginTop: 28 }}>Let&apos;s put your<br />name on this <em>list.</em></h2>
            <p className="lead">
              We&apos;re accepting new projects globally. Average response time on briefs: 4 hours.
            </p>
            <div className="cta-ctas">
              <a href="/contact" className="btn btn-primary">Start a Project →</a>
              <a href="/services" className="btn btn-outline">View Services</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

"use client";


import { useTheme } from "@/app/ThemeContext";
/** Wevtex — Services. Ported from .design-wevtex/project/services.html */

import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { ProcessSection } from "../../components/wevtex/ProcessSection";
import { useReveal } from "../../components/wevtex/useReveal";

export default function ServicesPage() {
  const { isDark } = useTheme();

  useReveal();
  return (
    <div className={`wevtex ${isDark ? 'mode-dark' : 'mode-light'}`}>
      <SiteHeader current="services" />

      {/* HERO */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} page-hero`}>
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb"><a href="/" style={{ color: "inherit" }}>Home</a> &nbsp;/&nbsp; Services</div>
            <h1>Four capabilities.<br />One <em>expert team.</em></h1>
            <p className="lead">
              We package what we do into four clear practices — but the work flows together. Most engagements use two or three. The biggest ones use all four.
            </p>
            <div className="page-hero-meta">
              <div><span className="label">Practices</span><div className="val">4 core · cross-functional</div></div>
              <div><span className="label">Engagement min.</span><div className="val">MAD 300 · monthly retainer</div></div>
              <div><span className="label">Avg. project length</span><div className="val">8 — 14 weeks</div></div>
              <div><span className="label">Tech stack</span><div className="val">Next · Astro · Tauri · TS</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 01 — WEB DEVELOPMENT */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} service-block`}>
        <div className="container">
          <div className="service-row reveal">
            <div className="service-text">
              <div className="num">01</div>
              <span className="eyebrow">// Web Development</span>
              <h2 style={{ marginTop: 14 }}>Custom websites,<br />web apps &amp; <em>commerce.</em></h2>
              <p className="lead">
                Marketing sites, SaaS dashboards, e-commerce stacks. We build for performance and conversion — never just for looks.
              </p>
              <ul className="service-checks">
                <li data-num="01">Headless e-commerce — Shopify, Medusa, BigCommerce, or fully custom Stripe stacks.</li>
                <li data-num="02">SaaS products — multi-tenant auth, billing, dashboards, internal admin.</li>
                <li data-num="03">Marketing sites — Next.js + Astro for speed, CMS-driven for editor freedom.</li>
                <li data-num="04">Migrations — replatforming from WordPress, Wix, Webflow, custom legacy.</li>
              </ul>
              <a href="/contact" className="btn btn-dark">Discuss Web Project →</a>
            </div>
            <div className="service-visual">
              <span className="label">// Web</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <rect x="20" y="20" width="280" height="240" rx="10" fill="#f5f5f2" stroke="rgba(16,17,18,0.14)" />
                <rect x="20" y="20" width="280" height="26" rx="10" fill="rgba(16,17,18,0.04)" />
                <circle cx="34" cy="33" r="3" fill="rgba(16,17,18,0.2)" />
                <circle cx="46" cy="33" r="3" fill="rgba(16,17,18,0.2)" />
                <circle cx="58" cy="33" r="3" fill="rgba(16,17,18,0.2)" />
                <rect x="76" y="28" width="120" height="10" rx="2" fill="rgba(16,17,18,0.06)" />
                <text x="40" y="92" fontFamily="Onest" fontSize="20" fontWeight="500" fill="#101112">We build</text>
                <text x="40" y="116" fontFamily="Onest" fontWeight="700" fontSize="20" fill="#c6f24e">world-class.</text>
                <rect x="40" y="140" width="160" height="6" rx="2" fill="rgba(16,17,18,0.18)" />
                <rect x="40" y="152" width="120" height="6" rx="2" fill="rgba(16,17,18,0.18)" />
                <rect x="40" y="178" width="80" height="26" rx="13" fill="#c6f24e" />
                <text x="58" y="194" fontFamily="Onest" fontSize="11" fill="#1c2a08">Start →</text>
                <rect x="130" y="178" width="80" height="26" rx="13" fill="none" stroke="rgba(16,17,18,0.3)" />
                <text x="148" y="194" fontFamily="Onest" fontSize="11" fill="#101112">Explore</text>
                <rect x="220" y="60" width="60" height="120" rx="6" fill="#101112" />
                <rect x="40" y="220" width="240" height="24" rx="4" fill="rgba(16,17,18,0.08)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 02 — APP DEVELOPMENT */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} service-block`}>
        <div className="container">
          <div className="service-row reverse reveal">
            <div className="service-text">
              <div className="num">02</div>
              <span className="eyebrow">// App Development</span>
              <h2 style={{ marginTop: 14 }}>Native &amp; cross-platform<br /><em>mobile experiences.</em></h2>
              <p className="lead">
                Build apps that users actually want to keep. We engineer high-performance mobile applications for iOS and Android that scale natively.
              </p>
              <ul className="service-checks">
                <li data-num="01">React Native &amp; Flutter — fast development, shared logic across platforms.</li>
                <li data-num="02">Native iOS/Android — when you need ultimate performance and hardware access.</li>
                <li data-num="03">App Store Optimization (ASO) &amp; full deployment pipeline management.</li>
                <li data-num="04">Backend integrations — seamless connection to your existing databases and APIs.</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Discuss App Project →</a>
            </div>
            <div className="service-visual">
              <span className="label">// Mobile Apps</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <rect x="20" y="40" width="280" height="220" rx="8" fill="#101112" stroke="rgba(255,255,255,0.16)" />
                <rect x="20" y="40" width="280" height="22" fill="rgba(255,255,255,0.04)" />
                <circle cx="36" cy="51" r="3" fill="#c6f24e" />
                <circle cx="48" cy="51" r="3" fill="rgba(255,255,255,0.2)" />
                <circle cx="60" cy="51" r="3" fill="rgba(255,255,255,0.2)" />
                <rect x="20" y="62" width="80" height="198" fill="rgba(255,255,255,0.02)" />
                <rect x="30" y="80" width="60" height="18" rx="4" fill="rgba(198,242,78,0.16)" />
                <text x="38" y="92" fontFamily="Onest" fontSize="9" fill="#ffffff">★ iOS Build</text>
                <text x="36" y="116" fontFamily="Onest" fontSize="9" fill="rgba(255,255,255,0.5)">Android APK</text>
                <text x="36" y="132" fontFamily="Onest" fontSize="9" fill="rgba(255,255,255,0.5)">Backend API</text>
                <text x="36" y="148" fontFamily="Onest" fontSize="9" fill="rgba(255,255,255,0.5)">UI Kit</text>
                <text x="116" y="84" fontFamily="Onest" fontSize="14" fill="#ffffff">Build target</text>
                <rect x="116" y="98" width="170" height="32" rx="6" fill="rgba(198,242,78,0.14)" stroke="rgba(198,242,78,0.3)" />
                <text x="126" y="118" fontFamily="Space Mono" fontSize="9" fill="#d4ff5e">$ expo build:ios --production</text>
                <rect x="116" y="140" width="170" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
                <rect x="116" y="140" width="130" height="5" rx="2" fill="#c6f24e" />
                <text x="116" y="162" fontFamily="Space Mono" fontSize="8" fill="rgba(255,255,255,0.5)">75% · 42.4s · 18.2mb</text>
                <rect x="116" y="180" width="80" height="64" rx="6" fill="rgba(255,255,255,0.04)" />
                <rect x="206" y="180" width="80" height="64" rx="6" fill="rgba(198,242,78,0.12)" stroke="rgba(198,242,78,0.25)" />
                <text x="226" y="218" fontFamily="Onest" fontSize="20" fontWeight="500" fill="#d4ff5e">5.0</text>
                <text x="226" y="232" fontFamily="Space Mono" fontSize="7" fill="rgba(255,255,255,0.5)">/ 5.0 RATING</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 03 — SEO & GEO */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} service-block`}>
        <div className="container">
          <div className="service-row reveal">
            <div className="service-text">
              <div className="num">03</div>
              <span className="eyebrow">// SEO &amp; GEO Targeting</span>
              <h2 style={{ marginTop: 14 }}>Dominate search<br />in the <em>US &amp; UK.</em></h2>
              <p className="lead">
                Traffic is half the story. We pair advanced technical SEO with precise GEO-targeting to attract high-intent customers from your key markets.
              </p>
              <ul className="service-checks">
                <li data-num="01">International SEO — hreflang tags, localized content, and regional indexing.</li>
                <li data-num="02">Technical SEO audits, Schema.org (JSON-LD), and programmatic content systems.</li>
                <li data-num="03">GEO-targeting strategies — delivering localized experiences based on user IP.</li>
                <li data-num="04">CRO sprints — turning that high-quality traffic into actual revenue.</li>
              </ul>
              <a href="/contact" className="btn btn-dark">Grow My Traffic →</a>
            </div>
            <div className="service-visual">
              <span className="label">// SEO &amp; GEO</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <defs>
                  <linearGradient id="pf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#c6f24e" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#c6f24e" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect x="20" y="20" width="280" height="240" rx="10" fill="#f5f5f2" stroke="rgba(16,17,18,0.14)" />
                <text x="40" y="60" fontFamily="Space Mono" fontSize="9" letterSpacing="2" fill="rgba(16,17,18,0.5)">GLOBAL TRAFFIC / US &amp; UK</text>
                <text x="40" y="100" fontFamily="Onest" fontSize="36" fontWeight="400" fill="#101112">+340</text>
                <text x="130" y="100" fontFamily="Onest" fontSize="16" fill="rgba(16,17,18,0.5)">%</text>
                <text x="40" y="120" fontFamily="Space Mono" fontSize="9" fill="#c6f24e">↑ 340% vs baseline</text>
                <line x1="40" y1="220" x2="280" y2="220" stroke="rgba(16,17,18,0.1)" />
                <line x1="40" y1="180" x2="280" y2="180" stroke="rgba(16,17,18,0.06)" />
                <line x1="40" y1="150" x2="280" y2="150" stroke="rgba(16,17,18,0.06)" />
                <polyline points="40,200 80,190 120,160 160,170 200,140 240,110 280,70" fill="url(#pf)" opacity="0.6" />
                <polyline points="40,200 80,190 120,160 160,170 200,140 240,110 280,70" fill="none" stroke="#c6f24e" strokeWidth="2" />
                <circle cx="280" cy="70" r="4" fill="#c6f24e" />
                <circle cx="280" cy="70" r="9" fill="none" stroke="#c6f24e" opacity="0.4" />
                <text x="40" y="246" fontFamily="Space Mono" fontSize="8" fill="rgba(16,17,18,0.4)">90 DAYS</text>
                <text x="270" y="246" fontFamily="Space Mono" fontSize="8" fill="rgba(16,17,18,0.4)" textAnchor="end">TODAY</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 04 — HOSTING & IT SUPPORT */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} service-block`}>
        <div className="container">
          <div className="service-row reverse reveal">
            <div className="service-text">
              <div className="num">04</div>
              <span className="eyebrow">// Hosting &amp; IT Support</span>
              <h2 style={{ marginTop: 14 }}>Secure hosting &amp;<br /><em>IT management.</em></h2>
              <p className="lead">
                We don't just build your platform, we maintain it. Enterprise-grade hosting, continuous monitoring, and dedicated IT support so you never worry about uptime.
              </p>
              <ul className="service-checks">
                <li data-num="01">High-availability cloud hosting (AWS, GCP, Vercel) optimized for scale.</li>
                <li data-num="02">Continuous security auditing, SSL management, and automated backups.</li>
                <li data-num="03">Dedicated IT Support — technical triage, bug fixing, and architecture scaling.</li>
                <li data-num="04">SLA guarantees — 99.99% uptime and rapid incident response teams.</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Secure Support →</a>
            </div>
            <div className="service-visual">
              <span className="label">// IT Support</span>
              <svg viewBox="0 0 320 280" width="100%" style={{ maxWidth: 400 }}>
                <rect x="20" y="20" width="280" height="240" rx="10" fill="#101112" stroke="rgba(255,255,255,0.14)" />
                <text x="36" y="56" fontFamily="Space Mono" fontSize="9" letterSpacing="2" fill="rgba(255,255,255,0.5)">SYSTEM STATUS</text>
                <rect x="36" y="68" width="248" height="28" rx="6" fill="rgba(198,242,78,0.14)" stroke="rgba(198,242,78,0.3)" />
                <text x="48" y="86" fontFamily="Onest" fontSize="11" fill="#ffffff">US-East Server Cluster</text>
                <text x="266" y="86" fontFamily="Space Mono" fontSize="11" fill="#d4ff5e" textAnchor="end">99.99%</text>
                <rect x="36" y="102" width="248" height="28" rx="6" fill="rgba(255,255,255,0.03)" />
                <text x="48" y="120" fontFamily="Onest" fontSize="11" fill="rgba(255,255,255,0.85)">UK-London Edge Node</text>
                <text x="266" y="120" fontFamily="Space Mono" fontSize="11" fill="#d4ff5e" textAnchor="end">99.98%</text>
                <rect x="36" y="136" width="248" height="28" rx="6" fill="rgba(255,255,255,0.03)" />
                <text x="48" y="154" fontFamily="Onest" fontSize="11" fill="rgba(255,255,255,0.85)">Database Replicas</text>
                <text x="266" y="154" fontFamily="Space Mono" fontSize="11" fill="rgba(255,255,255,0.6)" textAnchor="end">Healthy</text>
                <rect x="36" y="170" width="248" height="28" rx="6" fill="rgba(255,255,255,0.03)" />
                <text x="48" y="188" fontFamily="Onest" fontSize="11" fill="rgba(255,255,255,0.85)">Support SLA</text>
                <text x="266" y="188" fontFamily="Space Mono" fontSize="11" fill="rgba(255,255,255,0.6)" textAnchor="end">4h 12m</text>
                <text x="36" y="232" fontFamily="Space Mono" fontSize="8" letterSpacing="1" fill="rgba(255,255,255,0.5)">ALL SYSTEMS OPERATIONAL · 24/7 MONITORING</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE TYPES */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} types service-block`}>
        <div className="container">
          <div className="types-head reveal">
            <div>
              <span className="eyebrow">// What we build</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Every type of website.<br /><span className="serif" style={{ color: "var(--accent)" }}>One expert team.</span></h2>
            </div>
          </div>

          <div className="types-grid">
            {[
              { n: "01 / Marketing", h: "Landing Page", p: "High-converting pages tuned for ad campaigns and product launches.", pr: "4,900", d: 1 },
              { n: "02 / Marketing", h: "Product Portal", p: "Marketing & docs sites for SaaS — fast, structured, infinitely scalable.", pr: "9,000", d: 2 },
              { n: "03 / Commerce", h: "E-commerce", p: "Headless Shopify, Medusa or custom stacks. Wins on speed and conversion.", pr: "16,000", d: 3 },
              { n: "04 / Product", h: "Web App", p: "Multi-tenant SaaS — auth, billing, dashboards, integrations.", pr: "28,000", d: 4 },
              { n: "05 / Vertical", h: "Booking Website", p: "Calendars, payments, reminders. Built for restaurants, clinics & studios.", pr: "11,000", d: 1 },
              { n: "06 / Community", h: "Membership Portal", p: "Gated content, communities, course delivery. Stripe-native subscriptions.", pr: "14,000", d: 2 },
              { n: "07 / Vertical", h: "Restaurant & Menu", p: "Reservation, menu, online order. Showcases the food, drives the booking.", pr: "8,000", d: 3 },
              { n: "08 / Vertical", h: "Real Estate Listing", p: "Map search, MLS feeds, lead capture, agent CRM hooks.", pr: "12,000", d: 4 },
            ].map((t, i) => (
              <a className="type-card reveal" data-delay={t.d} href="/contact" key={i}>
                <span className="num">{t.n}</span>
                <div>
                  <span className="type-price">From {t.pr} MAD</span>
                  <h4>{t.h}</h4>
                  <p>{t.p}</p>
                </div>
                <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <ProcessSection />

      {/* PRICING SUMMARY */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} pricing`}>
        <div className="container">
          <div className="pricing-head reveal">
            <div>
              <span className="eyebrow">// Engagement</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Two ways to<br /><span className="serif" style={{ color: "var(--accent)" }}>work together.</span></h2>
            </div>
            <p className="lead">
              Pick a project (fixed scope, fixed price) or a retainer (ongoing, monthly cap). Most clients start with a project and roll into a retainer afterward.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="pricing-grid">
            <div className="plan reveal" data-delay="1" style={{ background: "var(--bg-paper)", color: "var(--ink-on-cream)", borderColor: "var(--hairline-c)" }}>
              <div className="plan-num" style={{ color: "var(--ink-on-cream-3)" }}>Option A — One-time</div>
              <h3 style={{ color: "var(--ink-on-cream)" }}>Project engagement.</h3>
              <div className="plan-price" style={{ borderBottomColor: "var(--hairline-c)" }}>
                <span className="amount">MAD<br />10K+</span>
              </div>
              <ul className="plan-features" style={{ color: "var(--ink-on-cream-2)" }}>
                <li style={{ color: "var(--ink-on-cream)" }}>Fixed scope, fixed price</li>
                <li style={{ color: "var(--ink-on-cream)" }}>Discovery → design → build → launch</li>
                <li style={{ color: "var(--ink-on-cream)" }}>8—14 week timeline</li>
                <li style={{ color: "var(--ink-on-cream)" }}>30-day post-launch support</li>
                <li style={{ color: "var(--ink-on-cream)" }}>Full ownership on handover</li>
              </ul>
              <a href="/contact" className="btn btn-dark">Start a Project</a>
            </div>
            <div className="plan featured reveal" data-delay="2">
              <div className="plan-num">Option B — Retainer</div>
              <h3>Ongoing partnership — most popular.</h3>
              <div className="plan-price">
                <span className="amount">MAD<br />2K+</span>
                <span className="per">/ month</span>
              </div>
              <ul className="plan-features">
                <li>Dedicated hours each month</li>
                <li>Slack channel · 4h response</li>
                <li>SEO/CRO sprints monthly</li>
                <li>Performance &amp; uptime monitoring</li>
                <li>Cancel any month, no questions</li>
              </ul>
              <a href="/contact" className="btn">Discuss Retainer →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS — moved off the homepage; priced detail belongs after the plans. */}
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
            <div className="ao-foot-in">
              <span className="ao-info-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
              </span>
              <span>Need something specific?</span>
              <a href="/contact">
                Let&apos;s talk about your project
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${isDark ? "theme-dark" : "theme-cream"} cta`}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">// Ready?</span>
            <h2 style={{ marginTop: 28 }}>Tell us what<br />you&apos;re <em>building.</em></h2>
            <p className="lead">
              Send a brief, jump on a call, or pick a plan above. We respond within 4 hours during business hours.
            </p>
            <div className="cta-ctas">
              <a href="/contact" className="btn btn-primary">Start a Project →</a>
              <a href="/portfolio" className="btn btn-outline">See Our Work</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

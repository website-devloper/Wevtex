"use client";


/** Wevtex — About. Ported from .design-wevtex/project/about.html */

import Image from "next/image";
import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { useReveal } from "../../components/wevtex/useReveal";
import { HOME_URL, CONTACT_URL, PORTFOLIO_URL } from "@/lib/site-links";

const VALUES = [
  { n: "i", h: <>Measure in <em>revenue</em>,<br />not pixels.</>, p: "Every project starts with the same question: what business outcome will this move? If we can't connect the work to a number you care about, we'll tell you — and we won't take the engagement." },
  { n: "ii", h: <>Senior people<br />only.</>, p: "No juniors handed your account. The team that pitches you is the team that ships. Average tenure on staff: 8 years. Average years in the industry: 12. That seniority is the product." },
  { n: "iii", h: <>Twelve engagements<br />a year. <em>Never more.</em></>, p: "We cap engagements deliberately. It's the only way to keep response times under four hours, demo cycles weekly, and the team fresh enough to do their best work for you." },
  { n: "iv", h: <>Independent. Profitable.<br />Not for sale.</>, p: "No outside investors. No exit pressure. We answer to two stakeholders: our clients and our team. That structure lets us say no to bad-fit projects and yes to the right ones." },
];

/* Why a studio beats the two alternatives buyers actually weigh us against. */
const COMPARISON_ROWS = [
  { label: "Timeline", us: "2–4 weeks, fixed", agency: "2–4 months", free: "Open-ended" },
  { label: "Price", us: "Fixed, published", agency: "Quote on request", free: "Hourly, variable" },
  { label: "Who builds it", us: "The team you met", agency: "Junior or outsourced", free: "One person" },
  { label: "After launch", us: "Support included", agency: "Retainer required", free: "Often unreachable" },
  { label: "Speed & SEO", us: "Built in from day one", agency: "Paid add-on", free: "Rarely covered" },
  { label: "Code ownership", us: "Yours, fully", agency: "Locked to their CMS", free: "Undocumented" },
];

const TEAM = [
  { i: "YB", n: "Yassine Benali", r: "Founder · Strategy", d: 1 },
  { i: "RM", n: "Rania M'rabet", r: "Founder · Design", d: 2 },
  { i: "OS", n: "Omar Saidi", r: "Founder · Engineering", d: 3, dark: true },
  { i: "LF", n: "Lina Farah", r: "Tech Lead · Web", d: 4 },
  { i: "TS", n: "Tomás Silva", r: "Tech Lead · Desktop", d: 1 },
  { i: "AK", n: "Aïcha Khattabi", r: "Design Lead", d: 2, dark: true },
  { i: "NV", n: "Nadia Vela", r: "SEO & CRO", d: 3 },
  { i: "+7", n: "…and 7 more", r: "Engineers · designers · ops", d: 4, more: true },
];

const TIMELINE = [
  { y: "2019", h: "Founded", p: "Three operators, one shared frustration with template agencies. First three engagements that year." },
  { y: "2021", h: "Global Expansion", p: "Expanded our reach to serve high-growth businesses specifically in the USA and UK markets." },
  { y: "2023", h: "Full-Stack IT Services", p: "Introduced advanced SEO/GEO targeting and robust IT hosting to our core development offerings." },
  { y: "2025", h: "Studio of 14", p: "Team grows across 4 continents. Remote-first workflows optimized for seamless global delivery." },
  { y: "2026", h: "Today", p: "240+ ships. 40+ industries. Profitable. Independent. Still here for the work." },
];

export default function AboutPage() {

  useReveal();
  return (
    <div className="wevtex mode-light">
      <SiteHeader current="about" />

      {/* HERO */}
      <section className="theme-cream page-hero">
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb"><a href={HOME_URL} style={{ color: "inherit" }}>Home</a> &nbsp;/&nbsp; About</div>
            <h1>A workshop —<br />not a <em>factory.</em></h1>
            <p className="lead">
              Wevtex is a global IT agency of senior engineers, designers, and strategists. We specialize in building scalable web and mobile applications, advanced SEO, and enterprise IT support for businesses across the US, UK, and worldwide.
            </p>
            <div className="page-hero-meta">
              <div><span className="label">Founded</span><div className="val">2019 · Casablanca</div></div>
              <div><span className="label">Team</span><div className="val">14 humans · 4 continents</div></div>
              <div><span className="label">Focus</span><div className="val">Web, Apps, SEO, IT</div></div>
              <div><span className="label">Target Markets</span><div className="val">USA, UK &amp; Worldwide</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="theme-cream manifesto">
        <div className="container">
          <div className="manifesto-grid reveal">
            <div className="manifesto-meta">
              <span className="eyebrow">// 01 — Origin</span>
              <div className="num">2019</div>
              <span className="caption">Founded in Casablanca<br />by three former operators</span>
            </div>
            <h2>
              We started Wevtex because we<br />
              were tired of agencies that<br />
              treated <em>craft</em> like a cost center<br />
              and clients like a backlog.
            </h2>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 02 — Principles</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>What we<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>stand for.</span></h2>
            </div>
            <p className="lead">
              Four convictions that show up in every brief, every pull request, and every slack message we send a client.
            </p>
          </div>
          <div className="values-list reveal">
            {VALUES.map((v, i) => (
              <div className="value-row" key={i}>
                <div className="num">{v.n}</div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 03 — The team</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Fourteen humans.<br /><span className="serif" style={{ color: "var(--accent)" }}>Zero handoffs.</span></h2>
            </div>
            <p className="lead">
              Strategy, design, engineering — under one roof, one Slack, one P&amp;L. Add a photo to a face below; or just say hi.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div className={m.dark ? "team-card dark reveal" : "team-card reveal"} data-delay={m.d} key={i}>
                <div className="team-photo">
                  <div className="initials">{m.i}</div>
                  <div className="placeholder">{m.more ? "// More" : "// Photo"}</div>
                </div>
                <div className="team-info">
                  <div className="name">{m.n}</div>
                  <div className="role">{m.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO YOU WORK WITH — moved off the homepage; it belongs with the team story. */}
      {/* People buy from people — a face and a name before the final ask. */}
      <section className="theme-paper founder-v2">
        <div className="container">
          <div className="fd-inner reveal">
            <div className="fd-photo">
              <Image src="/images/team/founder.png" alt="Founder of Wevtex" width={640} height={800} sizes="(max-width: 820px) 60vw, 320px" />
            </div>
            <div className="fd-body">
              <span className="eyebrow line-eyebrow">Who you work with</span>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                You will talk to the<br />people who <em className="hl-em">build it</em>
              </h2>
              <p className="fd-p">
                No account managers and no handover to a team you never met. You brief us
                directly, and the same people write the code and stay reachable after launch.
              </p>
              <p className="fd-sign">Wevtex — Morocco</p>
              <a href={CONTACT_URL} className="btn btn-outline">
                Message us directly
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// 04 — Timeline</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Seven years.<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>240 ships.</span></h2>
            </div>
            <p className="lead">A short history of what we&apos;ve built — and what we&apos;ve learned.</p>
          </div>
          <div className="timeline reveal">
            {TIMELINE.map((t, i) => (
              <div className="timeline-item" style={{ background: "var(--bg-1)", borderColor: "var(--hairline-d)" }} key={i}>
                <div className="year">{t.y}</div>
                <h5 style={{ color: "var(--ink-on-dark)" }}>{t.h}</h5>
                <p style={{ color: "var(--ink-on-dark-2)" }}>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON — moved off the homepage; vetting material belongs on About. */}
      {/* Answers "why not cheaper" before the visitor sees a price. */}
      <section className="theme-cream compare-v2" id="compare">
        <div className="container">
          <div className="cmp-head reveal">
            <span className="eyebrow line-eyebrow">Why Wevtex</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              How we compare to<br />the <em className="hl-em">usual options</em>
            </h2>
          </div>
          <div className="cmp-scroll reveal">
            <table className="cmp-table">
              <caption>Wevtex compared with a typical agency and a freelancer</caption>
              <thead>
                <tr>
                  <th scope="col"><span className="cmp-hidden">Criteria</span></th>
                  <th scope="col" className="cmp-us">Wevtex</th>
                  <th scope="col">Typical agency</th>
                  <th scope="col">Freelancer</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td className="cmp-us">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
                      {r.us}
                    </td>
                    <td>{r.agency}</td>
                    <td>{r.free}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-cream cta" style={{ color: "var(--ink-on-cream)" }}>
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent" style={{ color: "var(--accent)" }}>// 05 — Work with us</span>
            <h2 style={{ marginTop: 28, color: "var(--ink-on-cream)" }}>Let&apos;s build<br />your <em>next thing.</em></h2>
            <p className="lead" style={{ color: "var(--ink-on-cream-2)" }}>
              We&apos;re ready to partner with ambitious businesses worldwide. If you&apos;ve got a project that needs senior craft and honest measurement, we&apos;d love to hear it.
            </p>
            <div className="cta-ctas">
              <a href={CONTACT_URL} className="btn btn-primary">
                Start a Project
                <svg className="arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
              </a>
              <a href={PORTFOLIO_URL} className="btn btn-outline">See Our Work</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

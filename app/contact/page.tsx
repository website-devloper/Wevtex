"use client";

/** Wevtex — Contact. Ported from .design-wevtex/project/contact.html */

import { useState } from "react";
import "../wevtex-home.css";
import { SiteHeader } from "../../components/wevtex/SiteHeader";
import { SiteFooter } from "../../components/wevtex/SiteFooter";
import { useReveal } from "../../components/wevtex/useReveal";

const FAQS = [
  { q: "How quickly can you start?", a: "We're currently booking projects for Q3. If your project is urgent (under 4 weeks lead time) we have a rapid-response retainer that can pull people in — let us know in the brief and we'll see what's possible." },
  { q: "Do you work with US/EU clients despite being in Morocco?", a: "~70% of our clients are in the US or EU. We work in GMT+1 with overlap with both. All contracts in English, payment in USD or EUR, invoicing through Stripe." },
  { q: "What's the smallest engagement you'll take?", a: "Project minimum is MAD 10K (~$1,000) for a focused one-off (a landing page rebuild, a performance audit, a Stripe integration). Retainers start at MAD 300/mo. We don't do hourly." },
  { q: "Who owns the code at the end?", a: "You do — fully, contractually, from day one. We commit straight to your GitHub org, with your engineers added if you want. No vendor lock-in, no licensing tricks, no maintenance hostage." },
  { q: "Can you work with our existing team?", a: "Yes — that's how most of our engagements work. We embed alongside in-house engineers, run daily standups in your Slack, follow your conventions, and hand things off cleanly." },
  { q: "What does post-launch support look like?", a: "Every project includes 30 days of post-launch support free. After that, most clients move to a retainer (MAD 300 — 5,000/mo) for ongoing dev, monitoring & growth work. We never abandon a project." },
  { q: "What if it doesn't work out?", a: "Project contracts have a 14-day kill clause — if the engagement isn't clicking in the first two weeks, either side can exit, and we refund anything not yet billed. Retainers cancel any month, no questions." },
];

export default function ContactPage() {
  useReveal();
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const toggle = (i: number) => setOpen((o) => ({ ...o, [i]: !o[i] }));

  return (
    <div className="wevtex">
      <SiteHeader current="contact" />

      {/* HERO */}
      <section className="theme-dark page-hero">
        <div className="hero-wash"></div>
        <div className="hero-grid-bg"></div>
        <div className="container">
          <div className="reveal">
            <div className="crumb"><a href="/" style={{ color: "inherit" }}>Home</a> &nbsp;/&nbsp; Contact</div>
            <h1>Let&apos;s build<br />something <em>together.</em></h1>
            <p className="lead">
              Tell us about the project. We&apos;ll come back within four hours during business hours with a rough scope, a quote, and a calendar invite.
            </p>
            <div className="page-hero-meta">
              <div><span className="label">Response time</span><div className="val">4h 12m average</div></div>
              <div><span className="label">Booking</span><div className="val">Q3 · 14 slots open</div></div>
              <div><span className="label">Locations</span><div className="val">Casablanca · Lisbon · Remote</div></div>
              <div><span className="label">Hours</span><div className="val">Mon–Fri · 09–18 GMT+1</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="theme-cream contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="eyebrow">// Get in touch</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Send a brief —<br />we&apos;ll <span className="serif" style={{ color: "var(--accent)" }}>reply in 24h.</span></h2>
              <p className="lead">
                Email is fine, the form is faster, and if you want to skip ahead just grab a slot on the calendar — we keep three open every week for first meetings.
              </p>
              <div className="contact-row">
                <div className="contact-line"><span className="label">Email</span><span className="val">hello@wevtex.co</span></div>
                <div className="contact-line"><span className="label">Phone</span><span className="val">+1 (415) 555-0142</span></div>
                <div className="contact-line"><span className="label">Calendar</span><span className="val">cal.com/wevtex/intro</span></div>
                <div className="contact-line"><span className="label">Press</span><span className="val">press@wevtex.co</span></div>
                <div className="contact-line"><span className="label">Careers</span><span className="val">careers@wevtex.co</span></div>
              </div>
              <div className="contact-ratings">
                <div className="rating-chip"><strong>4.8</strong> Clutch</div>
                <div className="rating-chip"><strong>5.0</strong> Google</div>
                <div className="rating-chip"><strong>4.9</strong> DesignRush</div>
              </div>
            </div>

            <form className="form reveal" data-delay="2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="form-eyebrow">// Project brief</div>
              <h3>Tell us about your <em>project.</em></h3>
              <div className="form-grid">
                <div className="field"><label>Full name</label><input type="text" placeholder="Jane Smith" /></div>
                <div className="field"><label>Work email</label><input type="email" placeholder="jane@company.com" /></div>
                <div className="field"><label>Company</label><input type="text" placeholder="Your company" /></div>
                <div className="field"><label>Phone (optional)</label><input type="tel" placeholder="+1 234 567 890" /></div>
                <div className="field">
                  <label>Project type</label>
                  <select defaultValue="">
                    <option value="">Select type</option>
                    <option>E-commerce</option>
                    <option>SaaS</option>
                    <option>Booking system</option>
                    <option>Desktop software</option>
                    <option>Marketing site</option>
                    <option>Migration</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label>Budget range</label>
                  <select defaultValue="">
                    <option value="">Select budget</option>
                    <option>MAD 3K — 10K</option>
                    <option>MAD 10K — 25K</option>
                    <option>MAD 25K — 50K</option>
                    <option>MAD 50K+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label>Timeline</label>
                  <select defaultValue="">
                    <option value="">Select timeline</option>
                    <option>ASAP</option>
                    <option>Within 1 month</option>
                    <option>1—3 months</option>
                    <option>3+ months</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <div className="field">
                  <label>How&apos;d you find us?</label>
                  <select defaultValue="">
                    <option value="">Select source</option>
                    <option>Google</option>
                    <option>Referral</option>
                    <option>Clutch / DesignRush</option>
                    <option>Social</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field full">
                  <label>Project brief</label>
                  <textarea placeholder="What are you trying to build? What's the deadline? What's keeping you up at night?" style={{ minHeight: 140 }}></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                {sent ? (
                  "Sent ✓ — we'll reply within 24h"
                ) : (
                  <>
                    Send Message
                    <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 7l10-5-3 12-2-5-5-2z" /></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="theme-dark" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// Studios</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Two cities.<br /><span className="serif" style={{ color: "var(--accent-hot)" }}>One team.</span></h2>
            </div>
            <p className="lead">
              We have desks in Casablanca and Lisbon, and folks working from twelve more places. Whichever timezone you&apos;re in, someone here is up.
            </p>
          </div>
          <div className="locations reveal">
            <div className="location-card">
              <div className="label">// HQ</div>
              <h4>Casablanca</h4>
              <p>Boulevard d&apos;Anfa 142<br />20330 · Casablanca, Morocco</p>
              <div className="time">Local time · 14:32 GMT+1</div>
            </div>
            <div className="location-card">
              <div className="label">// Studio</div>
              <h4>Lisbon</h4>
              <p>Rua da Boavista 28<br />1200-068 · Lisbon, Portugal</p>
              <div className="time">Local time · 13:32 GMT</div>
            </div>
            <div className="location-card">
              <div className="label">// Remote</div>
              <h4>Everywhere</h4>
              <p>Twelve more humans across<br />Berlin, Mexico City, Bangalore &amp; more</p>
              <div className="time">Always-on async</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="theme-cream" style={{ padding: "140px 0" }}>
        <div className="container">
          <div className="about-head reveal">
            <div>
              <span className="eyebrow">// FAQ</span>
              <h2 className="h-section" style={{ marginTop: 24 }}>Common<br /><span className="serif" style={{ color: "var(--accent)" }}>questions.</span></h2>
            </div>
            <p className="lead">
              The seven things people ask before signing. If you&apos;ve got a different one, just ask — we&apos;ll add it to the list.
            </p>
          </div>
          <div className="faq-list reveal">
            {FAQS.map((f, i) => (
              <div className={open[i] ? "faq-item open" : "faq-item"} key={i}>
                <button className="faq-q" onClick={() => toggle(i)}>
                  <span>{f.q}</span>
                  <span className="icon">+</span>
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="theme-dark cta">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow accent">// Just go for it</span>
            <h2 style={{ marginTop: 28 }}>Send the<br /><em>brief.</em></h2>
            <p className="lead">
              It doesn&apos;t have to be polished. Three lines and a screenshot is enough — we&apos;ll figure the rest out together.
            </p>
            <div className="cta-ctas">
              <a href="#" className="btn btn-primary">Email Us Directly →</a>
              <a href="/portfolio" className="btn btn-outline">See Our Work First</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

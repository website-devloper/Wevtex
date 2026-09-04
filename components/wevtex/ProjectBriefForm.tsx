"use client";

/**
 * The long qualifying brief on /contact.
 *
 * Same fields the page always showed — but they now reach the team. Until
 * 2026-09-04 this form called setSent(true) and discarded the enquiry, so every
 * submission from the site's own Contact page was silently lost.
 *
 * Copy is still English while the rest of the site is French; that is Day 5 of
 * the launch plan, kept separate so this change stays reviewable.
 */

import { useLeadSubmit } from "./useLeadSubmit";

export function ProjectBriefForm() {
  const { status, error, submit } = useLeadSubmit();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || "");

    await submit({
      name: get("name"),
      contact: get("contact"),
      service: get("service"),
      phone: get("phone"),
      timeline: get("timeline"),
      source: get("source"),
      message: get("message"),
      hp_token: get("hp_token"), // honeypot
    });
  }

  return (
    <form className="form reveal" data-delay="2" onSubmit={handleSubmit} noValidate>
      <div className="form-eyebrow">// Project brief</div>
      <h3>Tell us about your <em>project.</em></h3>

      {/* Honeypot — hidden from humans, catches bots. Deliberately named
          nothing like a real field: browser autofill matches on names, and a
          "company_url" here was being filled for real visitors. */}
      <input
        type="text"
        name="hp_token"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="form-grid">
        <div className="field">
          <label htmlFor="pb-name">Full name</label>
          <input id="pb-name" name="name" type="text" placeholder="Jane Smith" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="pb-contact">Work email</label>
          <input id="pb-contact" name="contact" type="email" placeholder="jane@company.com" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="pb-phone">
            WhatsApp <span style={{ opacity: 0.6, fontWeight: 400 }}>(faster reply)</span>
          </label>
          <input id="pb-phone" name="phone" type="tel" placeholder="+212 6 12 34 56 78" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="pb-service">Project type</label>
          <select id="pb-service" name="service" defaultValue="">
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
          <label htmlFor="pb-timeline">Timeline</label>
          <select id="pb-timeline" name="timeline" defaultValue="">
            <option value="">Select timeline</option>
            <option>ASAP</option>
            <option>Within 1 month</option>
            <option>1—3 months</option>
            <option>3+ months</option>
            <option>Just exploring</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="pb-source">How&apos;d you find us?</label>
          <select id="pb-source" name="source" defaultValue="">
            <option value="">Select source</option>
            <option>Google</option>
            <option>Referral</option>
            <option>Clutch / DesignRush</option>
            <option>Social</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="pb-message">Project brief</label>
          <textarea
            id="pb-message"
            name="message"
            required
            placeholder="What are you trying to build? What's the deadline? What's keeping you up at night?"
            style={{ minHeight: 140 }}
          ></textarea>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" style={{ color: "var(--lime-ink, #4c6b10)", fontWeight: 500, margin: "0 0 12px" }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send Message
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 7l10-5-3 12-2-5-5-2z" /></svg>
          </>
        )}
      </button>
    </form>
  );
}

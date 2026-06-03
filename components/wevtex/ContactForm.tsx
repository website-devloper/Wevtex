"use client";

/**
 * Home contact form — a small client island.
 * Validates, POSTs to /api/contact, then redirects to /thank-you on success
 * (where the conversion event is fired). Never loses the visitor's input on error.
 */

import { useState } from "react";
import { useRouter } from "next/navigation";

type Status = "idle" | "sending" | "error";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      contact: String(data.get("contact") || ""),
      business: String(data.get("business") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
      company_url: String(data.get("company_url") || ""), // honeypot
    };

    if (payload.name.trim().length < 2 || payload.contact.trim().length < 3 || payload.message.trim().length < 5) {
      setStatus("error");
      setError("Please add your name, a way to reach you, and a short message.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setError(body.error || "Something went wrong. Please try WhatsApp.");
        return;
      }
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setError("Network error. Please check your connection or message us on WhatsApp.");
    }
  }

  return (
    <form className="form reveal" data-delay="2" onSubmit={handleSubmit} noValidate>
      <div className="form-eyebrow">Quick brief</div>
      <h3>Tell us about your <em>project</em>.</h3>

      {/* Honeypot — hidden from humans, catches bots. */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="form-grid">
        <div className="field">
          <label htmlFor="cf-name">Full name</label>
          <input id="cf-name" name="name" type="text" placeholder="Your name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-contact">WhatsApp or email</label>
          <input id="cf-contact" name="contact" type="text" placeholder="So we can reply" required />
        </div>
        <div className="field">
          <label htmlFor="cf-business">Business name</label>
          <input id="cf-business" name="business" type="text" placeholder="Your business" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="cf-service">What do you need?</label>
          <select id="cf-service" name="service" defaultValue="">
            <option value="">Select a service</option>
            <option>A new website</option>
            <option>An online store</option>
            <option>SEO / Google ranking</option>
            <option>GEO / AI search</option>
            <option>Hosting &amp; support</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="cf-message">Your message</label>
          <textarea id="cf-message" name="message" required placeholder="Tell us what you'd like to build and when you'd like it live."></textarea>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" style={{ color: "var(--accent-hot, #e5484d)", margin: "0 0 12px" }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send message
            <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
          </>
        )}
      </button>
    </form>
  );
}

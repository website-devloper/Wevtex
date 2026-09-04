"use client";

/**
 * Home contact form — a small client island.
 * Deliberately short: name, one way to reach you, and a message. The longer
 * qualifying brief lives on /contact. Both submit through useLeadSubmit.
 */

import { useLeadSubmit } from "./useLeadSubmit";

export function ContactForm() {
  const { status, error, submit } = useLeadSubmit();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await submit({
      name: String(data.get("name") || ""),
      contact: String(data.get("contact") || ""),
      // Business and service were dropped from this form to cut friction; the
      // Route Handler still accepts them, so they are sent empty.
      business: "",
      service: "",
      message: String(data.get("message") || ""),
      hp_token: String(data.get("hp_token") || ""), // honeypot
    });
  }

  return (
    <form className="form reveal" data-delay="2" onSubmit={handleSubmit} noValidate>
      <div className="form-eyebrow">Brief express</div>
      <h3>Parlez-nous de votre <em>projet</em>.</h3>

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
          <label htmlFor="cf-name">Nom complet</label>
          <input id="cf-name" name="name" type="text" placeholder="Votre nom" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-contact">WhatsApp ou e-mail</label>
          <input id="cf-contact" name="contact" type="text" placeholder="Pour que l’on puisse vous répondre" required />
        </div>
        <div className="field full">
          <label htmlFor="cf-message">Votre message</label>
          <textarea id="cf-message" name="message" required placeholder="Dites-nous ce que vous souhaitez créer et pour quand."></textarea>
        </div>
      </div>

      {status === "error" && (
        <p role="alert" style={{ color: "var(--lime-ink, #4c6b10)", fontWeight: 500, margin: "0 0 12px" }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? (
          "Envoi en cours…"
        ) : (
          <>
            Envoyer le message
            <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9L9 3M9 3H4M9 3V8" /></svg>
          </>
        )}
      </button>
    </form>
  );
}

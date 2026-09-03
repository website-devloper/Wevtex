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
      // Business and service were dropped from the form to cut friction; the
      // Route Handler still accepts them, so they are sent empty.
      business: "",
      service: "",
      message: String(data.get("message") || ""),
      company_url: String(data.get("company_url") || ""), // honeypot
    };

    if (payload.name.trim().length < 2 || payload.contact.trim().length < 3 || payload.message.trim().length < 5) {
      setStatus("error");
      setError("Merci d’indiquer votre nom, un moyen de vous joindre et un court message.");
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
        setError(body.error || "Une erreur est survenue. Essayez plutôt WhatsApp.");
        return;
      }
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setError("Erreur réseau. Vérifiez votre connexion ou écrivez-nous sur WhatsApp.");
    }
  }

  return (
    <form className="form reveal" data-delay="2" onSubmit={handleSubmit} noValidate>
      <div className="form-eyebrow">Brief express</div>
      <h3>Parlez-nous de votre <em>projet</em>.</h3>

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

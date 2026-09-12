"use client";

/**
 * Homepage hero lead form — three fields, one click.
 *
 * Built for the visitor who is ready now: name, a way to reach them, and what
 * they need (a choice, not a blank box — picking is faster than typing). The
 * long qualifying brief stays on /contact.
 *
 * Submits through useLeadSubmit, which carries the page language with the lead
 * and redirects to the matching thank-you page, where the conversion fires.
 * No `.reveal` class: the form is in the first screen and must be visible at
 * rest, not waiting on an observer.
 */

import { useLeadSubmit } from "./useLeadSubmit";
import { useLocale } from "./locale";

const T = {
  fr: {
    eyebrow: "Devis gratuit, sans engagement",
    title: "Parlez-nous de votre projet.",
    name: "Nom complet",
    namePh: "Votre nom",
    contact: "WhatsApp ou e-mail",
    contactPh: "+212 6… ou vous@entreprise.ma",
    need: "Votre besoin",
    needPh: "Choisissez un service",
    needs: [
      "Création de site web",
      "Boutique en ligne",
      "Application mobile",
      "Référencement SEO",
      "Publicité Google & Meta",
      "Logiciel sur mesure",
      "Chatbot WhatsApp",
      "Autre / je ne sais pas encore",
    ],
    pickNeed: "Choisissez le service qui vous intéresse.",
    msgPrefix: "Besoin : ",
    send: "Recevoir mon devis gratuit",
    sending: "Envoi en cours…",
    note: "Réponse en quelques heures ouvrées.",
  },
  en: {
    eyebrow: "Free quote, no commitment",
    title: "Tell us about your project.",
    name: "Full name",
    namePh: "Your name",
    contact: "WhatsApp or email",
    contactPh: "+212 6… or you@company.com",
    need: "What you need",
    needPh: "Choose a service",
    needs: [
      "Website",
      "Online store",
      "Mobile app",
      "SEO",
      "Google & Meta ads",
      "Custom software",
      "WhatsApp chatbot",
      "Other / not sure yet",
    ],
    pickNeed: "Choose the service you are interested in.",
    msgPrefix: "Need: ",
    send: "Get my free quote",
    sending: "Sending…",
    note: "Reply within a few business hours.",
  },
};

export function HeroLeadForm() {
  const t = T[useLocale()];
  const { status, error, submit, setStatus, setError } = useLeadSubmit();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const need = String(d.get("service") || "");
    if (!need) {
      setStatus("error");
      setError(t.pickNeed);
      return;
    }
    await submit({
      name: String(d.get("name") || ""),
      contact: String(d.get("contact") || ""),
      service: need,
      // The route needs a message; the chosen service is the message here.
      message: t.msgPrefix + need,
      hp_token: String(d.get("hp_token") || ""),
    });
  }

  return (
    <form className="form hero-form" onSubmit={onSubmit} noValidate>
      <div className="form-eyebrow">{t.eyebrow}</div>
      <h3>{t.title}</h3>

      {/* Honeypot — hidden from humans, catches bots. */}
      <input
        type="text"
        name="hp_token"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="form-grid">
        <div className="field full">
          <label htmlFor="hf-name">{t.name}</label>
          <input id="hf-name" name="name" type="text" placeholder={t.namePh} autoComplete="name" required />
        </div>
        <div className="field full">
          <label htmlFor="hf-contact">{t.contact}</label>
          <input id="hf-contact" name="contact" type="text" placeholder={t.contactPh} autoComplete="tel" required />
        </div>
        <div className="field full">
          <label htmlFor="hf-service">{t.need}</label>
          <select id="hf-service" name="service" defaultValue="" required>
            <option value="" disabled>{t.needPh}</option>
            {t.needs.map((n) => <option key={n}>{n}</option>)}
          </select>
        </div>
      </div>

      {status === "error" && <p role="alert" className="hero-form-error">{error}</p>}

      <button type="submit" className="btn btn-primary hero-form-btn" disabled={status === "sending"}>
        {status === "sending" ? t.sending : (
          <>
            {t.send}
            <svg className="arrow" width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M3 9L9 3M9 3H4M9 3V8" />
            </svg>
          </>
        )}
      </button>
      <p className="hero-form-note">{t.note}</p>
    </form>
  );
}

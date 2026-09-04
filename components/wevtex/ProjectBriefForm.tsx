"use client";

/**
 * The project brief on /contact — three short steps rather than one long form.
 *
 * Every field is required, which a single nine-field form could not carry
 * without losing people. Split into steps of three, each screen asks little
 * and the progress bar shows how little is left.
 *
 * Values are held in state, not read from the DOM at submit, because fields
 * from earlier steps are unmounted by the time the last one is sent.
 */

import { useState } from "react";
import { useLeadSubmit } from "./useLeadSubmit";

/* Mirrors the services in the footer, so a brief names something we sell. */
const SERVICES = [
  "Création de site web",
  "Boutique en ligne",
  "Application mobile",
  "Logiciel bureau",
  "Référencement naturel (SEO)",
  "Google Maps & SEO local",
  "Publicité en ligne (Google, Meta)",
  "Chatbot WhatsApp",
  "Refonte d'un site existant",
  "Je ne sais pas encore",
];

const TIMELINES = [
  "Dès que possible",
  "Sous 1 mois",
  "1 à 3 mois",
  "Plus de 3 mois",
  "Je me renseigne",
];

const SOURCES = [
  "Google",
  "Recommandation",
  "Instagram",
  "LinkedIn",
  "Déjà client",
  "Autre",
];

const STEP_LABELS = ["Vos coordonnées", "Votre projet", "Votre brief"];
const TOTAL = STEP_LABELS.length;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = {
  name: string;
  contact: string;
  phone: string;
  service: string;
  timeline: string;
  source: string;
  message: string;
};

const EMPTY: Values = {
  name: "",
  contact: "",
  phone: "",
  service: "",
  timeline: "",
  source: "",
  message: "",
};

export function ProjectBriefForm() {
  const { status, error, submit, setStatus, setError } = useLeadSubmit();
  const [step, setStep] = useState(0);
  const [v, setV] = useState<Values>(EMPTY);
  const [hp, setHp] = useState("");

  const set =
    (k: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setV((prev) => ({ ...prev, [k]: e.target.value }));
      if (status === "error") setStatus("idle");
    };

  /** Returns the first problem on the current step, or null when it is clear. */
  function problemOnStep(s: number): string | null {
    if (s === 0) {
      if (v.name.trim().length < 2) return "Merci d'indiquer votre nom.";
      if (!EMAIL_RE.test(v.contact.trim())) return "Merci d'indiquer une adresse e-mail valide.";
      if (v.phone.replace(/\D/g, "").length < 8) return "Merci d'indiquer un numéro de téléphone valide.";
    }
    if (s === 1) {
      if (!v.service) return "Choisissez le type de projet.";
      if (!v.timeline) return "Indiquez votre délai souhaité.";
      if (!v.source) return "Dites-nous comment vous nous avez connus.";
    }
    if (s === 2) {
      if (v.message.trim().length < 10) return "Décrivez votre projet en quelques mots.";
    }
    return null;
  }

  function next() {
    const problem = problemOnStep(step);
    if (problem) {
      setStatus("error");
      setError(problem);
      return;
    }
    setStatus("idle");
    setError("");
    setStep((s) => Math.min(TOTAL - 1, s + 1));
  }

  function back() {
    setStatus("idle");
    setError("");
    setStep((s) => Math.max(0, s - 1));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Enter on an early step advances rather than submitting a half-filled brief.
    if (step < TOTAL - 1) {
      next();
      return;
    }
    for (let s = 0; s < TOTAL; s++) {
      const problem = problemOnStep(s);
      if (problem) {
        setStep(s);
        setStatus("error");
        setError(problem);
        return;
      }
    }
    await submit({ ...v, hp_token: hp });
  }

  const pct = ((step + 1) / TOTAL) * 100;

  return (
    <form className="form reveal" data-delay="2" onSubmit={handleSubmit} noValidate>
      <div className="form-eyebrow">Votre projet</div>
      <h3>Parlez-nous de votre <em>projet.</em></h3>

      {/* Honeypot — hidden from humans, catches bots. Deliberately named
          nothing like a real field: browser autofill matches on names. */}
      <input
        type="text"
        name="hp_token"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="pb-progress">
        <div className="pb-track">
          <span className="pb-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="pb-count">{step + 1} / {TOTAL}</span>
      </div>

      <div className="pb-step-label">{STEP_LABELS[step]}</div>

      {step === 0 && (
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="pb-name">Nom complet</label>
            <input id="pb-name" type="text" value={v.name} onChange={set("name")}
                   placeholder="Votre nom et prénom" autoComplete="name" />
          </div>
          <div className="field full">
            <label htmlFor="pb-contact">E-mail</label>
            <input id="pb-contact" type="email" value={v.contact} onChange={set("contact")}
                   placeholder="vous@entreprise.ma" autoComplete="email" />
          </div>
          <div className="field full">
            <label htmlFor="pb-phone">Téléphone / WhatsApp</label>
            <input id="pb-phone" type="tel" value={v.phone} onChange={set("phone")}
                   placeholder="+212 6 XX XX XX XX" autoComplete="tel" />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="pb-service">Type de projet</label>
            <select id="pb-service" value={v.service} onChange={set("service")}>
              <option value="">Sélectionnez un type</option>
              {SERVICES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="pb-timeline">Délai souhaité</label>
            <select id="pb-timeline" value={v.timeline} onChange={set("timeline")}>
              <option value="">Sélectionnez un délai</option>
              {TIMELINES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="pb-source">Comment nous avez-vous connus&nbsp;?</label>
            <select id="pb-source" value={v.source} onChange={set("source")}>
              <option value="">Sélectionnez une réponse</option>
              {SOURCES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="pb-message">Décrivez votre projet</label>
            <textarea
              id="pb-message"
              value={v.message}
              onChange={set("message")}
              placeholder="Ce que vous souhaitez créer, pour quand, et ce qui compte le plus pour vous."
              style={{ minHeight: 160 }}
            ></textarea>
          </div>
        </div>
      )}

      {status === "error" && (
        <p role="alert" style={{ color: "var(--lime-ink, #4c6b10)", fontWeight: 500, margin: "0 0 12px" }}>
          {error}
        </p>
      )}

      <div className="pb-actions">
        {step > 0 && (
          <button type="button" className="pb-back" onClick={back}>
            ← Retour
          </button>
        )}
        {step < TOTAL - 1 ? (
          <button type="button" className="btn btn-primary" onClick={next} style={{ flex: 1, justifyContent: "center" }}>
            Suivant →
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled={status === "sending"} style={{ flex: 1, justifyContent: "center" }}>
            {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
        )}
      </div>

      <p className="pb-note">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 018 0v3" />
        </svg>
        Vos informations restent confidentielles.
      </p>
    </form>
  );
}

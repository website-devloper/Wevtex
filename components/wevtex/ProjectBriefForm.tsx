"use client";

/**
 * The project brief on /contact — three short steps rather than one long form.
 *
 * Every field is required, which a single nine-field form could not carry
 * without losing people. Split into steps, each screen asks little and the
 * progress bar shows how little is left.
 *
 * Values are held in state, not read from the DOM at submit, because fields
 * from earlier steps are unmounted by the time the last one is sent.
 */

import { useState } from "react";
import { useLeadSubmit } from "./useLeadSubmit";
import { useLocale } from "./locale";

/* The service list mirrors the services in the footer, so a brief names
   something we sell. */
const T = {
  fr: {
    services: [
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
    ],
    employees: ["Indépendant / 1 personne", "2 à 10", "11 à 50", "51 à 200", "Plus de 200"],
    budgets: ["Moins de 5 000 DH", "5 000 – 15 000 DH", "15 000 – 30 000 DH", "30 000 – 60 000 DH", "Plus de 60 000 DH", "À définir ensemble"],
    timelines: ["Dès que possible", "Sous 1 mois", "1 à 3 mois", "Plus de 3 mois", "Je me renseigne"],
    steps: ["Vos coordonnées", "Votre projet", "Votre brief"],
    err: {
      name: "Merci d'indiquer votre nom.",
      email: "Merci d'indiquer une adresse e-mail valide.",
      phone: "Merci d'indiquer un numéro de téléphone valide.",
      business: "Merci d'indiquer le nom de votre entreprise.",
      employees: "Indiquez la taille de votre entreprise.",
      service: "Choisissez le type de projet.",
      budget: "Indiquez une fourchette de budget.",
      timeline: "Indiquez votre délai souhaité.",
      message: "Décrivez votre projet en quelques mots.",
    },
    eyebrow: "Votre projet",
    h3: "Parlez-nous de votre ",
    h3Em: "projet.",
    name: "Nom complet",
    namePh: "Votre nom et prénom",
    email: "E-mail",
    emailPh: "vous@entreprise.ma",
    phone: "Téléphone / WhatsApp",
    business: "Société",
    businessPh: "Nom de votre entreprise",
    employeesLabel: "Nombre d'employés",
    employeesPh: "Sélectionnez une tranche",
    service: "Type de projet",
    servicePh: "Sélectionnez un type",
    budget: "Budget estimé",
    budgetPh: "Sélectionnez une fourchette",
    timeline: "Délai souhaité",
    timelinePh: "Sélectionnez un délai",
    message: "Décrivez votre projet",
    messagePh: "Ce que vous souhaitez créer, pour quand, et ce qui compte le plus pour vous.",
    back: "← Retour",
    next: "Suivant →",
    sending: "Envoi en cours…",
    submit: "Recevoir mon devis gratuit",
    note: "Vos informations restent confidentielles. Réponse pendant les horaires de bureau.",
  },
  en: {
    services: [
      "Website design",
      "Online store",
      "Mobile app",
      "Desktop software",
      "SEO",
      "Google Maps & local SEO",
      "Online ads (Google, Meta)",
      "WhatsApp chatbot",
      "Redesign of an existing website",
      "Not sure yet",
    ],
    employees: ["Freelancer / 1 person", "2 to 10", "11 to 50", "51 to 200", "More than 200"],
    budgets: ["Under MAD 5,000", "MAD 5,000 – 15,000", "MAD 15,000 – 30,000", "MAD 30,000 – 60,000", "Over MAD 60,000", "To be defined together"],
    timelines: ["As soon as possible", "Within 1 month", "1 to 3 months", "More than 3 months", "Just exploring"],
    steps: ["Your details", "Your project", "Your brief"],
    err: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number.",
      business: "Please enter your company name.",
      employees: "Tell us the size of your company.",
      service: "Choose the type of project.",
      budget: "Give us a budget range.",
      timeline: "Tell us your preferred timeline.",
      message: "Describe your project in a few words.",
    },
    eyebrow: "Your project",
    h3: "Tell us about your ",
    h3Em: "project.",
    name: "Full name",
    namePh: "Your first and last name",
    email: "Email",
    emailPh: "you@company.com",
    phone: "Phone / WhatsApp",
    business: "Company",
    businessPh: "Your company name",
    employeesLabel: "Number of employees",
    employeesPh: "Select a range",
    service: "Project type",
    servicePh: "Select a type",
    budget: "Estimated budget",
    budgetPh: "Select a range",
    timeline: "Preferred timeline",
    timelinePh: "Select a timeline",
    message: "Describe your project",
    messagePh: "What you want to build, by when, and what matters most to you.",
    back: "← Back",
    next: "Next →",
    sending: "Sending…",
    submit: "Get my free quote",
    note: "Your details stay confidential. We reply during office hours.",
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = {
  name: string;
  contact: string;
  phone: string;
  business: string;
  employees: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

const EMPTY: Values = {
  name: "",
  contact: "",
  phone: "",
  business: "",
  employees: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export function ProjectBriefForm() {
  const t = T[useLocale()];
  const TOTAL = t.steps.length;
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

  /** Returns the first problem on the given step, or null when it is clear. */
  function problemOnStep(s: number): string | null {
    if (s === 0) {
      if (v.name.trim().length < 2) return t.err.name;
      if (!EMAIL_RE.test(v.contact.trim())) return t.err.email;
      if (v.phone.replace(/\D/g, "").length < 8) return t.err.phone;
      if (v.business.trim().length < 2) return t.err.business;
      if (!v.employees) return t.err.employees;
    }
    if (s === 1) {
      if (!v.service) return t.err.service;
      if (!v.budget) return t.err.budget;
      if (!v.timeline) return t.err.timeline;
    }
    if (s === 2) {
      if (v.message.trim().length < 10) return t.err.message;
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
      <div className="form-eyebrow">{t.eyebrow}</div>
      <h3>{t.h3}<em>{t.h3Em}</em></h3>

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

      <div className="pb-step-label">{t.steps[step]}</div>

      {step === 0 && (
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="pb-name">{t.name}</label>
            <input id="pb-name" type="text" value={v.name} onChange={set("name")}
                   placeholder={t.namePh} autoComplete="name" />
          </div>
          <div className="field full">
            <label htmlFor="pb-contact">{t.email}</label>
            <input id="pb-contact" type="email" value={v.contact} onChange={set("contact")}
                   placeholder={t.emailPh} autoComplete="email" />
          </div>
          <div className="field full">
            <label htmlFor="pb-phone">{t.phone}</label>
            <input id="pb-phone" type="tel" value={v.phone} onChange={set("phone")}
                   placeholder="+212 6 XX XX XX XX" autoComplete="tel" />
          </div>
          <div className="field full">
            <label htmlFor="pb-business">{t.business}</label>
            <input id="pb-business" type="text" value={v.business} onChange={set("business")}
                   placeholder={t.businessPh} autoComplete="organization" />
          </div>
          <div className="field full">
            <label htmlFor="pb-employees">{t.employeesLabel}</label>
            <select id="pb-employees" value={v.employees} onChange={set("employees")}>
              <option value="">{t.employeesPh}</option>
              {t.employees.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="pb-service">{t.service}</label>
            <select id="pb-service" value={v.service} onChange={set("service")}>
              <option value="">{t.servicePh}</option>
              {t.services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="pb-budget">{t.budget}</label>
            <select id="pb-budget" value={v.budget} onChange={set("budget")}>
              <option value="">{t.budgetPh}</option>
              {t.budgets.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="pb-timeline">{t.timeline}</label>
            <select id="pb-timeline" value={v.timeline} onChange={set("timeline")}>
              <option value="">{t.timelinePh}</option>
              {t.timelines.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="pb-message">{t.message}</label>
            <textarea
              id="pb-message"
              value={v.message}
              onChange={set("message")}
              placeholder={t.messagePh}
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
            {t.back}
          </button>
        )}
        {step < TOTAL - 1 ? (
          <button type="button" className="btn btn-primary" onClick={next} style={{ flex: 1, justifyContent: "center" }}>
            {t.next}
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled={status === "sending"} style={{ flex: 1, justifyContent: "center" }}>
            {status === "sending" ? t.sending : t.submit}
          </button>
        )}
      </div>

      <p className="pb-note">
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 018 0v3" />
        </svg>
        {t.note}
      </p>
    </form>
  );
}

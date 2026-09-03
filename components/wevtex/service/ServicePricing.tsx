import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, Check } from "./ServiceShared";

import { WHATSAPP_URL } from "@/lib/site-links";

/** Pre-writes the WhatsApp message so the enquiry arrives already labelled. */
const askUrl = (service: string, tier: string) =>
  `${WHATSAPP_URL}?text=` +
  encodeURIComponent(`Bonjour Wevtex, je suis intéressé(e) par « ${service} » — formule ${tier}. Pouvez-vous m'envoyer un devis ?`);

export function ServicePricing({ service }: { service: Service }) {
  if (!service.pricing) return null;

  return (
    <section className="sd-section sd-pricing bg-cream" id="tarifs">
      <div className="container">
        <div className="sd-head reveal">
          <div className="sd-eyebrow-wrap center">
            <Eyebrow>Tarifs</Eyebrow>
          </div>
          <Heading text={service.pricing.title} em={service.pricing.titleEm || []} />
          {service.pricing.subtitle && <p className="sd-sub center">{service.pricing.subtitle}</p>}
        </div>

        <div className="sd-price-grid reveal">
          {service.pricing.tiers.map((t) => (
            <div className={t.featured ? "sd-card sd-price featured" : "sd-card sd-price"} key={t.name}>
              {t.featured && <span className="sd-price-badge">Le plus demandé</span>}
              <div className="sd-price-name">{t.name}</div>
              <div className="sd-price-amount">
                {t.price}
                <span className="sd-price-cur">DH</span>
              </div>
              <div className="sd-price-note">{t.note}</div>
              <span className="sd-divider"></span>
              <ul className="sd-checks">
                {t.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={askUrl(service.name, t.name)}
                className={t.featured ? "btn btn-primary sd-price-btn" : "btn btn-outline sd-price-btn"}
                target="_blank"
                rel="noopener"
              >
                Demander un devis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {service.pricing.footnote && <p className="sd-price-foot reveal">{service.pricing.footnote}</p>}
      </div>
    </section>
  );
}

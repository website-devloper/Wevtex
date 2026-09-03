import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, ArrowR } from "./ServiceShared";
import { WHATSAPP_URL, SERVICES_URL } from "@/lib/site-links";


export function ServiceCTA({ service }: { service: Service }) {
  return (
    <section className="sd-cta">
      <span className="sd-motif sd-motif-tr light" aria-hidden></span>
      <span className="sd-motif sd-motif-bl light" aria-hidden></span>
      <div className="container">
        <div className="sd-cta-inner reveal">
          <div className="sd-eyebrow-wrap center">
            <Eyebrow light>On en parle ?</Eyebrow>
          </div>
          <Heading text={"Parlons de votre projet" + String.fromCharCode(10) + service.name.toLowerCase() + "."} em={["projet"]} className="light" />
          <p className="sd-sub light">Dites-nous ce qu'il vous faut sur WhatsApp ou par email. Nous répondons sous quelques heures, avec un conseil honnête et un prix clair, sans engagement.</p>
          <div className="sd-hero-btns center">
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              Demander un devis gratuit <ArrowR />
            </a>
            <a href={SERVICES_URL} className="btn btn-outline">
              Toutes nos prestations <ArrowR />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

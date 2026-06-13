import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, ArrowR } from "./ServiceShared";

const WHATSAPP_URL = "https://wa.me/212687633774";

export function ServiceCTA({ service }: { service: Service }) {
  return (
    <section className="sd-cta">
      <span className="sd-motif sd-motif-tr light" aria-hidden></span>
      <span className="sd-motif sd-motif-bl light" aria-hidden></span>
      <div className="container">
        <div className="sd-cta-inner reveal">
          <div className="sd-eyebrow-wrap center">
            <Eyebrow light>Let&apos;s talk</Eyebrow>
          </div>
          <Heading text={`Ready to start your\n${service.name.toLowerCase()} project?`} em={["project?"]} className="light" />
          <p className="sd-sub light">Tell us what you need on WhatsApp or by email. We reply within a few hours — with honest advice and a clear price, no obligation.</p>
          <div className="sd-hero-btns center">
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              Get a free quote <ArrowR />
            </a>
            <a href="/services" className="btn btn-outline">
              All services <ArrowR />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

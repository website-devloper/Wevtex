import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading } from "./ServiceShared";

export function ServiceFAQ({ service }: { service: Service }) {
  if (!service.faqs || service.faqs.length === 0) return null;

  return (
    <section className="sd-section sd-faq">
      <div className="container">
        <div className="sd-head reveal">
          <div className="sd-eyebrow-wrap">
            <Eyebrow>FAQ</Eyebrow>
          </div>
          <Heading text="Questions, answered" em={["answered"]} />
        </div>
        <div className="sd-faq-list reveal">
          {service.faqs.map((f, i) => (
            <details className="sd-faq-item" key={i}>
              <summary>
                <span>{f.q}</span>
                <span className="sd-faq-plus" aria-hidden></span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

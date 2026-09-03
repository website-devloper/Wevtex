import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading } from "./ServiceShared";

export function ServiceWhy({ service }: { service: Service }) {
  if (!service.whyUs) return null;

  return (
    <section className="sd-section sd-why bg-paper">
      <div className="container">
        <div className="sd-head reveal">
          <div className="sd-eyebrow-wrap">
            <Eyebrow>Pourquoi Wevtex</Eyebrow>
          </div>
          <Heading text={service.whyUs.title} em={service.whyUs.titleEm || []} />
          {service.whyUs.subtitle && <p className="sd-sub">{service.whyUs.subtitle}</p>}
        </div>

        <div className="sd-why-grid reveal">
          {service.whyUs.points.map((pt, i) => (
            <div className="sd-why-card" key={pt.h}>
              <span className="sd-why-n">{String(i + 1).padStart(2, "0")}</span>
              <h4>{pt.h}</h4>
              <p>{pt.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

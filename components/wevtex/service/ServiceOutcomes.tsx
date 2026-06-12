import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, OUTCOME } from "./ServiceShared";

export function ServiceOutcomes({ service }: { service: Service }) {
  if (!service.outcomes || service.outcomes.length === 0) return null;

  return (
    <section className="sd-section sd-outcomes">
      <div className="container">
        <div className="sd-head center reveal">
          <div className="sd-eyebrow-wrap center">
            <Eyebrow>Why it matters</Eyebrow>
          </div>
          <Heading text="The outcomes you get" em={["outcomes"]} />
          <p className="sd-sub">Real results that move your business forward — not just a nicer-looking website.</p>
        </div>
        <div className="sd-grid-3 reveal">
          {service.outcomes.map((o, i) => (
            <div className={`sd-card sd-outcome${i === 1 ? " accent" : ""}`} key={i}>
              <div className="sd-num">
                {String(i + 1).padStart(2, "0")}
                <span className="sd-num-line"></span>
              </div>
              <h4>{o.h}</h4>
              <p>{o.p}</p>
              <span className="sd-card-icon">{OUTCOME[i % OUTCOME.length]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

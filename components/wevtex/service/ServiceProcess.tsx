import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, Check, Clock, PROCESS } from "./ServiceShared";

export function ServiceProcess({ service }: { service: Service }) {
  if (!service.process) return null;

  return (
    <section className="sd-section sd-process">
      <span className="sd-motif sd-motif-br soft" aria-hidden></span>
      <div className="container">
        <div className="sd-head reveal">
          <div className="sd-eyebrow-wrap">
            <Eyebrow>How it works</Eyebrow>
          </div>
          <Heading text={service.process.title} em={service.process.titleEm || []} />
          {service.process.subtitle && <p className="sd-sub">{service.process.subtitle}</p>}
        </div>
        <div className="sd-grid-process reveal">
          {service.process.steps.map((s, i) => (
            <div className="sd-card sd-step" key={i}>
              <div className="sd-step-top">
                <div className="sd-num sm">{s.n}</div>
                <span className="sd-step-icon">{PROCESS[i % PROCESS.length]}</span>
              </div>
              <span className="sd-divider"></span>
              <h4>{s.h}</h4>
              <ul className="sd-checks">
                {s.checks.map((ch, ci) => (
                  <li key={ci}>
                    <Check />
                    {ch}
                  </li>
                ))}
              </ul>
              <span className="sd-dur">
                <Clock />
                {s.d}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

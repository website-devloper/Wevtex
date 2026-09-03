import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, ArrowR, TAG_ICON } from "./ServiceShared";
import { WHATSAPP_URL, PORTFOLIO_URL } from "@/lib/site-links";


export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="sd-hero">
      <span className="sd-motif sd-motif-tr" aria-hidden></span>
      <div className="container">
        <div className="sd-hero-inner reveal">
          <div className="sd-eyebrow-wrap center">
            <Eyebrow>{service.eyebrow}</Eyebrow>
          </div>
          <Heading as="h1" text={service.h1} em={service.h1Em} />
          <p className="sd-sub">{service.intro}</p>
          <div className="sd-hero-btns">
            <a href={WHATSAPP_URL} className="btn btn-primary" target="_blank" rel="noopener">
              Get a free quote <ArrowR />
            </a>
            <a href={PORTFOLIO_URL} className="btn btn-outline">
              Voir nos réalisations <ArrowR />
            </a>
          </div>
          <div className="sd-tags">
            {service.tags.map((t, ti) => (
              <span className="sd-tag" key={t}>
                <span className="sd-tag-ic">{TAG_ICON(t, ti)}</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

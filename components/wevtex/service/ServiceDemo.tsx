import React from "react";
import type { Service } from "../../../lib/services-data";
import { Eyebrow, Heading, pickEm, ICON } from "./ServiceShared";

export function ServiceDemo({ service }: { service: Service }) {
  if (!service.demo) return null;

  return (
    <section className="sd-section sd-demo">
      <span className="sd-motif sd-motif-bl" aria-hidden></span>
      <div className="container">
        <div className="sd-head center reveal">
          <div className="sd-eyebrow-wrap center">
            <Eyebrow>Demo</Eyebrow>
          </div>
          <Heading text={service.demo.title} em={pickEm(service.demo.title)} />
          {service.demo.subtitle && <p className="sd-sub">{service.demo.subtitle}</p>}
        </div>
        <div className="sd-window reveal">
          <div className="sd-win-bar">
            <span className="sd-tl r"></span>
            <span className="sd-tl y"></span>
            <span className="sd-tl g"></span>
            <span className="sd-win-url">
              <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              yourbrand.com
            </span>
          </div>
          <div className="sd-win-body">
            <div className="sd-win-nav">
              <span className="sd-win-logo">
                <span className="sd-win-mark"></span>ATLAS
              </span>
              <span className="sd-win-menu">
                <a className="on">Home</a>
                <a>About</a>
                <a>Services</a>
                <a>Projects</a>
                <a>Blog</a>
                <a>Contact</a>
              </span>
              <span className="sd-win-getintouch">Get in touch</span>
            </div>
            <div className="sd-win-hero">
              <div className="sd-win-copy">
                <h3 className="sd-win-h">
                  We design digital experiences that <em>drive growth</em>
                </h3>
                <p className="sd-win-sub">Strategic design, clean code, and performance focused on what matters most.</p>
                <div className="sd-win-acts">
                  <span className="sd-win-b1">Explore our work</span>
                  <span className="sd-win-b2">Learn more about us</span>
                </div>
              </div>
              <div className="sd-win-img"></div>
            </div>
            <div className="sd-win-feats">
              {([
                ["Strategy First", "We start with your goals and build a plan that works.", ICON.spark],
                ["Pixel Perfect", "Thoughtful design that elevates your brand.", ICON.pen],
                ["Built to Perform", "Fast, secure, and optimized for search engines.", ICON.rocket],
              ] as const).map(([t, d, ic], fi) => (
                <div className="sd-win-feat" key={fi}>
                  <span className="sd-win-fic">{ic}</span>
                  <div className="sd-win-ft">
                    <b>{t}</b>
                    <span>{d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {service.demo.caption && <p className="sd-caption reveal">{service.demo.caption}</p>}
      </div>
    </section>
  );
}

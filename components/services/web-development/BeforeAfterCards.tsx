'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface CaseStudy {
    id: string;
    index: string;
    industry: string;
    challenge: string;
    solution: string;
    resultMetric: string;
    resultDesc: string;
}

const cases: CaseStudy[] = [
    {
        id: "ecommerce",
        index: "01",
        industry: "Global E-Commerce Rebuild",
        challenge: "A fragmented Shopify architecture causing 4.2s load times and a 1.2% conversion ceiling.",
        solution: "High-performance Headless Next.js migration with pixel-perfect Vercel edge deployment.",
        resultMetric: "300%",
        resultDesc: "Revenue Increase"
    },
    {
        id: "service",
        index: "02",
        industry: "Enterprise Service Infrastructure",
        challenge: "Legacy lead capture systems failing on mobile, resulting in 65% bounce rates.",
        solution: "Custom React architecture with deep GA4 integration and frictionless user flows.",
        resultMetric: "80%",
        resultDesc: "Lower Bounce Rate"
    },
    {
        id: "automation",
        index: "03",
        industry: "Industrial Logistics Hub",
        challenge: "Manual data entry across disconjoined platforms causing 15% error rates.",
        solution: "API-first middleware connecting warehouse logic with a React monitoring ecosystem.",
        resultMetric: "95%",
        resultDesc: "Error Reduction"
    },
    {
        id: "saas",
        index: "04",
        industry: "Fintech SaaS Platform",
        challenge: "Obsolete onboarding flows causing 40% user drop-off during the verification phase.",
        solution: "Engineered multi-step UI with real-time validation and micro-interaction logic.",
        resultMetric: "2.5x",
        resultDesc: "Onboarding Scale"
    }
];

const BeforeAfterCards: React.FC = () => {
    return (
        <section className="service pt-130 pb-130" style={{ backgroundColor: 'var(--color-soft-white)' }}>
            <div className="container">
                {/* Section Header */}
                <div className="sec-title mb-60">
                    <Fade direction="down" triggerOnce duration={1000} delay={9}>
                        <div>
                            <span style={{
                                color: 'var(--color-burnt-orange, #E85D04)',
                                fontWeight: 700,
                                fontSize: '14px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                marginBottom: '20px'
                            }}>
                                Performance Data
                            </span>
                        </div>
                    </Fade>
                    <Fade direction="up" triggerOnce duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px', margin: 0 }}>
                                Proving the Transformation.
                            </h2>
                        </div>
                    </Fade>
                    <Fade direction="up" triggerOnce duration={1400} delay={9}>
                        <div>
                            <p className="content" style={{ color: '#666', fontSize: '17px', lineHeight: 1.7, margin: '15px 0 0 0' }}>
                                We move the needle where it matters. Our builds aren&apos;t just visually superior—they are engineered for measurable business growth.
                            </p>
                        </div>
                    </Fade>
                </div>

                {/* Case Study Grid — using native service-item pattern */}
                <div className="row mt-none-30">
                    {cases.map((card, idx) => (
                        <div className="col-lg-6 col-md-6 mt-30" key={card.id}>
                            <Fade direction="up" triggerOnce duration={1000} delay={idx * 100}>
                                <div className="service-box">
                                    <div className="service-item">
                                        <div className="xb-item--holder mb-85">
                                            {/* Industry Name */}
                                            <h3 className="xb-item--title">{card.industry}</h3>

                                            {/* Challenge */}
                                            <span className="xb-item--contact">{card.challenge}</span>

                                            {/* Solution — with accent */}
                                            <div style={{ borderLeft: '2px solid var(--color-burnt-orange, #E85D04)', paddingLeft: '15px', marginTop: '20px' }}>
                                                <span className="xb-item--contact" style={{ color: '#1a1a1a', fontWeight: 500 }}>
                                                    {card.solution}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Bottom: Index + Metric */}
                                        <div className="xb-item--icon ul_li_between">
                                            <span className="xb-item--number" style={{ fontSize: '14px' }}>{card.index}</span>
                                            <div style={{ textAlign: 'right' }}>
                                                <span style={{ fontSize: '28px', letterSpacing: '-1px', color: '#1a1a1a', display: 'block', lineHeight: 1 }}>
                                                    {card.resultMetric}
                                                </span>
                                                <span style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                    {card.resultDesc}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterCards;

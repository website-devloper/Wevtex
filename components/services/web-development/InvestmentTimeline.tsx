'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

interface TimelineData {
    id: string;
    phase: string;
    title: string;
    items: string[];
}

const timelineData: TimelineData[] = [
    {
        id: "p1",
        phase: "01",
        title: "Architecture & UX",
        items: [
            "Business logic & research",
            "Audience persona mapping",
            "Functional wireframes"
        ]
    },
    {
        id: "p2",
        phase: "02",
        title: "Visual Identity",
        items: [
            "Figma design system",
            "Interactive prototyping",
            "Collaborative lock-in"
        ]
    },
    {
        id: "p3",
        phase: "03",
        title: "Engineering",
        items: [
            "Next.js translation",
            "Responsive grid logic",
            "Headless CMS setup"
        ]
    },
    {
        id: "p4",
        phase: "04",
        title: "Shipment",
        items: [
            "PageSpeed optimization",
            "Core Web Vitals audit",
            "Live deployment"
        ]
    }
];

const icons = [
    // Step 1: Blue chart
    <svg key="1" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M7 17v-4" /><path d="M12 17v-8" /><path d="M17 17v-12" /><path d="M7 11l5-4 5 4" /></svg>,
    // Step 2: Orange outline (theme core color)
    <svg key="2" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M2 12h3" /><path d="M19 12h3" /><path d="M12 2v3" /><path d="M12 19v3" /></svg>,
    // Step 3: Teal venn diagram rings
    <svg key="3" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><circle cx="8" cy="15" r="5" /><circle cx="16" cy="15" r="5" /></svg>,
    // Step 4: Red clipboard
    <svg key="4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 14h6" /><path d="M9 10h6" /><path d="M9 18h6" /></svg>
];

const InvestmentTimeline: React.FC = () => {
    return (
        <section className="service pt-130 pb-130" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
            <style>{`
                .wf-grid {
                    display: flex;
                    flex-wrap: nowrap;
                    position: relative;
                }
                .wf-col {
                    width: 25%;
                    position: relative;
                    min-height: 280px;
                    padding: 50px 30px 40px 60px;
                }
                .wf-line {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    pointer-events: none;
                    z-index: 1;
                }
                
                /* Wavy Path Classes - Mathematically interlocking to prevent sharp overlapping corners */
                .wf-line-0 {
                    top: 30px; bottom: 0;
                    border-left: 2px dashed #dedede;
                    border-bottom: 2px dashed #dedede;
                    border-right: 2px dashed #dedede;
                    border-radius: 0 0 30px 30px;
                }
                .wf-line-0::before {
                    content: ''; position: absolute;
                    top: -30px; left: -2px; height: 30px; width: 0;
                    border-left: 2px dashed #dedede;
                }

                .wf-line-1 {
                    top: 0; bottom: 30px;
                    border-top: 2px dashed #dedede;
                    border-right: 2px dashed #dedede;
                    border-radius: 30px 30px 0 0;
                }

                .wf-line-2 {
                    top: 30px; bottom: 0;
                    border-bottom: 2px dashed #dedede;
                    border-right: 2px dashed #dedede;
                    border-radius: 0 0 30px 30px;
                }

                .wf-line-3 {
                    top: 0; bottom: 30px;
                    border-top: 2px dashed #dedede;
                    border-right: 2px dashed #dedede;
                    border-radius: 30px 30px 0 0;
                }
                .wf-line-3::after {
                    content: ''; position: absolute;
                    bottom: -30px; right: -2px; height: 30px; width: 0;
                    border-right: 2px dashed #dedede;
                }

                .wf-number {
                    position: absolute;
                    left: -24px;
                    top: 55px;
                    width: 48px;
                    height: 48px;
                    background: #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 15px;
                    font-weight: 700;
                    color: #1a1a1a;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
                    z-index: 2;
                }

                .wf-icon-wrap {
                    margin-bottom: 25px;
                }

                .wf-start-dot {
                    position: absolute;
                    top: -4px;
                    left: -4px;
                    width: 10px;
                    height: 10px;
                    border: 2px solid #dedede;
                    background: #fff;
                    border-radius: 50%;
                    z-index: 2;
                }
                .wf-end-dot {
                    position: absolute;
                    bottom: -4px;
                    right: -4px;
                    width: 10px;
                    height: 10px;
                    border: 2px solid #dedede;
                    background: #fff;
                    border-radius: 50%;
                    z-index: 2;
                }

                .wf-list {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                .wf-list li {
                    color: #666;
                    font-size: 16px;
                    line-height: 1.6;
                    margin-bottom: 10px;
                    position: relative;
                }

                /* Custom CTA Styles matching Reference Design */
                .inv-cta-box {
                    background-color: #1a1a1a;
                    padding: 50px 70px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 30px;
                }
                .inv-label {
                    color: #E85D04;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    margin-bottom: 20px;
                }
                .inv-label-dot {
                    width: 6px;
                    height: 6px;
                    background-color: #E85D04;
                    border-radius: 50%;
                }
                .inv-title {
                    color: #ffffff;
                    font-size: 48px;
                    font-weight: 700;
                    margin: 0;
                    letter-spacing: -2.5px;
                }
                .inv-btn {
                    display: inline-flex;
                    align-items: center;
                    background-color: #E85D04;
                    color: #ffffff;
                    padding: 8px 8px 8px 32px;
                    border-radius: 50px;
                    font-size: 18px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    gap: 20px;
                }
                .inv-btn:hover {
                    background-color: #d15303;
                    color: #ffffff;
                }
                .inv-btn-icon {
                    width: 48px;
                    height: 48px;
                    background-color: #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #1a1a1a;
                    transition: transform 0.3s ease;
                }
                .inv-btn:hover .inv-btn-icon {
                    transform: scale(0.95) rotate(45deg);
                }

                @media (max-width: 991px) {
                    .wf-grid { flex-wrap: wrap; }
                    .wf-col {
                        width: 100%;
                        padding: 30px 20px 50px 50px;
                    }
                    .wf-line {
                        border: none !important;
                        border-radius: 0 !important;
                        border-left: 2px dashed #dedede !important;
                    }
                    .wf-number {
                        left: -24px;
                        top: 30px;
                    }
                    .wf-start-dot, .wf-end-dot { display: none; }
                    
                    .inv-cta-box {
                        padding: 40px 30px;
                    }
                    .inv-title {
                        font-size: 32px;
                    }
                    .inv-btn {
                        width: 100%;
                        justify-content: space-between;
                    }
                }
            `}</style>
            <div className="container" style={{ maxWidth: '1200px' }}>
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
                                Project Lifecycle
                            </span>
                        </div>
                    </Fade>
                    <Fade direction="up" triggerOnce duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px', margin: 0 }}>
                                Precision Delivery.
                            </h2>
                        </div>
                    </Fade>
                    <Fade direction="up" triggerOnce duration={1400} delay={9}>
                        <div className="col-lg-6">
                            <p style={{ color: '#666', fontSize: '17px', lineHeight: 1.7, margin: 0 }}>
                                No guesswork. We operate on a standardized 4-week build cycle, ensuring your project moves from conceptualization to deployment with engineered speed.
                            </p>
                        </div>
                    </Fade>
                </div>

                <div className="wf-grid mt-100 mb-60">
                    {timelineData.map((phase, idx) => (
                        <div key={phase.id} className="wf-col">
                            {/* Wavy Dashed Border */}
                            <div className={`wf-line wf-line-${idx}`}></div>

                            {/* Start/End Boundary Dots */}
                            {idx === 0 && <div className="wf-start-dot"></div>}
                            {idx === timelineData.length - 1 && <div className="wf-end-dot"></div>}

                            {/* The Phase Number Circle on the border */}
                            <div className="wf-number">
                                {phase.phase}
                            </div>

                            <Fade direction="up" triggerOnce duration={800} delay={idx * 150}>
                                <div className="wf-card">
                                    <div className="wf-icon-wrap">
                                        {icons[idx]}
                                    </div>
                                    <h3 className="xb-item--title" style={{ marginBottom: '20px' }}>{phase.title}</h3>
                                    <ul className="wf-list">
                                        {phase.items.map((item, i) => (
                                            <li key={i}>
                                                <span style={{ color: '#E85D04', fontSize: '12px', opacity: 0.3, marginRight: '8px' }}>
                                                    0{i + 1}
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>

                {/* Investment Bar - Exact Match to Design Reference */}
                <div className="row mt-100">
                    <div className="col-12">
                        <Fade direction="up" triggerOnce duration={800}>
                            <div className="inv-cta-box">
                                <div>
                                    <div className="inv-label">
                                        <span className="inv-label-dot"></span> Baseline Investment
                                    </div>
                                    <h2 className="inv-title">
                                        Starting at 2,999 MAD
                                    </h2>
                                </div>

                                <div>
                                    <Link href="/contact" className="inv-btn">
                                        Secure Build Slot
                                        <span className="inv-btn-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentTimeline;

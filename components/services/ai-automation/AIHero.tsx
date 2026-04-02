'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const AIHero: FC = () => {
    return (
        <section
            className="hero hero-style-one pos-rel bg_img"
            style={{ backgroundColor: '#1C1C1E', paddingTop: '180px', paddingBottom: '130px', overflow: 'hidden' }}
        >
            {/* Animated Network Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.08, pointerEvents: 'none' }}>
                <svg width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
                    {/* Network nodes */}
                    <circle cx="150" cy="120" r="4" fill="#E85D04" opacity="0.8"><animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" /></circle>
                    <circle cx="350" cy="80" r="3" fill="#ffffff" opacity="0.6"><animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" /></circle>
                    <circle cx="550" cy="200" r="5" fill="#E85D04" opacity="0.7"><animate attributeName="r" values="5;7;5" dur="3.5s" repeatCount="indefinite" /></circle>
                    <circle cx="750" cy="100" r="3" fill="#ffffff" opacity="0.5"><animate attributeName="r" values="3;5;3" dur="4.5s" repeatCount="indefinite" /></circle>
                    <circle cx="950" cy="180" r="4" fill="#E85D04" opacity="0.6"><animate attributeName="r" values="4;6;4" dur="3.2s" repeatCount="indefinite" /></circle>
                    <circle cx="250" cy="350" r="3" fill="#ffffff" opacity="0.5"><animate attributeName="r" values="3;5;3" dur="4.2s" repeatCount="indefinite" /></circle>
                    <circle cx="450" cy="400" r="5" fill="#E85D04" opacity="0.7"><animate attributeName="r" values="5;7;5" dur="3.8s" repeatCount="indefinite" /></circle>
                    <circle cx="650" cy="320" r="3" fill="#ffffff" opacity="0.6"><animate attributeName="r" values="3;5;3" dur="4s" repeatCount="indefinite" /></circle>
                    <circle cx="850" cy="380" r="4" fill="#E85D04" opacity="0.8"><animate attributeName="r" values="4;6;4" dur="3.3s" repeatCount="indefinite" /></circle>
                    <circle cx="1050" cy="300" r="3" fill="#ffffff" opacity="0.5"><animate attributeName="r" values="3;5;3" dur="4.5s" repeatCount="indefinite" /></circle>
                    {/* Connecting lines */}
                    <line x1="150" y1="120" x2="350" y2="80" stroke="#E85D04" strokeWidth="0.5" opacity="0.4" />
                    <line x1="350" y1="80" x2="550" y2="200" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                    <line x1="550" y1="200" x2="750" y2="100" stroke="#E85D04" strokeWidth="0.5" opacity="0.4" />
                    <line x1="750" y1="100" x2="950" y2="180" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                    <line x1="250" y1="350" x2="450" y2="400" stroke="#E85D04" strokeWidth="0.5" opacity="0.4" />
                    <line x1="450" y1="400" x2="650" y2="320" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                    <line x1="650" y1="320" x2="850" y2="380" stroke="#E85D04" strokeWidth="0.5" opacity="0.4" />
                    <line x1="850" y1="380" x2="1050" y2="300" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                    <line x1="150" y1="120" x2="250" y2="350" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />
                    <line x1="550" y1="200" x2="450" y2="400" stroke="#E85D04" strokeWidth="0.5" opacity="0.3" />
                    <line x1="750" y1="100" x2="650" y2="320" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />
                    <line x1="950" y1="180" x2="1050" y2="300" stroke="#E85D04" strokeWidth="0.5" opacity="0.3" />
                </svg>
            </div>

            <div className="container">
                <div className="hero_wrap">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-7">
                            <div className="xb-hero">
                                <Fade direction="up" triggerOnce={false} duration={800} delay={6}>
                                    <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms" style={{ color: '#ffffff', fontSize: '60px', lineHeight: '1.2', marginBottom: '25px', letterSpacing: '-1.5px' }}>
                                        Stop Doing Manually <br /> What AI Can Do Instantly.
                                    </h1>
                                </Fade>
                                <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
                                    <p
                                        className="xb-item--content wow fadeInUp"
                                        data-wow-delay="150ms"
                                        data-wow-duration="600ms"
                                        style={{ color: '#f4f5f8', fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '550px', opacity: 0.8 }}
                                    >
                                        We build intelligent automation systems that work 24/7 so your team can focus on what matters.
                                    </p>
                                </Fade>
                                <Fade direction="up" triggerOnce={false} duration={1800} delay={9}>
                                    <div
                                        className="xb-btn wow mt-10 fadeInUp d-flex flex-wrap gap-4"
                                        data-wow-delay="300ms"
                                        data-wow-duration="600ms"
                                    >
                                        <Link
                                            href="/contact"
                                            className="thm-btn thm-btn--fill_icon thm-btn--white_icon"
                                        >
                                            <div className="xb-item--hidden">
                                                <span className="xb-item--hidden-text">Get a Free Automation Audit</span>
                                            </div>
                                            <div className="xb-item--holder">
                                                <span className="xb-item--text">Get a Free Automation Audit</span>
                                                <div className="xb-item--icon">
                                                    <i className="far fa-long-arrow-right"></i>
                                                </div>
                                                <span className="xb-item--text">Get a Free Automation Audit</span>
                                            </div>
                                        </Link>

                                        <Link
                                            href="#ai-pipeline"
                                            className="thm-btn thm-btn--fill_icon thm-btn--outline"
                                            style={{ backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff' }}
                                        >
                                            <div className="xb-item--hidden">
                                                <span className="xb-item--hidden-text">See How It Works</span>
                                            </div>
                                            <div className="xb-item--holder">
                                                <span className="xb-item--text">See How It Works</span>
                                                <div className="xb-item--icon">
                                                    <i className="far fa-long-arrow-right"></i>
                                                </div>
                                                <span className="xb-item--text">See How It Works</span>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>

                        {/* Right Side — Workflow Diagram */}
                        <div className="col-lg-5 d-none d-lg-block">
                            <Fade direction="right" triggerOnce={false} duration={1200} delay={300}>
                                <div style={{ position: 'relative' }}>
                                    <svg viewBox="0 0 400 350" width="100%" height="auto">
                                        {/* Central hub */}
                                        <circle cx="200" cy="175" r="40" fill="none" stroke="#E85D04" strokeWidth="2" opacity="0.8">
                                            <animate attributeName="r" values="38;42;38" dur="3s" repeatCount="indefinite" />
                                        </circle>
                                        <text x="200" y="172" textAnchor="middle" fill="#E85D04" fontSize="11" fontWeight="700">AI</text>
                                        <text x="200" y="186" textAnchor="middle" fill="#ffffff" fontSize="9" opacity="0.7">ENGINE</text>

                                        {/* Node 1: Trigger */}
                                        <rect x="30" y="40" width="90" height="40" rx="8" fill="rgba(232,93,4,0.15)" stroke="#E85D04" strokeWidth="1" />
                                        <text x="75" y="64" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600">Trigger</text>
                                        <line x1="120" y1="60" x2="165" y2="145" stroke="#E85D04" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />

                                        {/* Node 2: Process */}
                                        <rect x="280" y="40" width="90" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                                        <text x="325" y="64" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600">Process</text>
                                        <line x1="280" y1="60" x2="235" y2="145" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />

                                        {/* Node 3: Filter */}
                                        <rect x="30" y="260" width="90" height="40" rx="8" fill="rgba(255,255,255,0.05)" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                                        <text x="75" y="284" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600">Filter</text>
                                        <line x1="120" y1="280" x2="165" y2="205" stroke="#ffffff" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />

                                        {/* Node 4: Action */}
                                        <rect x="280" y="260" width="90" height="40" rx="8" fill="rgba(232,93,4,0.15)" stroke="#E85D04" strokeWidth="1" />
                                        <text x="325" y="284" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600">Action</text>
                                        <line x1="280" y1="280" x2="235" y2="205" stroke="#E85D04" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />

                                        {/* Node 5: Notify */}
                                        <rect x="155" y="300" width="90" height="40" rx="8" fill="rgba(232,93,4,0.15)" stroke="#E85D04" strokeWidth="1" />
                                        <text x="200" y="324" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600">Notify</text>
                                        <line x1="200" y1="300" x2="200" y2="215" stroke="#E85D04" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
                                    </svg>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIHero;

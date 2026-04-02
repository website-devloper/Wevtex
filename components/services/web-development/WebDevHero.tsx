'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const WebDevHero: FC = () => {
    return (
        <section
            className="hero hero-style-one pos-rel bg_img"
            style={{ backgroundColor: '#1C1C1E', paddingTop: '180px', paddingBottom: '130px', overflow: 'hidden' }}
        >
            <div className="container">
                <div className="hero_wrap">
                    <div className="row align-items-center">
                        {/* Left Content mimicking exactly Hero2.tsx native typography */}
                        <div className="col-md-7">
                            <div className="xb-hero">
                                <Fade direction="up" triggerOnce={false} duration={800} delay={6}>
                                    <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms" style={{ color: '#ffffff', fontSize: '60px', lineHeight: '1.2', marginBottom: '25px', letterSpacing: '-1.5px' }}>
                                        Websites That Work <br /> As Hard As You Do.
                                    </h1>
                                </Fade>
                                <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
                                    <p
                                        className="xb-item--content wow fadeInUp"
                                        data-wow-delay="150ms"
                                        data-wow-duration="600ms"
                                        style={{ color: '#f4f5f8', fontSize: '20px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '550px', opacity: 0.8 }}
                                    >
                                        Digital storefronts acting as specialized conversion engines. No bloated templates, just deeply integrated, scalable performance tailored strictly to outpace competitors.
                                    </p>
                                </Fade>
                                <Fade direction="up" triggerOnce={false} duration={1800} delay={9}>
                                    <div
                                        className="xb-btn wow mt-50 fadeInUp d-flex flex-wrap gap-4"
                                        data-wow-delay="300ms"
                                        data-wow-duration="600ms"
                                        style={{ display: 'flex', gap: '20px' }}
                                    >
                                        {/* Exact button style from Home page */}
                                        <Link
                                            href="#pricing"
                                            className="thm-btn thm-btn--fill_icon"
                                        >
                                            <div className="xb-item--hidden">
                                                <span className="xb-item--hidden-text">View Packages</span>
                                            </div>
                                            <div className="xb-item--holder">
                                                <span className="xb-item--text">View Packages</span>
                                                <div className="xb-item--icon">
                                                    <i className="far fa-long-arrow-right"></i>
                                                </div>
                                                <span className="xb-item--text">View Packages</span>
                                            </div>
                                        </Link>

                                        {/* Native outline button */}
                                        <Link
                                            href="/contact"
                                            className="thm-btn thm-btn--fill_icon thm-btn--outline"
                                            style={{ backgroundColor: 'transparent', border: '1px solid rgba(255, 255, 255, 0.4)', color: '#fff' }}
                                        >
                                            <div className="xb-item--hidden">
                                                <span className="xb-item--hidden-text">Audit My Site</span>
                                            </div>
                                            <div className="xb-item--holder">
                                                <span className="xb-item--text">Audit My Site</span>
                                                <div className="xb-item--icon">
                                                    <i className="far fa-long-arrow-right"></i>
                                                </div>
                                                <span className="xb-item--text">Audit My Site</span>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>

                        {/* Right Graphic Mockup */}
                        <div className="col-md-5 d-none d-md-block">
                            <Fade direction="left" triggerOnce={false} duration={1200} delay={15}>
                                <div style={{
                                    width: '100%',
                                    height: '420px',
                                    backgroundColor: '#151515',
                                    borderRadius: '15px',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ height: '30px', backgroundColor: '#1C1C1E', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 15px', gap: '8px' }}>
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                                    </div>
                                    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ height: '40px', width: '60%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '5px' }} />
                                        <div style={{ height: '15px', width: '40%', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '5px' }} />
                                        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                                            <div style={{ height: '120px', flex: 1, backgroundColor: 'rgba(232, 93, 4, 0.1)', borderRadius: '10px', border: '1px solid rgba(232, 93, 4, 0.2)' }} />
                                            <div style={{ height: '120px', flex: 1, backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '10px' }} />
                                            <div style={{ height: '120px', flex: 1, backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '10px' }} />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevHero;

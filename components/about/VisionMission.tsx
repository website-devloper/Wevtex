'use client';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

const VisionMission: FC = () => {
    return (
        <section className="vision-mission pt-130 pb-130" style={{ backgroundColor: 'var(--color-peach-tint)' }}>
            <div className="container">
                <div className="row">

                    {/* Mission Card */}
                    <div className="col-lg-6 col-md-12 mb-lg-0 mb-4">
                        <Fade direction="up" triggerOnce duration={1000}>
                            <div
                                className="vm-card p-5 h-100"
                                style={{
                                    backgroundColor: 'var(--color-soft-white)',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(28,28,30,0.05)'
                                }}
                            >
                                <span
                                    style={{
                                        color: 'var(--color-charcoal)',
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                        display: 'block',
                                        marginBottom: '20px'
                                    }}
                                >
                                    Our Mission
                                </span>
                                <h3
                                    style={{
                                        color: 'var(--color-charcoal)',
                                        fontSize: '32px',
                                        letterSpacing: '-1px',
                                        lineHeight: 1.4
                                    }}
                                >
                                    Empowering businesses to <span style={{ color: 'var(--color-burnt-orange)' }}>grow faster</span> by making smart technology accessible and affordable.
                                </h3>
                            </div>
                        </Fade>
                    </div>

                    {/* Vision Card */}
                    <div className="col-lg-6 col-md-12">
                        <Fade direction="up" triggerOnce duration={1200}>
                            <div
                                className="vm-card p-5 h-100"
                                style={{
                                    backgroundColor: 'var(--color-soft-white)',
                                    borderRadius: '24px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(28,28,30,0.05)'
                                }}
                            >
                                <span
                                    style={{
                                        color: 'var(--color-charcoal)',
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        letterSpacing: '2px',
                                        textTransform: 'uppercase',
                                        display: 'block',
                                        marginBottom: '20px'
                                    }}
                                >
                                    Our Vision
                                </span>
                                <h3
                                    style={{
                                        color: 'var(--color-charcoal)',
                                        fontSize: '32px',
                                        letterSpacing: '-1px',
                                        lineHeight: 1.4
                                    }}
                                >
                                    A world where every business — big or small — runs on <span style={{ color: 'var(--color-burnt-orange)' }}>intelligent, automated systems.</span>
                                </h3>
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionMission;

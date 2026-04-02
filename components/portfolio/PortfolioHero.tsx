'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

const PortfolioHero: React.FC = () => {
    return (
        <section
            className="page-title pt-200 pb-120 pos-rel bg_img"
            style={{ backgroundImage: `url('/images/bg/hero-bg01.jpg')`, backgroundColor: 'var(--color-charcoal)' }}>
            <div className="container">
                <div className="page-title-wrap sd-title-wrap">
                    <div className="row mt-none-30">
                        <div className="col-lg-9 mt-30">
                            <div className="page-title-box">
                                <Fade direction="down" triggerOnce duration={800}>
                                    <span
                                        style={{
                                            color: 'var(--color-burnt-orange)',
                                            fontWeight: 700,
                                            fontSize: '14px',
                                            letterSpacing: '2px',
                                            textTransform: 'uppercase',
                                            display: 'block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        Our Work
                                    </span>
                                </Fade>
                                <Fade direction="up" triggerOnce duration={1000} delay={100}>
                                    <h1
                                        className="title"
                                        style={{
                                            color: 'var(--color-soft-white)',
                                            fontSize: '64px',
                                            letterSpacing: '-1.5px',
                                            lineHeight: 1.1,
                                            marginBottom: '30px'
                                        }}
                                    >
                                        Projects That Speak <br /> Louder Than Words.
                                    </h1>
                                </Fade>
                                <Fade direction="up" triggerOnce duration={1200} delay={200}>
                                    <p style={{ color: 'rgba(250,250,250,0.7)', fontSize: '20px', maxWidth: '750px', lineHeight: 1.6, marginBottom: '40px' }}>
                                        Every project we deliver is built with precision, purpose, and obsession for quality.
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioHero;

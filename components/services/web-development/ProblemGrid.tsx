'use client';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

const ProblemGrid: FC = () => {
    const problems = [
        {
            title: "Abysmal Conversion Rates",
            desc: "90% of local agencies rely on heavy, bloated templates that hemorrhage users before they even cross the fold. Slower loads equal shattered leads.",
            iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" // Flat Exclamation SVG
        },
        {
            title: "Cookie-Cutter Branding",
            desc: "If your digital storefront looks identical to three other competitors dynamically generated from generic stock libraries, you implicitly lose trust metrics immediately.",
            iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" // Flat File SVG
        },
        {
            title: "Fragile Architecture",
            desc: "The sheer panic when an amateur WordPress site breaks after a minor plugin update. Brittle logic leads straight to extended, uncontrolled offline periods.",
            iconPath: "M21 12.2V7c0-2.8-2.2-5-5-5H8C5.2 2 3 4.2 3 7v10c0 2.8 2.2 5 5 5h5v-2H8c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v4.2l2 1z M22 17l-4-4v3h-4v2h4v3l4-4z" // Broken/Repair SVG
        }
    ];

    return (
        <section className="problem-section pt-130 pb-130 pt-md-80 pb-md-80 pos-rel" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-lg-8 text-center">
                        <Fade direction="down" triggerOnce duration={1000} delay={9}>
                            <div>
                                <h2 className="title sec-title wow fadeInUp" data-wow-duration="600ms" style={{ color: '#1a1a1a', fontSize: '48px', letterSpacing: '-1.5px' }}>
                                    Stop Bleeding Market Share.
                                </h2>
                            </div>
                        </Fade>
                        <Fade direction="up" triggerOnce duration={1200} delay={9}>
                            <div>
                                <span className="content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms" style={{ color: '#666', fontSize: '18px', marginTop: '15px', display: 'block' }}>
                                    The brutal truth about why your current website is acting as a liability rather than your highest-performing sales asset.
                                </span>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div className="row mt-none-30 justify-content-center">
                    {problems.map((prob, idx) => (
                        <div className="col-lg-4 col-md-6 mt-30" key={idx}>
                            <Fade direction="up" triggerOnce duration={800} delay={idx * 150} style={{ height: '100%' }}>
                                <div
                                    className="feature-item problem-card"
                                    style={{
                                        backgroundColor: 'transparent',
                                        padding: '40px 30px',
                                        borderRadius: '6px',             // Sharper, more aggressive native corners
                                        boxShadow: 'none',
                                        border: '1px solid #EBECEF',     // Very faint native agency border
                                        height: '100%',
                                        textAlign: 'left',               // Switched from generic-centered to clean-left aligned
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.borderColor = '#1a1a1a'; // Strict harsh border hover instead of floaty shadow
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.borderColor = '#EBECEF';
                                    }}
                                >
                                    {/* Stripped the silly floating shadow circle, using direct SVG wrapping */}
                                    <div style={{ marginBottom: '25px', display: 'inline-block' }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#E85D04" xmlns="http://www.w3.org/2000/svg">
                                            <path d={prob.iconPath} />
                                        </svg>
                                    </div>

                                    {/* Left-Aligned, raw typography */}
                                    <h3 style={{ fontSize: '22px', color: '#1a1a1a', marginBottom: '15px', letterSpacing: '-0.3px', lineHeight: '1.4' }}>
                                        {prob.title}
                                    </h3>
                                    <span style={{ fontSize: '16px', color: '#666', lineHeight: '1.7', display: 'block' }}>
                                        {prob.desc}
                                    </span>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemGrid;

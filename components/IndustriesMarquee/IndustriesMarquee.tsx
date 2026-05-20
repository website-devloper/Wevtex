'use client';

import React from 'react';
import Image from 'next/image';
import { INDUSTRIES } from '@/lib/data/industries';


const IndustriesMarquee: React.FC = () => {
    // Split industries into two rows of 20
    const row1 = INDUSTRIES.slice(0, 20);
    const row2 = INDUSTRIES.slice(20, 40);

    return (
        <section className="industries-marquee pt-120 pb-120" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
            <div className="container">
                <div className="sec-title text-center mb-40">
                    <span
                        style={{
                            color: 'var(--color-burnt-orange, #e2481e)',
                            fontWeight: 700,
                            fontSize: '14px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            marginBottom: '20px',
                            background: 'transparent'
                        }}
                    >
                        Cross-Industry Expertise
                    </span>
                    <h2 className="title" style={{ letterSpacing: '-1.5px', fontSize: '48px' }}>
                        We've built for 40+ industries
                    </h2>
                    <p style={{ color: '#49515b', maxWidth: '600px', margin: '20px auto 0', fontSize: '18px' }}>
                        From fintech to fashion — if your business needs a digital product, we've done it.
                    </p>
                </div>
            </div>

            {/* Marquee Wrapper with Mask */}
            <div className="marquee-wrapper" style={{
                position: 'relative',
                width: '100vw',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px', /* Increased row gap */
                marginTop: '50px', /* Added safe top margin */
                marginBottom: '20px', /* Added safe bottom margin */
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}>

                {/* Row 1: Left Scroll */}
                <div className="marquee-row marquee-left">
                    <div className="marquee-content">
                        {[...row1, ...row1].map((industry, index) => (
                            <div key={`r1-${index}`} className="industry-pill">
                                <span className="industry-icon"><i className={industry.icon}></i></span>
                                <span className="industry-name">{industry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right Scroll */}
                <div className="marquee-row marquee-right">
                    <div className="marquee-content">
                        {[...row2, ...row2].map((industry, index) => (
                            <div key={`r2-${index}`} className="industry-pill">
                                <span className="industry-icon"><i className={industry.icon}></i></span>
                                <span className="industry-name">{industry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .marquee-row {
                    display: flex;
                    width: max-content;
                }

                .marquee-content {
                    display: flex;
                    gap: 30px;
                    padding: 10px 15px; /* Added 20px top and bottom padding */
                }

                /* Left scroll animation */
                .marquee-left .marquee-content {
                    animation: scroll-left 50s linear infinite;
                }

                /* Right scroll animation */
                .marquee-right .marquee-content {
                    animation: scroll-right 50s linear infinite;
                }

                /* Pause on hover */
                .marquee-row:hover .marquee-content {
                    animation-play-state: paused;
                }

                /* Pill Styles */
                .industry-pill {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 14px 28px;
                    background-color: #ffffff;
                    border: 1px solid rgba(26, 26, 28, 0.05); /* Match charcoal low opacity */
                    border-radius: 50px;
                    white-space: nowrap;
                    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
                    cursor: default;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.03); /* Softer template shadow */
                }

                .industry-pill:hover {
                    background-color: #f8f9fa; /* Sleek, simple gray hover */
                    border-color: rgba(26, 26, 28, 0.1);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transform: translateY(-4px);
                }

                .industry-icon {
                    font-size: 18px;
                    color: #e2481e; /* Changed to orange by default */
                    transition: color 0.4s ease;
                }

                .industry-name {
                    font-size: 15px;
                    font-weight: 600;
                    color: #1a1a1c; /* Official charcoal */
                    letter-spacing: -0.1px;
                    transition: color 0.4s ease;
                }

                .industry-pill:hover .industry-name,
                .industry-pill:hover .industry-icon {
                    color: #e2481e; /* Official orange text on hover */
                }

                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </section>
    );
};

export default IndustriesMarquee;

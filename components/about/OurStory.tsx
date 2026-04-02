'use client';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const OurStory: FC = () => {
    return (
        <section className="our-story pt-130 pb-130 bg-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Fade direction="left" triggerOnce duration={1000}>
                            <div className="story-content pr-50">
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
                                    Our Story
                                </span>
                                <h2
                                    className="title"
                                    style={{
                                        color: 'var(--color-charcoal)',
                                        fontSize: '48px',
                                        letterSpacing: '-1.5px',
                                        lineHeight: 1.15,
                                        marginBottom: '30px'
                                    }}
                                >
                                    Engineering the future, from Casablanca to the world.
                                </h2>
                                <p style={{ color: 'rgba(28,28,30,0.7)', fontSize: '18px', lineHeight: 1.6, marginBottom: '25px' }}>
                                    Wevtex was founded with a singular, unyielding purpose: to bridge the gap between world-class web architecture and cutting-edge intelligent automation.
                                </p>
                                <p style={{ color: 'rgba(28,28,30,0.7)', fontSize: '18px', lineHeight: 1.6 }}>
                                    Operating out of Morocco's thriving tech hub, we assemble elite engineering talent to build scalable, AI-powered ecosystems that empower businesses to operate faster, scale harder, and outmaneuver the competition. We don't just build websites; we build the operational engines of tomorrow.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-5">
                        <Fade direction="right" triggerOnce duration={1000}>
                            <div
                                className="story-image-wrap"
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '500px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                                }}
                            >
                                <Image
                                    src="/images/bg/page_bg01.jpg"
                                    alt="Wevtex Headquarters"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;

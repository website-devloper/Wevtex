'use client';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

const DeliverablesList: FC = () => {
    const listItems = [
        {
            title: "SSR Next.js Framework",
            desc: "Zero-latency page loads via Server-Side Rendering guarantees higher SEO rank mapping.",
            gradientStart: "#FFF3EE",
            gradientEnd: "#FFE8D6"
        },
        {
            title: "Headless CMS Integration",
            desc: "Empowering non-technical operators to publish content dynamically without threatening the codebase architecture.",
            gradientStart: "#F4F7FB",
            gradientEnd: "#E6EEF8"
        },
        {
            title: "Component Reusability",
            desc: "Building a unified UI Token dictionary mapping directly to your enterprise aesthetic.",
            gradientStart: "#F9F4F9",
            gradientEnd: "#FAEBFA"
        },
        {
            title: "Advanced Data Tracking",
            desc: "Zeroing out bounce-leakage by integrating hyper-granular posthog and pixel pipelines natively.",
            gradientStart: "#F4FBFC",
            gradientEnd: "#DFF4F6"
        }
    ];

    return (
        <section className="deliverables-section pt-130 pb-130 pos-rel" style={{ backgroundColor: '#ffffff', zIndex: 1 }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div style={{ position: 'sticky', top: '180px' }}>
                            <div className="sec-title mb-40">
                                <Fade direction="down" triggerOnce duration={1000} delay={9}>
                                    <div>
                                        <h2 className="title wow fadeInUp" data-wow-duration="600ms" style={{ color: '#1a1a1a', fontSize: '48px', letterSpacing: '-1.5px' }}>
                                            The Anatomy of a Modern Build.
                                        </h2>
                                    </div>
                                </Fade>
                                <Fade direction="up" triggerOnce duration={1200} delay={9}>
                                    <div>
                                        <span className="content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms" style={{ color: '#666', fontSize: '18px', marginTop: '20px', display: 'block' }}>
                                            We do not utilize generic off-the-shelf builders. We provision custom React component architectures optimized ruthlessly for raw performance and enterprise scalability.
                                        </span>
                                    </div>
                                </Fade>
                            </div>
                            <div className="d-none d-lg-block">
                                <Fade direction="up" triggerOnce duration={1200} delay={300}>
                                    <div style={{ backgroundColor: '#f4f5f8', padding: '35px', borderRadius: '15px', border: '1px solid #eaeaea', marginTop: '40px' }}>
                                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: '#1a1a1a' }}>100/100 Core Web Vitals</h3>
                                        <p style={{ color: '#666', marginBottom: 0 }}>Unprecedented page speeds directly correlate with lower bounce metrics and higher gross conversion margins.</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 offset-lg-1" style={{ position: 'relative' }}>
                        <div className="deliverable-stack" style={{ paddingTop: '20px', paddingBottom: '100px' }}>
                            {listItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="process-item deliverable-card"
                                    style={{
                                        position: 'sticky',
                                        top: '180px',
                                        zIndex: index + 10,
                                        backgroundColor: '#F7F8FA', // Exact soft background from screenshot
                                        padding: '50px 40px',
                                        borderRadius: '20px',
                                        boxShadow: '0 -10px 30px rgba(0,0,0,0.03)', // Shadow pushing UP for stack overlap depth
                                        border: '1px solid #EBECEF',
                                        marginBottom: '60vh',
                                        display: 'flex',
                                        flexDirection: 'column', // Vertical layout per screenshot
                                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                >
                                    {/* The requested Top-Left Badge from Screenshot */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '40px',
                                        width: '60px',
                                        height: '60px',
                                        backgroundColor: 'transparent',
                                        border: '1px solid #D1D5DB', // Faint gray outline mapping to image
                                        borderTop: 'none',
                                        borderBottomLeftRadius: '30px',
                                        borderBottomRightRadius: '30px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#1a1a1a',
                                        fontWeight: '700',
                                        fontSize: '24px'
                                    }}>
                                        0{index + 1}
                                    </div>

                                    {/* The Central Illustration/Image Wrapper from Screenshot */}
                                    <div style={{
                                        width: '100%',
                                        height: '220px',
                                        backgroundColor: '#fff',
                                        borderRadius: '16px',
                                        marginTop: '10px',
                                        marginBottom: '35px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: `linear-gradient(135deg, ${item.gradientStart} 0%, ${item.gradientEnd} 100%)`,
                                    }}>
                                        {/* Pure CSS Placeholder Graphic mimicking native app mockups to gracefully avoid missing-asset build crashes */}
                                        <div style={{
                                            width: '60%',
                                            height: '60%',
                                            backgroundColor: '#E85D04',
                                            borderRadius: '12px',
                                            boxShadow: '0 20px 40px rgba(232, 93, 4, 0.3)',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: '15px'
                                        }}>
                                            <div style={{ width: '30%', height: '8px', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '4px', marginBottom: '15px' }} />
                                            <div style={{ width: '100%', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '6px', marginBottom: '10px' }} />
                                            <div style={{ width: '100%', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '6px' }} />

                                            {/* decorative circle badge overlaid */}
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '4px solid #E85D04', backgroundColor: '#fff', position: 'absolute', top: '-15px', right: '-15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <div style={{ width: '12px', height: '12px', backgroundColor: '#E85D04', borderRadius: '50%' }} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Lower Text Layout from Screenshot */}
                                    <div>
                                        <h3 className="xb-item--title" style={{ fontSize: '26px', color: '#1a1a1a', marginBottom: '12px', letterSpacing: '-0.5px' }}>
                                            {item.title}
                                        </h3>
                                        <span className="xb-item--content" style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', display: 'block' }}>
                                            {item.desc}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliverablesList;

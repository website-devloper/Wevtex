'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface PainPoint {
    id: string;
    title: string;
    desc: string;
    iconPath: string;
}

const painPoints: PainPoint[] = [
    {
        id: 'data-entry',
        title: 'Manual Data Entry',
        desc: 'Hours wasted daily copying information between spreadsheets, CRMs, and inboxes — a direct cost centre that compounds every single week.',
        iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
    },
    {
        id: 'slow-followup',
        title: 'Slow Follow-Up',
        desc: 'Leads go cold in 5 minutes. If your response time is measured in hours, you are handing revenue directly to your competitor.',
        iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
        id: 'content-pipeline',
        title: 'No Content Pipeline',
        desc: 'Inconsistent posting kills your reach. Without an automated content engine, your brand visibility degrades in the algorithm daily.',
        iconPath: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
    },
    {
        id: 'disconnected-tools',
        title: 'Disconnected Tools',
        desc: 'Information lost between apps. Your CRM does not talk to your invoicing, which does not talk to your email — a fractured operation.',
        iconPath: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
    }
];

const AIProblemGrid: React.FC = () => {
    return (
        <section className="problem-section pt-130 pb-130" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-lg-8 text-center">
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
                                    The Hidden Cost
                                </span>
                            </div>
                        </Fade>
                        <Fade direction="up" triggerOnce duration={1000} delay={9}>
                            <div>
                                <h2 className="title sec-title" style={{ color: 'var(--color-charcoal, #1a1a1a)', fontSize: '48px', letterSpacing: '-1.5px' }}>
                                    Every hour spent on repetitive tasks is an hour not spent on growth.
                                </h2>
                            </div>
                        </Fade>
                        <Fade direction="up" triggerOnce duration={1200} delay={9}>
                            <div>
                                <span className="content" style={{ color: '#666', fontSize: '18px', marginTop: '15px', display: 'block' }}>
                                    These operational bottlenecks are silently draining your revenue pipeline every single day.
                                </span>
                            </div>
                        </Fade>
                    </div>
                </div>

                {/* 2x2 Grid */}
                <div className="row mt-none-30">
                    {painPoints.map((point, idx) => (
                        <div className="col-lg-6 col-md-6 mt-30" key={point.id}>
                            <Fade direction="up" triggerOnce duration={800} delay={idx * 100}>
                                <div
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '12px',
                                        padding: '40px 35px',
                                        border: '1px solid #EBECEF',
                                        borderLeft: '3px solid var(--color-burnt-orange, #E85D04)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0px 10px 60px 0px rgba(0, 0, 0, 0.05)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ marginBottom: '20px' }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-burnt-orange, #E85D04)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={point.iconPath} />
                                        </svg>
                                    </div>
                                    <h3 className="xb-item--title" style={{ marginBottom: '15px' }}>{point.title}</h3>
                                    <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>{point.desc}</p>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIProblemGrid;

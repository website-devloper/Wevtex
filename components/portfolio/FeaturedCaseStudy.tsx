'use client';

import React from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

interface StatCard {
    value: string;
    label: string;
}

const stats: StatCard[] = [
    { value: '4hrs', label: 'Saved Daily' },
    { value: '100%', label: 'Offline Uptime' },
    { value: '2x', label: 'Faster Operations' },
];

const FeaturedCaseStudy: React.FC = () => {
    return (
        <section className="featured-case pt-130 pb-130" style={{ backgroundColor: '#f4f5f8' }}>
            <div className="container">
                <div className="row align-items-center" style={{ gap: '40px 0' }}>
                    {/* Left: Visual Mockup */}
                    <div className="col-lg-6">
                        <Fade direction="left" triggerOnce duration={800}>
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    aspectRatio: '4/3',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    border: '1px solid #EBECEF',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(28,28,30,0.2)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <p style={{ color: 'rgba(28,28,30,0.4)', fontSize: '14px', marginTop: '15px', fontWeight: 600 }}>FinanceDesk POS Dashboard</p>
                                    </div>
                                </div>
                                {/* Orange accent corner */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-12px',
                                    right: '-12px',
                                    width: '80px',
                                    height: '80px',
                                    border: '3px solid #E85D04',
                                    borderRadius: '0 0 20px 0',
                                    borderTop: 'none',
                                    borderLeft: 'none',
                                    opacity: 0.6
                                }} />
                            </div>
                        </Fade>
                    </div>

                    {/* Right: Story */}
                    <div className="col-lg-6">
                        <Fade direction="right" triggerOnce duration={800}>
                            <div style={{ paddingLeft: '20px' }}>
                                <span style={{
                                    color: 'var(--color-burnt-orange, #E85D04)',
                                    fontWeight: 700,
                                    fontSize: '14px',
                                    letterSpacing: '2px',
                                    textTransform: 'uppercase',
                                    display: 'inline-block',
                                    marginBottom: '20px'
                                }}>
                                    Featured Project
                                </span>

                                <h2 style={{ fontSize: '52px', fontWeight: 800, color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1px', marginBottom: '15px', lineHeight: 1.15 }}>
                                    FinanceDesk POS
                                </h2>

                                <span style={{
                                    display: 'inline-block',
                                    background: 'rgba(232, 93, 4, 0.08)',
                                    color: '#E85D04',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    padding: '5px 14px',
                                    borderRadius: '20px',
                                    marginBottom: '30px'
                                }}>Desktop Application</span>

                                <p style={{ color: 'rgba(28, 28, 30, 0.65)', fontSize: '18px', lineHeight: '1.7', marginBottom: '12px' }}>
                                    <strong style={{ color: 'var(--color-charcoal, #1a1a1a)' }}>Challenge:</strong> A retail chain spending 4+ hours daily on manual inventory, invoicing, and stock management with no offline-capable system.
                                </p>
                                <p style={{ color: 'rgba(28, 28, 30, 0.65)', fontSize: '18px', lineHeight: '1.7', marginBottom: '45px' }}>
                                    <strong style={{ color: 'var(--color-charcoal, #1a1a1a)' }}>Solution:</strong> Custom Electron desktop POS application with barcode scanning, receipt printing, real-time stock management, and full offline capability.
                                </p>

                                {/* Stat Cards */}
                                <div style={{ display: 'flex', gap: '20px', marginBottom: '45px', flexWrap: 'wrap' }}>
                                    {stats.map((s) => (
                                        <div key={s.label} style={{
                                            background: '#ffffff',
                                            border: '1px solid #EBECEF',
                                            borderRadius: '16px',
                                            padding: '24px 22px',
                                            textAlign: 'center',
                                            flex: '1 1 120px',
                                            minWidth: '120px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                                        }}>
                                            <span style={{ fontSize: '42px', fontWeight: 800, color: '#E85D04', lineHeight: 1, display: 'block', letterSpacing: '-1px' }}>{s.value}</span>
                                            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-charcoal, #1a1a1a)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '12px', display: 'block' }}>{s.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/portfolio" className="thm-btn thm-btn--fill_icon thm-btn--white_icon">
                                    <div className="xb-item--hidden">
                                        <span className="xb-item--hidden-text">View Full Case Study</span>
                                    </div>
                                    <div className="xb-item--holder">
                                        <span className="xb-item--text">View Full Case Study</span>
                                        <div className="xb-item--icon">
                                            <i className="far fa-long-arrow-right"></i>
                                        </div>
                                        <span className="xb-item--text">View Full Case Study</span>
                                    </div>
                                </Link>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;

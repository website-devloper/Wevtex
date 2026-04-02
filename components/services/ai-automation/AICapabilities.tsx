'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface Capability {
    id: string;
    title: string;
    desc: string;
    iconPath: string;
}

const capabilities: Capability[] = [
    {
        id: 'lead-crm',
        title: 'Lead Capture & CRM Sync',
        desc: 'Automatically capture, qualify, and push leads into your CRM the instant they submit a form.',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
        id: 'email-followup',
        title: 'Email Follow-Up Sequences',
        desc: 'Trigger personalized follow-up emails based on user actions — zero manual intervention required.',
        iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
        id: 'social-pipeline',
        title: 'Social Media Content Pipeline',
        desc: 'Auto-generate, schedule, and publish content across all platforms on autopilot.',
        iconPath: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
    },
    {
        id: 'invoice-payment',
        title: 'Invoice & Payment Notifications',
        desc: 'Automated invoicing, payment reminders, and receipt confirmations — cash flow on autopilot.',
        iconPath: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z'
    },
    {
        id: 'onboarding',
        title: 'Customer Onboarding Flows',
        desc: 'Welcome sequences, access provisioning, and training drips — triggered the instant a deal closes.',
        iconPath: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
    },
    {
        id: 'reporting',
        title: 'Reporting & Dashboards',
        desc: 'Real-time KPI dashboards auto-populated from your live data sources. No more manual spreadsheets.',
        iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    },
    {
        id: 'ai-content',
        title: 'AI Content Generation',
        desc: 'GPT-4 powered copy generation for blogs, emails, ads, and social media — at enterprise scale.',
        iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
        id: 'whatsapp',
        title: 'WhatsApp Business Automation',
        desc: 'Automated customer responses, order updates, and appointment reminders via WhatsApp API.',
        iconPath: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    }
];

const AICapabilities: React.FC = () => {
    return (
        <section className="capabilities-section pt-130 pb-130" style={{ backgroundColor: '#f4f5f8' }}>
            <div className="container">
                <div className="row justify-content-center mb-90">
                    <div className="col-lg-8 text-center">
                        <Fade direction="down" triggerOnce duration={800}>
                            <span style={{
                                color: 'var(--color-burnt-orange, #E85D04)',
                                fontWeight: 700,
                                fontSize: '14px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                marginBottom: '20px'
                            }}>
                                Automation Capabilities
                            </span>
                            <h2 className="title" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px' }}>
                                Everything we can automate for your business.
                            </h2>
                            <p style={{ color: '#666', fontSize: '18px', marginTop: '20px' }}>
                                From lead capture to content generation — we build the systems that let your business scale without scaling your headcount.
                            </p>
                        </Fade>
                    </div>
                </div>

                <div className="row mt-none-30">
                    {capabilities.map((cap, idx) => (
                        <div key={cap.id} className="col-lg-3 col-md-4 col-sm-6 mt-30">
                            <Fade direction="up" triggerOnce duration={800} delay={idx * 80} style={{ height: '100%' }}>
                                <div
                                    style={{
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #EBECEF',
                                        borderRadius: '12px',
                                        padding: '35px 25px',
                                        textAlign: 'left',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-burnt-orange, #E85D04)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0px 10px 60px 0px rgba(0, 0, 0, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#EBECEF';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ marginBottom: '20px', width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(232, 93, 4, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-burnt-orange, #E85D04)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={cap.iconPath} />
                                        </svg>
                                    </div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-charcoal, #1a1a1a)', marginBottom: '12px' }}>{cap.title}</h4>
                                    <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{cap.desc}</p>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AICapabilities;

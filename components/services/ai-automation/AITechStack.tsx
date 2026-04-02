'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface TechItem {
    id: string;
    name: string;
    desc: string;
    svg: React.ReactNode;
}

const techStack: TechItem[] = [
    {
        id: 'n8n',
        name: 'n8n',
        desc: 'Open-source workflow automation engine.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="8" fill="#EA4B71" />
                <path d="M14 24h20M24 14v20" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </svg>
        )
    },
    {
        id: 'make',
        name: 'Make (Integromat)',
        desc: 'Visual automation builder for complex flows.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="#6D00CC" />
                <circle cx="24" cy="24" r="8" fill="#fff" />
                <circle cx="24" cy="24" r="4" fill="#6D00CC" />
            </svg>
        )
    },
    {
        id: 'openai',
        name: 'OpenAI GPT-4',
        desc: 'AI text and content generation at scale.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="#000" />
                <path d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" fill="#10A37F" />
                <circle cx="24" cy="24" r="3" fill="#10A37F" />
            </svg>
        )
    },
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        desc: 'AI voice generation for dynamic audio.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="8" fill="#000" />
                <rect x="16" y="12" width="4" height="24" rx="2" fill="#fff" />
                <rect x="28" y="12" width="4" height="24" rx="2" fill="#fff" />
            </svg>
        )
    },
    {
        id: 'airtable',
        name: 'Airtable',
        desc: 'Flexible database for automation data layers.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <path d="M6 16l18-8 18 8-18 8-18-8z" fill="#FCB400" />
                <path d="M24 28v12l18-8V20l-18 8z" fill="#18BFFF" />
                <path d="M24 28v12L6 32V20l18 8z" fill="#F82B60" />
            </svg>
        )
    },
    {
        id: 'whatsapp-api',
        name: 'WhatsApp Business API',
        desc: 'Automated messaging for customer comms.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="#25D366" />
                <path d="M34 14c-2.7-2.7-6.2-4.2-10-4.2-7.8 0-14.2 6.4-14.2 14.2 0 2.5.7 4.9 1.9 7.1L10 38l7.1-1.9c2.1 1.1 4.4 1.8 6.9 1.8 7.8 0 14.2-6.4 14.2-14.2 0-3.8-1.5-7.3-4.2-10z" fill="#fff" />
                <path d="M24.1 33.2c-2.1 0-4.2-.6-6-1.6l-.4-.3-4.3 1.1 1.1-4.2-.3-.4c-1.2-1.9-1.8-4.1-1.8-6.3 0-6.6 5.4-11.9 11.9-11.9 3.2 0 6.1 1.2 8.4 3.5s3.5 5.3 3.5 8.4c-.2 6.5-5.5 11.7-12.1 11.7z" fill="#25D366" />
            </svg>
        )
    },
    {
        id: 'sheets',
        name: 'Google Sheets',
        desc: 'Data storage and automated reporting.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <path d="M10 6h20l10 10v26c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z" fill="#0F9D58" />
                <path d="M30 6l10 10H32c-1.1 0-2-.9-2-2V6z" fill="#87CEAC" />
                <rect x="14" y="22" width="20" height="16" rx="1" fill="#fff" />
                <line x1="14" y1="28" x2="34" y2="28" stroke="#0F9D58" strokeWidth="1" />
                <line x1="14" y1="34" x2="34" y2="34" stroke="#0F9D58" strokeWidth="1" />
                <line x1="24" y1="22" x2="24" y2="38" stroke="#0F9D58" strokeWidth="1" />
            </svg>
        )
    },
    {
        id: 'zapier',
        name: 'Zapier',
        desc: 'Simple integration layer for 5000+ apps.',
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="#FF4A00" />
                <path d="M24 14v20M14 24h20M17.17 17.17l13.66 13.66M30.83 17.17L17.17 30.83" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
        )
    }
];

const AITechStack: React.FC = () => {
    return (
        <section className="tech-stack-section pt-130 pb-130" style={{ backgroundColor: '#ffffff' }}>
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
                                Technology
                            </span>
                            <h2 className="title" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px' }}>
                                The Wevtex AI Stack.
                            </h2>
                            <p style={{ color: '#666', fontSize: '18px', marginTop: '20px' }}>
                                We select every tool based on reliability, scalability, and integration depth — zero vendor lock-in.
                            </p>
                        </Fade>
                    </div>
                </div>

                <div className="row mt-none-30">
                    {techStack.map((tech, idx) => (
                        <div key={tech.id} className="col-lg-3 col-md-4 col-sm-6 mt-30">
                            <Fade direction="up" triggerOnce duration={800} delay={idx * 100} style={{ height: '100%' }}>
                                <div
                                    style={{
                                        backgroundColor: '#f4f5f8',
                                        border: '1px solid #EBECEF',
                                        borderRadius: '12px',
                                        padding: '40px 30px',
                                        textAlign: 'left',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#1a1a1a';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#EBECEF';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ marginBottom: '20px' }}>{tech.svg}</div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-charcoal, #1a1a1a)', marginBottom: '10px' }}>{tech.name}</h4>
                                    <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{tech.desc}</p>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AITechStack;

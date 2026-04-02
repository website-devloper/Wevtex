'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface PipelineStep {
    id: string;
    title: string;
    desc: string;
    iconPath: string;
}

const pipelineSteps: PipelineStep[] = [
    {
        id: 'trigger',
        title: 'Trigger',
        desc: 'An event fires — a form is submitted, an email arrives, or a schedule activates.',
        iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
        id: 'filter',
        title: 'Filter',
        desc: 'Conditions are evaluated — only qualified data passes through to the next stage.',
        iconPath: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
    },
    {
        id: 'process',
        title: 'Process',
        desc: 'AI analyses, transforms, and enriches the data using GPT-4 or custom logic.',
        iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
        id: 'action',
        title: 'Action',
        desc: 'The system executes — sends an email, updates a CRM, posts content, or generates a report.',
        iconPath: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
        id: 'notify',
        title: 'Notify',
        desc: 'You receive a confirmation — via Slack, email, or WhatsApp — that the task completed flawlessly.',
        iconPath: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
    }
];

const AIPipeline: React.FC = () => {
    return (
        <section id="ai-pipeline" className="pipeline-section pt-130 pb-130" style={{ backgroundColor: '#ffffff' }}>
            <style>{`
                .pipe-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 0;
                    position: relative;
                }
                .pipe-step {
                    text-align: center;
                    padding: 0 15px;
                    position: relative;
                }
                .pipe-step:not(:last-child)::after {
                    content: '';
                    position: absolute;
                    top: 35px;
                    right: -2px;
                    width: 40px;
                    height: 0;
                    border-top: 2px dashed #E85D04;
                    opacity: 0.4;
                    z-index: 1;
                }
                .pipe-icon-wrap {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: rgba(232, 93, 4, 0.06);
                    border: 2px solid rgba(232, 93, 4, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 25px;
                    transition: all 0.3s ease;
                }
                .pipe-step:hover .pipe-icon-wrap {
                    background: rgba(232, 93, 4, 0.12);
                    border-color: #E85D04;
                    transform: scale(1.08);
                }
                .pipe-number {
                    position: absolute;
                    top: -8px;
                    right: calc(50% - 45px);
                    width: 24px;
                    height: 24px;
                    background: #E85D04;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                    font-weight: 700;
                    color: #ffffff;
                }

                @media (max-width: 991px) {
                    .pipe-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .pipe-step:not(:last-child)::after {
                        top: auto;
                        bottom: -22px;
                        left: 50%;
                        right: auto;
                        width: 0;
                        height: 30px;
                        border-top: none;
                        border-left: 2px dashed #E85D04;
                    }
                }
            `}</style>

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
                                How It Works
                            </span>
                            <h2 className="title" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px' }}>
                                From trigger to result — fully automated.
                            </h2>
                        </Fade>
                    </div>
                </div>

                <div className="pipe-grid">
                    {pipelineSteps.map((step, idx) => (
                        <Fade key={step.id} direction="up" triggerOnce duration={800} delay={idx * 120}>
                            <div className="pipe-step">
                                <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <div className="pipe-icon-wrap">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-burnt-orange, #E85D04)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d={step.iconPath} />
                                        </svg>
                                    </div>
                                    <div className="pipe-number">0{idx + 1}</div>
                                </div>
                                <h4 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-charcoal, #1a1a1a)', marginBottom: '12px' }}>{step.title}</h4>
                                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                            </div>
                        </Fade>
                    ))}
                </div>

                <Fade direction="up" triggerOnce duration={800} delay={600}>
                    <div className="text-center mt-80">
                        <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-0.5px', margin: 0 }}>
                            Your business runs even while you sleep.
                        </p>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default AIPipeline;

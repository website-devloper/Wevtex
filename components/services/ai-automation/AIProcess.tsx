'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface Phase {
    id: string;
    phase: string;
    title: string;
    desc: string;
    week: string;
    iconPath: string;
}

const phases: Phase[] = [
    {
        id: 'audit',
        phase: 'Phase 1',
        title: 'Audit',
        desc: 'We map your current workflow and identify every automation opportunity — from lead capture to invoicing.',
        week: 'Week 1',
        iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
    },
    {
        id: 'design',
        phase: 'Phase 2',
        title: 'Design',
        desc: 'We architect the automation flow, select the right tools, and map every data connection point.',
        week: 'Week 1–2',
        iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
    },
    {
        id: 'build',
        phase: 'Phase 3',
        title: 'Build',
        desc: 'We build and connect all automations in n8n or Make — every trigger, filter, and action wired up.',
        week: 'Week 2–3',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
        id: 'test',
        phase: 'Phase 4',
        title: 'Test',
        desc: 'We run every scenario and edge case until it is bulletproof — zero failed automations in production.',
        week: 'Week 3',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
        id: 'launch',
        phase: 'Phase 5',
        title: 'Launch & Train',
        desc: 'We deploy everything live and train your team to monitor, manage, and scale the automations independently.',
        week: 'Week 4',
        iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    }
];

const AIProcess: React.FC = () => {
    return (
        <section className="ai-process-section pt-130 pb-130" style={{ backgroundColor: '#f4f5f8' }}>
            <style>{`
                .vt-timeline {
                    position: relative;
                    padding-left: 60px;
                }
                .vt-timeline::before {
                    content: '';
                    position: absolute;
                    left: 24px;
                    top: 0;
                    bottom: 0;
                    width: 0;
                    border-left: 2px dashed #dedede;
                }
                .vt-item {
                    position: relative;
                    padding-bottom: 50px;
                }
                .vt-item:last-child {
                    padding-bottom: 0;
                }
                .vt-dot {
                    position: absolute;
                    left: -48px;
                    top: 5px;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: #ffffff;
                    border: 2px solid #E85D04;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.06);
                }
                .vt-week {
                    display: inline-block;
                    background: rgba(232, 93, 4, 0.08);
                    color: #E85D04;
                    font-size: 12px;
                    font-weight: 700;
                    padding: 4px 12px;
                    border-radius: 20px;
                    margin-bottom: 10px;
                }
                .vt-card {
                    background: #ffffff;
                    border: 1px solid #EBECEF;
                    border-radius: 12px;
                    padding: 30px 35px;
                    transition: all 0.3s ease;
                }
                .vt-card:hover {
                    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.05);
                    transform: translateX(5px);
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
                                Our Process
                            </span>
                            <h2 className="title" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px' }}>
                                From audit to autopilot in 4 weeks.
                            </h2>
                            <p style={{ color: '#666', fontSize: '18px', marginTop: '20px' }}>
                                A structured, repeatable process that ensures zero guesswork and maximum impact from day one.
                            </p>
                        </Fade>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="vt-timeline">
                            {phases.map((phase, idx) => (
                                <Fade key={phase.id} direction="left" triggerOnce duration={800} delay={idx * 120}>
                                    <div className="vt-item">
                                        <div className="vt-dot">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d={phase.iconPath} />
                                            </svg>
                                        </div>
                                        <div className="vt-card">
                                            <div className="vt-week">{phase.week}</div>
                                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                                                <span style={{ color: '#E85D04', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{phase.phase}</span>
                                                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-charcoal, #1a1a1a)', margin: 0 }}>{phase.title}</h3>
                                            </div>
                                            <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>{phase.desc}</p>
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIProcess;

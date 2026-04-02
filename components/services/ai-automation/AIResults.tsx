'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface CaseStudy {
    id: string;
    industry: string;
    challenge: string;
    solution: string;
    metric: string;
    metricLabel: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 'agency',
        industry: 'Marketing Agency',
        challenge: 'Content team spending 25+ hours/week on manual social media scheduling, caption writing, and analytics reporting.',
        solution: 'Automated content pipeline using GPT-4 generation, n8n scheduling, and Airtable tracking.',
        metric: '20hrs',
        metricLabel: 'Saved Per Week'
    },
    {
        id: 'ecom',
        industry: 'E-Commerce Store',
        challenge: 'Manual order notifications, delayed follow-ups, and zero post-purchase engagement driving low repeat rates.',
        solution: 'Automated order confirmations, WhatsApp follow-ups, and review request sequences via Make.',
        metric: '40%',
        metricLabel: 'Repeat Purchase Rate'
    },
    {
        id: 'consultant',
        industry: 'B2B Consultant',
        challenge: 'Leads captured via website forms were manually copied to spreadsheets — follow-up delayed by hours.',
        solution: 'Instant lead capture to CRM with automated qualification scoring and 60-second email follow-up.',
        metric: '0',
        metricLabel: 'Missed Leads'
    }
];

const AIResults: React.FC = () => {
    return (
        <section className="ai-results pt-130 pb-130" style={{ backgroundColor: '#f4f5f8' }}>
            <div className="container">
                <div className="row justify-content-center mb-60">
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
                                Proven Impact
                            </span>
                            <h2 className="title" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px' }}>
                                Real Results from Real Automations.
                            </h2>
                        </Fade>
                    </div>
                </div>

                <div className="row mt-none-30">
                    {caseStudies.map((study, idx) => (
                        <div className="col-lg-4 col-md-6 mt-30" key={study.id}>
                            <Fade direction="up" triggerOnce duration={800} delay={idx * 120}>
                                <div className="service-box" style={{ height: '100%' }}>
                                    <div className="service-item" style={{ height: '100%' }}>
                                        <div className="xb-item--holder" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '35px 30px' }}>
                                            {/* Metric */}
                                            <div style={{ marginBottom: '25px' }}>
                                                <span style={{ fontSize: '52px', fontWeight: 700, color: 'var(--color-burnt-orange, #E85D04)', lineHeight: 1, letterSpacing: '-2px' }}>{study.metric}</span>
                                                <span style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '8px' }}>{study.metricLabel}</span>
                                            </div>

                                            {/* Industry Badge */}
                                            <span style={{
                                                display: 'inline-block',
                                                background: 'rgba(232, 93, 4, 0.08)',
                                                color: '#E85D04',
                                                fontSize: '12px',
                                                fontWeight: 700,
                                                padding: '5px 14px',
                                                borderRadius: '20px',
                                                marginBottom: '20px',
                                                width: 'fit-content'
                                            }}>{study.industry}</span>

                                            {/* Challenge & Solution */}
                                            <div style={{ flexGrow: 1 }}>
                                                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', marginBottom: '15px' }}>
                                                    <strong style={{ color: 'var(--color-charcoal, #1a1a1a)' }}>Challenge:</strong> {study.challenge}
                                                </p>
                                                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                                                    <strong style={{ color: 'var(--color-charcoal, #1a1a1a)' }}>Solution:</strong> {study.solution}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIResults;

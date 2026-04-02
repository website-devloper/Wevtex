'use client';

import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

interface FaqItemData {
    id: string;
    question: string;
    answer: string;
}

const faqList: FaqItemData[] = [
    {
        id: '1',
        question: 'Do I need technical knowledge to use automations?',
        answer: 'Absolutely not. We build and configure everything for you. Once deployed, you interact with your automations through simple dashboards, Slack notifications, or email summaries. We also provide training documentation for your team.'
    },
    {
        id: '2',
        question: 'What happens if an automation breaks?',
        answer: 'Every automation we build includes error handling and retry logic. If something fails, you are notified immediately and our monitoring systems auto-retry the workflow. During your support period, we handle all debugging and recovery directly.'
    },
    {
        id: '3',
        question: 'Can you automate WhatsApp for my business?',
        answer: 'Yes. We integrate with the official WhatsApp Business API to automate order confirmations, appointment reminders, customer support responses, and follow-up sequences — all within WhatsApp compliance guidelines.'
    },
    {
        id: '4',
        question: 'How long before I see results?',
        answer: 'Most clients see measurable time savings within the first week of deployment. The full ROI typically materializes within 3–4 weeks as all automations stabilize and your team fully transitions away from manual processes.'
    },
    {
        id: '5',
        question: 'Do you connect to my existing tools?',
        answer: 'Yes. We integrate with 5000+ applications including Salesforce, HubSpot, Google Workspace, Slack, Shopify, Stripe, Airtable, Notion, and virtually any tool with an API. If it has an API, we can connect it.'
    },
    {
        id: '6',
        question: 'Is my data safe?',
        answer: 'Security is foundational to our architecture. All data flows through encrypted connections (TLS 1.3). We use self-hosted n8n instances when required for sensitive workflows, and we never store your credentials — they are encrypted at rest in the automation engine.'
    }
];

const AIFaq: React.FC = () => {
    const [open, setOpen] = useState<string>('1');

    const toggle = (id: string) => {
        setOpen(open === id ? '' : id);
    };

    return (
        <section className="faq-section pt-130 pb-130" style={{ backgroundColor: '#f4f5f8' }}>
            <div className="container">
                <div className="sec-title text-center mb-60">
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
                            Frequently Asked
                        </span>
                        <h2 className="title" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px' }}>
                            Common questions about AI Automation.
                        </h2>
                    </Fade>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {faqList.map((faq, idx) => (
                            <Fade key={faq.id} direction="up" triggerOnce duration={600} delay={idx * 80}>
                                <div
                                    style={{
                                        backgroundColor: '#ffffff',
                                        borderRadius: '12px',
                                        marginBottom: '12px',
                                        border: `1px solid ${open === faq.id ? 'rgba(232, 93, 4, 0.3)' : '#EBECEF'}`,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <button
                                        onClick={() => toggle(faq.id)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '22px 30px',
                                            border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            gap: '20px'
                                        }}
                                    >
                                        <span style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-charcoal, #1a1a1a)' }}>{faq.question}</span>
                                        <span style={{
                                            fontSize: '22px',
                                            fontWeight: 300,
                                            color: open === faq.id ? '#E85D04' : '#999',
                                            flexShrink: 0,
                                            transition: 'transform 0.3s ease',
                                            transform: open === faq.id ? 'rotate(45deg)' : 'rotate(0deg)'
                                        }}>+</span>
                                    </button>
                                    <div style={{
                                        maxHeight: open === faq.id ? '300px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.35s ease, padding 0.35s ease',
                                        padding: open === faq.id ? '0 30px 22px 30px' : '0 30px'
                                    }}>
                                        <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>{faq.answer}</p>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIFaq;

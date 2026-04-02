'use client';

import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";

interface FaqItemData {
    id: string;
    question: string;
    answer: string;
}

const faqList: FaqItemData[] = [
    {
        id: '1',
        question: 'Do I need to provide content and images?',
        answer: 'Yes, typically clients provide the core text and specific brand assets. However, our team includes professional copyrighters and UI designers who can structure, refine, or entirely generate professional imagery and SEO-optimized copy for your project.'
    },
    {
        id: '2',
        question: 'Can you redesign my existing website?',
        answer: 'Absolutely. We specialize in tearing down underperforming legacy websites and rebuilding them from scratch using Next.js. We ensure all your existing SEO equity (URLs, metadata, backlinks) is safely migrated during the digital transformation.'
    },
    {
        id: '3',
        question: 'Will my website be on the first page of Google?',
        answer: 'We build your website with a perfect technical SEO foundation (90+ PageSpeed scores, semantic HTML, schema logic). While technical perfection is a massive ranking factor, reaching page #1 for competitive keywords requires an ongoing Content and Backlink strategy.'
    },
    {
        id: '4',
        question: 'What happens after the 30 days of support?',
        answer: 'After the complimentary 30-day hyper-care period, you can choose to manage the site internally, or you can retain us on a monthly SLA (Service Level Agreement) to handle continuous updates, security patches, and performance monitoring.'
    },
    {
        id: '5',
        question: 'Can I update the website myself after launch?',
        answer: 'Yes. We integrate industry-leading Headless CMS platforms that give you a beautiful, visual dashboard to update your blogs, case studies, and text without touching a single line of code.'
    },
    {
        id: '6',
        question: 'Do you build e-commerce websites?',
        answer: 'Yes, we build extremely high-converting, lightning-fast headless e-commerce architectures utilizing Shopify Plus or Medusa.js as the backend engine, paired with a custom Next.js frontend for maximum performance.'
    }
];

const WebDevFaq: React.FC = () => {
    const [open, setOpen] = useState<string>('1');

    const toggle = (id: string) => {
        setOpen(open === id ? '' : id);
    };

    return (
        <section className="wevtex-faq-section pt-130 pb-130" style={{ backgroundColor: '#f4f5f8' }}>
            <style>{`
        .wevtex-faq-item {
          border-bottom: 1px solid rgba(28,28,30,0.08);
          border-left: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: transparent;
        }
        
        .wevtex-faq-item:hover {
          border-left: 3px solid #E85D04;
          background-color: rgba(232, 93, 4, 0.02);
        }

        .wevtex-faq-item.active {
          border-left: 3px solid #E85D04;
          background-color: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border-bottom-color: transparent;
        }

        .wevtex-faq-answer {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          opacity: 0;
          max-height: 0;
        }

        .wevtex-faq-item.active .wevtex-faq-answer {
          opacity: 1;
          max-height: 400px;
        }

        .wevtex-faq-icon {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: #E85D04;
        }

        .wevtex-faq-item.active .wevtex-faq-icon {
          transform: rotate(180deg);
        }
      `}</style>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="sec-title text-center mb-60">
                    <Fade direction="down" triggerOnce duration={800}>
                        <span
                            style={{
                                color: '#E85D04',
                                fontWeight: 700,
                                fontSize: '14px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'inline-block',
                                marginBottom: '20px',
                                padding: '6px 20px',
                            }}
                        >
                            FAQ's
                        </span>
                        <h2 className="title" style={{ color: '#1a1a1a', letterSpacing: '-1.5px', fontSize: '48px' }}>
                            Everything you need to know.
                        </h2>
                    </Fade>
                </div>

                <div className="wevtex-faq-wrapper" style={{ borderTop: '1px solid rgba(28,28,30,0.08)' }}>
                    <Fade direction="up" triggerOnce duration={800} cascade damping={0.1}>
                        {faqList.map((item) => {
                            const isActive = open === item.id;
                            const formattedId = item.id.padStart(2, '0');

                            return (
                                <div
                                    key={item.id}
                                    className={`wevtex-faq-item ${isActive ? 'active' : ''}`}
                                    onClick={() => toggle(item.id)}
                                >
                                    <div style={{ padding: '30px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                            <span style={{ color: '#E85D04', fontSize: '15px', fontWeight: 800 }}>
                                                {formattedId}
                                            </span>
                                            <h3 style={{ margin: 0, fontSize: '20px', color: '#1a1a1a' }}>
                                                {item.question}
                                            </h3>
                                        </div>

                                        <div className="wevtex-faq-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            {isActive ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                            )}
                                        </div>

                                    </div>

                                    <div className="wevtex-faq-answer">
                                        <p style={{ padding: '0 40px 30px 75px', margin: 0, color: '#666', fontSize: '16px', fontWeight: 500, lineHeight: 1.6 }}>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default WebDevFaq;

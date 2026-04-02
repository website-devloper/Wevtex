'use client';

import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";

interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

const faqList: FaqItemData[] = [
  { id: "1", question: "How long does a website take?", answer: "2 to 4 weeks depending on complexity." },
  { id: "2", question: "Do you work with clients outside Morocco?", answer: "Yes, we work with clients globally (US, Europe, MENA)." },
  { id: "3", question: "What is your payment process?", answer: "Typically 50% upfront, 50% upon completion, but we offer flexibility." },
  { id: "4", question: "Do you offer ongoing support?", answer: "Yes, we have monthly retainer packages for continuous monitoring and updates." },
  { id: "5", question: "Can you automate my existing business?", answer: "Absolutely. We seamlessly integrate AI and no-code tools into your current workflows." },
  { id: "6", question: "What technologies do you use?", answer: "Next.js, React, Node.js natively, alongside powerful tools like Webflow or Shopify when requested." },
  { id: "7", question: "Do you offer free consultations?", answer: "Yes, we provide a 30-minute discovery call free of charge to analyze your needs." },
  { id: "8", question: "Is SEO included?", answer: "Basic technical SEO is baked into every build. We also provide full SEO marketing as an ongoing service." },
];

const FaqSection: React.FC = () => {
  const [open, setOpen] = useState<string>('1');

  const toggle = (id: string) => {
    setOpen(open === id ? '' : id);
  };

  return (
    <section className="wevtex-faq-section pt-130 pb-130" style={{ backgroundColor: 'var(--color-soft-white)' }}>
      <style>{`
        .wevtex-faq-item {
          border-bottom: 1px solid rgba(28,28,30,0.08);
          border-left: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          background-color: transparent;
        }
        
        /* Subtle left accent line and background tint on hover */
        .wevtex-faq-item:hover {
          border-left: 3px solid var(--color-burnt-orange);
          background-color: rgba(232, 93, 4, 0.02);
        }

        /* Active highlight styling */
        .wevtex-faq-item.active {
          border-left: 3px solid var(--color-burnt-orange);
          background-color: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border-bottom-color: transparent; /* Smooth blending */
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
          color: var(--color-burnt-orange);
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
                color: 'var(--color-burnt-orange)',
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
            <h2 className="title" style={{ color: 'var(--color-charcoal)', letterSpacing: '-1.5px', fontSize: '48px', fontWeight: 400 }}>
              Have a question? Look here
            </h2>
          </Fade>
        </div>

        <div className="wevtex-faq-wrapper" style={{ borderTop: '1px solid rgba(28,28,30,0.08)' }}>
          <Fade direction="up" triggerOnce duration={800} cascade damping={0.1}>
            {faqList.map((item) => {
              const isActive = open === item.id;
              // Format ID strictly to "01", "02", etc.
              const formattedId = item.id.padStart(2, '0');

              return (
                <div
                  key={item.id}
                  className={`wevtex-faq-item ${isActive ? 'active' : ''}`}
                  onClick={() => toggle(item.id)}
                >
                  <div style={{ padding: '30px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      <span style={{ color: 'var(--color-burnt-orange)', fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                        {formattedId}
                      </span>
                      <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--color-charcoal)', fontFamily: 'var(--font-heading)' }}>
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
                    <p style={{ padding: '0 40px 30px 75px', margin: 0, color: 'rgba(28,28,30,0.65)', fontSize: '16px', fontWeight: 500, lineHeight: 1.6 }}>
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

export default FaqSection;

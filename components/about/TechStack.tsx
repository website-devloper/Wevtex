import React from 'react';
import brand1 from '@/public/images/brand/logo01.png';
import brand2 from '@/public/images/brand/logo02.png';
import brand3 from '@/public/images/brand/logo03.png';
import brand4 from '@/public/images/brand/logo04.png';
import brand5 from '@/public/images/brand/logo05.png';
import brand6 from '@/public/images/brand/logo06.png';
import brand7 from '@/public/images/brand/logo07.png';
import brand8 from '@/public/images/brand/logo08.png';
import Image from 'next/image';

const TechStack: React.FC = () => {
    return (
        <section className="brand pt-130 pb-130" style={{ backgroundColor: "var(--color-charcoal)" }}>
            <div className="container">
                <div className="sec-title text-center mb-60">
                    <span
                        style={{
                            color: 'var(--color-burnt-orange)',
                            fontWeight: 700,
                            fontSize: '14px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '20px'
                        }}
                    >
                        Our Arsenal
                    </span>
                    <h2 className="title" style={{ color: 'var(--color-soft-white)', letterSpacing: '-1px' }}>
                        The Tech Stack We Use
                    </h2>
                    <p style={{ color: 'rgba(250,250,250,0.7)', fontSize: '18px', maxWidth: '600px', margin: '20px auto 0' }}>
                        We leverage the most power-efficient, scalable, and modern technologies available. Next.js, n8n, OpenAI, and more.
                    </p>
                </div>

                <div className="xb-brand-wrap" style={{ borderTop: '1px solid rgba(250,250,250,0.1)' }}>
                    <div className="xb-brand-item">
                        <div className="xb-brand-single xb-brand-hover">
                            <Image src={brand1} alt="Next.js" />
                        </div>
                        <div className="xb-brand-single xb-brand-hover">
                            <Image src={brand2} alt="React" />
                        </div>
                    </div>

                    <div className="xb-brand-item xb-brand-item--big xb-brand-hover">
                        <Image src={brand3} alt="n8n" />
                    </div>

                    <div className="xb-brand-item">
                        <div className="xb-brand-single xb-brand-hover">
                            <Image src={brand4} alt="OpenAI" />
                        </div>
                        <div className="xb-brand-single xb-brand-hover">
                            <Image src={brand5} alt="TypeScript" />
                        </div>
                    </div>

                    <div className="xb-brand-item xb-brand-item--big xb-brand-hover">
                        <Image src={brand6} alt="AWS" />
                    </div>

                    <div className="xb-brand-item">
                        <div className="xb-brand-single xb-brand-hover">
                            <Image src={brand7} alt="Vercel" />
                        </div>
                        <div className="xb-brand-single xb-brand-hover">
                            <Image src={brand8} alt="TailwindCSS" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;

'use client';

import React from 'react';
import { Fade } from "react-awesome-reveal";

interface TechItem {
    id: string;
    name: string;
    desc: string;
    svg: JSX.Element;
}

const techStack: TechItem[] = [
    {
        id: "nextjs",
        name: "Next.js",
        desc: "Advanced Server-Side Rendering for maximum speed.",
        svg: (
            <svg width="32" height="32" viewBox="0 0 180 180" fill="none">
                <circle cx="90" cy="90" r="90" fill="#000" />
                <path d="M149.508 157.619L69.142 46.5H54.04V133.5H68.455V69.7613L139.898 166.082C143.267 163.606 146.476 160.778 149.508 157.619Z" fill="#fff" />
                <path d="M115.012 54H129.427V133.5H115.012V54Z" fill="#fff" />
            </svg>
        )
    },
    {
        id: "react",
        name: "React",
        desc: "Component-driven architecture for rapid scalability.",
        svg: (
            <svg width="32" height="32" viewBox="-11.5 -10.23174 23 20.46348">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        )
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        desc: "Utility-first design tokens for visual consistency.",
        svg: (
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                <path d="M30 45C33.3333 41.6667 38.3333 40 45 40C55 40 60 45 60 55C60 65 55 70 45 70C38.3333 70 33.3333 66.6667 30 60C26.6667 53.3333 25 48.3333 30 45Z" fill="#38BDF8" />
                <path d="M50 30C53.3333 26.6667 58.3333 25 65 25C75 25 80 30 80 40C80 50 75 55 65 55C58.3333 55 53.3333 51.6667 50 45C46.6667 38.3333 45 33.3333 50 30Z" fill="#38BDF8" />
            </svg>
        )
    },
    {
        id: "figma",
        name: "Figma",
        desc: "Bespoke design prototypes co-created with users.",
        svg: (
            <svg width="32" height="32" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5A9.5 9.5 0 1 1 19 9.5a9.5 9.5 0 0 1 0 19z" fill="#0ACF83" />
                <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#1ABCFE" />
                <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#0ACF83" />
                <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" fill="#F24E1E" />
                <path d="M19 0h9.5A9.5 9.5 0 1 1 19 19V0z" fill="#FF7262" />
            </svg>
        )
    },
    {
        id: "vercel",
        name: "Vercel",
        desc: "Edge network delivery for ultra-fast load times.",
        svg: (
            <svg width="32" height="32" viewBox="0 0 1155 1000" fill="none">
                <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="#000" />
            </svg>
        )
    },
    {
        id: "ga",
        name: "GA4 & Tracking",
        desc: "Data-driven insights to refine conversion metrics.",
        svg: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect x="6" y="24" width="8" height="18" fill="#F9AB00" />
                <rect x="20" y="10" width="8" height="32" fill="#E37400" />
                <rect x="34" y="18" width="8" height="24" fill="#F9AB00" />
            </svg>
        )
    },
    {
        id: "cloudflare",
        name: "Cloudflare",
        desc: "Enterprise-grade security and DDoS protection.",
        svg: (
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
                <path d="M55.7 34.6c.2-1.3.3-2.6.3-4 0-10.4-8.4-18.8-18.8-18.8-8.2 0-15.2 5.2-17.8 12.5-1.5-.9-3.3-1.4-5.2-1.4-6.2 0-11.2 5-11.2 11.2 0 .5.1 1 .2 1.5C1.3 37.1 0 39.8 0 42.8c0 5.6 4.5 10.2 10.2 10.2h43.7c5.6 0 10.2-4.5 10.2-10.2-.1-4.1-2.4-7.6-6-9.2z" fill="#F38020" />
            </svg>
        )
    },
    {
        id: "prismic",
        name: "Headless CMS",
        desc: "Decoupled content for dynamic, high-speed updates.",
        svg: (
            <svg width="32" height="32" viewBox="0 0 512 512" fill="none">
                <circle cx="256" cy="256" r="256" fill="#111827" />
                <path d="M372.5 163.5L168 368M168 368L256 163.5M168 368L344 256" stroke="#fff" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];

const BespokeTechGrid: React.FC = () => {
    return (
        <section className="tech-stack-section pt-130 pb-130" style={{ backgroundColor: '#f4f5f8' }}>
            <div className="container">
                <div className="row justify-content-center mb-90">
                    <div className="col-lg-8 text-center">
                        <Fade direction="down" triggerOnce duration={800}>
                            <h2 className="title" style={{ color: '#1a1a1a', letterSpacing: '-1.5px', fontSize: '48px' }}>
                                The Wevtex Tech Stack.
                            </h2>
                            <p style={{ color: '#666', fontSize: '18px', marginTop: '20px' }}>
                                We select every tool in our pipeline based on three core metrics: speed, scalability, and security.
                            </p>
                        </Fade>
                    </div>
                </div>

                <div className="row mt-none-30">
                    {techStack.map((tech, idx) => (
                        <div key={tech.id} className="col-lg-3 col-md-4 col-sm-6 mt-30">
                            <Fade direction="up" triggerOnce duration={800} delay={idx * 100} style={{ height: '100%' }}>
                                <div
                                    className="tech-card h-100"
                                    style={{
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #EBECEF',
                                        borderRadius: '12px',
                                        padding: '40px 30px',
                                        textAlign: 'left',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
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
                                    <div style={{ marginBottom: '25px', display: 'inline-block' }}>
                                        {tech.svg}
                                    </div>
                                    <h4 style={{ color: '#1a1a1a', fontSize: '20px', marginBottom: '12px', letterSpacing: '-0.3px' }}>
                                        {tech.name}
                                    </h4>
                                    <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                                        {tech.desc}
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BespokeTechGrid;

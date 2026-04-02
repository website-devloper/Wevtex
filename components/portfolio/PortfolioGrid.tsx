'use client';

import React from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

interface Project {
    id: number;
    title: string;
    category: string;
    categoryLabel: string;
    industry: string;
    result: string;
    color: string;
}

const projects: Project[] = [
    { id: 1, title: 'Bloom Studio', category: 'web-development', categoryLabel: 'Web Development', industry: 'Interior Design', result: '200% increase in consultation requests', color: '#2A5F3B' },
    { id: 2, title: 'NexCart', category: 'e-commerce', categoryLabel: 'E-Commerce', industry: 'Fashion & Apparel', result: 'Launch-ready store in 3 weeks', color: '#4A2D6B' },
    { id: 3, title: 'FlowBot Pro', category: 'ai-automation', categoryLabel: 'AI Automation', industry: 'Marketing Agency', result: '18 hours saved per week', color: '#1B3A5C' },
    { id: 4, title: 'Saveur Locale', category: 'web-development', categoryLabel: 'Web Development', industry: 'Food & Restaurant', result: 'Fully booked weekends after launch', color: '#5C3A1B' },
    { id: 5, title: 'ShopEasy', category: 'e-commerce', categoryLabel: 'E-Commerce', industry: 'Home & Living', result: '3x conversion rate improvement', color: '#3B2A5F' },
    { id: 6, title: 'AutoLeads AI', category: 'ai-automation', categoryLabel: 'AI Automation', industry: 'Real Estate', result: 'Zero missed leads since automation', color: '#1C3D2F' },
];

interface PortfolioGridProps {
    activeFilter: string;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ activeFilter }) => {
    const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

    return (
        <section className="portfolio-grid pb-130" style={{ backgroundColor: '#ffffff' }}>
            <style>{`
                .pgrid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                @media (max-width: 991px) { .pgrid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 575px) { .pgrid { grid-template-columns: 1fr; } }

                .pcard {
                    border: 1px solid #EBECEF;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    background: #ffffff;
                }
                .pcard:hover {
                    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.07);
                    transform: translateY(-5px);
                }
                .pcard-img {
                    position: relative;
                    aspect-ratio: 16/9;
                    overflow: hidden;
                }
                .pcard-img-bg {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.4s ease;
                }
                .pcard:hover .pcard-img-bg {
                    transform: scale(1.05);
                }
                .pcard-img::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(232, 93, 4, 0);
                    transition: background 0.3s ease;
                    pointer-events: none;
                }
                .pcard:hover .pcard-img::after {
                    background: rgba(232, 93, 4, 0.12);
                }
                .pcard-badge {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    background: rgba(0,0,0,0.6);
                    backdrop-filter: blur(8px);
                    color: #fff;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 5px 14px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    z-index: 2;
                }
                .pcard-body {
                    padding: 28px 25px;
                }
                .pcard-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: var(--color-charcoal, #1a1a1a);
                    margin-bottom: 6px;
                }
                .pcard-industry {
                    font-size: 14px;
                    color: #999;
                    margin-bottom: 14px;
                }
                .pcard-result {
                    font-size: 15px;
                    font-weight: 700;
                    color: #E85D04;
                    margin-bottom: 20px;
                }
                .pcard-btn {
                    display: inline-block;
                    padding: 9px 22px;
                    border: 1.5px solid #EBECEF;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--color-charcoal, #1a1a1a);
                    text-decoration: none;
                    transition: all 0.25s ease;
                }
                .pcard-btn:hover {
                    border-color: #E85D04;
                    color: #E85D04;
                }
            `}</style>

            <div className="container">
                <div className="pgrid">
                    {filtered.map((project, idx) => (
                        <Fade key={project.id} direction="up" triggerOnce duration={600} delay={idx * 100}>
                            <div className="pcard">
                                <div className="pcard-img">
                                    <div className="pcard-img-bg" style={{ backgroundColor: project.color }}>
                                        <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '48px', fontWeight: 800, letterSpacing: '-2px' }}>
                                            {project.title.charAt(0)}
                                        </span>
                                    </div>
                                    <span className="pcard-badge">{project.categoryLabel}</span>
                                </div>
                                <div className="pcard-body">
                                    <h3 className="pcard-title">{project.title}</h3>
                                    <p className="pcard-industry">{project.industry}</p>
                                    <p className="pcard-result">{project.result}</p>
                                    <Link href="/portfolio" className="pcard-btn">View Project →</Link>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center pt-60 pb-60">
                        <p style={{ color: '#999', fontSize: '18px' }}>No projects found in this category yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioGrid;

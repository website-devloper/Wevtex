'use client';

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import icon from '@/public/images/icon/eye-icon.svg';

interface ProjectItem {
    id: number;
    title: string;
    category: string;
    img: string;
    alt: string;
}

const caseStudies: ProjectItem[] = [
    {
        id: 1,
        title: "Bloom Studio",
        category: "cat1", // Development
        img: "https://placehold.co/800x1000/f4f5f8/1a1a1a?text=Light+Minimal+Website\\nMockup+on+Laptop",
        alt: "Bloom Studio",
    },
    {
        id: 2,
        title: "NexCart",
        category: "cat1", // Development
        img: "https://placehold.co/800x600/f4f5f8/1a1a1a?text=Mobile+App\\nMockup+on+Phone",
        alt: "NexCart",
    },
    {
        id: 3,
        title: "FlowBot Pro",
        category: "cat5", // IT Services
        img: "https://placehold.co/800x1200/f4f5f8/1a1a1a?text=Dashboard+Mockup\\non+Screen",
        alt: "FlowBot Pro",
    },
    {
        id: 4,
        title: "Saveur Locale",
        category: "cat4", // Branding
        img: "https://placehold.co/800x800/f4f5f8/1a1a1a?text=Restaurant+Brand\\nIdentity+Mockup",
        alt: "Saveur Locale",
    },
    {
        id: 5,
        title: "ShopEasy",
        category: "cat3", // Marketing
        img: "https://placehold.co/800x1100/f4f5f8/1a1a1a?text=E-commerce\\nProduct+Mockup",
        alt: "ShopEasy",
    },
    {
        id: 6,
        title: "AutoLeads AI",
        category: "cat5", // IT Services
        img: "https://placehold.co/800x700/f4f5f8/1a1a1a?text=Automation+Workflow\\nVisual",
        alt: "AutoLeads AI",
    }
];

const PortfolioMasonryGrid: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>("*");

    const handleFilter = (category: string) => {
        setActiveFilter(category);
    };

    const filters = [
        { key: "*", label: "View All" },
        { key: "cat1", label: "Development" },
        { key: "cat2", label: "Design" },
        { key: "cat3", label: "Marketing" },
        { key: "cat4", label: "Branding" },
        { key: "cat5", label: "IT Services" },
    ];

    const filteredStudies = caseStudies.filter(item => activeFilter === "*" || item.category === activeFilter);

    return (
        <section className="casestudy pt-130 pb-130" style={{ backgroundColor: "#ffffff" }}>
            <style>{`
                /* Filter Bar */
                .masonry-filter-row {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 50px;
                }
                .masonry-filter-btn {
                    padding: 1px 9px;
                    border-radius: 14px;
                    border: 1px solid #eaeef0;
                    background: transparent;
                    color: #49515B;
                    font-size: 12px;
                    font-weight: 500;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                    display: inline-block;
                }
                .masonry-filter-btn:hover {
                    background: #eaeef0;
                }
                .masonry-filter-btn.active {
                    background: #E85D04;
                    color: #ffffff;
                    border-color: #E85D04;
                }
                @media (max-width: 767px) {
                    .masonry-filter-row {
                        flex-wrap: nowrap;
                        overflow-x: auto;
                        justify-content: flex-start;
                        padding: 0 15px;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                    }
                    .masonry-filter-row::-webkit-scrollbar { 
                        display: none;
                    }
                }

                /* True Masonry Grid */
                .masonry-grid-container {
                    column-count: 3;
                    column-gap: 30px;
                    width: 100%;
                }
                @media (max-width: 991px) {
                    .masonry-grid-container {
                        column-count: 2;
                    }
                }
                @media (max-width: 767px) {
                    .masonry-grid-container {
                        column-count: 1;
                    }
                }

                .masonry-item-wrapper {
                    break-inside: avoid;
                    margin-bottom: 45px;
                    display: block;
                }

                /* Grid Cards Styling */
                .masonry-item-inner {
                    padding: 15px;
                    position: relative;
                    background: var(--color-white, #ffffff);
                    border-radius: 20px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .masonry-item-inner::before,
                .masonry-item-inner::after {
                    position: absolute;
                    content: '';
                    top: 0px;
                    left: 30px;
                    right: 30px;
                    bottom: -20px;
                    z-index: -1;
                    border-radius: 20px;
                    background: rgba(255, 255, 255, 0.3);
                }
                .masonry-item-inner::after {
                    left: 15px;
                    right: 15px;
                    bottom: -10px;
                }
                
                .masonry-item-inner:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
                }

                .masonry-img-wrap {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 5px;
                    background: #F5F5F5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .masonry-img-wrap img {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: transform 0.5s ease;
                    position: relative;
                    z-index: 1;
                }
                .masonry-img-placeholder-icon {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 0;
                }
                .masonry-item-inner:hover .masonry-img-wrap img {
                    transform: scale(1.05) rotate(1deg);
                }
                
                .masonry-badge {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    z-index: 2;
                    padding: 1px 9px;
                    border-radius: 14px;
                    border: 1px solid #eaeef0;
                    background: #ffffff;
                    color: #49515B;
                    font-size: 12px;
                    font-weight: 500;
                    text-transform: uppercase;
                }

                .masonry-content-below {
                    padding: 20px 5px 5px;
                }
                
                .masonry-title {
                    font-size: 30px;
                    font-weight: 700;
                    color: var(--color-charcoal, #1a1a1a);
                    margin: 0 0 10px 0;
                    letter-spacing: 0em;
                    transition: color 0.3s ease;
                }
                .masonry-item-inner:hover .masonry-title {
                    color: #E85D04;
                }
                .masonry-result {
                    color: #E85D04;
                    font-size: 14px;
                    font-weight: 600;
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
            `}</style>

            <div className="container">
                {/* Standardized Section Header */}
                <div className="row justify-content-center mb-60">
                    <div className="col-lg-8 text-center">
                        <div className="sec-title text-center">
                            <Fade direction="down" triggerOnce duration={800}>
                                <span className="sub-title">
                                    <Image src={icon} alt="" /> OUR WORK
                                </span>
                            </Fade>
                            <Fade direction="up" triggerOnce duration={1000} delay={100}>
                                <h2 className="title">
                                    Projects That Speak Louder Than Words
                                </h2>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="masonry-filter-row">
                            {filters.map((filter) => (
                                <button
                                    key={filter.key}
                                    className={`masonry-filter-btn ${activeFilter === filter.key ? "active" : ""}`}
                                    onClick={() => handleFilter(filter.key)}
                                    type="button"
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* True Case Studies Masonry Grid */}
                <div className="casestudy-content">
                    <div className="masonry-grid-container">
                        <AnimatePresence>
                            {filteredStudies.map((study) => (
                                <motion.div
                                    key={study.id}
                                    className="masonry-item-wrapper"
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    layout
                                >
                                    <div className="masonry-item-inner">
                                        <Link href="/portfolio" style={{ display: 'block' }}>
                                            <div className="masonry-img-wrap">
                                                <div className="masonry-img-placeholder-icon">
                                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                        <polyline points="21 15 16 10 5 21"></polyline>
                                                    </svg>
                                                </div>
                                                <Image
                                                    src={study.img}
                                                    alt={study.alt}
                                                    width={800}
                                                    height={parseInt(study.img.split('/')[3].split('x')[1])}
                                                    unoptimized
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                                <div className="masonry-badge">
                                                    {filters.find(f => f.key === study.category)?.label || "Case Study"}
                                                </div>
                                            </div>
                                            <div className="masonry-content-below">
                                                <h3 className="masonry-title">{study.title}</h3>
                                                <p className="masonry-result">View Case Study <i className="far fa-arrow-right" style={{ marginLeft: '5px' }}></i></p>
                                            </div>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredStudies.length === 0 && (
                        <div className="text-center pt-60 pb-60">
                            <p style={{ color: '#999', fontSize: '18px' }}>No projects found in this category yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PortfolioMasonryGrid;

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaticServices from '../../../api/service';


const WebsiteTypesGrid: React.FC = () => {
    const allWebsiteTypes = StaticServices.filter(s => s.category === 'Website Type');
    const [visibleCount, setVisibleCount] = useState(8);

    const websiteTypes = allWebsiteTypes.slice(0, visibleCount);
    const hasMore = visibleCount < allWebsiteTypes.length;

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 4, allWebsiteTypes.length));
    };

    return (
        <section className="website-types pt-120 pb-120" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="sec-title text-center mb-40">
                    <span
                        style={{
                            color: 'var(--color-burnt-orange, #e2481e)',
                            fontWeight: 700,
                            fontSize: '14px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            marginBottom: '20px',
                            background: 'transparent'
                        }}
                    >
                        Solutions We Deliver
                    </span>
                    <h2 className="title" style={{ letterSpacing: '-1.5px', fontSize: '48px', maxWidth: '800px', margin: '0 auto' }}>
                        Every type of website. One expert team.
                    </h2>
                    <p style={{ color: '#49515b', maxWidth: '600px', margin: '20px auto 0', fontSize: '18px' }}>
                        From e-commerce stores to SaaS platforms — we build what your business needs.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {websiteTypes.map((type, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div className="type-card" style={{
                                padding: '35px 30px',
                                borderRadius: '20px',
                                height: '100%',
                                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                cursor: 'pointer',
                                backgroundColor: '#f8f9fa',
                                border: '1px solid #f1f3f5',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div className="icon-box mb-4" style={{
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'transparent',
                                    borderRadius: '12px',
                                    transition: 'all 0.4s ease'
                                }}>
                                    {type.sIcon && (
                                        <Image
                                            src={type.sIcon}
                                            alt={type.title}
                                            width={36}
                                            height={36}
                                            style={{
                                                filter: 'invert(34%) sepia(97%) saturate(2258%) hue-rotate(349deg) brightness(91%) contrast(92%)',
                                                transition: 'all 0.4s ease'
                                            }}
                                        />
                                    )}
                                </div>
                                <h4 style={{
                                    color: '#1a1a1c',
                                    fontSize: '19px',
                                    fontWeight: '500',
                                    marginBottom: '10px',
                                    letterSpacing: '-0.2px',
                                    transition: 'color 0.4s ease'
                                }}>
                                    {type.title}
                                </h4>
                                <p style={{
                                    color: '#6c757d',
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    lineHeight: '1.6',
                                    margin: 0,
                                    transition: 'color 0.4s ease'
                                }}>
                                    Precision-engineered architecture for {type.title.toLowerCase()} systems.
                                </p>

                                {/* Removed Subtle Border Accent to simplify */}
                            </div>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="xb-btn text-center mt-60" style={{ marginBottom: '80px' }}>
                        <a
                            onClick={(e) => { e.preventDefault(); loadMore(); }}
                            href="#"
                            className="thm-btn thm-btn--fill_icon"
                        >
                            <div className="xb-item--hidden-text">
                                <span className="text">Discover More Solutions</span>
                            </div>
                            <div className="xb-item--holder">
                                <span className="xb-item--text">Discover More Solutions</span>
                                <div className="xb-item--icon">
                                    <i className="far fa-long-arrow-right"></i>
                                </div>
                                <span className="xb-item--text">Discover More Solutions</span>
                            </div>
                        </a>
                    </div>
                )}
            </div>

            <style jsx>{`
        .type-card:hover {
          background-color: #f8f9fa !important;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .type-card:hover h4 {
          color: #e2481e !important;
        }
        
      `}</style>
        </section>
    );
};

export default WebsiteTypesGrid;

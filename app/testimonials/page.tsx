'use client';

import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/It-Services-Components/Footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Link from 'next/link';

const TestimonialsPage: React.FC = () => {
    return (
        <Fragment>
            <div className="body_wrap it-services">
                <Header2 />

                {/* Global Page Hero */}
                <section
                    className="page-title pt-200 pb-120 pos-rel"
                    style={{ backgroundColor: 'var(--color-charcoal)' }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10">
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
                                    Testimonials
                                </span>
                                <h1
                                    className="title"
                                    style={{
                                        color: 'var(--color-soft-white)',
                                        fontSize: '64px',
                                        letterSpacing: '-1.5px',
                                        lineHeight: 1.1,
                                        marginBottom: '30px'
                                    }}
                                >
                                    What Our Clients Say About Working With Wevtex
                                </h1>
                                <p style={{ color: 'rgba(250,250,250,0.7)', fontSize: '20px', maxWidth: '750px', lineHeight: 1.6, marginBottom: '40px' }}>
                                    Don’t just take our word for it. Explore real stories and measurable metrics from ambitious companies who partnered with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="page_content">
                    {/* Incoming Component Sections */}
                </main>

                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    );
};

export default TestimonialsPage;

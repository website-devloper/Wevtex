'use client';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import Image, { StaticImageData } from 'next/image';

export interface ServiceDetailProps {
    title: string;
    description: string;
    features: string[];
    timeline?: string;
    startingPrice?: string;
    roiStat?: { label: string; value: string };
    tools?: StaticImageData[];
    image: string; // Background path or placeholder
    reverse?: boolean;
}

const ServiceDetail: FC<ServiceDetailProps> = ({
    title,
    description,
    features,
    timeline,
    startingPrice,
    roiStat,
    tools,
    image,
    reverse = false
}) => {
    return (
        <section className="service-detail pt-130 pb-130 bg-white" style={{ borderBottom: '1px solid rgba(28,28,30,0.05)' }}>
            <div className="container">
                <div className={`row align-items-center ${reverse ? 'flex-row-reverse' : ''}`}>

                    <div className="col-lg-6">
                        <Fade direction={reverse ? 'right' : 'left'} triggerOnce duration={1000}>
                            <div className={`service-content ${reverse ? 'pl-50' : 'pr-50'}`}>
                                <h2
                                    className="title"
                                    style={{
                                        color: 'var(--color-charcoal)',
                                        fontSize: '44px',
                                        letterSpacing: '-1.5px',
                                        lineHeight: 1.2,
                                        marginBottom: '25px'
                                    }}
                                >
                                    {title}
                                </h2>
                                <p style={{ color: 'rgba(28,28,30,0.7)', fontSize: '18px', lineHeight: 1.6, marginBottom: '30px' }}>
                                    {description}
                                </p>

                                {/* Features List */}
                                <ul className="list-unstyled mb-40" style={{ paddingLeft: '0' }}>
                                    {features.map((feature, idx) => (
                                        <li key={idx} style={{ marginBottom: '15px', color: 'var(--color-charcoal)', fontWeight: 600, fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                                            <span
                                                style={{
                                                    width: '24px',
                                                    height: '24px',
                                                    backgroundColor: 'rgba(232, 93, 4, 0.1)',
                                                    color: 'var(--color-burnt-orange)',
                                                    borderRadius: '50%',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: '15px'
                                                }}
                                            >
                                                ✓
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Optional Stats Grid */}
                                {(timeline || startingPrice || roiStat) && (
                                    <div className="row mt-4 mb-4">
                                        {timeline && (
                                            <div className="col-6 mb-3">
                                                <span style={{ display: 'block', color: 'rgba(28,28,30,0.5)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Timeline</span>
                                                <strong style={{ color: 'var(--color-charcoal)', fontSize: '20px' }}>{timeline}</strong>
                                            </div>
                                        )}
                                        {startingPrice && (
                                            <div className="col-6 mb-3">
                                                <span style={{ display: 'block', color: 'rgba(28,28,30,0.5)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Starting From</span>
                                                <strong style={{ color: 'var(--color-burnt-orange)', fontSize: '20px' }}>{startingPrice}</strong>
                                            </div>
                                        )}
                                        {roiStat && (
                                            <div className="col-12 mb-3">
                                                <div style={{ backgroundColor: 'var(--color-peach-tint)', padding: '20px', borderRadius: '16px' }}>
                                                    <span style={{ display: 'block', color: 'var(--color-charcoal)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>{roiStat.label}</span>
                                                    <strong style={{ color: 'var(--color-burnt-orange)', fontSize: '24px' }}>{roiStat.value}</strong>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Optional Tools Grid */}
                                {tools && tools.length > 0 && (
                                    <div className="tools-wrap mt-20">
                                        <span style={{ display: 'block', color: 'rgba(28,28,30,0.5)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '15px' }}>Tech Stack</span>
                                        <div className="d-flex flex-wrap gap-3">
                                            {tools.map((tool, idx) => (
                                                <div
                                                    key={idx}
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                        backgroundColor: 'rgba(28,28,30,0.03)',
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        padding: '10px'
                                                    }}
                                                >
                                                    <Image src={tool} alt="Tech tool" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>
                        </Fade>
                    </div>

                    <div className="col-lg-6 mt-lg-0 mt-5">
                        <Fade direction={reverse ? 'left' : 'right'} triggerOnce duration={1000}>
                            <div
                                className="service-image-wrap"
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '600px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                                }}
                            >
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;

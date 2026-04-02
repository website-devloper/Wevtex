'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const AICalculator: React.FC = () => {
    const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
    const [hourlyRate, setHourlyRate] = useState<number>(100);

    const monthlyLoss = useMemo(() => {
        return hoursPerWeek * hourlyRate * 4;
    }, [hoursPerWeek, hourlyRate]);

    const paybackWeeks = useMemo(() => {
        const packageCost = 7999; // Growth package
        const weeklySavings = hoursPerWeek * hourlyRate;
        if (weeklySavings <= 0) return 0;
        return Math.ceil(packageCost / weeklySavings);
    }, [hoursPerWeek, hourlyRate]);

    return (
        <section className="roi-calculator pt-130 pb-130" style={{ backgroundColor: '#ffffff' }}>
            <style>{`
                .calc-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .calc-input-group label {
                    font-size: 14px;
                    font-weight: 700;
                    color: var(--color-charcoal, #1a1a1a);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .calc-input-group input[type="range"] {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 6px;
                    border-radius: 3px;
                    background: #EBECEF;
                    outline: none;
                    margin: 10px 0;
                }
                .calc-input-group input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background: #E85D04;
                    cursor: pointer;
                    border: 3px solid #ffffff;
                    box-shadow: 0 2px 8px rgba(232, 93, 4, 0.3);
                }
                .calc-input-group input[type="range"]::-moz-range-thumb {
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background: #E85D04;
                    cursor: pointer;
                    border: 3px solid #ffffff;
                    box-shadow: 0 2px 8px rgba(232, 93, 4, 0.3);
                }
                .calc-value {
                    font-size: 28px;
                    font-weight: 700;
                    color: var(--color-charcoal, #1a1a1a);
                    text-align: right;
                }
                .calc-result-card {
                    background: var(--color-charcoal, #1a1a1a);
                    border-radius: 16px;
                    padding: 45px;
                    text-align: center;
                    color: #ffffff;
                }
                .calc-big-number {
                    font-size: 56px;
                    font-weight: 700;
                    color: #E85D04;
                    line-height: 1;
                    letter-spacing: -2px;
                }
                @media (max-width: 767px) {
                    .calc-big-number {
                        font-size: 40px;
                    }
                }
            `}</style>

            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-lg-8 text-center">
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
                                ROI Calculator
                            </span>
                            <h2 className="title" style={{ color: 'var(--color-charcoal, #1a1a1a)', letterSpacing: '-1.5px', fontSize: '48px' }}>
                                Calculate your automation savings.
                            </h2>
                        </Fade>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <Fade direction="up" triggerOnce duration={800}>
                            <div style={{ backgroundColor: '#f4f5f8', borderRadius: '16px', padding: '50px', border: '1px solid #EBECEF' }}>
                                <div className="row" style={{ gap: '40px 0' }}>
                                    {/* Inputs */}
                                    <div className="col-lg-6">
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                                            <div className="calc-input-group">
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <label>Hours per week on manual tasks</label>
                                                    <span className="calc-value">{hoursPerWeek}h</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="60"
                                                    value={hoursPerWeek}
                                                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                                                />
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#999' }}>
                                                    <span>1h</span><span>60h</span>
                                                </div>
                                            </div>

                                            <div className="calc-input-group">
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <label>Your hourly rate (MAD)</label>
                                                    <span className="calc-value">{hourlyRate} MAD</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="20"
                                                    max="500"
                                                    step="10"
                                                    value={hourlyRate}
                                                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                                                />
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#999' }}>
                                                    <span>20 MAD</span><span>500 MAD</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className="col-lg-6">
                                        <div className="calc-result-card h-100 d-flex flex-column justify-content-center">
                                            <p style={{ fontSize: '16px', opacity: 0.7, marginBottom: '10px' }}>You are losing</p>
                                            <div className="calc-big-number">{monthlyLoss.toLocaleString()} MAD</div>
                                            <p style={{ fontSize: '16px', opacity: 0.7, margin: '10px 0 30px' }}>per month on tasks we can automate</p>

                                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '25px', marginTop: '5px' }}>
                                                <p style={{ fontSize: '14px', opacity: 0.6, marginBottom: '8px' }}>Our automation package pays for itself in</p>
                                                <span style={{ fontSize: '32px', fontWeight: 700, color: '#E85D04' }}>{paybackWeeks} weeks</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="text-center mt-50">
                                    <Link href="/contact" className="thm-btn thm-btn--fill_icon thm-btn--white_icon">
                                        <div className="xb-item--hidden">
                                            <span className="xb-item--hidden-text">Get My Free Audit</span>
                                        </div>
                                        <div className="xb-item--holder">
                                            <span className="xb-item--text">Get My Free Audit</span>
                                            <div className="xb-item--icon">
                                                <i className="far fa-long-arrow-right"></i>
                                            </div>
                                            <span className="xb-item--text">Get My Free Audit</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AICalculator;

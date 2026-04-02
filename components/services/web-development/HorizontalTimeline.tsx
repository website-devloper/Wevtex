'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface TimelineStep {
    number: string;
    title: string;
    desc: string;
    duration: string;
}

const steps: TimelineStep[] = [
    {
        number: "01",
        title: "Discovery Call",
        desc: "We learn your business, goals, and audience to establish a North Star for the project.",
        duration: "Day 1–2",
    },
    {
        number: "02",
        title: "Wireframing",
        desc: "Structural blueprints defining data hierarchy and user flow without design distractions.",
        duration: "Day 3–4",
    },
    {
        number: "03",
        title: "UI Design",
        desc: "High-fidelity visual design in Figma, applying your brand's DNA to the wireframed structure.",
        duration: "Day 5–8",
    },
    {
        number: "04",
        title: "Development",
        desc: "Engineering the build with Next.js, focusing on clean architecture and performance scores.",
        duration: "Day 9–18",
    },
    {
        number: "05",
        title: "QA & Testing",
        desc: "Rigorous cross-device, speed, and accessibility testing to ensure zero-defect shipment.",
        duration: "Day 19–21",
    },
    {
        number: "06",
        title: "Launch",
        desc: "Deployment, DNS configuration, and a seamless transition to your production environment.",
        duration: "Day 22–28",
    }
];

const StepItem = ({ step, index, total }: { step: TimelineStep; index: number; total: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="row align-items-center mb-100" style={{ position: 'relative', zIndex: 2 }}>
            {/* Left Column */}
            <div className={`col-lg-5 ${isEven ? 'text-lg-end order-1' : 'order-3'}`}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h4 style={{ color: '#1a1a1a', fontSize: '24px', marginBottom: '12px' }}>
                        {step.title}
                    </h4>
                    <p style={{ color: '#666', fontSize: '17px', lineHeight: '1.7', maxWidth: '450px', marginLeft: isEven ? 'auto' : '0' }}>
                        {step.desc}
                    </p>
                </motion.div>
            </div>

            {/* Center Node */}
            <div className="col-lg-2 text-center order-2">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        border: '2px solid #EBECEF',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 3,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}
                >
                    <span style={{ color: '#E85D04', fontWeight: '800', fontSize: '20px', lineHeight: 1 }}>{step.number}</span>
                    <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', color: '#999', marginTop: '2px' }}>STEP</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.5, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '12px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#1a1a1a' }}
                >
                    {step.duration}
                </motion.div>
            </div>

            {/* Right Column (Placeholder or Visual) */}
            <div className={`col-lg-5 ${isEven ? 'order-3' : 'order-1'}`}>
                <div style={{ height: '2px' }} className="d-none d-lg-block"></div>
            </div>
        </div>
    );
};

const HorizontalTimeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="timeline-section pt-150 pb-150" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
            <div className="container" ref={containerRef}>
                <div className="row justify-content-center mb-100">
                    <div className="col-lg-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span style={{ color: '#E85D04', fontWeight: 700, fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px', display: 'block' }}>
                                Standardized Velocity
                            </span>
                            <h2 className="title" style={{ color: '#1a1a1a', fontSize: '48px', letterSpacing: '-1.5px' }}>
                                The Strategic Build Path.
                            </h2>
                        </motion.div>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Background Static Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '40px',
                        bottom: '40px',
                        width: '2px',
                        backgroundColor: '#F7F8FA',
                        transform: 'translateX(-50%)',
                        zIndex: 0
                    }} />

                    {/* Animated Growing Line */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '40px',
                            bottom: '40px',
                            width: '2px',
                            backgroundColor: '#E85D04',
                            transform: 'translateX(-50%)',
                            scaleY: scaleY,
                            transformOrigin: 'top',
                            zIndex: 1,
                            opacity: 0.3
                        }}
                    />

                    <div className="timeline-steps">
                        {steps.map((step, index) => (
                            <StepItem key={index} step={step} index={index} total={steps.length} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HorizontalTimeline;

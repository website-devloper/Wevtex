'use client';

import React from 'react';
import Header2 from '../../Header2/Header2';
import Footer from '../../It-Services-Components/Footer/Footer';
import Scrollbar from '../../scrollbar/scrollbar';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

// ──────── HERO ────────
function DesktopHero() {
    return (
        <section
            className="page-title pt-200 pb-120 pos-rel"
            style={{ backgroundColor: 'var(--color-charcoal)' }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Fade direction="up" triggerOnce duration={800}>
                            <div>
                                <span style={{
                                    color: 'var(--color-burnt-orange)',
                                    fontWeight: 700, fontSize: '14px', letterSpacing: '2px',
                                    textTransform: 'uppercase', display: 'block', marginBottom: '20px'
                                }}>
                                    Desktop Applications
                                </span>
                                <h1 style={{
                                    color: 'var(--color-soft-white)', fontSize: '56px',
                                    letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '30px', fontWeight: 800
                                }}>
                                    Software That Works<br />
                                    <span style={{ color: 'var(--color-burnt-orange)' }}>Even Offline.</span>
                                </h1>
                                <p style={{
                                    color: 'rgba(250,250,250,0.7)', fontSize: '20px',
                                    maxWidth: '650px', lineHeight: 1.6, marginBottom: '40px'
                                }}>
                                    Cross-platform desktop applications for Windows and macOS — built with Electron and Tauri.
                                    CRMs, POS systems, dashboards, and business tools that run natively on your machine.
                                </p>
                                <div className="d-flex flex-wrap gap-4">
                                    <Link href="/contact" className="thm-btn thm-btn--fill_icon thm-btn--white_icon"
                                        style={{ backgroundColor: 'var(--color-burnt-orange)', border: 'none' }}>
                                        <div className="xb-item--hidden">
                                            <span className="xb-item--hidden-text" style={{ color: 'var(--color-charcoal)' }}>Get a Quote</span>
                                        </div>
                                        <div className="xb-item--holder">
                                            <span className="xb-item--text">Get a Quote</span>
                                            <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                                            <span className="xb-item--text">Get a Quote</span>
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
}

// ──────── PROBLEM GRID ────────
const problems = [
    { icon: '🖥️', title: 'Browser-Dependent Tools', desc: 'Your team relies on slow web tools that crash when the internet drops.' },
    { icon: '⚡', title: 'Slow Operations', desc: 'Manual processes eat 4+ hours daily — inventory, invoicing, scheduling.' },
    { icon: '🔒', title: 'Data Security Concerns', desc: 'Sensitive client data stored on third-party cloud platforms you don\'t control.' },
    { icon: '📊', title: 'No Custom Reporting', desc: 'Generic software doesn\'t match your unique business workflows and KPIs.' },
];

function DesktopProblemGrid() {
    return (
        <section style={{ backgroundColor: '#fff', padding: '100px 0 80px' }}>
            <div className="container">
                <Fade direction="up" triggerOnce duration={800}>
                    <div className="text-center mb-5">
                        <span style={{ color: 'var(--color-burnt-orange)', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            The Problem
                        </span>
                        <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--color-charcoal)', marginTop: '15px', letterSpacing: '-1px' }}>
                            Why Your Business Needs Desktop Software
                        </h2>
                    </div>
                </Fade>
                <div className="row g-4">
                    {problems.map((p, i) => (
                        <div key={i} className="col-md-6 col-lg-3">
                            <Fade direction="up" triggerOnce duration={600} delay={i * 100}>
                                <div style={{
                                    background: '#f8f9fa', borderRadius: '16px', padding: '35px 25px',
                                    height: '100%', border: '1px solid #EBECEF', transition: 'all 0.3s ease'
                                }}>
                                    <span style={{ fontSize: '40px', display: 'block', marginBottom: '20px' }}>{p.icon}</span>
                                    <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--color-charcoal)' }}>{p.title}</h4>
                                    <p style={{ color: 'rgba(28,28,30,0.6)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ──────── CAPABILITIES ────────
const capabilities = [
    { title: 'Windows & macOS Desktop App', desc: 'Cross-platform Electron or Tauri apps with offline capability, auto-update, and custom installers.', price: '15,000 – 80,000 MAD' },
    { title: 'Desktop CRM / ERP Tool', desc: 'Internal business management tools: inventory, HR, accounting — custom-built to your needs.', price: '20,000 – 100,000+ MAD' },
    { title: 'POS (Point of Sale) System', desc: 'Sales terminal for retail and restaurants: barcode scanning, receipts, stock management, reports.', price: '10,000 – 40,000 MAD' },
    { title: 'Data Dashboard & Reporting', desc: 'Offline-capable analytics tool pulling from local or cloud data sources with beautiful visualisations.', price: '8,000 – 30,000 MAD' },
    { title: 'Kiosk / Self-Service App', desc: 'Touch-screen public-facing app for hotels, clinics, government — check-in, booking, and information.', price: '12,000 – 50,000 MAD' },
];

function DesktopCapabilities() {
    return (
        <section style={{ backgroundColor: 'var(--color-charcoal)', padding: '100px 0' }}>
            <div className="container">
                <Fade direction="up" triggerOnce duration={800}>
                    <div className="mb-5">
                        <span style={{ color: 'var(--color-burnt-orange)', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            What We Build
                        </span>
                        <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--color-soft-white)', marginTop: '15px', letterSpacing: '-1px' }}>
                            Desktop Application Services
                        </h2>
                    </div>
                </Fade>
                <div className="row g-4">
                    {capabilities.map((c, i) => (
                        <div key={i} className="col-md-6">
                            <Fade direction="up" triggerOnce duration={600} delay={i * 80}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '35px',
                                    border: '1px solid rgba(255,255,255,0.1)', height: '100%', transition: 'all 0.3s ease'
                                }}>
                                    <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{c.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>{c.desc}</p>
                                    <span style={{
                                        display: 'inline-block', background: 'rgba(232,93,4,0.15)', color: '#E85D04',
                                        fontSize: '14px', fontWeight: 700, padding: '6px 16px', borderRadius: '20px'
                                    }}>
                                        {c.price}
                                    </span>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ──────── TECH STACK ────────
const techItems = [
    { name: 'Electron', desc: 'Most popular cross-platform desktop framework' },
    { name: 'Tauri', desc: 'Lightweight, Rust-based alternative for smaller apps' },
    { name: 'React', desc: 'UI library powering the application interface' },
    { name: 'Node.js', desc: 'Backend runtime for desktop app logic' },
    { name: 'SQLite', desc: 'Embedded database for offline data storage' },
    { name: 'TypeScript', desc: 'Type-safe code for reliability and maintainability' },
];

function DesktopTechStack() {
    return (
        <section style={{ backgroundColor: '#fff', padding: '100px 0' }}>
            <div className="container">
                <Fade direction="up" triggerOnce duration={800}>
                    <div className="text-center mb-5">
                        <span style={{ color: 'var(--color-burnt-orange)', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            Technology
                        </span>
                        <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--color-charcoal)', marginTop: '15px', letterSpacing: '-1px' }}>
                            Built With Modern Tech
                        </h2>
                    </div>
                </Fade>
                <div className="row g-4 justify-content-center">
                    {techItems.map((t, i) => (
                        <div key={i} className="col-md-4 col-lg-2">
                            <Fade direction="up" triggerOnce duration={600} delay={i * 80}>
                                <div style={{
                                    textAlign: 'center', padding: '30px 15px',
                                    borderRadius: '16px', border: '1px solid #EBECEF', height: '100%'
                                }}>
                                    <h5 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '8px' }}>{t.name}</h5>
                                    <p style={{ color: 'rgba(28,28,30,0.5)', fontSize: '13px', margin: 0, lineHeight: 1.4 }}>{t.desc}</p>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ──────── FAQ ────────
const faqs = [
    { q: 'What platforms do you support?', a: 'We build cross-platform desktop apps that run on Windows 10/11 and macOS. We can also target Linux when needed.' },
    { q: 'Can the app work offline?', a: 'Absolutely. Offline-first architecture is our default approach. Your app and data work without an internet connection, syncing when connectivity returns.' },
    { q: 'How long does development take?', a: 'A typical desktop application takes 4–8 weeks depending on complexity. Simple tools can be delivered in 2–3 weeks.' },
    { q: 'Can you integrate with our existing systems?', a: 'Yes. We can connect your desktop app to existing APIs, databases, cloud services, and third-party tools your team already uses.' },
    { q: 'Do you provide updates and maintenance?', a: 'We offer annual support and update contracts starting at 2,000 MAD/year. Auto-update functionality is built into every app we ship.' },
];

function DesktopFaq() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);
    return (
        <section style={{ backgroundColor: '#f8f9fa', padding: '100px 0' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <Fade direction="up" triggerOnce duration={800}>
                            <div className="text-center mb-5">
                                <span style={{ color: 'var(--color-burnt-orange)', fontWeight: 700, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                                    FAQ
                                </span>
                                <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--color-charcoal)', marginTop: '15px', letterSpacing: '-1px' }}>
                                    Common Questions
                                </h2>
                            </div>
                        </Fade>
                        {faqs.map((f, i) => (
                            <Fade key={i} direction="up" triggerOnce duration={600} delay={i * 60}>
                                <div
                                    style={{
                                        background: '#fff', borderRadius: '12px', marginBottom: '12px',
                                        border: '1px solid #EBECEF', overflow: 'hidden', cursor: 'pointer'
                                    }}
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    <div style={{
                                        padding: '20px 25px', display: 'flex', justifyContent: 'space-between',
                                        alignItems: 'center', fontWeight: 700, fontSize: '16px', color: 'var(--color-charcoal)'
                                    }}>
                                        {f.q}
                                        <span style={{ color: '#E85D04', fontSize: '20px', transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                                    </div>
                                    {openIndex === i && (
                                        <div style={{ padding: '0 25px 20px', color: 'rgba(28,28,30,0.65)', fontSize: '15px', lineHeight: 1.6 }}>
                                            {f.a}
                                        </div>
                                    )}
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ──────── CTA ────────
function DesktopCTA() {
    return (
        <section style={{
            background: 'linear-gradient(135deg, var(--color-charcoal) 0%, #2a2a2c 100%)',
            padding: '100px 0', textAlign: 'center'
        }}>
            <div className="container">
                <Fade direction="up" triggerOnce duration={800}>
                    <div>
                        <h2 style={{ fontSize: '48px', fontWeight: 800, color: '#fff', letterSpacing: '-1px', marginBottom: '20px' }}>
                            Ready to Build Your Desktop App?
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '20px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
                            Book a free 30-minute discovery call. We&apos;ll map out the best technical solution for your business.
                        </p>
                        <Link href="/contact" className="thm-btn thm-btn--fill_icon thm-btn--white_icon"
                            style={{ backgroundColor: 'var(--color-burnt-orange)', border: 'none' }}>
                            <div className="xb-item--hidden">
                                <span className="xb-item--hidden-text" style={{ color: 'var(--color-charcoal)' }}>Book Free Consultation</span>
                            </div>
                            <div className="xb-item--holder">
                                <span className="xb-item--text">Book Free Consultation</span>
                                <div className="xb-item--icon"><i className="far fa-long-arrow-right"></i></div>
                                <span className="xb-item--text">Book Free Consultation</span>
                            </div>
                        </Link>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

// ──────── MAIN PAGE ────────
export default function DesktopApplicationsPage() {
    return (
        <>
            <div className="body_wrap it-services">
                <Header2 />
                <main className="page_content">
                    <DesktopHero />
                    <DesktopProblemGrid />
                    <DesktopCapabilities />
                    <DesktopTechStack />
                    <DesktopFaq />
                    <DesktopCTA />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </>
    );
}

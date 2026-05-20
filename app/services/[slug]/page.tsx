import React from 'react';
import { notFound } from 'next/navigation';
import Header2 from '../../../components/Header2/Header2';
import Footer from '../../../components/It-Services-Components/Footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import Services from '../../../api/service';
import CustomAnimBtn from '../../../components/It-Services-Components/CustomAnimBtn';
import Link from 'next/link';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function DynamicServicePage({ params }: PageProps) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Find the exact service injected earlier
    const service = Services.find(s => s.slug === slug);

    if (!service) {
        return notFound();
    }

    return (
        <div className="body_wrap it-services" style={{ backgroundColor: 'var(--color-soft-white)' }}>
            <Header2 />

            <main className="page_content">
                {/* 1. HERO SECTION */}
                <section style={{ backgroundColor: 'var(--color-charcoal)', paddingTop: '180px', paddingBottom: '120px', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, backgroundImage: 'radial-gradient(circle at 10% 20%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <span style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: 'var(--color-burnt-orange)', color: '#fff', borderRadius: '30px', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
                                    {service.category} Specialization
                                </span>
                                <h1 style={{ fontSize: '64px', fontWeight: 800, letterSpacing: '-2px', marginBottom: '30px', color: '#fafafa' }}>
                                    {service.title}
                                </h1>
                                <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', fontWeight: 500, lineHeight: 1.6, marginBottom: '40px' }}>
                                    {service.description || 'Custom technology solutions built to scale your business and automate operations.'}
                                </p>
                                <CustomAnimBtn href="/pricing" label="View Full Agency Pricing" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE BUSINESS MODEL DATA SECTION */}
                <section style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--color-charcoal)', letterSpacing: '-1.5px', marginBottom: '30px' }}>
                                    Is This Right For You?
                                </h2>
                                <p style={{ fontSize: '18px', color: 'rgba(28,28,30,0.6)', fontWeight: 500, lineHeight: 1.6, marginBottom: '30px' }}>
                                    We specifically engineered this offering to serve high-performance businesses. If you fit this profile, this solution will easily return its investment.
                                </p>

                                <div style={{ backgroundColor: 'rgba(28,28,30,0.03)', padding: '30px', borderRadius: '20px', borderLeft: '4px solid var(--color-burnt-orange)' }}>
                                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        Target Audience
                                    </h4>
                                    <p style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--color-burnt-orange)' }}>
                                        {service.targetClients || 'Forward-thinking businesses worldwide'}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '24px',
                                    padding: '50px 40px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                                    border: '1px solid rgba(28,28,30,0.05)'
                                }}>
                                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                        <span style={{ fontSize: '14px', fontWeight: 700, color: 'rgba(28,28,30,0.5)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            Investment Range
                                        </span>
                                        <h3 style={{ fontSize: '52px', fontWeight: 800, color: 'var(--color-charcoal)', marginTop: '10px', marginBottom: '0', letterSpacing: '-2px' }}>
                                            {service.priceRange || 'Custom'}
                                        </h3>
                                        <p style={{ fontSize: '15px', color: 'rgba(28,28,30,0.6)', fontWeight: 500, marginTop: '10px' }}>
                                            Pricing scales depending on feature complexity and logic depth.
                                        </p>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        {[
                                            'End-to-End Engineering',
                                            'Strict Security Architecture',
                                            'Beautiful Intuitive UI/UX',
                                            'Post-launch Support Eligible'
                                        ].map((feat, i) => (
                                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: 600, color: 'var(--color-charcoal)' }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-burnt-orange)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                    <div style={{ textAlign: 'center' }}>
                                        <Link href="/contact" style={{
                                            display: 'block',
                                            width: '100%',
                                            padding: '18px 0',
                                            backgroundColor: 'var(--color-charcoal)',
                                            color: '#ffffff',
                                            borderRadius: '50px',
                                            fontWeight: 700,
                                            fontSize: '18px',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease'
                                        }}
                                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-burnt-orange)' }}
                                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-charcoal)' }}
                                        >
                                            Inquire About This Service
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <Scrollbar />
        </div>
    );
}

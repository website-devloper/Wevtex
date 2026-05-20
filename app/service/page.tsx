'use client';

import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/It-Services-Components/Footer/Footer';
import WorkProcess from '../../components/It-Services-Components/WorkProcess/WorkProcess';
import TechStack from '../../components/about/TechStack';
import ServiceDetail from '../../components/services/ServiceDetail';
import PricingSection from '../pricing/Pricing';
import FaqSection from '../../components/FaqSection/FaqSection';
import ProjectSection from '../../components/It-Services-Components/ProjectSection/ProjectSection';
import ParallaxSection from '../../components/It-Services-Components/PerallaxSection/PerallaxSection';
import Link from 'next/link';
import Scrollbar from '../../components/scrollbar/scrollbar';

const ServicePage: React.FC = () => {
  return (
    <Fragment>
      <div className="body_wrap it-services">
        <Header2 />

        {/* Wevtex Services Hero */}
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
                  Our Services
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
                  Everything Your Business Needs to Grow Online
                </h1>
                <p style={{ color: 'rgba(250,250,250,0.7)', fontSize: '20px', maxWidth: '750px', lineHeight: 1.6, marginBottom: '40px' }}>
                  From stunning websites to powerful desktop applications — we build the digital infrastructure that powers your growth.
                </p>
                <div className="d-flex flex-wrap gap-4 mt-20">
                  <Link
                    href="/contact"
                    className="thm-btn thm-btn--fill_icon thm-btn--white_icon"
                    style={{ backgroundColor: 'var(--color-burnt-orange)', border: 'none' }}
                  >
                    <div className="xb-item--hidden">
                      <span className="xb-item--hidden-text" style={{ color: 'var(--color-charcoal)' }}>Get Started</span>
                    </div>
                    <div className="xb-item--holder">
                      <span className="xb-item--text">Get Started</span>
                      <div className="xb-item--icon">
                        <i className="far fa-long-arrow-right"></i>
                      </div>
                      <span className="xb-item--text">Get Started</span>
                    </div>
                  </Link>

                  <Link
                    href="#services-list"
                    className="thm-btn thm-btn--fill_icon thm-btn--outline"
                    style={{ backgroundColor: 'transparent', border: '1px solid rgba(250,250,250,0.5)', color: 'var(--color-soft-white)' }}
                  >
                    <div className="xb-item--hidden">
                      <span className="xb-item--hidden-text" style={{ color: 'var(--color-soft-white)' }}>Explore Services</span>
                    </div>
                    <div className="xb-item--holder">
                      <span className="xb-item--text">Explore Services</span>
                      <div className="xb-item--icon">
                        <i className="far fa-long-arrow-right"></i>
                      </div>
                      <span className="xb-item--text">Explore Services</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main id="services-list" className="page_content">

          <ServiceDetail
            title="Web Development"
            description="We design and build fast, modern, conversion-optimized websites using the latest technologies. Every site is mobile-first, SEO-ready, and built to scale with your business."
            features={[
              "Custom design tailored to your brand",
              "Next.js / React for maximum performance",
              "SEO optimized from day one"
            ]}
            timeline="2–4 weeks"
            startingPrice="5,000 MAD"
            image="/images/bg/page_bg01.jpg"
          />

          <ServiceDetail
            title="Desktop Applications"
            description="We build cross-platform desktop software using Electron and Tauri that runs natively on Windows and macOS. CRMs, POS systems, dashboards — custom-built for your operations."
            features={[
              "Cross-platform: Windows & macOS",
              "Offline-first architecture",
              "Custom CRM, ERP & POS systems",
              "Auto-update & installer included"
            ]}
            roiStat={{ label: "Average Impact", value: "Saves 4+ hours daily" }}
            image="/images/bg/parallax.jpg"
            reverse={true}
          />

          <ServiceDetail
            title="Digital Strategy"
            description="Not sure where to start? We analyse your business, identify the biggest growth opportunities, and build a clear digital roadmap you can execute immediately."
            features={[
              "Full digital audit",
              "Competitor analysis",
              "Growth roadmap document",
              "Monthly strategy calls",
              "KPI tracking setup"
            ]}
            image="/images/bg/page_bg01.jpg"
          />

          <WorkProcess />

          <TechStack />

          <PricingSection />

          <FaqSection />

          <ProjectSection />

          <ParallaxSection
            imageUrl="/images/bg/parallax.jpg"
            title="Not sure which service you need?"
            description="Book a free 30-minute discovery call and let's find the absolute best technical solution for your business."
            primaryBtnText="Book Free Consultation"
            primaryBtnLink="/contact"
          />

        </main>

        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};

export default ServicePage;

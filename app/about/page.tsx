'use client';

import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/It-Services-Components/Footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import WorkProcess from '../../components/It-Services-Components/WorkProcess/WorkProcess';
import FunFactSection from '../../components/It-Services-Components/FunFact/FunFact';
import ParallaxSection from '../../components/It-Services-Components/PerallaxSection/PerallaxSection';
import OurStory from '../../components/about/OurStory';
import VisionMission from '../../components/about/VisionMission';
import OurValues from '../../components/about/OurValues';
import TechStack from '../../components/about/TechStack';
import Achievements from '../../components/about/Achievements';
import TeamGrid from '../../components/about/TeamGrid';

const AboutUsPage: React.FC = () => {
  return (
    <Fragment>
      <div className="body_wrap it-services">
        <Header2 />

        {/* Wevtex About Page Hero */}
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
                  We are Wevtex
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
                  We Build the Web.<br />We Automate the Future.
                </h1>
                <p style={{ color: 'rgba(250,250,250,0.7)', fontSize: '20px', maxWidth: '750px', lineHeight: 1.6 }}>
                  Wevtex is a Casablanca-based digital agency combining world-class web development with cutting-edge AI automation.
                  Empowering businesses to grow faster by making smart technology accessible and affordable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <main className="page_content">

          {/* Phase 1 Assembly */}
          <OurStory />

          {/* Phase 2 Assembly */}
          <VisionMission />
          <OurValues />

          {/* Core Reusables */}
          <WorkProcess />

          {/* Phase 3 Assembly */}
          <TechStack />
          <Achievements />

          <TeamGrid />

          <ParallaxSection
            imageUrl={'/images/bg/parallax.jpg'}
            speed={0.5}
            offset={0}
            title="Let's build something great together"
            description="Whether you're looking for an AI-powered enterprise solution or a world-class web experience, our team is ready to deliver."
            primaryBtnText="Get in Touch"
            primaryBtnLink="/contact"
          />

        </main>

        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};

export default AboutUsPage;

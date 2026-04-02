'use client';

import React from 'react';
import PortfolioHero from './PortfolioHero';
import PortfolioMasonryGrid from './PortfolioMasonryGrid';
import ProjectSection from '../ProjectSection/ProjectSection';
import FunFactSection from '../It-Services-Components/FunFact/FunFact';
import Testimonial from '../It-Services-Components/Testimonial/Testimonial';
import ParallaxSection from '../It-Services-Components/PerallaxSection/PerallaxSection';

const PortfolioPageClient: React.FC = () => {
    return (
        <>
            {/* Scoped overrides for Portfolio page consistency */}
            <style>{`
                /* Testimonial text overflow fix */
                .testimonial-item .xb-item--content {
                    overflow: hidden;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                .testimonial-item .xb-item--holder {
                    overflow: hidden;
                }
            `}</style>

            <PortfolioHero />
            <PortfolioMasonryGrid />
            <ProjectSection />
            <FunFactSection />
            <Testimonial />
            <ParallaxSection
                imageUrl={'/images/bg/parallax.jpg'}
                speed={0.5}
                offset={0}
                title="Your project could be next."
                description="Let's build something that gets real results."
                primaryBtnText="Start a Project"
                primaryBtnLink="/contact"
                secondaryBtnText="View Services"
                secondaryBtnLink="/service"
            />
        </>
    );
};

export default PortfolioPageClient;

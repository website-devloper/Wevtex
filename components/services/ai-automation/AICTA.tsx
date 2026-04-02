'use client';

import React from 'react';
import ParallaxSection from '../../It-Services-Components/PerallaxSection/PerallaxSection';

const AICTA: React.FC = () => {
    return (
        <ParallaxSection
            imageUrl={'/images/bg/parallax.jpg'}
            speed={0.5}
            offset={0}
            title="Let's automate your business."
            description="Partner with Wevtex to build intelligent automation systems that eliminate repetitive work and unlock scalable growth."
            primaryBtnText="Get Free Audit"
            primaryBtnLink="/contact"
            secondaryBtnText="See Our Process"
            secondaryBtnLink="#ai-pipeline"
        />
    );
};

export default AICTA;

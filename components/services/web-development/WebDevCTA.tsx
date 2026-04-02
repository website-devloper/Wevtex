'use client';

import React from 'react';
import ParallaxSection from '../../It-Services-Components/PerallaxSection/PerallaxSection';

const WebDevCTA: React.FC = () => {
    return (
        <ParallaxSection
            imageUrl={'/images/bg/parallax.jpg'}
            speed={0.5}
            offset={0}
            title="Ready to build your digital authority?"
            description="Partner with Wevtex to build scalable, high-performance web applications tailored to your unique requirements."
            primaryBtnText="Get in Touch"
            primaryBtnLink="/contact"
            secondaryBtnText="View Case Studies"
            secondaryBtnLink="/portfolio"
        />
    );
};

export default WebDevCTA;

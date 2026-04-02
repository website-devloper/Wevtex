import React, { Fragment } from 'react';
import Header2 from '../components/Header2/Header2';
import Hero2 from '../components/hero2/hero2';
import FeatureSection from '../components/It-Services-Components/FeatureSection';
import About from '../components/It-Services-Components/about/about';
import ServiceSection from '../components/It-Services-Components/ServiceSection/ServiceSection';
import BrandSection from '../components/It-Services-Components/BrandSection/BrandSection';
import FunFactSection from '../components/It-Services-Components/FunFact/FunFact';
import ProjectSection from '../components/It-Services-Components/ProjectSection/ProjectSection';
import WorkProcess from '../components/It-Services-Components/WorkProcess/WorkProcess';
import PricingSection from './pricing/Pricing';
import ParallaxSection from '../components/It-Services-Components/PerallaxSection/PerallaxSection';
import Testimonial from '../components/It-Services-Components/Testimonial/Testimonial';
import TeamSection from '../components/It-Services-Components/TeamSection/TeamSection';
import ContactSection from '../components/It-Services-Components/ContactSection';
import Footer from '../components/It-Services-Components/Footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import AiIntelligenceHub from '../components/It-Services-Components/AiIntelligenceHub/AiIntelligenceHub';

const HomePage = () => {

    return (
        <Fragment>
            <div className='body_wrap it-services'>
                <Header2 />
                <main className="page_content">
                    <Hero2 />
                    <BrandSection />
                    <ServiceSection />
                    <div className="bg-white">
                        <FeatureSection />
                        <About />
                    </div>
                    <ProjectSection />
                    <WorkProcess />
                    <Testimonial />
                    <FunFactSection />
                    <PricingSection />
                    <AiIntelligenceHub />
                    <ParallaxSection
                        imageUrl={'/images/bg/parallax.jpg'}
                        speed={0.5}
                        offset={0}
                        title="Ready to grow your business?"
                        description="Partner with Wevtex to build scalable, high-performance web applications and enterprise AI solutions tailored to your unique requirements."
                        primaryBtnText="Get a Quote"
                        primaryBtnLink="/contact"
                        secondaryBtnText="View Services"
                        secondaryBtnLink="/services"
                    />
                    <ContactSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;
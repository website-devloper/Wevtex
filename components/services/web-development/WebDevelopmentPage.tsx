'use client';


import Header2 from '../../Header2/Header2';
import Footer from '../../It-Services-Components/Footer/Footer';
import Scrollbar from '../../scrollbar/scrollbar';

// Sprint 1 Components
import WebDevHero from './WebDevHero';
import ProblemGrid from './ProblemGrid';
import DeliverablesList from './DeliverablesList';
import HorizontalTimeline from './HorizontalTimeline';
import BespokeTechGrid from './BespokeTechGrid';
import Pricing from '../../../app/pricing/Pricing';
import BeforeAfterCards from './BeforeAfterCards';
import InvestmentTimeline from './InvestmentTimeline';
import WebDevFaq from './WebDevFaq';
import WebDevCTA from './WebDevCTA';

export default function WebDevelopmentPage() {
    return (
        <>
            <div className="body_wrap it-services">
                <Header2 />

                <main className="page_content">
                    <WebDevHero />
                    <ProblemGrid />
                    <DeliverablesList />
                    <HorizontalTimeline />
                    <BespokeTechGrid />
                    <Pricing />
                    <BeforeAfterCards />
                    <InvestmentTimeline />
                    <WebDevFaq />
                    <WebDevCTA />
                </main>

                <Footer />
                <Scrollbar />
            </div>
        </>
    );
}

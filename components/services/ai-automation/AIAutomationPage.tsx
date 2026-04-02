'use client';

import Header2 from '../../Header2/Header2';
import Footer from '../../It-Services-Components/Footer/Footer';
import Scrollbar from '../../scrollbar/scrollbar';

// AI Automation Components
import AIHero from './AIHero';
import AIProblemGrid from './AIProblemGrid';
import AICapabilities from './AICapabilities';
import AIPipeline from './AIPipeline';
import AIProcess from './AIProcess';
import AITechStack from './AITechStack';
import AIResults from './AIResults';
import AICalculator from './AICalculator';
import AIFaq from './AIFaq';
import AICTA from './AICTA';

export default function AIAutomationPage() {
    return (
        <>
            <div className="body_wrap it-services">
                <Header2 />

                <main className="page_content">
                    <AIHero />
                    <AIProblemGrid />
                    <AICapabilities />
                    <AIPipeline />
                    <AIProcess />
                    <AITechStack />
                    <AIResults />
                    <AICalculator />
                    <AIFaq />
                    <AICTA />
                </main>

                <Footer />
                <Scrollbar />
            </div>
        </>
    );
}

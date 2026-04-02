import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/It-Services-Components/Footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import PortfolioPageClient from '../../components/portfolio/PortfolioPageClient';

const PortfolioPage = () => {
    return (
        <Fragment>
            <div className="body_wrap it-services">
                <Header2 />
                <main className="page_content">
                    <PortfolioPageClient />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    );
};

export default PortfolioPage;

import React, { Fragment } from 'react';
import Header2 from '../../../components/Header2/Header2';
import Footer from '../../../components/It-Services-Components/Footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import icon from '@/public/images/icon/eye-icon.svg';
import sImg1 from '@/public/images/hero/cd-img02.png';
import sImg2 from '@/public/images/shape/brd_shape.png';
import Image from 'next/image';

import { fetchAPI } from '../../../utils/api';

export default async function PortfolioDetails({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;

    let projectData = null;
    try {
        const res = await fetchAPI(`/projects?filters[slug][$eq]=${resolvedParams.slug}&populate=*`);
        if (res && res.data && res.data.length > 0) {
            projectData = res.data[0];
        }
    } catch (e) {
        console.warn("Strapi fetch failed, using fallback portfolio data.");
    }

    const formatSlug = (slug: string) => slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    // Dynamic mapping w/ Fallbacks
    const title = projectData?.client || formatSlug(resolvedParams.slug);
    const challenge = projectData?.challenge || `Initial constraints involved scaling their infrastructure securely without downtime. The project "${title}" required robust engineering processes.`;
    const solution = projectData?.solution || `We architected an end-to-end robust pipeline integrating customized Strapi endpoints and Next.js frontend performance tuning.`;
    const results = projectData?.results || `Achieved a 40% reduction in latency and highly resilient systems.`;

    const tags = projectData?.technicalTags || ["Cloud Solutions", "Next.js", "Node.js"];

    return (
        <Fragment>
            <div className="body_wrap it-services">
                <Header2 />
                <section
                    className="page-title pt-200 pos-rel bg_img"
                    style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')`, backgroundColor: 'var(--color-charcoal)' }}
                >
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title">
                                            <Image src={icon} alt="" /> Project Case Study
                                        </span>
                                        <h2 className="title" style={{ color: 'var(--color-soft-white)' }}>
                                            {title}
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-30">
                                    <div className="sd-right-img pos-rel">
                                        <Image src={sImg1} alt="" />
                                        <div className="sd-arrow-shape style-2">
                                            <Image className="xbzoominzoomup" src={sImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="page_content">
                    <section className="case-study-details pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h3 className="mb-20">The Challenge</h3>
                                    <p className="mb-40">{challenge}</p>

                                    <h3 className="mb-20">Our Solution</h3>
                                    <p className="mb-40">{solution}</p>

                                    <h3 className="mb-20">The Results</h3>
                                    <p>{results}</p>

                                    {!projectData && (
                                        <div className="mt-20">
                                            <p style={{ color: 'var(--color-burnt-orange)' }}>
                                                Running in Fallback Mode. Start Strapi and add a Project with slug "{resolvedParams.slug}" to see dynamic CMS content.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-4">
                                    <div className="project-info-box p-4" style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-soft-white)' }}>
                                        <h4 className="mb-20 text-white">Project Info</h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-15"><strong>Client:</strong> {title}</li>
                                            <li className="mb-15"><strong>Type:</strong> Case Study</li>
                                            <li className="mb-15"><strong>Tech Stack:</strong> {tags.join(', ')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    );
}

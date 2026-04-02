'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

// Backgrounds & Avatars
import bg from '@/public/images/team/team-bg.jpg';
import tImg1 from '@/public/images/team/img01.png';
import tImg2 from '@/public/images/team/img02.png';
import tImg3 from '@/public/images/team/img03.png';

interface TeamMember {
    name: string;
    title: string;
    exprience: string;
    rating: string;
    tImg: StaticImageData;
}

const Teams: TeamMember[] = [
    {
        name: 'Tariq A.',
        title: 'Founder & Strategy',
        exprience: '10+ Years',
        rating: '5.0',
        tImg: tImg1,
    },
    {
        name: 'Youssef M.',
        title: 'Lead AI Architect',
        exprience: '8+ Years',
        rating: '5.0',
        tImg: tImg2,
    },
    {
        name: 'Sara B.',
        title: 'Senior Web Engineer',
        exprience: '6+ Years',
        rating: '4.9',
        tImg: tImg3,
    },
];

const TeamGrid: React.FC = () => {
    return (
        <section className="team pt-130 pb-130 bg-white">
            <div className="container">

                <div className="sec-title text-center mb-60">
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
                        The Minds Behind Wevtex
                    </span>
                    <h2 className="title" style={{ color: 'var(--color-charcoal)', letterSpacing: '-1px' }}>
                        Meet the Core Team
                    </h2>
                </div>

                <div className="row mt-none-30 justify-content-center">
                    {Teams.map((team, tsm) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 mt-30" key={tsm}>
                            <div className="team-item">
                                <div className="xb-item--content pos-rel">
                                    <div className="xb-item--img">
                                        <Image src={bg} alt="Team Background" />
                                    </div>
                                    <div className="xb-item--item">
                                        <span className="xb-item--skill">{team.exprience}</span>
                                        <span className="xb-item--reating"><i className="fas fa-star"></i> {team.rating}</span>
                                    </div>
                                </div>
                                <div className="xb-item--inner ul_li_between align-items-end">
                                    <div className="xb-item--holder">
                                        <div className="xb-item--avatar">
                                            <Image src={team.tImg} alt={team.name} />
                                        </div>
                                        <div className="xb-item--author">
                                            <h3 className="xb-item--name">{team.name}</h3>
                                            <span className="xb-item--desig">{team.title}</span>
                                        </div>
                                    </div>
                                    <ul className="xb-item--social-link ul_li">
                                        <li>
                                            <Link href="#" aria-label="LinkedIn">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" aria-label="Custom Icon">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.6883 7.62176L17.2244 0H15.6756L10.0002 6.61789L5.46738 0H0.239258L7.09382 10.0074L0.239258 18H1.7882L7.7815 11.0113L12.5685 18H17.7967L10.6879 7.62176H10.6883ZM2.3463 1.16972H4.72537L15.6763 16.8835H13.2972L2.3463 1.16972Z" fill="#111112" />
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamGrid;

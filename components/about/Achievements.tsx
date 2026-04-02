'use client';

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import fImg1 from '@/public/images/fanfact/img01.png';
import fImg2 from '@/public/images/fanfact/img02.png';
import fImg3 from '@/public/images/fanfact/img03.png';
import fImg4 from '@/public/images/fanfact/img04.png';
import fImg5 from '@/public/images/fanfact/img05.png';
import fImg6 from '@/public/images/fanfact/img06.png';
import sIcon1 from '@/public/images/icon/fun_icon01.png';
import sIcon2 from '@/public/images/icon/fun_icon02.png';
import sIcon3 from '@/public/images/icon/fun_icon03.png';
import Image, { StaticImageData } from 'next/image';

interface AchievementItem {
    number: string;
    title: string;
    subTitle: string;
    text: string;
    symbol: string;
    icon: StaticImageData;
    funImg1: StaticImageData;
    funImg2: StaticImageData;
    duration: number;
    style?: string;
}

const AchievementsData: AchievementItem[] = [
    {
        number: '15',
        title: 'Recognition',
        subTitle: 'For excellence in web & AI.',
        text: 'Industry Awards',
        symbol: '+',
        icon: sIcon1,
        funImg1: fImg1,
        funImg2: fImg2,
        duration: 800,
    },
    {
        number: '50',
        title: 'Verified',
        subTitle: 'AWS, React, Node, OpenAI.',
        text: 'Certifications',
        symbol: '+',
        icon: sIcon2,
        style: 'fanfact-icon--two',
        funImg1: fImg3,
        funImg2: fImg4,
        duration: 900,
    },
    {
        number: '200',
        title: 'Progress',
        subTitle: 'Key delivery targets hit.',
        text: 'Client Milestones',
        symbol: '+',
        icon: sIcon3,
        style: 'fanfact-icon--three',
        funImg1: fImg5,
        funImg2: fImg6,
        duration: 1000,
    },
    {
        number: '10',
        title: 'Excellence',
        subTitle: 'Building the digital future.',
        text: 'Years Experience',
        symbol: '+',
        icon: sIcon1,
        funImg1: fImg1,
        funImg2: fImg2,
        duration: 1100,
    },
];

const Achievements: React.FC = () => {
    return (
        <section className="fanfact o-hidden pt-120 pb-120">
            <div className="container">
                <div className="sec-title text-center mb-60">
                    <h2 className="title" style={{ color: 'var(--color-charcoal)', letterSpacing: '-1px' }}>Achievements & Milestones</h2>
                </div>
                <div className="row mt-none-40 justify-content-center">
                    {AchievementsData.map((item, index) => (
                        <div className="col-lg-3 col-md-6 mt-40" key={index}>
                            <Fade direction="up" triggerOnce duration={item.duration}>
                                <div>
                                    <div className="fanfact-item">
                                        <div className="xb-item--holder pos-rel z-1">
                                            <h5 className="xb-item--title">{item.title}</h5>
                                            <p className="xb-item--content">{item.subTitle}</p>
                                            <span className="xb-item--number">
                                                <CountUp end={Number(item.number)} enableScrollSpy />
                                                {item.symbol}
                                            </span>
                                            <span className="xb-item--text">{item.text}</span>
                                        </div>
                                        <div className={`fanfact-icon ${item.style ?? ''}`}>
                                            <div className="icon icon--one">
                                                <Image src={item.funImg1} alt="" />
                                            </div>
                                            <div className="icon icon--two">
                                                <Image src={item.funImg2} alt="" />
                                            </div>
                                            <div className="icon icon--three">
                                                <Image src={item.icon} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;

'use client';

import React, { FC } from 'react';
import { Slide } from 'react-awesome-reveal';
import Image from 'next/image';

// Icon assets
import icon1 from '@/public/images/icon/user-icon.png';
import icon2 from '@/public/images/icon/music-play.png';
import icon3 from '@/public/images/icon/dollar-circle.png';

// Feature item type
interface ValueItem {
    title: string;
    des: string;
    icon: any;
    duration: number;
}

// Features data mapped to Wevtex Our Values
const Values: ValueItem[] = [
    {
        title: 'Innovation',
        des: 'We embrace new technology before it becomes mainstream.',
        icon: icon2,
        duration: 1000,
    },
    {
        title: 'Transparency',
        des: 'No hidden fees, no surprises, just honest work.',
        icon: icon1,
        duration: 1200,
    },
    {
        title: 'Quality',
        des: "We don't ship until it's perfect.",
        icon: icon3,
        duration: 1400,
    },
    {
        title: 'Results',
        des: 'We measure our success strictly by your growth.',
        icon: icon1,
        duration: 1600,
    },
];

const OurValues: FC = () => {
    return (
        <div className="feature pt-110 pb-130 bg-white">
            <div className="container">
                <div className="sec-title text-center mb-60">
                    <h2 className="title" style={{ color: 'var(--color-charcoal)', letterSpacing: '-1px' }}>Our Core Values</h2>
                </div>
                <div className="feature-wrap">
                    <div className="row mt-none-30">
                        {Values.map((val, index) => (
                            <div className="col-lg-3 col-md-6 mt-30" key={index}>
                                <Slide direction="up" triggerOnce={true} duration={val.duration}>
                                    <div className="feature-item ul_li">
                                        <div className="xb-item--icon">
                                            <span>
                                                <Image src={val.icon} alt={val.title} />
                                            </span>
                                        </div>
                                        <div className="xb-item--holder">
                                            <h4 className="xb-item--title">{val.title}</h4>
                                            <p className="xb-item--content">{val.des}</p>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValues;

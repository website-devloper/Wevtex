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

interface FunFactItem {
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

const FunFact: FunFactItem[] = [
  {
    number: '300',
    title: 'Projects',
    subTitle: 'Production-ready apps deployed.',
    text: 'Projects delivered',
    symbol: '+',
    icon: sIcon1,
    funImg1: fImg1,
    funImg2: fImg2,
    duration: 800,
  },
  {
    number: '120',
    title: 'Happy',
    subTitle: 'B2B & Enterprise partners.',
    text: 'Active Clients',
    symbol: '+',
    icon: sIcon2,
    style: 'fanfact-icon--two',
    funImg1: fImg3,
    funImg2: fImg4,
    duration: 900,
  },
  {
    number: '15',
    title: 'Operating in',
    subTitle: 'A global footprint reaching far.',
    text: 'Countries',
    symbol: '+',
    icon: sIcon3,
    style: 'fanfact-icon--three',
    funImg1: fImg5,
    funImg2: fImg6,
    duration: 1000,
  },
  {
    number: '5',
    title: 'Dedicated',
    subTitle: 'Deep industry experience.',
    text: 'Years in business',
    symbol: '+',
    icon: sIcon1,
    funImg1: fImg1,
    funImg2: fImg2,
    duration: 1100,
  },
];

const FunFactSection: React.FC = () => {
  return (
    <section className="fanfact o-hidden pt-140 pb-145">
      <div className="container">
        <div className="row mt-none-40 justify-content-center">
          {FunFact.map((funfact, index) => (
            <div className="col-lg-3 col-md-6 mt-40" key={index}>
              <Fade direction="up" triggerOnce duration={funfact.duration} delay={6}>
                <div>
                  <div className="fanfact-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                    <div className="xb-item--holder pos-rel z-1">
                      <h5 className="xb-item--title">{funfact.title}</h5>
                      <p className="xb-item--content">{funfact.subTitle}</p>
                      <span className="xb-item--number">
                        <CountUp end={Number(funfact.number)} enableScrollSpy />
                        {funfact.symbol}
                      </span>
                      <span className="xb-item--text">{funfact.text}</span>
                    </div>
                    <div className={`fanfact-icon ${funfact.style ?? ''}`}>
                      <div className="icon icon--one">
                        <Image src={funfact.funImg1} alt="" />
                      </div>
                      <div className="icon icon--two">
                        <Image src={funfact.funImg2} alt="" />
                      </div>
                      <div className="icon icon--three">
                        <Image src={funfact.icon} alt="" />
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

export default FunFactSection;

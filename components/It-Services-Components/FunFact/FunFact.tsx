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
    <section className="fanfact o-hidden pt-120 pb-120" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container">
        <div className="row justify-content-center g-4">
          {FunFact.map((funfact, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <Fade direction="up" triggerOnce duration={funfact.duration} delay={index * 100}>
                <div
                  className="stat-bento-card"
                  style={{
                    backgroundColor: '#1c1c1e',
                    padding: '40px 30px',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    height: '100%',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}
                >
                  {/* Subtle Accent Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(226, 72, 30, 0.03) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }}></div>

                  <div className="xb-item--holder pos-rel z-1">
                    <div className="mb-4" style={{ position: 'relative', width: '60px', height: '60px', margin: '0 auto' }}>
                      <Image
                        src={funfact.icon}
                        alt={funfact.title}
                        style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(-15deg)' }}
                      />
                    </div>

                    <span
                      className="xb-item--number d-block mb-2"
                      style={{
                        fontSize: '48px',
                        fontWeight: '800',
                        color: '#ffffff',
                        lineHeight: '1',
                        letterSpacing: '-1px'
                      }}
                    >
                      <CountUp end={Number(funfact.number)} enableScrollSpy duration={2.5} />
                      <span style={{ color: '#e2481e' }}>{funfact.symbol}</span>
                    </span>

                    <h5
                      className="xb-item--title mb-2"
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                    >
                      {funfact.text}
                    </h5>

                    <p
                      className="xb-item--content"
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.5)',
                        lineHeight: '1.4',
                        maxWidth: '200px',
                        margin: '0 auto'
                      }}
                    >
                      {funfact.subTitle}
                    </p>
                  </div>

                  <style jsx>{`
                    .stat-bento-card:hover {
                      transform: translateY(-8px);
                      border-color: rgba(226, 72, 30, 0.3);
                      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                      background-color: #242426;
                    }
                  `}</style>
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

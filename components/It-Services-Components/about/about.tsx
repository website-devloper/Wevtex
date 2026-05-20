'use client';

import React, { useState, FC } from 'react';
import about1 from '@/public/images/about/img-01.png';
import about2 from '@/public/images/about/img-02.png';
import about3 from '@/public/images/about/img-03.png';
import aIcon1 from '@/public/images/icon/about-icon01.png';
import aIcon2 from '@/public/images/icon/about-icon02.png';
import aIcon3 from '@/public/images/icon/about-icon03.png';
import Image, { StaticImageData } from 'next/image';

interface AboutItem {
  img: StaticImageData;
  icon: StaticImageData;
  heading: string;
  content: string;
}

const aboutItems: AboutItem[] = [
  {
    img: about1,
    icon: aIcon1,
    heading: 'About us',
    content:
      'Wevtex helps businesses in Morocco and the MENA region grow online by building high-converting websites, web applications, desktop software, and digital strategies that get clients, sell products, and streamline operations.',
  },
  {
    img: about2,
    icon: aIcon2,
    heading: 'Our mission',
    content:
      'To deliver cutting-edge digital solutions that drive business growth, boost productivity, and ensure long-term competitiveness. We are dedicated to scalable, reliable technology and exceptional support — faster and smarter than anyone else.',
  },
  {
    img: about3,
    icon: aIcon3,
    heading: 'Our vision',
    content:
      'To be the only agency in Casablanca combining web development, desktop applications, and SaaS under one brand — empowering every business with professional digital products that deliver real results.',
  },
];

const About: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="about pb-140">
      <div className="container">
        <div className="about-wrap mt-none-30 ul_li_between">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`about-item mt-30 xb-mouseenter wow fadeInUp ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div>
                <div className="xb-item--img">
                  <Image src={item.img} alt={`${item.heading} image`} />
                </div>
                <h3 className="xb-item--heading">
                  <span>
                    <Image src={item.icon} alt={`${item.heading} icon`} />
                  </span>
                  {item.heading}
                </h3>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title">
                    <span>
                      <Image src={item.icon} alt={`${item.heading} icon`} />
                    </span>
                    {item.heading}
                  </h3>
                  <p className="xb-item--content">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

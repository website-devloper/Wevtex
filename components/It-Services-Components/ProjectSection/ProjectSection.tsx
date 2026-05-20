'use client';

import React, { useState, useEffect } from 'react';
import StaticProjects from '../../../api/project';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Fade } from 'react-awesome-reveal';
import Image, { StaticImageData } from 'next/image';
import { fetchAPI, getStrapiURL } from '../../../utils/api';


interface ProjectType {
  slug: string;
  title: string;
  description: string;
  rtext1?: string;
  rtext2?: string;
  rtext3?: string;
  icon?: StaticImageData | string;
  pImg: StaticImageData | string;
}

const ProjectSection: React.FC = () => {
  const [projectsToDisplay, setProjectsToDisplay] = useState<ProjectType[]>([
    {
      slug: 'enterprise-saas',
      title: 'Enterprise SaaS Platform',
      description: 'Automated user onboarding flow with custom Next.js integrations, reducing drop-off by 43%.',
      rtext1: 'Web Development',
      rtext2: 'Desktop App',
      rtext3: 'React',
      icon: StaticProjects[4].icon,
      pImg: StaticProjects[4].pImg,
    },
    {
      slug: 'desktop-crm-platform',
      title: 'Desktop CRM Platform',
      description: 'Built a cross-platform Electron desktop app for a finance firm, cutting daily admin time by 4 hours.',
      rtext1: 'Desktop Application',
      rtext2: 'Electron',
      rtext3: 'CRM',
      icon: StaticProjects[5].icon,
      pImg: StaticProjects[5].pImg,
    },
    {
      slug: 'ecommerce-experience',
      title: 'Global E-Commerce',
      description: 'Re-architected the entire digital storefront with Headless CMS, yielding a 200% conversion boost.',
      rtext1: 'Web Creation',
      rtext2: 'Headless CMS',
      rtext3: 'Performance',
      icon: StaticProjects[6].icon,
      pImg: StaticProjects[6].pImg,
    }
  ]);

  return (
    <section className="project pt-120 pb-120 o-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="pro-top ul_li_between mb-65" style={{ alignItems: 'flex-end' }}>
          <div className="sec-title">
            <span
              style={{
                color: 'var(--color-burnt-orange, #e2481e)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '20px',
                background: 'transparent'
              }}
            >
              Featured Work
            </span>
            <h2 className="title" style={{ letterSpacing: '-1.5px', fontSize: '48px' }}>
              Recent Projects
            </h2>
            <p style={{ color: '#49515b', maxWidth: '600px', margin: '20px 0 0', fontSize: '18px' }}>
              Featured case studies showcasing real Web & Desktop Application results.
            </p>
          </div>
          <div className="xb-btn text-center">
            <Fade direction="right" triggerOnce duration={1000} delay={9}>
              <div>
                <Link href="/portfolio" className="thm-btn thm-btn--fill_icon thm-btn--strock">
                  <div className="xb-item--hidden">
                    <span className="xb-item--hidden-text">Get started now</span>
                  </div>
                  <div className="xb-item--holder">
                    <span className="xb-item--text">View all case study</span>
                    <div className="xb-item--icon">
                      <i className="far fa-long-arrow-right"></i>
                    </div>
                    <span className="xb-item--text">View all case study</span>
                  </div>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="project-wrapper pos-rel">
        <div className="project-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop
            spaceBetween={60}
            speed={400}
            slidesPerView={3}
            centeredSlides
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              1600: { slidesPerView: 3 },
              1024: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {projectsToDisplay.map((project: ProjectType, prj: number) => (
              <SwiperSlide key={prj}>
                <div className="project-item">
                  <div className="xb-item--inner ul_li align-items-start">
                    <div className="xb-item--left_item">
                      {project.icon && (
                        <div className="xb-item--icon">
                          {typeof project.icon === 'string' ? (
                            <Image src={project.icon} alt={`${project.title} icon`} width={50} height={50} />
                          ) : (
                            <Image src={project.icon} alt={`${project.title} icon`} />
                          )}
                        </div>
                      )}
                      <h3 className="xb-item--title">
                        <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p className="xb-item--content">{project.description}</p>

                      <ul className="category list-unstyled ul_li">
                        {project.rtext1 && (
                          <li>
                            <Link href={`/portfolio/${project.slug}`}>{project.rtext1}</Link>
                          </li>
                        )}
                        {project.rtext2 && (
                          <li>
                            <Link href={`/portfolio/${project.slug}`}>{project.rtext2}</Link>
                          </li>
                        )}
                        {project.rtext3 && (
                          <li>
                            <Link href={`/portfolio/${project.slug}`}>{project.rtext3}</Link>
                          </li>
                        )}
                      </ul>

                      <div className="work-btn">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="thm-btn thm-btn--fill_icon thm-btn--strock"
                        >
                          <div className="xb-item--hidden">
                            <span className="xb-item--hidden-text">View case study</span>
                          </div>
                          <div className="xb-item--holder">
                            <span className="xb-item--text">View case study</span>
                            <div className="xb-item--icon">
                              <i className="far fa-long-arrow-right"></i>
                            </div>
                            <span className="xb-item--text">View case study</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="xb-item--right_img">
                      <Link href={`/portfolio/${project.slug}`}>
                        {typeof project.pImg === 'string' ? (
                          <div style={{ width: '400px', height: '400px', backgroundImage: `url(${project.pImg})`, backgroundSize: 'cover' }} />
                        ) : (
                          <Image src={project.pImg} alt={`${project.title} image`} />
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

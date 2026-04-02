'use client';

import React, { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import CustomAnimBtn from "../CustomAnimBtn";

interface ParallaxSectionProps {
  imageUrl?: string;
  speed?: number;
  offset?: number;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageUrl = "/images/bg/parallax.jpg",
  speed = 0.5,
  offset = 0,
  title = "Looking for the best IT business solutions?",
  description = "As a app web crawler expert, We will help to organize.",
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = parallaxRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;

      // Calculate Y offset for parallax effect
      const yOffset = ((scrollTop - offsetTop) * speed + window.innerHeight * offset) / 2;

      element.style.transform = `translateY(${yOffset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call to set position on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, offset]);

  return (
    <section
      className="parallax-section"
      style={{
        margin: 0,
        padding: 0,
        position: "relative",
        overflow: "hidden",
        height: "850px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={parallaxRef}
        className="parallax-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "120%",
          position: "absolute",
          top: "-10%",
          left: 0,
          zIndex: -2,
        }}
      />
      {/* Dark Overlay for accessibility and contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(28, 28, 30, 0.75)",
          zIndex: -1,
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <Fade direction="up" triggerOnce duration={1000}>
              <h2
                style={{
                  color: "var(--color-soft-white)",
                  fontSize: "56px",
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  marginBottom: "20px",
                  lineHeight: 1.1,
                }}
              >
                {title}
              </h2>
            </Fade>
            <Fade direction="up" triggerOnce duration={1000} delay={200}>
              <p
                style={{
                  color: "rgba(250, 250, 250, 0.8)",
                  fontSize: "1.25rem",
                  marginBottom: "40px",
                }}
              >
                {description}
              </p>
            </Fade>
            <Fade direction="up" triggerOnce duration={1000} delay={400}>
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                {primaryBtnText && <CustomAnimBtn href={primaryBtnLink || "#"} label={primaryBtnText} />}
                {secondaryBtnText && (
                  <div className="secondary-btn-wrapper">
                    <CustomAnimBtn href={secondaryBtnLink || "#"} label={secondaryBtnText} outline={true} />
                  </div>
                )}
              </div>
              <style>{`
                .secondary-btn-wrapper .thm-btn {
                  background-color: var(--color-charcoal) !important;
                }
                .secondary-btn-wrapper .thm-btn:hover {
                  background-color: var(--color-burnt-orange) !important;
                }
              `}</style>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;

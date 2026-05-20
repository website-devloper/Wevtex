'use client';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

const AiIntelligenceHub: FC = () => {
  return (
    <section
      className="ai-intelligence-hub pb-130 pt-130"
      style={{
        backgroundColor: '#FFF1E6', // Exact Peach Tint 
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content Column */}
          <div className="col-lg-5">
            <Fade direction="left" triggerOnce duration={1000}>
              <div className="content-wrapper pr-30">
                <span
                  style={{
                    color: 'var(--color-burnt-orange)',
                    fontWeight: 700,
                    fontSize: '14px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '20px',
                    background: 'transparent'
                  }}
                >
                  Development Ecosystem
                </span>
                <h2
                  className="title mb-40 wow fadeInUp"
                  style={{
                    color: 'var(--color-charcoal)',
                    fontSize: '48px',
                    fontWeight: 500,
                    lineHeight: 1.15,
                    marginBottom: '30px',
                  }}
                >
                  Build Anything. Ship Everywhere.
                </h2>
                <p
                  style={{
                    color: 'rgba(28, 28, 30, 0.65)',
                    fontSize: '18px',
                    lineHeight: 1.7,
                    marginBottom: '45px'
                  }}
                >
                  We don't just build websites; we engineer complete digital products.
                  From high-converting web applications to cross-platform desktop software,
                  our full-stack architecture delivers performance and scalability from day one.
                </p>
                <div className="stats-row d-flex gap-5">
                  <div className="stat-block">
                    <h3 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--color-burnt-orange)', margin: '0 0 5px 0', letterSpacing: '-1px' }}>
                      &lt; 50ms
                    </h3>
                    <span style={{ color: 'var(--color-charcoal)', fontWeight: 600, fontSize: '15px' }}>API Response</span>
                  </div>
                  <div className="stat-block">
                    <h3 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--color-burnt-orange)', margin: '0 0 5px 0', letterSpacing: '-1px' }}>
                      10x
                    </h3>
                    <span style={{ color: 'var(--color-charcoal)', fontWeight: 600, fontSize: '15px' }}>Operational ROI</span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Right Interactive Orbit Column */}
          <div className="col-lg-7 mt-lg-0 mt-5">
            <Fade direction="right" triggerOnce duration={1500}>
              <div
                className="orbit-wrapper"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '600px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: '50px'
                }}
              >
                {/* 1. OUTERMOST ORBIT RING */}
                <div className="orbit-ring ring-outer"></div>

                {/* 2. INNER ORBIT RING */}
                <div className="orbit-ring ring-inner"></div>

                {/* THE BRAIN (Center Node) */}
                <div className="brain-core">
                  <div className="brain-pulse-1"></div>
                  <div className="brain-pulse-2"></div>
                  <div className="brain-solid shadow-lg">
                    <h3 style={{ margin: 0, fontWeight: 900, fontSize: '32px', color: 'var(--color-charcoal)', letterSpacing: '-1px' }}>
                      Wevtex<span style={{ color: 'var(--color-burnt-orange)' }}>.</span>
                    </h3>
                  </div>
                </div>

                {/* SATELLITE NODES */}
                {/* Flutter Node */}
                <div className="satellite-node node-n8n shadow-md">
                  Flutter
                </div>

                {/* React Node */}
                <div className="satellite-node node-react shadow-lg">
                  React
                </div>

                {/* Next.js Node */}
                <div className="satellite-node node-nextjs shadow-sm">
                  Next.js
                </div>

                {/* Node.js Node */}
                <div className="satellite-node node-openai shadow-md">
                  Node.js
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* CSS For Mind-Blowing Animations & Exact Positioning */}
      <style>{`
        /* Orbit Rings */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(28, 28, 30, 0.12);
        }
        .ring-outer {
          width: 550px;
          height: 550px;
        }
        .ring-inner {
          width: 350px;
          height: 350px;
        }

        /* The Brain Central Core */
        .brain-core {
          position: relative;
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .brain-solid {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: var(--color-soft-white);
          border: 3px solid var(--color-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          box-shadow: 0 25px 50px -12px rgba(28, 28, 30, 0.15);
        }
        
        /* Mind-Blowing Sonar Pulses from Brain */
        .brain-pulse-1, .brain-pulse-2 {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(232, 93, 4, 0.2);
          z-index: 1;
        }
        .brain-pulse-1 {
          animation: sonar-pulse 3s linear infinite;
        }
        .brain-pulse-2 {
          animation: sonar-pulse 3s linear infinite 1.5s; /* Delay for alternating ripple */
        }
        @keyframes sonar-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        /* Shared Satellite Node Properties */
        .satellite-node {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          letter-spacing: -0.5px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        .satellite-node:hover {
          transform: scale(1.15) !important; /* overrides translation during hover */
          z-index: 20;
        }

        /* Precise Positioning & Individual Animations per Mockup */
        
         /* Flutter Node: Top outer ring */
        .node-n8n {
          width: 80px;
          height: 80px;
          background-color: var(--color-charcoal);
          color: var(--color-soft-white);
          top: 35px;
          left: 17%;
          font-size: 16px;
          animation: float-async-1 5s ease-in-out infinite alternate;
        }

        /* React Node: Bottom right outer ring (Massive & Vibrant) */
        .node-react {
          width: 110px;
          height: 110px;
          background-color: var(--color-burnt-orange);
          color: var(--color-soft-white);
          bottom: 75px;
          right: 5%;
          font-size: 18px;
          box-shadow: 0 20px 40px rgba(232, 93, 4, 0.35);
          animation: float-async-2 6s ease-in-out infinite alternate-reverse;
        }

        /* Next.js Node: Center right inner ring */
        .node-nextjs {
          width: 85px;
          height: 85px;
          background-color: var(--color-soft-white);
          color: var(--color-charcoal);
          border: 2px solid var(--color-charcoal);
          top: 40%;
          right: 3%;
          font-size: 16px;
          animation: float-async-3 4s ease-in-out infinite alternate;
        }

         /* Node.js Node: Bottom left inner ring */
        .node-openai {
          width: 75px;
          height: 75px;
          background-color: var(--color-charcoal);
          color: var(--color-soft-white);
          bottom: 125px;
          left: 20%;
          font-size: 15px;
          animation: float-async-1 4.5s ease-in-out infinite alternate-reverse;
        }

        /* Fluid Multi-Axis Float Animations giving a living, breathing look */
        @keyframes float-async-1 {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-15px) translateX(5px); }
        }
        @keyframes float-async-2 {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(20px) translateX(-10px); }
        }
        @keyframes float-async-3 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default AiIntelligenceHub;

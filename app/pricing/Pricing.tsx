'use client';

import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Fade } from "react-awesome-reveal";
import CustomAnimBtn from '../../components/It-Services-Components/CustomAnimBtn';

// Flat Minimal Icons mapping
const StarterIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-charcoal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const GrowthIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-burnt-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
    <path d="M2.5 17.5l5.5-5.5 4 4 9.5-9.5"></path>
  </svg>
);

const EnterpriseIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-charcoal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-burnt-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('2');

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const Card = ({ tier, price, description, isPopular, features, deactivatedFeatures, btnLabel, btnStyle }: any) => {
    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: '40px 30px',
          boxShadow: isPopular ? '0 10px 40px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.04)',
          position: 'relative',
          border: isPopular ? '2px solid var(--color-burnt-orange)' : '1px solid rgba(28,28,30,0.08)',
          transition: 'all 0.3s ease'
        }}
      >
        {isPopular && (
          <div style={{
            position: 'absolute',
            top: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--color-burnt-orange)',
            color: '#ffffff',
            padding: '5px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Most Popular
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', gap: '15px' }}>
          <div>
            {tier === 'Starter' && <StarterIcon />}
            {tier === 'Growth' && <GrowthIcon />}
            {tier === 'Enterprise' && <EnterpriseIcon />}
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 800, color: 'var(--color-charcoal)' }}>{tier}</h3>
            <p style={{ margin: 0, fontSize: '14px', color: 'rgba(28,28,30,0.6)', fontWeight: 500 }}>{description}</p>
          </div>
        </div>

        <div style={{ paddingBottom: '25px', marginBottom: '25px', borderBottom: '1px solid rgba(28,28,30,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'var(--color-charcoal)', margin: 0 }}>{price}</h2>
          </div>
          <span style={{ fontSize: '14px', color: 'rgba(28,28,30,0.6)', fontWeight: 600 }}>
            {tier === 'Enterprise' ? 'Tailored Pricing' : (activeTab === '1' ? 'Per Project' : 'Per Month')}
          </span>
        </div>

        <div style={{ flexGrow: 1 }}>
          <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-charcoal)', marginBottom: '20px' }}>Features Includes:</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {features.map((feature: string, idx: number) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: 500, color: 'var(--color-charcoal)', lineHeight: 1.5 }}>
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
            {deactivatedFeatures && deactivatedFeatures.map((feature: string, idx: number) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', fontWeight: 500, color: '#A1A1AA', lineHeight: 1.5, textDecoration: 'line-through' }}>
                <CrossIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: '35px' }}>
          {tier === 'Growth' ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CustomAnimBtn href="/contact" label={btnLabel} />
            </div>
          ) : (
            <a href="/contact" className={`wevtex-pricing-btn ${btnStyle}`} style={{ display: 'block', textAlign: 'center', width: '100%' }}>
              {btnLabel}
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        .wevtex-pricing-btn {
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .wevtex-btn-outline {
          border: none;
          color: #ffffff;
          background-color: var(--color-burnt-orange);
        }
        .wevtex-btn-outline:hover {
          background-color: var(--color-charcoal);
          color: #ffffff;
        }

        .wevtex-btn-solid {
          border: 2px solid var(--color-charcoal);
          background-color: var(--color-charcoal);
          color: #fafafa;
        }
        .wevtex-btn-solid:hover {
          background-color: #3f3f46;
          border-color: #3f3f46;
          color: #ffffff;
        }

        .custom-pricing-tab-nav {
          display: inline-flex;
          background: rgba(28,28,30,0.04);
          border-radius: 40px;
          padding: 6px;
          margin-bottom: 50px;
        }
        .custom-pricing-tab-nav .nav-link {
          border: none !important;
          background: transparent;
          color: var(--color-charcoal);
          font-weight: 700;
          font-size: 15px;
          padding: 12px 30px;
          border-radius: 30px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .custom-pricing-tab-nav .nav-link.active {
          background-color: var(--color-burnt-orange) !important;
          color: #ffffff !important;
          box-shadow: 0 4px 15px rgba(232, 93, 4, 0.3);
        }

        .custom-discount-badge {
          background-color: rgba(28,28,30,0.1);
          color: var(--color-charcoal);
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 20px;
          font-weight: 800;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        .nav-link.active .custom-discount-badge {
          background-color: rgba(255,255,255,0.25);
          color: #ffffff;
        }
        
        .tab-content {
          overflow: visible; /* Prevents badge clipping */
        }
      `}</style>

      <section className="pricing pt-130 pb-130" style={{ backgroundColor: 'var(--color-soft-white)' }}>
        <div className="container">
          <div className="sec-title text-center mb-40">
            <Fade direction='down' triggerOnce duration={800}>
              <span
                style={{
                  color: 'var(--color-burnt-orange)',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '20px',
                  background: 'transparent'
                }}
              >
                Transparent Pricing
              </span>
              <h2 className="title" style={{ color: 'var(--color-charcoal)', letterSpacing: '-1.5px', fontSize: '48px' }}>
                Scalable Plans for Any Stage
              </h2>
            </Fade>
          </div>

          <div className="text-center">
            <Nav tabs className="custom-pricing-tab-nav justify-content-center" role="tablist">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => toggle('1')}
                  style={{ cursor: 'pointer' }}
                >
                  PAY ONCE <span className="custom-discount-badge">SAVE 30%</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => toggle('2')}
                  style={{ cursor: 'pointer' }}
                >
                  MONTHLY RETAINER
                </NavLink>
              </NavItem>
            </Nav>
          </div>

          <TabContent activeTab={activeTab}>
            {/* Pay Once */}
            <TabPane tabId="1">
              <Row className="mt-none-30 align-items-stretch">
                <Col lg="4" md="6" className="mt-40">
                  <Fade direction="up" triggerOnce duration={800}>
                    <Card
                      tier="Landing & Brand"
                      price="800 MAD+"
                      description="High-conversion launchpads."
                      isPopular={false}
                      features={[
                        "Custom Landing Page build",
                        "Copywriting & Call To Actions",
                        "Lead generation form setup",
                        "Mobile responsive design",
                        "Basic Technical SEO"
                      ]}
                      deactivatedFeatures={[
                        "Complex booking systems",
                        "Custom web applications"
                      ]}
                      btnLabel="Start Project"
                      btnStyle="wevtex-btn-outline"
                    />
                  </Fade>
                </Col>

                <Col lg="4" md="6" className="mt-40">
                  <Fade direction="up" triggerOnce duration={800} delay={100}>
                    <Card
                      tier="E-commerce & Booking"
                      price="4,000 MAD+"
                      description="For generating direct sales."
                      isPopular={true}
                      features={[
                        "Shopify or Custom Next.js Store",
                        "Payment Gateway Integration",
                        "Inventory & Product Management",
                        "Advanced reservations logic",
                        "Email & WhatsApp notifications",
                        "High speed optimization"
                      ]}
                      btnLabel="Start Selling Options"
                      btnStyle="wevtex-btn-solid"
                    />
                  </Fade>
                </Col>

                <Col lg="4" md="6" className="mt-40">
                  <Fade direction="up" triggerOnce duration={800} delay={200}>
                    <Card
                      tier="SaaS & Desktop App"
                      price="15k MAD+"
                      description="Complex logic and custom tools."
                      isPopular={false}
                      features={[
                        "Native Desktop tools (Windows/Mac)",
                        "Custom CRMs, Dashboards, ERPs",
                        "SaaS MVP and Platform builds",
                        "Unlimited bespoke API integrations",
                        "Enterprise-grade scaling",
                        "Offline capability (Desktop)"
                      ]}
                      btnLabel="Consult With Us"
                      btnStyle="wevtex-btn-outline"
                    />
                  </Fade>
                </Col>
              </Row>
            </TabPane>

            {/* Monthly Retainer */}
            <TabPane tabId="2">
              <Row className="mt-none-30 align-items-stretch">
                <Col lg="4" md="6" className="mt-40">
                  <Fade direction="up" triggerOnce duration={800}>
                    <Card
                      tier="Basic Support"
                      price="300 MAD"
                      description="Keep it running smoothly."
                      isPopular={false}
                      features={[
                        "Strict Security updates",
                        "Scheduled backups",
                        "Hosting setup & management",
                        "Uptime monitoring 24/7"
                      ]}
                      deactivatedFeatures={[
                        "Content updates",
                        "SEO Optimization"
                      ]}
                      btnLabel="Secure Your Site"
                      btnStyle="wevtex-btn-outline"
                    />
                  </Fade>
                </Col>

                <Col lg="4" md="6" className="mt-40">
                  <Fade direction="up" triggerOnce duration={800} delay={100}>
                    <Card
                      tier="Growth & SEO"
                      price="2,000 MAD"
                      description="Scale your organic traffic."
                      isPopular={true}
                      features={[
                        "All Basic Support features",
                        "Frequent content updates",
                        "Strategic Blog posts generation",
                        "Backlinking & Site Ranking",
                        "Social Media scheduling (3 platforms)"
                      ]}
                      btnLabel="Select Growth"
                      btnStyle="wevtex-btn-solid"
                    />
                  </Fade>
                </Col>

                <Col lg="4" md="6" className="mt-40">
                  <Fade direction="up" triggerOnce duration={800} delay={200}>
                    <Card
                      tier="Full Care"
                      price="5,000 MAD"
                      description="We handle absolutely everything."
                      isPopular={false}
                      features={[
                        "All Growth & SEO features",
                        "Priority immediate dev support",
                        "Custom integrations updates",
                        "Detailed monthly performance reports",
                        "Infrastructure scaling consulting"
                      ]}
                      btnLabel="Get Full Care"
                      btnStyle="wevtex-btn-outline"
                    />
                  </Fade>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </section>
    </>
  );
};

export default PricingSection;

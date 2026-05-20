"use client";

import React, { FC, useState, useRef } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import SimpleReactValidator from 'simple-react-validator';

// Assets
import shape1 from "@/public/images/shape/hero-shape01.png";
import shape2 from "@/public/images/shape/hero-shape04.png";

const Hero2: FC = () => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    phone: '',
    websiteType: '',
    message: '',
  });

  const [, forceUpdate] = useState(0);

  const validator = useRef(
    new SimpleReactValidator({
      className: 'errorMessage',
      messages: {
        required: 'This field is required',
        email: 'Invalid email address',
        alpha_space: 'Only letters and spaces allowed',
        phone: 'Invalid phone number',
      },
    })
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.current.allValid()) {
      validator.current.hideMessages();
      forceUpdate((x) => x + 1);
    }
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      validator.current.hideMessages();
      forceUpdate((x) => x + 1);
      console.log('Form submitted', forms);
      setForms({ name: '', email: '', phone: '', websiteType: '', message: '' });
      alert("Message sent successfully!");
    } else {
      validator.current.showMessages();
      forceUpdate((x) => x + 1);
    }
  };

  return (
    <section
      className="hero hero-style-one pos-rel o-hidden"
      style={{
        backgroundImage: `url('/images/bg/wevtex_hero_bg_minimal.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '200px',
        paddingBottom: '200px'
      }}
    >
      {/* Decorative Shapes */}
      <div className="hero-shape">
        <div
          className="shape shape--one bg_img"
          style={{ backgroundImage: `url('/images/shape/hero-glassisom.png')` }}
        ></div>
        <div className="shape shape--two">
          <Image src={shape1} alt="Decorative Shape 1" />
        </div>
        <div className="shape shape--three">
          <Image src={shape2} alt="Decorative Shape 2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="hero_wrap">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12">
              <div className="xb-hero">
                <Fade direction="up" triggerOnce={false} duration={800} delay={6}>
                  <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', lineHeight: '1.1' }}>
                    We Build World-Class Web & Desktop Apps.
                  </h1>
                </Fade>

                <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
                  <p
                    className="xb-item--content wow fadeInUp mt-4"
                    data-wow-delay="150ms"
                    data-wow-duration="600ms"
                    style={{ fontSize: '1.25rem', color: 'rgba(250, 250, 250, 0.75)', maxWidth: '600px' }}
                  >
                    From high-converting E-Commerce stores and powerful SaaS Booking systems to native Desktop Software. We engineer digital products that scale your business.
                  </p>
                </Fade>

                <Fade direction="up" triggerOnce={false} duration={1800} delay={9}>
                  <div
                    className="xb-btn wow mt-50 fadeInUp d-flex flex-wrap gap-4"
                    data-wow-delay="300ms"
                    data-wow-duration="600ms"
                  >
                    <Link
                      href="/contact"
                      className="thm-btn thm-btn--fill_icon thm-btn--white_icon"
                    >
                      <div className="xb-item--hidden">
                        <span className="xb-item--hidden-text">Start Your Project</span>
                      </div>
                      <div className="xb-item--holder">
                        <span className="xb-item--text">Start Your Project</span>
                        <div className="xb-item--icon">
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                        <span className="xb-item--text">Start Your Project</span>
                      </div>
                    </Link>

                    <Link
                      href="/services"
                      className="thm-btn thm-btn--fill_icon thm-btn--outline"
                      style={{ backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff' }}
                    >
                      <div className="xb-item--hidden">
                        <span className="xb-item--hidden-text">Explore Industries</span>
                      </div>
                      <div className="xb-item--holder">
                        <span className="xb-item--text">Explore Industries</span>
                        <div className="xb-item--icon">
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                        <span className="xb-item--text">Explore Industries</span>
                      </div>
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>

            {/* Right Contact Form (Variant A: Refined Solid) */}
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
              <Fade direction="up" triggerOnce={false} duration={800} delay={6}>
                <div
                  className="contact-form-wrapper ml-auto"
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '20px',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                    width: '100%',
                    maxWidth: '540px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 style={{ marginBottom: '25px', color: '#1a1a1a', fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>
                    Start Your Success <span style={{ color: '#e2481e' }}>Now.</span>
                  </h3>
                  <form className="contact-form" onSubmit={submitHandler} noValidate>
                    <div className="row g-2">
                      <div className="col-md-6">
                        <div className="input-field pos-rel">
                          <label style={{ color: '#4a4a4a', fontSize: '12px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Full name</label>
                          <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="John Doe"
                            style={{
                              backgroundColor: '#f8fafd',
                              border: '1px solid #e1e8f0',
                              borderRadius: '8px',
                              padding: '0 16px',
                              height: '48px',
                              width: '100%',
                              fontSize: '15px',
                              color: '#1a1a1a',
                              transition: 'all 0.3s ease',
                              outline: 'none'
                            }}
                          />
                          {validator.current.message('name', forms.name, 'required|alpha_space')}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-field pos-rel">
                          <label style={{ color: '#4a4a4a', fontSize: '12px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Work Gmail</label>
                          <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="name@gmail.com"
                            style={{
                              backgroundColor: '#f8fafd',
                              border: '1px solid #e1e8f0',
                              borderRadius: '8px',
                              padding: '0 16px',
                              height: '48px',
                              width: '100%',
                              fontSize: '15px',
                              color: '#1a1a1a',
                              transition: 'all 0.3s ease',
                              outline: 'none'
                            }}
                          />
                          {validator.current.message('email', forms.email, 'required|email')}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-field pos-rel">
                          <label style={{ color: '#4a4a4a', fontSize: '12px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Number phone</label>
                          <input
                            value={forms.phone}
                            type="tel"
                            name="phone"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="+1 234 567 890"
                            style={{
                              backgroundColor: '#f8fafd',
                              border: '1px solid #e1e8f0',
                              borderRadius: '8px',
                              padding: '0 16px',
                              height: '48px',
                              width: '100%',
                              fontSize: '15px',
                              color: '#1a1a1a',
                              transition: 'all 0.3s ease',
                              outline: 'none'
                            }}
                          />
                          {validator.current.message('phone', forms.phone, 'required|phone')}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-field pos-rel">
                          <label style={{ color: '#4a4a4a', fontSize: '12px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Website types listed</label>
                          <select
                            name="websiteType"
                            className="form-control"
                            value={forms.websiteType}
                            onChange={changeHandler}
                            style={{
                              backgroundColor: '#f8fafd',
                              border: '1px solid #e1e8f0',
                              borderRadius: '8px',
                              padding: '0 16px',
                              height: '48px',
                              width: '100%',
                              fontSize: '15px',
                              color: '#1a1a1a',
                              transition: 'all 0.3s ease',
                              outline: 'none',
                              cursor: 'pointer',
                              lineHeight: '48px'
                            }}
                          >
                            <option value="">Select Type</option>
                            <option value="E-Commerce">E-Commerce</option>
                            <option value="Booking System">Booking System</option>
                            <option value="SaaS Product">SaaS Product</option>
                            <option value="Landing Page">Landing Page</option>
                            <option value="Corporate">Corporate</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-field pos-rel">
                          <label style={{ color: '#4a4a4a', fontSize: '12px', marginBottom: '4px', display: 'block', fontWeight: '600' }}>Message</label>
                          <textarea
                            value={forms.message}
                            name="message"
                            className="form-control"
                            placeholder="Briefly describe your project..."
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            style={{
                              backgroundColor: '#f8fafd',
                              border: '1px solid #e1e8f0',
                              borderRadius: '8px',
                              padding: '12px 16px',
                              width: '100%',
                              minHeight: '100px',
                              fontSize: '15px',
                              color: '#1a1a1a',
                              transition: 'all 0.3s ease',
                              outline: 'none',
                              resize: 'none'
                            }}
                          />
                          {validator.current.message('message', forms.message, 'required')}
                        </div>
                      </div>
                      <div className="col-lg-12 pt-3">
                        <button
                          type="submit"
                          className="thm-btn"
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            padding: '16px',
                            backgroundColor: '#e2481e',
                            color: '#fff',
                            borderRadius: '10px',
                            border: 'none',
                            fontWeight: '800',
                            fontSize: '18px',
                            boxShadow: '0 8px 16px rgba(226, 72, 30, 0.4)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Send Message <i className="far fa-paper-plane" style={{ fontSize: '16px' }}></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

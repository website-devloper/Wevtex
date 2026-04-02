'use client';

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
    subject: '',
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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setForms({ name: '', email: '', phone: '', subject: '', message: '' });
      alert("Message sent successfully!");
    } else {
      validator.current.showMessages();
      forceUpdate((x) => x + 1);
    }
  };

  return (
    <section
      className="hero hero-style-one pos-rel bg_img"
      style={{ backgroundImage: `url('/images/bg/hero-bg01.jpg')` }}
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
            <div className="col-md-6">
              <div className="xb-hero">
                <Fade direction="up" triggerOnce={false} duration={800} delay={6}>
                  <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">
                    Where the web meets intelligence.
                  </h1>
                </Fade>

                <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
                  <p
                    className="xb-item--content wow fadeInUp"
                    data-wow-delay="150ms"
                    data-wow-duration="600ms"
                  >
                    World-class Web Creation & AI Automation tailored to scale your digital presence and operational efficiency.
                  </p>
                </Fade>

                <Fade direction="up" triggerOnce={false} duration={1800} delay={9}>
                  <div
                    className="xb-btn wow mt-60 fadeInUp d-flex flex-wrap gap-4"
                    data-wow-delay="300ms"
                    data-wow-duration="600ms"
                  >
                    <Link
                      href="/contact"
                      className="thm-btn thm-btn--fill_icon thm-btn--white_icon"
                    >
                      <div className="xb-item--hidden">
                        <span className="xb-item--hidden-text">Get Started</span>
                      </div>
                      <div className="xb-item--holder">
                        <span className="xb-item--text">Get Started</span>
                        <div className="xb-item--icon">
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                        <span className="xb-item--text">Get Started</span>
                      </div>
                    </Link>

                    <Link
                      href="/portfolio"
                      className="thm-btn thm-btn--fill_icon thm-btn--outline"
                      style={{ backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff' }}
                    >
                      <div className="xb-item--hidden">
                        <span className="xb-item--hidden-text">See Our Work</span>
                      </div>
                      <div className="xb-item--holder">
                        <span className="xb-item--text">See Our Work</span>
                        <div className="xb-item--icon">
                          <i className="far fa-long-arrow-right"></i>
                        </div>
                        <span className="xb-item--text">See Our Work</span>
                      </div>
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="col-md-6 mt-5 mt-md-0">
              <Fade direction="up" triggerOnce={false} duration={800} delay={6}>
                <div
                  className="contact-form-wrapper"
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '40px',
                    borderRadius: '15px',
                    boxShadow: '0 15px 50px rgba(0,0,0,0.1)'
                  }}
                >
                  <h3 style={{ marginBottom: '25px', color: '#1a1a1a', fontSize: '28px', fontWeight: 'bold' }}>Get a Free Quote</h3>
                  <form className="contact-form" onSubmit={submitHandler} noValidate>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="input-field pos-rel">
                          <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Your Name"
                            style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '15px 20px', width: '100%', outline: 'none' }}
                          />
                          {validator.current.message('name', forms.name, 'required|alpha_space')}
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="input-field pos-rel">
                          <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Your Gmail"
                            style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '15px 20px', width: '100%', outline: 'none' }}
                          />
                          {validator.current.message('email', forms.email, 'required|email')}
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="input-field pos-rel">
                          <input
                            value={forms.phone}
                            type="tel"
                            name="phone"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Phone Number"
                            style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '15px 20px', width: '100%', outline: 'none' }}
                          />
                          {validator.current.message('phone', forms.phone, 'required|phone')}
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="input-field pos-rel">
                          <input
                            value={forms.subject}
                            type="text"
                            name="subject"
                            className="form-control"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder="Subject"
                            style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '15px 20px', width: '100%', outline: 'none' }}
                          />
                          {validator.current.message('subject', forms.subject, 'required')}
                        </div>
                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="input-field text-field pos-rel">
                          <textarea
                            value={forms.message}
                            name="message"
                            className="form-control"
                            placeholder="Your Message..."
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '15px 20px', width: '100%', minHeight: '120px', outline: 'none' }}
                          />
                          {validator.current.message('message', forms.message, 'required')}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="thm-btn"
                          style={{ width: '100%', display: 'block', textAlign: 'center', padding: '18px', backgroundColor: '#e2481e', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold' }}
                        >
                          Send Message
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

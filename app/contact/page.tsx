'use client';

import React, { useState, useRef } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/It-Services-Components/Footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import icon from '@/public/images/icon/music-icon.svg';
import bImg1 from '@/public/images/hero/contact-img.png';
import bImg2 from '@/public/images/shape/brd_shape.png';
import Image from 'next/image';
import SimpleReactValidator from 'simple-react-validator';
import { Fade } from 'react-awesome-reveal';

const ContactPage: React.FC = () => {
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
      console.log('Form submitted', forms);
      setForms({ name: '', email: '', phone: '', subject: '', message: '' });
      alert("Message sent successfully!");
    } else {
      validator.current.showMessages();
      forceUpdate((x) => x + 1);
    }
  };

  return (
    <>
      <div className="body_wrap it-services">
        <Header2 />
        <section
          className="page-title pt-200 pos-rel bg_img"
          style={{ backgroundImage: `url('/images/bg/page_bg01.jpg')`, backgroundColor: 'var(--color-charcoal)' }}
        >
          <div className="container">
            <div className="page-title-wrap sd-title-wrap">
              <div className="row mt-none-30 align-items-end">
                <div className="col-lg-9 mt-30">
                  <div className="page-title-box">
                    <span className="sub-title">
                      <Image src={icon} alt="Contact Icon" /> Contact us
                    </span>
                    <h2 className="title" style={{ color: 'var(--color-soft-white)' }}>
                      Connect with our team for <br />
                      innovative solutions and <br />
                      your digital success
                    </h2>
                  </div>
                </div>
                <div className="col-lg-3 mt-30">
                  <div className="sd-right-img pos-rel">
                    <Image src={bImg1} alt="Contact Illustration" />
                    <div className="sd-arrow-shape style-3">
                      <Image className="xbzoominzoomup" src={bImg2} alt="Arrow Decoration" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section pt-120 pb-120 bg-white">
          <div className="container">
            <div className="row align-items-center">
              {/* Contact Information */}
              <div className="col-lg-5 mb-5 mb-lg-0">
                <div className="contact-info-wrapper pr-lg-5">
                  <h3 className="mb-4" style={{ fontSize: '36px', fontWeight: 'bold' }}>Let's Build Something Great Together.</h3>
                  <p className="mb-5" style={{ fontSize: '18px', color: 'var(--color-default)' }}>
                    Reach out to our engineering team to discuss how we can scale your business with robust IT architecture.
                  </p>
                  <ul className="list-unstyled contact-details">
                    <li className="d-flex align-items-center mb-4">
                      <div className="icon-wrapper mr-3" style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-peach-tint)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--color-burnt-orange)', fontSize: '20px' }}>
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h5 className="mb-1" style={{ fontWeight: 'bold' }}>Headquarters</h5>
                        <p className="mb-0">123 Innovation Drive, Tech City</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <div className="icon-wrapper mr-3" style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-peach-tint)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--color-burnt-orange)', fontSize: '20px' }}>
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h5 className="mb-1" style={{ fontWeight: 'bold' }}>Email Us</h5>
                        <p className="mb-0">hello@agency.com</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="icon-wrapper mr-3" style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-peach-tint)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--color-burnt-orange)', fontSize: '20px' }}>
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div>
                        <h5 className="mb-1" style={{ fontWeight: 'bold' }}>Call Us</h5>
                        <p className="mb-0">+1 (800) 123-4567</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Enhanced Contact Form */}
              <div className="col-lg-7">
                <Fade direction="up" triggerOnce={false} duration={800}>
                  <div
                    className="contact-form-wrapper"
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '50px',
                      borderRadius: '15px',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
                    }}
                  >
                    <h3 style={{ marginBottom: '30px', color: '#1a1a1a', fontSize: '28px', fontWeight: 'bold' }}>Send a Message</h3>
                    <form className="contact-form" onSubmit={submitHandler} noValidate>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="input-field pos-rel">
                            <input
                              value={forms.name}
                              type="text"
                              name="name"
                              className="form-control"
                              onBlur={changeHandler}
                              onChange={changeHandler}
                              placeholder="Your Name"
                              style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '18px 20px', width: '100%', outline: 'none' }}
                            />
                            {validator.current.message('name', forms.name, 'required|alpha_space')}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="input-field pos-rel">
                            <input
                              value={forms.email}
                              type="email"
                              name="email"
                              className="form-control"
                              onBlur={changeHandler}
                              onChange={changeHandler}
                              placeholder="Your Email"
                              style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '18px 20px', width: '100%', outline: 'none' }}
                            />
                            {validator.current.message('email', forms.email, 'required|email')}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="input-field pos-rel">
                            <input
                              value={forms.phone}
                              type="tel"
                              name="phone"
                              className="form-control"
                              onBlur={changeHandler}
                              onChange={changeHandler}
                              placeholder="Phone Number"
                              style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '18px 20px', width: '100%', outline: 'none' }}
                            />
                            {validator.current.message('phone', forms.phone, 'required|phone')}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="input-field pos-rel">
                            <input
                              value={forms.subject}
                              type="text"
                              name="subject"
                              className="form-control"
                              onBlur={changeHandler}
                              onChange={changeHandler}
                              placeholder="Subject"
                              style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '18px 20px', width: '100%', outline: 'none' }}
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
                              style={{ backgroundColor: '#f4f5f8', border: 'none', borderRadius: '8px', padding: '18px 20px', width: '100%', minHeight: '150px', outline: 'none' }}
                            />
                            {validator.current.message('message', forms.message, 'required')}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            className="thm-btn"
                            style={{ width: '100%', display: 'block', textAlign: 'center', padding: '20px', backgroundColor: 'var(--color-burnt-orange)', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '18px' }}
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
        </section>
      </div>
      <Footer />
      <Scrollbar />
    </>
  );
};

export default ContactPage;

"use client";

import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "@/public/images/logo/logo-white.png";

const Footer = () => {
  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <footer className="footer pos-rel mt-80" style={{ backgroundColor: "#1C1C1E", color: "#FAFAFA", padding: "80px 0 40px" }}>
      <div className="container">
        <div className="row">
          {/* Column 1: Brand */}
          <div className="col-lg-3 col-md-6 mb-40">
            <div className="footer-widget">
              <Link href="/" className="footer-logo mb-25" style={{ display: "block" }}>
                <Image src={logoWhite} alt="Wevtex Logo" width={150} height={40} style={{ objectFit: 'contain' }} />
              </Link>
              <p style={{ color: "rgba(250, 250, 250, 0.7)", lineHeight: "1.8" }}>
                Building the web, one pixel at a time. High-performance websites and apps for modern businesses.
              </p>
              <div className="social-links mt-30 ul_li">
                <Link href="/" className="me-3" style={{ color: "#FAFAFA" }}><i className="fab fa-linkedin-in"></i></Link>
                <Link href="/" className="me-3" style={{ color: "#FAFAFA" }}><i className="fab fa-instagram"></i></Link>
                <Link href="/" style={{ color: "#FAFAFA" }}><i className="fab fa-github"></i></Link>
              </div>
            </div>
          </div>

          {/* Column 2: Pages */}
          <div className="col-lg-2 col-md-6 mb-40">
            <div className="footer-widget">
              <h4 className="widget-title mb-30" style={{ color: "#FAFAFA", fontSize: "18px", fontWeight: "600" }}>Pages</h4>
              <ul className="footer-nav list-unstyled" style={{ padding: 0 }}>
                <li className="mb-2"><Link href="/" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>Home</Link></li>
                <li className="mb-2"><Link href="/about" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>About</Link></li>
                <li className="mb-2"><Link href="/service" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>Services</Link></li>
                <li className="mb-2"><Link href="/portfolio" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>Portfolio</Link></li>
                <li className="mb-2"><Link href="/blog" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>Blog</Link></li>
                <li><Link href="/contact" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="col-lg-3 col-md-6 mb-40">
            <div className="footer-widget">
              <h4 className="widget-title mb-30" style={{ color: "#FAFAFA", fontSize: "18px", fontWeight: "600" }}>Services</h4>
              <ul className="footer-nav list-unstyled" style={{ padding: 0 }}>
                <li className="mb-2"><Link href="/services/web-development" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>Web Development</Link></li>
                <li className="mb-2"><Link href="/services/desktop-applications" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>Desktop App Development</Link></li>
                <li className="mb-2"><Link href="/service" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>Landing Pages</Link></li>
                <li><Link href="/service" style={{ color: "rgba(250, 250, 250, 0.7)", textDecoration: "none" }}>E-commerce Websites</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-4 col-md-6 mb-40">
            <div className="footer-widget">
              <h4 className="widget-title mb-30" style={{ color: "#FAFAFA", fontSize: "18px", fontWeight: "600" }}>Newsletter</h4>
              <p className="mb-25" style={{ color: "rgba(250, 250, 250, 0.7)" }}>Subscribe to get latest updates and news.</p>
              <form onSubmit={SubmitHandler} className="pos-rel">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-100"
                  style={{
                    backgroundColor: "#252525",
                    border: "1px solid #333",
                    padding: "12px 20px",
                    color: "#FAFAFA",
                    borderRadius: "4px"
                  }}
                  required
                />
                <button
                  type="submit"
                  className="mt-15 w-100"
                  style={{
                    backgroundColor: "#E85D04",
                    color: "#FAFAFA",
                    border: "none",
                    padding: "12px",
                    fontWeight: "600",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom mt-50 pt-30" style={{ borderTop: "1px solid #333" }}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0" style={{ color: "rgba(250, 250, 250, 0.5)", fontSize: "14px" }}>
                © 2025 Wevtex. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-15 mt-md-0">
              <span className="me-4" style={{ color: "rgba(250, 250, 250, 0.7)", fontSize: "14px" }}>hello@wevtex.com</span>
              <span style={{ color: "rgba(250, 250, 250, 0.7)", fontSize: "14px" }}>WhatsApp: +212 600 000 000</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

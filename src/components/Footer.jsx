import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__content-flex">
            <div className="footer__content-logo">
              <img src={logo} alt="logo" />
              <h1>THE VOICE</h1>
            </div>
            <div className="footer__content-link">
              <Link to="/blog">Blog</Link>
              <Link to="/about">About Us</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
          <div className="footer__content-newsletter">
            <input type="text" placeholder="Subscribe to our Newsletter" />
            <button>Subscribe</button>
          </div>
          <p className="footer__content-copyright">
            @ All Right Reserved The Voice. 2022
          </p>
        </div>
      </div>
    </section>
  );
}

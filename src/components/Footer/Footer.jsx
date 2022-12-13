import React from "react";
import logoIcon from "../../assets/image/logo.svg";

import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo-info">
            <div className="logo">
              <img src={logoIcon} alt="" />
              <h1 className="logo_title">antools.</h1>
            </div>
            <p>Copyright 2021. Antools</p>
            <p>
              Antool is a web collection of <br /> information on paid or free
              Design <br />
              and Development tools
            </p>
          </div>
          <div className="footer__contact">
            <h3 className="footer__contact-title">Contact Us</h3>
            <p className="contact_phone">+621987463</p>
            <p className="contact_address">M Building, No.10 A</p>
            <p className="contact_email">antools@awesome.com</p>
          </div>
          <ul className="footer__categories">
            <h3 className="footer__categories-title">Categories</h3>
            <li>
              <a href="">Design</a>
            </li>
            <li>
              <a href="">Development</a>
            </li>
          </ul>
          <ul className="footer__company-info">
            <h3 className="footer__company-info-title">Company Info</h3>
            <li className="compony-info_about">
              <a href="">About Us</a>
            </li>
            <li className="compony-info_partners">
              <a href="">Our Partners</a>
            </li>
            <li className="company-info_blog">
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

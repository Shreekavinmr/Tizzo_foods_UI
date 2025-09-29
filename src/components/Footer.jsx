// Footer.jsx
import React from "react";
import "./Footer.css";
import logo from "/logo1.png";

const Footer = () => {
  return (
    <>
      {/* Enquiry Form - Half outside footer */}
      <div className="enquiry-form-container">
        <div className="enquiry-form">
          <h2 className="form-title">ENQUIRY FORM</h2>
          
          <form className="form-content">
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" placeholder="First name" />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="abc@xyz.com" />
            </div>
            
            <div className="form-group">
              <label>Phone number *</label>
              <input type="tel" placeholder="+91 XXXXXXXX" />
            </div>
            
            <div className="form-checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Teams & Condition</label>
            </div>
            
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>

      <footer className="footer">
        {/* Top Section - Empty for now */}
        <div className="footer-top">
          {/* Future content goes here */}
        </div>

        {/* Middle Section - Empty for now */}
        <div className="footer-middle">
          {/* Future content goes here */}
        </div>

        <div className="footer-horizontal-divider"></div>

        {/* Bottom Section - Current content */}
        <div className="footer-bottom">
          <div className="footer-container">
            {/* Left Section - Logo and Description */}
            <div className="footer-left">
              <img src={logo} alt="Tizzo Logo" className="footer-logo" />
              <p className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
              </p>
            </div>

            {/* First Divider */}
            <div className="footer-divider"></div>

            {/* Center Section - Navigation Links */}
            <div className="footer-center">
              <div className="footer-column">
                <a href="#" className="footer-link">About us</a>
                <a href="#" className="footer-link">Product</a>
              </div>
              <div className="footer-column">
                <a href="#" className="footer-link">Contact us</a>
                <a href="#" className="footer-link">Dealers enquiry</a>
              </div>
            </div>

            {/* Second Divider */}
            <div className="footer-divider"></div>

            {/* Right Section - Copyright */}
            <div className="footer-right">
              <p className="footer-copyright">© 2025 Tizzo</p>
            </div>
          </div>
        </div>

    

        {/* Decorative circles */}
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="decorative-circle circle-3"></div>
        <div className="decorative-circle circle-4"></div>
        
      </footer>
    </>
  );
};

export default Footer;
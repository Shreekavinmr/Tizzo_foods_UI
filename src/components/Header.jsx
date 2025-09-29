import React from "react";
import logo from "/logo1.png"; // public/logo.png
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <ul className="header-list">
        {/* Left Menus */}
        <li>About Us</li>
        <li>Products</li>

        {/* Center Logo */}
        <li className="logo-container">
          <img src={logo} alt="Tizzo Logo" className="logo" />
        </li>

        {/* Right Menus */}
        <li>Contact Us</li>
        <li>Dealers Enquiry</li>
      </ul>
    </nav>
  );
};

export default Header;

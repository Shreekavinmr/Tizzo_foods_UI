import React from "react";
import "./Section1.css";
import bgImage from '/section2-bg.png';
import { motion } from "framer-motion";

import section1_p1 from "/section1_a1.png";
import section1_p2 from "/section1_a2.png";
import section1_p3 from "/section1_a3.png";
import section1_p4 from "/section1_a4.png";
import heading_section1 from "/heading_section2.png"; // ✅ heading image

const products = [
  { image: section1_p1, text: "IT’S", color: "#f4d35e", cls: "strip-1", width: "90%" },
  { image: section1_p2, text: "MASTI", color: "#1e5bbf", cls: "strip-2", width: "110%" },
  { image: section1_p3, text: "TIME", color: "#289b54ff", cls: "strip-3", width: "100%" },
  { image: section1_p4, text: "FUN", color: "#690557ff", cls: "strip-4", width: "95%" },
];

const Section1 = () => {
  return (
    <section id="section1" className="section1" style={{backgroundImage: `url(${bgImage})`}}>
      {/* Orange bubbles */}
      <div className="bubbles">
  {Array.from({ length: 30 }).map((_, i) => {
    const size = Math.random() * 20 + 5; // 10px–30px
    const duration = Math.random() * 40 + 60; // 60s–100s
    return (
      <span
        key={i}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${Math.random() * 10}s`,
        }}
      ></span>
    );
  })}
</div>


      {/* Heading as image */}
      <div className="heading_section1">
        <img src={heading_section1} alt="Section 1 Heading" />
      </div>

      {/* Strips */}
      <div className="strips">
        {products.map((prod, index) => (
          <div
            key={index}
            className={`product-strip ${prod.cls}`}
            style={{ backgroundColor: prod.color, width: prod.width }}
          >
            <span className="strip-text">{prod.text}</span>
            <img src={prod.image} alt={prod.text} className="packet-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;

import React from "react";
import { motion } from "framer-motion";
import section2Img from "/section2_i1.png"; 
import './Section2.css';

const Section2 = () => {
  return (
    <section className="section2">
      <motion.div 
        className="text-box"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{once: false, amount: 0.3 }}
      >
        {/* Text */}
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3  }}
          >
            About Us
          </motion.h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img 
          src={section2Img} 
          alt="Product showcase" 
          className="section2-img"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.3  }}
        />
      </motion.div>
    </section>
  );
};

export default Section2;

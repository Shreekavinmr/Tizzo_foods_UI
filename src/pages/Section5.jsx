import React from "react";
import { motion } from "framer-motion";
import "./Section5.css";
import contactImage from "/contactus_section5.jpg";

const Section5 = () => {
  return (
    <section className="section5">
      <motion.img
        src={contactImage}
        alt="Contact"
        className="contact-image"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        animate={{
          y: [0, -8, 0], // floating effect
          filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"], // gentle glow
        }}
      />
    </section>
  );
};

export default Section5;

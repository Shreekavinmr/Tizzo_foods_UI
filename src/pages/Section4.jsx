import React from "react";
import { motion } from "framer-motion";
import "./Section4.css";

import icon1 from "/section4-1.png";
import icon2 from "/section4.png";
import icon3 from "/section4-2.png";

const Section4 = () => {
  const features = [
    {
      id: 1,
      img: icon1,
      title: "Best Ingredients",
      text: "We carefully source only the finest fruits, natural flavors, and quality raw materials. Every sip reflects freshness and authenticity.",
      color: "#f26d25",
    },
    {
      id: 2,
      img: icon2,
      title: "Trusted Taste",
      text: "Loved by families for years, our beverages deliver the same great taste every time. Consistency and quality you can always rely on.",
      color: "#26306a",
    },
    {
      id: 3,
      img: icon3,
      title: "Hygienic Packing",
      text: "Our state-of-the-art facilities ensure every bottle is packed with care. Sealed for safety, purity, and long-lasting freshness.",
      color: "#f26d25",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section4">
      <motion.div
        className="features-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.3  }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="feature-card"
            variants={cardVariants}
            whileHover={{ y: -15, scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.img
              src={feature.img}
              alt={feature.title}
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <h3 style={{ color: feature.color }}>{feature.title}</h3>
            <p style={{ color: feature.color === "orange" ? "orange" : "#00173e" }}>
              {feature.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Section4;

import React, { useState, useEffect } from "react";
import "./Home.css";

// Replace with your posters
import poster1 from "/poster_5.png";
import poster2 from "/poster_2.png";
import poster3 from "/poster_4.png";
import poster4 from "/poster_1.png";

const slides = [
  {
    image: poster1,
    heading: "Flavours That Spark Joy",
    description: "Grape, Mango, Lemonade & more – Tizzo & Aslee bring happiness in every sip.",
  },
  {
    image: poster2,
    heading: "Colours of Refreshment",
    description: "Taste the fun with Dhool’s fruity flavours. Bright, bold, and bursting with energy.",
  },
  {
    image: poster3,
    heading: "The Zest of Tizzo",
    description: "Fresh Club Lemonade and tangy Lemon Salt Soda – the ultimate duo of citrus refreshment.",
  },
  {
    image: poster4,
    heading: "Pure Hydration, Every Size",
    description: "Stay refreshed with Andavar & Tizzo water bottles. From 250ml to 1L, clean drinking anytime, anywhere.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <div className="hero-text">
              <h1>{slide.heading}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Dots (always visible) */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Home;

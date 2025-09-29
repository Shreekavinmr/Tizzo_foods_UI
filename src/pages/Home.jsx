import React, { useState, useEffect } from "react";
import "./Home.css";

// Replace with your posters
import poster1 from "/poster1.jpg";
import poster2 from "/poster2.jpg";
import poster3 from "/poster3.jpg";
import poster4 from "/poster4.jpg";
import poster5 from "/poster5.jpg";

const slides = [
  {
    image: poster1,
    heading: "Heading 1",
    description: "This is the description for poster 1.",
  },
  {
    image: poster2,
    heading: "Heading 2",
    description: "This is the description for poster 2.",
  },
  {
    image: poster3,
    heading: "Heading 3",
    description: "This is the description for poster 3.",
  },
  {
    image: poster4,
    heading: "Heading 4",
    description: "This is the description for poster 4.",
  },
  {
    image: poster5,
    heading: "Heading 5",
    description: "This is the description for poster 5.",
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

// ============================================
// components/About.jsx
// ============================================
import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const images = [
  "/hero.jpg",
  "/hero.jpg",
  "/hero.jpg",
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="hero bg-soft">
      <div className="hero-container">
           {/* Right Column - Image Slider */}
        <div className="hero-image relative w-full max-w-md mx-auto animate-fadeInUp">
          <img
            src={images[currentIndex]}
            alt={`Leadership ${currentIndex + 1}`}
            className="w-full h-64 object-cover rounded-2xl shadow-xl transition-transform duration-500"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
          >
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition"
          >
    
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  idx === currentIndex ? "bg-blue-600" : "bg-blue-200"
                }`}
              ></span>
            ))}
          </div>
        </div>
        {/* Left Column - Text */}
        <div className="hero-text animate-fadeInUp">
          <h2>Leadership Philosophy</h2>
          <p>
            I believe leadership is built on service, accountability, and trust.
            Through active involvement in youth organizations and cooperative
            institutions, I focus on strengthening participation, governance,
            and sustainable growth within communities. My approach emphasizes
            collaborative decision-making and empowering others to create
            meaningful, lasting change.
          </p>
        </div>

     
      </div>
    </section>
  );
}

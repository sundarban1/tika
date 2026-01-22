
// ============================================
// components/Hero.jsx
// ============================================
import React from 'react';

export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Tika Dutta Ban</h1>
          <h2>Community Leader & Cooperative Professional</h2>
          <p>
            Building responsible leadership through community engagement,
            cooperative governance, and sustainable community growth.
          </p>
          <p>
            Dedicated to empowering communities, fostering transparency, and 
            creating lasting impact through collaborative initiatives.
          </p>
          <div style={{ marginTop: '32px' }}>
            <a href="#contact" className="btn-primary" onClick={scrollToContact}>
              Connect with Me
              <span style={{ fontSize: '1.25rem' }}>→</span>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero.jpg" alt="Tika Dutta Ban" />
        </div>
      </div>
    </section>
  );
}
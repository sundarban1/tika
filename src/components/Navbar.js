// ============================================
// components/Navbar.jsx
// ============================================
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#timeline', label: 'Journey' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
  <div className="navbar-container">
    {/* Menu centered */}
    <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
      {navItems.map((item) => (
        <li key={item.href}>
          <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>

    {/* Mobile menu button */}
    <button
      className="mobile-menu-btn"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle menu"
    >
      {mobileMenuOpen ? '✕' : '☰'}
    </button>
  </div>
</nav>

  );
}

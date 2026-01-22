// ============================================
// components/Contact.jsx
// ============================================
import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) errs.message = "Message cannot be empty";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      console.log("Form submitted successfully:", form);
    } else {
      setErrors(errs);
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="section bg-soft">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            I'm always open to collaboration, mentorship opportunities, 
            and speaking engagements. Let's connect and explore how we 
            can work together to create positive impact.
          </p>
          
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+977-9841733453">+977-9841733453</a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:tikaduttaban@email.com">tikaduttaban@email.com</a>
          </p>
          <p>
            <strong>Location:</strong> Nepal
          </p>

          <h3>Connect on Social Media</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>

        <div className="contact-form">
          <div className="card">
            <h2>Send a Message</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <small className="error">{errors.name}</small>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <small className="error">{errors.message}</small>}

            <button onClick={handleSubmit}>
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
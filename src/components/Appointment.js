import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    if (!form.message) errs.message = "Message cannot be empty";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      // Here you can integrate EmailJS or backend API
      console.log("Form submitted", form);
    } else {
      setErrors(errs);
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="section bg-soft">
      <div className="container grid-2 contact-grid">

        <div className="contact-info">
          <h2>Contact Me</h2>
          <p>Feel free to reach out for collaboration, mentorship, or speaking opportunities.</p>
             <p>Phone: <a href="tel:+977-9841733453">+977-9841733453</a></p>
          <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
          <p>Location: Nepal</p>

          <h3>Connect on Social Media</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="btn-primary">
            {submitted ? "Sent!" : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import axios from 'axios';
import './LandingPage.css';

const API_BASE = process.env.REACT_APP_API_BASE;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return alert('Please enter a valid email address.');
    try {
      await axios.post(`${API_BASE}/api/newsletter`, { email });
      alert('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to subscribe. Try again.');
    }
  };

  return (
    <footer>
      {/* --- CTA Background Section --- */}
      <div
        className="footer-cta text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundImage: "url('/assets/Rectangle.svg')" }}
      >
        <h5 className="cta-text text-white mb-3">
          Learn more about our listing process, as well as our additional staging and design work.
        </h5>
        <button className="btn btn-outline-light">LEARN MORE</button>
      </div>

      {/* --- Middle Blue Bar --- */}
      <div className="footer-bar py-3 px-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <ul className="list-inline mb-2 mb-md-0">
            <li className="list-inline-item mx-2"><a href="#home" className="text-white">Home</a></li>
            <li className="list-inline-item mx-2"><a href="#services" className="text-white">Services</a></li>
            <li className="list-inline-item mx-2"><a href="#projects" className="text-white">Projects</a></li>
            <li className="list-inline-item mx-2"><a href="#testimonials" className="text-white">Testimonials</a></li>
            <li className="list-inline-item mx-2"><a href="#contact" className="text-white">Contact</a></li>
          </ul>
          <form onSubmit={handleSubscribe} className="d-flex align-items-center">
            <span className="text-white me-2">Subscribe Us</span>
            <input
              type="email"
              className="form-control form-control-sm me-2"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-light btn-sm">Subscribe</button>
          </form>
        </div>
      </div>

      {/* --- Bottom Black Bar --- */}
      <div className="footer-bottom bg-black text-white text-center py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0">All Rights Reserved © 2023</p>

          <img src="/assets/logo.svg" alt="Logo" height="20" />

          <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-2 mt-md-0">
            <div className="social-icons d-flex gap-3">
              <img src="/assets/Frame.svg" alt="Facebook" height="20" />
              <img src="/assets/Group.svg" alt="Instagram" height="20" />
              <img src="/assets/Group-1.svg" alt="Twitter" height="20" />
              <img src="/assets/Linkedin.svg" alt="LinkedIn" height="20" />
            </div>
            <a href="/admin" className="btn btn-outline-light btn-sm">Go to Admin Panel</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

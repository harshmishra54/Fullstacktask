import React, { useState } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/api/contact`, formData);
      alert('Your request has been submitted!');
      setFormData({ fullName: '', email: '', mobile: '', city: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section
      className="hero-container"
      style={{
        backgroundImage:
          "url('/assets/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home%201.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
            <h1 className="hero-heading">
              Consultation,<br />Design &<br />Marketing
            </h1>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="hero-form-box text-white">
              <h4 className="mb-4">Get a Free Consultation</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="form-control form-dark mb-3"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="form-control form-dark mb-3"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Phone Number"
                  className="form-control form-dark mb-3"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="Area, City"
                  className="form-control form-dark mb-4"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn btn-orange w-100">Get Quick Quote</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

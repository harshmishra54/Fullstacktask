import React from 'react';
import './LandingPage.css';

const MiddleSection = () => {
  return (
    <section className="middle-section py-5">
      {/* --- Not Your Average Realtor --- */}
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3 className="section-heading text-start">Not Your Average Realtor</h3>
            <p className="text-muted text-start">
              Work hard to earn the trust of your clients by providing practical advice and a strategic design—
              done effectively, and consistently, to get the best return on your efforts and their values.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center gap-3 mt-4 mt-md-0">
            <img src="/assets/Ellipse 11.svg" alt="Realtor 1" className="circle-img" />
            <img src="/assets/Ellipse 12.svg" alt="Realtor 2" className="circle-img" />
            <img src="/assets/Ellipse 13.svg" alt="Realtor 3" className="circle-img" />
          </div>
        </div>
      </div>

      {/* --- Why Choose Us --- */}
      <div className="container text-center mb-5">
        <h3 className="section-heading">Why Choose Us?</h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <img src="/assets/home.svg" height="40" alt="ROI" />
            <h6 className="mt-3 text-primary fw-bold">Potential ROI</h6>
            <p className="text-muted small px-2">
              Maximize your property’s reach through strategic campaigns and smart ROI.
            </p>
          </div>
          <div className="col-md-4">
            <img src="/assets/paintbrush-2.svg" height="40" alt="Design" />
            <h6 className="mt-3 text-primary fw-bold">Design</h6>
            <p className="text-muted small px-2">
              Showcase your listings with design-forward pages that convert.
            </p>
          </div>
          <div className="col-md-4">
            <img src="/assets/circle-dollar-sign.svg" height="40" alt="Marketing" />
            <h6 className="mt-3 text-primary fw-bold">Marketing</h6>
            <p className="text-muted small px-2">
              Integrated marketing tools that turn traffic into real leads.
            </p>
          </div>
        </div>
      </div>

      {/* --- About Us Section --- */}
      <div className="container text-center mb-5">
        <h3 className="section-heading mb-4">About Us</h3>
        <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
          <img src="/assets/pexels-brett-sayles-2881232-1.svg" className="about-img" alt="About 1" />
          <img src="/assets/pexels-fauxels-3182834.svg" className="about-img" alt="About 2" />
          <img src="/assets/pexels-andres-ayrton-6578391.svg" className="about-img" alt="About 3" />
        </div>
        <p className="text-muted w-75 mx-auto">
          Fifteen years of experience in real estate, excellent customer service and a commitment to work hard, listen and follow through.
          We provide quality service to build relationships with clients and, more importantly, maintain those relationships by communicating effectively.
        </p>
        <button className="btn btn-outline-primary mt-3">LEARN MORE</button>
      </div>
    </section>
  );
};

export default MiddleSection;

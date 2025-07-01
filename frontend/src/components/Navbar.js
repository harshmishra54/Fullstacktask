import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-white shadow-sm px-5 py-3">
    <a className="navbar-brand" href="/">
      <img src="/assets/logo.svg" alt="Logo" height="40" />
    </a>
    <div className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
        <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
        <li className="nav-item"><a className="btn btn-warning text-white ms-3" href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;

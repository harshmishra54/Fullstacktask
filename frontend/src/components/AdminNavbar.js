import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold text-white" to="/admin">
        Admin Panel
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#adminNavbar"
        aria-controls="adminNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="adminNavbar">
        <ul className="navbar-nav ms-auto gap-3 text-center">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/clients">Clients</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/contacts">Contacts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/subscribers">Subscribers</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;

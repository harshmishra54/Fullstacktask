import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand fw-bold text-white" href="#">Admin Panel</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto gap-3">
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

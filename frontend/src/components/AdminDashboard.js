import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="d-grid gap-3">
        <Link to="/admin/projects" className="btn btn-primary">Manage Projects</Link>
        <Link to="/admin/clients" className="btn btn-secondary">Manage Clients</Link>
        <Link to="/admin/contacts" className="btn btn-success">View Contact Submissions</Link>
        <Link to="/admin/subscribers" className="btn btn-dark">View Subscribers</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

const AdminSubscribers = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/newsletter`);
      setEmails(res.data);
    } catch (err) {
      console.error('Failed to fetch subscribers:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Newsletter Subscribers</h3>
      {emails.length === 0 ? (
        <p className="text-muted mt-3">No subscribers yet.</p>
      ) : (
        <ul className="list-group mt-3">
          {emails.map((subscriber, i) => (
            <li key={i} className="list-group-item">{subscriber.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminSubscribers;

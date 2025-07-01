import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminClients = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: '',
    designation: '',
    description: '',
    image: null
  });

  // Fetch clients from backend on load
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/clients');
      setClients(res.data);
    } catch (err) {
      console.error('Error fetching clients:', err);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.designation || !form.image) {
      return alert('Please fill all fields and choose an image');
    }

    const data = new FormData();
    data.append('name', form.name);
    data.append('description', form.description);
    data.append('designation', form.designation);
    data.append('image', form.image);

    try {
      await axios.post('http://localhost:5000/api/clients', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Client added successfully!');
      setForm({ name: '', designation: '', description: '', image: null });
      fetchClients();
    } catch (err) {
      console.error('Error adding client:', err);
      alert('Something went wrong');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Admin - Client Management</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="designation"
          placeholder="Designation"
          value={form.designation}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="file"
          className="form-control mb-2"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <button className="btn btn-primary">Add Client</button>
      </form>

      <h4>All Clients</h4>
      <div className="row">
        {clients.map((client, i) => (
          <div className="col-md-3 mb-3" key={i}>
            <div className="card p-2 text-center">
              <img
                src={`http://localhost:5000/uploads/${client.image}`}
                alt={client.name}
                className="rounded-circle mx-auto mb-2"
                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              />
              <h6 className="fw-bold mb-0">{client.name}</h6>
              <small className="text-muted">{client.designation}</small>
              <p className="small mt-1">{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminClients;

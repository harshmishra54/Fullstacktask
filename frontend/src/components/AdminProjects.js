import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    image: null
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
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
    if (!form.name || !form.description || !form.image) {
      return alert('All fields are required including image');
    }

    const data = new FormData();
    data.append('name', form.name);
    data.append('description', form.description);
    data.append('image', form.image);

    try {
      await axios.post('http://localhost:5000/api/projects', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Project added!');
      setForm({ name: '', description: '', image: null });
      fetchProjects();
    } catch (err) {
      console.error('Error adding project:', err);
      alert('Failed to add project');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add New Project</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Project Name"
          value={form.name}
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
        <button className="btn btn-primary">Add Project</button>
      </form>

      <h4>All Projects</h4>
      <div className="row">
        {projects.map((proj, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card">
              <img
                src={`http://localhost:5000/uploads/${proj.image}`}
                alt={proj.name}
                className="card-img-top"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h6>{proj.name}</h6>
                <p className="small text-muted">{proj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;

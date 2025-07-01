import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  return (
    <section className="projects-section text-center py-5">
      <div className="container">
        <h4 className="section-heading">Our Projects</h4>
        <p className="text-muted mb-4">
          We showcase what helps clients close deals and grow their business. See our best work below.
        </p>
        <div className="row justify-content-center">
          {projects.map((project, i) => (
            <div className="col-md-2 m-2" key={i}>
              <div className="card shadow-sm">
                <img
                  src={`http://localhost:5000/uploads/${project.image}`}
                  alt={project.name}
                  className="card-img-top"
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className="card-body text-start">
                  <h6 className="text-primary fw-bold">{project.name}</h6>
                  <p className="text-muted small">{project.description}</p>
                  <button className="btn btn-sm btn-orange">READ MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

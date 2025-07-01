import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/clients')
      .then((res) => setClients(res.data))
      .catch((err) => console.error('Error fetching clients:', err));
  }, []);

  return (
    <section className="clients-section py-5 text-center">
      <div className="container">
        <h4 className="section-heading">Happy Clients</h4>
        <div className="row justify-content-center">
          {clients.map((client, i) => (
            <div className="col-md-2 m-2" key={i}>
              <div className="card p-3">
                <img
                  src={`http://localhost:5000/uploads/${client.image}`}
                  className="rounded-circle mx-auto mb-3"
                  height="60"
                  width="60"
                  alt={client.name}
                  style={{ objectFit: 'cover' }}
                />
                <p className="small text-muted">{client.description}</p>
                <h6 className="fw-bold text-primary mb-0">{client.name}</h6>
                <small className="text-muted">{client.designation}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

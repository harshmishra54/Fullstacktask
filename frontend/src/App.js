import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/LandingPage.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MiddleSection from './components/MiddleSection';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Footer from './components/Footer';

import AdminNavbar from './components/AdminNavbar';
import AdminProjects from './components/AdminProjects';
import AdminClients from './components/AdminClients';
import AdminContacts from './components/AdminContacts';
import AdminSubscribers from './components/AdminSubscribers';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <MiddleSection />
              <Projects />
              <Clients />
              <Footer />
            </>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <>
              <AdminNavbar />
              <AdminDashboard />
            </>
          }
        />

        {/* Admin Sections */}
        <Route
          path="/admin/projects"
          element={
            <>
              <AdminNavbar />
              <AdminProjects />
            </>
          }
        />
        <Route
          path="/admin/clients"
          element={
            <>
              <AdminNavbar />
              <AdminClients />
            </>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <>
              <AdminNavbar />
              <AdminContacts />
            </>
          }
        />
        <Route
          path="/admin/subscribers"
          element={
            <>
              <AdminNavbar />
              <AdminSubscribers />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

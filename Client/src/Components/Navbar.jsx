import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg colorful-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">Hospital Appointment System 🏥</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
      
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
  <Link className="nav-link" to="/users">Users</Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/my-appointments">My Appointments</Link>
</li>


          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

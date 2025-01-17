import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaWater, FaDonate, FaInfoCircle } from 'react-icons/fa'; // Importing React Icons
import logo from '../../assets/logo1.jpeg'; // Adjust path if needed

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Logo and Home link */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo} 
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: '40px', height: '40px', marginRight: '10px' }} // Resize the logo
          />
          Water Donation System
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home link with icon */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <FaHome className="me-2" style={{ fontSize: '1.5rem' }} />
                Home
              </Link>
            </li>
            {/* Problems link with icon */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/problems">
                <FaWater className="me-2" style={{ fontSize: '1.5rem' }} />
                Problems
              </Link>
            </li>
            {/* Donation link with icon */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/donation">
                <FaDonate className="me-2" style={{ fontSize: '1.5rem' }} />
                Donate
              </Link>
            </li>
            {/* About Us link with icon */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/aboutus">
                <FaInfoCircle className="me-2" style={{ fontSize: '1.5rem' }} />
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

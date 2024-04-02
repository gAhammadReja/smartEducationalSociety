import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Smart Educational Society</h3>
            <p>
              We are dedicated to providing quality education and empowering the next generation of learners.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul className="navbar-nav ml-auto footer">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/coursesList" className="nav-link">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faculties" className="nav-link">Our Teachers</NavLink>
            </li>
          </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Us</h4>
            <address>
              Gobindapur, Sundarpur , Bhagwangola<br />
              Murshidabad, West Bengal - 742135<br />
              Email: bwebsite865@gmail.com<br />
              Phone: 8642009874 , 8942871448
            </address>
          </div>
        </div>
        <hr />
        <p className="text-center">© 2023 Smart Educational Society. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

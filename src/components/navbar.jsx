import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-myBg py-3 fixed-top">
      <div className="container d-flex" style={{'flexWrap':'wrap'}}>
        <NavLink to="/" className="navbar-brand">
         <h1 style={{'color':'whitesmoke','textShadow':'1px 0px 2px blueviolet'}} className='px-3'>Smart Educationl Society</h1>
        </NavLink>
        
        <button
          className="navbar-toggler" style={{
            backgroundColor:"rgba(231, 223, 255, 0.7)",
            border:"2px solid black"
          }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item my-nav-button">
              <NavLink to="/" className="nav-link">
                <i className="fa fa-home" aria-hidden="true"></i>Home
              </NavLink>
            </li>
            <li className="nav-item my-nav-button">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item my-nav-button">
              <NavLink to="/notice" className="nav-link">
                Notice
              </NavLink>
            </li>
            <li className="nav-item my-nav-button">
              <NavLink to="/downloads" className="nav-link">
                Download
              </NavLink>
            </li>
            <li className="nav-item my-nav-button">
              <NavLink to="/faculties" className="nav-link">
              Faculties
              </NavLink>
            </li>
            <li className="nav-item my-nav-button">
              <NavLink to="/login" className="nav-link">
           <i class="fa fa-user" aria-hidden="true"></i>LogIn           
           </NavLink>
            </li>
            
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

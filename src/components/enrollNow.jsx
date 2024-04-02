import React from 'react';
import { NavLink } from 'react-router-dom';

const EnrollButton = () => {
  return (
    <div className="enroll-button-container">
      <NavLink to="/coursesList" className="enroll-button">
        Apply Online
      </NavLink>
    </div>
  );
};

export default EnrollButton;

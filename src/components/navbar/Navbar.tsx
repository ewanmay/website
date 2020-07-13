import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <div className="navbar-container flex center-item">
      <div className="navbar-item">
        HOME
      </div>
      <div className="navbar-item">
        TIMELINE
      </div>
      <div className="navbar-item">
        PROJECTS
      </div>
      <div className="navbar-item">
        VALUES
      </div>
      <div className="navbar-item">
        CONNECT
      </div>
    </div>
  );
}

export default Navbar;

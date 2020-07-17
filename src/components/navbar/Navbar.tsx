import React from 'react';
import './styles.css';
import LinkedIn from '../../assets/linked-in.svg';
import Email from '../../assets/email.svg';

function Navbar() {
  return (
    <div className="navbar-container flex right">
      <a href="https://www.linkedin.com/in/ewan-may/" target="_blank" rel="noopener noreferrer" className="navbar-item">
        <img src={LinkedIn} height="30" alt=""></img>
      </a>
      <a href="mailto:ewanmay3@gmail.com" target="_blank" rel="noopener noreferrer" className="navbar-item">
        <img src={Email} height="30" alt=""></img>
      </a>
    </div>
  );
}

export default Navbar;

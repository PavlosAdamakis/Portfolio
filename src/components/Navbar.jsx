// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // We'll create this soon for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Pavlos Adamakis</div> {/* Replace with your name/logo */}
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
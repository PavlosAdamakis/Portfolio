// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentYear} Pavlos Adamakis. All rights reserved.</p>
      {/* Add social media links here later */}
    </footer>
  );
}

export default Footer;
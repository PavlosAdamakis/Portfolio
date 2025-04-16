// src/components/CV.jsx
import React from 'react';
import './Section.css';

function CV() {
  return (
    <section id="cv" className="section">
      <h2>My Resume / CV</h2>
      <p>You can view or download my CV by clicking the link below.</p>
      <a href="/Pavlos_AdamakisCV.pdf" // Path relative to the public folder
         target="_blank" // Opens in a new tab
         rel="noopener noreferrer" // Security best practice
         className="button-link" // Style this link like a button
      >
        Download CV (PDF)
      </a>
      {/* Optionally, you could embed it using an iframe or a PDF viewer library, but a link is simplest */}
    </section>
  );
}

export default CV;
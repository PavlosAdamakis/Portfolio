import React from 'react';
import './Section.css';

function CV() {
  return (
    <section id="cv" className="section fade-in">
      <h2>My Resume / CV</h2>
      <p>You can view or download my CV by clicking the link below.</p>
      <a
        href="/Pavlos_AdamakisCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="button-link"
      >
        Download CV (PDF)
      </a>
    </section>
  );
}

export default CV;

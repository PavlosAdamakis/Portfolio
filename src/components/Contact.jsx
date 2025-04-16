import React from 'react';
import './Section.css';
import './Contact.css'; // Specific styles for contact

function Contact() {
  return (
    <section id="contact" className="section fade-in">
      <h2>Get In Touch</h2>
      <p>
        I'm always open to discussing new projects, creative ideas, or job opportunities.
        Feel free to reach out!
      </p>
      <div className="contact-methods">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:pavlosadamakis1@gmail.com">pavlosadamakis1@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/pavlos-adamakis-101071217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/pavlos-adamakis-101071217/
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/galactikos4"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/galactikos4
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+4550192750">+45 50192750</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;

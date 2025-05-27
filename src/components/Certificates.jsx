import React from 'react';
import './Certificates.css';

const certificates = [
  {
    title: 'Model Context Protocol (MCP): Hands-On with Agentic AI',
    date: 'May 27, 2025',
    skills: 'Claude AI Agents, APIs',
    file: '/CertificateOfCompletion_Model Context Protocol MCP HandsOn with Agentic AI.pdf',
  },
  {
    title: 'Learning SQL Programming',
    date: 'May 20, 2025',
    skills: 'SQL',
    file: '/CertificateOfCompletion_Learning SQL Programming.pdf',
  },
  {
    title: 'Generative AI: Working with Large Language Models',
    date: 'May 01, 2025',
    skills: 'LLMs, NLP, Generative AI',
    file: '/CertificateOfCompletion_Generative AI Working with Large Language Models.pdf',
  },
  {
    title: 'Machine Learning with Python: Foundations',
    date: 'April 30, 2025',
    skills: 'Machine Learning, Python',
    file: '/CertificateOfCompletion_Machine Learning with Python Foundations.pdf',
  },
  {
    title: 'What Is Generative AI?',
    date: 'May 01, 2025',
    skills: 'Generative AI Tools, AI',
    file: '/CertificateOfCompletion_What Is Generative AI (1).pdf',
  },
];

function Certificates() {
  return (
    <section className="certificates-section">
      <h2>📜 Certificates</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p className="cert-date">{cert.date}</p>
              <p className="cert-skills">{cert.skills}</p>
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="cert-button">
                View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;

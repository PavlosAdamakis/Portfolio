// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects'; // Import your project data
import './Section.css'; // Use general section styles
import './Projects.css'; // Create specific styles for the grid

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projects';
import './Section.css';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="section projects-section fade-in">
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

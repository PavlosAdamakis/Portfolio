// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      {/* Show multiple images if available */}
      {project.images && project.images.length > 0 ? (
        <div className="project-image-gallery">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              className="project-image"
            />
          ))}
        </div>
      ) : (
        // Show single image only if imageUrl exists
        project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
          />
        )
      )}

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {/* Embed YouTube video if provided */}
      {project.videoUrl && (
        <div className="project-video">
          <iframe
            width="100%"
            height="315"
            src={project.videoUrl.replace("watch?v=", "embed/")}
            title={`${project.title} Demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

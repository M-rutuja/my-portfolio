import React from "react";
import "./Card.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-tech">{project.tech}</p>
      <ul className="project-description">
        {project.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div className="project-buttons">
        {project.github && (
          <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} className="btn view" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

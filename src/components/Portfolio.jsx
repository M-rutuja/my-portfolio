import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "E-Commerce Product Listing Page",
    tech: "React, Redux, API Integration",
    description: [
      "Built a dynamic product listing page with sorting and filtering functionality.",
      "Integrated a REST API to fetch real-time product data."
    ],
    github: "https://github.com/M-rutuja/ecommerce",
    live: "https://your-live-link.com"
  },
  {
    title: "Weather App",
    tech: "React, JavaScript, API",
    description: [
      "Developed a weather forecast application using OpenWeather API.",
      "Implemented real-time weather updates and a user-friendly interface."
    ],
    github: "https://github.com/M-rutuja/weather-app",
    live: "https://your-live-link.com"
  },
  {
    title: "To-Do List App",
    tech: "React, Redux",
    description: [
      "Designed a CRUD-based to-do list app with local storage persistence.",
      "Used Redux for state management and improved performance."
    ],
    github: "https://github.com/M-rutuja/todo-app",
    live: "https://your-live-link.com"
  }
];

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Redux", "API Integration", "Git", "Responsive Design"
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header>
        <h1>Rutuja's Portfolio</h1>
        <p>Frontend Developer | MERN Stack Enthusiast</p>
      </header>

      <section>
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
            ))}
        </div>
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <a href="/Rutuja_Resume.pdf" download className="btn">Download Resume</a>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: rutujameshram1010@gmail.com</p>
        <p>LinkedIn: www.linkedin.com/in/rutuja-meshram-80584b218</p>
        <p>GitHub: https://github.com/M-rutuja</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Rutuja. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;

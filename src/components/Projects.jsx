import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: "WheelPlug",
      description: "Car Dealership Webapp (Passion Project).",
      image: "./images/project (1).png",
      technologies: ["React", "TailwindCss", "TypeScript"],
      githubLink: "https://github.com/temborichman/wheelplug.git",
      liveLink: "https://wheelplug.vercel.app/"
    },
    {
      title: "Homietix",
      description: "An online ticketing Platform (Passion Project).",
      image: "./images/project (2).png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/temborichman/homie-tix.git",
      liveLink: "https://project2-demo.com"
    },
    {
      title: "Tech-Connect",
      description: "Community mobile-app for tech-savvy individuals.",
      image: "./images/project (3).png",
      technologies: ["Next.js", "TailwindCss", "Firebase"],
      githubLink: "https://github.com/temborichman/tech-connect.git",
      liveLink: "https://tech-connect-4hin.vercel.app/"
    },
    {
      title: "Baker's Inn",
      description: "Baker's inn redesign.",
      image: "./images/project (7).png",
      technologies: ["Next.js", "TailwindCss", "TypeScript"],
      githubLink: "https://temborichman.github.io/bakers-inn/",
      liveLink: "https://bakers-inn-lemon.vercel.app/"
    },
    {
      title: "Elinah Photography",
      description: "Photographer's website for marketing his buisness.",
      image: "./images/project (5).png",
      technologies: ["React", "TypeScript", "StyledComponents"],
      githubLink: "https://github.com/temborichman/elinah-photography.git",
      liveLink: "https://elinah-photography.vercel.app/"
    },
    {
      title: "CoC",
      description: "Church website.",
      image: "./images/project (6).png",
      technologies: ["React", "TypeScript", "StyledComponents"],
      githubLink: "https://temborichman.github.io/church/",
      liveLink: "https://church-coc.vercel.app/"
    }
  ];

  return (
    <div className="projects section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-container container grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="uil uil-github-alt"></i> GitHub
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="uil uil-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 
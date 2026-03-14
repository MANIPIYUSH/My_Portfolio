import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ title, category, description, tech, link, color }) => (
    <div className="project-card glass-panel">
        <div className={`project-image-placeholder gradient-${color}`}>
            <Layers size={48} color="white" style={{ opacity: 0.8 }} />
        </div>

        <div className="project-content">
            <div className="project-category">{category}</div>
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{description}</p>

            <div className="project-tech">
                {tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>

            <div className="project-links">
                {link && (
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink size={16} />
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "RankRover.io",
            category: "SaaS Platform",
            description: "A comprehensive SEO link-building tracking platform. Solved the problem of opaque agency reporting by building a real-time client dashboard.",
            tech: ["React.js", "Redux", "Material UI", "Axios"],
            link: "#", // Add real link if available
            color: "purple"
        },
        {
            title: "Digital Marketing CRM",
            category: "Internal Tool",
            description: "Custom CRM tailored for PR agencies. Features include automated reporting, client management, and role-based access control.",
            tech: ["React.js", "Context API", "Chart.js"],
            link: null,
            color: "blue"
        },
        {
            title: "Movie Recommendation Engine",
            category: "ML Integration",
            description: "Intelligent entertainment guide offering 3 types of recommendations: Content-based, Collaborative filtering, and Popularity metrics.",
            tech: ["React.js", "Tailwind CSS", "Python Backend"],
            link: "#",
            color: "cyan"
        }
    ];

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured <span className="text-gradient">Work</span></h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

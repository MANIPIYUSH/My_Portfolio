import React from 'react';
import './Experience.css';

const ExperienceItem = ({ role, company, period, description, impact }) => (
    <div className="experience-item">
        <div className="experience-marker"></div>
        <div className="experience-content glass-panel">
            <div className="experience-header">
                <div>
                    <h3 className="role-title">{role}</h3>
                    <h4 className="company-name">{company}</h4>
                </div>
                <span className="period-badge">{period}</span>
            </div>
            <p className="experience-desc">{description}</p>
            <ul className="impact-list">
                {impact.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Frontend Developer (React.js)",
            company: "Avija Digital",
            period: "Aug 2023 – Present",
            description: "Sole Frontend Architect responsible for building RankRover.io SaaS and internal CRM tools.",
            impact: [
                "Architected RankRover.io from scratch using React & Redux.",
                "Created custom CRM dashboards streamlining client reporting.",
                "Optimized legacy code performance by 20%."
            ]
        },
        {
            role: "Frontend Developer",
            company: "Consolebit Technologies",
            period: "May 2023 – Aug 2023",
            description: "Delivering pixel-perfect implementations for diverse client web applications.",
            impact: [
                "Collaborated with UX/UI teams to implement Figma designs.",
                "Built responsive layouts handling complex data visualizations.",
                "Established component patterns for faster development."
            ]
        },
        {
            role: "Frontend Developer & Mentor",
            company: "PepCoding Education",
            period: "Aug 2021 – June 2022",
            description: "Contributing to the Nados community platform and mentoring future developers.",
            impact: [
                "Developed social feed components for the Nados platform.",
                "Transitioned from Teaching Assistant to core development team.",
                "Mentored students in Data Structures and Web Development."
            ]
        }
    ];

    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                <h2 className="section-title">Professional <span className="text-gradient">Journey</span></h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

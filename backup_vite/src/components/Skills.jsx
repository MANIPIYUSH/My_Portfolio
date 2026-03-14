import React from 'react';
import { Code, Layout, Database, Terminal } from 'lucide-react';
import './Skills.css';

const SkillCard = ({ title, icon: Icon, skills }) => (
    <div className="glass-panel skill-card">
        <div className="skill-header">
            <div className="skill-icon">
                <Icon size={24} />
            </div>
            <h3 className="skill-title">{title}</h3>
        </div>
        <div className="skill-tags">
            {skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const customCategories = [
        {
            title: "Core Engineering",
            icon: Code,
            skills: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "Async/Await"]
        },
        {
            title: "State & Architecture",
            icon: Database,
            skills: ["Redux", "Redux Toolkit", "Context API", "React Hooks", "State Design"]
        },
        {
            title: "UI & Styling",
            icon: Layout,
            skills: ["Material-UI (MUI)", "Tailwind CSS", "Responsive Design", "Flexbox/Grid", "Framer Motion"]
        },
        {
            title: "Tools & DevOps",
            icon: Terminal,
            skills: ["Git/GitHub", "Vite", "Axios", "Node.js (Basic)", "Chrome DevTools"]
        }
    ];

    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <h2 className="section-title text-center">Technical <span className="text-gradient">Arsenal</span></h2>

                <div className="skills-grid">
                    {customCategories.map((category) => (
                        <SkillCard key={category.title} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

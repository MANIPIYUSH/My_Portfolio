import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title">More Than Just Code—<br /><span className="text-gradient">I Build Products That Work.</span></h2>

                        <p className="about-text">
                            With over 3 years of professional experience in the frontend ecosystem, I don't just write code; I take ownership of the product lifecycle. My journey has taken me from building educational platforms at <strong>PepCoding</strong> to architecting entire CRM systems and SEO tools from scratch at <strong>Avija Digital</strong>.
                        </p>

                        <p className="about-text">
                            I specialize in the React.js ecosystem, focusing on what matters most to businesses: <strong>performance, scalability, and a seamless user experience</strong>. Whether it's optimizing a legacy codebase or building a complex SaaS platform like RankRover.io from the ground up, I bring a problem-solving mindset that bridges the gap between design and functionality.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item glass-panel">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item glass-panel">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects Delivered</span>
                            </div>
                            <div className="stat-item glass-panel">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

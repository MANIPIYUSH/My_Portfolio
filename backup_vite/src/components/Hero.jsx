import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section hero-section" id="hero">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-content"
                >
                    <div className="hero-badge">
                        <span className="scrolling-text">Available for Freelance Projects</span>
                    </div>

                    <h1 className="hero-title">
                        Building Scalable <span className="text-gradient">React Applications</span> & Custom CRM Solutions.
                    </h1>

                    <p className="hero-subtitle">
                        I translate complex business requirements into high-performance, user-centric frontend interfaces. Specializing in SaaS products, dashboards, and data-rich web applications.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Hire Me for Projects <ArrowRight size={18} />
                        </a>
                        <a href="https://drive.google.com/file/d/1MAfg_fzjwkb8FaC40Hy_39ZDIZPMIw4D/view" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            View Resume <FileText size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Optional: Add 3D element or Abstract Shape here later if user wants image */}
                <div className="hero-visual">
                    <div className="glow-orb"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

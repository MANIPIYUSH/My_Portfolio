import React from 'react';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section contact-section" id="contact">
            <div className="container contact-container">
                <div className="contact-content text-center">
                    <h2 className="section-title">Let's Build Your <span className="text-gradient">Next Product</span></h2>
                    <p className="contact-subtitle">
                        Whether you need a custom dashboard, a SaaS MVP, or a reliable frontend partner for your team—I'm ready to ship.
                    </p>

                    <div className="contact-actions">
                        <a href="mailto:piyushmanic@gmail.com" className="btn btn-primary btn-lg">
                            <Mail size={20} /> Email Me
                        </a>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/piyush-mani-chaubey-42b338a3/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/MANIPIYUSH" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Piyush Mani Chaubey. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};

export default Contact;

import React from 'react';
import { LayoutDashboard, Zap, Code2 } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: LayoutDashboard,
            title: "Custom Dashboard & CRM",
            desc: "I build data-heavy admin panels and internal tools using React and Material-UI. Perfect for agencies needing to digitize workflows."
        },
        {
            icon: Code2,
            title: "SaaS Frontend Architecture",
            desc: "Turn your MVP idea into a scalable product. I handle everything from authentication flows to complex state management."
        },
        {
            icon: Zap,
            title: "Performance & Refactoring",
            desc: "Speed up slow React apps and fix rendering bugs. I optimize legacy codebases for better user experience and maintainability."
        }
    ];

    return (
        <section className="section services-section" id="services">
            <div className="container">
                <h2 className="section-title text-center">How I Can <span className="text-gradient">Help You</span></h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass-panel">
                            <div className="service-icon">
                                <service.icon size={32} />
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

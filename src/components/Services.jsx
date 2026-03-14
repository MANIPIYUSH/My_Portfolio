import { LayoutDashboard, Zap, Code2 } from 'lucide-react';

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
        <section className="py-24" id="services">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    How I Can <span className="text-gradient">Help You</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="glass-panel p-10 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-16 h-16 mx-auto bg-violet-500/10 rounded-full flex items-center justify-center text-violet-500 mb-6 group-hover:scale-110 transition-transform">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

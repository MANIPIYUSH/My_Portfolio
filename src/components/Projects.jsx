import { ExternalLink, Layers } from 'lucide-react';

const ProjectCard = ({ title, category, description, tech, link, color }) => {
    const gradients = {
        purple: "from-violet-600 to-indigo-600",
        blue: "from-blue-500 to-cyan-500",
        cyan: "from-teal-400 to-emerald-500"
    };

    return (
        <div className="group glass-panel overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 flex flex-col h-full">
            <div className={`h-48 w-full bg-gradient-to-br ${gradients[color] || gradients.purple} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                <Layers size={48} className="text-white opacity-80 group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-bold tracking-widest text-violet-500 uppercase mb-2">
                    {category}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-violet-400 transition-colors">{title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 font-mono">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                    {link ? (
                        <a href={link} className="inline-flex items-center gap-2 text-sm font-semibold hover:text-violet-400 transition-colors" target="_blank" rel="noopener noreferrer">
                            Live Demo <ExternalLink size={14} />
                        </a>
                    ) : (
                        <span className="text-sm text-gray-600 cursor-not-allowed">Internal Tool</span>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "RankRover.io",
            category: "SaaS Platform",
            description: "A comprehensive SEO link-building tracking platform. Solved the problem of opaque agency reporting by building a real-time client dashboard.",
            tech: ["React.js", "Redux", "Material UI", "Axios"],
            link: "#",
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
        <section className="py-24" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Featured <span className="text-gradient">Work</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

const ExperienceItem = ({ role, company, period, description, impact }) => (
    <div className="relative pl-8 md:pl-0">
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 to-transparent -translate-x-1/2" />

        <div className="md:grid md:grid-cols-2 md:gap-12 items-start relative group">
            {/* Date (Left or Right based on logic) - Simplified for straight list on mobile, alternating on desktop */}
            <div className="hidden md:block md:text-right md:pr-12 md:group-odd:order-1 md:group-even:order-2">
                <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-2">
                    {period}
                </div>
                <h4 className="text-xl font-bold text-white">{company}</h4>
            </div>

            {/* Center Dot */}
            <div className="absolute left-[-5px] top-[24px] md:left-[50%] md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-4 border-violet-500 z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

            {/* Content Card */}
            <div className="glass-panel p-8 md:group-odd:order-2 md:group-even:order-1 hover:border-violet-500/30 transition-colors">
                {/* Mobile Header */}
                <div className="md:hidden mb-4">
                    <span className="text-sm text-violet-400 font-semibold block mb-1">{period}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{company}</h4>
                </div>

                <h3 className="text-lg font-bold text-violet-400 mb-4">{role}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
                <ul className="space-y-3">
                    {impact.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-300 text-sm">
                            <span className="text-violet-500 mt-1">▹</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
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
        <section className="py-24" id="experience">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Professional <span className="text-gradient">Journey</span>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

import { Code, Layout, Database, Terminal } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills }) => (
    <div className="glass-panel p-8 hover:bg-white/10 transition-colors group">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-gray-400 group-hover:border-violet-500/30 group-hover:text-gray-200 transition-all">
                    {skill}
                </span>
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
        <section className="py-24 relative" id="skills">
            {/* Background Decoration */}
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Technical <span className="text-gradient">Arsenal</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {customCategories.map((category) => (
                        <SkillCard key={category.title} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

const About = () => {
    return (
        <section className="py-24" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            More Than Just Code—<br />
                            <span className="text-gradient">I Build Products That Work.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-400">
                            <p>
                                With over <strong className="text-white">3 years of professional experience</strong> in the frontend ecosystem, I don't just write code; I take ownership of the product lifecycle. My journey has taken me from building educational platforms at <strong className="text-white">PepCoding</strong> to architecting entire CRM systems and SEO tools from scratch at <strong className="text-white">Avija Digital</strong>.
                            </p>

                            <p>
                                I specialize in the React.js ecosystem, focusing on what matters most to businesses: <strong className="text-white">performance, scalability, and a seamless user experience</strong>. Whether it's optimizing a legacy codebase or building a complex SaaS platform like RankRover.io from the ground up, I bring a problem-solving mindset that bridges the gap between design and functionality.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="glass-panel p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                            <span className="block text-5xl font-extrabold text-violet-500 mb-2">3+</span>
                            <span className="text-sm uppercase tracking-widest text-gray-500 font-semibold">Years Experience</span>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="glass-panel p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                                <span className="block text-4xl font-bold text-white mb-2">10+</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Projects</span>
                            </div>
                            <div className="glass-panel p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                                <span className="block text-4xl font-bold text-white mb-2">100%</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="contact">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-violet-900/20 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 pb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Let's Build Your <span className="text-gradient">Next Product</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Whether you need a custom dashboard, a SaaS MVP, or a reliable frontend partner for your team—I'm ready to ship.
                </p>

                <div className="flex flex-col items-center gap-8">
                    <a href="mailto:piyushmanic@gmail.com" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                        <Mail size={20} /> Email Me
                    </a>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/piyush-mani-chaubey-42b338a3/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all hover:-translate-y-1">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/MANIPIYUSH" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-white hover:border-white hover:text-black transition-all hover:-translate-y-1">
                            <Github size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Piyush Mani Chaubey. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;

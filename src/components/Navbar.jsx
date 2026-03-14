"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 flex items-center ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
                <a href="#" className="text-2xl font-extrabold tracking-tight">
                    Piyush<span className="text-violet-500">.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="bg-gradient-to-r from-violet-600 to-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/20 transition-all transform hover:-translate-y-0.5">Let's Talk</a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-20 left-6 right-6 p-6 rounded-2xl glass-panel flex flex-col gap-4 shadow-2xl md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-300 py-2 border-b border-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="text-violet-400 font-semibold py-2" onClick={() => setIsOpen(false)}>
                            Contact Me
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

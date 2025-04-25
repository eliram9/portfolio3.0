import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Projects from './Projects';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -100 }
    };

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="sticky top-0 z-50 bg-black w-full">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center py-4">
                    <>
                        {/* Gradient Border Wrapper */}
                        <div className="p-[1px] rounded-full bg-gradient-to-l from-main to-black">
                            <div className='flex items-center space-x-8 bg-black rounded-full px-8 py-3'>
                                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="text-2xl text-main hover:text-indigo-300 transition duration-300 mr-10 font-orbitron"
                                >
                                    ELIRAM
                                </button>

                                {/* Desktop Menu */}
                                <div className="hidden md:flex items-center space-x-6">
                                    <a href="#about" className="relative py-2 px-2 text-main hover:text-indigo-300 transition duration-300">
                                        About
                                    </a>
                                   
                                    <a href="#experience" className="relative py-2 px-2 text-main hover:text-indigo-300 transition duration-300">
                                        Experience
                                    </a>

                                    <a href="#projects" className="relative py-2 px-2 text-main hover:text-indigo-300 transition duration-300">
                                        Projects
                                    </a>

                                    <a href="#contact" className="relative py-2 px-2 text-main hover:text-indigo-300 transition duration-300">
                                        Contact
                                    </a>
                                </div>

                                {/* Mobile Menu Button */}
                                <div className="md:hidden">
                                    <button
                                        onClick={toggleMenu}
                                        className="text-main hover:text-indigo-300 focus:outline-none transition-all duration-300 p-2 rounded-full hover:bg-main/10"
                                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                    >
                                        {isMenuOpen ? (
                                            <HiX className="h-6 w-6 transition-transform duration-300 transform rotate-90" />
                                        ) : (
                                            <HiMenu className="h-6 w-6 transition-transform duration-300" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <AnimatePresence>
                            {isMenuOpen && (
                                <motion.div
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={menuVariants}
                                    transition={{ duration: 0.3 }}
                                    className="md:hidden fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md py-6 border-t border-main/20 shadow-lg z-50"
                                >
                                    <div className="flex flex-col items-center space-y-6 px-4">
                                        <a href="#about"
                                           className="text-main hover:text-indigo-300 transition duration-300 text-lg font-medium w-full text-center py-2 border-b border-main/10"
                                           onClick={() => setIsMenuOpen(false)}
                                        >
                                            About
                                        </a>
                                        <a href="#experience"
                                            className="text-main hover:text-indigo-300 transition duration-300 text-lg font-medium w-full text-center py-2 border-b border-main/10"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Experience
                                        </a>
                                        <a href="#projects"
                                              className="text-main hover:text-indigo-300 transition duration-300 text-lg font-medium w-full text-center py-2 border-b border-main/10"
                                              onClick={() => setIsMenuOpen(false)}
                                        >
                                            Projects
                                        </a>
                                        
                                        <a href="#contact"
                                            className="text-main hover:text-indigo-300 transition duration-300 text-lg font-medium w-full text-center py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
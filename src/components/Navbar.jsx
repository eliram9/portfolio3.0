import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

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
        <nav className="">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center py-4">
                    <>
                        {/* Gradient Border Wrapper */}
                        <div className="p-[1px] rounded-full bg-gradient-to-r from-main to-black">
                            <div className='flex items-center space-x-8 bg-black rounded-full px-8 py-3'>
                                <Link to="/" className="text-2xl text-main hover:text-indigo-300 transition duration-300 mr-10 font-orbitron">
                                    ELIRAM.
                                </Link>

                                {/* Desktop Menu */}
                                <div className="hidden md:flex items-center space-x-6">
                                    <a href="#about" className="relative py-2 px-2 text-main hover:text-indigo-300 transition duration-300">
                                        About
                                    </a>
                                    <a href="#skills" className="relative py-2 px-2 text-main hover:text-indigo-300 transition duration-300">
                                        Skills
                                    </a>
                                    <Link to="/experience" className="relative py-2 px-2 text-main hover:text-indigo-300 transition duration-300">
                                        Experience
                                    </Link>
                                    <Link to="/contact" className="relative py-2 px-2 text-main hover:text-indigo-300 transition duration-300">
                                        Contact
                                    </Link>
                                </div>

                                {/* Mobile Menu Button */}
                                <div className="md:hidden">
                                    <button
                                        onClick={toggleMenu}
                                        className="text-main hover:text-indigo-300 focus:outline-none"
                                    >
                                        {isMenuOpen ? (
                                            <HiX className="h-6 w-6" />
                                        ) : (
                                            <HiMenu className="h-6 w-6" />
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
                                    className="md:hidden absolute top-16 left-0 right-0 bg-black py-4"
                                >
                                    <div className="flex flex-col items-center space-y-4">
                                        <a href="#about"
                                           className="text-main hover:text-indigo-300 transition duration-300"
                                           onClick={() => setIsMenuOpen(false)}
                                        >
                                            About
                                        </a>
                                        <a href="#skills"
                                              className="text-main hover:text-indigo-300 transition duration-300"
                                              onClick={() => setIsMenuOpen(false)}
                                        >
                                            Skills
                                        </a>
                                        <Link
                                            to="/experience"
                                            className="text-main hover:text-indigo-300 transition duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Experience
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="text-main hover:text-indigo-300 transition duration-300"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Contact
                                        </Link>
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
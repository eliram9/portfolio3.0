import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

// Create a reusable NavLink component
const NavLink = ({ to, children, className = "" }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
        <Link 
            to={to} 
            className={`relative py-2 px-2 text-indigo-500 hover:text-indigo-300 transition duration-300 ${className}`}
        >
            {children}
            {isActive && (
                <motion.div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500"
                            layoutId="underline"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
        </Link>
    );
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -100 }
    };

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-black shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center py-4">
                    <>
                        <div className='flex items-center space-x-8 border border-indigo-500 rounded-full px-8 py-3'>
                            <Link to="/" className="text-2xl text-indigo-500 hover:text-indigo-300 transition duration-300 mr-10">
                                Eliram.
                            </Link>
                            
                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center space-x-6">
                                <NavLink to="/about" className="relative py-2 px-2 text-indigo-500 hover:text-indigo-300 transition duration-300">
                                    About
                                </NavLink>
                                <NavLink to="/projects" className="relative py-2 px-2 text-indigo-500 hover:text-indigo-300 transition duration-300">
                                    Projects
                                </NavLink>
                                <NavLink to="/experience" className="relative py-2 px-2 text-indigo-500 hover:text-indigo-300 transition duration-300">
                                    Experience
                                </NavLink>
                                <Link to="/contact" className="relative py-2 px-2 text-indigo-500 hover:text-indigo-300 transition duration-300">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-indigo-500 hover:text-indigo-300 focus:outline-none"
                            >
                                {isMenuOpen ? (
                                    <HiX className="h-6 w-6" />
                                ) : (
                                    <HiMenu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </>
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
                                <Link
                                    to="/about"
                                    className="text-indigo-500 hover:text-indigo-300 transition duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/projects"
                                    className="text-indigo-500 hover:text-indigo-300 transition duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="/experience"
                                    className="text-indigo-500 hover:text-indigo-300 transition duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Experience
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-indigo-500 hover:text-indigo-300 transition duration-300 bg-white px-4 py-2 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
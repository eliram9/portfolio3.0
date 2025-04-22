import React from 'react';

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { TbBrandGithubFilled } from "react-icons/tb";
// Import react-parallax-tilt instead of react-tilt
import Tilt from "react-parallax-tilt";

import projectsData from './data/projects_data.json';

const Projects = () => {
    
    return (
        <section id="projects" className="min-h-screen bg-transparent py-20 text-white relative overflow-hidden font-inter">
            <div className="container mx-auto px-4 py-16">
                <motion.h2 
                    className="text-3xl mb-16 text-lightGray font-orbitron tracking-widest text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    P R O J E C T S
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {projectsData.projects && projectsData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Wrap your card content with Tilt from react-parallax-tilt */}
                            <Tilt
                                tiltMaxAngleX={8}
                                tiltMaxAngleY={8}
                                scale={1.05}
                                transitionSpeed={1500}
                                perspective={800}
                                className="bg-gray-900 rounded-md overflow-hidden backdrop-blur-sm border-transparent border-2 hover:border-main transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative aspect-video overflow-hidden p-4">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-md"
                                    />
                                </div>
                                
                                <div className="p-6 flex-grow">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-lightGray mb-7 font-light">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.techStack && project.techStack.map((tech, i) => (
                                            <span 
                                                key={i}
                                                className="px-3 py-1 text-sm bg-main/15 rounded-full text-main"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-6 justify-end text-end mt-auto">
                                    {project.code && (  
                                        <motion.a 
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-main hover:text-main/80 transition-colors group"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <TbBrandGithubFilled className="text-2xl group-hover:rotate-12 transition-transform border-main border p-1 rounded-full" />
                                        </motion.a>
                                    )}                                
                                    
                                    <motion.a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-main hover:text-main/80 transition-colors group"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FiExternalLink className="text-2xl group-hover:rotate-12 transition-transform border-main border p-1 rounded-full" />
                                    </motion.a>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
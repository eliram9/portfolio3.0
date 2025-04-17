import React from 'react';

import { motion } from 'framer-motion';

import CertificateCard from './CertificateCard';
import certificationsData from './data/certifications_data.json';
import skillsData from './data/skills_data.json';
import SpinningCarousel3D from './SpinningCarousel3D';

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-transparent py-20 text-white relative overflow-hidden font-inter">
            <div className="container mx-auto lg:px-4 px-4 py-16 2xl:px-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-3">
                    {/* Left Section - Text Content */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-lg font-thin text-lightGray">INTRODUCTION</h1> 
                        <h1 className="text-main text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron tracking-wide">About<span className='text-white'>.</span></h1>
                        <h2 className="text-2xl md:text-2xl">Full Stack Developer</h2>
                        <p className="text-lg text-lightGray max-w-2xl mx-auto lg:mx-0 font-light leading-7">
                                I'm a Full-Stack Developer with 7+ years of experience, specializing in modern UI development and AI-driven tools. 
                                Everything about React.js and UI libraries is a true passion of mine. With a background in Hydro Engineering, I bring a 
                                strong problem-solving mindset to every project. I thrive in Agile environments and have a keen eye for design — from early 
                                mockups to delivering polished, high-end user experiences.
                        </p>
                    </div>

                    {/* Right Section - Text Content */}
                    3D image
                </div>

                {/* Certifications Section */}
                <div className="mt-16">
                    <h2 className="text-2xl mb-8 text-lightGray">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {certificationsData.map((cert, index) => (
                            <CertificateCard
                                key={index}
                                icon={cert.icon}
                                title={cert.title}
                                description={cert.description}
                                issueDate={cert.issueDate}
                                certificateUrl={cert.certificateUrl}
                                delay={index * 0.2}
                            />
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20">
                    <h2 className="text-2xl mb-12 text-lightGray font-orbitron tracking-widest">S K I L L S</h2>
                    
                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 mb-20">
                        {skillsData.skills.map((skill, index) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    borderColor: "rgb(99, 102, 241)",
                                    transition: { duration: 0.2 }
                                }}
                                transition={{ 
                                    duration: 0.2,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800 hover:border-main transition-all duration-300 cursor-pointer"
                            >
                                <p className="text-lightGray text-center font-medium">{skill.item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tools Grid Section */}
                <div>
                    <h2 className="text-2xl text-lightGray font-orbitron tracking-widest">T O O L S  <span className='px-5'>&</span>  T E C H N O L O G I E S</h2>
                    <div>
                        <SpinningCarousel3D />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 
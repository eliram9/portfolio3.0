import React from 'react';

import { motion } from 'framer-motion';

import CertificateCard from './CertificateCard';
import certificationsData from './data/certifications_data.json';
import SkillsAndTools from './SkillsAndTools';


const About = () => {
    return (
        <div>
        <section id="about" className="min-h-screen bg-transparent text-white relative overflow-hidden font-inter">
            <div className="container mx-auto lg:px-4 px-4 pt-16 2xl:px-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-3">
                    {/* Left Section - Text Content */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-lg font-thin text-lightGray -mb-2">INTRODUCTION</h1> 
                        <h1 className="text-main text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron tracking-wide">About<span className='text-white'>.</span></h1>
                        <h2 className="text-2xl md:text-2xl pt-7">Full Stack Developer</h2>
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
                    <h2 className="text-2xl mb-12 text-lightGray font-orbitron tracking-widest">C E R T I F I C A T I O N S</h2>
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

                {/* Skills & tools Section  */}
                <SkillsAndTools />
            </div>
        </section>
        </div>
    );
};

export default About; 
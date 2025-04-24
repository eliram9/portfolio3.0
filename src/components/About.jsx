import React from 'react';
import { motion } from 'framer-motion';

import CertificateCard from './CertificateCard';
import certificationsData from './data/certifications_data.json';
import SkillsAndTools from './SkillsAndTools';
import SectionHeader from './SectionHeader';
import SectionTitle from './SectionTitle';


const About = () => {
    return (
        <div>
        <section id="about" className="min-h-screen bg-transparent text-white relative overflow-hidden font-inter pt-16">
            <div className="container mx-auto lg:px-4 px-4 pt-16 2xl:px-10">
                <div className="grid grid-cols-1 gap-8 items-center">
                    {/* Left Section - Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <SectionHeader title="A B O U T" subtitle="INTRODUCTION" position='start' />
                        <p className="text-sm sm:text-base md:text-lg text-white mx-auto lg:mx-0 font-light leading-8 w-full lg:w-[72%] text-start">
                                I'm a Full-Stack Developer with 7+ years of experience, specializing in modern UI development and AI-driven tools. 
                                Everything about React.js and UI libraries is a true passion of mine.</p> 
                        <p className="text-sm sm:text-base md:text-lg text-white mx-auto lg:mx-0 font-light leading-8 w-full lg:w-[72%] text-start">
                                    With a background in Hydro Engineering, I bring a 
                                    strong problem solving mindset to every project. I thrive in Agile environments and have a keen eye for design - from early 
                                    mockups to delivering polished, high-end user experiences.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-white mx-auto lg:mx-0 font-light leading-8 w-full lg:w-[72%] text-start">
                            I currently hold an active Secret Clearance and Public Trust, and I am also pursuing my passion for aviation as a student pilot.
                        </p>    
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mt-24">
                    <SectionTitle text="C E R T I F I C A T I O N S" position="center" />
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
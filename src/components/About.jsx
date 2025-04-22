import React from 'react';
import { motion } from 'framer-motion';

import CertificateCard from './CertificateCard';
import certificationsData from './data/certifications_data.json';
import SkillsAndTools from './SkillsAndTools';

// SVG illustration as a lightweight alternative
const DeveloperIllustration = () => (
  <svg 
    viewBox="0 0 800 600" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Monitor/Screen */}
    <rect x="200" y="100" width="400" height="250" rx="10" fill="#333" />
    <rect x="220" y="120" width="360" height="210" rx="5" fill="#1a1a1a" />
    
    {/* Code elements on screen */}
    <rect x="240" y="140" width="180" height="15" rx="2" fill="#61dafb" opacity="0.7" />
    <rect x="240" y="165" width="320" height="15" rx="2" fill="#ffffff" opacity="0.5" />
    <rect x="240" y="190" width="280" height="15" rx="2" fill="#ffffff" opacity="0.5" />
    <rect x="240" y="215" width="200" height="15" rx="2" fill="#61dafb" opacity="0.7" />
    <rect x="240" y="240" width="300" height="15" rx="2" fill="#ffffff" opacity="0.5" />
    <rect x="240" y="265" width="240" height="15" rx="2" fill="#61dafb" opacity="0.7" />
    <rect x="240" y="290" width="180" height="15" rx="2" fill="#ffffff" opacity="0.5" />
    
    {/* Monitor stand */}
    <rect x="350" y="350" width="100" height="20" rx="5" fill="#333" />
    <rect x="380" y="370" width="40" height="30" rx="3" fill="#333" />
    <rect x="350" y="400" width="100" height="10" rx="5" fill="#333" />
    
    {/* Desk */}
    <rect x="100" y="410" width="600" height="20" rx="3" fill="#444" />
    
    {/* Coffee cup */}
    <rect x="550" y="350" width="70" height="60" rx="5" fill="#694431" />
    <rect x="560" y="340" width="50" height="10" rx="3" fill="#8B5A2B" />
    <circle cx="585" cy="365" r="15" fill="#fff" opacity="0.2" />
    
    {/* Keyboard */}
    <rect x="300" y="320" width="200" height="20" rx="5" fill="#222" />
    
    {/* Mouse */}
    <ellipse cx="550" cy="330" rx="20" ry="30" fill="#222" />
    
    {/* React logo */}
    <circle cx="700" cy="150" r="40" fill="transparent" stroke="#61dafb" strokeWidth="5" opacity="0.8" />
    <circle cx="700" cy="150" r="10" fill="#61dafb" opacity="0.8" />
    <ellipse cx="700" cy="150" rx="40" ry="15" fill="transparent" stroke="#61dafb" strokeWidth="5" opacity="0.8" transform="rotate(45 700 150)" />
    <ellipse cx="700" cy="150" rx="40" ry="15" fill="transparent" stroke="#61dafb" strokeWidth="5" opacity="0.8" transform="rotate(-45 700 150)" />
    
    {/* JS logo */}
    <rect x="100" y="120" width="70" height="70" fill="#f7df1e" />
    <path d="M125 170c3.333 0 5.833-1 7.5-3 1.667-2 2.5-4.333 2.5-7h-7c0 1-.167 1.833-.5 2.5-.333.667-1 1-2 1-1.333 0-2-.833-2-2.5v-13h-7v13c0 3 .667 5.333 2 7 1.333 1.667 3.333 2.5 6 2.5z" fill="#000" />
    <path d="M145 170c3.333 0 5.833-1 7.5-3 1.667-2 2.5-4.333 2.5-7h-7c0 1-.167 1.833-.5 2.5-.333.667-1 1-2 1-1.333 0-2-.833-2-2.5v-13h-7v13c0 3 .667 5.333 2 7 1.333 1.667 3.333 2.5 6 2.5z" fill="#000" />
  </svg>
);

const About = () => {
    return (
        <div>
        <section id="about" className="min-h-screen bg-transparent text-white relative overflow-hidden font-inter">
            <div className="container mx-auto lg:px-4 px-4 pt-16 2xl:px-10">
                <div className="grid grid-cols-1 gap-8 items-center">
                    {/* Left Section - Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-lg font-light text-lightGray -mb-2">INTRODUCTION</h1> 
                        <h1 className="text-main text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron tracking-normal pb-4">A B O U T<span className='text-lightGray'>.</span></h1>
                        {/* <h2 className="text-2xl md:text-2xl pt-7">Full Stack Developer</h2> */}
                        <p className="text-lg text-white mx-auto lg:mx-0 font-light leading-8 w-full lg:w-[75%]">
                                I'm a Full-Stack Developer with 7+ years of experience, specializing in modern UI development and AI-driven tools. 
                                Everything about React.js and UI libraries is a true passion of mine.</p> 
                        <p className='text-lg text-white mx-auto lg:mx-0 font-light leading-8 w-full lg:w-[75%]'>With a background in Hydro Engineering, I bring a 
                                strong problem-solving mindset to every project. I thrive in Agile environments and have a keen eye for design — from early 
                                mockups to delivering polished, high-end user experiences.
                        </p>
                        <p className="text-lg text-lightGray mx-auto lg:mx-0 font-light leading-8 w-full lg:w-[75%]">
                            I currently hold an active Secret Clearance and Public Trust, and I am also pursuing my passion for aviation as a student pilot.
                        </p>    
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mt-24">
                    <h2 className="text-3xl mb-12 text-lightGray font-orbitron tracking-widest">C E R T I F I C A T I O N S</h2>
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
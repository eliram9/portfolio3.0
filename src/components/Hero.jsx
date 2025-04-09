import React from 'react';

import { FaDownload } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import ScrollDownIcon from './ScrollDownIcon';


const Hero = () => {
    return (
        <div className="h-screen md:h-fit bg-black text-white relative overflow-hidden">
            <div className="container mx-auto lg:px-4 px-4 py-16">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-3">
                    {/* Left Section - Text Content */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hi, I'm</h1> 
                        <h1 className="text-indigo-500 text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron tracking-wide">ELIRAM MALACHI</h1>
                        <h2 className="text-2xl md:text-3xl text-gray-400">Full Stack Developer</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            I build exceptional digital experiences that make an impact. 
                            Specializing in modern web technologies and user-centric design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300 flex items-center gap-2">
                                Download CV
                                <FaDownload className="text-lg" />
                            </button>
                            <button className="px-6 py-3 border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition duration-300">
                                Contact Me
                            </button>

                            <div className='flex items-center gap-4'>
                                <a href="#" className='w-10 h-10 flex items-center justify-center text-indigo-500 border border-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300'>
                                    <FaLinkedinIn className="text-lg" />
                                </a>
                                <a href="#" className='w-10 h-10 flex items-center justify-center text-indigo-500 border border-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300'>
                                    <TbBrandGithubFilled className="text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
                            <img src="/profile.jpg" 
                                alt="Eliram Malachi" 
                                className="relative w-full h-full object-cover rounded-full border-4 border-indigo-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollDownIcon />
        </div>
    )
}

export default Hero

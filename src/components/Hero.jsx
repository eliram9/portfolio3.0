import React from 'react';

import { FaDownload } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

import ScrollDownIcon from './ScrollDownIcon';



const Hero = () => {
    return (
        <div className="h-screen md:h-fit text-white relative overflow-hidden">
            <div className="container mx-auto lg:px-4 px-4 py-16 2xl:px-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-3">
                    {/* Left Section - Text Content */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-xl">Hi, I'm</h1> 
                        <h1 className="text-main text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron tracking-wide z-10 pb-10">ELIRAM MALACHI</h1>
                        <h2 className="text-2xl md:text-3xl text-gray-400 font-light">Full Stack Developer</h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light">
                            I build exceptional digital experiences that make an impact. 
                            Specializing in modern web technologies and user-centric design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-6 py-3 bg-main text-white rounded-lg hover:bg-indigo-600 transition duration-300 flex items-center gap-2">
                                Download CV
                                <FaDownload className="text-lg" />
                            </button>
                            <button className="px-6 py-3 border border-main text-main rounded-lg hover:bg-main hover:text-white transition duration-300">
                                Contact Me
                            </button>

                            <div className='flex items-center gap-4'>
                                <a href="#" className='w-10 h-10 flex items-center justify-center text-main border border-main rounded-full hover:bg-main hover:text-white transition duration-300'>
                                    <FaLinkedinIn className="text-lg" />
                                </a>
                                <a href="#" className='w-10 h-10 flex items-center justify-center text-main border border-main rounded-full hover:bg-main hover:text-white transition duration-300'>
                                    <TbBrandGithubFilled className="text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-main rounded-full opacity-20 blur-3xl"></div>
                            <img src="/profile.jpg" 
                                alt="Eliram Malachi" 
                                className="relative w-full h-full object-cover rounded-full border-4 border-main"
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

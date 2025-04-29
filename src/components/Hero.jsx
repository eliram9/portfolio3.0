import React from 'react';

import { FaDownload } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

import ScrollDownIcon from './ScrollDownIcon';
import Eliram from '/em36.png';



const Hero = () => {
    return (
        <div className="h-screen md:h-fit relative overflow-hidden">
            <div className="container mx-auto lg:px-4 px-4 py-2 md:py-10 2xl:px-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-3">
                    {/* Left Section - Text Content */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl text-lightGray">Hi, I'm</h1> 
                        <h1 className="text-main text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron tracking-wide z-10 pb-2">ELIRAM MALACHI</h1>
                        <h2 className="text-xl md:text-3xl lg:text-3xl text-gray-300 font-light pb-5">Full Stack Developer</h2>
                        <p className="text-sm md:text-lg lg:text-xl text-lightGray max-w-2xl mx-auto lg:mx-0 font-light">
                            I craft bold, modern interfaces using cutting-edge AI tools and web technologies. <br />
                            My goal? Intuitive, high-impact digital experiences that drive results and leave a lasting impression.
                        </p>
                       
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-5">
                            <a href="/Eliram Malachi - Resume.pdf"
                               download
                               className="px-6 py-3 bg-main text-white rounded-lg hover:bg-indigo-600 transition duration-300 flex items-center justify-center md:justify-start gap-2 mx-auto md:mx-0 w-full sm:w-auto"
                            >
                                Download CV
                                <FaDownload className="text-lg" />
                            </a>
                            <button className="px-6 py-3 border border-main text-main rounded-lg hover:bg-main hover:text-white transition duration-300">
                                Contact Me
                            </button>

                            <div className='hidden md:flex items-center gap-4 justify-center md:justify-start mx-auto md:mx-0'>
                                <a href="https://www.linkedin.com/in/eliram9/" className='w-10 h-10 flex items-center justify-center text-main border border-main rounded-full hover:bg-main hover:text-white transition duration-300'>
                                    <FaLinkedinIn className="text-lg" />
                                </a>
                                <a href="https://github.com/eliram9/" className='w-10 h-10 flex items-center justify-center text-main border border-main rounded-full hover:bg-main hover:text-white transition duration-300'>
                                    <TbBrandGithubFilled className="text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex-1 flex justify-end z-20">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[380px] 2xl:w-[600px] 2xl:h-[580px]">
                            {/* <div className="absolute inset-0 bg-main rounded-full opacity-20 blur-3xl"></div> */}
                            <img src={Eliram} 
                                alt="Eliram Malachi" 
                                className="relative w-full h-full object-cover object-center transform scale-125 contrast-35 saturate-30 hover:contrast-100 hover:saturate-100 transition-all duration-300 opacity-75 xl:pb-20" />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollDownIcon />
        </div>
    )
}

export default Hero

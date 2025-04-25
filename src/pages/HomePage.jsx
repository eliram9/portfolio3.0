import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience';
import Projects from '../components/Projects'
import Contact from '../components/Contact';

const HomePage = () => {
    // Use Vite's built-in BASE_URL variable
    const base = import.meta.env.BASE_URL || '';
    
    return (
        <div className='bg-black'>        
            <div className='relative'>
                <div 
                    className='absolute inset-0 bg-cover bg-center opacity-10 z-0'
                    style={{ backgroundImage: `url(${base}waves4.svg)` }}
                ></div>
                
                <div className='relative z-10'>
                    <Hero />
                    <About />
                </div>
            </div>

            <div className='relative'>
                <div 
                    className='absolute inset-0 bg-cover bg-center opacity-10 z-0'
                    style={{ backgroundImage: `url(${base}waves3.svg)` }}
                ></div>
                
                <div className='relative z-10'>
                    <Experience />
                </div>
            </div>
            
            <Projects />
            <div className='relative'>
                <div 
                    className='absolute inset-0 bg-cover bg-center z-0'
                    style={{ backgroundImage: `url(${base}space.svg)` }}
                ></div>
                
                <div className='relative z-20'>
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default HomePage
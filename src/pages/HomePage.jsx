import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience';
import Projects from '../components/Projects'
import Contact from '../components/Contact';


const HomePage = () => {
    return (
        <div className='bg-black'>        
            {/* <div className='bg-yellow-300'>
                <Hero  />
            </div>    */}

            <div className='relative'>
                {/* SVG Background - 30% opacity as requested */}
                <div 
                    className='absolute inset-0 bg-cover bg-center opacity-10 z-0'
                    style={{ backgroundImage: 'url(/waves4.svg)' }}  // Assuming your SVG is in the public folder
                ></div>
                
                {/* Hero content on top of the background */}
                <div className='relative z-10'>
                    <Hero />
                    <About  />
                </div>
            </div>

            <div className='relative'>
                {/* SVG Background - 30% opacity as requested */}
                <div 
                    className='absolute inset-0 bg-cover bg-center opacity-10 z-0'
                    style={{ backgroundImage: 'url(/waves3.svg)' }}  // Assuming your SVG is in the public folder
                ></div>
                
                {/* Hero content on top of the background */}
                <div className='relative z-10'>
                    <Experience />
                    
                </div>
            </div>
            
            <Projects />
            <div className='relative'>
                {/* SVG Background - 30% opacity as requested */}
                <div 
                    className='absolute inset-0 bg-cover bg-center z-0'
                    style={{ backgroundImage: 'url(/space.svg)' }}  // Assuming your SVG is in the public folder
                ></div>
                
                {/* Hero content on top of the background */}
                <div className='relative z-20'>
                    <Contact />
                    
                </div>
            </div>
        </div>
  )
}

export default HomePage

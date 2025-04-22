import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience';
import Projects from '../components/Projects'
import Contact from '../components/Contact';


const HomePage = () => {
    return (
        <div className='bg-black'>
            <Hero  />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
  )
}

export default HomePage

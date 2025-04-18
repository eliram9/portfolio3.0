import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience';


const HomePage = () => {
  return (
    <div className='bg-black'>
        <Hero  />
        <About />
        <Experience />
    </div>

  )
}

export default HomePage

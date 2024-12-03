import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SocialProof from './Components/SocialProof'
import Features from './Components/Features'
import Testimonial from './Components/Testimonial'
import Seconfeature from './Components/Seconfeature'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import FAQ from './Components/Faq'

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='px-6 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
        <Hero />
        <SocialProof />
        <Features />
      </div>
      <div>
        <Testimonial />
      </div>
      <div className='px-6 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
        <Seconfeature />
      </div>
      <div className='px-1 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
        <FAQ />
      </div>
      <div>
        <Blog />
      </div>
      <div className='px-6 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
        <Footer />

      </div>
    </div>
  )
}

export default App
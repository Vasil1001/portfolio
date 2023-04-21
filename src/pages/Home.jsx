import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import Projects from '../components/ProjectCards'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  )
}

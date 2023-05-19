import React from 'react'
import '../App.css'
import HeroSection from '../components/HomePage/HeroSection'
import AboutMe from '../components//HomePage/AboutMe'
import ProjectCards from '../components/HomePage/ProjectCards'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <ProjectCards />
    </div>
  )
}

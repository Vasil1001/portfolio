import React from 'react'
import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/./vite.svg'
import '../App.css'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Projects/>
      <Skills />
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  )
}

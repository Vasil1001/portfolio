import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
//ecf0f4
function App() {
  return (
    <div className="bg-white dark:bg-[#202124]">
      <div className="mx-auto flex justify-center min-h-screen w-11/12 flex-col pt-5 text-center xl:mx-auto xl:w-8/12 xl:pt-10">
        <Navbar />
        <HeroSection />

        <div className="flex">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App

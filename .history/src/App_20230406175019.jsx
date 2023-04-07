import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import HeroSection from './components/HeroSection'
//ecf0f4
function App() {
  return (
    <div className="mx-10 flex min-h-screen flex-col justify-between bg-[#ffffff] p-4 pt-8 text-center shadow-sm md:mx-20">
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
  )
}

export default App

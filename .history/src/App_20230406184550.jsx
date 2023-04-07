import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import HeroSection from './components/HeroSection'
//ecf0f4
function App() {
  return (
    <div>
    <div className="w-12/12 mx-auto mx-5 flex min-h-screen flex-col bg-[#ffffff]  pt-5 text-center xl:mx-auto xl:w-7/12 xl:pt-10">
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

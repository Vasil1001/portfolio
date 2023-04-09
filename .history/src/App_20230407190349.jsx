import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Pallete from './components/Pallete'
//ecf0f4
function App() {
  const [theme, setTheme] = useState(null)
  const handleThemeSwitch = () => {
    setTheme(theme === 'darj'? 'dark' : 'light')
  }
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [theme])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return (
    <div className="bg-white dark:bg-[#202124]">
      <div className="mx-auto flex min-h-screen w-11/12 flex-col justify-center pt-5 text-center xl:mx-auto xl:w-8/12 xl:pt-10">
        <Navbar />
        <button type="button" onClick={handleThemeSwitch} className="fixed right-2 top-2 z-10 rounded-md bg-indigo-500 p-1 text-lg">
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
        <HeroSection />
        <Skills />
        <Pallete />
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
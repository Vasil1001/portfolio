import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Pallete from './components/Pallete'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import AboutMe from './components/AboutMe'
import { BsLightbulb } from 'react-icons/bs'
import { BsLightbulbOffFill } from 'react-icons/bs'

//ecf0f4
function App() {
  const [theme, setTheme] = useState(null)

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  // APP BG 202124 / 1E1E20 / 252529
  return (
    <div className="bg-[#f8fbff] dark:bg-[#252529]">
      <div className="mx-auto flex min-h-screen p-5 sm:p-7  xl:p-0 w-12/12 flex-col justify-center pt-5 text-center xl:mx-auto xl:w-9/12 2xl:w-8/12 xl:pt-5">
        <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="fixed right-2 top-2 z-10 rounded-md bg-[#a9a387] p-0.5 p-1 text-lg dark:bg-[#393e46]"
        >
          {theme === 'dark' ? <BsLightbulb fill="yellow" fontSize="1.3rem" /> : <BsLightbulbOffFill fill="[#fadb3c]" fontSize="1.3rem" />}
        </button>
        <HeroSection />
        <AboutMe />
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

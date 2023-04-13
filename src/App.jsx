import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Pallete from './components/Pallete'
import AboutMe from './components/AboutMe'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { BsLightbulb } from 'react-icons/bs'
import { BsLightbulbOffFill } from 'react-icons/bs'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

//ecf0f4
function App() {
  // APP BG 202124 / 1E1E20 / 252529 f2f2f2 CREAM GRAY AND WHITE CARDS
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
  }, [theme]) //f2f2f2 f3f4f6 edeeef e9edf1 f7f8fa f8fbff f6f6f6
  return (
    <Router>
      <div className="bg-[#f8fbff] dark:bg-[#252529]">
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
        <div className=" z-20 mx-auto flex min-h-screen flex-col  justify-center p-5 pt-5 text-center sm:p-7 xl:mx-auto xl:w-9/12 xl:p-0 xl:pt-5 2xl:w-8/12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

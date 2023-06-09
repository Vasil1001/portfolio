import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import Navbar from './components/Layout/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import 'animate.css'
import Footer from './components/Layout/Footer'
import NotFound from './pages/NotFound'
import SelectedProject from './pages/SelectedProject'

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
  }, [theme]) //f2f2f2 f3f4f6 edeeef e9edf1 f7f8fa f8fbff f6f6f6 edeef2 fcfbf8 f9f8f5
  return (
    <Router>
      <div className="dark:bg-bg-gradient-to-b overflow-hidden bg-gradient-to-b from-[#f8f5f5] via-white to-[#f8fbff] dark:from-[#252529] dark:to-[#252529]">
        <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
        <div className="max-w-screen z-20 mx-auto flex  min-h-screen flex-col  justify-center  text-center sm:p-7 xl:mx-auto xl:w-10/12 xl:p-0 xl:pt-5 2xl:w-8/12 3xl:w-7/12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/project/:id" element={<SelectedProject />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App

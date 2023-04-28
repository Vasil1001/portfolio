import React from 'react'
import { BsGithub, BsLightbulb, BsLinkedin, BsLightbulbOffFill, BsFillFileEarmarkTextFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CVButton from '../../CVButton'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar({ handleThemeSwitch, theme }) {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true
  }

  return (
    <div className="align-center mx-auto mb-3.5 flex items-center justify-between p-5 px-2 pt-5 text-center sm:p-7 xl:mx-auto xl:w-9/12 xl:p-0 xl:pt-5 2xl:w-8/12">
      <div className="flex items-center">
        <div className="dropdown block lg:hidden">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <a
                className={pathMatchRoute('/') ? 'mb-1 bg-[#2e5590] hover:bg-[#1b4584]' : ' mb-1 bg-base-300 hover:bg-[#3b414a] active:bg-[#2d4b73]'}
                onClick={() => navigate('/')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={
                  pathMatchRoute('/offers') ? 'my-1 bg-[#2e5590] hover:bg-[#1b4584]' : ' my-1 bg-base-300 hover:bg-[#3b414a] active:bg-[#2d4b73]'
                }
                onClick={() => navigate('/projects')}
              >
                Project
              </a>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <p className=" font-inter font-medium  text-[#202124] dark:text-[#f6eee8]">Vasil Dzhakov</p>
      </div>

      <div className="duration-400 fixed left-1/2 top-3 z-50 py-2 mx-auto flex hidden -translate-x-1/2 translate-y-2 flex-col items-center justify-center gap-5 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#fff9f4] p-1.5 shadow-none shadow-sm transition-shadow ease-in-out hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-lg hover:shadow-md hover:shadow-black/30 dark:hover:from-[#e8f4fd] dark:hover:to-[#faede3] lg:block ">
        <a
          className={
            pathMatchRoute('/')
              ? 'mr-1.5 rounded-xl  bg-[#dce1e9] px-2.5  py-1 font-noto text-sm text-gray-800 hover:bg-[#d7dce4]'
              : 'mr-1.5 rounded-xl px-2.5  py-1 font-noto text-sm text-gray-500 hover:bg-[#e5eaf1] active:bg-[#dbdee3]'
          }
          onClick={() => navigate('/')}
        >
          Home
        </a>
        <a
          className={
            pathMatchRoute('/projects')
              ? 'mr-1.5 rounded-xl  bg-[#dce1e9] px-2.5  py-1 font-noto text-sm text-gray-800 hover:bg-[#d7dce4]'
              : 'mr-1.5 rounded-xl px-2.5  py-1 font-noto text-sm text-gray-500 hover:bg-[#e5eaf1] active:bg-[#dbdee3]'
          }
          onClick={() => navigate('/projects')}
        >
          Project
        </a>
        {/* <button className="mr-1.5 rounded-xl px-2.5  py-1 font-noto text-sm text-gray-500 hover:bg-[#e5eaf1]">Projects</button> */}
        <a
          className={
            pathMatchRoute('/experience')
              ? 'mr-1.5 rounded-xl  bg-[#dce1e9] px-2.5  py-1 font-noto text-sm text-gray-800 hover:bg-[#d7dce4]'
              : 'mr-1.5 rounded-xl px-2.5  py-1 font-noto text-sm text-gray-500 hover:bg-[#e5eaf1] active:bg-[#dbdee3]'
          }
          onClick={() => navigate('/experience')}
        >
          Experience
        </a>
        <a
          className={
            pathMatchRoute('/about')
              ? 'rounded-xl  bg-[#dce1e9] px-2.5  py-1 font-noto text-sm text-gray-800 hover:bg-[#d7dce4]'
              : 'rounded-xl px-2.5  py-1 font-noto text-sm text-gray-500 hover:bg-[#e5eaf1] active:bg-[#dbdee3]'
          }
          onClick={() => navigate('/about')}
        >
          About
        </a>
      </div>

      <div className="flex gap-2 dark:text-[#e0eaf2]">
        <a className="tooltip tooltip-bottom" data-tip="linkedin.com/in/vasil1001" target="_blank" href="https://www.linkedin.com/in/vasil1001/">
          <BsLinkedin
            className="tooltip cursor-pointer  rounded-md text-[1.8rem] hover:fill-[#0069b9] dark:fill-[#f9f3ee]  dark:hover:fill-[#00adb5]"
            fill="black"
          />
        </a>
        <a className="tooltip tooltip-bottom" data-tip="github.com/Vasil1001" target="_blank" href="https://github.com/Vasil1001">
          <BsGithub
            className=" cursor-pointer text-[1.8rem]  hover:fill-[#0069b9] dark:fill-[#f9f3ee] dark:hover:fill-[#00adb5]"
            fill="black"
            data-tip="hello"
          />
        </a>

        {/* <BsFillFileEarmarkTextFill
          className="cursor-pointer hover:fill-[#0069b9] dark:fill-[#f9f3ee] dark:hover:fill-[#00adb5]"
          fill="black"
          fontSize="1.8rem"
        /> */}

        <CVButton />

        <label className="switch tooltip tooltip-bottom " data-tip="Toggle Dark Mode">
          <input onClick={handleThemeSwitch} type="checkbox" />
          <span className="slider"></span>
        </label>
        {/* <span class="w-[2.7px]  bg-[#c4c3c2] dark:bg-[#f9f3ee]/90 "></span>
        <button type="button" onClick={handleThemeSwitch} className="cursor-pointer rounded-md bg-[#c4c3c2]  px-[4px] dark:bg-[#484b51]">
          {theme === 'dark' ? (
            <BsLightbulb className=" hover:fill-[#0069b9] dark:hover:fill-[#ecda12]" fill="#f9f3ee" fontSize="1.6rem" />
          ) : (
            <BsLightbulbOffFill className="hover:fill-[#202124]/70" fill="#202124" fontSize="1.6rem" />
          )}
        </button> */}
      </div>
    </div>
  )
}

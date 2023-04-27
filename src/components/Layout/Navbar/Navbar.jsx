import React from 'react'
import { BsGithub, BsLightbulb, BsLinkedin, BsLightbulbOffFill, BsFillFileEarmarkTextFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CVButton from '../../CVButton'

export default function Navbar({ handleThemeSwitch, theme }) {
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
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <a>Experience</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
        <p className=" font-inter font-medium  text-[#202124] dark:text-[#f6eee8]">Vasil Dzhakov</p>
      </div>

      <div className="fixed left-1/2 top-3 z-50 shadow-none transition-shadow duration-400 ease-in-out hover:shadow-lg hover:shadow-black/30 mx-auto flex hidden -translate-x-1/2 translate-y-2 flex-col items-center justify-center gap-5 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#fff9f4] p-1.5 shadow-sm hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-md dark:hover:from-[#e8f4fd] dark:hover:to-[#faede3] lg:block ">
        <Link to="/">
          <button className="mr-1.5 rounded-xl border border-[#d1cfcf] bg-[#d6e0e9] p-3 px-2.5 py-1 font-noto text-sm text-gray-800 hover:bg-[#e5eaf1]">
            Home
          </button>
        </Link>
        <Link to="/projects">
          <button className="mr-1.5 rounded-xl px-2.5  py-1 font-noto text-sm text-gray-500 hover:bg-[#e5eaf1]">Projects</button>
        </Link>
        <Link to="/experience">
          <button className=" rounded-xl px-2.5 py-1 font-noto text-sm text-gray-500 hover:bg-[#e5eaf1]">Experience</button>
        </Link>
        <Link to="/about">
          <button className="rounded-xl px-2.5 py-1 font-noto text-sm text-gray-500  hover:bg-[#e5eaf1]">About</button>
        </Link>
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

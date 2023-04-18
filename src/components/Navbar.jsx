import React from 'react'
import { BsGithub, BsLightbulb, BsLinkedin, BsLightbulbOffFill, BsFillFileEarmarkTextFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CVButton from './CVButton'

export default function Navbar({ handleThemeSwitch, theme }) {
  return (
    <div className="align-center mx-auto mb-3.5 flex items-center justify-between p-5 px-2 pt-5 text-center sm:p-7 xl:mx-auto xl:w-9/12 xl:p-0 xl:pt-5 2xl:w-8/12">
      <p className=" font-inter font-medium dark:text-[#f6eee8]">Vasil Dzhakov</p>
      <div className="fixed z-50 left-1/2 top-3 mx-auto flex hidden -translate-x-1/2 translate-y-2 flex-col items-center justify-center gap-5 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#fff9f4] p-1.5 shadow-sm hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-md dark:hover:from-[#e8f4fd] dark:hover:to-[#faede3] lg:block ">
        <Link to="/">
          <button className="mr-1.5 rounded-xl text-sm border border-[#d1cfcf] bg-[#d6e0e9] p-3 px-2.5 py-1 font-noto text-gray-800 hover:bg-[#e5eaf1]">
            Home
          </button>
        </Link>
        <Link to="/projects">
          <button className="mr-1.5 rounded-xl text-sm  px-2.5 py-1 font-noto text-gray-500 hover:bg-[#e5eaf1]">Projects</button>
        </Link>
        <Link to="/experience">
          <button className=" rounded-xl text-sm px-2.5 py-1 font-noto text-gray-500 hover:bg-[#e5eaf1]">Experience</button>
        </Link>
        <Link to="/about">
          <button className="rounded-xl text-sm px-2.5 py-1 font-noto text-gray-500  hover:bg-[#e5eaf1]">About</button>
        </Link>
        
      </div>

      <div className="flex gap-2 dark:text-[#e0eaf2]">
        <a className="tooltip tooltip-bottom" data-tip="linkedin.com/in/vasil1001" target="_blank" href="https://www.linkedin.com/in/vasil1001/">
        <BsLinkedin
          className="tooltip text-[1.8rem]  cursor-pointer rounded-md hover:fill-[#0069b9] dark:fill-[#f9f3ee]  dark:hover:fill-[#00adb5]"
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
        
        <label class="switch">
          <input onClick={handleThemeSwitch} type="checkbox" />
          <span class="slider"></span>
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

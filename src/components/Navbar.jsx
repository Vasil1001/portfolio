import React from 'react'
import { BsGithub, BsLightbulb, BsLinkedin, BsLightbulbOffFill, BsFillFileEarmarkTextFill, BsFillMoonStarsFill } from 'react-icons/bs'

export default function Navbar({ handleThemeSwitch, theme }) {
  return (
    <div className="align-center mb-3.5 flex items-center justify-between px-2 z-40">
      <p className="font-inter font-medium dark:text-[#f6eee8]">Vasil Dzhakov</p>
      <div className="flex fixed left-1/2 -translate-x-1/2 translate-y-2 mx-auto justify-center items-center hidden flex-col gap-5 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#fff9f4] p-1.5 shadow-sm hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-md dark:hover:from-[#e8f4fd] dark:hover:to-[#faede3] md:block ">
        <button className="mr-1.5 rounded-xl border border-[#d1cfcf] bg-[#d6e0e9] p-3 px-2.5 py-2 font-roboto font-bold text-gray-800 hover:bg-[#e5eaf1]">
          Home
        </button>
        <button className="mr-1.5 rounded-xl p-3 px-2.5 py-2 font-roboto text-gray-500 hover:bg-[#e5eaf1]">Projects</button>
        <button className="mr-1.5 rounded-xl  p-3 px-2.5 py-2 font-roboto text-gray-500 hover:bg-[#e5eaf1]">Experience</button>
        <button className="rounded-xl p-3 px-2.5 py-2 font-roboto text-gray-500  hover:bg-[#e5eaf1]">About</button>
      </div>
      <div className="flex gap-2.5 dark:text-[#e0eaf2]">
        <div className="flex"></div>
        <BsLinkedin className="cursor-pointer hover:fill-[#0069b9] dark:hover:fill-[#00adb5] rounded-md  dark:fill-[#f9f3ee]" fill="black" fontSize="1.9rem" />
        <BsGithub className="cursor-pointer hover:fill-[#0069b9] dark:hover:fill-[#00adb5] dark:fill-[#f9f3ee]" fill="black" fontSize="1.9rem" />
        <BsFillFileEarmarkTextFill className="cursor-pointer dark:fill-[#f9f3ee] hover:fill-[#0069b9] dark:hover:fill-[#00adb5]" fill="black" fontSize="1.9rem" />
        <span class = " w-[2.7px] rounded-sm dark:bg-[#f9f3ee]/90 bg-[#c4c3c2] "></span>
        <button type="button" onClick={handleThemeSwitch} className="cursor-pointer rounded-md bg-[#c4c3c2] px-[4px]  dark:bg-[#484b51]">
          {theme === 'dark' ? <BsLightbulb className=" hover:fill-[#0069b9] dark:hover:fill-[#ecda12]" fill="#f9f3ee" fontSize="1.6rem" /> : <BsLightbulbOffFill className='hover:fill-[#202124]/70' fill="#202124" fontSize="1.6rem" />}
        </button>
        {/* <span class = " w-[2.7px] rounded-sm dark:bg-[#f9f3ee]/90 bg-[#c4c3c2]"></span>
        <button type="button" onClick={handleThemeSwitch} className="cursor-pointer rounded-md bg-[#c4c3c2] px-[4px]  dark:bg-[#f9f3ee]">
          {theme === 'dark' ? <BsLightbulb fill="#252529" fontSize="1.5rem" /> : <BsLightbulbOffFill fill="#202124" fontSize="1.5rem" />}
        </button> */}
      </div>
    </div>
  )
}

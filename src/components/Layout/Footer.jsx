import React from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/./vite.svg'
import { BsGithub, BsLightbulb, BsLinkedin, BsLightbulbOffFill, BsFillFileEarmarkTextFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CVButton from './Navbar/CVButton'

export default function Footer() {
  return (
    <div className="mt-3.5 flex justify-between rounded-t-lg bg-[#f1f0ee] p-5 px-5 text-left text-gray-600 dark:bg-[#edeeef]">
      <div>
        <p className="text-xs text-gray-500">© Made by Vasil Dzhakov in 2023</p>

        <a href="mailto:vaskodzhakov@gmail.com" className="mt-2 text-xs text-gray-500 hover:text-indigo-500">
          vaskodzhakov@gmail.com
        </a>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-center text-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>

      <div className="flex gap-2 text-right dark:text-[#e0eaf2]">
        <a className="tooltip tooltip-bottom" data-tip="linkedin.com/in/vasil1001" target="_blank" href="https://www.linkedin.com/in/vasil1001/">
          <BsLinkedin className="tooltip cursor-pointer  rounded-md text-[1.8rem] hover:fill-[#0069b9]   dark:hover:fill-[#00adb5]" fill="black" />
        </a>
        <a className="tooltip tooltip-bottom" data-tip="github.com/Vasil1001" target="_blank" href="https://github.com/Vasil1001">
          <BsGithub className=" cursor-pointer text-[1.8rem]  hover:fill-[#0069b9]  dark:hover:fill-[#00adb5]" fill="black" data-tip="hello" />
        </a>
        <CVButton />
      </div>
    </div>
  )
}

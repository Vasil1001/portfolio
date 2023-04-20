import React, { useCallback, useEffect, useState } from 'react'
import galaxy from '../assets/galaxy.png'
import galaxy_small_planets from '../assets/galaxy-small-planets.png'
import blue_planet_cropped_flipped from '../assets/blue_planet_cropped_flipped.png'
import purple_rock_kb from '../assets/ai/purple-rock-kb.webp'

export default function HeroSection() {
  //BLUEISH GRAY CARDS e2e8f0 dark mode | light mode eaeff4  f6f6f6 LIGHT GRAY CARDS e6edf6 ecf0f4 | f1f1f1 or f0f2f4 |   e8edf4
  // dark: dcdedf or lighter e2e8f0
  //latest ac64e3 PURPLER 10b981 VASILIS TITLE DARK EMERALD - 00adb5
  // 20294c DARK BLUE FOR NAME ON LIGHT

  const [currentIndex, setCurrentIndex] = useState(0)
  const names = ['Vasilis', 'Βασίλης', 'Vasilis']

  // https://stackoverflow.com/questions/64916779/change-text-at-every-time-interval-react

  return (
    <div className="z-0 mb-3.5 w-full items-center justify-center ">
      <div className="flex h-[calc(100vh-200px)]  rounded-xl">
        <div className="align-center z-20 flex flex-col justify-center px-6 text-center md:relative  xl:left-0">
          <h1 className="mb-1 animate__animated animate__lightSpeedInLeft max-w-full text-left font-noto text-6xl font-semibold text-[#202124] dark:text-[#16c4cd] md:mb-3 md:text-8xl">
            Hi, I'm
            <b className="bg-[#202124] from-[#16c4cd] to-blue-500  bg-clip-text p-3 text-transparent underline dark:bg-gradient-to-r">Vasilis</b>
          </h1>
          <p className="mt-4 max-w-xl animate__animated animate__flipInX text-left font-inter text-lg text-[#515357] dark:text-[#cec7c2] md:mt-0">
            I am a Software Developer focusing on building frontend and fullstack applications with React, Tailwind, NodeJS & more!
          </p>
          {/* <a
            href="#"
            className="mt-3 inline-block max-w-full rounded-md border border-gray-200 bg-gradient-to-r from-[#ecf6ff] to-[#fdf5ef] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-md md:max-w-xs "
          >
            See Projects
          </a> */}
        </div>

        <div className="wrap animate__animated animate__fadeInTopRight  invisible right-2 top-28 z-10 mx-auto flex max-w-[400px] flex-col justify-center opacity-75 md:max-w-[400px] md:opacity-70 lg:visible lg:max-w-[470px] lg:opacity-100 xl:bottom-32 xl:right-0 xl:max-w-[540px] 2xl:top-20 2xl:max-w-[580px] 2.5xl:max-w-[700px] 3xl:top-0  3xl:max-w-[750px]">
          {/* <img src={galaxy_small_planets} alt="galaxy" className="w-42 h-48" /> */}
          
          <img src={blue_planet_cropped_flipped} alt="blue_planet" className="" />
        </div>
      </div>
{/* 
      <div className="animate__animated animate__flipInX animate__slower align-center flex flex-col items-center  justify-center rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-6 text-center dark:bg-[#edeeef]">
        <h1 className="text-center  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">About me</h1>
        <p className="text-md max-w-lg text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-xl"></p>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 gap-3.5">
        <div className="align-center col-span-1 row-span-1 mt-3.5 flex flex-col items-center justify-center rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-6 text-center dark:bg-[#edeeef]">
          <h1 className="mb-1 text-center  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Tech Stack</h1>
        </div>

        <div className="align-center col-span-2 mt-3.5 flex flex-col items-center  justify-center rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-6 text-center dark:bg-[#edeeef]">
          <h1 className="mb-1 text-center  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
            Currently Learning
          </h1>
          <p className="text-md max-w-lg text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-xl"></p>
          <div className="z-10 col-span-1 flex flex-row flex-wrap justify-end">
            <div className="mr-2 mt-2 rounded-sm bg-[#e2e8f0] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">React</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Tailwind</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">JavaScript</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">NodeJS</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Java</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#EEEEEE] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Spring Boot</div>
          </div>
        </div>

        <div className="align-center card col-span-1 row-span-1  mt-3.5 flex flex-col items-center  justify-center rounded-2xl border-2 border-[#e3e4e4] bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#1d0018]">
          <div className="card2 w-full flex-1  flex-wrap overflow-hidden rounded-xl">
            <img src={purple_rock_kb} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

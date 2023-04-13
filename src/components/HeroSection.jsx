import React from 'react'
import galaxy from '../assets/galaxy.png'
import galaxy_small_planets from '../assets/galaxy-small-planets.png'
import blue_planet_cropped_flipped from '../assets/blue_planet_cropped_flipped.png'

export default function HeroSection() {
  //BLUEISH GRAY CARDS e2e8f0 dark mode | light mode eaeff4  f6f6f6 LIGHT GRAY CARDS e6edf6 ecf0f4 | f1f1f1 or f0f2f4 |   e8edf4
  // dark: dcdedf or lighter e2e8f0
  //latest ac64e3 PURPLER 10b981 VASILIS TITLE DARK EMERALD - 00adb5
  return (
    <div className="z-0 mb-3.5 w-full items-center justify-center">
      <div className="relative flex flex-wrap rounded-xl">
        <div className="align-center z-10 flex h-[calc(100vh-300px)] flex-col flex-wrap justify-center overflow-auto  px-6 text-center md:relative  xl:left-0">
          <h1 className="place-center mx-auto mb-1 text-center font-noto text-5xl font-semibold text-red-200 dark:text-[#16c4cd] md:mb-3 md:text-5xl md:text-[#202124]">
            Hi, I'm Vasilis <b className="p-3 underline ">(Βασίλης)</b>
          </h1>
          <p className="mt-4 max-w-lg text-justify font-roboto text-xl text-gray-600 dark:text-[#e8e0da] md:mt-0 md:text-xl">
            I am a Software Engineer who enjoys building frontend and fullstack software and web applications mainly with{' '}
            <b className="text-[#202124] dark:text-[#17c2d9]">ReactJS</b>, <b className="text-[#202124] dark:text-[#35b3eb]">TailwindCSS</b>,{' '}
            <b className="text-[#202124] dark:text-[#80bc02]">NodeJS</b> & more!
          </p>
          <a
            href="#"
            className="mt-3 inline-block max-w-full rounded-md border border-gray-200 bg-gradient-to-r from-[#ecf6ff] to-[#fdf5ef] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-md md:max-w-xs "
          >
            See Projects
          </a>
        </div>

        <div className="invisible absolute  right-2 top-2 z-0 mx-auto flex h-[calc(100vh-300px)] max-w-[400px] flex-col justify-center  opacity-75 md:visible md:max-w-[400px] md:opacity-70 lg:opacity-100 lg:max-w-[470px] xl:bottom-32 xl:right-0 xl:max-w-[540px] 2xl:max-w-[580px] 2.5xl:max-w-[700px]  3xl:max-w-[850px]">
          {/* <img src={galaxy_small_planets} alt="galaxy" className="w-42 h-48" /> */}
          <img src={blue_planet_cropped_flipped} alt="blue_planet" className="" />
        </div>
      </div>

      <div className="mt-3.5 rounded-2xl border border-[#e3e4e4] bg-[#f0f1f2] p-6 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">A little about me</h1>
        <p className="text-md max-w-lg text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-xl">
          I grew up in Northern Greece, a small town near the sea.
        </p>

        <div className="z-10 col-span-1 flex flex-row flex-wrap justify-end">
          <div className="mr-2 mt-2 rounded-sm bg-[#e2e8f0] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">React</div>
          <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Tailwind</div>
          <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">JavaScript</div>
          <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">NodeJS</div>
          <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Java</div>
          <div className="mr-2 mt-2 rounded-sm bg-[#EEEEEE] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Spring Boot</div>
        </div>
        <img src={galaxy} alt="galaxy" className="w-40" />
      </div>

      <div className="grid grid-cols-4 space-x-3.5">
        <div className="col-span-2 row-span-6 mt-3.5 rounded-2xl border border-[#d8d9da] bg-[#f1f1f5] p-7 text-center dark:border-[#434345] dark:bg-[#383b41] md:col-span-2">
          <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831] dark:text-white md:mb-3 md:text-4xl">Nutrition Project</h1>
          <p className="text-md md:text-md max-w-md text-left font-roboto text-gray-500 dark:text-gray-200 md:text-lg">
            This is a project I created to help people find the best foods in the world. I used ReactJS and Vanilla CSS!
          </p>

          <a
            href="#"
            className="mt-3 inline-block rounded-md border border-gray-200 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-xl"
          >
            See GitHub
          </a>
          <a
            href="#"
            className="mt-3 inline-block rounded-md border border-gray-200 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-xl"
          >
            See Project
          </a>
        </div>

        <div className="col-span-2 mt-3.5 rounded-2xl border border-[#d8d9da] bg-[#f1f1f5] p-7 text-center lg:col-span-2">
          <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831] md:mb-3 md:text-4xl">NodeJS Project</h1>
          <p className="text-md max-w-md text-left font-inter text-gray-500 md:text-lg md:text-xl">NodeJS and more on personal projects!</p>
        </div>

        <div className="col-span-2 mt-3.5 rounded-2xl border border-[#d8d9da] bg-[#ebf0f8] p-7 text-center lg:col-span-1">
          <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831] md:mb-3 md:text-4xl">SwiftUI</h1>
          <p className="text-md max-w-md text-left font-inter text-gray-500 md:text-lg md:text-xl">
            I am a Computer Science graduate working with React, Tailwind, NodeJS and more on personal projects!
          </p>
          <a
            href="#"
            className="mt-3 inline-block rounded-md border border-gray-200 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-xl"
          >
            See Projects
          </a>
        </div>

        <div className="col-span-2 mt-3.5 rounded-2xl border border-[#d8d9da] bg-[#ebf0f8] p-7 text-center lg:col-span-1">
          <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831] md:mb-3 md:text-4xl">UIKit</h1>
          <p className="text-md max-w-md text-left font-inter text-gray-500 md:text-lg md:text-xl">NodeJS and more on personal projects!</p>
          <a
            href="#"
            className="mt-3 inline-block rounded-md border border-gray-200 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-xl"
          >
            See Projects
          </a>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import purple_rock_kb from '../assets/ai/purple-rock-kb.webp'
import house_stars from '../assets/ai/house-stars.webp'
import me from '../assets/ai/me1.jpg'
import SendEmailButton from './SendEmailButton'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function AboutMe() {
  return (
    <div className=" ">
      <div className="flex grid grid-cols-4 flex-wrap gap-3.5 px-3.5">
        <div className="col-span-4 row-span-2  rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef] lg:col-span-2">
          <div className="">
            <div className="flex justify-between">
              <h1 className="mb-1 text-left font-inter text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Personal Note
              </h1>

              <HiOutlineExternalLink size={'1.4rem'} />
            </div>
            <hr className="my-3" />
            <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
              I am an developer with a passion for designing and developing useful and visually appealing software.
              <br /> <br />
              Software Development is my passion, and I am always looking for new ways to improve my skills, make my designs cleaner and learn new
              technologies.
              <br /> <br />
              Developing Web Applications and finding new ways to make my designs cleaner, more interesting and responsive keeps me motivated to work
              on my side proejcts every day.
              <br /> <br />
              Learning React and staying up to date with web technologies has been highly enjoyable for me, made me want to explore even more and
              motivated me keep learning after graduating from university.
            </p>
          </div>
        </div>
        <div className="align-center col-span-2  flex flex-col items-center justify-center  rounded-2xl border-2 border-[#e3e4e4] bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#edeeef] 2xl:col-span-2 3xl:col-span-1">
          <div className=" flex-wrap overflow-hidden rounded-xl">
            <img src={me} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>

        <div className="col-span-2 rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef] lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Skills</h1>
          <div className="col-span-1">
            <div className="z-10 col-span-1 flex flex-1 flex-row flex-wrap justify-end">
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">React</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Tailwind</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">JavaScript</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">NodeJS</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Java</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Spring Boot</div>
            </div>
          </div>

          {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
        </div>

        <div className="col-span-full row-span-1 flex flex-col justify-between rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef] sm:col-span-2 lg:col-span-2 3xl:col-span-1">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Contact</h1>
          <div class="mb-6">
            <label for="email" class="mb-2 block text-left text-sm font-medium text-gray-500 dark:text-gray-600">
              My email
            </label>
            <input
              type="email"
              id="email"
              class="block w-full rounded-lg border border-gray-300 bg-[#f2f1f1] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="vaskodzhakov@gmail.com"
              required
              disabled
            />
          </div>
          <div class="mb-6">
            <label for="email" class="mb-2 block text-left text-sm font-medium text-gray-500 dark:text-gray-600 ">
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="block w-full rounded-lg border border-gray-300 bg-[#ffffff] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-[#f0f2f4] dark:text-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col items-end">
            <SendEmailButton />
          </div>
        </div>

        <div className="cardgreen align-center col-span-full row-span-1 flex flex-col items-center justify-center rounded-2xl border-2 border-[#e3e4e4]  bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#1d0018] sm:col-span-2 lg:col-span-2 2xl:col-span-2 3xl:col-span-1 3xl:col-span-1 3xl:col-span-1">
          <div className="card2 w-full flex-1  flex-wrap overflow-hidden rounded-xl">
            <img src={house_stars} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import purple_rock_kb from '../assets/ai/purple-rock-kb.webp'
import house_stars from '../assets/ai/house-stars.webp'
import me from '../assets/ai/me1.jpg'
import SendEmailButton from './SendEmailButton'
import { HiOutlineExternalLink } from 'react-icons/hi'
import './SendEmailButton.css'
import { BsGithub, BsLightbulb, BsLinkedin, BsLightbulbOffFill, BsFillFileEarmarkTextFill, BsFillMoonStarsFill } from 'react-icons/bs'

export default function AboutMe() {
  return (
    <div className=" ">
      <div className="cont flex grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
        <div className="car col-span-4 row-span-2  rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef] lg:col-span-2">
          <div className="">
            <div className="flex justify-between">
              <h1 className="mb-1 text-left font-inter text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Personal Note
              </h1>

              <HiOutlineExternalLink className="car" size={'1.4rem'} />
            </div>
            <hr className="my-3" />
            <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
              I am a Software Developer who grew up in Greece, with a passion for building useful and visually appealing applications.
              <br /> <br />
              I am always looking for new ways to improve my skills and make my designs cleaner
              <br /> <br />
              Learning interesting new technologies has kept me motivated and allowed me to plan and work on projects that I enjoy building, which
              helps me learn quicker and more efficiently.
              <br /> <br />
              Learning React and staying up to date with web technologies has been highly enjoyable also, it made me want to explore even more and
              motivated me to keep learning after graduating from university by building new projects.
            </p>
          </div>
        </div>
        <div className="car align-center col-span-2  flex flex-col items-center justify-center  rounded-2xl border-2 border-[#e3e4e4] bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717]  dark:hover:bg-[#edeeef] 2xl:col-span-2 3xl:col-span-1">
          <div className=" flex-wrap overflow-hidden rounded-xl">
            <img src={me} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>

        <div className="car col-span-2 rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef] lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
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

        <div className="col-span-full row-span-1 flex flex-col rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-6 text-center dark:bg-[#edeeef] sm:col-span-2 lg:col-span-2 3xl:col-span-1">
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Contact</h1>
              <p className="mt-1 text-left text-sm text-gray-500 dark:text-gray-600">vaskodzhakov@gmail.com</p>
            </div>
            <a className="tooltip tooltip-bottom" data-tip="linkedin.com/in/vasil1001" target="_blank" href="https://www.linkedin.com/in/vasil1001/">
              <BsLinkedin
                className="tooltip cursor-pointer  rounded-md text-[2rem] hover:fill-[#0069b9] dark:fill-[#f9f3ee]  dark:hover:fill-[#00adb5]"
                fill="black"
              />
            </a>
          </div>
          <hr className="my-2" />
          <form className="flex flex-col justify-between" action="https://formsubmit.co/e95295e4949eef97bea0a442688ff00c" method="POST">
            <input
              type="email"
              name="email"
              className="block w-full rounded-lg border border-gray-300 bg-[#f2f1f1] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Type your email"
              required
            />
            <textarea
              type="text"
              name="message"
              className="mt-3.5 block w-full rounded-lg border border-gray-300 bg-[#f2f1f1] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Write your message"
              required
              rows="4"
              cols="50"
            />
            {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
            <button className="mt-5 flex flex-col items-end">
              <SendEmailButton />
            </button>
          </form>
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

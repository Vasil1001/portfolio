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
      <div className="cont grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
        <div className="car mainCard col-span-4 row-span-2 lg:col-span-2">
          <div className="">
            <div className="flex justify-between">
              <h1 className="mb-1 text-left font-inter text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Personal Note
              </h1>

              <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
            </div>
            <hr className="my-3" />
            <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
              I am a Software Developer who grew up in Greece, with a passion for building clean and visually appealing applications.
              <br /> <br />
              I enjoy working with frontend and full-stack technologies. The most notable being React, Tailwind and Node.js with Express.js. 
              <br /> <br />
              Learning interesting new technologies has motivated me to plan and work on projects that I have fun building, resulting in better learning outcomes.
              <br /> <br />
              Staying up to date with web technologies in particular and working with React has been highly enjoyable and I have
               multiple planned projects and desire to build interesting software.
            </p>
          </div>
        </div>
        <div className="car align-center col-span-4 flex  flex-col items-center justify-center rounded-2xl  border-2 border-[#ebebeb] bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#edeeef]  lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
          <div className=" flex-wrap overflow-hidden rounded-xl">
            <img src={me} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>

        <div className="mainCard car col-span-4 grid items-center lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
          <div className="place-center z-10 flex flex-grow flex-wrap gap-2 overflow-hidden ">
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              React
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              Tailwind
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              JavaScript
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              HTML
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              CSS
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              Node.js
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              Express.js
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              MySQL
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              MongoDB
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              Firebase
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              Java
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              Spring Boot
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              Git
            </div>
            <div className=" lg:text-md rounded-lg bg-[#393e46] px-2.5 py-1.5 font-inter text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2.5">
              Postman
            </div>
          </div>

          {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
        </div>

        <div className="mainCard col-span-4 row-span-1 flex flex-col p-6 text-center md:col-span-2 3xl:col-span-1">
          <div className="flex items-start justify-between ">
            <div className="flex flex-col">
              <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Contact</h1>
              <p className="mt-1 text-left text-sm text-gray-500 dark:text-gray-600">vaskodzhakov@gmail.com</p>
            </div>
            <a className="tooltip tooltip-bottom " data-tip="linkedin.com/in/vasil1001" target="_blank" href="https://www.linkedin.com/in/vasil1001/">
              <BsLinkedin className="tooltip cursor-pointer rounded-md text-[2.2rem] hover:fill-[#0069b9]" fill="black" />
            </a>
          </div>
          <hr className="my-2" />

          {/* https://formsubmit.co/ */}
          <form className="flex flex-col justify-between" action="https://formsubmit.co/e95295e4949eef97bea0a442688ff00c" method="POST">
            <input
              type="email"
              name="email"
              className="block w-full rounded-lg border border-gray-300 bg-[#fefefe] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Type your email"
              required
            />
            <textarea
              type="text"
              name="message"
              className="mt-3.5  block w-full rounded-lg border border-gray-300 bg-[#fefefe] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Write your message"
              required
              rows="3"
              cols="10"
            />
            {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
            <button className="mt-3.5 flex flex-col items-end">
              <SendEmailButton />
            </button>
          </form>
        </div>

        <div className="cardgreen align-center col-span-4 row-span-1 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee]  p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#1d0018] md:col-span-2 2xl:col-span-2 3xl:col-span-1">
          <div className="card2 w-full flex-1  flex-wrap overflow-hidden rounded-xl">
            <img src={house_stars} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

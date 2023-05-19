import React from 'react'
import house_stars from '../../assets/ai/house-stars.webp'
import me from '../../assets/ai/me1.jpg'
import SendEmailButton from '../SendEmailButton/SendEmailButton'
import { HiOutlineExternalLink } from 'react-icons/hi'
import '../SendEmailButton/SendEmailButton.css'
import { BsLinkedin } from 'react-icons/bs'
import Skills from './Skills'

export default function AboutMe() {
  return (
    <>
      <div className="cont grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
        <div className="car mainCard col-span-4 row-span-2 lg:col-span-2">
            <div className="flex justify-between">

              <h1 className=" pt-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Personal Note
              </h1>

              <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
            </div>
            <hr className="my-3" />
            <p className="text-justify font-supreme text-lg text-gray-600 dark:text-[#383b41] md:text-[22px]">
              I am a Software Developer who grew up in Greece, with a passion for building clean designs and visually appealing applications.
              <br /> <br />
              Frontend and full-stack technologies have been main focus for projects lately. Some that I'm currently developing with include: React,
              Tailwind, and Node.js with Express.js.
              <br /> <br />
              Learning interesting new technologies has motivated me to plan and work on projects that I have fun building, resulting in better
              learning outcomes.
              <br /> <br />
              Staying up to date with web technologies in particular and working with React has been highly enjoyable and I have multiple planned
              projects and desire to build interesting software.
            </p>
          </div>
        <div className="car align-center col-span-4 flex  flex-col items-center justify-center rounded-2xl  border-2 border-[#ebebeb] bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#edeeef]  lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
          <div className=" flex-wrap overflow-hidden rounded-xl">
            <img src={me} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>

        <Skills />

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
              className="mt-3.5 grow block xl:min-h-[70%] w-full rounded-lg border border-gray-300 bg-[#fefefe] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Write your message"
              required
              rows="4"
              cols="11"
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
    </>
  )
}

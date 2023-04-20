import React from 'react'
import Hills from '../assets/ai/land-hills.webp'
import floatnig_land from '../assets/ai/floatnig-land.jpeg'

export default function About() {
  return (
    <div className="mb-5 grid  grid-cols-4 gap-4">
      <div className="col-span-2 mb-3.5 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">A little about me</h1>
        <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-xl">
          I was born in Bulgaria, but I grew up in Northern Greece, in a small town near the sea. I played football for my local team for 5 years, and
          enjoy music and TV Series a ton.
          <br /> <br />
          I moved to London in 2017 and started working part time jobs right away along with my studies.
          <br /> <br />
          I am passionate about technology and I am always looking for new ways to improve my skills.
          <br /> <br />
          I enjoy spending time improving my front-end design skills and learning about new technologies.
          <br /> <br />
          In the last year, I learnt React to improve the look of my backend projects, and ended up really enjoying it and explored many technologies
          around it that I had a blast learning and using such as Tailwind, NodeJS & Express. New and interesting technologies sparked an interest in
          me and made me want to explore even more, such as Supabase, Redux, Zustand, MongoDB.
          <br /> <br />
          I am currently looking for a full-time position as a software engineer, where I can continue to learn and grow as a developer.
          <br /> <br />
          I learnt Java and Spring Boot at university, and afterwards, I made projects that helped me grow as a developer with React, Node.js,
          Express.js, MongoDB, Firebase. I am looking forward to learning more.
          <br /> <br />
        </p>
      </div>

      <div className="col-span-1 flex flex-col gap-3.5">
        <div className="rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Skills</h1>
          <div className="">
            <div className="z-10 flex flex-row flex-wrap justify-end">
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">React</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Tailwind</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">JavaScript</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">NodeJS</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Java</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Spring Boot</div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="w-full flex-1 flex-wrap overflow-hidden rounded-xl">
            <img src={Hills} alt="asd" className="h-full w-full overflow-hidden" />
          </div>
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-3.5">
        <div className="rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Explore</h1>
          <div className=""></div>
        </div>

        <div className="col-span-1">
          <div className="w-full flex-1 flex-wrap overflow-hidden rounded-xl">
            <img src={floatnig_land} alt="asd" className="h-full w-full overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}

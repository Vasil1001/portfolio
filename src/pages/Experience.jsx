import React from 'react'
import Timeline from '../components/Timeline'
import Time from '../components/Time'

export default function Experience() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3.5">
      <div className="col-span-2 row-span-3 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <div className="">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
            A little about me
          </h1>

          <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-xl">
            I grew up in Northern Greece, a small town near the sea. I am a highly motivated and curious software engineer living in London, UK.
            <br /> <br />
            I am passionate about technology and I am always looking for new ways to improve my skills.
          </p>
           <Timeline />
        </div>
        {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
      </div>

      <div className="col-span-1 row-span-1  rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Skills</h1>
        <div className="col-span-1">
        <Time></Time>
        </div>

        {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
      </div>

      <div className="col-span-1 row-span-1 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Interests</h1>
        <div className="col-span-1">
          
        </div>



        {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
      </div>
      

      <div className="col-span-1 row-span-1 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Interests</h1>
        <div className="col-span-1">
          <div className="z-10 col-span-1 flex flex-row flex-wrap justify-end">
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
      <div className="col-span-1 row-span-1 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Interests</h1>
        <div className="col-span-1">
          <div className="z-10 col-span-1 flex flex-row flex-wrap justify-end">
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
      <div className="col-span-1 row-span-1 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Interests</h1>
        <div className="col-span-1">
          <div className="z-10 col-span-1 flex flex-row flex-wrap justify-end">
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
    </div>
  )
}

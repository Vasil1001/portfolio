import React from 'react'
import Timeline from '../components/Timeline'
import Time from '../components/Time'

export default function Experience() {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-3.5 pt-5">
      <div className="col-span-4 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center shadow-xl dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Experience Timeline</h1>
        <Timeline />
        {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
      </div>

      <div className="col-span-2 row-span-1  rounded-2xl  border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center shadow-xl dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Skills</h1>
        <div className="col-span-1">
          <Time></Time>
        </div>

        {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
      </div>

      <div className="col-span-1 row-span-1 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Interests</h1>
        <div className="col-span-1"></div>

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

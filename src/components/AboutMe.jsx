import React from 'react'

export default function AboutMe() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3.5">
      <div className="col-span-2 row-span-2 mb-3.5 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <div className="">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
            A little about me
          </h1>
          <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-xl">
            I grew up in Northern Greece, a small town near the sea. I am a highly motivated and curious software engineer living in London, UK.
            <br /> <br />
            I am passionate about technology and I am always looking for new ways to improve my skills.
            <br /> <br />
            I enjoy spending time improving my front-end design skills and learning about new technologies.
            <br /> <br />
            In the last year, I learnt React to improve the look of my backend projects, and ended up really enjoying it and explored many
            technologies around it that I had a blast learning and using such as Tailwind, NodeJS & Express. New and interesting technologies sparked
            an interest in me and made me want to explore even more, such as Supabase, Redux, (Zustand), MongoDB.
            <br /> <br />
            I am currently looking for a full-time position as a software engineer, where I can continue to learn and grow as a developer.
            <br /> <br />
            I learnt Java and Spring Boot at university, and afterwards, I made projects that helped me grow as a developer with React, Node.js,
            Express.js, MongoDB, Firebase. I am looking forward to learning more.
            <br /> <br />
            
          </p>
        </div>
        {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
      </div>

      <div className="col-span-1 row-span-1 mb-3.5 rounded-2xl border border-[#e3e4e4] bg-[#f1f1f5] p-7 text-center dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Skills</h1>
        <div className="col-span-1">
          <div className="z-10 col-span-1 flex flex-row flex-wrap justify-end">
            <div className="mr-2 mt-2 rounded-sm bg-[#e2e8f0] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">React</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Tailwind</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">JavaScript</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">NodeJS</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Java</div>
            <div className="mr-2 mt-2 rounded-sm bg-[#EEEEEE] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Spring Boot</div>
          </div>
        </div>

        {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
      </div>
    </div>
  )
}

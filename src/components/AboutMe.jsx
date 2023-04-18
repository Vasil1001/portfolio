import React from 'react'

export default function AboutMe() {
  return (
    <div className="h-[calc(100vh-60vh)] items-center justify-center justify-center align-center items-center my-auto place-center ">
      <div className="grid grid-cols-3 grid-rows-2 gap-3.5">
        <div className="col-span-2 row-span-2 rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef]">
          <div className="">
            <h1 className="mb-1 text-left font-inter text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
              Personal Note
              <hr className="mt-3"/>
            </h1>
            <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
              I am an developer with a passion for designing and developing useful and visually appealing software.
              <br /> <br />
              Software Development is my passion, and I am always looking for new ways to improve my skills, make my designs cleaner and learn new technologies.
              <br /> <br />
              Developing Web Applications and finding new ways to make my designs cleaner, more interesting and responsive keeps me motivated to work on my side proejcts every day.
              <br /> <br />
              Learning React and staying up to date with web technologies has been highly enjoyable for me, made me want to explore even more 
              and motivated me keep learning after graduating 
              from universityto improve the look of my backend projects, and ended up really enjoying it and explored many
            
            </p>
          </div>
          {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
        </div>

        <div className="col-span-1 row-span-1  rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef]">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Skills</h1>
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

        <div className="col-span-1 row-span-1 rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef]">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Interests</h1>
          <div className="col-span-1">
            <div className="z-10 col-span-1 flex flex-row flex-wrap justify-end">
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Football</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Music</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">JavaScript</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">NodeJS</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Java</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#393e46] px-4 py-1 font-inter font-semibold text-gray-200 hover:bg-[#224871]">Spring Boot</div>
            </div>
          </div>

          {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import Timeline from '../components/Timeline'

export default function Experience() {
  return (
    <div className="mb-0 ">
      <div className="col-span-4 row-span-2  mb-3.5 rounded-xl border border-[#e5e4e4] bg-[#f5f4f3] p-6 lg:col-span-4">
        <div className="flex justify-between">
          <h1 className="px-2  text-left font-supreme text-3xl font-semibold text-[#2f3136] dark:text-[#383b41] md:text-4xl">Work Experience</h1>
        </div>
      </div>
      <div className="mb-3.5 flex flex-col items-center">
        <div className="grid w-full grid-cols-1 justify-center gap-3.5 px-3.5 sm:grid-cols-1 sm:px-0 md:grid-cols-2 lg:grid-cols-3">
          <a className="relative flex h-[385px] flex-col justify-end rounded-2xl border-8 border-[#f1f0ee] bg-[#f1f0ee] text-[#242527] transition-all delay-150  duration-300 ease-in-out hover:font-bold hover:text-[#ffffff] hover:transition-all hover:duration-300 dark:border-[#edeeef] dark:bg-[#edeeef]">
            <div className="absolute inset-0 h-[12.5rem] w-full  overflow-hidden rounded-xl  bg-[#404045] transition-all delay-150 duration-300 ease-in-out hover:h-[369px] hover:bg-[#252529] hover:transition-all hover:duration-300">
              <img
                src="https://media.graphassets.com/E6Mynw5iSWmqwk09Q1o4"
                className="h-[12.5rem] w-full object-cover transition-all delay-150 duration-300 ease-in-out hover:h-[369px] hover:transition-all hover:duration-300"
                alt="123"
              />
            </div>
            <div className="absolute  bottom-2 z-0 px-1 hover:text-[#242527] ">
              <div className=" flex w-full px-2 text-2xl">Web Developer Intern</div>
              <div className="text-lg flex flex-wrap overflow-hidden rounded-full px-2 text-left font-satoshi font-normal drop-shadow-md hover:text-[#0b0b0b] 2xl:text-xl">
                Internship in Seville, Spain
              </div>
            </div>
          </a>
          <a className="relative flex h-[385px] flex-col justify-end rounded-2xl border-8 border-[#f1f0ee] bg-[#f1f0ee] text-[#242527] transition-all delay-150  duration-300 ease-in-out hover:font-bold hover:text-[#ffffff] hover:transition-all hover:duration-300 dark:border-[#edeeef] dark:bg-[#edeeef]">
            <div className="absolute inset-0 h-[12.5rem] w-full  overflow-hidden rounded-xl  bg-[#404045] transition-all delay-150 duration-300 ease-in-out hover:h-[369px] hover:bg-[#252529] hover:transition-all hover:duration-300">
              <img
                src="https://possector.com/wordpress/wp-content/uploads/2013/07/waiter-good-service1.jpg"
                className="h-[12.5rem] w-full object-cover transition-all delay-150 duration-300 ease-in-out hover:h-[369px] hover:transition-all hover:duration-300"
                alt="123"
              />
            </div>
            <div className="hover:text-[#242527] ">
              <div className="absolute bottom-4 z-0 mb-1 flex w-full p-2 text-2xl  ">Waiter</div>
              <div className="text-lg flex flex-wrap overflow-hidden rounded-full px-2 text-left font-satoshi font-normal drop-shadow-md hover:text-[#0b0b0b] 2xl:text-xl">
                ASAP Catering London
              </div>
            </div>
          </a>
          <a className="relative flex h-[385px] flex-col justify-end rounded-2xl border-8 border-[#f1f0ee] bg-[#f1f0ee] text-[#242527] transition-all delay-150  duration-300 ease-in-out hover:font-bold hover:text-[#ffffff] hover:transition-all hover:duration-300 dark:border-[#edeeef] dark:bg-[#edeeef]">
            <div className="absolute inset-0 h-[12.5rem] w-full  overflow-hidden rounded-xl  bg-[#404045] transition-all delay-150 duration-300 ease-in-out hover:h-[369px] hover:bg-[#252529] hover:transition-all hover:duration-300">
              <img
                src="https://www.mhwilliams.com/wp-content/uploads/2020/01/11.jpeg"
                className="h-[12.5rem] w-full object-cover transition-all delay-150 duration-300 ease-in-out hover:h-[369px] hover:transition-all hover:duration-300"
                alt="123"
              />
            </div>
            <div className="hover:text-[#242527] ">
              <div className="absolute bottom-4 z-0 mb-1 flex w-full p-2 text-2xl  ">Construction Worker</div>
              <div className="text-lg flex flex-wrap overflow-hidden rounded-full px-2 text-left font-satoshi font-normal drop-shadow-md hover:text-[#0b0b0b] 2xl:text-xl">
                RIR Construction Central London
              </div>
            </div>
          </a>
          <a className="relative lg:hidden flex h-[385px] flex-col justify-end rounded-2xl border-8 border-[#f1f0ee] bg-[#f1f0ee] text-[#242527] transition-all delay-150  duration-300 ease-in-out hover:font-bold hover:text-[#ffffff] hover:transition-all hover:duration-300 dark:border-[#edeeef] dark:bg-[#edeeef]">
            <div className="absolute inset-0 h-[12.5rem] w-full  overflow-hidden rounded-xl  bg-[#404045] transition-all delay-150 duration-300 ease-in-out hover:h-[369px] hover:bg-[#252529] hover:transition-all hover:duration-300">
              <img
                src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?cs=srgb&dl=pexels-pixabay-356079.jpg&fm=jpg"
                className="h-[12.5rem] w-full object-cover transition-all delay-150 duration-300 ease-in-out hover:h-[369px] hover:transition-all hover:duration-300"
                alt="123"
              />
            </div>
            <div className="hover:text-[#242527] ">
              <div className="absolute bottom-4 z-0 mb-2 flex w-full p-2 text-2xl  ">What next...</div>
              <div className="flex overflow-hidden whitespace-nowrap rounded-full p-2 px-2.5 font-satoshi text-lg font-normal drop-shadow-md hover:text-[#0b0b0b]">
                Software Developer ?
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
        <div className="car col-span-4 rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] px-7 text-center shadow-md dark:bg-[#edeeef]">
          <h1 className="mt-5 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl ">Timeline</h1>
          {/* <Timeline /> */}

          <Timeline />
        </div>
      </div>
    </div>
  )
}

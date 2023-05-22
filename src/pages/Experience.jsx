import React from 'react'
import Timeline from '../components/Timeline'

export default function Experience() {
  return (
    <div className="mb-0 ">
      <div className="mb-3.5 flex flex-col items-center">
        <div className="grid w-full justify-center gap-3.5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <a className="relative flex h-[325px] flex-col justify-end rounded-3xl bg-gray-200 dark:bg-gray-800">
            <div className="absolute inset-0 h-[13rem] w-full overflow-hidden rounded-3xl bg-gray-500 transition delay-150 duration-300 ease-in-out hover:h-[325px]  hover:bg-indigo-500 hover:transition-all">
              Image
            </div>
            <div className="absolute bottom-4 z-0 flex w-full justify-center">Title</div>
            <div className="flex flex justify-center overflow-hidden whitespace-nowrap rounded-full drop-shadow-md">Desc</div>
          </a>
          <a className="relative flex h-[325px] flex-col justify-end rounded-3xl bg-gray-200 dark:bg-gray-800">
            <div className="absolute inset-0 h-[13rem] w-full overflow-hidden rounded-3xl bg-gray-500 transition delay-150 duration-300 ease-in-out hover:h-[325px]  hover:bg-indigo-500 hover:transition-all">
              Image
            </div>
            <div className="absolute bottom-4 z-0 flex w-full justify-center">Title</div>
            <div className="flex flex justify-center overflow-hidden whitespace-nowrap rounded-full drop-shadow-md">Desc</div>
          </a>

          <a className="relative flex h-[325px] flex-col justify-end rounded-3xl bg-gray-200 dark:bg-gray-800">
            <div className="absolute inset-0 h-[13rem] w-full overflow-hidden rounded-3xl bg-gray-500 transition delay-150 duration-300 hover:h-[325px] hover:bg-indigo-500  hover:transition-all hover:ease-in-out">
              Image
            </div>
            <div className="absolute bottom-4 z-0 flex w-full justify-center">Title</div>
            <div className="flex flex justify-center overflow-hidden whitespace-nowrap rounded-full drop-shadow-md">Desc</div>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
        <div className="car col-span-4 rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center shadow-md dark:bg-[#edeeef]">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl ">Experience Timeline</h1>
          {/* <Timeline /> */}

          <Timeline />
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function HeroSection() {
  //BLUEISH GRAY CARDS e2e8f0 dark mode | light mode eaeff4  f6f6f6 LIGHT GRAY CARDS e6edf6 ecf0f4 | eaeff4 f1f1f1 | cccdcf f0f8ff
  return (
    <div className="mb-3.5 w-full items-center justify-center">
      <div className="rounded-2xl border border-[#d8d9da] bg-[#e2e8f0] p-7 text-center">
        <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831] md:mb-3 md:text-4xl">Hi, I'm Vasilis (Βασίλης) </h1>
        <p className="text-md max-w-md text-left font-inter text-gray-500 md:text-lg md:text-xl">
          I am a Computer Science graduate working with React, Tailwind, NodeJS and more on personal projects!
        </p>
        <a
          href="#"
          className="mt-3 inline-block rounded-md border border-gray-200 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-xl"
        >
          See Projects
        </a>
      </div>

      <div className="grid grid-cols-4 grid-rows-4 space-x-3.5">
        <div className="col-span-2 md:col-span-2 mt-3.5 rounded-2xl border border-[#d8d9da] bg-[#e2e8f0] p-7 text-center">
          <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831] md:mb-3 md:text-4xl">Hi, I'm Vasilis (Βασίλης) </h1>
          <p className="text-md max-w-md text-left font-inter text-gray-500 md:text-lg md:text-xl">
            I am a Computer Science graduate working with React, Tailwind, NodeJS and more on personal projects!
          </p>
          <a
            href="#"
            className="mt-3 inline-block rounded-md border border-gray-200 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-xl"
          >
            See Projects
          </a>
        </div>

        <div className="col-span-2 lg:col-span-1  mt-3.5 rounded-2xl border border-[#d8d9da] bg-[#e2e8f0] p-7 text-center">
          <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831] md:mb-3 md:text-4xl">Hi, I'm Vasilis (Βασίλης) </h1>
          <p className="text-md max-w-md text-left font-inter text-gray-500 md:text-lg md:text-xl">
             NodeJS and more on personal projects!
          </p>
         
        </div>

        <div className="col-span-2 lg:col-span-1  mt-3.5 rounded-2xl border border-[#d8d9da] bg-[#e2e8f0] p-7 text-center">
          <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831] md:mb-3 md:text-4xl">Hi, I'm Vasilis (Βασίλης) </h1>
          <p className="text-md max-w-md text-left font-inter text-gray-500 md:text-lg md:text-xl">
            I am a Computer Science graduate working with React, Tailwind, NodeJS and more on personal projects!
          </p>
          <a
            href="#"
            className="mt-3 inline-block rounded-md border border-gray-200 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] px-6 py-2 font-inter text-base font-medium text-gray-700 shadow-md hover:border-gray-300 hover:from-[#e8f4ff] hover:to-[#fdf4ec] hover:shadow-xl"
          >
            See Projects
          </a>
        </div>
        
      </div>
    </div>
  )
}

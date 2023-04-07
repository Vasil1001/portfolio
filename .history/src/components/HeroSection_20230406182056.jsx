import React from 'react'

export default function HeroSection() {
  //e2e8f0 BLUEISH GRAY CARDS f6f6f6 LIGHT GRAY CARDS e6edf6 ecf0f4 eaeff4
  return (
    <div className="w-full items-center justify-center">
      <div className="rounded-2xl bg-[#ecf0f4] p-4 pt-8 text-center shadow-sm">
        <h1 className="mb-1 font-noto text-2xl font-semibold text-[#222831] md:mb-3 md:text-4xl">Hi, I'm Vasilis (Βασίλης) </h1>
        <p className="text-md mx-28 font-inter text-gray-500 md:text-lg">
          I am a Computer Science graduate working with React, Tailwind, NodeJS and more on personal projects!
        </p>

        <a href="#" className='inline-block px-8 py-'>See Projects</a>
        <div className="bg-[#393E46] p-4">s</div>
        <div className="bg-[#454545] p-4">s</div>
        <div className="bg-[#4C5454] p-4">s</div>
        <div className="bg-[#523F38] p-4">s</div>
        <div className="bg-[#1EA896] p-4">s</div>
        <br />
        <div className="grid grid-cols-2">
          {/* https://colorhunt.co/palette/222831393e4600adb5eeeeee */}
          <div className="grid-span-1 bg-[#222831] p-5">a</div>
          <div className="grid-span-1 bg-[#393E46] p-5">s</div>
          <div className="grid-span-1 bg-[#00ADB5] p-5">d</div>
          <div className="grid-span-1 bg-[#EEEEEE] p-5">f</div>
          <br />
          {/* https://colorhunt.co/palettes/space */}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-5 text-center">
        <div className="rounded-2xl bg-[#202124] p-8 py-40 text-center shadow-sm">
          <div className="grid-span-1 grid grid-cols-2 justify-between rounded-2xl bg-[#393E46] p-5">
            <div className="z-10 col-span-1 flex flex-row flex-wrap justify-start">
              <p className="text-left text-xl font-bold text-[#1EA896]">Hello this is Βασίλης</p>
              <div className="bg-[#EEEEEE] text-left">React</div>
              <div className="text-left text-[#EEEEEE]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
              </div>
            </div>
            <div className="flex flex-wrap justify-end p-8">
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">React</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Tailwind</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">JavaScript</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">NodeJS</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Java</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#EEEEEE] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Spring Boot</div>
            </div>
          </div>
        </div>

        <div className=" rounded-2xl bg-[#222831] p-8 py-40 text-center shadow-sm">
          <div className="grid-span-1 grid grid-cols-2 justify-between rounded-2xl bg-[#393E46] p-5">
            <p className="col-span-1 text-left text-xl font-bold text-[#00ADB5]">Hello this is Βασίλης</p>
            <div className="z-10 col-span-1 flex flex-row flex-wrap justify-end">
              <div className="mr-2 mt-2 rounded-sm bg-[#e2e8f0] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">React</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Tailwind</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">JavaScript</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">NodeJS</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#e5e7eb] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Java</div>
              <div className="mr-2 mt-2 rounded-sm bg-[#EEEEEE] px-4 py-1 font-inter font-semibold text-gray-700 hover:bg-[#f7f7f9]">Spring Boot</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

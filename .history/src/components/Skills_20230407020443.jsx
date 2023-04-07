import React from 'react'

export default function Skills() {
  //BLUEISH GRAY CARDS e2e8f0 dark mode | light mode eaeff4  f6f6f6 LIGHT GRAY CARDS e6edf6 ecf0f4 | eaeff4 f1f1f1 | cccdcf f0f8ff
  return (
    <div className="mt-3.5 grid grid-cols-2 gap-3.5 text-center">
        <div className="rounded-2xl bg-[#202124] text-center shadow-sm">
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
  )
}
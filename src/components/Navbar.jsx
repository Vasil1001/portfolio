import React from 'react'

export default function Navbar() {
  return (
    <div className="align-center mb-3.5 flex items-center justify-between px-2">
      <p className="font-medium font-inter dark:text-[#f6eee8]">Vasil Dzhakov</p>
      <div className="flex hidden flex-col gap-5 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#fff9f4] p-1.5 shadow-sm hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-md dark:hover:from-[#e8f4fd] dark:hover:to-[#faede3] md:block ">
        <button className="mr-1.5 rounded-xl border border-[#d1cfcf] bg-[#d6e0e9] p-3 px-2.5 py-2 font-roboto font-bold text-gray-800 hover:bg-[#e5eaf1]">
          Home
        </button>
        <button className="mr-1.5 rounded-xl p-3 px-2.5 py-2 font-roboto text-gray-500 hover:bg-[#e5eaf1]">Projects</button>
        <button className="mr-1.5 rounded-xl  p-3 px-2.5 py-2 font-roboto text-gray-500 hover:bg-[#e5eaf1]">Experience</button>
        <button className="rounded-xl p-3 px-2.5 py-2 font-roboto text-gray-500  hover:bg-[#e5eaf1]">About</button>
      </div>
      <p className="dark:text-[#e0eaf2]">LinkedIn, GitHub</p>
    </div>
  )
}

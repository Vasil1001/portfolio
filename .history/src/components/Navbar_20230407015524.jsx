import React from 'react'

export default function Navbar() {
  return (
    <div className="mb-3 flex items-end justify-between px-2 align-center">
      <p className="font-bold dark:text-[#e0eaf2]">Vasil Dzhakov</p>
      <div className="flex hidden gap-4 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f7f7f8] to-[#f7f7f8] p-1.5 shadow-md hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-lg md:block ">
        <button className="rounded-xl bg-[#d6e0e9] border border-[#c6c3c3] p-3 px-3 py-2 font-roboto font-bold text-gray-800 hover:bg-[#d9e5ef]">Home</button>
        <button className=" rounded-xl p-3 px-3 py-2 font-roboto text-gray-500 hover:bg-[#ecf0f4]">Projects</button>
        <button className=" rounded-xl p-3  px-3 py-2 font-roboto text-gray-500 hover:bg-[#ecf0f4]">Experience</button>
        <button className=" rounded-xl p-3 px-3 py-2 font-roboto text-gray-500  hover:bg-[#ecf0f4]">About</button>
      </div>
      <p className="dark:text-[#e0eaf2]">LinkedIn, GitHub</p>
    </div>
  )
}

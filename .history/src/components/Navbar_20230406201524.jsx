import React from 'react'

export default function Navbar() {
  return (
    <div className="hidden md:block mb-4 flex items-center justify-between px-2 align-baseline">
      <p className="font-bold">Vasil Dzhakov</p>
      <div className="flex gap-3 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] p-1.5 shadow-xl hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-xl ">
        <button className="rounded-xl bg-[#e0eaf2] p-3 px-3 py-2 font-roboto font-bold text-gray-800 hover:bg-[#d9e5ef]">Home</button>
        <button className=" rounded-xl p-3 px-3 py-2 font-roboto text-gray-500 hover:bg-[#ecf0f4]">Projects</button>
        <button className=" rounded-xl p-3  px-3 py-2 font-roboto text-gray-500 hover:bg-[#ecf0f4]">Experience</button>
        <button className=" rounded-xl p-3 px-3 py-2 font-roboto text-gray-500  hover:bg-[#ecf0f4]">About</button>
      </div>
      <p>LinkedIn, GitHub</p>
    </div>
  )
}

import React from 'react'

export default function Navbar() {
  return (
    <div className="mb-4 flex items-center justify-between px-2 align-baseline">
      <p className="font-bold">Vasil Dzhakov</p>
      <div className="flex gap-2 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] p-1 shadow-xl hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-xl ">
        <button className="bg-[#d3e1ec] rounded-l-xl text-gray-500 p-3 py-2 px-2">Home</button>
        <button className=" rounded-xl text-gray-500 p-3 py-2 px-2">Projects</button>
        <button className="bg-red-200 rounded-xl text-gray-500 p-3 py-2 px-2">Work Experience</button>
        <button className="bg-red-20bg-red-2000 rounded-xl text-gray-500 p-3 py-2 px-2">About</button>
      </div>
      <p>LinkedIn, GitHub</p>
    </div>
  )
}

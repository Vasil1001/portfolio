import React from 'react'

export default function Navbar() {
  return (
    <div className="mb-4 flex items-center justify-between px-2 align-baseline">
      <p className="font-bold">Vasil Dzhakov</p>
      <div className="flex gap-3 rounded-2xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] p-1.5 shadow-xl hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-xl ">
        <button className="rounded-xl bg-[#d3e1ec] hover:bg-[#ecf0f4] p-3 px-3 py-2 text-gray-500">Home</button>
        <button className=" rounded-sm bg-[#d3e1ec] hover:bg-[#ecf0f4] p-3 px-3 py-2 text-gray-500">Projects</button>
        <button className=" rounded-xl bg-[#d7e3ec] hover:bg-[#ecf0f4]  p-3 px-3 py-2 text-gray-500">Experience</button>
        <button className=" rounded-xl p-3 px-3 py-2 hover:bg-[#ecf0f4]  text-gray-500">About</button>
      </div>
      <p>LinkedIn, GitHub</p>
    </div>
  )
}

import React from 'react'

export default function Navbar() {
  return (
    <div className="mb-4 flex items-center justify-between px-2 align-baseline">
      <p className="font-bold">Vasil Dzhakov</p>
      <div className="flex gap-4 rounded-xl border border-gray-300 bg-gradient-to-r from-[#f0f8ff] to-[#f7f7f8] p-4 shadow-xl hover:border-gray-300 hover:from-[#f0f8ff] hover:to-[#fdf4ec] hover:shadow-xl ">
        <button className="bg-red-200 rounded-xl p-2 p">Home</button>
        <button className="bg-red-200 rounded-xl p-2 p">Projects</button>
        <button className="bg-red-200 rounded-xl p-2 p">Work Experience</button>
        <button className="bg-red-200 rounded-xl p-2 p">About</button>
      </div>
      <p>LinkedIn, GitHub</p>
    </div>
  )
}

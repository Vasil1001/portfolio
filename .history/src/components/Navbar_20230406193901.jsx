import React from 'react'

export default function Navbar() {
  return (
    <div className="flex justify-between px-2 mb-4">
      <p className="font-bold">Vasil Dzhakov</p>
      <div className="flex p-4 gap-4 shadow-xl rounded-xl from-[#e8f4ff] to-[#f7f7f8] hover:from-[#f0f8ff] hover:to-[#fdf4ec]">
        <button className="bg-red-200">Home</button>
        <button className="bg-red-200">Projects</button>
        <button className="bg-red-200">Work Experience</button>
        <button className="bg-red-200">About</button>
      </div>
      <p>LinkedIn, GitHub</p>
    </div>
  )
}

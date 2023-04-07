import React from 'react'

export default function Navbar() {
  return (
    <div className="flex justify-between px-2 mb-3">
      <p className="font-bold">Vasil Dzhakov</p>
      <div>
        <button className="bg-red-200">Home</button>
        <button className="bg-red-200">Projects</button>
        <button className="bg-red-200">Work Experience</button>
        <button className="bg-red-200">About</button>
      </div>
      <p>LinkedIn, GitHub</p>
    </div>
  )
}

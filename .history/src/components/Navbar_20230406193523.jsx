import React from 'react'

export default function NAV() {
  return <div className='flex justify-between'>
    <p className='font-bold'>Vasil</p>
    <div>
        <button className='bg-red-200'>Home</button>
        <button className='bg-red-200'>Projects</button>
        <button className='bg-red-200'>Work Experience</button>
        <button className='bg-red-200'>About</button>
    </div>
    <p>LinkedIn, GitHub</p>
  </div>
}

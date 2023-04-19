import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/./vite.svg'

export default function Footer() {
  return (
    <div className="mt-3.5 rounded-t-lg bg-[#f1f0ee] py-5 text-center text-gray-600">
      <a href="#hero" className="block text-xl font-semibold md:text-2xl">
        Shiaf Arfan
      </a>
      <a href="mailto:webcifar@gmail.com" className="md:text-md text-sm hover:text-indigo-500">
        webcifar@emial.com
      </a>
      <p className="mt-2 text-xs text-gray-500">© TechHub-Blog Creative {new Date().getFullYear()}. All rights reserved</p>
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  )
}

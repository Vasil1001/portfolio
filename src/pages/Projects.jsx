import React from 'react'
import purple_rock_kb from '../assets/ai/purple-rock-kb.webp'
import house_stars from '../assets/ai/house-stars.webp'
import me from '../assets/ai/me1.jpg'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { BsGithub, BsLightbulb, BsLinkedin, BsLightbulbOffFill, BsFillFileEarmarkTextFill, BsFillMoonStarsFill } from 'react-icons/bs'
import projectsList from '../components/ProjectCardsPage/Projects'

export default function Projects() {
  return (
    <div className="cont mb-5 mt-2 grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
      <div className="car mainCard col-span-4 row-span-2 lg:col-span-4">
        <div className="">
          <div className="flex justify-between">
            <h1 className="px-2  text-left font-supreme text-3xl font-semibold text-[#2f3136] dark:text-[#383b41] md:text-4xl">Projects</h1>
          </div>
        </div>
      </div>

      <div className="col-span-4 grid grid-cols-4 gap-3.5 lg:grid-cols-3 3xl:grid-cols-4">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="flex flex-col  justify-between col-span-4 h-80  flex-wrap overflow-hidden rounded-xl bg-[#f5f4f3] p-6 shadow-sm border border-[#e5e4e4] hover:shadow-md md:col-span-2 lg:col-span-1 2xl:col-span-1 "
          >
            <p className="text-left text-xl font-satoshi font-bold text-gray-700 ">{project.name}</p>
            <p className="text-left text-gray-600 ">{project.shortDescription}</p>
            <div className="flex grow items-end gap-3.5 text-gray-600">
              <button className="p-1">Github</button>
              <button className="p-1">Website</button>
            </div>
            <img src="project.png" alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

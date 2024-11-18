import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function ProjectItem({ project }) {
  return (
    <div
      key={project.id}
      className="col-span-4 flex h-80 flex-col flex-wrap  justify-between overflow-hidden rounded-xl border border-[#e5e4e4] bg-[#f5f4f3] p-6 shadow-sm hover:shadow-md md:col-span-2 lg:col-span-1 2xl:col-span-1 "
    >
      <div className="flex justify-between">
        <Link className="text-left" to={`/project/${project.id}`}>
          <h1 className="font-satoshi text-xl font-semibold text-gray-700 hover:text-gray-900 ">{project.name}</h1>
        </Link>
        <Link className="flex text-right" to={`/project/${project.id}`}>
          <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
        </Link>
      </div>

      <hr className="my-2" />

      <p className="text-left text-gray-600 ">{project.shortDescription}</p>
      <div className="flex grow items-end gap-2 text-gray-600">
        {project.github && (
          <a href={project.github} target="_blank" className="rounded-lg bg-[#e8e7e5] p-1 px-1.5 hover:bg-[#dfdddb]">
            GitHub
          </a>
        )}

        {project.website && (
          <a href={project.website} target="_blank" className="rounded-lg bg-[#e8e7e5] p-1 px-1.5 hover:bg-[#dfdddb]">
            Website
          </a>
        )}
      </div>
      <img src="project.png" alt="" />
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectItem({ project }) {
  return (
    <div
      key={project.id}
      className="col-span-4 flex h-80 flex-col flex-wrap  justify-between overflow-hidden rounded-xl border border-[#e5e4e4] bg-[#f5f4f3] p-6 shadow-sm hover:shadow-md md:col-span-2 lg:col-span-1 2xl:col-span-1 "
    >
      <Link className="text-left" to={`/project/${project.id}`}>
        <h1 className="font-satoshi text-xl font-semibold text-gray-700 ">{project.name}</h1>
      </Link>

      <hr className="my-2" />

      <p className="text-left text-gray-600 ">{project.shortDescription}</p>
      <div className="flex grow items-end gap-3.5 text-gray-600">
        <button className="p-1">Github</button>
        <button className="p-1">Website</button>
      </div>
      <img src="project.png" alt="" />
    </div>
  )
}

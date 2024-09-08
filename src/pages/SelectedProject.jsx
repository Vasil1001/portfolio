// src/pages/SelectedProject.jsx
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import projectsList from '../components/ProjectsPage/Projects'

export default function SelectedProject() {
  const { id } = useParams()

  const project = projectsList.find((p) => p.id === Number(id))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="mt-2">
      <div className="col-span-4 row-span-2 rounded-xl border border-[#e5e4e4] bg-[#393e46] p-6 text-[#f1f0ee] shadow-md lg:col-span-4">
        <div className="flex justify-between">
          <h1 className="px-2 text-left font-supreme text-3xl font-semibold md:text-4xl">{project.name}</h1>
        </div>
        <p className="mb-4">{project.description}</p>
        <p className="mb-4">{project.description}</p>
        <p className="mb-4">{project.description}</p>
        <div className="mb-4 flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              GitHub
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Website
            </a>
          )}
        </div>
        {/* <img src="project.png" alt={project.name} className="w-full h-auto rounded-lg" /> */}
      </div>
    </div>
  )
}

import React from 'react'
import projectsList from './Projects'
import ProjectItem from './ProjectItem'
import { ScrollScaleWrapper } from '../../hooks/scroll-scale-wrapper'

export default function ProjectList() {
  return (
    <div className="col-span-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
      {projectsList.map((project) => (
        <ScrollScaleWrapper>
          <ProjectItem project={project} key={project.id} />
        </ScrollScaleWrapper>
      ))}
    </div>
  )
}

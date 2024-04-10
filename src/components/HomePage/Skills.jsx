import React from 'react'

const SkillCard = ({ skill }) => (
  <div className="rounded-lg flex-1 bg-[#393e46] px-2.5 py-1.5 font-supreme text-sm font-semibold text-[#f1f0ee] hover:bg-[#224871] lg:px-3 lg:py-2 lg:text-[15px]">
    {skill}
  </div>
)

export default function Skills() {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'PostreSQL',
    'MySQL',
    'MongoDB',
    'Git',
    'Linear',
    'Notion',
  ]

  return (
    <div className="mainCard car col-span-4 grid items-center lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
      <div className="place-center z-10 flex flex-grow flex-wrap gap-2 overflow-hidden lg:text-[16px]">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill} />
        ))}
      </div>
    </div>
  )
}

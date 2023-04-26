import React from 'react'
import Timeline from '../components/Timeline'
import Time from '../components/Time'

export default function Experience() {
  return (
    <div className="mb-5 gap-3.5 pt-5">
      <div className="col-span-4 rounded-2xl border border-[#e3e4e4] bg-[#f1f0ee] p-7 text-center shadow-xl dark:bg-[#edeeef]">
        <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Experience Timeline</h1>
        <Timeline />
      </div>
    </div>
  )
}

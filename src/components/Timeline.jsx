import React from 'react'

export default function Timeline() {
  //https://tailwindcomponents.com/component/vertical-timeline-1
  return (
    <section className="rounded-xl px-0 text-left text-gray-700 dark:text-gray-100 ">
      <div className=" mx-auto max-w-full py-6 ">
        <div className="grid">
          <div className="relative col-span-12 space-y-6 px-3  md:px-3 xl:mx-auto xl:max-w-[90%] 3xl:max-w-[80%]">
            <div className="relative col-span-12 space-y-12 px-0 before:bg-gray-500 before:dark:bg-gray-600 sm:col-span-12 sm:space-y-8 sm:px-4 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5">
              <div className="cardHoverShadow flex max-w-full flex-col rounded-lg bg-[#ffffff] px-5 py-4 text-gray-700  sm:relative sm:before:absolute sm:before:left-[-43px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full md:px-8">
                <h3 className="font-inter text-xl font-bold tracking-wide">Web Developer Internship @ Voyager Seville</h3>
                <time className="mb-2 text-xs uppercase tracking-wide dark:text-gray-400">June 2019 - July 2019</time>
                <p className="text-justify text-sm leading-snug text-opacity-100 md:text-base">
                  I had the opportunity to work as a Web Developer Intern in Spain at a company that provided tour guide services to the most popular
                  tourist attractions in Seville. My daily tasks included:
                  <br></br> <br></br>- Developing responsive layouts for the company's website using WordPress
                  <br></br>- Adding functionality for pages translated into multiple languages
                  <br></br>- Collaborating with a team to organize bookings English-speaking groups 
                  <br></br>- Fixing the company blog
                  page and writing articles about the company's attractions
                </p>
              </div>

              <div className="cardHoverShadow flex flex-col rounded-lg bg-[#ffffff] px-5 py-4 text-gray-700 sm:relative sm:before:absolute sm:before:left-[-43px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full md:px-8">
                <h3 className="font-inter  text-xl font-bold tracking-wide ">Construction</h3>
                <time className="mb-2 text-xs uppercase tracking-wide dark:text-gray-400">May 2020 - Dec 2021, 2022</time>
                <p className="text-justify text-sm leading-snug text-opacity-100 md:text-base">
                  During the pandemic, lot's of places closed down along with my waiter job, so I started working at a construction firm, RIR
                  Construction after my classes and on my free days, and full time during holidays.<br></br>
                  <br></br>- Learned to use various tools confidently to be able to find solutions to a given plan.<br></br>- Collaborated with a team
                  to accomplish tasks following designs from architects
                </p>
              </div>

              <div className="cardHoverShadow flex flex-col rounded-lg bg-[#ffffff] px-5 py-4 text-gray-700 sm:relative sm:before:absolute sm:before:left-[-43px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full md:px-8">
                <h3 className="font-inter text-xl font-bold tracking-wide">Waiter at ASAP Catering</h3>
                <time className="mb-2 text-xs uppercase tracking-wide dark:text-gray-400">June 2017 - April 2020</time>
                <p className="text-justify text-sm leading-snug text-opacity-100 md:text-base">
                  My first job in London was as a waiter at a catering company, called ASAP Catering, and I was there for 3 years. <br></br>I worked
                  in many different venues and helped organize various events, from small private parties to big corporate ones.
                </p>
              </div>

              <div className="cardHoverShadow flex flex-col rounded-lg bg-[#ffffff] px-5 py-4 text-gray-700 sm:relative sm:before:absolute sm:before:left-[-43px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full md:px-8">
                <h3 className="font-inter text-xl font-bold tracking-wide">Moved to London</h3>
                <time className="mb-2 text-xs uppercase tracking-wide dark:text-gray-400">June 2017</time>
                <p className="text-justify text-sm leading-snug text-opacity-100 md:text-base">
                  In June of 2017 I moved to London from Greece. In 2019 I went to University of Westminster where I studied Computer
                  Science and built a solid foundation in Software Development. I worked part time jobs during my time at university, and developed a passion for software engineering
                  through personal projects and university.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

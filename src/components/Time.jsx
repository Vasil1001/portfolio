import React from 'react'

export default function Time() {
  //https://tailwindcomponents.com/component/vertical-timeline-1
  return (
    <section className="rounded-xl px-0 text-left text-gray-700 dark:text-gray-100 ">
      <div className=" mx-auto max-w-full py-12 ">
        <div className="grid sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-12"></div>
          <div className="relative col-span-12 space-y-6 px-0 sm:px-6 md:px-24 xl:max-w-[90%] xl:mx-auto sm:col-span-12">
            <div className="relative col-span-12 space-y-12 px-4 before:bg-gray-500 before:dark:bg-gray-400 sm:col-span-12 sm:space-y-8 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5">
              <div className="cardHoverShadow flex max-w-full flex-col rounded-lg bg-[#ffffff] px-5 md:px-8 py-4 text-gray-700 before:bg-[#0069b9] sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
                <h3 className="font-inter text-xl font-bold tracking-wide">Web Developer Internship @ Voyager Seville</h3>
                <time className="mb-2 text-xs uppercase tracking-wide dark:text-gray-400">June 2019 - July 2019</time>
                <p className="text-justify text-sm leading-snug text-opacity-100 md:text-base">
                  I had the opportunity to work as a Web Developer Intern in Spain at company that provided tour guide services to the most popular
                  tourist attracions in Seville. My daily tasks included:
                  <br></br> <br></br>- Developing responsive layouts for the company's website using WordPress
                  <br></br>- Adding functionality for pages translated in multiple languages
                  <br></br>- Collaborating with a team to organize bookings and guide English speaking groups with the tours - Fixing the company blog
                  page and writing articles about the company's attractions
                </p>
              </div>

              <div className="cardHoverShadow flex flex-col rounded-lg text-gray-700 bg-[#ffffff] px-5 md:px-8 py-4 before:bg-[#0069b9] sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
                <h3 className="font-inter  text-xl font-bold tracking-wide ">Construction</h3>
                <time className="text-xs mb-2 uppercase tracking-wide dark:text-gray-400">May 2020 - Dec 2021, 2022</time>
                <p className="text-justify text-sm leading-snug text-opacity-100 md:text-base">
                  During the pandemic, lot's of places closed down along with my waiter job, so I started working at a construction firm, RIR
                  Construction after my classes and on my free days, and full time during holidays.<br></br>
                  <br></br>- Learned to use various tools confidently to be able to find solutions to a given plan.<br></br>- Collaborated with a team
                  to accomplish tasks following designs from architects
                </p>
              </div>

              <div className="cardHoverShadow flex flex-col rounded-lg text-gray-700 bg-[#ffffff] px-5 md:px-8 py-4 before:bg-[#0069b9] sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
                <h3 className="font-inter text-xl font-bold tracking-wide">Waiter at ASAP Catering</h3>
                <time className="text-xs mb-2 uppercase tracking-wide dark:text-gray-400">June 2017 - December 2020</time>
                <p className="text-justify text-sm leading-snug text-opacity-100 md:text-base">
                  I had the opportunity to work as a Web Developer Intern in Spain at company that provided tour guide services to the most popular
                  tourist attracions in Seville. My daily tasks included:
                  <br></br> <br></br>- Developing responsive layouts for the company's website using WordPress
                  <br></br>- Adding functionality for pages translated in multiple languages
                  <br></br>- Collaborating with a team to organize bookings and guide English speaking groups with the tours - Fixing the company blog
                  page and writing articles about the company's attractions
                </p>
              </div>

              <div className="cardHoverShadow flex flex-col rounded-lg text-gray-700 bg-[#ffffff] px-5 md:px-8 py-4 before:bg-[#0069b9] sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
                <h3 className="font-inter text-xl font-bold tracking-wide">Moved to London</h3>
                <time className="text-xs mb-2 uppercase tracking-wide dark:text-gray-400">Dec 2020</time>
                <p className="text-justify text-sm leading-snug text-opacity-100 md:text-base">
                  I moved to London from Greece for university and in 2017 & ended up going to the University of Westminster and studying Computer
                  Science. I worked part time jobs during my time at the University of Westminster, and developed a passion for software engineering
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

import React from 'react'
// https://tailwindcomponents.com/component/events-timeline
export default function Timeline() {
  return (
    <section>
      <div className="px-10 h-full ">
        <section className="px-10 rounded-xl text-left text-gray-700 dark:text-gray-100 ">
          <div className=" mx-auto max-w-full px-10 py-12">
            <div className="grid sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-12"></div>
              <div className="relative col-span-12 space-y-6 px-4 sm:col-span-12">
                <div className="relative col-span-12 space-y-12 px-4 before:bg-gray-500 before:dark:bg-gray-400 sm:col-span-12 sm:space-y-8 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5">
                 
                 <div className="cardHoverShadow flex max-w-full flex-col rounded-lg bg-[#ffffff] p-5 px-8 py-4 text-gray-700 before:bg-[#0069b9] sm:relative sm:before:absolute sm:before:left-[-43px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
                    <h3 className="font-inter text-xl font-bold tracking-wide">Web Developer Internship @ Voyager Seville</h3>
                    <time className="mb-2 text-xs uppercase tracking-wide dark:text-gray-400">Dec 2020</time>
                    <p className="max-w-lg text-justify text-sm leading-snug text-opacity-100 md:text-base">
                      I had the opportunity to work as a Web Developer Intern in Spain at company that provided tour guide services to the most
                      popular tourist attracions in Seville. My daily tasks included:
                      <br></br> <br></br>- Developing responsive layouts for the company's website using WordPress
                      <br></br>- Adding functionality for pages translated in multiple languages
                      <br></br>- Collaborating with a team to organize bookings and guide English speaking groups with the tours - Fixing the company
                      blog page and writing articles about the company's attractions
                    </p>
                  </div>

                  <div className="cardHoverShadow flex flex-col rounded-lg bg-[#ffffff] p-5 px-4 py-4 before:bg-[#0069b9] sm:relative sm:before:absolute sm:before:left-[-43px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
                    <h3 className="font-inter  text-xl font-bold tracking-wide">Construction</h3>
                    <time className="text-xs uppercase tracking-wide dark:text-gray-400">Dec 2020</time>
                    <p className="max-w-lg text-justify text-sm leading-snug text-opacity-100 md:text-base">
                      During the pandemic, lot's of places closed down along with my waiter job, so I started working at a construction firm, RIR
                      Construction after my classes and on my free days, and full time during holidays.<br></br>
                      <br></br>- Learned to use various tools confidently to be able to find solutions to a given plan.<br></br>- Collaborated with a
                      team to accomplish tasks following designs from architects
                    </p>
                  </div>

                  <div className="cardHoverShadow flex flex-col rounded-lg bg-[#ffffff] p-5 px-8 py-4 before:bg-[#0069b9] sm:relative sm:before:absolute sm:before:left-[-43px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
                    <h3 className="font-inter text-xl font-bold tracking-wide">Waiter at ASAP Catering</h3>
                    <time className="text-xs uppercase tracking-wide dark:text-gray-400">Dec 2020</time>
                    <p className="max-w-lg text-justify text-sm leading-snug text-opacity-100 md:text-base">
                      I had the opportunity to work as a Web Developer Intern in Spain at company that provided tour guide services to the most
                      popular tourist attracions in Seville. My daily tasks included:
                      <br></br> <br></br>- Developing responsive layouts for the company's website using WordPress
                      <br></br>- Adding functionality for pages translated in multiple languages
                      <br></br>- Collaborating with a team to organize bookings and guide English speaking groups with the tours - Fixing the company
                      blog page and writing articles about the company's attractions
                    </p>
                  </div>

                  <div className="cardHoverShadow flex flex-col rounded-lg bg-[#ffffff] p-5 px-8 py-4 before:bg-[#0069b9] sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full">
                    <h3 className="font-inter text-xl font-bold tracking-wide">Moved to London</h3>
                    <time className="text-xs uppercase tracking-wide dark:text-gray-400">Dec 2020</time>
                    <p className="max-w-lg text-justify text-sm leading-snug text-opacity-100 md:text-base">
                      I moved to London from Greece for university and in 2017 & ended up going to the University of Westminster and studying Computer
                      Science. I worked part time jobs during my time at the University of Westminster, and developed a passion for software
                      engineering through personal projects and university.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=" mx-auto flex flex-col items-center md:my-2 md:flex-row">
          <div className="">
            <div className=" mx-auto h-full w-full">
              <div className="wrap relative h-full overflow-hidden p-0 ">
                {/* <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ right: '95%', border: '2px solid #383b41', borderRadius: '1%' }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{ left: '5%', border: '2px solid #383b41', borderRadius: '1%' }}
                ></div> */}

                <div className="right-timeline mb-9 flex w-full items-center justify-between">
                  <div className="order-1 w-4/12"></div>
                  <div className="order-1 w-6/12 rounded-lg bg-[#ffffff] p-5 px-8 py-4 text-left shadow-xl">
                    <p className="mb-1 text-base text-[#7e22ce]">June 2019 - July 2019</p>
                    <h4 className="mb-3 text-lg font-bold text-[#383b41] md:text-2xl">Web Developer Internship @ Voyager Seville</h4>
                    <p className="text-sm leading-snug text-[#383b41] text-opacity-100 md:text-base">
                      I had the opportunity to work as a Web Developer Intern in Spain at company that provided tour guide services to the most
                      popular tourist attracions in Seville. My daily tasks included:<br></br> <br></br>- Developing responsive layouts for the
                      company's website using WordPress <br></br>- Adding functionality for pages translated in multiple languages <br></br>-
                      Collaborating with a team to organize bookings and guide English speaking groups with the tours - Fixing the company blog page
                      and writing articles about the company's attractions
                    </p>
                  </div>
                </div>

                <div className="left-timeline mb-9 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-4/12"></div>
                  <div className="order-1 w-6/12 rounded-lg bg-[#ffffff] p-5 px-8 py-4 text-right shadow-xl">
                    <p className="mb-1 text-base text-[#7e22ce]"> 10 May, 2021</p>
                    <h4 className="mb-3 text-lg font-bold text-[#383b41] md:text-2xl">Construction</h4>
                    <p className="text-sm leading-snug text-[#383b41] text-opacity-100 md:text-base">
                      During the pandemic, lot's of places closed down along with my waiter job, so I started working at a construction firm, RIR
                      Construction after my classes and on my free days, and full time during holidays.<br></br>
                      <br></br>- Learned to use various tools confidently to be able to find solutions to a given plan.<br></br>- Collaborated with a
                      team to accomplish tasks following designs from architects.
                    </p>
                  </div>
                </div>

                <div className="left-timeline mb-9 flex w-full items-center justify-between">
                  <div className="order-1 w-4/12"></div>
                  <div className="order-1 w-6/12 rounded-lg bg-[#ffffff] p-5 px-8 py-4 text-left shadow-xl">
                    <p className="mb-1 text-base text-[#7e22ce]">June 2017 - December 2020</p>
                    <h4 className="mb-3 text-lg font-bold text-[#383b41] md:text-2xl">Waiter at ASAP Catering</h4>
                    <p className="text-sm leading-snug text-[#383b41] text-opacity-100 md:text-base">
                      My first job in London was at a catering company in London, called ASAP Catering, and I was a waiter for 3 years. I worked in
                      many different venues and helped organized many events, from small private parties to big corporate events.
                    </p>
                  </div>
                </div>

                <div className="left-timeline mb-9 flex w-full flex-row-reverse items-center justify-between">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-6/12 rounded-lg bg-[#ffffff] p-5 px-8 py-4 text-right shadow-xl">
                    <p className="mb-1 text-base text-[#7e22ce]">10 June, 2017</p>
                    <h4 className="mb-3 text-lg font-bold text-[#383b41] md:text-2xl">Moved to London</h4>
                    <p className="text-sm leading-snug text-gray-600 text-opacity-100 md:text-base">
                      I moved to London from Greece for university and in 2017 & ended up going to the University of Westminster and studying Computer
                      Science. I worked part time jobs during my time at the University of Westminster, and developed a passion for software
                      engineering through personal projects and university.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

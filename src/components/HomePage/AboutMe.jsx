import React from 'react'
import house_stars from '../../assets/ai/house-stars.webp'
import mesq from '../../assets/mesq.jpeg'
import SendEmailButton from '../SendEmailButton/SendEmailButton'
import { HiOutlineExternalLink } from 'react-icons/hi'
import '../SendEmailButton/SendEmailButton.css'
import { BsLinkedin } from 'react-icons/bs'
import Skills from './Skills'
import Experience from './Experience'

export default function AboutMe() {
  return (
    <>
      <div className="cont grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
        <div className="car mainCard col-span-4 row-span-2 lg:col-span-2">
          <div className="flex justify-between">
            <h1 className=" pt-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Personal Note</h1>

            <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
          </div>
          <hr className="my-3" />
          <p className="text-justify font-supreme text-lg tracking-wide text-gray-700 dark:text-[#383b41] md:text-[20.5px] lg:leading-normal">
            I am a Software Engineer who grew up in Greece, with a passion for building clean designs and visually appealing applications.
            <br /> <br />
            Frontend and full-stack technologies have been my main focus for projects lately.
            <br /> <br />
            Technologies I am currently working with include: TypeScript, Next.js, React, Tailwind, and Node.js with Express.js.
            <br /> <br />
            Learning interesting new technologies has motivated me to plan and work on projects that I have fun building, resulting in better learning
            outcomes.
            <br /> <br />
            Staying up to date with web technologies in particular and working with React has been highly enjoyable and it motivated me to build
            interesting software.
          </p>
        </div>
        <div className=" align-center col-span-4 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] p-1.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#edeeef] lg:col-span-2 2xl:col-span-2 3xl:col-span-1">
          <div className=" flex-wrap overflow-hidden rounded-xl p-1.5">
            <img src={mesq} alt="asd" className="min-h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>

        <Skills />

        <div className="mainCard col-span-4 row-span-1 flex flex-col p-6 text-center md:col-span-2 3xl:col-span-1">
          <div className="flex items-start justify-between ">
            <div className="flex flex-col">
              <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Contact</h1>
              <p className="mt-1 text-left text-sm text-gray-500 dark:text-gray-600">vaskodzhakov@gmail.com</p>
            </div>
            <a className="tooltip tooltip-bottom " data-tip="linkedin.com/in/vasil1001" target="_blank" href="https://www.linkedin.com/in/vasil1001/">
              <BsLinkedin className="tooltip cursor-pointer rounded-md text-[2.2rem] hover:fill-[#0069b9]" fill="black" />
            </a>
          </div>
          <hr className="my-2" />

          {/* https://formsubmit.co/ */}
          <form className="flex flex-col justify-between" action="https://formsubmit.co/e95295e4949eef97bea0a442688ff00c" method="POST">
            <input
              type="email"
              name="email"
              className="block w-full rounded-lg border border-gray-300 bg-[#fefefe] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Type your email"
              required
            />
            <textarea
              type="text"
              name="message"
              className="mt-3.5 block w-full  grow rounded-lg border border-gray-300 bg-[#fefefe] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Write your message"
              required
              rows="2"
              cols="11"
            />
            {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
            <button className="mt-3.5 flex flex-col items-end">
              <SendEmailButton />
            </button>
          </form>
        </div>

        <div className="cardgreen align-center col-span-4 row-span-1 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee]  p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#1d0018] md:col-span-2 2xl:col-span-2 3xl:col-span-1">
          <div className="card2 w-full flex-1  flex-wrap overflow-hidden rounded-xl">
            <img src={house_stars} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>
        <Experience />
        <div className="  col-span-4 ">
          <div className="grid grid-cols-4 gap-3.5  xl:grid-cols-3">
            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6 text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold">Web Development</h>
              <div className="mb-2 flex ">
                <i className="devicon-css3-plain colored text-6xl"></i>
                <i className="devicon-html5-plain colored text-6xl"></i>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-14" />
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p>
                  I have solid experience building with HTML, CSS, JavaScript and TypeScript through personal projects as well as from a Web
                  Development module at University.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee]   py-6 text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold ">Frontend Framework</h>
              <div className="mb-2 flex">
                <i class="devicon-react-original-wordmark colored text-6xl"></i>
                <i class="devicon-nextjs-original text-6xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p>
                  I currently work as a Software Engineer for Bind.ie where I have gained solid experience with Next.js, TypeScript and Tailwind.
                  Also, I have experience building personal projects with React.js during and after university.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6  text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold">Backend Development</h>
              <div className="mb-2 flex gap-3">
                <i class="devicon-nodejs-plain colored text-5xl"></i>
                <i class="devicon-express-original colored text-5xl"></i>
                <i class="devicon-java-plain-wordmark colored text-5xl"></i>
                <i class="devicon-spring-plain-wordmark colored text-5xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p>
                  During university I used Java, Spring Boot and some C# for backend. After working with React, I gravitated towards JavaScript &
                  Node.js, Express.js.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6  text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-2 text-[19.5px] font-bold">Databases</h>
              <div className="mb-3 flex gap-3">
                <i class="devicon-mysql-plain-wordmark colored text-6xl"></i>
                <i class="devicon-mongodb-plain-wordmark colored text-6xl"></i>
                <i class="devicon-postgresql-plain-wordmark text-6xl"></i>

                {/* <i class="devicon-microsoftsqlserver-plain-wordmark text-6xl"></i> */}
                <i class="devicon-firebase-plain-wordmark colored text-6xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p>
                  Database Systems was one of my University modules, and throuought my studies I used MySQL and Firebase. After graduating I learned
                  MongoDB.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6  text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold">Frontend Design and UI</h>
              <div className="mb-2 flex gap-3">
                {/* <i class="devicon-tailwindcss-original-wordmark text-6xl colored"></i> */}

                <i class="devicon-tailwindcss-plain colored text-6xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p>
                  To ensure that my applications are responsive and stylish I use Tailwind, which allows me to design with mobile first approach and
                  be as creative as possible. I also like using the amazing ui/shadcn components to make my applications look more clean.
                </p>
              </div>
            </div>
            {/* One card END */}

            {/* One card START */}
            <div className="col-span-full flex flex-col items-center justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] py-6  text-center text-lg text-[#202124] shadow-sm sm:col-span-2 xl:col-span-1">
              <h className="mb-3 text-[19.5px] font-bold">Source Control</h>
              <div className="mb-2 flex gap-3">
                {/* <i class="devicon-tailwindcss-original-wordmark text-6xl colored"></i> */}

                <i class="devicon-git-plain colored text-6xl"></i>

                <i class="devicon-github-original-wordmark colored text-6xl"></i>
              </div>
              <div className="mt-3 px-6 text-[17px] text-[#3b3d42]">
                <p>
                  To keep track of my code changes and project versions I use Git and GitHub. Most of my projects are hosted on GitHub, where I try to
                  work on side projects continually. For work, I use Linear for sprints and task management.
                </p>
              </div>
            </div>
            {/* One card END */}
          </div>
        </div>
      </div>
    </>
  )
}

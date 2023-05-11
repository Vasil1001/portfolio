import React from 'react'
import nutrition from '../assets/project_screenshots/nutrition/nutrition1.png'
import ios from '../assets/project_screenshots/ios.png'
import iOS_quiz from '../assets/project_screenshots/iOS_quiz.png'
import { HiOutlineExternalLink } from 'react-icons/hi'
import githubFinder from '../assets/project_screenshots/github_finder/githubFinder.png'
import homeRently from '../assets/project_screenshots/rently/homeRently.png'
import nutritionHome from '../assets/project_screenshots/nutrition/nutritionHome.png'
import finder from '../assets/project_screenshots/github_finder/home.png'
import ticketDesk from '../assets/project_screenshots/ticket_mern/ticketDesk.png'
import portfolio from '../assets/project_screenshots/portfolio/portfolio.png'
import portfoliod from '../assets/project_screenshots/portfolio/pdark.png'
import pokeHome from '../assets/project_screenshots/pokedex/pokeHome.png'
import pokeView from '../assets/project_screenshots/pokedex/pokeView.png'
import ai_concept from '../assets/project_screenshots/ai_gen/concept.png'
import dashboardSpring from '../assets/project_screenshots/springBoot/dashboardSpring.png'
export default function Projects() {
  return (
    <div className="mt-3.5">
      <div className="px-3.5 sm:px-0">
        <div className=" ">
          <div className="align-center my-3.5 flex flex-col items-center  justify-center rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-6 text-center dark:bg-[#edeeef]">
            <h1 className="text-center  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Projects</h1>
            <p className="text-md max-w-lg text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-xl"></p>
          </div>
          <div className="mb-3.5 grid grid-cols-4 flex-wrap  gap-3.5 md:grid-cols-3 lg:grid-cols-4">
            <div className="projMainPageCard col-span-full text-center dark:bg-[#edeeef] md:col-span-2">
              <div className="flex justify-between">
                <h1 className="px-2 pt-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                  Nutrition Tracker
                  <hr className="mt-2 " />
                </h1>

                <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
              </div>

              <p className="homeProjectDescription">
                {/* A personal React project built to help me calculate my daily nutrient intake. It's main purpose is to assist me in my gym journey and
                help me eat more, while learning about proper nutrition, protein, eating healhty, tracking my progress and documenting my research. */}
                A website that accompanies my gym journey by helping calculate my daily nutrient needs motivates me to hit my set targets.
              </p>
              <div className="my-1 flex gap-1 px-1">
                <img
                  class="select-none"
                  draggable="false"
                  alt="react.js"
                  src="https://img.shields.io/badge/-React.js-27272a?logo=react&style=flat"
                ></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="css"
                  src="https://img.shields.io/badge/-CSS3-27272a?logo=css3&amp;style=flat&logoColor=white"
                ></img>
              </div>
              <img src={nutrition} className="projCardScaleUpHover rounded-xl" alt="home" />
            </div>
            <div className="cardQuiz col-span-2 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] text-center dark:hover:border-[#000] md:col-span-1 lg:col-span-1">
              <div className="card2 flex min-h-full min-w-full flex-wrap justify-center  overflow-hidden rounded-xl p-1">
                <img src={ios} className="min-h-full max-w-full cursor-pointer rounded-xl hover:rounded-[21px] " alt="quiz" />
              </div>
            </div>
                
            <div className="cardQuiz col-span-2 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] text-center dark:hover:border-[#000] md:col-span-1 lg:col-span-1">
              <div className="card2 flex min-h-full min-w-full flex-wrap justify-center   overflow-hidden rounded-xl p-1">
                <img src={iOS_quiz} className="min-h-full max-w-full cursor-pointer  rounded-xl hover:rounded-[21px] " alt="quiz" />
              </div>
            </div>

            <div className="projMainPageCard col-span-4 text-center dark:bg-[#edeeef] md:col-span-2">
              <div className="flex justify-between">
                <h1 className="px-2 pt-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                  Github Finder
                  <hr className="mt-2 " />
                </h1>
                <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
              </div>

              <p className="homeProjectDescription">
                A project that uses GitHub API to search for profiles and display information about them like latest repositories.
              </p>
              <div className="my-1 mb-1.5 flex flex-wrap gap-1 px-1">
                <img
                  class="select-none"
                  draggable="false"
                  alt="react.js"
                  src="https://img.shields.io/badge/-React.js-27272a?logo=react&style=flat"
                ></img>
                <img class="select-none" draggable="false" alt="Vite" src="https://img.shields.io/badge/-Vite-27272a?logo=vite&style=flat"></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="TailwindCSS"
                  src="https://img.shields.io/badge/-TailwindCSS-27272a?logo=TailwindCSS&style=flat"
                ></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="daisyui"
                  src="https://img.shields.io/badge/-DaisyUI-27272a?logo=daisyui&style=flat"
                ></img>
                <img class="select-none" draggable="false" alt="context" src="https://img.shields.io/badge/-ContextAPI-27272a?logo=&style=flat"></img>
              </div>
              <img src={githubFinder} className="projCardScaleUpHover rounded-xl" alt="home" />
            </div>

            <div className="projMainPageCard col-span-full text-center dark:bg-[#edeeef] lg:col-span-2">
              <div className="flex justify-between">
                <h1 className="px-2 py-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                  Rently
                  <hr className="mt-2 " />
                </h1>

                <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
              </div>

              <p className="homeProjectDescription">
                A property rental project that allows users to rent their property or get in contact with a landlord and find the right home.
              </p>
              <div className="my-1 mb-1.5 flex flex-wrap gap-1 px-1">
                <img
                  class="select-none"
                  draggable="false"
                  alt="react.js"
                  src="https://img.shields.io/badge/-React.js-27272a?logo=react&style=flat"
                ></img>
                <img class="select-none" draggable="false" alt="Vite" src="https://img.shields.io/badge/-Vite-27272a?logo=vite&style=flat"></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="TailwindCSS"
                  src="https://img.shields.io/badge/-TailwindCSS-27272a?logo=TailwindCSS&style=flat"
                ></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="daisyui"
                  src="https://img.shields.io/badge/-DaisyUI-27272a?logo=daisyui&style=flat"
                ></img>
              </div>
              <img src={homeRently} className=" projCardScaleUpHover overflow-hidden rounded-xl" alt="home" />
            </div>

            <div className="projMainPageCard col-span-full text-center dark:bg-[#edeeef] lg:col-span-2">
              <div className="flex justify-between">
                <h1 className="px-2 py-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                  Ticket Desk MERN
                  <hr className="mt-2 " />
                </h1>
                <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
              </div>
              <div className="my-1 mb-1.5 flex flex-wrap gap-1 px-1">
                <img
                  class="select-none"
                  draggable="false"
                  alt="mongodb"
                  src="https://img.shields.io/badge/-MongoDB-27272a?logo=mongodb&style=flat"
                ></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="express.js"
                  src="https://img.shields.io/badge/-Express.js-27272a?logo=express&style=flat"
                ></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="react.js"
                  src="https://img.shields.io/badge/-React.js-27272a?logo=react&style=flat"
                ></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="node"
                  src="https://img.shields.io/badge/-Node.js-27272a?logo=Node.js&style=flat"
                ></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="TailwindCSS"
                  src="https://img.shields.io/badge/-TailwindCSS-27272a?logo=TailwindCSS&style=flat"
                ></img>
                <img class="select-none" draggable="false" alt="Vite" src="https://img.shields.io/badge/-Vite-27272a?logo=vite&style=flat"></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="daisyui"
                  src="https://img.shields.io/badge/-DaisyUI-27272a?logo=daisyui&style=flat"
                ></img>
              </div>
              <img src={ticketDesk} className="projCardScaleUpHover rounded-xl" alt="home" />
            </div>

            <div className="projMainPageCard col-span-full text-center dark:bg-[#edeeef] lg:col-span-2">
              <div className="flex justify-between">
                <h1 className="px-2 py-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                  Portfolio
                  <hr className="mt-2 " />
                </h1>
                <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
              </div>

              <div className="my-1 mb-1.5 flex flex-wrap gap-1 px-1">
                <img
                  class="select-none"
                  draggable="false"
                  alt="react.js"
                  src="https://img.shields.io/badge/-React.js-27272a?logo=react&style=flat"
                ></img>
                <img class="select-none" draggable="false" alt="Vite" src="https://img.shields.io/badge/-Vite-27272a?logo=vite&style=flat"></img>
                <img
                  class="select-none"
                  draggable="false"
                  alt="TailwindCSS"
                  src="https://img.shields.io/badge/-TailwindCSS-27272a?logo=TailwindCSS&style=flat"
                ></img>
              </div>
              <img src={portfoliod} className="projCardScaleUpHover rounded-xl" alt="home" />
            </div>

            <div className="col-span-full flex max-h-[500px] gap-3.5 overflow-hidden ">
              <div className="cardiOS  col-span-2 flex flex-col transition-all hover:rounded-tl-[27px] hover:transition-all items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] text-center dark:hover:border-[#000] md:col-span-1 lg:col-span-1">
                <div className="card2 flex min-h-full min-w-full flex-wrap justify-center   overflow-hidden rounded-xl p-1">
                  <img src={iOS_quiz} className="min-h-full max-w-full cursor-pointer  rounded-xl hover:rounded-[21px] " alt="quiz" />
                </div>
              </div>

              <div className="projOverflowCard  w-2/3 grow text-center dark:bg-[#edeeef] ">
                <div className="flex justify-between">
                  <h1 className="px-2 py-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                    Bug Tracker Spring Boot
                    <hr className="mt-2 " />
                  </h1>
                  <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
                </div>
                <p className="homeProjectDescription">
                  {/* A Fullstack Spring Boot application that allows users to create tickets, assign them to projects and members, and projects to
                  companies. It was created after university to expand on what I had learned in Java from my classes. The frontend part was thymeleaf,
                  and it is what made me explore frontend frameworks and ended up with React! */}
                  Fullstack project built after university to expand on Java from my classes. Frontend was written in thymeleaf, and it is what made
                  me explore frontend frameworks and learning React!
                </p>
                <div className="my-1 mb-1 flex flex-wrap gap-1 px-1">
                  <img
                    class="select-none"
                    draggable="false"
                    alt="java"
                    src="https://img.shields.io/badge/-Java-27272a?logo=openjdk&amp;style=flat&logoColor=red"
                  ></img>
                  <img
                    class="select-none"
                    draggable="false"
                    alt="spring"
                    src="https://img.shields.io/badge/-Spring Boot-27272a?logo=spring&amp;style=flat&logoColor=green"
                  ></img>
                  <img
                    class="select-none"
                    draggable="false"
                    alt="html"
                    src="https://img.shields.io/badge/-HTML-27272a?logo=html5&amp;style=flat&logoColor=orange"
                  ></img>
                  <img
                    class="select-none"
                    draggable="false"
                    alt="css"
                    src="https://img.shields.io/badge/-CSS3-27272a?logo=css3&amp;style=flat&logoColor=white"
                  ></img>
                </div>
                <img src={dashboardSpring} className="projCardScaleUpHover overflow-hidden rounded-xl  object-contain" alt="home" />

                {/* <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
                React app to search for GitHub profiles and display available information about user, description and latest projects.
                <br /> <br />
                This app uses the Context API with the useContext and useReducer hooks for state management.
                <br /> <br />
                Stack used: React, TailwindCSS, Context API, DaisyUI
                <br /> <br />
                Image
              </p> */}
              </div>
            </div>

            <div className=" col-span-full flex gap-3.5">
              <div className="projMainPageCard grow-1 float-left w-full flex-wrap text-center dark:bg-[#edeeef] md:w-1/2">
                <div className="flex justify-between">
                  <h1 className="px-2 py-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                    Prompt Image Generator
                    <hr className="mt-2 " />
                  </h1>
                  <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
                </div>
                <p className="homeProjectDescription">
                  A NextJS fullstack project that allows users to generate an image from typing a prompt and describing the image they want. The
                  project is in progress, the image below is a concept of what it should look like.
                </p>
                <div className="my-1 mb-1.5 flex flex-wrap gap-1 px-1">
                  <img
                    className="select-none"
                    draggable="false"
                    alt="next.js"
                    src="https://img.shields.io/badge/-NEXT.JS-27272a?logo=next.js&amp;style=flat"
                  ></img>
                  <img
                    className="select-none"
                    draggable="false"
                    alt="typescript"
                    src="https://img.shields.io/badge/-TypeScript-27272a?logo=typescript&amp;style=flat"
                  ></img>
                  <img
                    class="select-none"
                    draggable="false"
                    alt="TailwindCSS"
                    src="https://img.shields.io/badge/-TailwindCSS-27272a?logo=TailwindCSS&style=flat"
                  ></img>
                  <img
                    class="select-none"
                    draggable="false"
                    alt="PostgreSQL"
                    src="https://img.shields.io/badge/-PostgreSQL-27272a?logo=PostgreSQL&style=flat&logoColor=white"
                  ></img>
                  <img
                    class="select-none"
                    draggable="false"
                    alt="Prisma"
                    src="https://img.shields.io/badge/-Prisma-27272a?logo=Prisma&style=flat"
                  ></img>
                </div>
                <img src={ai_concept} className="projCardScaleUpHover rounded-xl" alt="home" />
              </div>

              <div className="projMainPageCard grow-1 float-right w-full flex-wrap text-center dark:bg-[#edeeef] md:w-1/2">
                <div className="flex justify-between">
                  <h1 className="px-2 py-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                    Pokedex API Layout
                    <hr className="mt-2 " />
                  </h1>
                  <HiOutlineExternalLink className="car cursor-pointer hover:text-[#207c86]" size={'1.4rem'} />
                </div>
                <p className="text-md px-2 pb-3 text-justify font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
                  A simple React application created to practice with Tailwind layouts using the Pokedex API.
                </p>
                <div className="my-1 mb-1.5 flex flex-wrap gap-1 px-1">
                  <img
                    class="select-none"
                    draggable="false"
                    alt="react.js"
                    src="https://img.shields.io/badge/-React-27272a?logo=react&style=flat"
                  ></img>
                  <img
                    class="select-none"
                    draggable="false"
                    alt="TailwindCSS"
                    src="https://img.shields.io/badge/-TailwindCSS-27272a?logo=TailwindCSS&style=flat"
                  ></img>
                </div>
                <img src={pokeView} className="projCardScaleUpHover rounded-xl" alt="home" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mb-3.5 grid grid-cols-4 flex-wrap gap-3.5">
          <div className="mainCard col-span-2 row-span-3 text-center dark:bg-[#edeeef]">
            <div className="">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Github Finder
                <hr className="mt-3" />
              </h1>
              <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
                React app to search for GitHub profiles and display available information about user, description and latest projects.
                <br /> <br />
                This app uses the Context API with the useContext and useReducer hooks for state management.
                <br /> <br />
                Stack used: React, TailwindCSS, Context API, DaisyUI
                <br /> <br />
                Image
              </p>
            </div>
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef]">
            <div className="">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                MERN Ticket tracker
                <hr className="mt-3" />
              </h1>
              <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
                A MERN (MongoDB, Express, React, Node.js) full-stack application that allows users to create a ticket with their issue and track them.
                <br /> <br />
                JWT Authentication is used to authenticate users.
                <br /> <br />
                Stack used: React, Node and Express JS, MongoDB, Node JS, Redux, TailwindCSS
                <br /> <br />
                Image
              </p>
            </div>
          </div>
        </div> */}

        <div className="mb-0 flex grid grid-cols-4 flex-wrap gap-3.5">
          {/* <div className="align-center col-span-1 row-span-3 flex flex-col items-center justify-center  rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#edeeef] lg:col-span-1">
            <div className=" flex-wrap overflow-hidden rounded-xl">
              Spring Boot Java <br /> <br />
              Image
            </div>
          </div> */}

          {/* <div className="align-center col-span-1 row-span-3 flex flex-col items-center justify-center  rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#edeeef] lg:col-span-1">
            <div className=" flex-wrap overflow-hidden rounded-xl">
              Portfolio <br /> <br />
              Image
            </div>
          </div> 
           <div className="col-span-2 row-span-3 rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef]">
            <div className="">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Rently marketplace
                <hr className="mt-3" />
              </h1>
              <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
                A real estate property portal to assist with finding the right home to rent or buy.
                <br /> <br />
                It focuses more on the renting market, allowing users to rent their property or find the right home..
                <br /> <br />
                Image
                <br /> <br />
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* END OF ABOUT ME */}

      {/* <div className="grid grid-cols-4 grid-rows-3 gap-x-3.5">
        <div className="col-span-2 row-span-6 rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-7 text-center dark:border-[#434345] dark:bg-[#edeeef] md:col-span-2">
          <p className="mb-1 text-left">
            Planned project: <br />{' '}
          </p>
          <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#222831]  md:mb-3 md:text-4xl">Prompt Image generator</h1>
          <p className="text-md md:text-md max-w-md text-left font-roboto text-gray-500 dark:text-gray-600 md:text-lg">
            A project that allows users to type a prompt, select a style and generate an image using the DALL-E API.
            <br /> <br />
            NextJS, Typescript, Prisma, TailwindCSS, Typescript, Dall-E API, Stable-diffusion XL API, Payment/credit system
          </p>
        </div>

        <div className="col-span-2 row-span-3 rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-7 text-center dark:bg-[#edeeef]">
          <div className="">
            <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
              Pokedex Layout Clone
              <hr className="mt-3" />
            </h1>
            <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">Image of project</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

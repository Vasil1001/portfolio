import React from 'react'
import nutrition from '../assets/project_screenshots/nutrition/nutrition1.png'
import ios from '../assets/project_screenshots/ios.png'
import iOS_quiz from '../assets/project_screenshots/iOS_quiz.png'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function Projects() {
  return (
    <div className="mt-3.5">
      <div className="px-3.5 sm:px-0">
        <div className=" ">
          <div className="align-center my-3.5 flex flex-col items-center  justify-center rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-6 text-center dark:bg-[#edeeef]">
            <h1 className="text-center  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Projects</h1>
            <p className="text-md max-w-lg text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-xl"></p>
          </div>
          <div className="mb-3.5 grid grid-cols-4 flex-wrap  gap-3.5  md:grid-cols-3 lg:grid-cols-4">
            <div className="items-left col-span-4 flex flex-col justify-between rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-2 text-center dark:bg-[#edeeef] md:col-span-2 lg:col-span-2 xl:p-3 2xl:py-4">
              <h1 className="mt-1 flex justify-between pl-2 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Nutrition Tracker
                <HiOutlineExternalLink className="cursor-pointer text-[#202124]" size={'1.4rem'} />
              </h1>
              <hr className="" />
              <p className="text-md p-2 text-justify font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
                {/* A Nutrition Tracker project with React and Vanilla CSS that allows users to calculate their daily nutrient intake and hit desired
                goals. */}
                {/* <br /> <br />
                  A personal project to accompany my gym nutrition and stick to my goals.
                  <br /> <br />
                  Stack used: React, Vanilla CSS */}
              </p>
              <img src={nutrition} className="card2 rounded-xl" alt="home" />
            </div>

            <div className="cardQuiz col-span-2 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] text-center dark:hover:border-[#000] md:col-span-1 lg:col-span-1">
              <div className="card2 flex min-h-full min-w-full flex-wrap justify-center  overflow-hidden rounded-xl p-1">
                <img src={ios} className=" min-h-full max-w-full cursor-pointer rounded-xl " alt="quiz" />
              </div>
            </div>

            <div className="cardQuiz col-span-2  flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] text-center dark:hover:border-[#000] md:col-span-1 lg:col-span-1">
              <div className="card2 flex min-h-full min-w-full flex-wrap justify-center   overflow-hidden rounded-xl p-1">
                <img src={iOS_quiz} className=" min-h-full max-w-full  cursor-pointer rounded-xl " alt="quiz" />
              </div>
            </div>

            <div className="mainCard col-span-4 text-center dark:bg-[#edeeef] md:col-span-2">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Github Finder
                <hr className="mt-3" />
              </h1>
              {/* <p className="text-md text-left font-roboto text-gray-600 dark:text-[#383b41] md:text-lg">
                React app to search for GitHub profiles and display available information about user, description and latest projects.
                <br /> <br />
                This app uses the Context API with the useContext and useReducer hooks for state management.
                <br /> <br />
                Stack used: React, TailwindCSS, Context API, DaisyUI
                <br /> <br />
                Image
              </p> */}
                            <img src={nutrition} className="card2 rounded-xl" alt="home" />

            </div>

            <div className="mainCard col-span-full text-center dark:bg-[#edeeef] lg:col-span-2">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                rently
                <hr className="mt-3" />
              </h1>
              <img src={nutrition} className="card2 rounded-xl" alt="home" />

            </div>
            <div className="mainCard col-span-full flex-1 text-center dark:bg-[#edeeef] lg:col-span-2">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                MERN
                <hr className="mt-3" />
                <img src={nutrition} className="card2 rounded-xl" alt="home" />

              </h1>
            </div>

            <div className="mainCard col-span-full flex-1 text-center dark:bg-[#edeeef] lg:col-span-2">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Portfolio
                <hr className="mt-3" />
                <img src={nutrition} className="card2 rounded-xl" alt="home" />

              </h1>
            </div>

            <div className="cardQuiz col-span-2  flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] text-center dark:hover:border-[#000] md:col-span-1 lg:col-span-1">
              <div className="card2 flex min-h-full min-w-full flex-wrap justify-center   overflow-hidden rounded-xl p-1">
                <img src={iOS_quiz} className=" min-h-full max-w-full  cursor-pointer rounded-xl " alt="quiz" />
              </div>
            </div>

            <div className="mainCard col-span-4 text-center dark:bg-[#edeeef] md:col-span-2 md:col-span-2 lg:col-span-3">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Spring Boot <hr className="mt-3" />
              </h1>
              <img src={nutrition} className="card2 rounded-xl" alt="home" />

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

            <div className="mainCard col-span-full flex-1 text-center dark:bg-[#edeeef] lg:col-span-2">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Prompt Image Generator
                <hr className="mt-3" />
              </h1>
              <img src={nutrition} className="card2 rounded-xl" alt="home" />

            </div>

            <div className="mainCard col-span-full flex-1 text-center dark:bg-[#edeeef] lg:col-span-2">
              <h1 className="mb-1 text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">
                Pokedex API Layout Clone
                <hr className="mt-3" />
              </h1>
              <img src={nutrition} className="card2 rounded-xl" alt="home" />

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

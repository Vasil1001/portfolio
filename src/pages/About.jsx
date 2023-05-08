import React from 'react'

import Hills from '../assets/ai/land-hills.webp'
import Dome from '../assets/ai/dome.webp'
import Castle from '../assets/ai/castle.webp'
import Land_rocks from '../assets/ai/land-rocks.webp'
import Forest_house from '../assets/ai/forest-gr-house.webp'
import Lake from '../assets/ai/lake.webp'
import purple_rock_kb from '../assets/ai/purple-rock-kb.webp'
import house_gap from '../assets/ai/house-gap.webp'
import house_hill from '../assets/ai/house-hill.webp'
import house_river from '../assets/ai/house-river.webp'
import wooden_house from '../assets/ai/wooden-house.webp'
import house_stars from '../assets/ai/house-stars.webp'
import me from '../assets/ai/me1.jpg'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { BsGithub, BsLightbulb, BsLinkedin, BsLightbulbOffFill, BsFillFileEarmarkTextFill, BsFillMoonStarsFill } from 'react-icons/bs'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function About() {
  return (
      <div className="mb-0 mt-2">
        <div className="cont flex grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0">
          <div className="col-span-full row-span-1 flex flex-col rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-6 text-center dark:bg-[#edeeef] sm:col-span-4 lg:col-span-2 3xl:col-span-2">
            <div className="flex items-start justify-between ">
              <div className="flex flex-col">
                <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Tech Interests</h1>
              </div>
            </div>
            <hr className="my-2" />
            <p className="text-md text-left text-justify font-roboto text-gray-500 dark:text-[#383b41] md:text-lg">
              I am passionate about technology and I am always looking for new ways to improve my skills, design cleaner and more visually appealing
              applications.
              <br /> <br />
              New and interesting technologies sparked an interest and made me want to explore even more, and improved my React projects by learning
              Tailwind, Firebase, NodeJS & Express and many more.
              <br /> <br />
              I build projects that help me grow as a developer and because I genuinely enjoy it.
              <br /> <br />
              Currently I am building projects with NextJS, TypeScript, Tailwind, Prisma & Supabase.
            </p>
          </div>
          <div className="car mainCard col-span-4 row-span-2 lg:col-span-2">
            <div className="">
              <div className="flex items-start justify-between ">
                <div className="flex flex-col">
                  <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Personal Note</h1>
                </div>
              </div>
              <hr className="my-2" />
              <p className="text-md text-left font-roboto text-gray-500 dark:text-[#383b41] md:text-lg">
                I was born in Bulgaria, but I grew up in Northern Greece, in a small town near the sea. I played football for my local team for 5
                years, and enjoy music and TV Series a ton.
                <br /> <br />
                I love getting to travel back and be a tourist where I grew up and explore places and sandy beaches I have never been to before.
                <br /> <br />
                In 2017 I moved to London and I started working part time jobs along with my studies.
                <br /> <br />
                My first job was as a waiter at 17, at a catering company that organized big official events at various venues in London.
                <br /> <br />
                Then, I worked at a construction company during university with a friendly team that helped me learn and adapt to the environment.
                <br /> <br />
                I learned a lot through these jobs, met many good people and balanced working and going to school at the same time.
                <br /> <br />
                Learning new technologies during and after my studies was highly enjoyable, especially exploring technologies by myself and wanting to
                learn them, such as React, that improved the look of my backend projects from university. <br /> <br /> I really enjoyed building all
                sorts of applications in my studies, and being able to add on Tailwind, Firebase, NodeJS & Express and many more in my projects.
              </p>
            </div>
          </div>
          <div className="car align-center col-span-4 flex flex-col items-center justify-center  rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717]  dark:hover:bg-[#edeeef] sm:col-span-2 3xl:col-span-1">
            <div className=" flex-wrap overflow-hidden rounded-xl">
              <img src={me} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
            </div>
          </div>

          <div className=" align-center col-span-full row-span-1 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb]  bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#1d0018] sm:col-span-2 3xl:col-span-1">
            <div className=" w-full flex-1  flex-wrap overflow-hidden rounded-xl">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <img src={Forest_house} alt="Hills" className="h-full w-full overflow-hidden" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Land_rocks} alt="Hills" className="h-full w-full overflow-hidden" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Hills} alt="Hills" className="h-full w-full overflow-hidden" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Castle} alt="Hills" className="h-full w-full overflow-hidden" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={Dome} alt="Hills" className="h-full w-full overflow-hidden" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={purple_rock_kb} alt="Hills" className="h-full w-full overflow-hidden" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="car mainCard col-span-4 sm:col-span-2 3xl:col-span-1">
            <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-4xl">Playlist</h1>
            <div className="col-span-1">Music</div>

            {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
          </div>
          <div className="mainCard col-span-full row-span-1 flex flex-col sm:col-span-2 lg:col-span-2 3xl:col-span-2">
            <div className="flex items-start justify-between ">
              <div className="flex flex-col">
                <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Current tech interest</h1>
              </div>
            </div>
            <hr className="my-2" />
            <p className="text-md text-left text-justify font-roboto text-gray-500 dark:text-[#383b41] md:text-lg">
              I am currently interested in learning and building with with NextJS, TypeScript, Tailwind, Prisma & Supabase. My planned Projects:
              <br /> <br />
              - An app where users can input a link of a page, and using GPT3.5, the page would return a summary of the linked page.
              <br /> <br />- An app where users can type a sentence, select a style such as 3d, low poly, and generate an image out of text, using the
              DALL-E api for image generation.
            </p>
          </div>
          <div className="mainCard col-span-full row-span-1 flex flex-col sm:col-span-2 lg:col-span-2 3xl:col-span-1">
            <div className="flex items-start justify-between ">
              <div className="flex flex-col">
                <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-4xl">Contact</h1>
                <p className="mt-1 text-left text-sm text-gray-500 dark:text-gray-600">vaskodzhakov@gmail.com</p>
              </div>
              <a
                className="tooltip tooltip-bottom "
                data-tip="linkedin.com/in/vasil1001"
                target="_blank"
                href="https://www.linkedin.com/in/vasil1001/"
              >
                <BsLinkedin className="tooltip cursor-pointer rounded-md text-[2.2rem] hover:fill-[#0069b9]" fill="black" />
              </a>
            </div>
            <hr className="my-2" />

            {/* https://formsubmit.co/ */}
            <form className="flex flex-col justify-between" action="https://formsubmit.co/e95295e4949eef97bea0a442688ff00c" method="POST">
              <input
                type="email"
                name="email"
                className="block w-full rounded-lg border border-gray-300 bg-[#f2f1f1] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Type your email"
                required
              />
              <textarea
                type="text"
                name="message"
                className="mt-3.5 block w-full rounded-lg border border-gray-300 bg-[#f2f1f1] p-2.5 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-400 dark:bg-[#f0f2f4] dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Write your message"
                required
                rows="4"
                cols="50"
              />
              {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
              <button className="mt-5 flex flex-col items-end"></button>
            </form>
          </div>
          <div className=" align-center col-span-full row-span-1 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb]  bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#1d0018] sm:col-span-2 lg:col-span-2 2xl:col-span-2 3xl:col-span-1 3xl:col-span-1 3xl:col-span-1">
            <div className=" w-full flex-1  flex-wrap overflow-hidden rounded-xl">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <img src={house_river} alt="Hills" className="h-full w-full overflow-hidden" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={house_hill} alt="Hills" className="h-full w-full overflow-hidden" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
  )
}

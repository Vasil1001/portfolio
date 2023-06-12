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
import lake_hills from '../assets/ai/land-hills.webp'
import land_rocks from '../assets/ai/land-rocks.webp'
import house_stars from '../assets/ai/house-stars.webp'
import moon from '../assets/ai/moon.webp'
import me from '../assets/ai/me1.jpg'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
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
      <div className=" grid grid-cols-4 flex-wrap gap-3.5 px-3.5 sm:px-0  md:text-[20.5px]">
        <div className="mainCard col-span-full row-span-1 flex grow flex-col rounded-2xl border border-[#ebebeb] bg-[#f1f0ee] p-6 text-center dark:bg-[#edeeef] sm:col-span-4 lg:col-span-2 3xl:col-span-2">
          <div className="flex items-start justify-between ">
            <div className="flex flex-col">
              <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-3xl">Tech Interests</h1>
            </div>
          </div>
          <hr className="my-2" />
          <p className="text-md text-justify text-gray-600 dark:text-[#383b41]">
            I am passionate about technology and I am always looking for new ways to improve my skills and design cleaner and more visually appealing
            applications.
            <br /> <br />
            New and interesting technologies sparked my interest during and after university and made me want to explore even more.
            <br /> <br />
            Learning and using Tailwind CSS, Firebase, Node.js & Express.js, and many more immensely improved and added to my React projects and
            skills.
            <br /> <br />
            I build projects that help me grow as a developer and because I genuinely enjoy it.
            <br /> <br />
            Currently I am exploring Next.js and Typescript and trying to work on projects daily.
            
          </p>
          <div class="relative">
            <img src={land_rocks} alt="Hills" className="mt-3 max-h-60 w-full overflow-hidden rounded-xl object-cover" />
          </div>
        </div>
        <div className="car mainCard col-span-4 row-span-2 lg:col-span-2">
          <div className="">
            <div className="flex items-start justify-between ">
              <div className="flex flex-col">
                <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-3xl">Personal Note</h1>
              </div>
            </div>
            <hr className="my-2 border-0" />
            <div class="relative">
              <img src={moon} alt="Hills" className="max-h-60 w-full overflow-hidden rounded-tr-xl rounded-tl-xl object-cover" />
            </div>

            <div className="mt-4  justify-between gap-5">
              <div className="text-md col-span-2 text-left text-justify text-gray-600 dark:text-[#383b41]  ">
                My name is Vasilis, I am a Junior Developer living in London, UK. I focus on building front-end and fullstack web applications using
                React, JavaScript, Node.js & Express.js andv   more!
              </div>
            </div>
            <p className="text-md mt-2 text-justify text-gray-600 dark:text-[#383b41]  ">
              <span className="text-sm text-slate-500">Where I come from</span>
              <hr className="mb-1 border-2" />
              </p>
              <div className="mt-2  grid grid-cols-4 gap-5 min-h-44 flex flex-wrap overflow-visible">
                <div className="text-md col-span-2 text-left text-justify text-gray-600 dark:text-[#383b41]  ">
                  I was born in Bulgaria, but I grew up in Northern Greece, in a small town near the sea. I played football for my local team for 5
                  years and enjoy music and TV Series a ton.
                </div>
                <div className=" col-span-2 justify-end overflow-hidden rounded-md">
                  <img src={Forest_house} alt="Hills" className="h-52  w-full flex-wrap overflow-hidden rounded-sm object-cover" />
                </div>
              </div>

              <div className='block lg:hidden'><br /></div>
              <p className="text-md mt-2 text-justify text-gray-600 dark:text-[#383b41]  ">
              I love getting to travel back and be a tourist where I grew up and explore places and sandy beaches I haven't been to before.
              <br /> <br />
              In 2017 I moved to London and I started working part time jobs along with my studies. I studied Computer Science at University of
              Westminster from 2019 - 2022.
              <br /> <br />
              <span className="text-sm text-slate-500">Work Experience</span>
              <hr className="mb-1 border-2" />
              My first job was as a waiter at 17, at a catering company that organized events at various venues in London.
              <br /> <br />
              During and after university I worked at a construction company with a friendly team in Central London.
              <br /> <br />
              I learned a lot and met many good people through these jobs.
              <br /> <br />
              <span className="text-sm text-slate-500">Tech</span>
              <hr className="mb-1 border-2 bg-gray-800" />
              Learning new technologies during and after my studies was highly enjoyable, especially stacks such as React, that improved the look of
              my backend projects from university.
              <br /> <br />
              Integrating new tech such as Tailwind, Node.js & Express.js among many other technologies in my projects has also been a blast.
            </p>
          </div>
        </div>
        <div className=" align-center col-span-4 flex shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb] bg-[#f1f0ee] p-1 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717]  dark:hover:bg-[#edeeef] sm:col-span-2 ">
          <div className=" flex-wrap overflow-hidden rounded-xl p-1.5">
            <img src={me} alt="asd" className="h-full w-full overflow-hidden rounded-xl" />
          </div>
        </div>

        <div className="car mainCard col-span-4 sm:col-span-2 3xl:col-span-1">
          <h1 className="mb-1 text-left  font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:mb-3 md:text-3xl">Playlist</h1>
          <div className="col-span-1">Music</div>

          {/* <img src={galaxy} alt="galaxy" className="w-40" /> */}
        </div>
        <div className="mainCard col-span-full row-span-1 flex flex-col sm:col-span-2 lg:col-span-2 3xl:col-span-2">
          <div className="flex items-start justify-between ">
            <div className="flex flex-col">
              <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-3xl">Current tech interest</h1>
            </div>
          </div>
          <hr className="my-2" />
          <p className="text-justify font-supreme text-gray-600 dark:text-[#383b41]">
            I am currently interested in learning more about Next.js and TypeScript. My planned Projects are:
            <br /> <br />
            - An app where users can enter a link of a page, and using GPT3.5, the page will return a summary of the contents of the linked page.
            <br /> <br />- An app where users can type a sentence, select a style such as 3d, low poly, and generate an image out of text, using the
            DALL-E API for image generation.
          </p>
        </div>
        <div className="mainCard col-span-full row-span-1 flex flex-col sm:col-span-2 lg:col-span-2 3xl:col-span-1">
          <div className="flex items-start justify-between ">
            <div className="flex flex-col">
              <h1 className="text-left font-noto text-3xl font-semibold text-[#202124] dark:text-[#383b41] md:text-3xl">Contact</h1>
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
        {/* <div className=" align-center col-span-full row-span-1 flex flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb]  bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#1d0018] sm:col-span-2 lg:col-span-2 2xl:col-span-2 3xl:col-span-1 ">
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
        </div> */}

        <div className="align-center col-span-full flex shrink-0 flex-col items-center justify-center rounded-2xl border-2 border-[#ebebeb]  bg-[#f1f0ee] p-3.5 text-center transition-all hover:p-0 hover:transition-all dark:bg-[#edeeef] dark:hover:border-[#171717] dark:hover:bg-[#1d0018] sm:col-span-2 3xl:col-span-1">
          <div className=" w-full  flex-1 flex-wrap overflow-hidden rounded-xl">
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
      </div>
    </div>
  )
}

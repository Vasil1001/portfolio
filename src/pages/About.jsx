import React from 'react'

export default function About() {
  return (
    <div>
      <div className="bg-gradient-to-b from-green-50 to-green-100">
        <header className="">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img className="h-8 w-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg" alt="" />
                </a>
              </div>

              <button
                type="button"
                className="inline-flex border border-black p-1 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
              >
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              <div className="ml-auto hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                  {' '}
                  Features{' '}
                </a>

                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                  {' '}
                  Solutions{' '}
                </a>

                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                  {' '}
                  Resources{' '}
                </a>

                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                  {' '}
                  Pricing{' '}
                </a>

                <div className="h-5 w-px bg-black/20"></div>

                <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80">
                  {' '}
                  Log in{' '}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center border-2 border-black px-5 py-2.5 text-base font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white focus:bg-black focus:text-white"
                  role="button"
                >
                  {' '}
                  Try for free{' '}
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Collaborate remotely, with
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Postcrafts.</h1>
                  </div>
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center bg-orange-500 px-10 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    {' '}
                    Start exploring{' '}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="mt-6 inline-flex items-center text-base font-semibold transition-all duration-200 hover:opacity-80 sm:mt-0"
                  >
                    <svg className="mr-3 h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        fill="#F97316"
                        stroke="#F97316"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch video
                  </a>
                </div>
              </div>

              <div>
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

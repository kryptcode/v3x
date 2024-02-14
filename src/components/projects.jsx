import { darkModeState } from '@/atoms'
import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useRecoilState } from 'recoil'
import data from '../data.json'


const Projects = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  const [listType, setListType] = useState("grid")

  return (
    <div>
        <div className="w-[90%] mx-auto  pb-24 group">
          <div className="flex items-center space-x-3  mb-10 ">
            <h3 className={`${darkMode && 'text-[#d1bfa7] '} text-5xl md:text-6xl lg:text-9xl font-bold flex-shrink-0`}>Projects.</h3>
            <div className={`${darkMode ? 'bg-[#d1bfa7] ' : 'bg-[#222]'} h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`} />
          </div>

          <h6 className="mb-10 text-3xl">
            These are some of the projects I've built or worked on:
          </h6>

          {/* <div className='hidden lg:flex justify-end items-center mb-4'>
            <div className={`flex items-center`}>
              <div className={`${darkMode ? 'bg-[#d1bfa7] text-[#222]' : 'text-[#d1bfa7] bg-[#222]'} ${listType === "grid" && "opacity-30"} transition-all ease-linear duration-300 p-2`} onClick={() => setListType('carousel')}>
                <VertGridSvg />
              </div>
              <div className={`${darkMode ? 'bg-[#d1bfa7] text-[#222]' : 'text-[#d1bfa7] bg-[#222]'} ${listType === "carousel" && "opacity-30"} transition-all ease-linear duration-300 p-2`} onClick={() => setListType('grid')}>
                <GridSvg />
              </div>
            </div>
          </div> */}
                <div className="hidden lg:block px-16 transition-all ease-linear duration-300">
                <Carousel>
                  <CarouselContent>
                    {
                      data.map((item) => (
                        <CarouselItem key={item.bg} className='md:basis-1/2 lg:basis-1/3'>
                          <div className={`${darkMode ? 'border-[#d1bfa7]' : 'border-[#222] '} h-full border`}>
                          <div>
                          <img src={item.img} alt={item.name} />
                        </div>
                        <div className={`${darkMode ? 'hover:bg-[#d1bfa7] hover:text-[#222] ' : 'hover:bg-[#222] hover:text-[#d1bfa7]'} transition-all ease-in-out duration-500 p-8 py-16`}>
                          <div className="h-auto lg:h-[40vh] ">
                            <h5 className="text-2xl font-semibold font-mont mb-6">{item.name} </h5>

                            <p className="mb-5">
                              {item.description}
                            </p>

                            <div className={` py-2  flex flex-wrap gap-5 mb-8`}>
                              {
                                item.technologies.map((foo, index) => (
                                  <img key={index} className={`${darkMode && 'bg-white/20 rounded-lg p-1'} h-10 w-10 `} src={foo} />
                                ))
                              }
                            </div>
                          </div>

                          <div className='flex space-x-3 items-center'>
                          {
                            item.code_url && (
                            <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                              <Arrow />
                              <a href={item.code_url} target='_blank' >
                                View Code
                              </a>
                            </button>
                            )
                          }
                          
                          <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                            <Arrow />
                            <a href={item.live_url} target='_blank' >
                              Live Demo
                            </a>
                          </button>
                          </div>

                        </div>
                          </div>
                        </CarouselItem>
                      ))
                    }
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                </div>
                <div className='grid lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all ease-linear duration-300'>
                  {
                    data.map((item, index) => (
                      <div key={index} className={`${darkMode ? 'border-[#d1bfa7]' : 'border-[#222] '} h-full border`}> 
                        <div>
                          <img src={item.img} alt={item.name} />
                        </div>
                        <div className={`${darkMode ? 'hover:bg-[#d1bfa7] hover:text-[#222] ' : 'hover:bg-[#222] hover:text-[#d1bfa7]'} transition-all ease-in-out duration-500 p-8 py-16`}>
                          <div className="h-auto lg:h-[40vh] ">
                            <h5 className="text-2xl font-semibold font-mont mb-6">{item.name} </h5>

                            <p className="mb-5">
                              {item.description}
                            </p>

                            <div className={` py-2  flex flex-wrap gap-5 mb-8`}>
                              {
                                item.technologies.map((foo, index) => (
                                  <img key={index} className={`${darkMode && 'bg-white/20 rounded-lg p-1'} h-10 w-10 `} src={foo} />
                                ))
                              }
                            </div>
                          </div>

                          <div className='flex space-x-3 items-center'>
                          {
                            item.code_url && (
                            <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                              <Arrow />
                              <a href={item.code_url} target='_blank' >
                                View Code
                              </a>
                            </button>
                            )
                          }
                          
                          <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                            <Arrow />
                            <a href={item.live_url} target='_blank' >
                              Live Demo
                            </a>
                          </button>
                          </div>

                        </div>
                      </div>
                    ))
                  }
                </div>
        </div>
    </div>
  )
}

const Arrow = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    )
  }

  const GridSvg = () => {
    return (
      <svg fill="currentColor" width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 32h-10c-1.105 0-2-0.895-2-2v-10c0-1.105 0.895-2 2-2h10c1.105 0 2 0.895 2 2v10c0 1.105-0.895 2-2 2zM30 20h-10v10h10v-10zM30 14h-10c-1.105 0-2-0.896-2-2v-10c0-1.105 0.895-2 2-2h10c1.105 0 2 0.895 2 2v10c0 1.104-0.895 2-2 2zM30 2h-10v10h10v-10zM12 32h-10c-1.105 0-2-0.895-2-2v-10c0-1.105 0.895-2 2-2h10c1.104 0 2 0.895 2 2v10c0 1.105-0.896 2-2 2zM12 20h-10v10h10v-10zM12 14h-10c-1.105 0-2-0.896-2-2v-10c0-1.105 0.895-2 2-2h10c1.104 0 2 0.895 2 2v10c0 1.104-0.896 2-2 2zM12 2h-10v10h10v-10z"></path>
      </svg>
    )
  }

  const VertGridSvg = () => {
    return (
      <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 3.5H10.5V20.5H3.5V3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.5 3.5H20.5V20.5H13.5V3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }

export default Projects
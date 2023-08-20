import React, { useRef, useState } from 'react'
import { darkModeState } from '../../atoms'
import { useRecoilValue } from 'recoil'
import Arrow from '../custom/Arrow'
import { Link } from 'react-router-dom';
import { HiBars2 } from 'react-icons/hi2'
import { FaTimes } from 'react-icons/fa'

const Card = ({ project }) => {
    const [scrollStarted, setscrollStarted] = useState(false)
    const darkMode = useRecoilValue(darkModeState)
    const bottomEl = useRef(null)
    const topEl = useRef(null)
                
    const scrollToBottom = () => {
        bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        topEl?.current?.scrollIntoView({ behavior: 'smooth' });
    };
    function scrolling() {
        setscrollStarted(!scrollStarted)
        if(!scrollStarted) {
            scrollToTop()
        } else {
            scrollToBottom()
        }
    }

  return (
    <div className={`flex flex-row ${project.rev && 'flex-row-reverse'} mb-10 `}>
        <div className={`flex-1  px-5 md:px-0`}>
            <div 
                className='hidden md:block h-[40vh] overflow-y-scroll scrollbar-none ' 
                // onClick={scrolling}
            >
                <div ref={topEl}  name={'scrolltopId'}></div>
                <img loading='lazy' src={project.img}  className={`${!darkMode && 'shadow-xl shadow-black/50'} transition-all ease-in-out duration-300 animate__animated animate__zoomIn`} alt="" />
                <div ref={bottomEl} name={'scrollId'}></div>
            </div>
                  <div className='md:hidden h-[35vh] py-1 overflow-y-hidden ' >
                    <img loading='lazy' src={project.img}  className={`${!darkMode && 'shadow-xl shadow-black/50'} transition-all ease-in-out duration-300 animate__animated animate__zoomIn rounded-xl`} alt="" />
                  </div>
                  <div>
                    <p className='text-2xl mt-6 font-semibold'>
                      {project.name}
                    </p>
                    <div className='space-x-5 underline my-4'>
                    {
                      project.techs.map((foo, index) => (
                        <span key={index}>
                          {foo}
                        </span>
                      ))
                    }
                    </div>
                    <div className='flex space-x-3 items-center'>
                      <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                        <Arrow />
                        <a href={project.code_url} target='_blank' >
                          View Code
                        </a>
                      </button>
                      
                      <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                        <Arrow />
                        <a href={project.live_url} target='_blank' >
                          Live Demo
                        </a>
                      </button>
                    </div>
                  </div>
                </div>

        <div className='flex-1'>

        </div>
    </div>
  )
}

export default Card
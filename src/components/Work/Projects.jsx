import { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import data from '../../data.json'
import 'animate.css';
import { scroller, Events, animateScroll as scroll } from 'react-scroll'
import Card from './Card';
import { Link } from 'react-router-dom';

const Projects = () => {
    const darkMode = useRecoilValue(darkModeState)
    // const [showSections, setShowSections] = useState(false)

//   const [project, setProject] = useState(null)

  
  return (
    <div className={`${darkMode ? 'bg-[#111] text-white' : 'bg-[#d1bfa7]'} h-screen overflow-y-scroll px-5  flex-[7] pb-11 pt-7`}>
        <h2 className='text-7xl font-bold mb-6'>
                Work
        </h2>

        <div className='mb-5'>
            {
                data.map((project, index) => {
                    return (
                        <div key={index}>
                            <Card project={project} />
                        </div>
                )})
            }
        </div>



        <div className=' text-[3.5rem] md:text-[4.5rem] leading-none font-bold w-[90%] mx-auto md:w-full hidden md:flex flex-col md:justify-end md:items-end px-5 pb-5 animate__animated animate__fadeInRight '>
              <div className='space-y-5 md:space-y-7'>

              <div className='group transition-all duration-300 ease-in-out'>
                <Link to='/about' className=''>
                  <div>
                    <span className='text-2xl'>
                    01. {' '}
                    </span>
                    <span className={`${darkMode && 'text-white '}`}>
                    About
                    </span>
                  </div>
                  <div className="h-[1px] md:h-[2.5px] w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
                </Link>
              </div>

              <div className='group transition-all duration-300 ease-in-out'>
              <Link to='/contact' className=''>
                <div>
                <span className='text-2xl'>
                  03. {' '}
                  </span>
                  <span className='space-span'>
                  CONTACT
                  </span>
                </div>
                <div className="h-[1px] md:h-[2.5px] w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
              </Link>
              </div>
              </div>
            </div>
    </div>
  )
}

export default Projects
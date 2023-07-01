import { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import data from '../../data.json'
import 'animate.css';
import Arrow from '../custom/Arrow'
import { Link } from 'react-router-dom';

const Main = () => {
  const darkMode = useRecoilValue(darkModeState)
  const [project, setProject] = useState(null)
  const [showSections, setShowSections] = useState(false)

  const bottomEl = useRef(null)

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
  };



  

  return (
    <div className={`${darkMode ? 'bg-[#111] text-white/80' : 'bg-[#d1bfa7]'} h-screen  flex-[7] flex flex-col md:flex-row md:items-end pb-11`}>
        <div className='md:flex-1 transition-all ease-in-out duration-300 relative'>
          {
            project && (
                <div className={`  px-5 md:px-0`}>
                  <div className='' onMouseOver={scrollToBottom}>
                    <img src={project.img}  className={`${!darkMode && 'shadow-xl shadow-black/50'} rounded-3xl transition-all ease-in-out duration-300 animate__animated animate__zoomIn`} alt="" />
                    <div ref={bottomEl}></div>
                  </div>
                  <div>
                    <p className='text-2xl mt-6 font-semibold'>
                      {project.name}
                    </p>
                    <div className='space-x-5 underline my-4'>
                    {
                      project.techs.map(foo => (
                        <span>
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
              )
          }
        </div>

        <div className='md:flex-1 pt-10 px-5 md:px-12'>
          {
            showSections ? (
              <div className='md:flex-[3] text-[3.5rem] md:text-[4.5rem] leading-none font-bold w-[90%] mx-auto md:w-full hidden md:flex flex-col md:justify-end md:items-center pb-5 animate__animated animate__fadeInRight '>
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
            ) : 
            (
              <div className='space-y-4 overflow-y-scroll scrollbar-thin scroll-smooth scrollbar-thumb-rounded-xl scrollbar-thumb-slate-700 h-[50vh] md:h-[90vh]'>
            {
              data.map(item => {
                function handleHover(e) {
                  
                  if(e.target.textContent === item.name) {
                    setProject(item)
                  }
                }

                return (
                <div 
                  key={item.img} 
                  className='p-1 text-[3rem] md:text-[4.2rem] leading-none font-bold group transition-all duration-300 ease-in-out animate__animated animate__fadeInRight' 
                  onMouseOver={handleHover}
                  onClick={handleHover}
                >
                  <div className='space-x-2'>
                  <span className='text-2xl'>
                  {`0${item.id} `}
                  </span>
                  <span  className='space-span'>
                  {item.name}
                  </span>
                  </div>
                  <div className="h-1 w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
                </div>
              )})
            } 
          </div>
            )
          }

          

          <div className='text-lg absolute bottom-5 right-5 text-[#6a139f] underline ' onClick={() => setShowSections(!showSections)} >
            {
              showSections ? 'show projects' : 'show sections'
            }
          </div>
      </div>
    </div>
  )
}

export default Main
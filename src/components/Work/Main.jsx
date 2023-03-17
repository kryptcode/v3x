import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import data from '../../data.json'
import 'animate.css';
import Arrow from '../custom/Arrow'

const Main = () => {
  const darkMode = useRecoilValue(darkModeState)
  const [project, setProject] = useState(null)

  

  return (
    <div className={`${darkMode ? 'bg-[#111] text-white/80' : 'bg-[#d1bfa7]'} h-screen  flex-[7] flex flex-col md:flex-row items-center pb-11`}>
        <div className='md:flex-1 transition-all ease-in-out duration-300'>
          {
            project && (
                <div className={`  px-5 md:px-0`}>
                  <img src={project.img} className={`${!darkMode && 'shadow-xl shadow-black/50'} rounded-3xl transition-all ease-in-out duration-300 animate__animated animate__zoomIn`} alt="" />
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
                    <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                      <Arrow />
                      <a href={project.code_url} target='_blank' >
                        Code Url
                      </a>
                    </button>
                  </div>
                </div>
              )
          }
        </div>

        <div className='md:flex-1 pt-10 px-12'>
          {/* <h5 className='text-7xl font-bold space-span'>WORK</h5> */}

          <div className='space-y-4 overflow-scroll h-[50vh] md:h-[90vh] work '>
            {
              data.map(item => {
                function handleHover(e) {
                  
                  if(e.target.textContent === item.name) {
                    setProject(item)
                  }
              
                  console.log(project);
                }

                return (
                <div 
                  key={item.id} 
                  className='p-2 text-[3rem] md:text-[6rem] leading-none font-bold group transition-all duration-300 ease-in-out animate__animated animate__fadeInRight' 
                  onMouseOver={handleHover}
                >
                  <a href={item.live_url} className=''>
                  <div>
                  <span className='text-2xl'>
                  {`0${item.id} `}
                  </span>
                  <span  className='space-span'>
                  {item.name}
                  </span>
                  </div>
                  <div className="h-1 w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
                  </a>
                </div>
              )})
            } 
          </div>
      </div>
    </div>
  )
}

// onMouseLeave={() => setProject(null)}

export default Main
import { darkModeState } from '@/atoms'
import React from 'react'
import { FaCode } from 'react-icons/fa6'
import { useRecoilState } from 'recoil'

const Hero = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div>
        <div className="w-[90%] mx-auto flex py-20 flex-col md:flex-row ">
          <div className="flex-1 pb-16">
            <h2 className="text-6xl md:text-[5.8rem] md:pt-20 leading-none font-semibold mb-7">
              Hi, I&apos;m <span className={`${darkMode ? 'text-[#d1bfa7]' : 'font-bold'}`}>Koye</span>.
            </h2>
            
            <h6 className={`${darkMode && 'text-[#d1bfa7]'} mb-4 text-2xl font-semibold font-mont`}>
              Web Developer 
              {/* | Mobile Developer  */}
            </h6>
            <p className="text-2xl md:pr-10 mb-7">
            I'm a web developer and software engineer passionate about crafting elegant solutions with cutting-edge technology. I strive to deliver high-quality, scalable, and user-friendly web applications that exceed client expectations
            </p>

            <div>
              <a href="mailto:adeyombokehd@gmail.com" className={`${darkMode ? 'border-[#d1bfa7] text-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]  ' : 'border-[#222] hover:bg-[#222] hover:text-[#d1bfa7] '} transition-all ease-linear duration-300 hover:tracking-[0.25em] text-center h-[7vh] w-60 border-2 flex justify-center items-center font-semibold font-mont uppercase`}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex-1 justify-center items-center hidden md:flex relative ">
            <FaCode className={`${darkMode && 'text-[#d1bfa7]'} text-[14rem] `} />
            {/* <div className="w-2/3"> */}
              {/* <img className="w-full" src="https://media.tenor.com/daeUjvb2KGYAAAAi/sunset-sun.gif" alt="" /> */}
              {/* <FaCode className={`${darkMode ? 'text-[#d1bfa7]' : ''} absolute top-10 left-1/3 text-4xl md:text-7xl animate-pulse`} />

              <FaReact className={`${darkMode ? 'text-[#d1bfa7]' : ''} absolute top-1/3 right-1/4 text-4xl md:text-7xl animate-pulse`} />

              <FaHeadphones className={`${darkMode ? 'text-[#d1bfa7]' : ''} absolute top-1/2 left-1/3 text-4xl md:text-7xl`} />

              <FaGamepad className={`${darkMode ? 'text-[#d1bfa7]' : ''} absolute bottom-10 left-1/2 text-4xl md:text-7xl`} /> */}
            {/* </div> */}
          </div>
        </div>
    </div>
  )
}

export default Hero
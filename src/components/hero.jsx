import { darkModeState } from '@/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'

const Hero = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div>
        <div className="w-[90%] mx-auto flex py-32 flex-col md:flex-row ">
          <div className="flex-1 pb-16">
            <h2 className="text-6xl md:text-[5.8rem] md:pt-20 leading-none font-semibold mb-7">
              Hi, I&apos;m <span className={`${darkMode ? 'text-[#d1bfa7]' : 'font-bold'}`}>Koye</span>.
            </h2>
            <p className="text-2xl md:pr-10 mb-7">
            The friendly neighborhood web developer who's here to bring your online dreams to life. Imagine your ideas taking shape on the web – that's where my passion thrives!
            </p>

            <div>
              <a href="mailto:adeyombokehd@gmail.com" className={`${darkMode ? 'text-[#d1bfa7] border-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]' : 'border-[#222] hover:bg-[#222] hover:text-[#d1bfa7] '} font-medium border-2 px-6 hover:px-10 py-2 transition-all ease-in-out duration-500 font-mont uppercase`}>
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex-1 justify-center items-center hidden md:flex relative ">
            <div className="w-2/3">
              <img className="w-full" src="https://media.tenor.com/daeUjvb2KGYAAAAi/sunset-sun.gif" alt="" />
              {/* <FaCode className={`${darkMode ? 'text-[#d1bfa7]' : ''} absolute top-10 left-1/3 text-4xl md:text-7xl animate-pulse`} />

              <FaReact className={`${darkMode ? 'text-[#d1bfa7]' : ''} absolute top-1/3 right-1/4 text-4xl md:text-7xl animate-pulse`} />

              <FaHeadphones className={`${darkMode ? 'text-[#d1bfa7]' : ''} absolute top-1/2 left-1/3 text-4xl md:text-7xl`} />

              <FaGamepad className={`${darkMode ? 'text-[#d1bfa7]' : ''} absolute bottom-10 left-1/2 text-4xl md:text-7xl`} /> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
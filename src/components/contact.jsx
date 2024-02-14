import { darkModeState } from '@/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'
import { FaCode, FaGamepad, FaGithub, FaHeadphones, FaLinkedinIn, FaReact } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const Contact = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div>
        <div className="w-[90%] mx-auto  pb-24 group">
          <div className="flex items-center space-x-3  mb-10 ">
            <h3 className={`${darkMode && 'text-[#d1bfa7] '} text-5xl md:text-6xl lg:text-9xl font-bold flex-shrink-0`}>Contact me.</h3>
            <div className={`${darkMode ? 'bg-[#d1bfa7] ' : 'bg-[#222]'} h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`} />
          </div>

          <div className="hidden lg:flex gap-5 font-mont">
            <a href="https://github.com/kryptcode" target="_blank" className={`${darkMode ? 'border-[#d1bfa7] text-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]  ' : 'border-[#222] hover:bg-[#222] hover:text-[#d1bfa7] '} transition-all ease-linear duration-300 hover:tracking-[0.25em] flex-1 text-center h-[10vh] border-2 flex justify-center items-center font-semibold  `}>
              <h5>GITHUB</h5>
            </a>
            <a href="https://linkedin.com/in/koye-adeyombo-a5ab6417a" target="_blank" className={`${darkMode ? 'border-[#d1bfa7] text-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]  ' : 'border-[#222] hover:bg-[#222] hover:text-[#d1bfa7] '} transition-all ease-linear duration-300 hover:tracking-[0.25em] flex-1 text-center h-[10vh] border-2 flex justify-center items-center font-semibold  `}>
              <h5>LINKEDIN</h5>
            </a>
            <a href="mailto:adeyombokehd@gmail.com" className={`${darkMode ? 'border-[#d1bfa7] text-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]  ' : 'border-[#222] hover:bg-[#222] hover:text-[#d1bfa7] '} transition-all ease-linear duration-300 hover:tracking-[0.25em] flex-1 text-center h-[10vh] border-2 flex justify-center items-center font-semibold  `}>
              <h5>EMAIL</h5>
            </a>
          </div>

          <div className="lg:hidden flex text-5xl space-x-9 pb-10">
            <a href="https://github.com/kryptcode" target="_blank" className=" text-[#6cc644] ">
              <FaGithub />
              </a>
              <a href="https://linkedin.com/in/koye-adeyombo-a5ab6417a" target="_blank" className="text-[#0a66c2]  ">
                <FaLinkedinIn />
              </a>
              <a href="mailto:adeyombokehd@gmail.com" className="text-[#ea4335] ">
              <IoIosMail />
              </a>
          </div>

        </div>
    </div>
  )
}

export default Contact
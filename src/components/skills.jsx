import { darkModeState } from '@/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'

const Skills = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div>
        <div className="w-[90%] mx-auto  pb-24 group">
          <div className="flex items-center space-x-3  mb-10 ">
            <h3 className={`${darkMode && 'text-[#d1bfa7] '} text-5xl md:text-6xl lg:text-9xl font-bold flex-shrink-0`}>Skills.</h3>
            <div className={`${darkMode ? 'bg-[#d1bfa7] ' : 'bg-[#222]'} h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`} />
          </div>


          <div className="text-xl mb-24">
            <div className={`${darkMode ? "border-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]" : "border-[#222] hover:bg-[#222] hover:text-[#d1bfa7]  "} flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-10 transition-all ease-linear duration-300 group`}>
              <h2 className={`${darkMode ? 'text-[#d1bfa7] group-hover:text-[#222] ' : ' '} text-3xl font-semibold flex-1`}>01 - frontend</h2>
              <div className="grid grid-cols-2 gap-y-3 flex-[3]">
                <div>HTML, CSS</div>
                <div>sass</div>
                <div>JavaScript & TypeScript</div>
                <div>React & Vite</div>
                <div>Next.js</div>
                <div>PHP</div>
                <div>Laravel</div>
                <div>styled-components</div>
                <div>TailwindCSS</div>
                <div>State Management: Zustand, Recoil etc</div>
              </div>
            </div>

            <div className={`${darkMode ? "border-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]" : "border-[#222] hover:bg-[#222] hover:text-[#d1bfa7]  "} my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-10 transition-all ease-linear duration-300 group`}>
              <h2 className={`${darkMode && 'text-[#d1bfa7] group-hover:text-[#222]'} text-3xl font-semibold flex-1`}>02 - backend</h2>
              <div className="grid grid-cols-2 gap-y-3 flex-[3] ">
                <div>Node.js</div>
                <div>Firebase</div>
                <div>Content Management: Sanity & Strapi</div>
                <div>Prisma</div>
                <div>MySQL</div>
                <div>MongoDB</div>
                <div>Laravel</div>
                <div>Express</div>
              </div>
            </div>

            <div className={`${darkMode ? "border-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]" : "border-[#222] hover:bg-[#222] hover:text-[#d1bfa7]  "} my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-10 transition-all ease-linear duration-300 group`}>
              <h2 className={`${darkMode && 'text-[#d1bfa7] group-hover:text-[#222]'} text-3xl font-semibold flex-1`}>03 - other</h2>
              <div className="grid grid-cols-2 gap-y-3 flex-[3] ">
                <div>Version Control: Git</div>
                <div>Restful APIs</div>
                <div>Thirdweb</div>
                <div>Figma</div>
              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Skills
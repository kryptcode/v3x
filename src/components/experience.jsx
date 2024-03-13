import { darkModeState } from '@/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'

const Experience = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div>
        <div className="w-[90%] mx-auto  pb-24 group mb-12">
          <div className="flex items-center space-x-3  mb-10 ">
            <h3 className={`${darkMode && 'text-[#d1bfa7] '} text-5xl md:text-6xl lg:text-9xl font-bold flex-shrink-0`}>Experience.</h3>
            <div className={`${darkMode ? 'bg-[#d1bfa7] ' : 'bg-[#222]'} h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`} />
          </div>

          <div>
          <div
              className={`${darkMode ? "border-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]" : "border-[#222] hover:bg-[#222] hover:text-[#d1bfa7]  "} my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-10 transition-all ease-linear duration-300 group`}
            >
              <div
                className={`${darkMode && 'text-[#d1bfa7] group-hover:text-[#222]'} font-medium flex-1 text-xl `}
              >
                <span>MAY '23</span> - <span>MAR '24</span>{" "}
              </div>
              <div className="flex-[2.5] ">
                <h4
                  className={`${darkMode && 'text-[#d1bfa7] group-hover:text-[#222]'} text-3xl font-semibold mb-4`}
                >
                  Software Engineer . QClose
                </h4>
                <div className="text-lg">
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="">
                      Collaborated with UX/UI designers to translate wireframes
                      and mockups into interactive web interfaces.
                    </li>
                    <li className="">
                      Implemented cross-browser compatibility and optimized
                      website performance for fast loading times.
                    </li>
                    <li className="">
                      Utilized frameworks such as Nextjs and Laravel to build dynamic and data-driven web applications.
                    </li>
                    <li className="">
                      Integrated RESTful APIs to fetch and display real-time
                      data, enhancing the overall user experience.
                    </li>
                    <li className="">
                      Implemented and maintained version control using Git and
                      GitHub, ensuring seamless code collaboration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          <div
              className={`${darkMode ? "border-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]" : "border-[#222] hover:bg-[#222] hover:text-[#d1bfa7]  "} my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-10 transition-all ease-linear duration-300 group`}
            >
              <div
                className={`${darkMode && 'text-[#d1bfa7] group-hover:text-[#222]'} font-medium flex-1 text-xl `}
              >
                <span>MAR '22</span> - <span>OCT '22</span>{" "}
              </div>
              <div className="flex-[2.5] ">
                <h4
                  className={`${darkMode && 'text-[#d1bfa7] group-hover:text-[#222]'} text-3xl font-semibold mb-4`}
                >
                  Frontend Developer . Zeta Tech
                </h4>
                <div className="text-lg">
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="">Assisted in the development of web applications.</li>
                    <li className="">Contributed to the optimization of website performance and responsiveness.</li>
                    <li className="">Worked closely with other developers to troubleshoot and debug code issues.</li>
                    <li className="">Gained proficiency in frontend technologies and improved coding skills.</li>
                  </ul>
                </div>
              </div>
            </div>

          <div
              className={`${darkMode ? "border-[#d1bfa7] hover:bg-[#d1bfa7] hover:text-[#222]" : "border-[#222] hover:bg-[#222] hover:text-[#d1bfa7]  "} my-5 flex flex-col md:flex-row gap-10 rounded-xl border-[2.5px]  border-l-[5px] border-b-[5px] p-5 py-10 transition-all ease-linear duration-300 group`}
            >
              <div
                className={`${darkMode && 'text-[#d1bfa7] group-hover:text-[#222]'} font-medium flex-1 text-xl `}
              >
                <span>MAR '21</span> - <span>PRESENT</span>{" "}
              </div>
              <div className="flex-[2.5] ">
                <h4
                  className={`${darkMode && 'text-[#d1bfa7] group-hover:text-[#222]'} text-3xl font-semibold mb-4`}
                >
                  Web Developer . Freelance
                </h4>
                <div className="text-lg">
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="">Collaborated with clients to understand project requirements and goals.</li>
                    <li className="">Designed and developed custom websites and web applications from scratch.</li>
                    <li className="">Implemented responsive designs, ensuring a seamless user experience on all devices.</li>
                    <li className="">Utilized frontend frameworks (React, Next.js) to build interactive and dynamic user interfaces.</li>
                    <li className="">Integrated RESTful APIs and third-party services to fetch and display data.</li>
                    <li className="">Completed projects within budget and deadlines, earning positive client feedback.</li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Experience

import { darkModeState } from '@/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'

const AboutMe = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <div>
        <div className="w-[90%] mx-auto py-24 group mb-44 ">
          <div className="flex items-center space-x-3  mb-10 ">
            <h3 className={`${darkMode && 'text-[#d1bfa7] '} text-5xl md:text-6xl lg:text-9xl font-bold flex-shrink-0`}>About Me.</h3>
            <div className={`${darkMode ? 'bg-[#d1bfa7] ' : 'bg-[#222]'} h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`} />
          </div>

          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex-1 flex justify-center items-center">
              {
                darkMode ? (
                  <img src="https://i.ibb.co/GtYwVwj/astronaut-svgrepo-com.png" className="w-1/2 " alt="" />
                  ) : (
                    <img src="https://i.ibb.co/kJJYmc4/astronaut-svgrepo-com-1.png" className="w-1/2" alt="" />
                    // <img src="https://i.ibb.co/2vnCMYs/5f492fe268ecc70004ae70e9.png" className="w-1/2 " alt="" />
                    )
              }
            </div>

            <div className="flex-1">
              <p className="text-xl mb-8">
              Hello! I'm Koye, a dedicated web developer with a passion for crafting digital experiences that stand out. Whether you're an entrepreneur with a startup idea or an established business looking to enhance your online presence, I'm here to transform your vision into reality.
              </p>

              <p className="text-xl mb-3">
              I embarked on my web development journey with a mission to bring innovation and creativity to the digital world. Over the years, I've had the privilege of working on a diverse range of projects, each contributing to my growth and expertise.
              </p>

              <div>
                <h6 className="text-xl font-semibold mb-2">What I&apos;ve been up to:</h6>
                <ul className="list-disc pl-5 space-y-4">
                  <li className="text-sm">
                    Wearing multiple hats as a full-stack engineer at QClose, currently spearheading their inventory management system while contributing to various applications.
                  </li>
                  <li className="text-sm">Learning React Native.</li>
                  <li className="text-sm ">Getting deeper into Prisma and Nodejs.</li>
                  <li className="text-sm">Working on MediVault (A Web-Based  Medical Records Application). </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe
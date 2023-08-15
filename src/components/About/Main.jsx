import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Js from '../../assets/javascript.png'
import Nextjs from '../../assets/nextjs.png'
import Nodejs from '../../assets/nodejs.png'
import Twind from '../../assets/tailwind.png'
import Reactjs from '../../assets/react.png'
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'

const Main = () => {
    const darkMode = useRecoilValue(darkModeState)

  return (
    <div className='flex-[4] flex flex-col md:flex-row  px-5 justify-between items-center'>
        <div className='md:flex-[4] text-lg pt-10 pb-5   '>
            <h2 className='text-7xl font-bold mb-6'>
                About
            </h2>

            <div className='tracking-wide space-y-5'>
                <p>
                Hi! I'm Koye, a frontend developer based in Abuja, Nigeria. I strive to construct web applications that are appealing in design while maintaining their functionality. I've been working as a frontend developer for over a year. I always build projects to hone my skills.
                </p>

                <p>
                Currently, I'm pursuing a bachelor's degree in Computer Science and Economics. I am interested in JavaScript technologies. Some frontend technologies that I have worked with and would like to work with in the future are Next.Js, React, Recoil, Thirdweb SDK, Styled components, Tailwind CSS, Firebase, Vite etc.
                </p>

                <p>
                I'm actively seeking roles where I can broaden my knowledge and utilize my skills.
                </p>
            </div>

            {/* <div>
                <h5 className='mt-4 mb-2 text-2xl font-semibold'>
                    Experience
                </h5>
                <ul>
                    <li>
                        2 years + experience in Web Development
                    </li>
                </ul>
            </div> */}

            <div>
                <h5 className='mt-7 mb-4 text-3xl font-semibold'>
                    My Backpack
                </h5>

                <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6'>
                    <div className='space-y-2 text-sm md:flex-[1.8] '>
                        <h6 className='text-xl font-medium underline'>Frontend</h6>
                        <div>HTML</div>
                        <div>CSS & CSS Frameworks:Tailwind CSS, framer-motion, styled-components etc</div>
                        <div>JavaScript & TypeScript</div>
                        <div>React</div>
                        <div>Vite</div>
                        <div>Next.js</div>
                        <div>State Management Libraries: Redux, Recoil & Zustand</div>
                        <div>Sass</div>
                    </div>
                    
                    <div className='space-y-2 text-sm md:flex-1'>
                        <h6 className='text-xl font-medium underline'>Backend</h6>
                        <div>Node.js</div>
                        <div>Firebase</div>
                    </div>

                    <div className='space-y-2 text-sm md:flex-1'>
                    <h6 className='text-xl font-medium underline'>Others</h6>
                    <div>Version control: Git</div>
                    <div>Restful APIs</div>
                    <div>Performance Optimization</div>
                    <div>thirdweb</div>
                    </div>
                </div>

                {/* <div className='grid-cols-2 md:grid-cols-4 grid gap-5 text-center font-bold text-sm'>
                    <div className={`${darkMode ? 'bg-[#111] shadow-gray-200/5' : 'bg-[#d1bfa7] shadow-black/5'} flex flex-col rounded-lg justify-center items-center space-y-1 py-7 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Html} alt="" />
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-gray-200/5' : 'bg-[#d1bfa7] shadow-black/5'} flex flex-col rounded-lg justify-center items-center space-y-1 py-7 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Css} alt="" />
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-gray-200/5' : 'bg-[#d1bfa7] shadow-black/5'} flex flex-col rounded-lg justify-center items-center space-y-1 py-7 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Js} alt="" />
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-gray-200/5' : 'bg-[#d1bfa7] shadow-black/5'} flex flex-col rounded-lg justify-center items-center space-y-1 py-7 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Reactjs} alt="" />
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-gray-200/5' : 'bg-[#d1bfa7] shadow-black/5'} flex flex-col rounded-lg justify-center items-center space-y-1 py-7 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Nextjs} alt="" />
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-gray-200/5' : 'bg-[#d1bfa7] shadow-black/5'} flex flex-col rounded-lg justify-center items-center space-y-1 py-7 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Nodejs} alt="" />
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-gray-200/5' : 'bg-[#d1bfa7] shadow-black/5'} flex flex-col rounded-lg justify-center items-center space-y-1 py-7 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Twind} alt="" />
                    </div>

                </div> */}
                {/* HTML and CSS / Javascript / Recoil / React / Thirdweb SDK/ Firebase / Nextjs / Vite / Framer / Typescript */}
            </div>

        </div>
    </div>
  )
}

export default Main

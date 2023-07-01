import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Js from '../../assets/javasCRIPT.png'
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
        <div className='md:flex-[4] text-lg pt-10   '>
            <h2 className='text-7xl font-bold mb-6'>
                About
            </h2>

            <div className='tracking-wide space-y-5 text-base'>
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

            <div>
                <h5 className='my-4 text-4xl font-semibold'>
                    Experience
                </h5>
                <ul>
                    <li>
                        2 years + experience in Web Development
                    </li>
                </ul>
            </div>

            <div>
                <h5 className='my-4 text-4xl font-semibold'>
                    Skills
                </h5>

                <div className='grid-cols-4 grid gap-5 text-center font-bold text-sm py-2'>
                    <div className={`${darkMode ? 'bg-[#111] shadow-white/20' : 'bg-[#d1bfa7] shadow-black/20'} flex flex-col rounded-lg justify-center items-center space-y-1 p-3 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Html} alt="" />
                        <p>HTML</p>
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-white/20' : 'bg-[#d1bfa7] shadow-black/20'} flex flex-col rounded-lg justify-center items-center space-y-1 p-3 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Css} alt="" />
                        <p>CSS</p>
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-white/20' : 'bg-[#d1bfa7] shadow-black/20'} flex flex-col rounded-lg justify-center items-center space-y-1 p-3 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Js} alt="" />
                        <p>Javascript</p>
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-white/20' : 'bg-[#d1bfa7] shadow-black/20'} flex flex-col rounded-lg justify-center items-center space-y-1 p-3 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Reactjs} alt="" />
                        <p>React</p>
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-white/20' : 'bg-[#d1bfa7] shadow-black/20'} flex flex-col rounded-lg justify-center items-center space-y-1 p-3 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Nextjs} alt="" />
                        <p>Next</p>
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-white/20' : 'bg-[#d1bfa7] shadow-black/20'} flex flex-col rounded-lg justify-center items-center space-y-1 p-3 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Nodejs} alt="" />
                        <p>Node</p>
                    </div>
                    <div className={`${darkMode ? 'bg-[#111] shadow-white/20' : 'bg-[#d1bfa7] shadow-black/20'} flex flex-col rounded-lg justify-center items-center space-y-1 p-3 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out tracking-wide`}>
                        <img className='h-24 ' src={Twind} alt="" />
                        <p>Tailwind</p>
                    </div>

                {/* HTML and CSS / Javascript / Recoil / React / Thirdweb SDK/ Firebase / Nextjs / Vite / Framer / Typescript */}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Main

// w-[32rem] h-[32rem]
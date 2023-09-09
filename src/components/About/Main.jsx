// import Html from '../../assets/html.png'
// import Css from '../../assets/css.png'
// import Js from '../../assets/javascript.png'
// import Nextjs from '../../assets/nextjs.png'
// import Nodejs from '../../assets/nodejs.png'
// import Twind from '../../assets/tailwind.png'
// import Reactjs from '../../assets/react.png'
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

            <div className='tracking-wide space-y-5 text-sm'>
                <p>
                    Hello! I'm Koye, a dedicated web developer with a passion for crafting digital experiences that stand out. Whether you're an entrepreneur with a startup idea or an established business looking to enhance your online presence, I'm here to transform your vision into reality.
                </p>

                <p>
                I embarked on my web development journey 4 years ago with a mission to bring innovation and creativity to the digital world. Over the years, I've had the privilege of working on a diverse range of projects, each contributing to my growth and expertise. From small businesses to large corporations, I've helped clients achieve their online goals.
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
                        <div>Content Management: Sanity & Strapi</div>
                    </div>

                    <div className='space-y-2 text-sm md:flex-1'>
                    <h6 className='text-xl font-medium underline'>Others</h6>
                    <div>Version control: Git</div>
                    <div>Restful APIs</div>
                    <div>Performance Optimization</div>
                    <div>Smart Contract Development: Thirdweb</div>
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

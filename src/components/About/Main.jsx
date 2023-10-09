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
            <h2 className={`${darkMode ? 'text-[#999]' : 'text-black'} text-7xl font-bold mb-6 `}>
                About
            </h2>

            <div className='tracking-wide space-y-5 text-sm'>
                <p>
                    Hello! I'm Koye, a dedicated web developer with a passion for crafting digital experiences that stand out. Whether you're an entrepreneur with a startup idea or an established business looking to enhance your online presence, I'm here to transform your vision into reality.
                </p>

                <p>
                I embarked on my web development journey with a mission to bring innovation and creativity to the digital world. Over the years, I've had the privilege of working on a diverse range of projects, each contributing to my growth and expertise. From small businesses to large corporations, I've helped clients achieve their online goals.
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

            <div className='my-7'>
                <h5 className={`${darkMode ? 'text-[#999]' : 'text-black'} text-3xl mb-4 font-semibold`}>
                    Work Experience
                </h5>

                <div>
                    <div className={`${darkMode ? 'border-[#999]' : 'border-black'} flex space-x-4 hover:bg-[] p-2  rounded-xl  border-[2.5px]  border-l-[5px] border-b-[5px] cursor-pointer my-3 mb-7`}>
                        <div className={`${darkMode ? 'text-[#999]' : 'text-black'} font-medium flex-1 text-[#999]`}><span>MAY '23</span> - <span>PRESENT</span> </div>
                        <div className='flex-[2.5] ' >
                            <h4 className={`${darkMode ? 'text-[#999]' : 'text-black'} font-medium mb-2`}>
                            Frontend Engineer . QClose
                            </h4>
                            <div className="text-sm">
                            <ul className="">
                                <li className="list-item list-disc">Collaborated with UX/UI designers to translate wireframes and mockups into interactive web interfaces.</li>
                                <li className="list-item list-disc">Implemented cross-browser compatibility and optimized website performance for fast loading times.</li>
                                <li className="list-item list-disc">Utilized frontend frameworks such as React.js to build dynamic and data-driven web applications.</li>
                                <li className="list-item list-disc">Integrated RESTful APIs to fetch and display real-time data, enhancing the overall user experience.</li>
                                <li className="list-item list-disc">Implemented and maintained version control using Git and GitHub, ensuring seamless code collaboration.</li>
                                <li className="list-item list-disc">Worked closely with backend developers to integrate frontend and backend components, ensuring seamless functionality.</li>
                            </ul>
                            </div>

                        </div>
                    </div>

                    <div className={`${darkMode ? 'border-[#999]' : 'border-black'} flex space-x-4 hover:bg-[] p-2 rounded-xl border-[2.5px]  border-[#444] border-l-[5px] border-b-[5px] cursor-pointer my-3 mb-7`}>
                        <div className={`${darkMode ? 'text-[#999]' : 'text-black'} font-medium flex-1 text-[#444]`}><span>MAR '22</span> - <span>OCT '22</span> </div>
                        <div className='flex-[2.5] ' >
                            <h4 className={`${darkMode ? 'text-[#999]' : 'text-black'} font-medium mb-2 text-[#444]`}>
                            Junior Frontend Developer . Zeta Tech
                            </h4>
                            <div className="text-sm">
                            <ul className="">
                                <li className="list-item list-disc">Assisted in the development of web applications using HTML, CSS, and JavaScript.</li>
                                <li className="list-item list-disc">Contributed to the optimization of website performance and responsiveness.</li>
                                <li className="list-item list-disc">Worked closely with senior developers to troubleshoot and debug code issues.</li>
                                <li className="list-item list-disc">Participated in code reviews and learned coding best practices.</li>
                                <li className="list-item list-disc">Gained proficiency in frontend technologies and improved coding skills.</li>
                            </ul>
                            </div>

                        </div>
                    </div>

                    <div className={`${darkMode ? 'border-[#999]' : 'border-black'} flex space-x-4 hover:bg-[] p-2 rounded-xl border-[2.5px] border-[#444] border-l-[5px] border-b-[5px] cursor-pointer my-3`}>
                        <div className={`${darkMode ? 'text-[#999]' : 'text-black'} font-medium flex-1 text-[#444]`}><span>MAR '21</span> - <span>PRESENT</span> </div>
                        <div className='flex-[2.5] ' >
                            <h4 className={`${darkMode ? 'text-[#999]' : 'text-black'} font-medium mb-2 text-[#444]`}>
                            Frontend Developer . Freelance
                            </h4>
                        <div className="text-sm">
                            <ul className="">
                                <li className="list-item list-disc">Collaborated with clients to understand project requirements and goals.</li>
                                <li className="list-item list-disc">Designed and developed custom websites and web applications from scratch.</li>
                                <li className="list-item list-disc">Implemented responsive designs, ensuring a seamless user experience on all devices.</li>
                                <li className="list-item list-disc">Utilized frontend frameworks (React, Next.js) to build interactive and dynamic user interfaces.</li>
                                <li className="list-item list-disc">Integrated RESTful APIs and third-party services to fetch and display data.</li>
                                <li className="list-item list-disc">Completed projects within budget and deadlines, earning positive client feedback.</li>
                            </ul>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5 className={`${darkMode ? 'text-[#999]' : 'text-black'} mt-7 mb-4 text-3xl font-semibold`}>
                    My Backpack
                </h5>

                <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6'>
                    <div className={`${darkMode ? 'text-[#999]' : 'text-black'} space-y-2 text-sm md:flex-[1.8]`}>
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
                    
                    <div className={`${darkMode ? 'text-[#999]' : 'text-black'} space-y-2 text-sm md:flex-1`}>
                        <h6 className='text-xl font-medium underline'>Backend</h6>
                        <div>Node.js</div>
                        <div>Firebase</div>
                        <div>Content Management: Sanity & Strapi</div>
                    </div>

                    <div className={`${darkMode ? 'text-[#999]' : 'text-black'} space-y-2 text-sm md:flex-1`}>
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

import { useRecoilState, useRecoilValue } from "recoil"
import { darkModeState } from "../atoms"
import Main from "../components/Home/Main"
import Sections from "../components/Home/Sections"
import Sidebar from "../components/Sidebar"
import data from '../data.json'
import 'animate.css'
import AnimatedCursor from "react-animated-cursor"
import { Link } from "react-router-dom"
import LightToggle from "../components/custom/LightToggle"
import { FaCode, FaGamepad, FaGithub, FaHeadphones, FaLinkedinIn, FaReact } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"


// import { Cursor } from "react-creative-cursor"
// import 'react-creative-cursor/dist/styles.css';

function Home() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)


    return (
      <>
      {/* <Particle />  */}
      {
        darkMode ? (
          <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color='255, 255, 255'
          outerAlpha={0.1}
          innerScale={1}
          outerScale={2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#999'
          }}
          outerStyle={{
            border: '3px solid #999'
          }}
        />
        ) : (
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            color='0, 0, 0'
            outerAlpha={0.1}
            innerScale={1}
            outerScale={2}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
            ]}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: '#222'
            }}
            outerStyle={{
              border: '3px solid #222'
            }}
          />
        )
      }
      
      <div className={` ${darkMode ? 'bg-[#222] text-[#fcfcfc] ' : 'bg-[#d1bfa7] '} min-h-screen animate__animated animate__fadeInUp font-montalt`}>
        <div className="w-[90%] mx-auto flex justify-between items-center h-[10vh] ">
          <div className='text-2xl font-bold hover:opacity-75'>
          <Link to='/'>
          KA.  
          </Link>
          </div>

          <div className={`${darkMode ? '' : '' }  font-medium flex items-center space-x-8`}>
            {/* <Link to={'/'} className="group flex flex-col justify-start ">
              <div className={`${darkMode ? 'group-hover:text-[#d1bfa7]' : ''} pr-3 `}>Home</div>
              <div className={`${darkMode ? 'bg-[#d1bfa7]' : 'bg-[#222] '} h-[2px] w-0 group-hover:w-full ease-linear transition-all duration-300`} />
            </Link>
            <Link to={'/about'} className="group flex flex-col justify-start ">
              <div className={`${darkMode ? 'group-hover:text-[#d1bfa7]' : ''} pr-3 `}>About</div>
              <div className={`${darkMode ? 'bg-[#d1bfa7]' : 'bg-[#222] '} h-[2px] w-0 group-hover:w-full ease-linear transition-all duration-300`} />
            </Link>
            <Link to={'/projects'} className="group flex flex-col justify-start ">
              <div className={`${darkMode ? 'group-hover:text-[#d1bfa7]' : ''} pr-3 `}>Projects</div>
              <div className={`${darkMode ? 'bg-[#d1bfa7]' : 'bg-[#222] '} h-[2px] w-0 group-hover:w-full ease-linear transition-all duration-300`} />
            </Link> */}
            <Link to="https://read.cv/koyejo" target="_blank" className="group flex flex-col justify-start ">
              <div className={`${darkMode ? 'group-hover:text-[#d1bfa7]' : ''} pr-3 `}>CV</div>
              <div className={`${darkMode ? 'bg-[#d1bfa7]' : 'bg-[#222] '} h-[2px] w-0 group-hover:w-full ease-linear transition-all duration-300`} />
            </Link>

            <div  className='cursor-pointer hover:opacity-75' onClick={() => setDarkMode(!darkMode)}>
              <LightToggle />
            </div>
          </div>
        </div>

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

        {/* About me */}

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
                  <li className="text-sm">Learning GreenSock.</li>
                  <li className="text-sm ">Getting deeper into Prisma and Nodejs.</li>
                  <li className="text-sm">Working on MediVault (A Web-Based  Medical Records Application). </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Backpack */}
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
              </div>
            </div>

        </div>
        </div>

        {/* Projects */}
        <div className="lg:w-[90%] mx-auto  pb-24 group">
          <div className="flex items-center space-x-3  mb-10 ">
            <h3 className={`${darkMode && 'text-[#d1bfa7] '} text-5xl md:text-6xl lg:text-9xl font-bold flex-shrink-0`}>Projects.</h3>
            <div className={`${darkMode ? 'bg-[#d1bfa7] ' : 'bg-[#222]'} h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`} />
          </div>

          <h6 className="mb-10 text-3xl">
            These are some of the projects I've built or worked on:
          </h6>

          <div className="px-16">
            <Carousel>
              <CarouselContent>
                {
                  data.map((item) => (
                    <CarouselItem key={item.bg} className='md:basis-1/2 lg:basis-1/3'>
                      <div className={`${darkMode ? 'border-[#d1bfa7]' : 'border-[#222] '} h-full border`}>
                      <div>
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className={`${darkMode ? 'hover:bg-[#d1bfa7] hover:text-[#222] ' : 'hover:bg-[#222] hover:text-[#d1bfa7]'} transition-all ease-in-out duration-500 p-8 py-16`}>
                      <div className="h-auto lg:h-[40vh] ">
                        <h5 className="text-2xl font-semibold font-mont mb-6">{item.name} </h5>

                        <p className="mb-5">
                          {item.description}
                        </p>

                        <div className={` py-2  flex flex-wrap gap-5 mb-8`}>
                          {
                            item.technologies.map((foo, index) => (
                              <img key={index} className={`${darkMode && 'bg-white/20 rounded-lg p-1'} h-10 w-10 `} src={foo} />
                            ))
                          }
                        </div>
                      </div>

                      <div className='flex space-x-3 items-center'>
                      {
                        item.code_url && (
                        <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                          <Arrow />
                          <a href={item.code_url} target='_blank' >
                            View Code
                          </a>
                        </button>
                        )
                      }
                      
                      <button className={`flex py-1 px-3 items-center space-x-2 border ${darkMode ? 'border-white' :'border-black '} hover:scale-105 transition-all ease-in duration-250  rounded`}>
                        <Arrow />
                        <a href={item.live_url} target='_blank' >
                          Live Demo
                        </a>
                      </button>
                      </div>

                    </div>
                      </div>
                    </CarouselItem>
                  ))
                }
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Work Experience */}
        <div className="w-[90%] mx-auto  pb-24 group mb-12">
          <div className="flex items-center space-x-3  mb-10 ">
            <h3 className={`${darkMode && 'text-[#d1bfa7] '} text-5xl md:text-6xl lg:text-9xl font-bold flex-shrink-0`}>Experience.</h3>
            <div className={`${darkMode ? 'bg-[#d1bfa7] ' : 'bg-[#222]'} h-[3px] w-0 group-hover:w-full transition-all ease-linear duration-700`} />
          </div>

          <div>
          <div
              className={`${
                darkMode ? "border-[#d1bfa7]" : "border-black"
              } flex space-x-4 hover:bg-[] p-3 py-7  rounded-xl  border-[2.5px]  border-l-[5px] border-b-[5px] my-3 mb-7`}
            >
              <div
                className={`${
                  darkMode ? "text-[#d1bfa7] " : "text-[#222] "
                } font-medium flex-1 text-xl `}
              >
                <span>MAY '23</span> - <span>PRESENT</span>{" "}
              </div>
              <div className="flex-[2.5] ">
                <h4
                  className={`${
                    darkMode ? "text-[#d1bfa7]" : "text-[#222] "
                  } font-medium mb-4 text-2xl`}
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
                      Utilized frontend frameworks such as React.js to build
                      dynamic and data-driven web applications.
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
              className={`${
                darkMode ? "border-[#d1bfa7]" : "border-black"
              } flex space-x-4 hover:bg-[] p-3 py-7  rounded-xl  border-[2.5px]  border-l-[5px] border-b-[5px] cursor-pointer my-3 mb-7`}
            >
              <div
                className={`${
                  darkMode ? "text-[#d1bfa7] " : "text-[#222] "
                } font-medium flex-1 text-xl `}
              >
                <span>MAR '22</span> - <span>OCT '22</span>{" "}
              </div>
              <div className="flex-[2.5] ">
                <h4
                  className={`${
                    darkMode ? "text-[#d1bfa7]" : "text-[#222] "
                  } font-medium mb-4 text-2xl`}
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
              className={`${
                darkMode ? "border-[#d1bfa7]" : "border-black"
              } flex space-x-4 hover:bg-[] p-3 py-7  rounded-xl  border-[2.5px]  border-l-[5px] border-b-[5px] cursor-pointer my-3 mb-7`}
            >
              <div
                className={`${
                  darkMode ? "text-[#d1bfa7] " : "text-[#222] "
                } font-medium flex-1 text-xl `}
              >
                <span>MAR '21</span> - <span>PRESENT</span>{" "}
              </div>
              <div className="flex-[2.5] ">
                <h4
                  className={`${
                    darkMode ? "text-[#d1bfa7]" : "text-[#222] "
                  } font-medium mb-4 text-2xl`}
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

        {/* Contact */}
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
      </>
    )
  }

  const Arrow = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    )
  }
  
  export default Home
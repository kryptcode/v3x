import { useRecoilState, useRecoilValue } from "recoil"
import { darkModeState } from "../atoms"
import 'animate.css'
import AnimatedCursor from "react-animated-cursor"
import { Link } from "react-router-dom"
import LightToggle from "../components/custom/LightToggle"
import Hero from "@/components/hero"
import AboutMe from "@/components/aboutme"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"


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

        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />

        {/* Contact */}
        <Contact />


      </div>
      </>
    )
  }

  
  
  export default Home
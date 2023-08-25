import { useRecoilValue } from 'recoil'
import { darkModeState } from '../atoms'
import Main from '../components/About/Main'
import Sidebar from '../components/Sidebar'
import 'animate.css'
// import { Cursor } from "react-creative-cursor"
import { Link } from "react-router-dom";
// import 'react-creative-cursor/dist/styles.css';
import AnimatedCursor from "react-animated-cursor"

const About = () => {
  const darkMode = useRecoilValue(darkModeState)


  return (
    <>
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
            backgroundColor: '#fff'
          }}
          outerStyle={{
            border: '3px solid #fff'
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

    <div className={` ${darkMode ? 'bg-[#000] text-white ' : 'bg-[#d1bfa7]'} flex flex-col md:flex-row px-4 animate__animated animate__fadeInDown`}>
      {/* <Cursor 
          isGelly={true}
          cursorSize={20}
          cursorBackgrounColor={darkMode ? '#fff' : '#000'}
          /> */}
      <Sidebar />
      <Main />

      <div className='md:flex-[3] text-[3.5rem] md:text-[4.5rem] leading-none font-bold w-[90%] mx-auto md:w-full hidden md:flex flex-col md:justify-end md:items-center pb-5 animate__animated animate__fadeInRight '>
      <div className='space-y-5 md:space-y-7'>

      <div className='group transition-all duration-300 ease-in-out'>
        <Link to='/work' className=''>
          <div>
            <span className='text-2xl'>
            02. {' '}
            </span>
            <span className={`${darkMode && 'text-white '}`}>
            WORK
            </span>
          </div>
          <div className="h-[1px] md:h-[2.5px] w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
        </Link>
      </div>

      <div className='group transition-all duration-300 ease-in-out'>
      <Link to='/contact' className=''>
        <div>
        <span className='text-2xl'>
          03. {' '}
          </span>
          <span className='space-span'>
          CONTACT
          </span>
        </div>
        <div className="h-[1px] md:h-[2.5px] w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
      </Link>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default About
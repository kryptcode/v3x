import { useRecoilValue } from 'recoil'
import { darkModeState } from '../atoms'
import Sidebar from '../components/Sidebar'
import Main from '../components/Work/Main'
import 'animate.css'
// import { Cursor } from "react-creative-cursor"
// import 'react-creative-cursor/dist/styles.css';
import Projects from '../components/Work/Projects'
import AnimatedCursor from "react-animated-cursor"



const Works = () => {
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
      
    <div className={` ${darkMode ? 'bg-[#000] text-white ' : 'bg-[#d1bfa7]'} md:min-h-screen w-full flex flex-col md:flex-row  items-center animate__animated animate__fadeInDown`}>
      {/* <Cursor 
          isGelly={true}
          cursorSize={20}
          cursorBackgrounColor={darkMode ? '#fff' : '#000'}
          /> */}
      <Sidebar />
      {/* <Main />       */}
      <Projects />
    </div>  
    </>
  )
}

export default Works
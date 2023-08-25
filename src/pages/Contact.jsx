import { useRecoilValue } from 'recoil'
import { darkModeState } from '../atoms'
import Main from '../components/Contact/Main'
import Sidebar from '../components/Sidebar'
import 'animate.css'
import AnimatedCursor from "react-animated-cursor"

// import { Cursor } from "react-creative-cursor"
// import 'react-creative-cursor/dist/styles.css';

const Contact = () => {
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

    <div className={` ${darkMode ? 'bg-[#000] text-white ' : 'bg-[#d1bfa7]'} h-screen w-full flex flex-col md:flex-row justify-between px-4 animate__animated animate__fadeInDown`}>
      {/* <Cursor 
          isGelly={true}
          cursorSize={20}
          cursorBackgrounColor={darkMode ? '#fff' : '#000'}
          /> */}
      <Sidebar />
      <Main />
    </div>
    </>
  )
}

export default Contact
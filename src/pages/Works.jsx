import { useRecoilValue } from 'recoil'
import { darkModeState } from '../atoms'
import Sidebar from '../components/Sidebar'
import Main from '../components/Work/Main'
import 'animate.css'
import { Cursor } from "react-creative-cursor"
import 'react-creative-cursor/dist/styles.css';
import Projects from '../components/Work/Projects'


const Works = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className={` ${darkMode ? 'bg-[#111] text-white ' : 'bg-[#d1bfa7]'} md:min-h-screen w-full flex flex-col md:flex-row  items-center animate__animated animate__fadeInDown`}>
      <Cursor 
          isGelly={true}
          cursorSize={20}
          cursorBackgrounColor={darkMode ? '#fff' : '#000'}
        />
      <Sidebar />
      {/* <Main />       */}
      <Projects />
    </div>  
  )
}

export default Works
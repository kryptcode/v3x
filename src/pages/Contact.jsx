import { useRecoilValue } from 'recoil'
import { darkModeState } from '../atoms'
import Main from '../components/Contact/Main'
import Sidebar from '../components/Sidebar'
import 'animate.css'
import { Cursor } from "react-creative-cursor"
import 'react-creative-cursor/dist/styles.css';

const Contact = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className={` ${darkMode ? 'bg-[#111] text-white ' : 'bg-[#d1bfa7]'} h-screen w-full flex flex-col md:flex-row justify-between px-4 animate__animated animate__fadeInDown`}>
      <Cursor 
          isGelly={true}
          cursorSize={20}
          cursorBackgrounColor={darkMode ? '#fff' : '#000'}
        />
      <Sidebar />
      <Main />
    </div>
  )
}

export default Contact
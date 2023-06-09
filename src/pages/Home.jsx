import { useRecoilValue } from "recoil"
import { darkModeState } from "../atoms"
import Main from "../components/Home/Main"
import Sections from "../components/Home/Sections"
import Sidebar from "../components/Sidebar"
import 'animate.css'
import { Cursor } from "react-creative-cursor"
import 'react-creative-cursor/dist/styles.css';

function Home() {

  const darkMode = useRecoilValue(darkModeState)

    return (
      <>
      {/* <Particle />  */}
      
      <div className={` ${darkMode ? 'bg-[#111] text-white ' : 'bg-[#d1bfa7] '} h-screen w-full flex flex-col md:flex-row justify-between px-4 animate__animated animate__fadeInUp`}>
        <Cursor 
          isGelly={true}
          cursorSize={20}
          cursorBackgrounColor={darkMode ? '#fff' : '#000'}
        />
        <Sidebar />
        <Main />
        <Sections />
      </div>
      </>
    )
  }
  
  export default Home
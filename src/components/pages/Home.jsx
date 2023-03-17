import { useRecoilValue } from "recoil"
import { darkModeState } from "../../atoms"
import Main from "../Home/Main"
import Sections from "../Home/Sections"
import Sidebar from "../Sidebar"
import 'animate.css'

function Home() {

  const darkMode = useRecoilValue(darkModeState)

    return (
      <>
      {/* <Particle />  */}
      
      <div className={` ${darkMode ? 'bg-[#111] text-white ' : 'bg-[#d1bfa7] '} h-screen w-full flex flex-col md:flex-row justify-between px-4 animate__animated animate__fadeInUp`}>
        <Sidebar />
        <Main />
        <Sections />
      </div>
      </>
    )
  }
  
  export default Home
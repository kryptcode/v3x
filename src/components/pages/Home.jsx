import { useRecoilValue } from "recoil"
import { darkModeState } from "../../atoms"
import Main from "../Home/Main"
import Sections from "../Home/Sections"
import Sidebar from "../Sidebar"

function Home() {

  const darkMode = useRecoilValue(darkModeState)

    return (
      <>
      {/* <Particle />  */}
      
      <div className={` ${darkMode ? 'bg-[#111] text-white ' : 'bg-white'} h-screen w-full flex flex-col md:flex-row justify-between px-4`}>
        <Sidebar />
        <Main />
        <Sections />
      </div>
      </>
    )
  }
  
  export default Home
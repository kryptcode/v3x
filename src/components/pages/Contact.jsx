import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import Main from '../Contact/Main'
import Sidebar from '../Sidebar'
import 'animate.css'

const Contact = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className={` ${darkMode ? 'bg-[#111] text-white ' : 'bg-[#d1bfa7]'} h-screen w-full flex flex-col md:flex-row justify-between px-4 animate__animated animate__fadeInDown`}>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Contact
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import Main from '../Contact/Main'
import Sidebar from '../Sidebar'

const Contact = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className={` ${darkMode ? 'bg-[#111] text-white ' : 'bg-white'} h-screen w-full flex flex-col md:flex-row justify-between px-4`}>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Contact
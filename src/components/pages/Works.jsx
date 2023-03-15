
import { useRecoilValue } from 'recoil'
import { darkModeState } from '../../atoms'
import Sidebar from '../Sidebar'
import Main from '../Work/Main'

const Works = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className={` ${darkMode ? 'bg-[#111] text-white ' : 'bg-white'} h-screen w-full flex flex-col md:flex-row justify-between items-center`}>
      <Sidebar />
      <Main />      
    </div>  
  )
}

export default Works
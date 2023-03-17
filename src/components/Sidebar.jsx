import LightToggle from './custom/LightToggle'
import { Link } from 'react-router-dom';
import { darkModeState } from '../atoms';
import { useRecoilState } from 'recoil';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <>
      <div className={`${darkMode ? 'bg-[#111]': 'bg-[#d1bfa7]'} hidden w-[8rem] h-screen md:flex justify-center items-center`}>
        <div className='h-[90vh] w-full flex flex-col-reverse justify-between items-center'>
          <div className='hover:opacity-75 cursor-pointer' onClick={() => setDarkMode(!darkMode)}>
            <LightToggle />
          </div>

          <div className={`w-[1px] ${darkMode ? 'bg-[#6a139f] ' : 'bg-black'}  h-52`}  />

          <div className='-rotate-90 text-2xl font-bold uppercase p-2 hover:scale-110 transition-all duration-200  hover:opacity-75'>
            <Link to='/'>
            ka.
            </Link>
          </div>
        </div>
      </div>

      <div className='md:hidden py-3 w-[90%] mx-auto flex justify-between '>
        <div className='text-2xl font-bold hover:opacity-75'>
        <Link to='/'>
        KA.  
        </Link>
        </div>

        <div className='cursor-pointer hover:opacity-75' onClick={() => setDarkMode(!darkMode)}>
          <LightToggle />
        </div>
      </div>
    </>
  )
}

export default Sidebar
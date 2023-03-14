import 'react-creative-cursor/dist/styles.css';
import LightToggle from './custom/LightToggle'
import { Link } from 'react-router-dom';
import { darkModeState } from '../atoms';
import { useRecoilState } from 'recoil';

const Sidebar = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)

  return (
    <>
      <div data-cursor-size="20px" data-cursor-exclusion className={`${darkMode ? 'bg-[#2b2b33]': 'bg-white'} hidden flex-1 h-screen md:flex justify-center items-center`}>
        <div className='h-[90vh] w-full flex flex-col-reverse justify-between items-center'>
          <div className='-rotate-90' onClick={() => setDarkMode(!darkMode)}>
            <LightToggle />
          </div>

          <div className={`w-[1px] ${darkMode ? 'bg-[#6a139f] ' : 'bg-black'}  h-52`}  />

          <div className='-rotate-90 text-2xl font-bold uppercase p-2 hover:scale-110 transition-all duration-200'>
            koye
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <Link to='/'>
        Koye  
        </Link>
      </div>
    </>
  )
}

export default Sidebar
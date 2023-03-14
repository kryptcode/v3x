import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../../atoms";

const Sections = () => {

  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className='md:flex-[5] text-[3rem] md:text-[7.2rem] leading-none font-bold  flex flex-col md:justify-end md:items-center pb-5'>
      <div className='md:space-y-12'>
      <div className='group transition-all duration-300 ease-in-out'>
        <Link to='/about' className='cursor-none'>
          <div>
          <span className='text-2xl'>
          01. {' '}
          </span>
          <span  className='space-span'>
          ABOUT
          </span>
          </div>
          <div className="h-1 w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
        </Link>
      </div>

      <div className='group transition-all duration-300 ease-in-out'>
        <Link to='/work' className='cursor-none'>
          <div>
            <span className='text-2xl'>
            02. {' '}
            </span>
            <span className={`${darkMode && 'text-[#6a139f] '}`}>
            WORK
            </span>
          </div>
          <div className="h-1 w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
        </Link>
      </div>

      <div className='group transition-all duration-300 ease-in-out'>
      <Link to='/contact' className='cursor-none'>
        <div>
        <span className='text-2xl'>
          03. {' '}
          </span>
          <span className='space-span'>
          CONTACT
          </span>
        </div>
        <div className="h-1 w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
      </Link>
      </div>
      </div>
    </div>
  )
}

export default Sections
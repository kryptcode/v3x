import { Link } from "react-router-dom"
import Arrow from "../custom/Arrow"
import { FaEnvelope, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { useRecoilValue } from "recoil"
import { darkModeState } from "../../atoms"

const Main = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className="md:flex-[6] md:w-full w-[90%] mx-auto flex flex-col md:flex-row md:items-end pb-11 ">
        <div className="md:flex-1 w-full">
            <h2 className="text-xl md:text-4xl font-bold underline">
                CONTACT
            </h2>
            <div className="pt-6 flex flex-col space-y-10  md:w-[85%]  justify-between md:text-lg">
                <div className="space-y-4">
                    <span className="font-semibold  md:text-2xl tracking-wide">
                        MAIL
                    </span>
                    <span className="flex items-center space-x-3 md:text-4xl text-2xl underline">
                        <FaEnvelope className='text-red-500' />
                        <a href="mailto: adeyombokehd@gmail.com" target="_blank">
                        adeyomkehd@gmail.com
                        </a>
                    </span>
                </div>

                <div className="space-y-4 md:text-lg pb-44 md:pb-0">
                    <span className="font-semibold md:text-2xl tracking-wide flex-1">
                        ON THE INTERNET
                    </span>
                    <div className="flex flex-col space-y-5 underline flex-1">
                        <span className="flex items-center space-x-3 md:text-4xl text-2xl">
                            <FaTwitter className="text-blue-500" />
                            <a href=''>
                            Twitter
                            </a>
                        </span>
                        <span className="flex items-center space-x-3 md:text-4xl text-2xl">
                            <FaGithub className="text-slate-700" />
                            <a href="https://github.com/kryptcode" target='_blank'>
                            Github
                            </a>
                        </span>
                        <span className="flex items-center space-x-3 md:text-4xl text-2xl">
                            <FaLinkedinIn className="text-blue-700" />
                            <span>
                            LinkedIn
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className='md:flex-1 pt-10 px-5 md:px-12'>
        <div className='md:flex-[3] text-[3.5rem] md:text-[4.5rem] leading-none font-bold w-[90%] mx-auto md:w-full hidden md:flex flex-col md:justify-end md:items-center pb-5 animate__animated animate__fadeInRight '>
              <div className='space-y-5 md:space-y-7'>

              <div className='group transition-all duration-300 ease-in-out'>
                <Link to='/about' className=''>
                  <div>
                    <span className='text-2xl'>
                    01. {' '}
                    </span>
                    <span className={`${darkMode && 'text-white '}`}>
                    About
                    </span>
                  </div>
                  <div className="h-[1px] md:h-[2.5px] w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
                </Link>
              </div>

              <div className='group transition-all duration-300 ease-in-out'>
              <Link to='/work' className=''>
                <div >
                <span className='text-2xl'>
                  02. {' '}
                  </span>
                  <span className='space-span'>
                  WORK
                  </span>
                </div>
                <div className="h-[1px] md:h-[2.5px] w-full transition-all ease-linear duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500 to-pink-500" />
              </Link>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main
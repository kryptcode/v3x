import { Link } from "react-router-dom"
import Arrow from "../custom/Arrow"
import { FaEnvelope, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { useRecoilValue } from "recoil"
import { darkModeState } from "../../atoms"

const Main = () => {
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className="md:flex-[6] md:w-full w-[90%] mx-auto flex flex-col md:flex-row justify-between items-end py-11 ">
        <div className="md:flex-1 w-full flex flex-col justify-between spacey h-full ">
            <h2 className="text-4xl lg:text-7xl font-bold mb-6">
                CONTACT
            </h2>
            <div className="pt-6 flex flex-col space-y-10  md:w-[85%]  justify-between md:text-lg">
                <div className="space-y-4">
                    <span className="font-semibold  md:text-2xl tracking-wide">
                        MAIL
                    </span>
                    <span className="flex items-center space-x-3 lg:text-4xl text-xl underline">
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
                        <span className="flex items-center space-x-3 lg:text-4xl text-xl">
                            <FaTwitter className="text-blue-500" />
                            <a href=''>
                            Twitter
                            </a>
                        </span>
                        <span className="flex items-center space-x-3 lg:text-4xl text-xl">
                            <FaGithub className="text-slate-700" />
                            <a href="https://github.com/kryptcode" target='_blank'>
                            Github
                            </a>
                        </span>
                        <span className="flex items-center space-x-3 lg:text-4xl text-xl">
                            <FaLinkedinIn className="text-blue-700" />
                            <span>
                            LinkedIn
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main
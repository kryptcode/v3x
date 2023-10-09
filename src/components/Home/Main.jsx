import { useRecoilValue } from 'recoil';
import Typewriter from 'typewriter-effect'
import { darkModeState } from '../../atoms';
import { FaEnvelope, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Main = () => {
    const darkMode = useRecoilValue(darkModeState)

  return (
    <div  className={`${darkMode ? 'bg-[#000] text-[#999]' : 'bg-[#d1bfa7]'} w-[90%] mx-auto md:w-full flex-[3] flex flex-col-reverse pb-11`}>
        
        <div>
            <div className='text-4xl font-bold'>
                HI! I'M KOYE
            </div>
            
            <div className={`${darkMode ? 'text-white/80' : 'text-black/80'} text-xl my-3 font-semibold `}>
            <Typewriter
                options={{
                    strings: ['Front End Developer', 'Javascript Developer', 'React Developer', 'Web Developer', 'Typescript Developer'],
                    autoStart: true,
                    loop: true,
                }}
            />
            </div>
            <div className='text-base font-medium my-2'>
                Currently working as a <br /> Frontend Engineer at Merri.
            </div>
            <div className='text-3xl flex space-x-5 my-3'>
                <a href="mailto:adeyombokehd@gmail.com" className='text-red-500 hover:scale-110 transition-all duration-300 ease-in-out' target="_blank">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/kryptcode" target='_blank' className='text-slate-700 hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaGithub />
                </a>
                <a href="https://github.com/kryptcode" target='_blank' className='text-blue-700 hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/kryptcode" target='_blank' className='text-blue-500 hover:scale-110 transition-all duration-300 ease-in-out'>
                    <FaTwitter />
                </a>
            </div>
            <div className='mt-5 h-1 w-10 bg-black' />
        </div>
    </div>
  )
}

export default Main

import { useRecoilValue } from 'recoil';
import Typewriter from 'typewriter-effect'
import { darkModeState } from '../../atoms';

const Main = () => {
    const darkMode = useRecoilValue(darkModeState)

  return (
    <div  className={`${darkMode ? 'bg-[#111] text-white/80' : 'bg-[#d1bfa7]'} w-[90%] mx-auto md:w-full flex-[3] flex flex-col-reverse pb-11`}>
        
        <div>
            <div className='text-6xl font-bold'>
                KOYE
            </div>
            
            <div className={`${darkMode ? 'text-white/80' : 'text-black/80'} text-xl font-semibold `}>
            <Typewriter
                options={{
                    strings: ['Front End Developer', 'Javascript Developer', 'React Developer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                }}
            />
            </div>
            <div className='text-xl font-medium'>
                Currently working as a <br /> Frontend Engineer at Kamizo.
            </div>
            <div className='mt-5 h-1 w-10 bg-black' />
        </div>
    </div>
  )
}

export default Main
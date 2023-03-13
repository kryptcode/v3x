import React from 'react'
import Typewriter from 'typewriter-effect'

const Main = () => {
  return (
    <div className='flex-[3] flex flex-col-reverse pb-11'>
        <div>
            <div className='text-6xl font-bold'>
                KOYE
            </div>
            
            <div className='text-xl font-semibold text-black/80'>
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
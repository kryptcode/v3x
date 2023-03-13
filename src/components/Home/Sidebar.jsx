import React from 'react'
import LightToggle from '../custom/LightToggle'

const Sidebar = () => {
  return (
    <>
      <div className='hidden flex-1 h-screen md:flex justify-center items-center'>
        <div className='h-[90vh] w-full flex flex-col-reverse justify-between items-center'>
          <div className='-rotate-90'>
            <LightToggle />
          </div>

          <div className='w-[1px] bg-black h-52'  />

          <div className='-rotate-90 text-2xl font-bold uppercase p-2 hover:scale-110 transition-all duration-200'>
            koye
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        Koye
      </div>
    </>
  )
}

export default Sidebar
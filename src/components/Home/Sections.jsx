import React from 'react'
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <div className='flex-[5] text-[6.5rem] leading-none font-bold  flex flex-col justify-end items-end pb-5'>
      <div className='space-y-8'>
      <div className='cursor-pointer'>
        <Link to='/about'>
          <span className='text-2xl'>
          01. {' '}
          </span>
          <span  className='space-span'>
          ABOUT
          </span>
        </Link>
      </div>

      <div className=''>
      <span className='text-2xl'>
        02. {' '}
        </span>
        <span>
        WORK
        </span>
      </div>
      <div className=''>
      <span className='text-2xl'>
        03. {' '}
        </span>
        <span className='space-span'>
        CONTACT
        </span>
      </div>
      </div>
    </div>
  )
}

export default Sections
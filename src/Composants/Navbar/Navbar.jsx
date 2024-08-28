import React from 'react'
import { RxPerson } from 'react-icons/rx'

function Navbar() {
  return (
    <div className='bg-white h-14 shadow-md shadow-black w-full flex justify-between items-center'>
      <div></div>

      <div className='flex mr-5'>
        <div className='flex flex-col items-end justify-center mr-2'>
          <div>John Alex</div>
          <div className='text-green-800 font-semibold -mt-1'>Administrateur</div>
        </div>

        <div className=' bg-gray-600 h-12 w-12 flex items-center justify-center rounded-full text-white text-xl'>
          <RxPerson />
        </div>

      </div>
    </div>
  )
}

export default Navbar
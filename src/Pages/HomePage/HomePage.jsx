import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Link
      to='/dashboard'
      className='bg-black text-white p-4 rounded-full'
      >
        aller au dashboard
      </Link>

    </div>
  )
}

export default HomePage
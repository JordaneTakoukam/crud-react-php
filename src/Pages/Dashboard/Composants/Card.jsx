import React from 'react'

function Card({ titre, valeur }) {
    return (
        <div className='relative bg-white shadow-md shadow-black rounded-md w-full h-52
               flex items-center justify-center border border-gray-500'>
            <p className='absolute top-0 left-0 m-3'>{titre}</p>

            <p className='font-semibold text-lg'> {valeur}</p>
        </div>
    )
}

export default Card
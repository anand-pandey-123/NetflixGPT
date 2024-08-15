import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className=' absolute bg-gradient-to-r from-zinc-950 '>
      <div className='md:my-64 my-24 md:px-12 px-2 bg-transparent  '>
        <h1 className='md:text-5xl text-xl mb-4 font-bold text-red-600'>{title}</h1>
        <p className='md:w-1/2 font-semibold text-xs md:text-lg'>{overview}</p>
        <div className='mt-4 ml-4 flex'>
            <button className='md:px-12 px-4 h-8 md:h-full md:py-3 rounded-sm text-sm md:text-lg mr-3  bg-white text-black font-bold'>Play</button>
            <button className='md:px-10 px-4 md:py-3 rounded-sm h-8 md:h-full text-sm md:text-lg mr-3  bg-zinc-600 text-white font-semibold'>More info</button>
        </div>
    </div>
    </div>
  )
}

export default VideoTitle
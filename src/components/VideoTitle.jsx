import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className=' absolute bg-gradient-to-r from-zinc-950 '>
      <div className=' my-64 px-12  bg-transparent  '>
        <h1 className='text-5xl mb-4 font-bold text-red-600'>{title}</h1>
        <p className='w-1/2 font-semibold '>{overview}</p>
        <div className='mt-4 ml-4 '>
            <button className='px-12 py-3 rounded-sm text-lg mr-3  bg-white text-black font-bold'>Play</button>
            <button className='px-10 py-3 rounded-sm text-lg mr-3  bg-zinc-600 text-white font-semibold'>More info</button>
        </div>
    </div>
    </div>
  )
}

export default VideoTitle
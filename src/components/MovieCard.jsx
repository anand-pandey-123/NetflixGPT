import React from 'react'
import { IMG_URL } from '../utils/constants'

function MovieCard({poster}) {
  return (
    <div className=' w-72 md:w-40 px-2 '>
        <img className='rounded-sm' src={IMG_URL + poster} alt="" />
    </div>
  )
}

export default MovieCard
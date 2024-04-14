import React from 'react'
import Image from 'next/image'

const Banner = ( {image} ) => {
  return (
    <div className='w-full h-[65vh]'>
        <Image className='object-cover w-full h-full object-top' src={image} alt="" ></Image>
    </div>
  )
}

export default Banner
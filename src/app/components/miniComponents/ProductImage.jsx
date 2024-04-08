import React from 'react'
import Image from 'next/image'

export const ProductImage = ({src, width, height}) => {
  return (
    <div className="relative z-10" style={{width: parseInt(width, 10), height: parseInt(height, 10)}}>
        <div className='w-full h-full bg-primary absolute z-0 top-2 -left-1 rounded-3xl'></div>
        <Image className='w-full h-full object-cover absolute top-0 left-1 z-100 rounded-3xl' src={src} alt=""/>
    </div>
  )
}

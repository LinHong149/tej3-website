import React from 'react'
import Image from 'next/image'
import ProductsBanner from "../../../../public/products_banner.png"

const Banner = () => {
  return (
    <div className='w-full h-[65vh]'>
        <Image className='object-cover w-full h-full object-top' src={ProductsBanner} alt="" ></Image>
    </div>
  )
}

export default Banner
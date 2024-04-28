import React from 'react'
import { constants } from '../../constants'
import Link from 'next/link'
// import { constants } from '@/app/constants'
import Image from 'next/image'

const ProductSpecials = () => {
  return (
    <div>
        {constants.promotionsInfo.map(({title, description, image, link}) => (
          <Link href={link}>
            <div className="rounded-[3rem] h-52 flex p-5 gap-5 bg-highlight items-center">
                <Image className='h-full min-w-[30%] rounded-[2rem] object-cover' src={image} />
                <div className="flex flex-col gap-2 text-white">
                    <h2 className="title text-6xl">{title}</h2>
                    <p className="text-2xl leading-[3rem]">{description}</p>
                </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default ProductSpecials
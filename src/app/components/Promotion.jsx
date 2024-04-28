import React from 'react'
import Image from 'next/image'
import { constants } from "../constants"
import Button from './miniComponents/Button.jsx'
import Link from 'next/link'

const Promotion = () => {
  return (
    <div className='h-screen flex justify-between px-[120px] items-center'>
        <div className='relative w-[36rem] h-[36rem]'>
            <Image className="absolute -top-4 left-4 w-full h-full object-cover rounded-full" src={constants.promotionsInfo[0].image} alt=""></Image>
            <div className=' w-[36rem] aspect-square rounded-full bg-highlight'></div>
        </div>
        {constants.promotionsInfo.map(({title, description, link}) => (
          <div className="flex flex-col items-center gap-8">
            <h2 className='text-8xl text-center w-max title'>{title}</h2>
            <p className='text-lg px-[20%] text-center leading-10'>{description}</p>
            <Link href={link}>
              <Button text="Order now"></Button>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Promotion
import React from 'react'
import { constants } from '../constants'
import Image from 'next/image'

const Follow = () => {
  return (
    <div className='flex flex-col gap-20 bg-secondary-main min-h-screen items-center justify-center w-full px-[120px] py-[10rem]'>
        <span className='flex flex-row gap-4'>
            <h2 className="title text-8xl">Follow us</h2>
            <div className='relative hover:opacity-50'>
                <a className="title text-8xl text-text" href=''>@macaronbakery</a>
                <hr className='w-full absolute bottom-2 border-text border-[1.5px]' />
            </div>
        </span>

        <div className="gallery bg-primary rounded-[3rem] grid p-5 gap-4 grid-cols-3">
            {constants.galleryInfo.map(((image) =>
                <div>
                    <Image className='rounded-[2rem] objecct-cover' src={image}></Image>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Follow
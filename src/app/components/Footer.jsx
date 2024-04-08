import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.png"

const Footer = () => {
  return (
    <div className='bg-secondary flex flex-col w-full px-[60px] justify-between items-center'>
        <div className="flex justify-between w-full">
            <div className="flex">
                <div className="flex flex-col items-center gap-6">
                    <div className='logo w-fit flex flex-col gap-2 items-center'>
                        <Image src={logo} alt="macaron bakery" className='aspect-square w-28 object-contain'></Image>
                        <h2 className='title text-5xl text-main'>Macaron Bakery</h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@macaronbakery.ca&su=Hello!">hello@macaronbakery.ca</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-between relative w-full">
            <hr className="absolute -top-2 border-main border-[1.5px]" />
            <p className='text-main text-sm' >© 2024 Macaron Bakery. All rights reserved.</p>
            <p className='text-main text-sm' >Created by: <a href="https://linhong.vercel.app">Lin Hong</a></p>
        </div>
    </div>
  )
}

export default Footer
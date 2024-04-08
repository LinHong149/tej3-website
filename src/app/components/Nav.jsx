import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.png"

const Nav = () => {
  return (
    <div className='w-full flex justify-between px-[120px] py-[2.5rem] absolute top-0 left-0 z-100 items-center'>
        <div className='w-fit flex gap-2 items-center'>
            <Image src={logo} alt="macaron bakery" className='aspect-square w-16 object-contain'></Image>
            <h2 className='title text-3xl text-highlight'>Macaron Bakery</h2>
        </div>
        <div className='nav flex gap-6 [&>*]:text-2xl'>
            <a href="" className='title'>Home</a>
            <a href="" className='title'>Products</a>
            <a href="" className='title'>About</a>
            <a href="" className='title'>Contact</a>
        </div>
        <div className='rounded-full bg-secondary w-10 h-10'>
            {/* icon */}
        </div>
    </div>
  )
}

export default Nav
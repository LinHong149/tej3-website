import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className='absolute top-0 left-0 z-100 w-full flex justify-between px-[120px] py-[2.5rem] absolute top-0 left-0 z-100 items-center'>
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
        <div className='rounded-full bg-secondary w-12 h-12 flex items-center pt-1 justify-center'>
        <a href=""><FontAwesomeIcon className='w-5 h-5' size='2x' color='white' icon={faShoppingCart} /></a>
        </div>
    </div>
  )
}

export default Nav
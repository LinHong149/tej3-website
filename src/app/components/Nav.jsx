import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import React from 'react'
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../public/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const router = useRouter()

  const isActive = (path) => {
    return router.pathname === path ? 'opacity-100' : 'opacity-50';
  };

  return (
    <div className='absolute top-0 left-0 z-100 w-full flex justify-between px-[120px] py-[2.5rem] absolute top-0 left-0 z-100 items-center'>
        <Link href="/">
          <div className='w-fit flex gap-2 items-center'>
            <Image src={logo} alt="macaron bakery" className='aspect-square w-16 object-contain'></Image>
            <h2 className='title text-3xl text-highlight'>Macaron Bakery</h2>
          </div>
        </Link>
        <div className='nav flex gap-6 [&>*]:text-2xl'>
          <Link href="/" className={isActive('/') + ' title'}>Home</Link>
          <Link href="/products" className={isActive('/products') + ' title'}>Products</Link>
          <Link href="/about" className={isActive('/about') + ' title'}>About</Link>
          <Link href="/contact" className={isActive('/contact') + ' title'}>Contact</Link>
        </div>
        <div className='rounded-full bg-secondary w-12 h-12 flex items-center pt-1 justify-center'>
          <Link href="/cart"><FontAwesomeIcon className='w-5 h-5' size='2x' color='white' icon={faShoppingCart} /></Link>
        </div>
    </div>
  )
}

export default Nav
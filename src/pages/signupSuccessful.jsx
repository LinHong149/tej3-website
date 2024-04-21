import React from 'react'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
import logo from "../../public/logo.png"
import Image from 'next/image'


const signupSuccessful = () => {
  return (
    <div>
        <Nav></Nav>
        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center bg-main p-20 rounded-[2rem] drop-shadow-[0_0_35px_rgba(253,221,232,1)] gap-6'>
                <div className='logo w-fit flex flex-col items-center'>
                    <Image src={logo} alt="macaron bakery" className='aspect-square w-24 object-contain'></Image>
                    <h2 className='title text-5xl text-center'>Your Account Has Been Created!</h2>
                </div>
                <p className='text-lg'>Click <Link href="/login" className='underline'>here</Link> to log in</p>
            </div>
        </div>
    </div>
  )
}

export default signupSuccessful
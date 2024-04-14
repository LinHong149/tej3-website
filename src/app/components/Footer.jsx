import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.png"
import { constants } from '../constants'

const Footer = () => {
  return (
    <div className='bg-secondary flex flex-col w-full px-[60px] justify-between items-center'>
        <div className="flex justify-between w-full gap-18 py-16 items-center">
            <div className="flex gap-16 items-center">
                <div className="flex flex-col items-center gap-6">
                    <div className='logo w-fit flex flex-col gap-2 items-center'>
                        <Image src={logo} alt="macaron bakery" className='aspect-square w-28 object-contain'></Image>
                        <h2 className='title text-5xl text-main text-center'>Macaron Bakery</h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a className='text-center text-xl text-white underline' href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@macaronbakery.ca&su=Hello!">hello@macaronbakery.ca</a>
                        <p className='text-center text-xl text-white'>123-456-7890</p>
                    </div>
                    <a className='w-6 h-6' href="https://www.instagram.com">
                        <svg className='w-6 h-6' color='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill='white' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </a>
                </div>
                
                {constants.locationInfo.map(({street, location, schedule}) => (
                    <div className='flex flex-col items-center gap-6 [&>*]:text-center [&>*]:text-main [&>*]:text-lg'>
                        <p><strong className='text-2xl text-center font-medium'>{street}</strong><br/>{location}</p>
                        <p className='text-center text-lg text-white w-fit'>{schedule[0].date}<br/>{schedule[0].time}</p>
                        <p className='text-center text-lg text-white w-fit'>{schedule[1].date}<br/>{schedule[1].time}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col'>
                    <p className='text-2xl text-white font-medium'>Newsletter Signup</p>
                    <p className='text-xl text-white'>Subscribe to recieve our seasonal promotions.</p>
                </div>
                <form action="" className='w-full flex border-b-2 gap-4'>
                    <input type="input" placeholder='Enter your email address...' className='bg-transparent py-4 w-full placeholder-white outline-none text-white' />
                    <input type="submit" value="Subscribe" className='text-white font-medium text-xl'/>
                </form>
            </div>
        </div>

        <div className="flex justify-between relative w-full pb-12 pt-6">
            <hr className="absolute -top-2 border-main border-[0.5px] w-full" />
            <p className='text-main text-md' >© 2024 Macaron Bakery. All rights reserved.</p>
            <p className='text-main text-md' >Created by: <a href="https://linhong.vercel.app" className='underline'>Lin Hong</a></p>
        </div>
    </div>
  )
}

export default Footer
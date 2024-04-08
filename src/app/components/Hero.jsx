import React from 'react'
import Image from 'next/image'
import HeroImage from "../../../public/hero_image.png"
import Button from "./miniComponents/Button.jsx"

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
        <Image className='absolute z-0 top-0 left-0 w-full h-full object-cover' src={HeroImage} alt="background image" />
        <div className='w-full h-full absolute z-10 top-0 left-0 flex justify-end items-center px-[120px]'>
          <div className='flex flex-col min-w-[40vw] w-fit gap-10'>
              <div className='flex flex-col gap-4'>
                <h2 className='text-6xl text-text opacity-50 w-fit title'>Treat yourself.</h2>
                <h2 className='text-9xl text-text w-fit leading-[7rem] title'>Because you <br />deserve it.</h2>
              </div>
              <Button text="Find your flavour!"/>
          </div>
        </div>
    </div>
  )
}

export default Hero
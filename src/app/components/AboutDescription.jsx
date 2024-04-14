import React from 'react'
import Image from 'next/image'
import SectionBreak from "../../../public/section_break.png"

const AboutDescription = () => {
  return (
    <div className='flex items-center justify-center min-h-screen py-[20vh]'>
        <div className='w-[70vw] flex flex-col items-center gap-10'>
            <h2 className='title text-7xl text-center'>“All it takes is some hard work<br />and dedication...”</h2>
            <hr className='w-[25vw] border-text'/>
            <span className='flex flex-col [&>*]:text-center [&>*]:text-xl [&>*]:leading-[3.5rem] items-center gap-6'>
                <p>Our macaron bakery stands on the belief that hard work and dedication create unforgettable experiences. Each macaron, crafted with precision from premium ingredients, embodies this philosophy, offering more than just sweetness but a moment of pure joy.</p>
                <Image width={20} height={20} src={SectionBreak}/>
                <p>We aim to create welcoming spaces where everyone can find a slice of happiness, backed by a team that's as passionate about serving you as they are about the art of baking.</p>
                <Image width={20} height={20} src={SectionBreak}/>
                <p>Join us in celebrating the simple pleasures of life, one macaron at a time.</p>
            </span>
        </div>
    </div>
  )
}

export default AboutDescription
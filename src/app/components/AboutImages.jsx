import React from 'react'
import Image from 'next/image'
import AboutImage1 from "../../../public/about_image1.png"
import AboutImage2 from "../../../public/about_image2.png"
import AboutImage3 from "../../../public/about_image3.png"

const AboutImages = () => {
  return (
    <div className='bg-secondary-main p-[120px] flex justify-between gap-10'>
        <Image src={AboutImage1} className="object-contain" />
        <div className='flex flex-col gap-10'>
            <Image src={AboutImage2} className="object-contain" />
            <Image src={AboutImage3} className="object-contain" />
        </div>
    </div>
  )
}

export default AboutImages
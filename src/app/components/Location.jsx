import React from 'react'
import { constants } from '../constants'
import Image from 'next/image'

const Location = ({ index, reverse }) => {
    const {street, location, phone, mail, schedule, image} = constants.locationInfo[index]
  return (
    <div className={`flex justify-between items-center gap-36 w-full ${reverse ? "flex-row-reverse": ""}`}>
        <div className="flex flex-col gap-10 w-full">
            <div className='flex flex-col gap-2'>
                <h2 className="title text-7xl w-full">{street}</h2>
                <p className="text-md">{location}</p>
            </div>

            <div className='flex flex-col gap-6'>
                <div className='flex justify-between'>
                    <p className="text-md">{phone}</p>
                    <p className="text-md">{mail}</p>
                </div>
                <hr className="w-full border-text" />
                <h2 className="title text-6xl">Store Hours</h2>
            </div>

            <div className="flex flex-col gap-12">
                <div className="flex justify-between">
                    <p className="text-md">{schedule[0].date}</p>
                    <p className="text-md">{schedule[0].time}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-md">{schedule[1].date}</p>
                    <p className="text-md">{schedule[1].time}</p>
                </div>
            </div>
        </div>
        <Image src={image} className="min-w-[40vw] object-contain" />
    </div>
  )
}

export default Location
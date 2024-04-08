import React from 'react'
import Image from 'next/image'
import commitment from "../../../public/commitment.png"

const Commitment = () => {
  return (
    <div className='flex justify-between items-center bg-secondary-main px-[160px] h-[120vh] w-full gap-36 py-32'>
      <div className='w-full relative aspect-[2/3] max-h-[80vh]'>
        <div className='absolute w-full h-full z-0 top-5 rounded-[3rem] bg-primary'></div>
        <div className='absolute w-full h-full z-10 -top-5 left-10'>
          <Image className="rounded-[3rem] w-full h-full object-cover" src={commitment} alt="commitment"/>
        </div>
      </div>
      
      <div className="flex flex-col gap-10 min-w-fit">
        <h2 className='title text-8xl'>We care to <br/>bring the best.</h2>
        <p className='text-2xl leading-[4rem]'>
          <strong>Natural</strong> ingredients<br/>
          <strong>22</strong> unique flavour<br/>
          <strong>24-hour</strong> resting time<br/>
          <strong>Fresh</strong> fruits and jam<br/>
          <strong>0</strong> additives and preservatives
        </p>
      </div>
    </div>
  )
}

export default Commitment
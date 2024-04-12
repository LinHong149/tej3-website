import React from 'react'

const Steps = () => {
    const info = [
        [1, "Pick a box", "Choose how many macarons you want to buy."],
        [2, "Choose your flavours", "We have a wide variety of 22 flavours to choose from. Try them all!"],
        [3, "Place your order", "Choose to have it delivered or pickup."],
    ]
  return (
    <div className='w-full h-fit py-24 flex justify-between p-[60px] gap-10'>
        {info.map(([index, title, description]) => (
            <div key={index} className='max-w-[30vw] w-full'>
                <span className='flex items-center gap-2'>
                    <h2 className='title text-9xl text-highlight opacity-25'>{index}</h2>
                    <h2 className='title text-5xl text-highlight pt-8'>{title}</h2>
                </span>
                <p className='text-text text-xl opacity-50'>{description}</p>
            </div>

        ))}
    </div>
  )
}

export default Steps
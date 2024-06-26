import React from 'react'

const Button = ({text}) => {
  return (
    <div className='bg-secondary px-[40px] py-[16px] rounded-full text-main text-lg w-fit hover:bg-[#b56475] duration-200'>{text}</div>
  )
}

export default Button
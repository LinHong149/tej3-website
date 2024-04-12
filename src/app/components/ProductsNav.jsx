import React from 'react'

const ProductsNav = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex flex-row gap-10 [&>*]:textlgl'>
            <a>Pick a box</a>
            <a>Choose your flavours</a>
            <a>Place your order</a>
        </div>
        <hr className='w-full border-text' />
    </div>
  )
}

export default ProductsNav
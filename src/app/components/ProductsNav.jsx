import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ProductsNav = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex flex-row gap-10 [&>*]:textlgl'>
            <a onClick={() => router.push(`/products/flavours`)}>Pick a box</a>
            <a onClick={() => router.push(`/products/box`)}>Choose your flavours</a>
            {/* <a onClick={() => router.push(`/products/${product}/`)}>Place your order</a> */}
        </div>
        <hr className='w-full border-text' />
    </div>
  )
}

export default ProductsNav
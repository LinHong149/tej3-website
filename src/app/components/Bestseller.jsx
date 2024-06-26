import React from 'react'
import { constants } from '../constants'
import { ProductImage } from './miniComponents/ProductImage'
import Link from 'next/link'

const Bestseller = () => {
  const wSmall = 300, hSmall = 240, wLarge = 360, hLarge = 288
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-16'>
        <h2 className='text-center w-fit text-8xl title'>Our Best Sellers</h2>
        <div className='flex gap-20 items-end [&>*]:gap-6 [&>*]:text-3xl'>
          <div className='flex flex-col items-center gap-6'>
            <Link href="/products/Cookie%20Dough">
              <ProductImage width={wSmall} height={hSmall} src={constants.bestsellersInfo[0].image}></ProductImage>
            </Link>
            <h2 className='w-fit text-2xl'>{constants.bestsellersInfo[0].product}</h2>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <Link href="/products/Raspberry%20Lemon">
              <ProductImage width={wLarge} height={hLarge} src={constants.bestsellersInfo[1].image}></ProductImage>
            </Link>
            <h2 className='w-fit text-2xl'>{constants.bestsellersInfo[1].product}</h2>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <Link href="/products/Cookies%20&%20Cream">
              <ProductImage width={wSmall} height={hSmall} src={constants.bestsellersInfo[2].image}></ProductImage>
            </Link>
            <h2 className='w-fit text-2xl'>{constants.bestsellersInfo[2].product}</h2>
          </div>
        </div>
    </div>
  )
}

export default Bestseller
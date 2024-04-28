import React from 'react'
import Link from 'next/link'
import { ProductImage } from './miniComponents/ProductImage'
import { constants } from '../constants'

const Suggestions = () => {
  return (
    <div className='flex flex-col gap-10'>
        <h2 className="title text-7xl">You May Also Like</h2>

        <div className="flex justify-between">
            <div className='flex flex-col items-center gap-6'>
                <Link href={`/products/Chocolate%20Raspberry`}>
                    <ProductImage width={288} height={360} src={constants.productsFlavours[0].image}></ProductImage>
                </Link>
                <h2 className='w-fit text-2xl'>{constants.productsFlavours[0].name}</h2>
            </div>

            <div className='flex flex-col items-center gap-6'>
                <Link href={`/products/Raspberry%20Lemon`}>
                    <ProductImage width={288} height={360} src={constants.productsFlavours[1].image}></ProductImage>
                </Link>
                <h2 className='w-fit text-2xl'>{constants.productsFlavours[1].name}</h2>
            </div>

            <div className='flex flex-col items-center gap-6'>
                <Link href="/products/Cookie%20Dough">
                    <ProductImage width={288} height={360} src={constants.productsFlavours[2].image}></ProductImage>
                </Link>
                <h2 className='w-fit text-2xl'>{constants.productsFlavours[2].name}</h2>
            </div>

            <div className='flex flex-col items-center gap-6'>
                <Link href="/products/Cookies%20&%20Cream">
                    <ProductImage width={288} height={360} src={constants.productsFlavours[3].image}></ProductImage>
                </Link>
                <h2 className='w-fit text-2xl'>{constants.productsFlavours[3].name}</h2>
            </div>
        </div>
    </div>
  )
}

export default Suggestions
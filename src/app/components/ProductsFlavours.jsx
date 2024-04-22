import React, { useState } from 'react'
import { ProductImage } from "./miniComponents/ProductImage"
import { constants } from '../constants'
import ProductSpecials from './miniComponents/ProductSpecials'
import Link from 'next/link'

const ProductsFlavours = () => {
  const [quantities, setQuantities] = useState(constants.productsFlavours.map(product => product.quantity));

  return (
    <div className='flex flex-col gap-10'>
      <ProductSpecials />
      <div className='flex flex-wrap justify-between gap-10'>
        {/* MAKE QUANTITY BASED ON ACCOUNT */}
          {constants.productsFlavours.map(({image, name}) => ( 
            <div className='flex flex-col items-center gap-4 min-w-[300px] '>
              <Link href={`/products/${name}`}>
                <ProductImage width={275} height={300} src={image}></ProductImage>
              </Link>
                  <h2 className='text-2xl'>{name}</h2>
                  <div className='border rounded-sm border-text flex items-center gap-2'>
                      {/* <div
                      className='bg-black w-10 h-10'
                      onClick={quantity -= 1}>
                      </div>
                      {quantity}
                      <div
                      className='bg-black w-10 h-10'
                      onClick={() => (quantity += 1)}>
                    </div> */}
                  </div>
              </div>
          ))}
        </div>
    </div>
  )
}

export default ProductsFlavours
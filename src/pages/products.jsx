
import React from 'react'
import Banner from "../app/components/miniComponents/Banner"
import Nav from '../app/components/Nav'
import Steps from '@/app/components/Steps'
import ProductsNav from '@/app/components/ProductsNav'
import ProductsFlavours from '@/app/components/ProductsFlavours'
import LoginButton from '@/app/components/LoginButton'

export default function Products() {
  return (
    <div className='p-0 m-0'>
        <Banner />
        <Nav />
        <LoginButton />
        <Steps />
        <div className='p-[60px] flex flex-col gap-20'>
            <ProductsNav />
            {/* Specials */}
            <ProductsFlavours />
        </div>
    </div>
  )
}

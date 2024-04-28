import React, { useState } from 'react'
import Banner from "../../app/components/miniComponents/Banner"
import Nav from '../../app/components/Nav'
import ProductsFlavours from '../../app/components/ProductsFlavours'
import LoginButton from '../../app/components/LoginButton'
import ProductsBanner from "../../../public/products_banner.png"

export default function Products() {
  const [activeTab, setActiveTab] = useState("box")
  return (
    <div className='p-0 m-0'>
        <Banner image={ProductsBanner} />
        <Nav />
        <div className='p-[60px] pt-[120px] pb-[250px] flex flex-col gap-20'>
          <ProductsFlavours/>
        </div>
    </div>
  )
}

function Box() {
  return (
    <div>Box</div>
  );
}

function Checkout() {
  return (
    <div>Checkout</div>
  );
}
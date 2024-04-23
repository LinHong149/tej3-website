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
        {/* <LoginButton /> */}
        {/* <Steps /> */}
        <div className='p-[60px] pt-[120px] flex flex-col gap-20'>
          {/* <div className='flex flex-col gap-2'>
              <div className='flex flex-row gap-10 [&>*]:textlgl'>
                  <button onClick={() => setActiveTab("box")}>Pick a box</button>
                  <button onClick={() => setActiveTab("flavour")}>Choose your flavours</button>
                  <button onClick={() => setActiveTab("checkout")}>Place your order</button>
              </div>
              <hr className='w-full border-text' />
          </div> */}

          {/* {activeTab === "box" && <Box/>} */}
          {/* {activeTab === "flavour" && <Flavour/>} */}
          <ProductsFlavours/>
          {/* {activeTab === "checkout" && <Checkout/>} */}
            {/* <ProductsFlavours /> */}
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
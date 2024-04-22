import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const CartSummary = ({nProducts, price}) => {
    const [checkoutPath, setCheckoutPath] = useState("/login")
    
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setCheckoutPath("/checkout");
        } else {
            setCheckoutPath("/login");
        }

    }, []);

  return (
    <div className='flex flex-col gap-6 p-10 min-w-[30vw] border rounded-[2rem]'>
        <h2 className="title text-5xl">Order Summary</h2>
        <div className='flex flex-col gap-4'>
            <div className="flex justify-between w-full">
                <p className="opacity-50 text-text text-md">{`Products (${nProducts})`}</p>
                <p className="opacity-50 text-text text-md">{`$${price}`}</p>
            </div>
            <div className="flex justify-between w-full">
                <p className="opacity-50 text-text text-md">{`Discount`}</p>
                <p className="opacity-50 text-text text-md">{`$${price}`}</p>
            </div>
            <div className="flex justify-between w-full">
                <p className="opacity-50 text-text text-md">{`Tax`}</p>
                <p className="opacity-50 text-text text-md">{`$${price}`}</p>
            </div>
            <div className="flex justify-between w-full">
                <p className="opacity-50 text-text text-md">{`Shipping`}</p>
                <p className="opacity-50 text-text text-md">{`$${price}`}</p>
            </div>
        </div>

        <hr className="opacity-50 w-full border-text" />


        <div className="flex justify-between w-full">
            <p className="font-medium text-text text-2xl">{`Total`}</p>
            <p className="font-medium text-text text-2xl">{`$${price}`}</p>
        </div>

        <Link className='bg-primary rounded-lg h-14 text-lg pt-1 flex items-center justify-center' href={checkoutPath}>Proceed to Checkout</Link>
    </div>
  )
}

export default CartSummary
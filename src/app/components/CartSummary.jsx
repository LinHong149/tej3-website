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
    <div className='flex flex-col gap-6 p-10 w-[35vw] border rounded-[2rem]'>
        <h2 className="title text-5xl">Order Summary</h2>
        <div className='flex flex-col gap-4'>
            <div className="flex justify-between w-full">
                <p className="opacity-50 text-text text-sm">{`Products (${nProducts})`}</p>
                <p className="opacity-50 text-text text-sm">{`$${price}`}</p>
            </div>
            <div className="flex justify-between w-full">
                <p className="opacity-50 text-text text-sm">{`Discount`}</p>
                <p className="opacity-50 text-text text-sm">{`$${price}`}</p>
            </div>
            <div className="flex justify-between w-full">
                <p className="opacity-50 text-text text-sm">{`Tax`}</p>
                <p className="opacity-50 text-text text-sm">{`$${price}`}</p>
            </div>
            <div className="flex justify-between w-full">
                <p className="opacity-50 text-text text-sm">{`Shipping`}</p>
                <p className="opacity-50 text-text text-sm">{`$${price}`}</p>
            </div>
        </div>

        <hr className="opacity-50 w-full border-text" />


        <div className="flex justify-between w-full">
            <p className="font-medium text-text text-xl">{`Total`}</p>
            <p className="font-medium text-text text-xl">{`$${price}`}</p>
        </div>

        <Link className='bg-primary rounded-lg h-14 text-lg pt-1 flex items-center justify-center' href={checkoutPath}>Proceed to Checkout</Link>
        <Link className='border-text border-2 bg-transparent rounded-lg h-14 text-lg pt-1 flex text-text items-center justify-center' href="/products">Continue Shopping</Link>
    </div>
  )
}

export default CartSummary
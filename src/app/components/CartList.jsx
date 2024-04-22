import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Image from 'next/image'


const CartList = ({nProducts, price}) => {
    const { status } = useSession()
    const [checkoutPath, setCheckoutPath] = useState("/login")

    useEffect(() => {
        if (status === "authenticated") {
            setCheckoutPath("/checkout");
        } else {
            setCheckoutPath("/login");
        }

    }, [status]);

  return (
    <div className='flex flex-col gap-6 p-10 w-full  border rounded-[2rem]'>
        <h2 className="title text-5xl">Shopping Cart</h2>

        <div>
            <Image src=""></Image>
        </div>

    </div>
  )
}

export default CartList
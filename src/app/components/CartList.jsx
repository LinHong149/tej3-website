import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { constants } from '../constants.jsx'

const CartList = ({nProducts, price}) => {
    const [ cartList, setCartList ] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    
    useEffect(() => {
        async function GetList () {
            const token = localStorage.getItem("token")
            if (!token) {
                console.log("No token found, please log in");
                return;
            }

            try {
                const response = await fetch ("api/getCartList", {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + token,
                        "Content-Type": "application/json"
                    },
                })
                
                
                if (!response.ok) {
                    throw new Error("Could not get list")
                }
                
                const data = await response.json()
                const filteredData = data.filter(item => item.quantity > 0);
                console.log("Successfully retrieved cart list")
                setCartList(filteredData)
                
            } catch (error) {
                console.log(error.message)
                setError(error.message)
            } finally {
                setIsLoading(false);
            }
        }       
        GetList();
    }, [])

    console.log("Cart list is: ",cartList)
    console.log(cartList.length)

  return (
    <div className='flex flex-col gap-6 p-10 w-full  border rounded-[2rem]'>
        <h2 className="title text-5xl">Shopping Cart</h2>

        {isLoading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>{error}</p>
        ) : cartList.length > 0 ? (
            cartList.map((item, index) => (
                <div key={index}>
                    <p>{item.product} - Quantity: {item.quantity}</p>
                </div>
            ))
        ) : (
            <p>Your cart is empty.</p>
        )}

    </div>
  )
}

export default CartList
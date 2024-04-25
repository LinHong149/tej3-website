import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { constants } from '../constants.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartList = ({nProducts, price}) => {
    const [ cartList, setCartList ] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [loggedOut, setLoggedOut] = useState(false)
    
    
    useEffect(() => {
        async function GetList () {
            const token = localStorage.getItem("token")
            if (!token) {
                console.log("No token found, please log in");
                setLoggedOut(true)
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
        ) : loggedOut ? (
            <p>Log in to view your items.</p>
        ) : error ? (
            <p>{error}</p>
        ) : cartList.length > 0 ? (
            cartList.map((item, index) => (
                <div key={index} className="flex justify-between gap-10">
                    <div className='flex gap-4'>
                        <Image 
                            className='w-32'
                            src={constants.productsFlavours.find(product => product.name === item.product).image} alt={item.product}
                            />
                        
                        <div className="flex flex-col h-full justify-between">
                            <p className='text-xl'>{item.product} Macarons</p>

                            <div className='flex flex-row items-center justify-between px-2 py-1 border-text border rounded-md w-fit gap-2'>
                                {/* <FontAwesomeIcon onClick={handleDecrement} className='w-5 h-5' size='1x' color='black' icon={faMinus} /> */}
                                <p className='text-xl min-w-6 text-center pt-1'>
                                {item.quantity}
                                </p>
                                {/* <FontAwesomeIcon onClick={handleIncrement} className='w-5 h-5' size='1x' color='black' icon={faPlus} /> */}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <p className='font-medium'>${((constants.productsFlavours.find(product => product.name === item.product).price)*item.quantity).toFixed(2)}</p>
                    </div>

                </div>
            ))
        ) : (
            <p>Your cart is empty.</p>
        )}

    </div>
  )
}

export default CartList
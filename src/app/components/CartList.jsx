import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { constants } from '../constants.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CartList = () => {
    const [cartList, setCartList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [loggedOut, setLoggedOut] = useState(false);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    useEffect(() => {
        fetchCartList();
    }, []);

    const fetchCartList = async () => {
        const token = getCookie("token");
        if (!token) {
            console.log("No token found, please log in");
            setLoggedOut(true);
            return;
        }

        try {
            const response = await fetch("api/getCartList", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
            });

            if (!response.ok) {
                throw new Error("Could not get list");
            }

            const data = await response.json();
            const filteredData = data.filter(item => item.quantity > 0);
            setCartList(filteredData);

        } catch (error) {
            console.error(error.message);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const updateQuantity = async (product, newQuantity) => {
        const token = getCookie("token");
        if (!token) {
            console.log("No token found, please log in");
            return;
        }

        try {
            const response = await fetch(`api/updateQuantity`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ product, quantity: newQuantity })
            });

            if (!response.ok) {
                throw new Error('Failed to update quantity');
            }
            await fetchCartList(); // Refresh cart list
            window.location.reload()
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
    };

    const increaseQuantity = (index) => {
        const newQuantity = cartList[index].quantity + 1;
        updateQuantity(cartList[index].product, newQuantity);
    };

    const decreaseQuantity = (index) => {
        const currentQuantity = cartList[index].quantity;
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            updateQuantity(cartList[index].product, newQuantity);
        }
    };

    return (
        <div className='flex flex-col gap-10 p-10 w-full border rounded-[2rem]'>
            <h2 className="title text-5xl">Shopping Cart</h2>

            {isLoading ? (
                <p>Loading...</p>
            ) : loggedOut ? (
                <div className='flex flex-col gap-4'>
                    <p>Log in to view your items.</p>
                    <Link href="/login">
                        <a className='bg-primary rounded-lg h-14 text-lg pt-1 flex items-center justify-center w-40'>Log in</a>
                    </Link>
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : cartList.length > 0 ? (
                cartList.map((item, index) => (
                    <div key={index} className="flex justify-between gap-10">
                        <div className='flex gap-4'>
                            <Image
                                width={144} height={144} className='w-36'
                                src={constants.productsFlavours.find(product => product.name === item.product).image} alt={item.product}
                            />

                            <div className="flex flex-col h-full justify-between">
                                <p className='text-2xl'>{item.product} Macarons</p>

                                <div className='flex flex-row items-center justify-between px-2 py-1 border-text border rounded-md w-fit gap-2'>
                                    <FontAwesomeIcon className='cursor-pointer' icon={faMinus} onClick={() => decreaseQuantity(index)} />
                                    <p className='text-xl min-w-6 text-center pt-1'>
                                        {item.quantity}
                                    </p>
                                    <FontAwesomeIcon className='cursor-pointer' icon={faPlus} onClick={() => increaseQuantity(index)} />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <p className='font-medium'>${(constants.productsFlavours.find(product => product.name === item.product).price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CartList;

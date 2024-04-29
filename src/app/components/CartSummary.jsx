import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CartSummary = () => {
    const [checkoutPath, setCheckoutPath] = useState("/login");
    const [prices, setPrices] = useState({
        nProducts: 0,
        productTotal: 0,
        discount: 0,
        tax: 0,
        shipping: 0,
        total: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    useEffect(() => {
        const token = getCookie("token");
        if (token) {
            setCheckoutPath("/checkout");
            fetchPrices(token); // Pass token to fetchPrices
        } else {
            setCheckoutPath("/login");
            setIsLoading(false);
        }
    }, []);

    const fetchPrices = async (token) => {
        setIsLoading(true); // Set loading true while fetching
        try {
            const response = await fetch('/api/prices', {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch prices');
            }
            const data = await response.json();
            setPrices({
                nProducts: data.nProducts,
                productTotal: data.productTotal,
                discount: data.discount,
                tax: data.tax,
                shipping: data.shipping,
                total: data.total
            });
        } catch (error) {
            console.error('Error fetching prices:', error);
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    if (isLoading) {
        return <div className='flex flex-col gap-6 p-10 w-[35vw] border rounded-[2rem]'>Loading...</div>; // Render loading indicator while fetching data
    }

    return (
        
        <div className='flex flex-col gap-6 p-10 w-[35vw] border rounded-[2rem] h-fit'>
            <h2 className="title text-5xl">Order Summary</h2>
            <div className='flex flex-col gap-4'>
                <div className="flex justify-between w-full">
                    <p className="opacity-50 text-text text-sm">{`Products (${prices.nProducts})`}</p>
                    <p className="opacity-50 text-text text-sm">{`$${(prices.productTotal).toFixed(2)}`}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="opacity-50 text-text text-sm">{`Discount`}</p>
                    <p className="opacity-50 text-text text-sm">{`-$${(prices.discount).toFixed(2)}`}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="opacity-50 text-text text-sm">{`Tax`}</p>
                    <p className="opacity-50 text-text text-sm">{`$${(prices.tax).toFixed(2)}`}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="opacity-50 text-text text-sm">{`Shipping`}</p>
                    <p className="opacity-50 text-text text-sm">{`$${(prices.shipping).toFixed(2)}`}</p>
                </div>
            </div>
            
            <hr className="opacity-50 w-full border-text" />
            <div className="flex justify-between w-full">
                <p className="font-medium text-text text-xl">{`Total`}</p>
                <p className="font-medium text-text text-xl">{`$${(prices.total).toFixed(2)}`}</p>
            </div>
            <Link href={checkoutPath} className='bg-primary rounded-lg h-14 text-lg pt-1 flex items-center justify-center'>Proceed to Checkout</Link>
            <Link href="/products" className='border-text border-2 bg-transparent rounded-lg h-14 text-lg pt-1 flex text-text items-center justify-center'>Continue Shopping</Link>
        </div>
    );
}

export default CartSummary;

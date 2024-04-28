import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Nav from '../../../app/components/Nav'
import Suggestions from '../../../app/components/Suggestions'
import { constants } from '../../../app/constants'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from "../../../app/components/miniComponents/Button"

const index = () => {
  const router = useRouter()
  const { product } = router.query
  const [num, setNum] = useState(1)
  const [addToCartFailed, setAddToCartFailed] = useState(false)

  const handleDecrement = () => {
    setNum(prevNum => Math.max(0, prevNum-1))
  }
  const handleIncrement = () => {
    setNum(prevNum => prevNum+1)
  }

  const [productIndex, setProductIndex] = useState(-1);

  useEffect(() => {
    if (product) {
      const index = constants.productsFlavours.findIndex(p => p.name === product);
      setProductIndex(index);
    }
  }, [product]);  // Only re-run the effect if the product changes

  if (productIndex === -1) {
    return <div>Loading...</div>; // or some error message or fallback UI
  }

  const { image, description, price } = constants.productsFlavours[productIndex];

  const renderDescription = (description) => {
    return description.split('<br/>').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br/>
      </React.Fragment>
    ));
  };


  // Check that num is not 0
  async function AddToCart () {
    if (num === 0) {
      console.log("Quantity must be greater than zero");
      return;
    }
  
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found, please log in");
      router.push("/login")
      // setAddToCartFailed(true)
      return;
    }

    const response = await fetch("/api/addToCart", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({product, num})
    })

    if (!response.ok) {
      console.log("Could not add to cart")
    }
    else {
      console.log("Added to Cart")
    }
  }


  return (
    <div className='flex flex-col gap-10 px-[120px] py-[20vh]'>
        <Nav />

        <span className='flex gap-2'>
          <Link href="/products">Choose your flavours</Link>
          <p> / </p>
          <p className='w-fit h-min'>{product} Macarons</p>
        </span>

        
        <div className='h-screen flex justify-between gap-10'>
          <Image src={image} className="min-w-[40vw] h-fit object-contain"></Image>

          <div className="flex flex-col gap-6">
            <h2 className='title text-8xl'>{product} Macarons</h2>
            <p className="text-md leading-[2rem]">
            {renderDescription(description)}
            </p>
            
            <div className='flex flex-col'>
              <p className="text-sm">Quantity</p>
              <div className='flex flex-row items-center justify-between px-2 py-1 border-text border rounded-md w-fit gap-2'>
                <FontAwesomeIcon onClick={handleDecrement} className='w-5 h-5' size='1x' color='black' icon={faMinus} />
                <p className='text-xl min-w-6 text-center pt-1'>
                {num}
                </p>
                <FontAwesomeIcon onClick={handleIncrement} className='w-5 h-5' size='1x' color='black' icon={faPlus} />
              </div>
            </div>

            <p className="font-medium text-xl">${(price*num).toFixed(2)}</p>

            <div className='flex flex-col gap-2 items-center'>
              <div onClick={() => AddToCart()} className='flex items-center justify-center bg-secondary px-[40px] py-[16px] opacity-60 font-medium rounded-3xl w-full text-main text-lg'>Add To Cart</div>
              {/* {addToCartFailed ?
              <p className="text-red-500 text-xm">Please log in to add to cart.</p>
              : ""} */}
            </div>
          </div>
        </div>

        <Suggestions />
    </div>
  )
}

export default index
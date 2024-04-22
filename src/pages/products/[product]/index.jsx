import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Nav from '../../../app/components/Nav'
import { constants } from '../../../app/constants'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';


const index = () => {
  const router = useRouter()
  const { product } = router.query
  const num = 0

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

  const { image, description } = constants.productsFlavours[productIndex];

  const renderDescription = (description) => {
    return description.split('<br/>').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br/>
      </React.Fragment>
    ));
  };


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
              <div className='flex flex-row items-center justify-between p-2 border-text border rounded-md w-fit'>
                <FontAwesomeIcon className='w-5 h-5' size='1x' color='black' icon={faMinus} />
                {num}
                <FontAwesomeIcon className='w-5 h-5' size='1x' color='black' icon={faPlus} />
              </div>
            </div>
          </div>
        
        </div>
    </div>
  )
}

export default index
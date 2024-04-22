import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Nav from '@/app/components/Nav'
import { constants } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link';

const index = () => {
  const router = useRouter()
  const { product } = router.query

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

        <span className='flex gap-2 [&>*]:font-bold'>
          <Link href="/products">Products</Link>
          <p> / </p>
          <p className='w-fit h-min'>{product}</p>
        </span>

        
        <div className='h-screen flex justify-between gap-10'>
          <Image src={image} className="min-w-[40vw] h-fit object-contain"></Image>

          <div className="flex flex-col gap-20">
            <h2 className='title text-8xl'>{product} Macarons</h2>
            <p className="text-md">
            {renderDescription(description)}
            </p>
          </div>
        
        </div>
    </div>
  )
}

export default index
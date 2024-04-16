import React from 'react'
import Nav from '@/app/components/Nav'
import CartList from '@/app/components/CartList'
import CartSummary from '@/app/components/CartSummary'

const cart = () => {
  return (
    <div className='p-[120px]'>   
        <Nav />
        <div className="flex justify-between">
            <CartList />
            <CartSummary />
        </div>

        {/* You may also like */}
    </div>
  )
}

export default cart
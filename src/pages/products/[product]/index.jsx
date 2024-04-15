import React from 'react'
import { useRouter } from 'next/router'
import Nav from '@/app/components/Nav'

const index = () => {
  const router = useRouter()
  const { product } = router.query

  return (
    <div>
        <Nav />
        <div className='h-screen flex items-center'>{product}</div>
    </div>
  )
}

export default index
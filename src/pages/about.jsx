import React from 'react'
import Banner from "../app/components/miniComponents/Banner"
import Nav from '../app/components/Nav'
import Steps from '@/app/components/Steps'
import ProductsNav from '@/app/components/ProductsNav'
import ProductsFlavours from '@/app/components/ProductsFlavours'
import LoginButton from '@/app/components/LoginButton'
import AboutBanner from "../../public/about_banner.png"
import AboutDescription from '@/app/components/AboutDescription'
import AboutImages from '@/app/components/AboutImages'

const about = () => {
  return (
    <div>
        <Banner image={AboutBanner} />
        <Nav />
        <AboutDescription />
        <AboutImages />
        
    </div>
  )
}

export default about
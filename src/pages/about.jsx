import React from 'react'
import Banner from "../app/components/miniComponents/Banner"
import Nav from '../app/components/Nav'
import AboutBanner from "../../public/about_banner.jpeg"
import AboutDescription from '../app/components/AboutDescription'
import AboutImages from '../app/components/AboutImages'

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
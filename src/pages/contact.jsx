import React from 'react'
import Banner from '../app/components/miniComponents/Banner'
import Nav from '../app/components/Nav'
import Location from '../app/components/Location'
import ContactBanner from "../../public/contact_banner.jpeg"


const contacts = () => {
  return (
    <div>
      <Banner image={ContactBanner} />
      <Nav />
      <div className='flex flex-col gap-36 p-[150px]'>
        <Location index={0} reverse={false} />
        <Location index={1} reverse={true} />
      </div>
    </div>
  )
}

export default contacts
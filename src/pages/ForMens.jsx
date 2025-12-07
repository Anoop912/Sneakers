import React from 'react'
import { Sidebarforemens } from '../components/Sidebarforemens'
import MainShoeSection from '../components/MainShoeSection'
import Banner from '../components/Banner'

function ForMens() {
  return (
    <div className='flex relative '>
      <div className=' fixed z-1 md:relative'>
        <Sidebarforemens/>
        <Banner/>
        </div>
        <div>
        <MainShoeSection/>
        </div>
    </div>
  )
}

export default ForMens
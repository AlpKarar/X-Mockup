import React from 'react'
import NavigatorHeader from './NavigatorHeader'
import ContentBanner from './ContentBanner'
import Sidebar from './Sidebar'

const HomePage = () => {
  return (
    <div className='grid grid-cols-4 gap-5 p-5 h-full'>
        <NavigatorHeader/>
        <ContentBanner/>
        <Sidebar/>
    </div>
  )
}

export default HomePage
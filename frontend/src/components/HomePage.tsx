import React from 'react'
import NavigatorHeader from './NavigatorHeader'
import ContentBanner from './ContentBanner'
import Sidebar from './Sidebar'

const HomePage = () => {
  return (
    <div>
        <NavigatorHeader/>
        <ContentBanner/>
        <Sidebar/>
    </div>
  )
}

export default HomePage
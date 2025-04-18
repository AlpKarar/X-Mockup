import React from 'react'
import linkItems from '../data/link-items'

const NavigatorHeader = () => {
  return (
    <div className='col-span-1 border-black border-2'>
        <nav className='flex flex-col'>
            {linkItems.map((linkItem, idx) => {
                return (<a key={idx} href={linkItem.linkPath}>
                    {linkItem.name}
                </a>)
            })}
        </nav>
    </div>
  )
}

export default NavigatorHeader
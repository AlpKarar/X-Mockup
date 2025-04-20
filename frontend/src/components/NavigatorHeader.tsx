import React, {useState} from 'react'
import linkItems from '../data/link-items'
import accountContainerIcons from '../data/account-container-icons';

const NavigatorHeader = () => {
    const [isDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)"));
    const btnBackgroundColor = isDarkMode ? 'white' : 'black'
    const btnColor = isDarkMode ? 'black' : 'white'

    return (
      <div className='flex flex-col justify-between col-span-1 py-4 px-6 border-gray-800 border-[1px]'>
          <div>
            <nav className='flex flex-col gap-4'>
                {linkItems.map((linkItem, idx) => {
                    return (<div key={idx} className='flex items-center gap-2'>
                        <img src={isDarkMode ? linkItem.iconNightSrc : linkItem.iconDaySrc} width="30" height="30" />
                        <a href={linkItem.linkPath}>
                            {linkItem.name}
                        </a>
                    </div>)
                })}
            </nav>
            <button className='w-[90%] my-5 py-2 rounded-[20px] font-bold' style={{backgroundColor: btnBackgroundColor, color: btnColor}}>Post</button>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <div>
                    {true ? <div className='w-[40px] aspect-square bg-slate-500 rounded-[50%]'></div> : <img alt="PP"/>}
                </div>
                <div className='text-[15px]'>
                    <p className='font-bold max-w-[100px] whitespace-nowrap text-ellipsis overflow-hidden'>Test</p>
                    <p className='font-thin text-gray-400'>@Test</p>
                </div>  
            </div>
            <div>
                <img src={!isDarkMode ? accountContainerIcons.dotsDaySrc : accountContainerIcons.dotsNightSrc } alt="..." width="15"/>
            </div>
          </div>
      </div>
    )
}

export default NavigatorHeader
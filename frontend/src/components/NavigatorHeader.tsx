import React, {useContext} from 'react'
import linkItems from '../data/link-items'
import accountContainerIcons from '../data/account-container-icons';
import GeneralContext from '../context/GeneralContext';

const NavigatorHeader = () => {
    const context = useContext(GeneralContext)
    const {isDarkMode} = context
    const btnBackgroundColor = isDarkMode ? 'white' : 'black'
    const btnColor = isDarkMode ? 'black' : 'white'
    

    return (
      <div className='flex flex-col justify-between col-span-1 py-4 px-5 border-gray-800 border-[1px]'>
          <div>
            <div className='mb-5 px-2 w-full cursor-pointer'>
              <div className='w-[45px] flex justify-start items-center rounded-[50%] aspect-square hover:bg-gray-700'>
                <img src={`./static/icons-x-${isDarkMode ? 'night' : 'day'}.png`} alt="X-logo" width="40"/>
              </div>
            </div>
            <nav className='flex flex-col gap-4'>
                {linkItems.map((linkItem, idx) => {
                    return (<div key={idx} className='w-full flex justify-start items-center gap-6 rounded-[20px] hover:bg-gray-700 px-3 py-2 cursor-pointer'>
                        <img src={isDarkMode ? linkItem.iconNightSrc : linkItem.iconDaySrc} alt="" width="30" height="30" />
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
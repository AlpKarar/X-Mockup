import React, { useContext } from 'react'
import GeneralContext from '../context/GeneralContext'

const DayNightButton = () => {
    const context = useContext(GeneralContext)
    const {isDarkMode, setIsDarkMode} = context

    return (
      <div className='absolute top-8 right-8 flex justify-center items-center w-[35px] aspect-square rounded-[50%] cursor-pointer hover:bg-gray-500'
        onClick={() => setIsDarkMode(!isDarkMode)}>
          <img src={`./static/icons-${isDarkMode ? 'day' : 'night'}.png`} alt="Day/Night"/>
      </div>
    )
}

export default DayNightButton
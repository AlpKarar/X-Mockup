import React from 'react'

const DayNightButton = (props: {
    isDarkMode: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const {isDarkMode, setIsDarkMode} = props

    return (
      <div className='absolute top-8 right-8 flex justify-center items-center w-[35px] aspect-square rounded-[50%] cursor-pointer hover:bg-gray-500'
        onClick={() => setIsDarkMode(!isDarkMode)}>
          <img src={`./static/icons-${isDarkMode ? 'day' : 'night'}.png`} alt="Day/Night"/>
      </div>
    )
}

export default DayNightButton
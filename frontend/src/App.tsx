import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import DayNightButton from './components/DayNightButton';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
    const backgroundColor = isDarkMode ? 'black' : 'white'
    const color = isDarkMode ? 'white' : 'black'

    return (
      <div className='relative w-full h-[100vh]' style={{backgroundColor: backgroundColor, color: color}}>
        <DayNightButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <HomePage/>
      </div>
    );
}

export default App;

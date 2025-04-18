import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

function App() {
    const [isDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)"))
    const backgroundColor = isDarkMode ? 'black' : 'white'
    const color = isDarkMode ? 'white' : 'black'

    return (
      <div className='w-full h-[100vh]' style={{backgroundColor: backgroundColor, color: color}}>
        <HomePage/>
      </div>
    );
}

export default App;

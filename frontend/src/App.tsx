import {useContext} from 'react';
import './App.css';
import HomePage from './components/HomePage';
import GeneralContext from './context/GeneralContext';

function App() {
    const context = useContext(GeneralContext)
    const {isDarkMode,} = context
    const backgroundColor = isDarkMode ? 'black' : 'white'
    const color = isDarkMode ? 'white' : 'black'

    return (
      <div className="w-full h-[100vh]" style={{backgroundColor: backgroundColor, color: color}}>
        <HomePage/>
      </div>);
}

export default App;

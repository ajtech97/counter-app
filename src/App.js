import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);
  const [counterText, setCounterText] = useState('');

  const handleCountAddition = () => {
    setCount(prevCount =>  prevCount  + 1)
  }

  const handleCountSubtract = () => {
    setCount(prevCount => prevCount - 1)
  }

  const handleCounterTextChange = (event) => {
    setCounterText(event.target.value)
  }


  return(
    <main>
        <h1>Counter App</h1>
        <input 
          type='text' 
          class ="counter-text" 
          placeholder='Enter name for your counter' 
          value={counterText} 
          onChange={handleCounterTextChange} 
          />
        <div class ="counter-count">
          {count}
        </div>
        <div class ="button-container">
          <button 
            class ="button-subtract" 
            onClick={handleCountSubtract}>
            -
          </button>
          <button 
            class ="button-add" 
            onClick={handleCountAddition}>
            +
            </button>
        </div>
    </main>
  );
}

export default App;

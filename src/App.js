import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(() =>{
    const saved = localStorage.getItem("count");
    const initvalue = JSON.parse(saved);
    return initvalue || 0;
  });

  const [counterText, setCounterText] = useState(() =>{
    const saved = localStorage.getItem("counterText");
    const initvalue = JSON.parse(saved)
    return initvalue || "";
  });

  const handleCountAddition = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleCountSubtract = () => {
    setCount(prevCount => prevCount - 1)
  }

  const handleCounterTextChange = (event) => {
    setCounterText(event.target.value)
  }

  const saveCounterNameCountLocally = () =>{
    localStorage.setItem("count",JSON.stringify(count))
    localStorage.setItem("counterText", JSON.stringify(counterText))
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
        <div class ="button-container">
          <button 
            class ="button-save" 
            onClick={saveCounterNameCountLocally}>
            Save
          </button>
        </div>
    </main>
  );
}

export default App;

import React from 'react';
import './App.css';

const App = () => {

  return(
    <div class ="main">
      {/* <div class ="inner-container"> */}
        <div class ="title">Counter App</div>
        <input type='text' placeholder='Enter name for your app' class ="cnt-text" />
        <div class ="cnt">{0}</div>
        <div class ="btn-container">
          <button class ="btn cnt-left">-</button>
          <button class ="btn cnt-right">+</button>
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
import './App.css';

const App = () => {

  return(
    <main>
        <h1>Counter App</h1>
        <input type='text' class ="counter-text" placeholder='Enter name for your counter' />
        <div class ="counter-count">{0}</div>
        <div class ="button-container">
          <button class ="button-subtract">-</button>
          <button class ="button-add">+</button>
        </div>
    </main>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [randomDrink, setRandomDrink] = useState('random drink')

  useEffect(() => {
    changeDrink()
  }, []);
  
  function changeDrink() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(result => setRandomDrink(result.drinks[0].strDrink))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{randomDrink}</h1>
        <button onClick={() => changeDrink()}>Change</button>
      </header>
    </div>
  );
}

export default App;

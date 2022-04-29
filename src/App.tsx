import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [randomDrinkName, setRandomDrinkName] = useState('random drink')
  const [randomDrinkImage, setRandomDrinkImage] = useState('random drink')


  useEffect(() => {
    changeDrink()
  }, []);
  
  function changeDrink() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(result => {
      setRandomDrinkName(result.drinks[0].strDrink)
      setRandomDrinkImage(result.drinks[0].strDrinkThumb)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{randomDrinkName}</h1>
        <img src={randomDrinkImage}></img>
        <button onClick={() => changeDrink()}>Change</button>
      </header>
    </div>
  );
}

export default App;


import React, { useEffect, useState } from 'react';
import './App.css';
import {Grid} from './components/Grid';
import { Card } from './components/Card';

interface DrinkResponse {
  strDrink: string
  strDrinkThumb: string
}

function App() {
  const [randomDrink, setRandomDrink] = useState<DrinkResponse>()
  const [numberOfPairs, setNumberOfPairs] = useState<number>(10);

  useEffect(() => {
    changeDrink()
  }, []);
  
  function changeDrink() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(result => setRandomDrink(result.drinks[0]))
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Cocktail Pairs</h1>
        <Grid numberOfPairs={numberOfPairs}/>
        <div style={{display: 'flex'}}>
          {[randomDrink, randomDrink, randomDrink, randomDrink, randomDrink, randomDrink].map((drink: DrinkResponse | undefined, index: number) => {
            return <Card id={index} onClick={(id: number) => console.log(`id ${id} clicked`)} image={randomDrink?.strDrinkThumb} />
          })}
        </div>
        <h1>{randomDrink?.strDrink}</h1>
        <img src={randomDrink?.strDrinkThumb} alt={randomDrink?.strDrink} />
        <button onClick={() => changeDrink()}>Change</button>
      </header>
    </div>
  );
}

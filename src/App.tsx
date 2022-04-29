
import React, { useEffect, useState } from 'react';
import './App.css';
import {Grid} from './components/Grid';

export default function App() {
  const [numberOfPairs, setNumberOfPairs] = useState<number>(10);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Cocktail Pairs</h1>
        <Grid numberOfPairs={numberOfPairs}/>
        {/* <h1>{randomDrink?.strDrink}</h1>
        <img src={randomDrink?.strDrinkThumb} alt={randomDrink?.strDrink} />
        <button onClick={() => changeDrink()}>Change</button> */}
      </header>
    </div>
  );
}

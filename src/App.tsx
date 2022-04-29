import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {Cocktail} from "./models";
import './App.css';

function App() {
  const [randomCocktail, setRandomCocktail] = useState<Cocktail | undefined>(undefined);
  const [randomCocktailList, setCocktailList] = useState<Cocktail[]>();

// 20 cocktails in random order
  useEffect(() => {
    changeDrink()
  }, []);
  
  function getAndStoreRandomDrinks(noOfDrinks: number) {
    for (let i=0; i<noOfDrinks; i++) {
      
    }
  }

  function fetchNewDrink() {
    return (
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(res => res.json()))
  }

  function changeDrink() {
    fetchNewDrink()
    .then(result => {
      const newCocktail = {
        name: result.drinks[0].strDrink,
        imageUrl: result.drinks[0].strDrinkThumb
      };
      setRandomCocktail(newCocktail);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{randomCocktail?.name}</h1>
        <img src={randomCocktail?.imageUrl}></img>
        <button onClick={() => changeDrink()}>Change</button>
      </header>
    </div>
  );
}

export default App;

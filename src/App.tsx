import React, { useEffect, useState } from 'react';
import {Cocktail} from "./models";
import './App.css';
import GameScreen from "./pages/gameScreen";


let initialRandomCocktailList: Cocktail[] = [];

export default function App() {
  const [randomCocktail, setRandomCocktail] = useState<Cocktail | undefined>(undefined);
  const [randomCocktailList, setCocktailList] = useState<Cocktail[]>(initialRandomCocktailList);
  const [showPairMatchScreen, setShowPairMatchScreen] = useState<boolean>(false);
  const [numberOfPairs, setNumberOfPairs] = useState<number>(10);


// 20 cocktails in random order
  useEffect(() => {
    changeDrink()
  }, []);
  
  function getAndStoreRandomDrinks(noOfDrinks: number) {
    let fetchedRandomCocktailList : Cocktail[] = [];
    for (let i=0; i<noOfDrinks; i++) {
      fetchNewDrink()
      .then(result => {
        const newCocktail = {
          name: result.drinks[0].strDrink,
          imageUrl: result.drinks[0].strDrinkThumb
        };
        fetchedRandomCocktailList.push(newCocktail);
    })
    }
    setCocktailList(fetchedRandomCocktailList);
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

  function createAndShufflePairs(noOfDrinks: number) {
    const originalCocktailCards = [...randomCocktailList];
    const pairedCocktailCards = [...randomCocktailList];
    let shuffledCocktailCards : Cocktail[] = originalCocktailCards.concat(pairedCocktailCards);
    shuffledCocktailCards.sort(() => Math.random() - 0.5);

    return {
      shuffledCocktailCards
    };
    
  }

  function initiateGame() {
    console.log("initiate game")
    const noOfPairs = 10;
    getAndStoreRandomDrinks(noOfPairs);
    createAndShufflePairs(noOfPairs);
    setShowPairMatchScreen(true);
  }

  const onBackClicked = () => {
    setShowPairMatchScreen(false);
}

  return (
    <div className="App">
      <header className="App-header">
      { showPairMatchScreen
                            ? <GameScreen onBackClicked={onBackClicked} numberOfPairs={numberOfPairs}/>
                            : <>
                                <h1>{randomCocktail?.name}</h1>
                                <img src={randomCocktail?.imageUrl}></img>
                                <button onClick={() => changeDrink()}>Change Cocktail</button>
                                <button onClick={() => initiateGame()}>Match Pair Game</button>  
                            </>
                        }
      </header>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import {Cocktail} from "./models";
import './App.css';
import {GameScreen} from "./components/GameScreen";


export default function App() {
  const [randomCocktail, setRandomCocktail] = useState<Cocktail | undefined>(undefined);
  const [randomCocktailList, setRandomCocktailList] = useState<Cocktail[]>([]);
  const [showPairMatchScreen, setShowPairMatchScreen] = useState<boolean>(false);
  const [numberOfPairs, setNumberOfPairs] = useState<number>(10);


// 20 cocktails in random order
  useEffect(() => {
    changeDrink()
  }, []);

  useEffect(() => {
    createAndShufflePairs(10)
  }, [randomCocktailList])
  
  async function getAndStoreRandomDrinks(noOfDrinks: number) {
    const cocktailList = [];
    for (let i=0; i<noOfDrinks; i++) {
      const newCocktail = await fetchNewDrink()
        console.log(newCocktail);
        cocktailList.push(newCocktail);
    
    }
    console.log(cocktailList)
    setRandomCocktailList(cocktailList);
    //this logs an empty array because the state is constant in each function
    console.log(randomCocktailList)
  }

  async function fetchNewDrink(): Promise<Cocktail> {
    const drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    return {
      name: drink.drinks[0].strDrink,
      imageUrl: drink.drinks[0].strDrinkThumb
    };
      
  }

  async function changeDrink() {
    const newCocktail = await fetchNewDrink();
      setRandomCocktail(newCocktail);
    
  }

  function createAndShufflePairs(noOfDrinks: number) {
    const originalCocktailCards = [...randomCocktailList];
    const pairedCocktailCards = [...randomCocktailList];
    let shuffledCocktailCards : Cocktail[] = originalCocktailCards.concat(pairedCocktailCards);
    shuffledCocktailCards.sort(() => Math.random() - 0.5);
console.log(shuffledCocktailCards)
    return shuffledCocktailCards;
    
  }

  async function initiateGame() {
    console.log("initiate game")
    const noOfPairs = 10;
    await getAndStoreRandomDrinks(noOfPairs);
    setRandomCocktailList(createAndShufflePairs(noOfPairs));
    console.log(randomCocktailList)
    setShowPairMatchScreen(true);
  }

  const onBackClicked = () => {
    setShowPairMatchScreen(false);
}

  return (
    <div className="App">
      <header className="App-header">
      { showPairMatchScreen
                            ? <GameScreen onBackClicked={onBackClicked} numberOfPairs={numberOfPairs} randomCocktailList={randomCocktailList}/>
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

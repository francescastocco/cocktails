import React, { useEffect, useState } from 'react';
import '../styles/Grid.css';
import { Card } from './Card';


interface GridProps {
    numberOfPairs: number;
}

interface DrinkResponse {
    strDrink: string
    strDrinkThumb: string
  }
  

export function Grid({
    numberOfPairs}: GridProps) {
    const [drinksList, setDrinksList] = useState<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    const [selectedDrinks, setSelectedDrinks] = useState<number[]>([]);
    
  const [randomDrink, setRandomDrink] = useState<DrinkResponse>()

    useEffect(() => {
        changeDrink()
      }, []);
      
      function changeDrink() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(result => setRandomDrink(result.drinks[0]))
      }
    
    return <div className='grid-container'>
        {[randomDrink, randomDrink, randomDrink, randomDrink, randomDrink, 
          randomDrink, randomDrink, randomDrink, randomDrink, randomDrink,
          randomDrink, randomDrink, randomDrink, randomDrink, randomDrink,
          randomDrink, randomDrink, randomDrink, randomDrink, randomDrink,].map((drink: DrinkResponse | undefined, index: number) => {
            return <div className='grid-item'>
                <Card id={index} onClick={(id: number) => console.log(`id ${id} clicked`)} image={randomDrink?.strDrinkThumb} />
                </div>
          })}
    </div>
}
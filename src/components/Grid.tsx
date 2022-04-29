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
    const [drinksList, setDrinksList] = useState<DrinkResponse[]>([]);
    const [selectedDrinks, setSelectedDrinks] = useState<number[]>([]);
    
  
    useEffect(() => {
        changeDrink()
      }, []);
      
      function changeDrink() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(result => setDrinksList([
            result.drinks[0], result.drinks[0], result.drinks[0], result.drinks[0], result.drinks[0], 
            result.drinks[0], result.drinks[0], result.drinks[0], result.drinks[0], result.drinks[0],
            result.drinks[0], result.drinks[0], result.drinks[0], result.drinks[0], result.drinks[0],
            result.drinks[0], result.drinks[0], result.drinks[0], result.drinks[0], result.drinks[0]]))
      }
    
    return <div className='grid-container'>
        {drinksList.map((drink: DrinkResponse | undefined, index: number) => {
            return <div className='grid-item'>
                <Card id={index} onClick={(id: number) => console.log(`id ${id} clicked`)} image={drink?.strDrinkThumb} />
                </div>
          })}
    </div>
}
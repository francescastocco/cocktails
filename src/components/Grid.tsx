import React, { useEffect, useState } from 'react';
import internal from 'stream';
import { Cocktail } from '../models';
import '../styles/Grid.css';
import { Card } from './Card';

interface GridProps {
}

const cocktail1 = {name: 'Orange Crush', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/svsvqv1473344558.jpg'}
const cocktail2 = {name: 'Pain', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg'}
const cocktail3 = {name: 'Sadness', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg'}
const cocktail4 = {name: 'pink moon', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/lnjoc81619696191.jpg'}
const cocktail5 = {name: 'ahhhh', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/uwvyts1483387934.jpg'}
const cocktail6 = {name: 'pfewk;ojqri', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/3gz2vw1503425983.jpg'}
const cocktail7 = {name: 'pinn', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg'}
const cocktail8 = {name: 'phjhvhon', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/uwtsst1441254025.jpg'}
const cocktail9 = {name: 'pihhhhhhoon', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/of1rj41504348346.jpg'}
const cocktail10 = {name: 'pioi32uymoon', imageUrl: 'https://www.thecocktaildb.com/images/media/drink/bcsj2e1487603625.jpg'}



export function Grid({}: GridProps) {
    const [drinksList, setDrinksList] = useState<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    const [selectedDrinks, setSelectedDrinks] = useState<number[]>([]);
    const [selectedCardOneName, setselectedCardOneName] = useState<string | undefined>(undefined);
    const [foundCardIndexes, setFoundCardIndexes] = useState<number[]>([]);
    const randomCocktailList = [cocktail1, cocktail1, cocktail2, cocktail3, cocktail5, 
      cocktail8, cocktail7, cocktail8, cocktail9, cocktail10,
      cocktail4, cocktail2, cocktail7, cocktail4, cocktail6,
      cocktail6, cocktail5, cocktail9, cocktail3, cocktail10];
    

      


      const onCardPressed = (id: number, cocktailName: string) => {
        console.log(`id ${id} clicked`)
        if (foundCardIndexes?.includes(id)) {
          return
        }
        if (selectedDrinks.length === 2) {
          return
        }
        setSelectedDrinks([...selectedDrinks, id])
        if (selectedDrinks.length === 2) {
          var card1name = randomCocktailList[selectedDrinks[0]].name;
          var card2name = randomCocktailList[selectedDrinks[1]].name;

          if (card1name === card2name) {
            setFoundCardIndexes([...foundCardIndexes, ...selectedDrinks])
            setSelectedDrinks([])
          }
          else {
            setTimeout(() => {setSelectedDrinks([])}, 2000)
          }
          return
        }
        setSelectedDrinks([id])
    };
    
    return <div className='grid-container'>
        {[cocktail1, cocktail1, cocktail2, cocktail3, cocktail5, 
          cocktail8, cocktail7, cocktail8, cocktail9, cocktail10,
          cocktail4, cocktail2, cocktail7, cocktail4, cocktail6,
          cocktail6, cocktail5, cocktail9, cocktail3, cocktail10].map((drink: Cocktail, index: number) => {
            return <div className='grid-item'>
                <Card id={index} onClick={onCardPressed} flipped={foundCardIndexes.includes(index)||selectedDrinks.includes(index)} image={drink.imageUrl} name={drink.name}/>
                </div>
          })}
    </div>
}
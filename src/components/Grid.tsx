import React, { useEffect, useState } from 'react';
import '../styles/Grid.css';
import { Card } from './Card';
import {Cocktail} from '../models';

interface GridProps {
  randomCocktailList: Cocktail[];
}

export function Grid({randomCocktailList}: GridProps) {
   
    return <div className='grid-container'>
        {randomCocktailList.map((drink: Cocktail | undefined, index: number) => {
            return <div className='grid-item'>
                <Card id={index} onClick={(id: number) => console.log(`id ${id} clicked`)} image={drink?.imageUrl} />
                </div>
          })}
    </div>
}
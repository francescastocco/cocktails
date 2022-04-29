import React, { useEffect, useState } from 'react';
import '../styles/Grid.css';

interface GridProps {
    numberOfPairs: number;
}

export function Grid({
    numberOfPairs}: GridProps) {
    const [drinksList, setDrinksList] = useState<number[]>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
    const [selectedDrinks, setSelectedDrinks] = useState<number[]>([]);
    
    return <div className='grid-container'>
        {drinksList.map(c => {
            return <div className='grid-item'>{c}</div>
        })}
    </div>
}
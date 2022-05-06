import React from 'react';
import { Cocktail } from '../models';
import {Grid} from './Grid';

interface GameScreenProps {
    onBackClicked: () => void;
    numberOfPairs: number;
    randomCocktailList: Cocktail[];
}

const StyledGameScreen = `
  text-transform: uppercase;
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.2);
  border-radius: 20px;
  padding: 0 20px;
`;

export function GameScreen({onBackClicked, numberOfPairs, randomCocktailList}: GameScreenProps) {
    return (
    <div>
        <div>
            <h1>Cocktail Pairs</h1>
        </div>
        <header className="App-header">
            <Grid randomCocktailList={randomCocktailList}/>
        </header>
        <div>
            <button onClick={() => onBackClicked()}>Back</button>  
        </div>
    </div>)
}
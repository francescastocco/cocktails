import React from 'react';
import {Grid} from '../components/Grid';

interface GameScreenProps {
    onBackClicked: () => void;
    numberOfPairs: number;
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

const GameScreen: React.FC<GameScreenProps> = ({ onBackClicked , numberOfPairs}) => (
    <header className="App-header">
        <h1>Cocktail Pairs</h1>
        <Grid numberOfPairs={numberOfPairs}/>
        <button onClick={() => onBackClicked()}>Back</button>  
    </header>
);

export default GameScreen;

import React from 'react';

interface GameScreenProps {
    onBackClicked: () => void;
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

const GameScreen: React.FC<GameScreenProps> = ({ onBackClicked }) => (
    <header className="App-header">
        <h1>GameScreen</h1>
        <button onClick={() => onBackClicked()}>Back</button>  
    </header>
);

export default GameScreen;

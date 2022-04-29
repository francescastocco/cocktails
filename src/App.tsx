import React, { useEffect, useState } from 'react';
import './App.css';
import {Grid} from './components/Grid';

export default function App() {
    const [numberOfPairs, setNumberOfPairs] = useState<number>(10);
 
  return (
    <div className="App">
        <h1>Cocktail Pairs</h1>
        <Grid numberOfPairs={numberOfPairs}/>
    </div>
  );
}

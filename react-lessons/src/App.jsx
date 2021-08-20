import React, { useState, useEffect } from 'react';
import UseEffectPractice from './components/day04-challenge/useEffectPractice/useEffectPractice';
import ChuckFetch from './components/day04-challenge/ChuckFetch/ChuckFetch';
import MortyParent from './components/day04-challenge/MortyFetch/MortyParent';
import './App.css';

function App() {
  // This is a comment
  const welcomeName = 'Quinn!!!';

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      {/* <UseEffectPractice />
      <ChuckFetch /> */}
      <MortyParent />
    </div>
  );
}

export default App;

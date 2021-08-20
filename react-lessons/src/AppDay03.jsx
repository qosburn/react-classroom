import React, { useState, useEffect } from 'react';

import TenLittleMonkeys from './components/day03-challenge/TenLittleMonkeys';
import InputField from './components/day03-challenge/inputFieldDemo/inputField';
import Calculator from './components/day03-challenge/Calculator/Calculator';
import './App.css';

function App() {
  // This is a comment
  const welcomeName = 'Rob!!!';

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      {/* <TenLittleMonkeys /> */}
      {/* <InputField /> */}
      <Calculator />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
const Calculator = (props) => {
  const [number1, setNumb1] = useState(0);
  const [number2, setNumb2] = useState(0);
  const [total, setCount] = useState(0);
  function handleOnChange1(e) {
    setNumb1(+e.target.value); //+ sign will conver to a number just like writting -- pars will do the same
    console.log(Number(e.target.value));
  }
  function handleOnChange2(e) {
    setNumb2(Number(e.target.value));
    console.log(Number(e.target.value));
  }

  function calculateTotal(e) {
    console.log('Button was clicked');
    setCount(number1 + number2);
  }
  return (
    <di>
      <p>Howdy from Calculator</p>
      <input
        type="number"
        name="number 1"
        id=" "
        value={number1}
        onChange={handleOnChange1}
      />
      <input
        type="number"
        name="number 2"
        id=" "
        value={number2}
        onChange={handleOnChange2}
      />

      <h2>Total: {total}</h2>

      <button onClick={calculateTotal}>CLICK ME</button>
    </di>
  );
};

export default Calculator;

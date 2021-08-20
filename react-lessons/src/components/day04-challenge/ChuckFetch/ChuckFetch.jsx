import React, { useState, useEffect } from 'react';
const ChuckFetch = (props) => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [joke, setjoke] = useState('');
  const fetchURL = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
    setjoke(data.value);
  };
  useEffect(() => {
    fetchURL();
  }, []); // [] when page is complete runs 1

  const handleClick = (props) => {
    fetchURL();
  };
  return (
    <div>
      <p>Howdy chuck</p>
      <p>Joke:{joke}</p>
      <button onClick={handleClick}>Click for Joke</button>
    </div>
  );
};

export default ChuckFetch;

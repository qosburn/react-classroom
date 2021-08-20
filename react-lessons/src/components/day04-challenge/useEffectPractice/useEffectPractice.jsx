import React, { useState, useEffect } from 'react';
const UseEffectPractice = () => {
  const [animal, setAnimal] = useState('alligator');
  //   const [isPredator, setIsPredator] = useState(true);
  const [isPredator, setIsPredator] = useState('undefined');
  const handleClick = () => {
    setAnimal('monkey');
  };

  useEffect(() => {
    console.log(animal);
    console.log(isPredator);
    // This useEffect should only run when animal is changed
    // Use a switch to determine if the animal is a predator or not.
    // Example: Case is a Monkey you need to change the value of isPredator to false... Make a case for the alligator and change the value to isPredator to true.
    // Default case should be undefined.

    switch (animal) {
      case 'monkey':
        setIsPredator(false);

        break;
      case 'alligator':
        setIsPredator(true);
        break;
      default:
        setIsPredator(undefined);
    }
  }, [animal]); /// removed [] anytime anything changes it fires brackets can help with running when some thing is mounted -- empty [] is run when page mounted
  return (
    <div>
      <p>
        The current animal is {animal} and is set to{' '}
        {isPredator?.toString() ?? 'undefined'}
      </p>
      <button onClick={handleClick}>Click to Change Animal </button>
      {/* <button onClick={() => setIsPredator(!isPredator)}>
        Change IsPredator
      </button> */}
    </div>
  );
};

export default UseEffectPractice;

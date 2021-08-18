import React, { useState } from 'react';

const TenLittleMonkeys = () => {
  const [count, setCount] = useState(10);
  const [isDisabled, setisDisabled] = useState(false);
  function handleClick(e) {
    console.log('Button was clicked');
    setCount(count - 1);
    if (count - 1 === 10) {
      setisDisabled(true);
    }
    console.log(count);
  } //note that the count is always delayed in updating
  return (
    <div>
      <p>
        {count} Little monkeys jumping on th bed one fell off and hit his head.
      </p>
      {count > 0 ? <p>All the Monkeys fell off</p> : null}
      <button onClick={handleClick} disabled={isDisabled}>
        CLICK ME
      </button>
    </div>
  );
};

export default TenLittleMonkeys;

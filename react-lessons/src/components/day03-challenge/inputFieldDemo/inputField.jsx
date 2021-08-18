import React, { useState } from 'react';
const InputField = (props) => {
  const [username, setUsername] = useState('');
  function handleOnChange(e) {
    setUsername(e.target.value);
    console.log(e.target.value);
  }
  return (
    <di>
      <p>hellow</p>
      <input type="input" value={username} onChange={handleOnChange} />
    </di>
  );
};

export default InputField;

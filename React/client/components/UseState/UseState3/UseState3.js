import React, { useState } from "react";

const UseState3 = () => {
  /*  
  Example idea: input based switch statements for font color
  */
  const initialState = {
    loggedIn1: true,
    loggedIn2: false,
    inputVal: ""
  };
  const [state, setState] = useState(initialState);
  const handleInput = e => {
    setState(state.inputVal = e.target.value)
  };
  return (
    <div>
      <h1>useState3</h1>
      {state.loggedIn1 ? (
        <p>This paragragh is logged in since the boolean state is truthy</p>
      ) : (
        <p>This code will not be ran</p>
      )}
      {state.loggedIn2 ? (
        <p>This code will not be ran</p>
      ) : (
        <p>This paragragh is logged in since the boolean state is falsey</p>
      )}
      <input onChange={handleInput} />
    </div>
  );
};
export default UseState3;

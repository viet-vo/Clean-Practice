import React, { useState } from "react";

const UseState3 = () => {
  /*  
  This use case for useState dynamically affects the page
  */
  const initialState = {
    color: "black",
    inputVal: "",
  };
  const [input, setInput] = useState(initialState.inputVal);
  const [color, setColor] = useState(initialState.color)
  const handleInput = e => {
    setInput(e.target.value);
    setColor(e.target.value);
  };
  return (
    <div>
      <h1 style={{ color: color }}>useState3</h1>
      <p>Use case for dynamic effects</p>
      <label>Try typing in a color: </label>
      <input value={input} onChange={handleInput}></input>
    </div>
  );
};
export default UseState3;

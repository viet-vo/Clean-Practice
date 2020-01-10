import React, { useState } from "react";

const UseState3 = () => {
  const initialState = {
    loggedIn1: true,
    loggedIn2: false
  };
  const [state, setstate] = useState(initialState);
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
    </div>
  );
};
export default UseState3;

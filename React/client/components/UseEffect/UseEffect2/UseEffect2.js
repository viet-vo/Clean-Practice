import React, { useState } from "react";

const UseState2 = () => {
  const initialState = {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  };
  const [state, setstate] = useState(initialState);
  return (
    <div>
      <h1>useState2</h1>
      <p>Check the console <span>(Sidenote: could not return p tags within a ternary operator from a map function of the array in state)</span></p>
      {state.array.map(element => {
        1;
        console.log(element);
        element % 3 == 0 && element % 5 == 0 ? console.log("fizzbuzz") /*<p>fizzbuzz</p>*/ : 
        element % 3 == 0 ? console.log("fizz") /*<p>fizz</p>*/ :
        element % 5 == 0 ? console.log("buzz") /*<p>buzz</p>*/ : 
        <p>element</p>
      })}
    </div>
  );
};
export default UseState2;

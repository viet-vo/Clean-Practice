import React, { useState } from "react";

const UseState2 = () => {
  /*
  https://stackoverflow.com/questions/52886181/setstate-update-array-value-using-index-in-react
  You should always treat state as immutable
  */
  const initialState = {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  };
  // For instance, you shouldn't use setState for fizzbuzz in the state
  // here but instead you should use the state and and just adjust the
  // view of this in the render
  const [state, setState] = useState(initialState);
  const listItem = array => {
    const itemBlock = (x, index) => <li key={index}>{x}</li>;
    const items = array.map((item, index) =>
      item % 3 == 0 && item % 5 == 0
        ? itemBlock("fizzbuzz", index)
        : item % 3 == 0
        ? itemBlock("fizz", index)
        : item % 5 == 0
        ? itemBlock("buzz", index)
        : itemBlock(item, index)
    );
    return items;
  };
  return (
    <div>
      <h1>useState2</h1>
      <label>Shows how you would state to show processed information</label>
      <ul>{listItem(state.array)}</ul>
    </div>
  );
};
export default UseState2;

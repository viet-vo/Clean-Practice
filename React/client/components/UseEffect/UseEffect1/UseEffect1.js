import React, { useState } from "react";

const UseState1 = () => {
  const initialState = {
    firstName: "John",
    lastName: "Doe"
  };
  const [state, setstate] = useState(initialState);
  return (
    <div>
      <h1>useState1</h1>
      <form>
        <label>
          The value of this input tag is set using useState
          <input value={state.firstName} readOnly={true} />
        </label>
        <label>
          The value of this input tag is set using useState
          <input value={state.lastName} readOnly={true} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default UseState1;

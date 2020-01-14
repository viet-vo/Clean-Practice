import React, { useState } from "react";

const UseState1 = () => {
  /*
  https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
  Reusable function that returns the input value and the <input> itself
  example
  */
  function useInput({ type }) {
    const [value, setValue] = useState("");
    const input = (
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type={type}
      />
    );
    return [value, input];
  }
  const [username, userInput] = useInput({ type: "text" });
  const [password, passwordInput] = useInput({ type: "number" });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username + password);
  };
  return (
    <div>
      <h1>useState1</h1>
      <form>
        {"Form"}
        <>
          {userInput} -> {username} <br />
          {passwordInput} -> {password} <br />
        </>
        <button type="submit" onClick={onSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
export default UseState1;

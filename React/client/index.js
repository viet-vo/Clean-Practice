import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import UseState from "./components/pages/UseState";

function App() {
  const initialState = {
    curPage: UseState,
    pages:[UseState]
  };
  const [state, setState] = useState(initialState);
  return (
    <div>
      <ul>
        <li>
          <button onClick={console.log("test")}>useState</button>
        </li>
      </ul>
      <UseState />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

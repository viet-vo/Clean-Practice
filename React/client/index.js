import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import UseState from "./components/pages/UseState";

class App extends React.Component {
  render() {
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
}

ReactDOM.render(<App />, document.getElementById("app"));

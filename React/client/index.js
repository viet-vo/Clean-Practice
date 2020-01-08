import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import UseState1 from "./components/UseState1";
import UseState2 from "./components/UseState2";
import UseState3 from "./components/UseState3";

class App extends React.Component {
  render() {
    return (
      <div>
        <span>Hello World</span>
        <hr />
        <UseState1 />
        <hr />
        <UseState2 />
        <hr />
        <UseState3 />
        <hr />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

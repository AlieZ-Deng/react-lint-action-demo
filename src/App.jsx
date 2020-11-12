import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const qwe = "1";
  return (
    // "*.js": "eslint",
    // "*.@(css|scss)": "stylelint",
    // "src/**/*.js": "eslint",

    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        {1 === 2 && <div />}
        {qwe}
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

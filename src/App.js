import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Thomas");

  function getToBe() {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((response) => {
        setText(response.name);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={getToBe}>Click me</button>
          <p>{text}</p>
        </p>
      </header>
    </div>
  );
}

export default App;

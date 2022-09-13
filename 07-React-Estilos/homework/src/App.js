import React from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import data, { Cairns } from "./data.js";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>

      <div>
        <Cards cities={data} />
      </div>
    </div>
  );
}

export default App;

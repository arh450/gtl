import React from "react";
import MatchupCard from "./components/MatchupCard/index.js";
import Navbar from "./components/Navbar/index.js";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MatchupCard />
    </div>
  );
}

export default App;

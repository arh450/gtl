import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index.js";

import "./App.scss";
import Home from "./Pages/Home.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Router>
    </div>
  );
}

export default App;

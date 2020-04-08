import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.component";
import "./App.css";

const Hats = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;

// import logo from './logo.svg';

import "./App.css";
import Greet from "./components/Greet";
import Diwali from "./components/Diwali";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slides from "./components/Slides";
// import { StrictMode } from "react";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Greet />
          </Route>
          <Route exact path="/diwali">
            <Diwali />
          </Route>
          <Route exact path="/achievements">
            <Slides />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

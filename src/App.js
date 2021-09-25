import React from "react";
import "./App.css";
//import components
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
//react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />

        <Switch>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route exact path="/1">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

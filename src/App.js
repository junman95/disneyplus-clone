import React from "react";
import "./App.css";
//import components
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
//react-router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

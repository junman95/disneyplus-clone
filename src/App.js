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
      <Router basename={process.env.PUBLIC_URL}>
        <Header />

        <Switch>
          <Route path = "/disneyplus-clone/login">
            <Login />
          </Route>
          <Route path="/disneyplus-clone/detail">
            <Detail />
          </Route>
          <Route exact path="/disneyplus-clone/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

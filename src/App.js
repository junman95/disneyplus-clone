import React from "react";
import "./App.css";
//import components
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
//react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//redux
import { useSelector } from "react-redux"
import { selectUserName } from "./features/user/userSlice";

function App() {
  console.log("HERE: ",process.env.REACT_APP_API_KEY)
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail/:id">
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

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { createBrowserHistory } from "history";
import "./App.css";

export default function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Container fluid>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Copyright />
      </Container>
    </Router>
  );

  function Copyright() {
    return (
      <div>
        Place your name here
        <br />
        Copyright © {new Date().getFullYear()}
      </div>
    );
  }
}

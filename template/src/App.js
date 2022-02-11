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
        <Container>
        <Copyright />
        </Container>
      </Container>
    </Router>
  );

  function Copyright() {
    return (
      <Container fluid="true"  >
        <div className="text-center" >
        <span className="center-text" >Place your name here</span>
        <br />
        <span>Copyright © {new Date().getFullYear()}</span>
        </div>
      </Container>
    );
  }
}

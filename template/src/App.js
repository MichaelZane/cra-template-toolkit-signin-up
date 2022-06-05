import React from "react";
import {Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { createBrowserHistory } from "history";
import "./App.css";

export default function App() {
  const history = createBrowserHistory();

  return (
    <Routes history={history}>
      <Container fluid>
        <Header />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Container>
        <Copyright />
        </Container>
      </Container>
    </Routes>
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

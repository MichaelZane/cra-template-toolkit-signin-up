import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import './App.css';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="home" element={<Home/>} />
            <Route element={<NotFound/>} />
          </Switch>
        </Container>
        <Copyright /> 
      </Router>
    </div>
    
  );

  export function Copyright() {
    return (
      <div>
        
        Place your name here 
        <br/>
        Copyright © {new Date().getFullYear()}
              
      </div>
    )
  }

}




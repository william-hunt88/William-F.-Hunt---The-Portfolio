import logo from "./logo.svg";
import "./App.css";
import React from "react";
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'

function App() {
  return  (
  <div>
    <main>
      <Nav></Nav>
      <Portfolio></Portfolio>
    </main>
  </div>
  );
}

export default App;
